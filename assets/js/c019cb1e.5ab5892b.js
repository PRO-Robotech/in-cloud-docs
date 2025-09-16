"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4721],{285:(e,t,r)=>{r.d(t,{h:()=>a});const a={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},9792:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var a=r(34164);const s={tabItem:"tabItem_Ymn6"};var n=r(74848);function l({children:e,hidden:t,className:r}){return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,r),hidden:t,children:e})}},20736:(e,t,r)=>{r.d(t,{h:()=>s});var a=r(44349);const s={data:{value:r(60513).A`
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
    BASE_DIR="${a.M.kubernetesBaseFolderPath.value}"
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
    S3_CREDENTIALS_PATH="$\{S3_CREDENTIALS_PATH:-${a.M.kubernetesBaseFolderPath.value}/etcd/backup/s3}"
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
    `}}},65742:(e,t,r)=>{r.d(t,{$:()=>s});var a=r(44349);const s={etcdCA:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/ca.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},kubernetesControllerManagerServer:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-server.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-server.conf`,keySize:"2048",cname:"system:kube-controller-manager-server"},etcdClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/sa.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"},kubernetesSchedulerServer:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-server.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/scheduler-server.conf`,keySize:"2048",cname:"system:kube-scheduler-server"}}},68741:(e,t,r)=>{r.d(t,{M:()=>a});const a={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.12"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},76331:(e,t,r)=>{r.d(t,{A:()=>S});var a=r(96540),s=r(34164),n=r(23104),l=r(56347),c=r(205),u=r(57485),o=r(31682),i=r(70679);function d(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,a.useMemo)(()=>{const e=t??function(e){return d(e).map(({props:{value:e,label:t,attributes:r,default:a}})=>({value:e,label:t,attributes:r,default:a}))}(r);return function(e){const t=(0,o.XI)(e,(e,t)=>e.value===t.value);if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,r])}function k({value:e,tabValues:t}){return t.some(t=>t.value===e)}function p({queryString:e=!1,groupId:t}){const r=(0,l.W6)(),s=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,u.aZ)(s),(0,a.useCallback)(e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})},[s,r])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,n=h(e),[l,u]=(0,a.useState)(()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!k({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=t.find(e=>e.default)??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:n})),[o,d]=p({queryString:r,groupId:s}),[b,v]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,s]=(0,i.Dv)(t);return[r,(0,a.useCallback)(e=>{t&&s.set(e)},[t,s])]}({groupId:s}),E=(()=>{const e=o??b;return k({value:e,tabValues:n})?e:null})();(0,c.A)(()=>{E&&u(E)},[E]);return{selectedValue:l,selectValue:(0,a.useCallback)(e=>{if(!k({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),v(e)},[d,v,n]),tabValues:n}}var v=r(92303);const E={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var P=r(74848);function _({className:e,block:t,selectedValue:r,selectValue:a,tabValues:l}){const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,n.a_)(),o=e=>{const t=e.currentTarget,s=c.indexOf(t),n=l[s].value;n!==r&&(u(t),a(n))},i=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,P.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},e),children:l.map(({value:e,label:t,attributes:a})=>(0,P.jsx)("li",{role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>{c.push(e)},onKeyDown:i,onClick:o,...a,className:(0,s.A)("tabs__item",E.tabItem,a?.className,{"tabs__item--active":r===e}),children:t??e},e))})}function $({lazy:e,children:t,selectedValue:r}){const n=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=n.find(e=>e.props.value===r);return e?(0,a.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,P.jsx)("div",{className:"margin-top--md",children:n.map((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))})}function m(e){const t=b(e);return(0,P.jsxs)("div",{className:(0,s.A)("tabs-container",E.tabList),children:[(0,P.jsx)(_,{...t,...e}),(0,P.jsx)($,{...t,...e})]})}function S(e){const t=(0,v.A)();return(0,P.jsx)(m,{...e,children:d(e.children)},String(t))}},91269:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>i,metadata:()=>a,toc:()=>k});const a=JSON.parse('{"id":"tech-docs/etcd/components/etcdbrctl/backupScriptBash","title":"backupScriptBash","description":"\u0421\u043a\u0440\u0438\u043f\u0442 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0438\u0437 S3","source":"@site/docs/tech-docs/etcd/components/etcdbrctl/backupScriptBash.mdx","sourceDirName":"tech-docs/etcd/components/etcdbrctl","slug":"/tech-docs/etcd/components/etcdbrctl/backupScriptBash","permalink":"/tech-docs/etcd/components/etcdbrctl/backupScriptBash","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=r(74848),n=r(28453),l=r(44349),c=(r(285),r(68741),r(95538),r(20736)),u=r(60513),o=r(68747);r(9792),r(76331);const i={},d=void 0,h={},k=[];function p(e){const{Details:t}={...(0,n.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"\u0421\u043a\u0440\u0438\u043f\u0442 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0438\u0437 S3"})})}),(0,s.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,s.jsx)(o.A,{language:"bash",children:u.A`
  sudo mkdir -p ${l.M.kubernetesBaseFolderPath.value}/etcd/backup/s3
`}),(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0441\u043a\u0440\u0438\u043f\u0442\u0430 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f"}),(0,s.jsx)(o.A,{language:"bash",children:u.A`
  cat <<'EOF' > ${l.M.kubernetesBaseFolderPath.value}/etcd/backup/restore.sh
  ${c.h.data.value}
  EOF
`}),(0,s.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Chmod"}),(0,s.jsx)(o.A,{language:"bash",children:u.A`
  chmod +x ${l.M.kubernetesBaseFolderPath.value}/etcd/backup/restore.sh
`})]})}function b(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},95538:(e,t,r)=>{r.d(t,{D:()=>n});var a=r(65742),s=r(285);const n={name:{value:"${FULL_HOST_NAME}"},initialCluster:{value:"${ETCD_INITIAL_CLUSTER}"},initialAdvertisePeerUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${s.h.etcdPeer.portNumber}`},initialClusterToken:{value:"etcd"},initialClusterState:{value:"new"},peerCertFile:{value:`${a.$.etcdPeer.crtPath}`},peerKeyFile:{value:`${a.$.etcdPeer.keyPath}`},peerTrustedCAFile:{value:`${a.$.etcdCA.crtPath}`},peerClientCertAuth:{value:"true"},certFile:{value:`${a.$.etcdServer.crtPath}`},keyFile:{value:`${a.$.etcdServer.keyPath}`},trustedCAFile:{value:`${a.$.etcdCA.crtPath}`},listenClientUrls:{value:`https://0.0.0.0:${s.h.etcdServer.portNumber}`},listenPeerUrls:{value:`https://0.0.0.0:${s.h.etcdPeer.portNumber}`},listenMetricsUrls:{value:`http://0.0.0.0:${s.h.etcdMetricServer.portNumber}`},dataDir:{value:"/var/lib/etcd"},quotaBackendBytes:{value:"10737418240"},clientCertAuth:{value:"true"},heartbeatInterval:{value:"250"},electionTimeout:{value:"1500"},maxSnapshots:{value:"10"},maxWals:{value:"10"},autoCompactionRetention:{value:"8"},metrics:{value:"extensive"},logger:{value:"zap"},advertiseClientUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${s.h.etcdServer.portNumber}`},workDir:{value:"/tmp/etcd"},dbPath:{value:"/var/lib/etcd/member/snap/db"},snapshotCount:{value:"10000"},experimentalInitialCorruptCheck:{value:"true"},experimentalWatchProgressNotifyInterval:{value:"5s"}}}}]);