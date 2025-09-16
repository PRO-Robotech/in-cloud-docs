"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[243,983,3536,6739,8034],{285:(e,t,a)=>{a.d(t,{h:()=>r});const r={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},9792:(e,t,a)=>{a.d(t,{A:()=>l});a(96540);var r=a(34164);const o={tabItem:"tabItem_Ymn6"};var n=a(74848);function l({children:e,hidden:t,className:a}){return(0,n.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,a),hidden:t,children:e})}},14928:(e,t,a)=>{a.d(t,{Ay:()=>c,RM:()=>s});var r=a(74848),o=a(28453),n=a(44349),l=a(68747),u=a(60513);const s=[];function i(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{title:"\u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"danger",children:(0,r.jsx)(t.p,{children:"\u0418\u043c\u0435\u0439\u0442\u0435 \u0432 \u0432\u0438\u0434\u0443: \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 Join \u043d\u0435\u043b\u044c\u0437\u044f \u0432\u044b\u0431\u0440\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u044b \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u2014 kubeadm \u0441\u043e\u0437\u0434\u0430\u0451\u0442 \u0438\u0445 \u0432\u0441\u0435 \u0441\u0440\u0430\u0437\u0443, \u0432 \u043f\u043e\u043b\u043d\u043e\u043c \u043e\u0431\u044a\u0451\u043c\u0435."})}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,r.jsx)(l.A,{language:"bash",children:u.A`
  kubeadm join phase control-plane-prepare control-plane \\
    --config=${n.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(l.A,{language:"bash",children:u.A`
  [preflight] Reading configuration from the cluster...
  [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
  [control-plane] Using manifest folder "/etc/kubernetes/manifests"
  [control-plane] Creating static Pod manifest for "kube-apiserver"
  [control-plane] Creating static Pod manifest for "kube-controller-manager"
  [control-plane] Creating static Pod manifest for "kube-scheduler"
`})})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},32714:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>v,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/setup","title":"Kubernetes API","description":"","source":"@site/docs/tech-docs/kubernetes/components/kubeAPI/setup.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/setup","permalink":"/tech-docs/kubernetes/components/kubeAPI/setup","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=a(74848),n=a(28453),l=a(82198),u=a(77517);const s={},i="Kubernetes API",c={},d=[...l.toc,...u.toc];function h(e){const t={h1:"h1",header:"header",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"kubernetes-api",children:"Kubernetes API"})}),"\n",(0,o.jsx)(l.default,{}),"\n",(0,o.jsx)(u.default,{})]})}function v(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},56223:(e,t,a)=>{a.d(t,{L:()=>l});var r=a(65742),o=a(285),n=a(44349);const l={etcdCafile:{value:`${r.$.etcdCA.crtPath}`},etcdCertfile:{value:`${r.$.kubernetesEtcdClient.crtPath}`},etcdKeyfile:{value:`${r.$.kubernetesEtcdClient.keyPath}`},certDir:{value:"/var/run/kubernetes"},kubeletClientCertificate:{value:`${r.$.kubernetesKubeletClient.crtPath}`},kubeletClientKey:{value:`${r.$.kubernetesKubeletClient.keyPath}`},clientCAFile:{value:`${r.$.kubernetesCA.crtPath}`},proxyClientCertFile:{value:`${r.$.kubernetesFrontProxyClient.crtPath}`},proxyClientKeyFile:{value:`${r.$.kubernetesFrontProxyClient.keyPath}`},tlsCertFile:{value:`${r.$.kubernetesServer.crtPath}`},tlsPrivateKeyFile:{value:`${r.$.kubernetesServer.keyPath}`},clientCaFile:{value:`${r.$.kubernetesCA.crtPath}`},serviceAccountKeyFile:{value:`${r.$.kubernetesSA.crtPath}`},requestheaderClientCaFile:{value:`${r.$.frontProxyCA.crtPath}`},serviceAccountSigningKeyFile:{value:`${r.$.kubernetesSA.keyPath}`},aggregatorRejectForwardingRedirect:{value:"true"},allowPrivileged:{value:"true"},anonymousAuth:{value:"true"},auditLogBatchThrottleEnable:{value:"false"},auditLogCompress:{value:"false"},auditLogTruncateEnabled:{value:"false"},auditWebhookBatchThrottleEnable:{value:"true"},auditWebhookTruncateEnabled:{value:"false"},contentionProfiling:{value:"false"},enableAggregatorRouting:{value:"true"},enableBootstrapTokenAuth:{value:"true"},enableGarbageCollector:{value:"true"},enableLogsHandler:{value:"true"},enablePriorityAndFairness:{value:"true"},encryptionProviderConfigAutomaticReload:{value:"false"},help:{value:"false"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},version:{value:"false"},watchCache:{value:"true"},logTextSplitStream:{value:"false"},shutdownSendRetryAfter:{value:"false"},logJsonSplitStream:{value:"false"},serviceAccountExtendTokenExpiration:{value:"true"},serviceAccountLookup:{value:"true"},apiserverCount:{value:"1"},auditLogBatchBufferSize:{value:"10000"},auditLogBatchMaxSize:{value:"1"},auditLogBatchThrottleBurst:{value:"0"},auditLogBatchThrottleQps:{value:"0"},auditLogMaxage:{value:"30"},auditLogMaxbackup:{value:"10"},auditLogMaxsize:{value:"1000"},auditLogTruncateMaxBatchSize:{value:"10485760"},auditLogTruncateMaxEventSize:{value:"102400"},auditWebhookBatchBufferSize:{value:"10000"},auditWebhookBatchMaxSize:{value:"400"},auditWebhookBatchThrottleBurst:{value:"15"},auditWebhookBatchThrottleQps:{value:"10"},auditWebhookTruncateMaxBatchSize:{value:"10485760"},auditWebhookTruncateMaxEventSize:{value:"102400"},defaultNotReadyTolerationSeconds:{value:"300"},defaultUnreachableTolerationSeconds:{value:"300"},defaultWatchCacheSize:{value:"100"},deleteCollectionWorkers:{value:"1"},kubernetesServiceNodePort:{value:"0"},leaseReuseDurationSeconds:{value:"60"},maxMutatingRequestsInflight:{value:"200"},maxRequestsInflight:{value:"400"},minRequestTimeout:{value:"1800"},goawayChance:{value:"0"},http2MaxStreamsPerConnection:{value:"0"},v:{value:"2"},logJsonInfoBufferSize:{value:"0"},logTextInfoBufferSize:{value:"0"},maxConnectionBytesPerSec:{value:"0"},kubeletPort:{value:`${o.h.kubeletServer.portNumber}`},securePort:{value:`${o.h.kubeAPIServer.portNumber}`},kubeletReadOnlyPort:{value:`${o.h.kubeletReadOnlyPort.portNumber}`},serviceNodePortRange:{value:"30000-32767"},etcdServers:{value:`https://127.0.0.1:${o.h.etcdServer.portNumber}`},serviceAccountIssuer:{value:`https://kubernetes.default.svc.${n.M.kubernetesClusterDomain.value}`},serviceClusterIpRange:{value:`${n.M.kubernetesServiceCIDR.value}`},auditWebhookInitialBackoff:{value:"10s"},auditWebhookBatchMaxWait:{value:"30s"},serviceAccountMaxTokenExpiration:{value:"0s"},shutdownWatchTerminationGracePeriod:{value:"0s"},shutdownDelayDuration:{value:"0s"},requestTimeout:{value:"1m0s"},eventTtl:{value:"1h0m0s"},livezGracePeriod:{value:"0s"},logFlushFrequency:{value:"5s"},kubeletTimeout:{value:"5s"},etcdCompactionInterval:{value:"5m0s"},etcdCountMetricPollPeriod:{value:"1m0s"},etcdDbMetricPollInterval:{value:"30s"},etcdHealthcheckTimeout:{value:"2s"},etcdReadycheckTimeout:{value:"2s"},authenticationTokenWebhookCacheTtl:{value:"2m0s"},authorizationWebhookCacheAuthorizedTtl:{value:"5m0s"},authorizationWebhookCacheUnauthorizedTtl:{value:"30s"},auditWebhookBatchInitialBackoff:{value:"10s"},auditLogBatchMaxWait:{value:"0s"},bindAddress:{value:"0.0.0.0"},cloudProviderGceL7lbSrcCidrs:{value:"130.211.0.0/22,35.191.0.0/16"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},apiAudiences:{value:"konnectivity-server"},loggingFormat:{value:"text"},auditLogFormat:{value:"json"},auditLogMode:{value:"batch"},auditWebhookMode:{value:"batch"},auditLogVersion:{value:"audit.k8s.io/v1"},auditWebhookVersion:{value:"audit.k8s.io/v1"},authenticationTokenWebhookVersion:{value:"v1beta1"},authorizationMode:{value:"Node,RBAC"},authorizationWebhookVersion:{value:"v1beta1"},cloudProvider:{value:"external"},enableAdmissionPlugins:{value:"NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,PodSecurity"},endpointReconcilerType:{value:"lease"},storageMediaType:{value:"application/vnd.kubernetes.protobuf"},etcdPrefix:{value:"/registry"},featureGates:{value:"RotateKubeletServerCertificate=true"},kubeletPreferredAddressTypes:{value:"InternalIP,ExternalIP,Hostname"},oidcSigningAlgs:{value:"RS256"},oidcUsernameClaim:{value:"sub"},requestheaderAllowedNames:{value:"front-proxy-client"},requestheaderExtraHeadersPrefix:{value:"X-Remote-Extra-"},requestheaderGroupHeaders:{value:"X-Remote-Group"},requestheaderUsernameHeaders:{value:"X-Remote-User"},runtimeConfig:{value:"api/all=true"},storageBackend:{value:"etcd3"},auditPolicyFile:{value:`${n.M.kubernetesAPIAuditPolicyPath.value}`},auditLogPath:{value:`${n.M.kubernetesAPIAuditLogPath.value}`},advertiseAddress:{value:""},admissionControl:{value:""},admissionControlConfigFile:{value:""},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},auditWebhookConfigFile:{value:""},authenticationConfig:{value:""},authenticationTokenWebhookConfigFile:{value:""},authorizationConfig:{value:""},authorizationPolicyFile:{value:""},authorizationWebhookConfigFile:{value:""},cloudConfig:{value:""},corsAllowedOrigins:{value:""},debugSocketPath:{value:""},disableAdmissionPlugins:{value:""},disabledMetrics:{value:""},egressSelectorConfigFile:{value:""},encryptionProviderConfig:{value:""},etcdServersOverrides:{value:""},externalHostname:{value:""},kubeletCertificateAuthority:{value:""},oidcCaFile:{value:""},oidcClientId:{value:""},oidcGroupsClaim:{value:""},oidcGroupsPrefix:{value:""},oidcIssuerUrl:{value:""},oidcRequiredClaim:{value:""},oidcUsernamePrefix:{value:""},peerAdvertiseIp:{value:""},peerAdvertisePort:{value:""},peerCaFile:{value:""},serviceAccountJwksUri:{value:""},showHiddenMetricsForVersion:{value:""},strictTransportSecurityDirectives:{value:""},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsSniCertKey:{value:""},tokenAuthFile:{value:""},tracingConfigFile:{value:""},vmodule:{value:""},watchCacheSizes:{value:""}}},65742:(e,t,a)=>{a.d(t,{$:()=>o});var r=a(44349);const o={etcdCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},kubernetesControllerManagerServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-server.conf`,keySize:"2048",cname:"system:kube-controller-manager-server"},etcdClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/sa.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"},kubernetesSchedulerServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/scheduler-server.conf`,keySize:"2048",cname:"system:kube-scheduler-server"}}},66877:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>m,frontMatter:()=>h,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/staticPod","title":"staticPod","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/kubeAPI/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/staticPod","permalink":"/tech-docs/kubernetes/components/kubeAPI/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=a(74848),n=a(28453),l=a(44349),u=a(68741),s=a(56223),i=a(285),c=a(68747),d=a(60513);const h={},v=void 0,b={},k=[];function p(e){const{Details:t}={...(0,n.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,o.jsx)(c.A,{language:"bash",children:d.A`
    export MACHINE_LOCAL_ADDRESS=${l.M.virtualMachineLocalAddress.value}
  `}),"\n",(0,o.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,o.jsx)(c.A,{language:"bash",children:d.A`
      mkdir -p ${l.M.kubernetesBaseFolderPath.value}/manifests
  `}),"\n",(0,o.jsxs)(t,{className:"custom-blue-block",children:[(0,o.jsx)("summary",{children:"Static Pod Kube-apiserver"}),(0,o.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),(0,o.jsx)(c.A,{language:"bash",children:d.A`
  cat <<EOF > ${l.M.kubernetesBaseFolderPath.value}/manifests/kube-apiserver.yaml
  ---
  apiVersion: v1
  kind: Pod
  metadata:
    annotations:
      kubeadm.kubernetes.io/kube-apiserver.advertise-address.endpoint: $\{MACHINE_LOCAL_ADDRESS}:${s.L.securePort.value}
    creationTimestamp: null
    labels:
      component: kube-apiserver
      tier: control-plane
    name: kube-apiserver
    namespace: kube-system
  spec:
    containers:
    - command:
      - kube-apiserver
      - --advertise-address=$\{MACHINE_LOCAL_ADDRESS}
      - --aggregator-reject-forwarding-redirect=${s.L.aggregatorRejectForwardingRedirect.value}
      - --allow-privileged=${s.L.allowPrivileged.value}
      - --anonymous-auth=${s.L.anonymousAuth.value}
      - --api-audiences=${s.L.apiAudiences.value}
      - --apiserver-count=${s.L.apiserverCount.value}
      - --audit-log-batch-buffer-size=${s.L.auditLogBatchBufferSize.value}
      - --audit-log-batch-max-size=${s.L.auditLogBatchMaxSize.value}
      - --audit-log-batch-max-wait=${s.L.auditLogBatchMaxWait.value}
      - --audit-log-batch-throttle-burst=${s.L.auditLogBatchThrottleBurst.value}
      - --audit-log-batch-throttle-enable=${s.L.auditLogBatchThrottleEnable.value}
      - --audit-log-batch-throttle-qps=${s.L.auditLogBatchThrottleQps.value}
      - --audit-log-compress=${s.L.auditLogCompress.value}
      - --audit-log-format=${s.L.auditLogFormat.value}
      - --audit-log-maxage=${s.L.auditLogMaxage.value}
      - --audit-log-maxbackup=${s.L.auditLogMaxbackup.value}
      - --audit-log-maxsize=${s.L.auditLogMaxsize.value}
      - --audit-log-mode=${s.L.auditLogMode.value}
      - --audit-log-truncate-enabled=${s.L.auditLogTruncateEnabled.value}
      - --audit-log-truncate-max-batch-size=${s.L.auditLogTruncateMaxBatchSize.value}
      - --audit-log-truncate-max-event-size=${s.L.auditLogTruncateMaxEventSize.value}
      - --audit-log-version=${s.L.auditLogVersion.value}
      - --audit-webhook-batch-buffer-size=${s.L.auditWebhookBatchBufferSize.value}
      - --audit-webhook-batch-initial-backoff=${s.L.auditWebhookBatchInitialBackoff.value}
      - --audit-webhook-batch-max-size=${s.L.auditWebhookBatchMaxSize.value}
      - --audit-webhook-batch-max-wait=${s.L.auditWebhookBatchMaxWait.value}
      - --audit-webhook-batch-throttle-burst=${s.L.auditWebhookBatchThrottleBurst.value}
      - --audit-webhook-batch-throttle-enable=${s.L.auditWebhookBatchThrottleEnable.value}
      - --audit-webhook-batch-throttle-qps=${s.L.auditWebhookBatchThrottleQps.value}
      - --audit-webhook-initial-backoff=${s.L.auditWebhookInitialBackoff.value}
      - --audit-webhook-mode=${s.L.auditWebhookMode.value}
      - --audit-webhook-truncate-enabled=${s.L.auditWebhookTruncateEnabled.value}
      - --audit-webhook-truncate-max-batch-size=${s.L.auditWebhookTruncateMaxBatchSize.value}
      - --audit-webhook-truncate-max-event-size=${s.L.auditWebhookTruncateMaxEventSize.value}
      - --audit-webhook-version=${s.L.auditWebhookVersion.value}
      - --audit-policy-file=${s.L.auditPolicyFile.value}
      - --audit-log-path=${s.L.auditLogPath.value}
      - --authentication-token-webhook-cache-ttl=${s.L.authenticationTokenWebhookCacheTtl.value}
      - --authentication-token-webhook-version=${s.L.authenticationTokenWebhookVersion.value}
      - --authorization-mode=${s.L.authorizationMode.value}
      - --authorization-webhook-cache-authorized-ttl=${s.L.authorizationWebhookCacheAuthorizedTtl.value}
      - --authorization-webhook-cache-unauthorized-ttl=${s.L.authorizationWebhookCacheUnauthorizedTtl.value}
      - --authorization-webhook-version=${s.L.authorizationWebhookVersion.value}
      - --bind-address=${s.L.bindAddress.value}
      - --cert-dir=${s.L.certDir.value}
      - --client-ca-file=${s.L.clientCaFile.value}
      # -> Включить, если управляете состоянием через Cloud Controller Manager
      # - --cloud-provider=${s.L.cloudProvider.value}
      - --cloud-provider-gce-l7lb-src-cidrs=${s.L.cloudProviderGceL7lbSrcCidrs.value}
      - --cloud-provider-gce-lb-src-cidrs=${s.L.cloudProviderGceLbSrcCidrs.value}
      - --contention-profiling=${s.L.contentionProfiling.value}
      - --default-not-ready-toleration-seconds=${s.L.defaultNotReadyTolerationSeconds.value}
      - --default-unreachable-toleration-seconds=${s.L.defaultUnreachableTolerationSeconds.value}
      - --default-watch-cache-size=${s.L.defaultWatchCacheSize.value}
      - --delete-collection-workers=${s.L.deleteCollectionWorkers.value}
      - --enable-admission-plugins=${s.L.enableAdmissionPlugins.value}
      - --enable-aggregator-routing=${s.L.enableAggregatorRouting.value}
      - --enable-bootstrap-token-auth=${s.L.enableBootstrapTokenAuth.value}
      - --enable-garbage-collector=${s.L.enableGarbageCollector.value}
      - --enable-logs-handler=${s.L.enableLogsHandler.value}
      - --enable-priority-and-fairness=${s.L.enablePriorityAndFairness.value}
      - --encryption-provider-config-automatic-reload=${s.L.encryptionProviderConfigAutomaticReload.value}
      - --endpoint-reconciler-type=${s.L.endpointReconcilerType.value}
      - --etcd-cafile=${s.L.etcdCafile.value}
      - --etcd-certfile=${s.L.etcdCertfile.value}
      - --etcd-compaction-interval=${s.L.etcdCompactionInterval.value}
      - --etcd-count-metric-poll-period=${s.L.etcdCountMetricPollPeriod.value}
      - --etcd-db-metric-poll-interval=${s.L.etcdDbMetricPollInterval.value}
      - --etcd-healthcheck-timeout=${s.L.etcdHealthcheckTimeout.value}
      - --etcd-keyfile=${s.L.etcdKeyfile.value}
      - --etcd-prefix=${s.L.etcdPrefix.value}
      - --etcd-readycheck-timeout=${s.L.etcdReadycheckTimeout.value}
      - --etcd-servers=${s.L.etcdServers.value}
      - --event-ttl=${s.L.eventTtl.value}
      - --feature-gates=${s.L.featureGates.value}
      - --goaway-chance=${s.L.goawayChance.value}
      - --help=${s.L.help.value}
      - --http2-max-streams-per-connection=${s.L.http2MaxStreamsPerConnection.value}
      - --kubelet-client-certificate=${s.L.kubeletClientCertificate.value}
      - --kubelet-client-key=${s.L.kubeletClientKey.value}
      - --kubelet-port=${s.L.kubeletPort.value}
      - --kubelet-preferred-address-types=${s.L.kubeletPreferredAddressTypes.value}
      - --kubelet-read-only-port=${s.L.kubeletReadOnlyPort.value}
      - --kubelet-timeout=${s.L.kubeletTimeout.value}
      - --kubernetes-service-node-port=${s.L.kubernetesServiceNodePort.value}
      - --lease-reuse-duration-seconds=${s.L.leaseReuseDurationSeconds.value}
      - --livez-grace-period=${s.L.livezGracePeriod.value}
      - --log-flush-frequency=${s.L.logFlushFrequency.value}
      - --logging-format=${s.L.loggingFormat.value}
      - --log-json-info-buffer-size=${s.L.logJsonInfoBufferSize.value}
      - --log-json-split-stream=${s.L.logJsonSplitStream.value}
      - --log-text-info-buffer-size=${s.L.logTextInfoBufferSize.value}
      - --log-text-split-stream=${s.L.logTextSplitStream.value}
      - --max-connection-bytes-per-sec=${s.L.maxConnectionBytesPerSec.value}
      - --max-mutating-requests-inflight=${s.L.maxMutatingRequestsInflight.value}
      - --max-requests-inflight=${s.L.maxRequestsInflight.value}
      - --min-request-timeout=${s.L.minRequestTimeout.value}
      - --permit-address-sharing=${s.L.permitAddressSharing.value}
      - --permit-port-sharing=${s.L.permitPortSharing.value}
      - --profiling=${s.L.profiling.value}
      - --proxy-client-cert-file=${s.L.proxyClientCertFile.value}
      - --proxy-client-key-file=${s.L.proxyClientKeyFile.value}
      - --requestheader-allowed-names=${s.L.requestheaderAllowedNames.value}
      - --requestheader-client-ca-file=${s.L.requestheaderClientCaFile.value}
      - --requestheader-extra-headers-prefix=${s.L.requestheaderExtraHeadersPrefix.value}
      - --requestheader-group-headers=${s.L.requestheaderGroupHeaders.value}
      - --requestheader-username-headers=${s.L.requestheaderUsernameHeaders.value}
      - --request-timeout=${s.L.requestTimeout.value}
      - --runtime-config=${s.L.runtimeConfig.value}
      - --secure-port=${s.L.securePort.value}
      - --service-account-extend-token-expiration=${s.L.serviceAccountExtendTokenExpiration.value}
      - --service-account-issuer=${s.L.serviceAccountIssuer.value}
      - --service-account-key-file=${s.L.serviceAccountKeyFile.value}
      - --service-account-lookup=${s.L.serviceAccountLookup.value}
      - --service-account-max-token-expiration=${s.L.serviceAccountMaxTokenExpiration.value}
      - --service-account-signing-key-file=${s.L.serviceAccountSigningKeyFile.value}
      - --service-cluster-ip-range=${s.L.serviceClusterIpRange.value}
      - --service-node-port-range=${s.L.serviceNodePortRange.value}
      - --shutdown-delay-duration=${s.L.shutdownDelayDuration.value}
      - --shutdown-send-retry-after=${s.L.shutdownSendRetryAfter.value}
      - --shutdown-watch-termination-grace-period=${s.L.shutdownWatchTerminationGracePeriod.value}
      - --storage-backend=${s.L.storageBackend.value}
      - --storage-media-type=${s.L.storageMediaType.value}
      - --tls-cert-file=${s.L.tlsCertFile.value}
      - --tls-private-key-file=${s.L.tlsPrivateKeyFile.value}
      - --v=${s.L.v.value}
      - --version=${s.L.version.value}
      - --watch-cache=${s.L.watchCache.value}
      # ЕСЛИ НУЖНО ПОДКЛЮЧИТЬ CLOUD-CONTROLLER-MANAGER
      # ТРЕБУЕТСЯ РАСКОМЕНТИРОВАТЬ
      # ->
      # - --cloud-provider: "${s.L.cloudProvider.value}"
      # Не указывать если значение "" или undefined
      # - --cloud-config=${s.L.cloudConfig.value}
      # - --strict-transport-security-directives=${s.L.strictTransportSecurityDirectives.value}
      # - --disable-admission-plugins=${s.L.disableAdmissionPlugins.value}
      # - --disabled-metrics=${s.L.disabledMetrics.value}
      # - --egress-selector-config-file=${s.L.egressSelectorConfigFile.value}
      # - --encryption-provider-config=${s.L.encryptionProviderConfig.value}
      # - --etcd-servers-overrides=${s.L.etcdServersOverrides.value}
      # - --external-hostname=${s.L.externalHostname.value}
      # - --kubelet-certificate-authority=${s.L.kubeletCertificateAuthority.value}
      # - --oidc-ca-file=${s.L.oidcCaFile.value}
      # - --oidc-client-id=${s.L.oidcClientId.value}
      # - --oidc-groups-claim=${s.L.oidcGroupsClaim.value}
      # - --oidc-groups-prefix=${s.L.oidcGroupsPrefix.value}
      # - --oidc-issuer-url=${s.L.oidcIssuerUrl.value}
      # - --oidc-required-claim=${s.L.oidcRequiredClaim.value}
      # - --oidc-signing-algs=${s.L.oidcSigningAlgs.value}
      # - --oidc-username-claim=${s.L.oidcUsernameClaim.value}
      # - --oidc-username-prefix=${s.L.oidcUsernamePrefix.value}
      # - --peer-advertise-ip=${s.L.peerAdvertiseIp.value}
      # - --peer-advertise-port=${s.L.peerAdvertisePort.value}
      # - --peer-ca-file=${s.L.peerCaFile.value}
      # - --service-account-jwks-uri=${s.L.serviceAccountJwksUri.value}
      # - --show-hidden-metrics-for-version=${s.L.showHiddenMetricsForVersion.value}
      # - --tls-cipher-suites=${s.L.tlsCipherSuites.value}
      # - --tls-min-version=${s.L.tlsMinVersion.value}
      # - --tls-sni-cert-key=${s.L.tlsSniCertKey.value}
      # - --token-auth-file=${s.L.tokenAuthFile.value}
      # - --tracing-config-file=${s.L.tracingConfigFile.value}
      # - --vmodule=${s.L.vmodule.value}
      # - --watch-cache-sizes=${s.L.watchCacheSizes.value}
      # - --authorization-webhook-config-file=${s.L.authorizationWebhookConfigFile.value}
      # - --cors-allowed-origins=${s.L.corsAllowedOrigins.value}
      # - --debug-socket-path=${s.L.debugSocketPath.value}
      # - --authorization-policy-file=${s.L.authorizationPolicyFile.value}
      # - --authorization-config=${s.L.authorizationConfig.value}
      # - --authentication-token-webhook-config-file=${s.L.authenticationTokenWebhookConfigFile.value}
      # - --authentication-config=${s.L.authenticationConfig.value}
      # - --audit-webhook-config-file=${s.L.auditWebhookConfigFile.value}
      # - --allow-metric-labels=${s.L.allowMetricLabels.value}
      # - --allow-metric-labels-manifest=${s.L.allowMetricLabelsManifest.value}
      # - --admission-control=${s.L.admissionControl.value}
      # - --admission-control-config-file=${s.L.admissionControlConfigFile.value}
      # - --advertise-address=${s.L.advertiseAddress.value}
      image: ${l.M.baseDockerRegistry.value}/kube-apiserver:${u.M.kubernetes.value}
      imagePullPolicy: IfNotPresent
      livenessProbe:
        failureThreshold: 8
        httpGet:
          host: $\{MACHINE_LOCAL_ADDRESS}
          path: /livez
          port: ${i.h.kubeAPIServer.portNumber}
          scheme: HTTPS
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      name: kube-apiserver
      readinessProbe:
        failureThreshold: 3
        httpGet:
          host: $\{MACHINE_LOCAL_ADDRESS}
          path: /readyz
          port: ${i.h.kubeAPIServer.portNumber}
          scheme: HTTPS
        periodSeconds: 1
        timeoutSeconds: 15
      resources:
        requests:
          cpu: 250m
      startupProbe:
        failureThreshold: 24
        httpGet:
          host: $\{MACHINE_LOCAL_ADDRESS}
          path: /livez
          port: ${i.h.kubeAPIServer.portNumber}
          scheme: HTTPS
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      volumeMounts:
      - mountPath: /etc/ssl/certs
        name: ca-certs
        readOnly: true
      - mountPath: /etc/ca-certificates
        name: etc-ca-certificates
        readOnly: true
      - mountPath: /etc/pki
        name: etc-pki
        readOnly: true
      - mountPath: /var/log/kubernetes/audit/
        name: k8s-audit
      - mountPath: /etc/kubernetes/audit-policy.yaml
        name: k8s-audit-policy
        readOnly: true
      - mountPath: ${l.M.kubernetesBaseFolderPath.value}/pki
        name: k8s-certs
        readOnly: true
      - mountPath: /usr/local/share/ca-certificates
        name: usr-local-share-ca-certificates
        readOnly: true
      - mountPath: /usr/share/ca-certificates
        name: usr-share-ca-certificates
        readOnly: true
    hostNetwork: true
    priority: 2000001000
    priorityClassName: system-node-critical
    securityContext:
      seccompProfile:
        type: RuntimeDefault
    volumes:
    - hostPath:
        path: /etc/ssl/certs
        type: DirectoryOrCreate
      name: ca-certs
    - hostPath:
        path: /etc/ca-certificates
        type: DirectoryOrCreate
      name: etc-ca-certificates
    - hostPath:
        path: /etc/pki
        type: DirectoryOrCreate
      name: etc-pki
    - hostPath:
        path: /var/log/kubernetes/audit/
        type: DirectoryOrCreate
      name: k8s-audit
    - hostPath:
        path: /etc/kubernetes/audit-policy.yaml
        type: File
      name: k8s-audit-policy
    - hostPath:
        path: ${l.M.kubernetesBaseFolderPath.value}/pki
        type: DirectoryOrCreate
      name: k8s-certs
    - hostPath:
        path: /usr/local/share/ca-certificates
        type: DirectoryOrCreate
      name: usr-local-share-ca-certificates
    - hostPath:
        path: /usr/share/ca-certificates
        type: DirectoryOrCreate
      name: usr-share-ca-certificates
  status: {}
  EOF
`})]})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},68741:(e,t,a)=>{a.d(t,{M:()=>r});const r={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.12"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},76331:(e,t,a)=>{a.d(t,{A:()=>y});var r=a(96540),o=a(34164),n=a(23104),l=a(56347),u=a(205),s=a(57485),i=a(31682),c=a(70679);function d(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,r.useMemo)(()=>{const e=t??function(e){return d(e).map(({props:{value:e,label:t,attributes:a,default:r}})=>({value:e,label:t,attributes:a,default:r}))}(a);return function(e){const t=(0,i.XI)(e,(e,t)=>e.value===t.value);if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,a])}function v({value:e,tabValues:t}){return t.some(t=>t.value===e)}function b({queryString:e=!1,groupId:t}){const a=(0,l.W6)(),o=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,s.aZ)(o),(0,r.useCallback)(e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})},[o,a])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:o}=e,n=h(e),[l,s]=(0,r.useState)(()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!v({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=t.find(e=>e.default)??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:n})),[i,d]=b({queryString:a,groupId:o}),[k,p]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[a,o]=(0,c.Dv)(t);return[a,(0,r.useCallback)(e=>{t&&o.set(e)},[t,o])]}({groupId:o}),m=(()=>{const e=i??k;return v({value:e,tabValues:n})?e:null})();(0,u.A)(()=>{m&&s(m)},[m]);return{selectedValue:l,selectValue:(0,r.useCallback)(e=>{if(!v({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),p(e)},[d,p,n]),tabValues:n}}var p=a(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=a(74848);function g({className:e,block:t,selectedValue:a,selectValue:r,tabValues:l}){const u=[],{blockElementScrollPositionUntilNextRender:s}=(0,n.a_)(),i=e=>{const t=e.currentTarget,o=u.indexOf(t),n=l[o].value;n!==a&&(s(t),r(n))},c=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},e),children:l.map(({value:e,label:t,attributes:r})=>(0,f.jsx)("li",{role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,ref:e=>{u.push(e)},onKeyDown:c,onClick:i,...r,className:(0,o.A)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":a===e}),children:t??e},e))})}function P({lazy:e,children:t,selectedValue:a}){const n=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=n.find(e=>e.props.value===a);return e?(0,r.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:n.map((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))})}function $(e){const t=k(e);return(0,f.jsxs)("div",{className:(0,o.A)("tabs-container",m.tabList),children:[(0,f.jsx)(g,{...t,...e}),(0,f.jsx)(P,{...t,...e})]})}function y(e){const t=(0,p.A)();return(0,f.jsx)($,{...e,children:d(e.children)},String(t))}},77517:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>k,frontMatter:()=>c,metadata:()=>r,toc:()=>v});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/setupJoinComponent","title":"setupJoinComponent","description":"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445.","source":"@site/docs/tech-docs/kubernetes/components/kubeAPI/setupJoinComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/setupJoinComponent","permalink":"/tech-docs/kubernetes/components/kubeAPI/setupJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=a(74848),n=a(28453),l=a(9792),u=a(76331),s=a(66877),i=a(14928);const c={},d=void 0,h={},v=[...s.toc,...i.RM];function b(e){const t={admonition:"admonition",p:"p",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:(0,o.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445."})}),"\n",(0,o.jsxs)(u.A,{groupId:"install-type",children:[(0,o.jsx)(l.A,{value:"HardWay",children:(0,o.jsx)(s.default,{})}),(0,o.jsx)(l.A,{value:"Kubeadm",children:(0,o.jsx)(i.Ay,{})})]})]})}function k(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(b,{...e})}):b(e)}},82198:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>k,frontMatter:()=>c,metadata:()=>r,toc:()=>v});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/setupInitComponent","title":"setupInitComponent","description":"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445.","source":"@site/docs/tech-docs/kubernetes/components/kubeAPI/setupInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/setupInitComponent","permalink":"/tech-docs/kubernetes/components/kubeAPI/setupInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=a(74848),n=a(28453),l=a(9792),u=a(76331),s=a(66877),i=a(92644);const c={},d=void 0,h={},v=[...s.toc,...i.toc];function b(e){const t={admonition:"admonition",p:"p",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:(0,o.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445."})}),"\n",(0,o.jsxs)(u.A,{groupId:"install-type",children:[(0,o.jsx)(l.A,{value:"HardWay",children:(0,o.jsx)(s.default,{})}),(0,o.jsx)(l.A,{value:"Kubeadm",children:(0,o.jsx)(i.default,{})})]})]})}function k(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(b,{...e})}):b(e)}},92644:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>i,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubeAPI/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/kubeadm","permalink":"/tech-docs/kubernetes/components/kubeAPI/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=a(74848),n=a(28453),l=a(44349),u=a(68747),s=a(60513);const i={},c=void 0,d={},h=[];function v(e){const t={admonition:"admonition",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,o.jsx)(u.A,{language:"bash",children:s.A`
      kubeadm init phase  control-plane apiserver \\
        --config=${l.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
  `}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(u.A,{language:"bash",children:s.A`
      #### Kube API
      [control-plane] Creating static Pod manifest for "apiserver"
  `})})]})}function b(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(v,{...e})}):v(e)}}}]);