"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[120,3577,3698,3897,5397],{29213(e,t,r){r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>k,frontMatter:()=>i,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"tech-docs/etcd/components/etcd/kubeadmInit","title":"kubeadmInit","description":"Manifest generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/components/etcd/kubeadmInit.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/kubeadmInit","permalink":"/en/tech-docs/etcd/components/etcd/kubeadmInit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=r(74848),s=r(28453),c=r(44349),l=r(57390),o=r(60513);const i={},u=void 0,d={},h=[];function p(e){const t={admonition:"admonition",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h4",{children:"Manifest generation"}),"\n",(0,n.jsx)(l.A,{language:"bash",children:o.A`
  kubeadm init phase etcd local \\
    --config=${c.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(l.A,{language:"bash",children:o.A`
  #### Kube API
  [etcd] Creating static Pod manifest for local etcd in "${c.M.kubernetesBaseFolderPath.value}"
`})})]})}function k(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},52564(e,t,r){r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"tech-docs/etcd/components/etcd/setup-init-component","title":"5.1.3.1. Initialization","description":"","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/components/etcd/setupInit.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/setup-init-component","permalink":"/en/tech-docs/etcd/components/etcd/setup-init-component","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"setup-init-component"},"sidebar":"techDocs","previous":{"title":"5.1.2.2. \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b","permalink":"/en/tech-docs/etcd/certificates/all-certificates"},"next":{"title":"5.1.3.2. \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0443\u0437\u043b\u0430","permalink":"/en/tech-docs/etcd/components/etcd/setup-join-component"}}');var n=r(74848),s=r(28453),c=r(2045);const l={id:"setup-init-component"},o="5.1.3.1. Initialization",i={},u=[...c.toc];function d(e){const t={h1:"h1",header:"header",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"5131-initialization",children:"5.1.3.1. Initialization"})}),"\n",(0,n.jsx)(c.default,{})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},2045(e,t,r){r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>v,frontMatter:()=>u,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"tech-docs/etcd/components/etcd/setupInitComponent","title":"setupInitComponent","description":"This section is optional and is intended only for cases when you need to configure this resource separately from the others.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/components/etcd/setupInitComponent.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/setupInitComponent","permalink":"/en/tech-docs/etcd/components/etcd/setupInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=r(74848),s=r(28453),c=r(9792),l=r(76331),o=r(69989),i=r(29213);const u={},d=void 0,h={},p=[...o.toc,...i.toc];function k(e){const t={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,n.jsx)(t.p,{children:"This section is optional and is intended only for cases when you need to configure this resource separately from the others."})}),"\n",(0,n.jsxs)(l.A,{groupId:"install-type",children:[(0,n.jsx)(c.A,{value:"HardWay",children:(0,n.jsx)(o.default,{})}),(0,n.jsx)(c.A,{value:"Kubeadm",children:(0,n.jsx)(i.default,{})})]})]})}function v(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(k,{...e})}):k(e)}},69989(e,t,r){r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>k,default:()=>P,frontMatter:()=>p,metadata:()=>a,toc:()=>m});const a=JSON.parse('{"id":"tech-docs/etcd/components/etcd/staticPodInitComponent","title":"staticPodInitComponent","description":"Environment variables","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/components/etcd/staticPodInitComponent.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/staticPodInitComponent","permalink":"/en/tech-docs/etcd/components/etcd/staticPodInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=r(74848),s=r(28453),c=r(44349),l=r(285),o=r(68741),i=r(95538),u=r(60513),d=r(57390),h=r(98982);const p={},k=void 0,v={},m=[...h.toc];function b(e){const{Details:t}={...(0,s.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h4",{children:"Environment variables"}),"\n",(0,n.jsx)(h.default,{}),"\n",(0,n.jsx)(d.A,{language:"bash",children:u.A`
  export CLUSTER_NAME=${c.M.clusterName.value}
  export BASE_DOMAIN=${c.M.kubernetesBaseDomain.value}
  export MACHINE_LOCAL_ADDRESS=${c.M.virtualMachineLocalAddress.value}
  export FULL_HOST_NAME="${c.M.virtualMachineFullName.value}"
  export ETCD_INITIAL_CLUSTER="$\{FULL_HOST_NAME}=${i.D.initialAdvertisePeerUrls.value}"
`}),"\n",(0,n.jsx)("h4",{children:"Working directory"}),"\n",(0,n.jsx)(d.A,{language:"bash",children:u.A`
      mkdir -p ${c.M.kubernetesBaseFolderPath.value}/manifests
  `}),"\n",(0,n.jsxs)(t,{className:"custom-blue-block",children:[(0,n.jsx)("summary",{children:"Static Pod ETCD"}),(0,n.jsx)("h4",{children:"Manifest generation"}),(0,n.jsx)(d.A,{language:"bash",children:u.A`
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
      - --advertise-client-urls=${i.D.advertiseClientUrls.value}
      - --auto-compaction-retention=${i.D.autoCompactionRetention.value}
      - --cert-file=${i.D.certFile.value}
      - --client-cert-auth=${i.D.clientCertAuth.value}
      - --data-dir=${i.D.dataDir.value}
      - --election-timeout=${i.D.electionTimeout.value}
      - --experimental-initial-corrupt-check=true
      - --experimental-watch-progress-notify-interval=5s
      - --heartbeat-interval=${i.D.heartbeatInterval.value}
      - --initial-advertise-peer-urls=${i.D.initialAdvertisePeerUrls.value}
      - --initial-cluster=${i.D.initialCluster.value}
      - --key-file=${i.D.keyFile.value}
      - --listen-client-urls=${i.D.listenClientUrls.value}
      - --listen-metrics-urls=${i.D.listenMetricsUrls.value}
      - --listen-peer-urls=${i.D.listenPeerUrls.value}
      - --logger=${i.D.logger.value}
      - --max-snapshots=${i.D.maxSnapshots.value}
      - --max-wals=${i.D.maxWals.value}
      - --metrics=${i.D.metrics.value}
      - --name=${i.D.name.value}
      - --peer-cert-file=${i.D.peerCertFile.value}
      - --peer-client-cert-auth=${i.D.peerClientCertAuth.value}
      - --peer-key-file=${i.D.peerKeyFile.value}
      - --peer-trusted-ca-file=${i.D.peerTrustedCAFile.value}
      - --snapshot-count=${i.D.snapshotCount.value}
      - --quota-backend-bytes=${i.D.quotaBackendBytes.value}
      - --trusted-ca-file=${i.D.trustedCAFile.value}
      image: ${c.M.baseDockerRegistry.value}/etcd:${o.M.etcd.value}
      imagePullPolicy: IfNotPresent
      livenessProbe:
        failureThreshold: 8
        httpGet:
          host: 127.0.0.1
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
          host: 127.0.0.1
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
`})]})]})}function P(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},98982(e,t,r){r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>v,frontMatter:()=>u,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/initMaster","title":"initMaster","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/setup-environments/initMaster.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments","slug":"/tech-docs/kubernetes/setup-environments/initMaster","permalink":"/en/tech-docs/kubernetes/setup-environments/initMaster","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=r(74848),s=r(28453),c=r(9792),l=r(76331),o=r(60513),i=r(57390);const u={},d=void 0,h={},p=[];function k(e){return(0,n.jsx)(l.A,{children:(0,n.jsx)(c.A,{value:"master-1",children:(0,n.jsx)(i.A,{language:"bash",children:o.A`
        export HOST_NAME=master-1
      `})})})}function v(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(k,{...e})}):k()}},65742(e,t,r){r.d(t,{$:()=>n});var a=r(44349);const n={etcdCA:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/ca.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},kubernetesControllerManagerServer:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-server.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-server.conf`,keySize:"2048",cname:"system:kube-controller-manager-server"},etcdClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/sa.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"},kubernetesSchedulerServer:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-server.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/scheduler-server.conf`,keySize:"2048",cname:"system:kube-scheduler-server"}}},68741(e,t,r){r.d(t,{M:()=>a});const a={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.12"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},95538(e,t,r){r.d(t,{D:()=>s});var a=r(65742),n=r(285);const s={name:{value:"${FULL_HOST_NAME}"},initialCluster:{value:"${ETCD_INITIAL_CLUSTER}"},initialAdvertisePeerUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${n.h.etcdPeer.portNumber}`},initialClusterToken:{value:"etcd"},initialClusterState:{value:"new"},peerCertFile:{value:`${a.$.etcdPeer.crtPath}`},peerKeyFile:{value:`${a.$.etcdPeer.keyPath}`},peerTrustedCAFile:{value:`${a.$.etcdCA.crtPath}`},peerClientCertAuth:{value:"true"},certFile:{value:`${a.$.etcdServer.crtPath}`},keyFile:{value:`${a.$.etcdServer.keyPath}`},trustedCAFile:{value:`${a.$.etcdCA.crtPath}`},listenClientUrls:{value:`https://0.0.0.0:${n.h.etcdServer.portNumber}`},listenPeerUrls:{value:`https://0.0.0.0:${n.h.etcdPeer.portNumber}`},listenMetricsUrls:{value:`http://0.0.0.0:${n.h.etcdMetricServer.portNumber}`},dataDir:{value:"/var/lib/etcd"},quotaBackendBytes:{value:"10737418240"},clientCertAuth:{value:"true"},heartbeatInterval:{value:"250"},electionTimeout:{value:"1500"},maxSnapshots:{value:"10"},maxWals:{value:"10"},autoCompactionRetention:{value:"8"},metrics:{value:"extensive"},logger:{value:"zap"},advertiseClientUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${n.h.etcdServer.portNumber}`},workDir:{value:"/tmp/etcd"},dbPath:{value:"/var/lib/etcd/member/snap/db"},snapshotCount:{value:"10000"},experimentalInitialCorruptCheck:{value:"true"},experimentalWatchProgressNotifyInterval:{value:"5s"}}},285(e,t,r){r.d(t,{h:()=>a});const a={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}}}]);