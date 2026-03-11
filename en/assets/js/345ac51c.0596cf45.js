"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[1450,5480,8205,8311],{61794(e,t,r){r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/etcd/components/etcdbrctl/restoreScriptBash","title":"restoreScriptBash","description":"S3 restore script","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/components/etcdbrctl/restoreScriptBash.mdx","sourceDirName":"tech-docs/etcd/components/etcdbrctl","slug":"/tech-docs/etcd/components/etcdbrctl/restoreScriptBash","permalink":"/en/tech-docs/etcd/components/etcdbrctl/restoreScriptBash","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),n=r(28453),c=r(44349),o=(r(285),r(68741),r(95538),r(20736)),l=r(60513),u=r(57390);r(9792),r(76331);const i={},d=void 0,p={},h=[];function k(e){const{Details:t}={...(0,n.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:(0,a.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,a.jsx)("p",{style:{marginBottom:0},children:"S3 restore script"})})}),(0,a.jsx)("h4",{children:"Creating working directories"}),(0,a.jsx)(u.A,{language:"bash",children:l.A`
  sudo mkdir -p ${c.M.kubernetesBaseFolderPath.value}/etcd/backup/s3
`}),(0,a.jsx)("h4",{children:"Preparing the restore script"}),(0,a.jsx)(u.A,{language:"bash",children:l.A`
  cat <<'EOF' > ${c.M.kubernetesBaseFolderPath.value}/etcd/backup/restore.sh
  ${o.h.data.value}
  EOF
`}),(0,a.jsx)("h4",{children:"Setting permissions"}),(0,a.jsx)(u.A,{language:"bash",children:l.A`
  chmod +x ${c.M.kubernetesBaseFolderPath.value}/etcd/backup/restore.sh
`})]})}function b(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(k,{...e})}):k(e)}},47243(e,t,r){r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/etcd/components/etcdbrctl/restoreScriptCloudInit","title":"restoreScriptCloudInit","description":"S3 restore script","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/components/etcdbrctl/restoreScriptCloudInit.mdx","sourceDirName":"tech-docs/etcd/components/etcdbrctl","slug":"/tech-docs/etcd/components/etcdbrctl/restoreScriptCloudInit","permalink":"/en/tech-docs/etcd/components/etcdbrctl/restoreScriptCloudInit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),n=r(28453),c=r(44349),o=(r(285),r(68741),r(95538),r(20736)),l=r(60513),u=r(57390);r(9792),r(76331);const i={},d=void 0,p={},h=[];function k(e){const{Details:t}={...(0,n.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:(0,a.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,a.jsx)("p",{style:{marginBottom:0},children:"S3 restore script"})})}),(0,a.jsx)("h4",{children:"Preparing the restore script"}),(0,a.jsx)(u.A,{language:"bash",children:l.A`
  - path: ${c.M.kubernetesBaseFolderPath.value}/etcd/backup/restore.sh
    owner: root:root
    permissions: '0755'
    content: |
      ${o.h.data.value}

`})]})}function b(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(k,{...e})}):k(e)}},41077(e,t,r){r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>i});const s=JSON.parse('{"id":"tech-docs/etcd/components/etcdbrctl/etcd-backups","title":"5.1.3.4. Backups","description":"","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/components/etcdbrctl/setup.mdx","sourceDirName":"tech-docs/etcd/components/etcdbrctl","slug":"/tech-docs/etcd/components/etcdbrctl/etcd-backups","permalink":"/en/tech-docs/etcd/components/etcdbrctl/etcd-backups","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"etcd-backups"},"sidebar":"techDocs","previous":{"title":"5.1.3.2. \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0443\u0437\u043b\u0430","permalink":"/en/tech-docs/etcd/components/etcd/setup-join-component"},"next":{"title":"5.1.4. \u0422\u044e\u043d\u0438\u043d\u0433","permalink":"/en/tech-docs/etcd/etcd-tuning"}}');var a=r(74848),n=r(28453),c=r(54231);const o={id:"etcd-backups"},l="5.1.3.4. Backups",u={},i=[...c.toc];function d(e){const t={h1:"h1",header:"header",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"5134-backups",children:"5.1.3.4. Backups"})}),"\n",(0,a.jsx)(c.default,{})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},54231(e,t,r){r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/etcd/components/etcdbrctl/setupComponent","title":"setupComponent","description":"This script is optional but will be needed if you plan to configure ETCD cluster restoration from backups.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/components/etcdbrctl/setupComponent.mdx","sourceDirName":"tech-docs/etcd/components/etcdbrctl","slug":"/tech-docs/etcd/components/etcdbrctl/setupComponent","permalink":"/en/tech-docs/etcd/components/etcdbrctl/setupComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),n=r(28453),c=(r(44349),r(285),r(68741),r(95538),r(57390),r(9792)),o=r(76331),l=r(47243),u=r(61794);const i={},d=void 0,p={},h=[...u.toc,...l.toc];function k(e){const t={admonition:"admonition",p:"p",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.admonition,{title:"Information",type:"info",children:(0,a.jsx)(t.p,{children:"This script is optional but will be needed if you plan to configure ETCD cluster restoration from backups."})}),"\n",(0,a.jsxs)(o.A,{groupId:"install-type",children:[(0,a.jsx)(c.A,{value:"Bash",children:(0,a.jsx)(u.default,{})}),(0,a.jsx)(c.A,{value:"Cloud-init",children:(0,a.jsx)(l.default,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(k,{...e})}):k(e)}},20736(e,t,r){r.d(t,{h:()=>a});var s=r(44349);const a={data:{value:r(60513).A`
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
    BASE_DIR="${s.M.kubernetesBaseFolderPath.value}"
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
    S3_CREDENTIALS_PATH="$\{S3_CREDENTIALS_PATH:-${s.M.kubernetesBaseFolderPath.value}/etcd/backup/s3}"
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
    `}}},65742(e,t,r){r.d(t,{$:()=>a});var s=r(44349);const a={etcdCA:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/ca.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},kubernetesControllerManagerServer:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-server.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-server.conf`,keySize:"2048",cname:"system:kube-controller-manager-server"},etcdClient:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/sa.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${s.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${s.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${s.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${s.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${s.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${s.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${s.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${s.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"},kubernetesSchedulerServer:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-server.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/scheduler-server.conf`,keySize:"2048",cname:"system:kube-scheduler-server"}}},68741(e,t,r){r.d(t,{M:()=>s});const s={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.12"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},95538(e,t,r){r.d(t,{D:()=>n});var s=r(65742),a=r(285);const n={name:{value:"${FULL_HOST_NAME}"},initialCluster:{value:"${ETCD_INITIAL_CLUSTER}"},initialAdvertisePeerUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${a.h.etcdPeer.portNumber}`},initialClusterToken:{value:"etcd"},initialClusterState:{value:"new"},peerCertFile:{value:`${s.$.etcdPeer.crtPath}`},peerKeyFile:{value:`${s.$.etcdPeer.keyPath}`},peerTrustedCAFile:{value:`${s.$.etcdCA.crtPath}`},peerClientCertAuth:{value:"true"},certFile:{value:`${s.$.etcdServer.crtPath}`},keyFile:{value:`${s.$.etcdServer.keyPath}`},trustedCAFile:{value:`${s.$.etcdCA.crtPath}`},listenClientUrls:{value:`https://0.0.0.0:${a.h.etcdServer.portNumber}`},listenPeerUrls:{value:`https://0.0.0.0:${a.h.etcdPeer.portNumber}`},listenMetricsUrls:{value:`http://0.0.0.0:${a.h.etcdMetricServer.portNumber}`},dataDir:{value:"/var/lib/etcd"},quotaBackendBytes:{value:"10737418240"},clientCertAuth:{value:"true"},heartbeatInterval:{value:"250"},electionTimeout:{value:"1500"},maxSnapshots:{value:"10"},maxWals:{value:"10"},autoCompactionRetention:{value:"8"},metrics:{value:"extensive"},logger:{value:"zap"},advertiseClientUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${a.h.etcdServer.portNumber}`},workDir:{value:"/tmp/etcd"},dbPath:{value:"/var/lib/etcd/member/snap/db"},snapshotCount:{value:"10000"},experimentalInitialCorruptCheck:{value:"true"},experimentalWatchProgressNotifyInterval:{value:"5s"}}},285(e,t,r){r.d(t,{h:()=>s});const s={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}}}]);