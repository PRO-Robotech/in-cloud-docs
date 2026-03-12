"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[642,1643,5458,5559],{86170(e,t,r){r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>u,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"tech-docs/etcd/components/etcd/kubeadmJoin","title":"kubeadmJoin","description":"Manifest generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/components/etcd/kubeadmJoin.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/kubeadmJoin","permalink":"/en/tech-docs/etcd/components/etcd/kubeadmJoin","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),s=r(28453),c=r(44349),l=r(57390),o=r(60513);const u={},i=void 0,d={},h=[];function p(e){const t={admonition:"admonition",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"Manifest generation"}),"\n",(0,a.jsx)(l.A,{language:"bash",children:o.A`
  kubeadm join phase control-plane-join etcd \\
    --config=${c.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(l.A,{language:"bash",children:o.A`
  #### Kube API
  [etcd] Creating static Pod manifest for local etcd in "${c.M.kubernetesBaseFolderPath.value}"
`})})]})}function k(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},88652(e,t,r){r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"tech-docs/etcd/components/etcd/setupJoinComponent","title":"setupJoinComponent","description":"This section is optional and is intended only for cases when you need to configure this resource separately from the others.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/components/etcd/setupJoinComponent.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/setupJoinComponent","permalink":"/en/tech-docs/etcd/components/etcd/setupJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),s=r(28453),c=r(9792),l=r(76331),o=r(49695),u=r(86170);const i={},d=void 0,h={},p=[...o.toc,...u.toc];function k(e){const t={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,a.jsx)(t.p,{children:"This section is optional and is intended only for cases when you need to configure this resource separately from the others."})}),"\n",(0,a.jsxs)(l.A,{groupId:"install-type",children:[(0,a.jsx)(c.A,{value:"HardWay",children:(0,a.jsx)(o.default,{})}),(0,a.jsx)(c.A,{value:"Kubeadm",children:(0,a.jsx)(u.default,{})})]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(k,{...e})}):k(e)}},49695(e,t,r){r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>k,default:()=>P,frontMatter:()=>p,metadata:()=>n,toc:()=>v});const n=JSON.parse('{"id":"tech-docs/etcd/components/etcd/staticPodJoinComponent","title":"staticPodJoinComponent","description":"Environment variables","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/components/etcd/staticPodJoinComponent.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/staticPodJoinComponent","permalink":"/en/tech-docs/etcd/components/etcd/staticPodJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),s=r(28453),c=r(44349),l=r(285),o=r(68741),u=r(95538),i=r(60513),d=r(57390),h=r(28415);const p={},k=void 0,m={},v=[...h.toc];function b(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",strong:"strong",...(0,s.R)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"Environment variables"}),"\n",(0,a.jsx)(h.default,{}),"\n",(0,a.jsx)(d.A,{language:"bash",children:(0,i.A)(`\n  export CLUSTER_NAME=${c.M.clusterName.value}\n  export BASE_DOMAIN=${c.M.kubernetesBaseDomain.value}\n  export MACHINE_LOCAL_ADDRESS=${c.M.virtualMachineLocalAddress.value}\n  export FULL_HOST_NAME=${c.M.virtualMachineFullName.value}\n\n  # Get the list of existing etcd nodes\n  mapfile -t ETCD_PODS < <(kubectl get pods \\\n    --kubeconfig=/etc/kubernetes/admin.conf \\\n    -n kube-system -l component=etcd \\\n    -o jsonpath="{range .items[*]}{.metadata.name} {.status.podIP}{'\\n'}{end}")\n\n  ETCD_EXISTING_NODES=""\n  ETCD_ENDPOINTS=""\n\n  for entry in "\${ETCD_PODS[@]}"; do\n    read -r podname podip <<< "$entry"\n    nodename="\${podname#etcd-}"\n    ETCD_EXISTING_NODES+="\${nodename}=https://\${podip}:2380,"\n    ETCD_ENDPOINTS+="https://\${podip}:2379,"\n  done\n\n  ETCD_EXISTING_NODES="\${ETCD_EXISTING_NODES%,}"\n  ETCD_ENDPOINTS="\${ETCD_ENDPOINTS%,}"\n\n  # Add the current node if it's not in the list\n  ETCD_CURRENT_NODE="\${FULL_HOST_NAME}=https://\${MACHINE_LOCAL_ADDRESS}:2380"\n\n  if [[ "$ETCD_EXISTING_NODES" == *"\${FULL_HOST_NAME}="* ]]; then\n    export ETCD_INITIAL_CLUSTER="$ETCD_EXISTING_NODES"\n  else\n    if [[ -n "$ETCD_EXISTING_NODES" ]]; then\n      export ETCD_INITIAL_CLUSTER="\${ETCD_EXISTING_NODES},\${ETCD_CURRENT_NODE}"\n    else\n      export ETCD_INITIAL_CLUSTER="\${ETCD_CURRENT_NODE}"\n    fi\n  fi\n\n  export ETCD_ENDPOINTS\n`)}),"\n",(0,a.jsx)("h4",{children:"Working directory"}),"\n",(0,a.jsx)(d.A,{language:"bash",children:i.A`
      mkdir -p ${c.M.kubernetesBaseFolderPath.value}/manifests
  `}),"\n",(0,a.jsxs)(r,{className:"custom-blue-block",children:[(0,a.jsx)("summary",{children:"Static Pod ETCD"}),(0,a.jsx)("h4",{children:"Manifest generation"}),(0,a.jsx)(d.A,{language:"bash",children:i.A`
  cat <<EOF > ${c.M.kubernetesBaseFolderPath.value}/manifests/etcd.yaml
  apiVersion: v1
  kind: Pod
  metadata:
    annotations:
      kubeadm.kubernetes.io/etcd.advertise-client-urls: https://$\{MACHINE_LOCAL_ADDRESS}:${l.h.etcdServer.portNumber}
    creationTimestamp: null
    labels:
      component: etcd
      tier: control-plane
    name: etcd
    namespace: kube-system
  spec:
    containers:
    - command:
      - etcd
      - --advertise-client-urls=${u.D.advertiseClientUrls.value}
      - --auto-compaction-retention=${u.D.autoCompactionRetention.value}
      - --cert-file=${u.D.certFile.value}
      - --client-cert-auth=${u.D.clientCertAuth.value}
      - --data-dir=${u.D.dataDir.value}
      - --election-timeout=${u.D.electionTimeout.value}
      - --experimental-initial-corrupt-check=true
      - --experimental-watch-progress-notify-interval=5s
      - --heartbeat-interval=${u.D.heartbeatInterval.value}
      - --initial-advertise-peer-urls=${u.D.initialAdvertisePeerUrls.value}
      - --initial-cluster=${u.D.initialCluster.value}
      - --initial-cluster-state=existing
      - --key-file=${u.D.keyFile.value}
      - --listen-client-urls=${u.D.listenClientUrls.value}
      - --listen-metrics-urls=${u.D.listenMetricsUrls.value}
      - --listen-peer-urls=${u.D.listenPeerUrls.value}
      - --logger=${u.D.logger.value}
      - --max-snapshots=${u.D.maxSnapshots.value}
      - --max-wals=${u.D.maxWals.value}
      - --metrics=${u.D.metrics.value}
      - --name=${u.D.name.value}
      - --peer-cert-file=${u.D.peerCertFile.value}
      - --peer-client-cert-auth=${u.D.peerClientCertAuth.value}
      - --peer-key-file=${u.D.peerKeyFile.value}
      - --peer-trusted-ca-file=${u.D.peerTrustedCAFile.value}
      - --snapshot-count=${u.D.snapshotCount.value}
      - --quota-backend-bytes=${u.D.quotaBackendBytes.value}
      - --trusted-ca-file=${u.D.trustedCAFile.value}
      image: ${c.M.baseDockerRegistry.value}/etcd:${o.M.etcd.value}
      imagePullPolicy: IfNotPresent
      livenessProbe:
        failureThreshold: 8
        httpGet:
          host: 0.0.0.0
          path: /health?exclude=NOSPACE&serializable=true
          port: ${l.h.etcdMetricServer.portNumber}
          scheme: HTTP
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      name: etcd
      resources:
        requests:
          cpu: 100m
          memory: 100Mi
      startupProbe:
        failureThreshold: 24
        httpGet:
          host: 0.0.0.0
          path: /health?serializable=false
          port: ${l.h.etcdMetricServer.portNumber}
          scheme: HTTP
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      volumeMounts:
      - mountPath: /var/lib/etcd
        name: etcd-data
      - mountPath: ${c.M.kubernetesBaseFolderPath.value}/pki/etcd
        name: etcd-certs
    hostNetwork: true
    priority: 2000001000
    priorityClassName: system-node-critical
    securityContext:
      seccompProfile:
        type: RuntimeDefault
    volumes:
    - hostPath:
        path: ${c.M.kubernetesBaseFolderPath.value}/pki/etcd
        type: DirectoryOrCreate
      name: etcd-certs
    - hostPath:
        path: /var/lib/etcd
        type: DirectoryOrCreate
      name: etcd-data
  status: {}
  EOF
`})]}),"\n",(0,a.jsxs)(r,{className:"custom-blue-block",children:[(0,a.jsx)("summary",{children:"Expanding the ETCD cluster"}),(0,a.jsx)("h4",{children:"Adding a node"}),(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["Declare an alias for ",(0,a.jsx)(t.code,{children:"etcdctl"})," using the required certificates"]}),"\n"]}),(0,a.jsx)(d.A,{language:"bash",children:i.A`
  alias etcdctl='etcdctl \\
    --cert=/etc/kubernetes/pki/etcd/peer.crt \\
    --key=/etc/kubernetes/pki/etcd/peer.key \\
    --cacert=/etc/kubernetes/pki/etcd/ca.crt'
`}),(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Function to get the list of client URLs for all current cluster members"}),"\n"]}),(0,a.jsx)(d.A,{language:"bash",children:i.A`
  etcdctlMembers() {
    etcdctl member list -w json | \\
    jq -r '[.members[].clientURLs[]?] | join(",")'
  }
`}),(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"View the current quorum members"}),"\n"]}),(0,a.jsx)(d.A,{language:"bash",children:i.A`
  etcdctl \\
    --endpoints=$(etcdctlMembers) member list \\
    -w table
`}),(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Adding a new node to the ETCD cluster"}),"\n"]}),(0,a.jsx)(d.A,{language:"bash",children:i.A`
  etcdctl \\
    --endpoints=$(etcdctlMembers) \\
    member add $\{FULL_HOST_NAME} \\
    --peer-urls=https://$\{MACHINE_LOCAL_ADDRESS}:2380
`}),(0,a.jsx)(t.admonition,{title:"Warning",type:"danger",children:(0,a.jsxs)(t.p,{children:["After adding the second node to the ETCD quorum, the first master may become ",(0,a.jsx)(t.strong,{children:"unavailable"})," until the second ETCD node is started.\nMake sure to start ETCD on the new node using ",(0,a.jsx)(t.code,{children:"kubelet"})," (see the step below) before continuing."]})})]})]})}function P(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},28415(e,t,r){r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/secondaryMasters","title":"secondaryMasters","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/setup-environments/secondaryMasters.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments","slug":"/tech-docs/kubernetes/setup-environments/secondaryMasters","permalink":"/en/tech-docs/kubernetes/setup-environments/secondaryMasters","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),s=r(28453),c=r(9792),l=r(76331),o=r(60513),u=r(57390);const i={},d=void 0,h={},p=[];function k(e){return(0,a.jsxs)(l.A,{children:[(0,a.jsx)(c.A,{value:"master-2",children:(0,a.jsx)(u.A,{language:"bash",children:o.A`
        export HOST_NAME=master-2
      `})}),(0,a.jsx)(c.A,{value:"master-3",children:(0,a.jsx)(u.A,{language:"bash",children:o.A`
        export HOST_NAME=master-3
      `})})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(k,{...e})}):k()}},65742(e,t,r){r.d(t,{$:()=>a});var n=r(44349);const a={etcdCA:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/ca.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},kubernetesControllerManagerServer:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-server.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-server.conf`,keySize:"2048",cname:"system:kube-controller-manager-server"},etcdClient:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/sa.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"},kubernetesSchedulerServer:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-server.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/scheduler-server.conf`,keySize:"2048",cname:"system:kube-scheduler-server"}}},68741(e,t,r){r.d(t,{M:()=>n});const n={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.12"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},95538(e,t,r){r.d(t,{D:()=>s});var n=r(65742),a=r(285);const s={name:{value:"${FULL_HOST_NAME}"},initialCluster:{value:"${ETCD_INITIAL_CLUSTER}"},initialAdvertisePeerUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${a.h.etcdPeer.portNumber}`},initialClusterToken:{value:"etcd"},initialClusterState:{value:"new"},peerCertFile:{value:`${n.$.etcdPeer.crtPath}`},peerKeyFile:{value:`${n.$.etcdPeer.keyPath}`},peerTrustedCAFile:{value:`${n.$.etcdCA.crtPath}`},peerClientCertAuth:{value:"true"},certFile:{value:`${n.$.etcdServer.crtPath}`},keyFile:{value:`${n.$.etcdServer.keyPath}`},trustedCAFile:{value:`${n.$.etcdCA.crtPath}`},listenClientUrls:{value:`https://0.0.0.0:${a.h.etcdServer.portNumber}`},listenPeerUrls:{value:`https://0.0.0.0:${a.h.etcdPeer.portNumber}`},listenMetricsUrls:{value:`http://0.0.0.0:${a.h.etcdMetricServer.portNumber}`},dataDir:{value:"/var/lib/etcd"},quotaBackendBytes:{value:"10737418240"},clientCertAuth:{value:"true"},heartbeatInterval:{value:"250"},electionTimeout:{value:"1500"},maxSnapshots:{value:"10"},maxWals:{value:"10"},autoCompactionRetention:{value:"8"},metrics:{value:"extensive"},logger:{value:"zap"},advertiseClientUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${a.h.etcdServer.portNumber}`},workDir:{value:"/tmp/etcd"},dbPath:{value:"/var/lib/etcd/member/snap/db"},snapshotCount:{value:"10000"},experimentalInitialCorruptCheck:{value:"true"},experimentalWatchProgressNotifyInterval:{value:"5s"}}},285(e,t,r){r.d(t,{h:()=>n});const n={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}}}]);