"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[2814],{55419(e,t,r){r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>i});const a=JSON.parse('{"id":"tech-docs/etcd/components/etcdbrctl/payload/staticPodInstall","title":"staticPodInstall","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f (\u043e\u0431\u0449\u0438\u0435)","source":"@site/docs/tech-docs/etcd/components/etcdbrctl/payload/staticPodInstall.mdx","sourceDirName":"tech-docs/etcd/components/etcdbrctl/payload","slug":"/tech-docs/etcd/components/etcdbrctl/payload/staticPodInstall","permalink":"/tech-docs/etcd/components/etcdbrctl/payload/staticPodInstall","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=r(74848),l=r(28453),c=r(44349),n=(r(285),r(68741),r(95538),r(60513)),u=r(57390);r(9792),r(76331);const o={},d=void 0,k={},i=[];function h(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f (\u043e\u0431\u0449\u0438\u0435)"}),"\n",(0,s.jsx)(u.A,{language:"bash",children:n.A`
  # Общее
  export CLUSTER_NAME=${c.M.clusterName.value}
  export NAMESPACE=etcd-backup

  # Параметры хранения
  export STORE_CONTAINER="etcd-backups"
  export STORE_PREFIX="etcd-\${CLUSTER_NAME}"

  # Параметры расписания / ротации
  export FULL_SCHEDULE='0 */4 * * *'
  export DELTA_PERIOD='1h'
  export MAX_BACKUPS=6
  export GC_POLICY="LimitBased"
  export GC_PERIOD="30m"

  # Пути на хосте
  export MANIFEST_DIR="${c.M.kubernetesBaseFolderPath.value}/manifests"
  export S3_CREDS_DIR="${c.M.kubernetesBaseFolderPath.value}/etcd/backup/s3"
  export ETCD_PKI_DIR="${c.M.kubernetesBaseFolderPath.value}/pki/etcd"
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f (S3)"}),"\n",(0,s.jsx)(u.A,{language:"bash",children:n.A`
  export S3_REGION="us-east-1"
  export S3_ACCESS_KEY_ID="<your-access-key>"
  export S3_SECRET_ACCESS_KEY="<your-secret-key>"
  export S3_ENDPOINT="https://s3.example.com"
  export S3_FORCE_PATH_STYLE="true"
`}),"\n",(0,s.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),"\n",(0,s.jsx)(u.A,{language:"bash",children:n.A`
  sudo mkdir -p ${c.M.kubernetesBaseFolderPath.value}/etcd/backup/s3
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 S3 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"}),"\n",(0,s.jsx)(u.A,{language:"bash",children:n.A`
  # Записываем креды в файлы
  printf '%s' "$\{S3_REGION}"            | sudo tee "${c.M.kubernetesBaseFolderPath.value}/etcd/backup/s3/region" >/dev/null
  printf '%s' "$\{S3_ACCESS_KEY_ID}"     | sudo tee "${c.M.kubernetesBaseFolderPath.value}/etcd/backup/s3/accessKeyID" >/dev/null
  printf '%s' "$\{S3_SECRET_ACCESS_KEY}" | sudo tee "${c.M.kubernetesBaseFolderPath.value}/etcd/backup/s3/secretAccessKey" >/dev/null
  printf '%s' "$\{S3_ENDPOINT}"          | sudo tee "${c.M.kubernetesBaseFolderPath.value}/etcd/backup/s3/endpoint" >/dev/null
  printf '%s' "$\{S3_FORCE_PATH_STYLE}"  | sudo tee "${c.M.kubernetesBaseFolderPath.value}/etcd/backup/s3/s3ForcePathStyle" >/dev/null
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 etcd-config"}),"\n",(0,s.jsx)(u.A,{language:"bash",children:n.A`
  cat <<EOF > ${c.M.kubernetesBaseFolderPath.value}/etcd/backup/etcd.conf.yaml
  name: default
  data-dir: default.etcd
  listen-client-urls: http://127.0.0.1:2379
  listen-peer-urls:   http://127.0.0.1:2380

  initial-advertise-peer-urls:
    default:
      - http://127.0.0.1:2380

  initial-cluster: default=http://127.0.0.1:2380
  initial-cluster-token: etcd-cluster
  initial-cluster-state: new
  EOF
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f static pod \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,s.jsx)(u.A,{language:"bash",children:n.A`
  sudo tee "\${MANIFEST_DIR}/etcd-backup.yaml" > /dev/null <<EOF
  apiVersion: v1
  kind: Pod
  metadata:
    name: etcd-backup-snapshot
    namespace: kube-system
    labels:
      app: etcd-backup-snapshot
  spec:
    hostNetwork: true
    dnsPolicy: ClusterFirstWithHostNet
    containers:
      - name: etcdbrctl
        image: europe-docker.pkg.dev/gardener-project/releases/gardener/etcdbrctl:v0.36.3
        command: ["/etcdbrctl","server"]
        args:
          - --use-etcd-wrapper=false
          - --schedule=\${FULL_SCHEDULE}
          - --delta-snapshot-period=\${DELTA_PERIOD}
          - --storage-provider=S3
          - --store-container=\${STORE_CONTAINER}
          - --store-prefix=\${STORE_PREFIX}
          - --max-backups=\${MAX_BACKUPS}
          - --garbage-collection-policy=\${GC_POLICY}
          - --garbage-collection-period=\${GC_PERIOD}
          - --compression-policy=gzip
          - --compress-snapshots=true
          - --etcd-snapshot-timeout=8m
          - --etcd-defrag-timeout=8m
          - --etcd-connection-timeout=30s
          - --delta-snapshot-memory-limit=204857600
          - --endpoints=https://\$(NODE_IP):2379
          - --server-port=18080
          - --cacert=/etc/etcd-pki/ca.crt
          - --cert=/etc/etcd-pki/healthcheck-client.crt
          - --key=/etc/etcd-pki/healthcheck-client.key
          - --max-parallel-chunk-uploads=1
          - --min-chunk-size=16777212
          - --defragmentation-schedule=0 0 */3 * *
        env:
          - name: NODE_IP
            valueFrom:
              fieldRef:
                fieldPath: status.hostIP
          - name: POD_NAME
            valueFrom:
              fieldRef:
                fieldPath: metadata.name
          - name: POD_NAMESPACE
            valueFrom:
              fieldRef:
                fieldPath: metadata.namespace
          - name: AWS_APPLICATION_CREDENTIALS
            value: /var/etcd-backup
          - name: AWS_ENDPOINT_URL_S3
            value: "\${S3_ENDPOINT}"
        volumeMounts:
          - name: etcd-pki
            mountPath: /etc/etcd-pki
            readOnly: true
          - name: etcd-backup
            mountPath: /var/etcd-backup
            readOnly: true
          - name: etcd-config
            mountPath: /var/etcd/config
            readOnly: true
    volumes:
      - name: etcd-pki
        hostPath:
          path: "\${ETCD_PKI_DIR}"
          type: Directory
      - name: etcd-backup
        hostPath:
          path: "\${S3_CREDS_DIR}"
          type: Directory
      - name: etcd-config
        hostPath:
          path: "${c.M.kubernetesBaseFolderPath.value}/etcd/backup/etcd.conf.yaml"
          type: File
  EOF
`})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h()}},65742(e,t,r){r.d(t,{$:()=>s});var a=r(44349);const s={etcdCA:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/ca.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},kubernetesControllerManagerServer:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-server.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-server.conf`,keySize:"2048",cname:"system:kube-controller-manager-server"},etcdClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/sa.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"},kubernetesSchedulerServer:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-server.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/scheduler-server.conf`,keySize:"2048",cname:"system:kube-scheduler-server"}}},68741(e,t,r){r.d(t,{M:()=>a});const a={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.12"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},95538(e,t,r){r.d(t,{D:()=>l});var a=r(65742),s=r(285);const l={name:{value:"${FULL_HOST_NAME}"},initialCluster:{value:"${ETCD_INITIAL_CLUSTER}"},initialAdvertisePeerUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${s.h.etcdPeer.portNumber}`},initialClusterToken:{value:"etcd"},initialClusterState:{value:"new"},peerCertFile:{value:`${a.$.etcdPeer.crtPath}`},peerKeyFile:{value:`${a.$.etcdPeer.keyPath}`},peerTrustedCAFile:{value:`${a.$.etcdCA.crtPath}`},peerClientCertAuth:{value:"true"},certFile:{value:`${a.$.etcdServer.crtPath}`},keyFile:{value:`${a.$.etcdServer.keyPath}`},trustedCAFile:{value:`${a.$.etcdCA.crtPath}`},listenClientUrls:{value:`https://0.0.0.0:${s.h.etcdServer.portNumber}`},listenPeerUrls:{value:`https://0.0.0.0:${s.h.etcdPeer.portNumber}`},listenMetricsUrls:{value:`http://0.0.0.0:${s.h.etcdMetricServer.portNumber}`},dataDir:{value:"/var/lib/etcd"},quotaBackendBytes:{value:"10737418240"},clientCertAuth:{value:"true"},heartbeatInterval:{value:"250"},electionTimeout:{value:"1500"},maxSnapshots:{value:"10"},maxWals:{value:"10"},autoCompactionRetention:{value:"8"},metrics:{value:"extensive"},logger:{value:"zap"},advertiseClientUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${s.h.etcdServer.portNumber}`},workDir:{value:"/tmp/etcd"},dbPath:{value:"/var/lib/etcd/member/snap/db"},snapshotCount:{value:"10000"},experimentalInitialCorruptCheck:{value:"true"},experimentalWatchProgressNotifyInterval:{value:"5s"}}},285(e,t,r){r.d(t,{h:()=>a});const a={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}}}]);