import { CUSTOM_VALUE } from '@site/src/constants/kubernetes/customValue'
import { TCustomValueItems } from '@site/src/customTypes/customValue'
import dedent from 'ts-dedent'

export const BACKUP_SCRIPT: TCustomValueItems = {
  data: {
    value: dedent`
    #!/bin/bash
    set -euo pipefail
    IFS=$'\\n\\t'
    umask 077

    # === Логирование / аварийное восстановление ===
    log() { printf '[%s] %s\\n' "$(date +%F' '%T)" "$*"; }
    die() { echo "ERROR: $*" >&2; exit 1; }

    rollback() {
      set +e
      log "rollback: trying to restore original manifest"
      if [[ -f "\${ORIG_BACKUP}" ]]; then
        mv -f "\${ORIG_BACKUP}" "\${ORIG_MANIFEST}"
        log "rollback: manifest restored from backup"
      elif [[ -f "\${MOVED_MANIFEST}" ]]; then
        mv -f "\${MOVED_MANIFEST}" "\${ORIG_MANIFEST}"
        log "rollback: staged manifest moved back"
      else
        log "rollback: nothing to restore"
      fi
      return 0
    }

    on_err() {
      local line="$1"
      echo "ERROR: failed at line \${line}, stage=\${STAGE:-unknown}" >&2
      rollback || true
      exit 1
    }
    trap 'on_err $LINENO' ERR INT TERM

    # === Инструменты ===


    # === Обязательные переменные ===
    [[ -n "\${S3_BUCKET:-}" ]] || die "S3_BUCKET is required"
    [[ -n "\${S3_PREFIX:-}" ]] || die "S3_PREFIX is required"

    # === Параметры кластера ===
    CURRENT_IP="$\{CURRENT_IP:-$(ip -o -4 addr show dev eth1 | awk '{print $4}' | cut -d/ -f1)}"
    CURRENT_HOSTNAME="$(hostname)"
    PEER_PORT="$\{PEER_PORT:-2380}"

    NODE_NAME_1="$\{NODE_NAME_1}"
    NODE_IP_1="$\{NODE_IP_1}"
    NODE_NAME_2="$\{NODE_NAME_2}"
    NODE_IP_2="$\{NODE_IP_2}"
    NODE_NAME_3="$\{NODE_NAME_3}"
    NODE_IP_3="$\{NODE_IP_3}"

    # === initial-cluster ===
    INITIAL_CLUSTER="$\{NODE_NAME_1}=https://$\{NODE_IP_1}:$\{PEER_PORT},$\{NODE_NAME_2}=https://$\{NODE_IP_2}:$\{PEER_PORT},$\{NODE_NAME_3}=https://$\{NODE_IP_3}:$\{PEER_PORT}"

    # === Уникальная дата до секунд ===
    DATE_NOW="$(date +%Y%m%d)"
    ETCD_RESTORE_DIR="/var/lib/etcd-restore-\${DATE_NOW}"

    install -d -m 0755 "$\{ETCD_RESTORE_DIR}"

    # === Пути ===
    BASE_DIR="${CUSTOM_VALUE.kubernetesBaseFolderPath.value}"
    ORIG_MANIFEST="$\{BASE_DIR}/manifests/etcd.yaml"
    BACKUP_DIR="$\{BASE_DIR}/etcd/backup"
    MOVED_MANIFEST="$\{BACKUP_DIR}/etcd.yaml.staged"
    ORIG_BACKUP="$\{BACKUP_DIR}/etcd.yaml.orig-\${DATE_NOW}"
    install -d -m 0700 "$\{BACKUP_DIR}"
    [[ -f "$\{ORIG_MANIFEST}" ]] || die "manifest not found: $\{ORIG_MANIFEST}"

    # === S3 ===
    S3_REGION="$\{S3_REGION:-us-east-1}"
    S3_ACCESS_KEY_ID="$\{S3_ACCESS_KEY_ID:-}"
    S3_SECRET_ACCESS_KEY="$\{S3_SECRET_ACCESS_KEY:-}"
    S3_ENDPOINT="$\{S3_ENDPOINT:-https://s3.example.com}"
    S3_FORCE_PATH_STYLE="$\{S3_FORCE_PATH_STYLE:-true}"
    S3_CREDENTIALS_PATH="$\{S3_CREDENTIALS_PATH:-${CUSTOM_VALUE.kubernetesBaseFolderPath.value}/etcd/backup/s3}"
    install -d -m 0700 "$\{S3_CREDENTIALS_PATH}"

    declare -A CONFIG=(
      [region]="$\{S3_REGION}"
      [secretAccessKey]="$\{S3_SECRET_ACCESS_KEY}"
      [accessKeyID]="$\{S3_ACCESS_KEY_ID}"
      [endpoint]="$\{S3_ENDPOINT}"
      [s3ForcePathStyle]="$\{S3_FORCE_PATH_STYLE}"
    )
    for key in "$\{!CONFIG[@]}"; do
      printf '%s' "$\{CONFIG[$key]}" > "$\{S3_CREDENTIALS_PATH}/$key"
    done

    export AWS_APPLICATION_CREDENTIALS="$\{S3_CREDENTIALS_PATH}"
    export AWS_ENDPOINT_URL_S3="$\{S3_ENDPOINT}"

    # === Этап 1: подготовка (бэкап и вынос манифеста) ===
    STAGE="stage:backup-manifest"
    log "backup original manifest -> $\{ORIG_BACKUP}"
    cp -a "$\{ORIG_MANIFEST}" "$\{ORIG_BACKUP}"

    STAGE="stage:move-manifest"
    log "move manifest to staging -> $\{MOVED_MANIFEST}"
    mv "$\{ORIG_MANIFEST}" "$\{MOVED_MANIFEST}"

    # === Этап 2: остановка текущего etcd ===
    STAGE="stage:stop-etcd"
    crictl ps \\
      --label io.kubernetes.container.name=etcd \\
      --label io.kubernetes.pod.namespace=kube-system \\
      -o json \\
    | jq -r '.containers[0].id // empty' \\
    | xargs -r crictl stop || true

    # === Этап 3: восстановление данных через контейнер etcdbrctl ===
    STAGE="stage:etcdbrctl-restore"
    log "run etcdbrctl restore (via container) -> $\{ETCD_RESTORE_DIR}"

    # Имя временного контейнера
    RESTORE_CONTAINER_ID="etcd-restore-$\{DATE_NOW}"

    IMAGE="europe-docker.pkg.dev/gardener-project/releases/gardener/etcdbrctl:v0.36.3"
    CONTAINER_ID="etcd-restore-$\{DATE_NOW}"

    # Запускаем контейнер с пробросом всего необходимого
    ctr image pull "$\{IMAGE}"

    ctr run \\
      --rm \\
      --privileged \\
      --user 0:0 \\
      --net-host \\
      --mount type=bind,src="$\{ETCD_RESTORE_DIR}",dst=/var/etcd,options=rbind:rw \\
      --mount type=bind,src="$\{S3_CREDENTIALS_PATH}",dst=/var/etcd-backup,options=rbind:ro \\
      --mount type=bind,src=/etc/kubernetes/pki/etcd,dst=/etc/kubernetes/pki/etcd,options=rbind:ro \\
      --env AWS_APPLICATION_CREDENTIALS=/var/etcd-backup \\
      --env AWS_ENDPOINT_URL_S3="$\{S3_ENDPOINT}" \\
      --env S3_REGION="$\{S3_REGION}" \\
      --env S3_ACCESS_KEY_ID="$\{S3_ACCESS_KEY_ID}" \\
      --env S3_SECRET_ACCESS_KEY="$\{S3_SECRET_ACCESS_KEY}" \\
      --env S3_FORCE_PATH_STYLE="$\{S3_FORCE_PATH_STYLE}" \\
      "$\{IMAGE}" "$\{CONTAINER_ID}" \\
      /etcdbrctl restore \\
        --storage-provider=S3 \\
        --store-container="$\{S3_BUCKET}" \\
        --store-prefix="$\{S3_PREFIX}" \\
        --data-dir=/var/etcd/restore \\
        --initial-cluster="$\{INITIAL_CLUSTER}" \\
        --initial-advertise-peer-urls="https://$\{CURRENT_IP}:$\{PEER_PORT}" \\
        --name="$\{CURRENT_HOSTNAME}"

    # === Этап 4: патчим staged-манифест под новую директорию ===
    STAGE="stage:patch-staged-manifest"
    log "patch staged manifest hostPath to $\{ETCD_RESTORE_DIR}"

    # Определяем вариант yq
    if yq --version 2>&1 | grep -qi 'mikefarah'; then
      # mikefarah yq v4: env(VAR)
      ETCD_RESTORE_DIR="$\{ETCD_RESTORE_DIR}" \
      yq -i '(.spec.volumes[] | select(.name == "etcd-data") | .hostPath.path) = env(ETCD_RESTORE_DIR)' \
        "\${MOVED_MANIFEST}"
    else
      # jq-based yq (kislyuk): env.VAR, без -i (надёжнее через временный файл)
      ETCD_RESTORE_DIR="$\{ETCD_RESTORE_DIR}" \
      yq -y '(.spec.volumes[] | select(.name=="etcd-data") | .hostPath.path) = env.ETCD_RESTORE_DIR' \
        "$\{MOVED_MANIFEST}" > "$\{MOVED_MANIFEST}.tmp"
      mv -f "$\{MOVED_MANIFEST}.tmp" "$\{MOVED_MANIFEST}"
    fi

    # === Этап 5: возвращаем манифест на место (kubelet поднимет pod) ===
    STAGE="stage:return-manifest"
    log "return manifest to manifests/"
    mv -f "$\{MOVED_MANIFEST}" "$\{ORIG_MANIFEST}"

    log "done; original manifest backup: $\{ORIG_BACKUP}"
    `,
  },
}
