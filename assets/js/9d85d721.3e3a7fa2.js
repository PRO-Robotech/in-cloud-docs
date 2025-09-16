"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[210,225,243,1296,1507,1686,1906,2155,2397,2477,3287,3536,3632,3659,5362,5566,5607,6530,6658,6739,7437,8034,9248,9269,9569],{285:(e,t,a)=>{a.d(t,{h:()=>r});const r={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},7100:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/allStaticPodsCPPhasesComponent","title":"allStaticPodsCPPhasesComponent","description":"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Static Pods","source":"@site/docs/tech-docs/kubernetes/components/allStaticPodsCPPhasesComponent.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/allStaticPodsCPPhasesComponent","permalink":"/tech-docs/kubernetes/components/allStaticPodsCPPhasesComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=a(74848),o=a(28453),l=a(61682),s=a(91169),i=a(9792),c=a(76331);const u={},d=void 0,h={},p=[...l.toc,...s.toc];function v(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(c.A,{groupId:"phase",children:[(0,n.jsx)(i.A,{value:"init",children:(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,n.jsx)("p",{style:{marginBottom:0},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Static Pods"}),(0,n.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,n.jsx)(l.default,{})]})}),(0,n.jsx)(i.A,{value:"join",children:(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,n.jsx)("p",{style:{marginBottom:0},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Static Pods"}),(0,n.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,n.jsx)(s.default,{})]})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(v,{...e})}):v(e)}},9635:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/scheduler/setupInitComponent","title":"setupInitComponent","description":"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445.","source":"@site/docs/tech-docs/kubernetes/components/scheduler/setupInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/scheduler","slug":"/tech-docs/kubernetes/components/scheduler/setupInitComponent","permalink":"/tech-docs/kubernetes/components/scheduler/setupInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=a(74848),o=a(28453),l=a(9792),s=a(76331),i=a(81009),c=a(12457);const u={},d=void 0,h={},p=[...i.toc,...c.toc];function v(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:(0,n.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445."})}),"\n",(0,n.jsxs)(s.A,{groupId:"install-type",children:[(0,n.jsx)(l.A,{value:"HardWay",children:(0,n.jsx)(i.default,{})}),(0,n.jsx)(l.A,{value:"Kubeadm",children:(0,n.jsx)(c.default,{})})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(v,{...e})}):v(e)}},9792:(e,t,a)=>{a.d(t,{A:()=>l});a(96540);var r=a(34164);const n={tabItem:"tabItem_Ymn6"};var o=a(74848);function l({children:e,hidden:t,className:a}){return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,a),hidden:t,children:e})}},11336:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>v,frontMatter:()=>c,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcd/kubeadmJoin","title":"kubeadmJoin","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430","source":"@site/docs/tech-docs/etcd/components/etcd/kubeadmJoin.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/kubeadmJoin","permalink":"/tech-docs/etcd/components/etcd/kubeadmJoin","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=a(74848),o=a(28453),l=a(44349),s=a(68747),i=a(60513);const c={},u=void 0,d={},h=[];function p(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,n.jsx)(s.A,{language:"bash",children:i.A`
  kubeadm join phase control-plane-join etcd \\
    --config=${l.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(s.A,{language:"bash",children:i.A`
  #### Kube API
  [etcd] Creating static Pod manifest for local etcd in "${l.M.kubernetesBaseFolderPath.value}"
`})})]})}function v(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},12457:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>v,frontMatter:()=>c,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/scheduler/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/scheduler/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/components/scheduler","slug":"/tech-docs/kubernetes/components/scheduler/kubeadm","permalink":"/tech-docs/kubernetes/components/scheduler/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=a(74848),o=a(28453),l=a(44349),s=a(68747),i=a(60513);const c={},u=void 0,d={},h=[];function p(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,n.jsx)(s.A,{language:"bash",children:i.A`
  kubeadm init phase  control-plane scheduler \\
    --config=${l.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(s.A,{language:"bash",children:i.A`
  #### Kube API
  [control-plane] Creating static Pod manifest for "kube-scheduler"
`})})]})}function v(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},14928:(e,t,a)=>{a.d(t,{Ay:()=>u,RM:()=>i});var r=a(74848),n=a(28453),o=a(44349),l=a(68747),s=a(60513);const i=[];function c(e){const t={admonition:"admonition",p:"p",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{title:"\u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"danger",children:(0,r.jsx)(t.p,{children:"\u0418\u043c\u0435\u0439\u0442\u0435 \u0432 \u0432\u0438\u0434\u0443: \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 Join \u043d\u0435\u043b\u044c\u0437\u044f \u0432\u044b\u0431\u0440\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u044b \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u2014 kubeadm \u0441\u043e\u0437\u0434\u0430\u0451\u0442 \u0438\u0445 \u0432\u0441\u0435 \u0441\u0440\u0430\u0437\u0443, \u0432 \u043f\u043e\u043b\u043d\u043e\u043c \u043e\u0431\u044a\u0451\u043c\u0435."})}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,r.jsx)(l.A,{language:"bash",children:s.A`
  kubeadm join phase control-plane-prepare control-plane \\
    --config=${o.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(l.A,{language:"bash",children:s.A`
  [preflight] Reading configuration from the cluster...
  [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
  [control-plane] Using manifest folder "/etc/kubernetes/manifests"
  [control-plane] Creating static Pod manifest for "kube-apiserver"
  [control-plane] Creating static Pod manifest for "kube-controller-manager"
  [control-plane] Creating static Pod manifest for "kube-scheduler"
`})})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},16232:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/scheduler/setupJoinComponent","title":"setupJoinComponent","description":"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445.","source":"@site/docs/tech-docs/kubernetes/components/scheduler/setupJoinComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/scheduler","slug":"/tech-docs/kubernetes/components/scheduler/setupJoinComponent","permalink":"/tech-docs/kubernetes/components/scheduler/setupJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=a(74848),o=a(28453),l=a(9792),s=a(76331),i=a(81009),c=a(14928);const u={},d=void 0,h={},p=[...i.toc,...c.RM];function v(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:(0,n.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445."})}),"\n",(0,n.jsxs)(s.A,{groupId:"install-type",children:[(0,n.jsx)(l.A,{value:"HardWay",children:(0,n.jsx)(i.default,{})}),(0,n.jsx)(l.A,{value:"Kubeadm",children:(0,n.jsx)(c.Ay,{})})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(v,{...e})}):v(e)}},21232:(e,t,a)=>{a.d(t,{L:()=>o});var r=a(65742),n=a(44349);const o={authenticationKubeconfig:{value:`${n.M.kubernetesBaseFolderPath.value}/controller-manager.conf`},authorizationKubeconfig:{value:`${n.M.kubernetesBaseFolderPath.value}/controller-manager.conf`},kubeconfig:{value:`${n.M.kubernetesBaseFolderPath.value}/controller-manager.conf`},clientCaFile:{value:`${r.$.kubernetesCA.crtPath}`},clusterSigningCertFile:{value:`${r.$.kubernetesCA.crtPath}`},clusterSigningKeyFile:{value:`${r.$.kubernetesCA.keyPath}`},requestheaderClientCaFile:{value:`${r.$.frontProxyCA.crtPath}`},rootCaFile:{value:`${r.$.kubernetesCA.crtPath}`},serviceAccountPrivateKeyFile:{value:`${n.M.kubernetesBaseFolderPath.value}/pki/sa.key`},clusterName:{value:"${CLUSTER_NAME}"},allocateNodeCidrs:{value:"false"},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},allowUntaggedCloud:{value:"false"},authenticationSkipLookup:{value:"false"},authenticationTokenWebhookCacheTtl:{value:"10s"},authenticationTolerateLookupFailure:{value:"false"},authorizationAlwaysAllowPaths:{value:"/healthz,/readyz,/livez,/metrics"},authorizationWebhookCacheAuthorizedTtl:{value:"10s"},authorizationWebhookCacheUnauthorizedTtl:{value:"10s"},bindAddress:{value:"0.0.0.0"},certDir:{value:""},cidrAllocatorType:{value:"RangeAllocator"},cloudConfig:{value:""},cloudProvider:{value:"external"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},clusterCidr:{value:""},clusterSigningDuration:{value:"720h0m0s"},clusterSigningKubeApiserverClientCertFile:{value:""},clusterSigningKubeApiserverClientKeyFile:{value:""},clusterSigningKubeletClientCertFile:{value:""},clusterSigningKubeletClientKeyFile:{value:""},clusterSigningKubeletServingCertFile:{value:""},clusterSigningKubeletServingKeyFile:{value:""},clusterSigningLegacyUnknownCertFile:{value:""},clusterSigningLegacyUnknownKeyFile:{value:""},concurrentCronJobSyncs:{value:"5"},concurrentDeploymentSyncs:{value:"5"},concurrentEndpointSyncs:{value:"5"},concurrentEphemeralvolumeSyncs:{value:"5"},concurrentGcSyncs:{value:"20"},concurrentHorizontalPodAutoscalerSyncs:{value:"5"},concurrentJobSyncs:{value:"5"},concurrentNamespaceSyncs:{value:"10"},concurrentRcSyncs:{value:"5"},concurrentReplicasetSyncs:{value:"20"},concurrentResourceQuotaSyncs:{value:"5"},concurrentServiceEndpointSyncs:{value:"5"},concurrentServiceSyncs:{value:"1"},concurrentServiceaccountTokenSyncs:{value:"5"},concurrentStatefulsetSyncs:{value:"5"},concurrentTtlAfterFinishedSyncs:{value:"5"},concurrentValidatingAdmissionPolicyStatusSyncs:{value:"5"},configureCloudRoutes:{value:"true"},contentionProfiling:{value:"false"},controllerStartInterval:{value:"0s"},controllers:{value:"*,bootstrapsigner,tokencleaner"},disableAttachDetachReconcileSync:{value:"false"},disableForceDetachOnTimeout:{value:"false"},disabledMetrics:{value:""},enableDynamicProvisioning:{value:"true"},enableGarbageCollector:{value:"true"},enableHostpathProvisioner:{value:"false"},enableLeaderMigration:{value:"false"},endpointUpdatesBatchPeriod:{value:"0s"},endpointsliceUpdatesBatchPeriod:{value:"0s"},externalCloudVolumePlugin:{value:""},featureGates:{value:"RotateKubeletServerCertificate=true"},flexVolumePluginDir:{value:"/usr/libexec/kubernetes/kubelet-plugins/volume/exec/"},help:{value:"false"},horizontalPodAutoscalerCpuInitializationPeriod:{value:"5m0s"},horizontalPodAutoscalerDownscaleDelay:{value:"5m0s"},horizontalPodAutoscalerDownscaleStabilization:{value:"5m0s"},horizontalPodAutoscalerInitialReadinessDelay:{value:"30s"},horizontalPodAutoscalerSyncPeriod:{value:"30s"},horizontalPodAutoscalerTolerance:{value:"0.1"},horizontalPodAutoscalerUpscaleDelay:{value:"3m0s"},http2MaxStreamsPerConnection:{value:"0"},kubeApiBurst:{value:"120"},kubeApiContentType:{value:"application/vnd.kubernetes.protobuf"},kubeApiQps:{value:"100"},largeClusterSizeThreshold:{value:"50"},leaderElect:{value:"true"},leaderElectLeaseDuration:{value:"15s"},leaderElectRenewDeadline:{value:"10s"},leaderElectResourceLock:{value:"leases"},leaderElectResourceName:{value:"kube-controller-manager"},leaderElectResourceNamespace:{value:"kube-system"},leaderElectRetryPeriod:{value:"2s"},leaderMigrationConfig:{value:""},legacyServiceAccountTokenCleanUpPeriod:{value:"8760h0m0s"},logFlushFrequency:{value:"5s"},logJsonInfoBufferSize:{value:"0"},logJsonSplitStream:{value:"false"},logTextInfoBufferSize:{value:"0"},logTextSplitStream:{value:"false"},loggingFormat:{value:"text"},attachDetachReconcileSyncPeriod:{value:"1m0s"},master:{value:""},maxEndpointsPerSlice:{value:"100"},minResyncPeriod:{value:"12h0m0s"},mirroringConcurrentServiceEndpointSyncs:{value:"5"},mirroringEndpointsliceUpdatesBatchPeriod:{value:"0s"},mirroringMaxEndpointsPerSubset:{value:"1000"},namespaceSyncPeriod:{value:"2m0s"},nodeCidrMaskSize:{value:"0"},nodeCidrMaskSizeIpv4:{value:"0"},nodeCidrMaskSizeIpv6:{value:"0"},nodeEvictionRate:{value:"0.1"},nodeMonitorGracePeriod:{value:"40s"},nodeMonitorPeriod:{value:"5s"},nodeStartupGracePeriod:{value:"10s"},nodeSyncPeriod:{value:"0s"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},pvRecyclerIncrementTimeoutNfs:{value:"30"},pvRecyclerMinimumTimeoutHostpath:{value:"60"},pvRecyclerMinimumTimeoutNfs:{value:"300"},pvRecyclerPodTemplateFilepathHostpath:{value:""},pvRecyclerPodTemplateFilepathNfs:{value:""},pvRecyclerTimeoutIncrementHostpath:{value:"30"},pvclaimbinderSyncPeriod:{value:"15s"},requestheaderAllowedNames:{value:""},requestheaderExtraHeadersPrefix:{value:"x-remote-extra-"},requestheaderGroupHeaders:{value:"x-remote-group"},requestheaderUsernameHeaders:{value:"x-remote-user"},resourceQuotaSyncPeriod:{value:"5m0s"},routeReconciliationPeriod:{value:"10s"},secondaryNodeEvictionRate:{value:"0.01"},securePort:{value:"10257"},serviceClusterIpRange:{value:""},showHiddenMetricsForVersion:{value:""},terminatedPodGcThreshold:{value:"0"},tlsCertFile:{value:"/etc/kubernetes/pki/controller-manager-server.crt"},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsPrivateKeyFile:{value:"/etc/kubernetes/pki/controller-manager-server.key"},tlsSniCertKey:{value:""},unhealthyZoneThreshold:{value:"0.55"},useServiceAccountCredentials:{value:"true"},v:{value:"2"},version:{value:"false"},vmodule:{value:""},volumeHostAllowLocalLoopback:{value:"true"},volumeHostCidrDenylist:{value:""}}},21502:(e,t,a)=>{a.d(t,{w:()=>o});var r=a(285),n=a(44349);const o={authenticationKubeconfig:{value:`${n.M.kubernetesBaseFolderPath.value}/scheduler.conf`},authenticationSkipLookup:{value:"false"},authenticationTokenWebhookCacheTtl:{value:"10s"},authenticationTolerateLookupFailure:{value:"true"},authorizationAlwaysAllowPaths:{value:"/healthz,/readyz,/livez,/metrics"},authorizationKubeconfig:{value:`${n.M.kubernetesBaseFolderPath.value}/scheduler.conf`},authorizationWebhookCacheAuthorizedTtl:{value:"10s"},authorizationWebhookCacheUnauthorizedTtl:{value:"10s"},bindAddress:{value:"0.0.0.0"},contentionProfiling:{value:"true"},help:{value:"false"},http2MaxStreamsPerConnection:{value:"0"},kubeApiBurst:{value:"100"},kubeApiContentType:{value:"application/vnd.kubernetes.protobuf"},kubeApiQps:{value:"50"},kubeconfig:{value:`${n.M.kubernetesBaseFolderPath.value}/scheduler.conf`},leaderElect:{value:"true"},leaderElectLeaseDuration:{value:"15s"},leaderElectRenewDeadline:{value:"10s"},leaderElectResourceLock:{value:"leases"},leaderElectResourceName:{value:"kube-scheduler"},leaderElectResourceNamespace:{value:"kube-system"},leaderElectRetryPeriod:{value:"2s"},logFlushFrequency:{value:"5s"},logJsonInfoBufferSize:{value:"0"},logJsonSplitStream:{value:"false"},logTextInfoBufferSize:{value:"0"},logTextSplitStream:{value:"false"},loggingFormat:{value:"text"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},podMaxInUnschedulablePodsDuration:{value:"5m0s"},profiling:{value:"true"},requestheaderExtraHeadersPrefix:{value:"[x-remote-extra-]"},requestheaderGroupHeaders:{value:"[x-remote-group]"},requestheaderUsernameHeaders:{value:"[x-remote-user]"},securePort:{value:`${r.h.kubeScheduler.portNumber}`},v:{value:"2"},version:{value:"false"},allowMetricLabels:{value:"[]"},disabledMetrics:{value:"[]"},requestheaderAllowedNames:{value:"[]"},tlsCipherSuites:{value:"[]"},tlsSniCertKey:{value:"[]"},allowMetricLabelsManifest:{value:""},certDir:{value:""},clientCaFile:{value:""},config:{value:""},featureGates:{value:""},vmodule:{value:""},writeConfigTo:{value:""},tlsMinVersion:{value:""},tlsPrivateKeyFile:{value:"/etc/kubernetes/pki/scheduler-server.key"},showHiddenMetricsForVersion:{value:""},tlsCertFile:{value:"/etc/kubernetes/pki/scheduler-server.crt"},requestheaderClientCaFile:{value:""},master:{value:""}}},25102:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>v,frontMatter:()=>c,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/controllerManager/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/controllerManager/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/components/controllerManager","slug":"/tech-docs/kubernetes/components/controllerManager/kubeadm","permalink":"/tech-docs/kubernetes/components/controllerManager/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=a(74848),o=a(28453),l=a(44349),s=a(68747),i=a(60513);const c={},u=void 0,d={},h=[];function p(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,n.jsx)(s.A,{language:"bash",children:i.A`
      kubeadm init phase  control-plane controller-manager \\
        --config=${l.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
  `}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(s.A,{language:"bash",children:i.A`
      #### Kube API
      [control-plane] Creating static Pod manifest for "kube-controller-manager"
  `})})]})}function v(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},26412:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>v,default:()=>f,frontMatter:()=>p,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcd/staticPodInitComponent","title":"staticPodInitComponent","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/etcd/components/etcd/staticPodInitComponent.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/staticPodInitComponent","permalink":"/tech-docs/etcd/components/etcd/staticPodInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=a(74848),o=a(28453),l=a(44349),s=a(285),i=a(68741),c=a(95538),u=a(60513),d=a(68747),h=a(50455);const p={},v=void 0,m={},b=[...h.toc];function k(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,n.jsx)(h.default,{}),"\n",(0,n.jsx)(d.A,{language:"bash",children:u.A`
  export CLUSTER_NAME=${l.M.clusterName.value}
  export BASE_DOMAIN=${l.M.kubernetesBaseDomain.value}
  export MACHINE_LOCAL_ADDRESS=${l.M.virtualMachineLocalAddress.value}
  export FULL_HOST_NAME="${l.M.virtualMachineFullName.value}"
  export ETCD_INITIAL_CLUSTER="$\{FULL_HOST_NAME}=${c.D.initialAdvertisePeerUrls.value}"
`}),"\n",(0,n.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,n.jsx)(d.A,{language:"bash",children:u.A`
      mkdir -p ${l.M.kubernetesBaseFolderPath.value}/manifests
  `}),"\n",(0,n.jsxs)(t,{className:"custom-blue-block",children:[(0,n.jsx)("summary",{children:"Static Pod ETCD"}),(0,n.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),(0,n.jsx)(d.A,{language:"bash",children:u.A`
  cat <<EOF > ${l.M.kubernetesBaseFolderPath.value}/manifests/etcd.yaml
  apiVersion: v1
  kind: Pod
  metadata:
    annotations:
      kubeadm.kubernetes.io/etcd.advertise-client-urls: https://$\{MACHINE_LOCAL_ADDRESS}:${s.h.etcdServer.portNumber}
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
      - --advertise-client-urls=${c.D.advertiseClientUrls.value}
      - --auto-compaction-retention=${c.D.autoCompactionRetention.value}
      - --cert-file=${c.D.certFile.value}
      - --client-cert-auth=${c.D.clientCertAuth.value}
      - --data-dir=${c.D.dataDir.value}
      - --election-timeout=${c.D.electionTimeout.value}
      - --experimental-initial-corrupt-check=true
      - --experimental-watch-progress-notify-interval=5s
      - --heartbeat-interval=${c.D.heartbeatInterval.value}
      - --initial-advertise-peer-urls=${c.D.initialAdvertisePeerUrls.value}
      - --initial-cluster=${c.D.initialCluster.value}
      - --key-file=${c.D.keyFile.value}
      - --listen-client-urls=${c.D.listenClientUrls.value}
      - --listen-metrics-urls=${c.D.listenMetricsUrls.value}
      - --listen-peer-urls=${c.D.listenPeerUrls.value}
      - --logger=${c.D.logger.value}
      - --max-snapshots=${c.D.maxSnapshots.value}
      - --max-wals=${c.D.maxWals.value}
      - --metrics=${c.D.metrics.value}
      - --name=${c.D.name.value}
      - --peer-cert-file=${c.D.peerCertFile.value}
      - --peer-client-cert-auth=${c.D.peerClientCertAuth.value}
      - --peer-key-file=${c.D.peerKeyFile.value}
      - --peer-trusted-ca-file=${c.D.peerTrustedCAFile.value}
      - --snapshot-count=${c.D.snapshotCount.value}
      - --quota-backend-bytes=${c.D.quotaBackendBytes.value}
      - --trusted-ca-file=${c.D.trustedCAFile.value}
      image: ${l.M.baseDockerRegistry.value}/etcd:${i.M.etcd.value}
      imagePullPolicy: IfNotPresent
      livenessProbe:
        failureThreshold: 8
        httpGet:
          host: 127.0.0.1
          path: /health?exclude=NOSPACE&serializable=true
          port: ${s.h.etcdMetricServer.portNumber}
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
          port: ${s.h.etcdMetricServer.portNumber}
          scheme: HTTP
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      volumeMounts:
      - mountPath: /var/lib/etcd
        name: etcd-data
      - mountPath: ${l.M.kubernetesBaseFolderPath.value}/pki/etcd
        name: etcd-certs
    hostNetwork: true
    priority: 2000001000
    priorityClassName: system-node-critical
    securityContext:
      seccompProfile:
        type: RuntimeDefault
    volumes:
    - hostPath:
        path: ${l.M.kubernetesBaseFolderPath.value}/pki/etcd
        type: DirectoryOrCreate
      name: etcd-certs
    - hostPath:
        path: /var/lib/etcd
        type: DirectoryOrCreate
      name: etcd-data
  status: {}
  EOF
`})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(k,{...e})}):k(e)}},29449:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>v,frontMatter:()=>c,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcd/kubeadmInit","title":"kubeadmInit","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430","source":"@site/docs/tech-docs/etcd/components/etcd/kubeadmInit.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/kubeadmInit","permalink":"/tech-docs/etcd/components/etcd/kubeadmInit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=a(74848),o=a(28453),l=a(44349),s=a(68747),i=a(60513);const c={},u=void 0,d={},h=[];function p(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,n.jsx)(s.A,{language:"bash",children:i.A`
  kubeadm init phase etcd local \\
    --config=${l.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(s.A,{language:"bash",children:i.A`
  #### Kube API
  [etcd] Creating static Pod manifest for local etcd in "${l.M.kubernetesBaseFolderPath.value}"
`})})]})}function v(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},46856:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>v,default:()=>f,frontMatter:()=>p,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcd/staticPodJoinComponent","title":"staticPodJoinComponent","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f","source":"@site/docs/tech-docs/etcd/components/etcd/staticPodJoinComponent.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/staticPodJoinComponent","permalink":"/tech-docs/etcd/components/etcd/staticPodJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=a(74848),o=a(28453),l=a(44349),s=a(285),i=a(68741),c=a(95538),u=a(60513),d=a(68747),h=a(56153);const p={},v=void 0,m={},b=[...h.toc];function k(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",strong:"strong",...(0,o.R)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f"}),"\n",(0,n.jsx)(h.default,{}),"\n",(0,n.jsx)(d.A,{language:"bash",children:(0,u.A)(`\n  export CLUSTER_NAME=${l.M.clusterName.value}\n  export BASE_DOMAIN=${l.M.kubernetesBaseDomain.value}\n  export MACHINE_LOCAL_ADDRESS=${l.M.virtualMachineLocalAddress.value}\n  export FULL_HOST_NAME=${l.M.virtualMachineFullName.value}\n\n  # \u041f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043f\u0438\u0441\u043e\u043a \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 etcd-\u043d\u043e\u0434\n  mapfile -t ETCD_PODS < <(kubectl get pods \\\n    --kubeconfig=/etc/kubernetes/admin.conf \\\n    -n kube-system -l component=etcd \\\n    -o jsonpath="{range .items[*]}{.metadata.name} {.status.podIP}{'\\n'}{end}")\n\n  ETCD_EXISTING_NODES=""\n  ETCD_ENDPOINTS=""\n\n  for entry in "\${ETCD_PODS[@]}"; do\n    read -r podname podip <<< "$entry"\n    nodename="\${podname#etcd-}"\n    ETCD_EXISTING_NODES+="\${nodename}=https://\${podip}:2380,"\n    ETCD_ENDPOINTS+="https://\${podip}:2379,"\n  done\n\n  ETCD_EXISTING_NODES="\${ETCD_EXISTING_NODES%,}"\n  ETCD_ENDPOINTS="\${ETCD_ENDPOINTS%,}"\n\n  # \u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0443\u0437\u0435\u043b, \u0435\u0441\u043b\u0438 \u0435\u0433\u043e \u043d\u0435\u0442 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435\n  ETCD_CURRENT_NODE="\${FULL_HOST_NAME}=https://\${MACHINE_LOCAL_ADDRESS}:2380"\n\n  if [[ "$ETCD_EXISTING_NODES" == *"\${FULL_HOST_NAME}="* ]]; then\n    export ETCD_INITIAL_CLUSTER="$ETCD_EXISTING_NODES"\n  else\n    if [[ -n "$ETCD_EXISTING_NODES" ]]; then\n      export ETCD_INITIAL_CLUSTER="\${ETCD_EXISTING_NODES},\${ETCD_CURRENT_NODE}"\n    else\n      export ETCD_INITIAL_CLUSTER="\${ETCD_CURRENT_NODE}"\n    fi\n  fi\n\n  export ETCD_ENDPOINTS\n`)}),"\n",(0,n.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,n.jsx)(d.A,{language:"bash",children:u.A`
      mkdir -p ${l.M.kubernetesBaseFolderPath.value}/manifests
  `}),"\n",(0,n.jsxs)(a,{className:"custom-blue-block",children:[(0,n.jsx)("summary",{children:"Static Pod ETCD"}),(0,n.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),(0,n.jsx)(d.A,{language:"bash",children:u.A`
  cat <<EOF > ${l.M.kubernetesBaseFolderPath.value}/manifests/etcd.yaml
  apiVersion: v1
  kind: Pod
  metadata:
    annotations:
      kubeadm.kubernetes.io/etcd.advertise-client-urls: https://$\{MACHINE_LOCAL_ADDRESS}:${s.h.etcdServer.portNumber}
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
      - --advertise-client-urls=${c.D.advertiseClientUrls.value}
      - --auto-compaction-retention=${c.D.autoCompactionRetention.value}
      - --cert-file=${c.D.certFile.value}
      - --client-cert-auth=${c.D.clientCertAuth.value}
      - --data-dir=${c.D.dataDir.value}
      - --election-timeout=${c.D.electionTimeout.value}
      - --experimental-initial-corrupt-check=true
      - --experimental-watch-progress-notify-interval=5s
      - --heartbeat-interval=${c.D.heartbeatInterval.value}
      - --initial-advertise-peer-urls=${c.D.initialAdvertisePeerUrls.value}
      - --initial-cluster=${c.D.initialCluster.value}
      - --initial-cluster-state=existing
      - --key-file=${c.D.keyFile.value}
      - --listen-client-urls=${c.D.listenClientUrls.value}
      - --listen-metrics-urls=${c.D.listenMetricsUrls.value}
      - --listen-peer-urls=${c.D.listenPeerUrls.value}
      - --logger=${c.D.logger.value}
      - --max-snapshots=${c.D.maxSnapshots.value}
      - --max-wals=${c.D.maxWals.value}
      - --metrics=${c.D.metrics.value}
      - --name=${c.D.name.value}
      - --peer-cert-file=${c.D.peerCertFile.value}
      - --peer-client-cert-auth=${c.D.peerClientCertAuth.value}
      - --peer-key-file=${c.D.peerKeyFile.value}
      - --peer-trusted-ca-file=${c.D.peerTrustedCAFile.value}
      - --snapshot-count=${c.D.snapshotCount.value}
      - --quota-backend-bytes=${c.D.quotaBackendBytes.value}
      - --trusted-ca-file=${c.D.trustedCAFile.value}
      image: ${l.M.baseDockerRegistry.value}/etcd:${i.M.etcd.value}
      imagePullPolicy: IfNotPresent
      livenessProbe:
        failureThreshold: 8
        httpGet:
          host: 0.0.0.0
          path: /health?exclude=NOSPACE&serializable=true
          port: ${s.h.etcdMetricServer.portNumber}
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
          port: ${s.h.etcdMetricServer.portNumber}
          scheme: HTTP
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      volumeMounts:
      - mountPath: /var/lib/etcd
        name: etcd-data
      - mountPath: ${l.M.kubernetesBaseFolderPath.value}/pki/etcd
        name: etcd-certs
    hostNetwork: true
    priority: 2000001000
    priorityClassName: system-node-critical
    securityContext:
      seccompProfile:
        type: RuntimeDefault
    volumes:
    - hostPath:
        path: ${l.M.kubernetesBaseFolderPath.value}/pki/etcd
        type: DirectoryOrCreate
      name: etcd-certs
    - hostPath:
        path: /var/lib/etcd
        type: DirectoryOrCreate
      name: etcd-data
  status: {}
  EOF
`})]}),"\n",(0,n.jsxs)(a,{className:"custom-blue-block",children:[(0,n.jsx)("summary",{children:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 ETCD \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430"}),(0,n.jsx)("h4",{children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0443\u0437\u043b\u0430"}),(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["\u041e\u0431\u044a\u044f\u0432\u043b\u044f\u0435\u043c alias \u0434\u043b\u044f ",(0,n.jsx)(t.code,{children:"etcdctl"})," \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u043d\u0443\u0436\u043d\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"]}),"\n"]}),(0,n.jsx)(d.A,{language:"bash",children:u.A`
  alias etcdctl='etcdctl \\
    --cert=/etc/kubernetes/pki/etcd/peer.crt \\
    --key=/etc/kubernetes/pki/etcd/peer.key \\
    --cacert=/etc/kubernetes/pki/etcd/ca.crt'
`}),(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0441\u043f\u0438\u0441\u043a\u0430 client-URL'\u043e\u0432 \u0432\u0441\u0435\u0445 \u0442\u0435\u043a\u0443\u0449\u0438\u0445 \u0447\u043b\u0435\u043d\u043e\u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430"}),"\n"]}),(0,n.jsx)(d.A,{language:"bash",children:u.A`
  etcdctlMembers() {
    etcdctl member list \\
      --endpoints="$ETCD_ENDPOINTS" \\
      --write-out=json | jq \\
      -r '[.members[].clientURLs[]] | join(",")'
  }
`}),(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0442\u0435\u043a\u0443\u0449\u0438\u0445 \u0447\u043b\u0435\u043d\u043e\u0432 \u043a\u0432\u043e\u0440\u0443\u043c\u0430"}),"\n"]}),(0,n.jsx)(d.A,{language:"bash",children:u.A`
  etcdctl \\
    --endpoints=$(etcdctlMembers) member list \\
    -w table
`}),(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u0443\u0437\u043b\u0430 \u0432 ETCD \u043a\u043b\u0430\u0441\u0442\u0435\u0440"}),"\n"]}),(0,n.jsx)(d.A,{language:"bash",children:u.A`
  etcdctl \\
    --endpoints=$(etcdctlMembers) \\
    member add $\{FULL_HOST_NAME} \\
    --peer-urls=https://$\{MACHINE_LOCAL_ADDRESS}:2380
`}),(0,n.jsx)(t.admonition,{title:"\u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"danger",children:(0,n.jsxs)(t.p,{children:["\u041f\u043e\u0441\u043b\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0432\u0442\u043e\u0440\u043e\u0439 \u043d\u043e\u0434\u044b \u0432 ETCD-\u043a\u0432\u043e\u0440\u0443\u043c, \u043f\u0435\u0440\u0432\u044b\u0439 \u043c\u0430\u0441\u0442\u0435\u0440 \u043c\u043e\u0436\u0435\u0442 \u0441\u0442\u0430\u0442\u044c ",(0,n.jsx)(t.strong,{children:"\u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u043c"}),", \u043f\u043e\u043a\u0430 \u0432\u0442\u043e\u0440\u043e\u0439 \u0443\u0437\u0435\u043b ETCD \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043f\u0443\u0449\u0435\u043d.\n\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 ETCD \u043d\u0430 \u043d\u043e\u0432\u043e\u0439 \u043d\u043e\u0434\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,n.jsx)(t.code,{children:"kubelet"})," (\u0441\u043c. \u0448\u0430\u0433 \u043d\u0438\u0436\u0435), \u043f\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043c \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0442\u044c."]})})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(k,{...e})}):k(e)}},50455:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/initMaster","title":"initMaster","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/setup-environments/initMaster.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments","slug":"/tech-docs/kubernetes/setup-environments/initMaster","permalink":"/tech-docs/kubernetes/setup-environments/initMaster","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=a(74848),o=a(28453),l=a(9792),s=a(76331),i=a(60513),c=a(68747);const u={},d=void 0,h={},p=[];function v(e){return(0,n.jsx)(s.A,{children:(0,n.jsx)(l.A,{value:"master-1",children:(0,n.jsx)(c.A,{language:"bash",children:i.A`
        export HOST_NAME=master-1
      `})})})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(v,{...e})}):v()}},54020:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/all-static-pods-cp","title":"5.2.1.4. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Static Pods","description":"5.2.1.4.1. Kubernetes","source":"@site/docs/tech-docs/kubernetes/components/allStaticPods.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/all-static-pods-cp","permalink":"/tech-docs/kubernetes/components/all-static-pods-cp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"all-static-pods-cp"},"sidebar":"techDocs","previous":{"title":"5.2.1.3. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u041f\u041e","permalink":"/tech-docs/kubernetes/components/all-setup"},"next":{"title":"5.2.1.5. \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430","permalink":"/tech-docs/kubernetes/components/all-components-ready"}}');var n=a(74848),o=a(28453),l=a(7100),s=a(59262);const i={id:"all-static-pods-cp"},c="5.2.1.4. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Static Pods",u={},d=[{value:"5.2.1.4.1. Kubernetes",id:"52141-kubernetes",level:2},...l.toc,{value:"5.2.1.4.2. ETCD",id:"52142-etcd",level:2},...s.toc];function h(e){const t={h1:"h1",h2:"h2",header:"header",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"5214-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-static-pods",children:"5.2.1.4. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Static Pods"})}),"\n",(0,n.jsx)(t.h2,{id:"52141-kubernetes",children:"5.2.1.4.1. Kubernetes"}),"\n",(0,n.jsx)(l.default,{}),"\n",(0,n.jsx)(t.h2,{id:"52142-etcd",children:"5.2.1.4.2. ETCD"}),"\n",(0,n.jsx)(s.default,{})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},56153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/secondaryMasters","title":"secondaryMasters","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/setup-environments/secondaryMasters.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments","slug":"/tech-docs/kubernetes/setup-environments/secondaryMasters","permalink":"/tech-docs/kubernetes/setup-environments/secondaryMasters","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=a(74848),o=a(28453),l=a(9792),s=a(76331),i=a(60513),c=a(68747);const u={},d=void 0,h={},p=[];function v(e){return(0,n.jsxs)(s.A,{children:[(0,n.jsx)(l.A,{value:"master-2",children:(0,n.jsx)(c.A,{language:"bash",children:i.A`
        export HOST_NAME=master-2
      `})}),(0,n.jsx)(l.A,{value:"master-3",children:(0,n.jsx)(c.A,{language:"bash",children:i.A`
        export HOST_NAME=master-3
      `})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(v,{...e})}):v()}},56223:(e,t,a)=>{a.d(t,{L:()=>l});var r=a(65742),n=a(285),o=a(44349);const l={etcdCafile:{value:`${r.$.etcdCA.crtPath}`},etcdCertfile:{value:`${r.$.kubernetesEtcdClient.crtPath}`},etcdKeyfile:{value:`${r.$.kubernetesEtcdClient.keyPath}`},certDir:{value:"/var/run/kubernetes"},kubeletClientCertificate:{value:`${r.$.kubernetesKubeletClient.crtPath}`},kubeletClientKey:{value:`${r.$.kubernetesKubeletClient.keyPath}`},clientCAFile:{value:`${r.$.kubernetesCA.crtPath}`},proxyClientCertFile:{value:`${r.$.kubernetesFrontProxyClient.crtPath}`},proxyClientKeyFile:{value:`${r.$.kubernetesFrontProxyClient.keyPath}`},tlsCertFile:{value:`${r.$.kubernetesServer.crtPath}`},tlsPrivateKeyFile:{value:`${r.$.kubernetesServer.keyPath}`},clientCaFile:{value:`${r.$.kubernetesCA.crtPath}`},serviceAccountKeyFile:{value:`${r.$.kubernetesSA.crtPath}`},requestheaderClientCaFile:{value:`${r.$.frontProxyCA.crtPath}`},serviceAccountSigningKeyFile:{value:`${r.$.kubernetesSA.keyPath}`},aggregatorRejectForwardingRedirect:{value:"true"},allowPrivileged:{value:"true"},anonymousAuth:{value:"true"},auditLogBatchThrottleEnable:{value:"false"},auditLogCompress:{value:"false"},auditLogTruncateEnabled:{value:"false"},auditWebhookBatchThrottleEnable:{value:"true"},auditWebhookTruncateEnabled:{value:"false"},contentionProfiling:{value:"false"},enableAggregatorRouting:{value:"true"},enableBootstrapTokenAuth:{value:"true"},enableGarbageCollector:{value:"true"},enableLogsHandler:{value:"true"},enablePriorityAndFairness:{value:"true"},encryptionProviderConfigAutomaticReload:{value:"false"},help:{value:"false"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},version:{value:"false"},watchCache:{value:"true"},logTextSplitStream:{value:"false"},shutdownSendRetryAfter:{value:"false"},logJsonSplitStream:{value:"false"},serviceAccountExtendTokenExpiration:{value:"true"},serviceAccountLookup:{value:"true"},apiserverCount:{value:"1"},auditLogBatchBufferSize:{value:"10000"},auditLogBatchMaxSize:{value:"1"},auditLogBatchThrottleBurst:{value:"0"},auditLogBatchThrottleQps:{value:"0"},auditLogMaxage:{value:"30"},auditLogMaxbackup:{value:"10"},auditLogMaxsize:{value:"1000"},auditLogTruncateMaxBatchSize:{value:"10485760"},auditLogTruncateMaxEventSize:{value:"102400"},auditWebhookBatchBufferSize:{value:"10000"},auditWebhookBatchMaxSize:{value:"400"},auditWebhookBatchThrottleBurst:{value:"15"},auditWebhookBatchThrottleQps:{value:"10"},auditWebhookTruncateMaxBatchSize:{value:"10485760"},auditWebhookTruncateMaxEventSize:{value:"102400"},defaultNotReadyTolerationSeconds:{value:"300"},defaultUnreachableTolerationSeconds:{value:"300"},defaultWatchCacheSize:{value:"100"},deleteCollectionWorkers:{value:"1"},kubernetesServiceNodePort:{value:"0"},leaseReuseDurationSeconds:{value:"60"},maxMutatingRequestsInflight:{value:"200"},maxRequestsInflight:{value:"400"},minRequestTimeout:{value:"1800"},goawayChance:{value:"0"},http2MaxStreamsPerConnection:{value:"0"},v:{value:"2"},logJsonInfoBufferSize:{value:"0"},logTextInfoBufferSize:{value:"0"},maxConnectionBytesPerSec:{value:"0"},kubeletPort:{value:`${n.h.kubeletServer.portNumber}`},securePort:{value:`${n.h.kubeAPIServer.portNumber}`},kubeletReadOnlyPort:{value:`${n.h.kubeletReadOnlyPort.portNumber}`},serviceNodePortRange:{value:"30000-32767"},etcdServers:{value:`https://127.0.0.1:${n.h.etcdServer.portNumber}`},serviceAccountIssuer:{value:`https://kubernetes.default.svc.${o.M.kubernetesClusterDomain.value}`},serviceClusterIpRange:{value:`${o.M.kubernetesServiceCIDR.value}`},auditWebhookInitialBackoff:{value:"10s"},auditWebhookBatchMaxWait:{value:"30s"},serviceAccountMaxTokenExpiration:{value:"0s"},shutdownWatchTerminationGracePeriod:{value:"0s"},shutdownDelayDuration:{value:"0s"},requestTimeout:{value:"1m0s"},eventTtl:{value:"1h0m0s"},livezGracePeriod:{value:"0s"},logFlushFrequency:{value:"5s"},kubeletTimeout:{value:"5s"},etcdCompactionInterval:{value:"5m0s"},etcdCountMetricPollPeriod:{value:"1m0s"},etcdDbMetricPollInterval:{value:"30s"},etcdHealthcheckTimeout:{value:"2s"},etcdReadycheckTimeout:{value:"2s"},authenticationTokenWebhookCacheTtl:{value:"2m0s"},authorizationWebhookCacheAuthorizedTtl:{value:"5m0s"},authorizationWebhookCacheUnauthorizedTtl:{value:"30s"},auditWebhookBatchInitialBackoff:{value:"10s"},auditLogBatchMaxWait:{value:"0s"},bindAddress:{value:"0.0.0.0"},cloudProviderGceL7lbSrcCidrs:{value:"130.211.0.0/22,35.191.0.0/16"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},apiAudiences:{value:"konnectivity-server"},loggingFormat:{value:"text"},auditLogFormat:{value:"json"},auditLogMode:{value:"batch"},auditWebhookMode:{value:"batch"},auditLogVersion:{value:"audit.k8s.io/v1"},auditWebhookVersion:{value:"audit.k8s.io/v1"},authenticationTokenWebhookVersion:{value:"v1beta1"},authorizationMode:{value:"Node,RBAC"},authorizationWebhookVersion:{value:"v1beta1"},cloudProvider:{value:"external"},enableAdmissionPlugins:{value:"NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,PodSecurity"},endpointReconcilerType:{value:"lease"},storageMediaType:{value:"application/vnd.kubernetes.protobuf"},etcdPrefix:{value:"/registry"},featureGates:{value:"RotateKubeletServerCertificate=true"},kubeletPreferredAddressTypes:{value:"InternalIP,ExternalIP,Hostname"},oidcSigningAlgs:{value:"RS256"},oidcUsernameClaim:{value:"sub"},requestheaderAllowedNames:{value:"front-proxy-client"},requestheaderExtraHeadersPrefix:{value:"X-Remote-Extra-"},requestheaderGroupHeaders:{value:"X-Remote-Group"},requestheaderUsernameHeaders:{value:"X-Remote-User"},runtimeConfig:{value:"api/all=true"},storageBackend:{value:"etcd3"},auditPolicyFile:{value:`${o.M.kubernetesAPIAuditPolicyPath.value}`},auditLogPath:{value:`${o.M.kubernetesAPIAuditLogPath.value}`},advertiseAddress:{value:""},admissionControl:{value:""},admissionControlConfigFile:{value:""},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},auditWebhookConfigFile:{value:""},authenticationConfig:{value:""},authenticationTokenWebhookConfigFile:{value:""},authorizationConfig:{value:""},authorizationPolicyFile:{value:""},authorizationWebhookConfigFile:{value:""},cloudConfig:{value:""},corsAllowedOrigins:{value:""},debugSocketPath:{value:""},disableAdmissionPlugins:{value:""},disabledMetrics:{value:""},egressSelectorConfigFile:{value:""},encryptionProviderConfig:{value:""},etcdServersOverrides:{value:""},externalHostname:{value:""},kubeletCertificateAuthority:{value:""},oidcCaFile:{value:""},oidcClientId:{value:""},oidcGroupsClaim:{value:""},oidcGroupsPrefix:{value:""},oidcIssuerUrl:{value:""},oidcRequiredClaim:{value:""},oidcUsernamePrefix:{value:""},peerAdvertiseIp:{value:""},peerAdvertisePort:{value:""},peerCaFile:{value:""},serviceAccountJwksUri:{value:""},showHiddenMetricsForVersion:{value:""},strictTransportSecurityDirectives:{value:""},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsSniCertKey:{value:""},tokenAuthFile:{value:""},tracingConfigFile:{value:""},vmodule:{value:""},watchCacheSizes:{value:""}}},59262:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/allStaticPodsETCDComponent","title":"allStaticPodsETCDComponent","description":"\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0440\u0443\u0447\u043d\u043e\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 static pod-\u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u043e\u0432 \u0434\u043b\u044f ETCD.","source":"@site/docs/tech-docs/kubernetes/components/allStaticPodsETCDComponent.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/allStaticPodsETCDComponent","permalink":"/tech-docs/kubernetes/components/allStaticPodsETCDComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=a(74848),o=a(28453),l=a(67459),s=a(93799),i=a(9792),c=a(76331);const u={},d=void 0,h={},p=[...l.toc,...s.toc];function v(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0440\u0443\u0447\u043d\u043e\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 static pod-\u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u043e\u0432 \u0434\u043b\u044f ETCD."}),"\n"]}),"\n",(0,n.jsxs)(c.A,{groupId:"phase",children:[(0,n.jsx)(i.A,{value:"init",children:(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,n.jsx)("p",{style:{marginBottom:0},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Static Pods"}),(0,n.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,n.jsx)(l.default,{})]})}),(0,n.jsx)(i.A,{value:"join",children:(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,n.jsx)("p",{style:{marginBottom:0},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Static Pods"}),(0,n.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,n.jsx)(s.default,{})]})})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(v,{...e})}):v(e)}},61682:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>b,frontMatter:()=>d,metadata:()=>r,toc:()=>v});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/allStaticPodsCPInitComponent","title":"allStaticPodsCPInitComponent","description":"\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0440\u0443\u0447\u043d\u043e\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 static pod-\u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u043e\u0432 \u0434\u043b\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430 Kubernetes.","source":"@site/docs/tech-docs/kubernetes/components/allStaticPodsCPInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/allStaticPodsCPInitComponent","permalink":"/tech-docs/kubernetes/components/allStaticPodsCPInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=a(74848),o=a(28453),l=a(82198),s=a(77720),i=a(9635),c=a(9792),u=a(76331);const d={},h=void 0,p={},v=[...l.toc,...s.toc,...i.toc];function m(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0440\u0443\u0447\u043d\u043e\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 static pod-\u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u043e\u0432 \u0434\u043b\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430 Kubernetes."}),"\n"]}),"\n",(0,n.jsxs)(u.A,{groupId:"Componenet",children:[(0,n.jsx)(c.A,{value:"Kube-API",children:(0,n.jsxs)(a,{open:!0,className:"custom-gray-block",children:[(0,n.jsx)("summary",{children:(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,n.jsx)("p",{style:{marginBottom:0},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kube-API"}),(0,n.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,n.jsx)(l.default,{})]})}),(0,n.jsx)(c.A,{value:"Kube Controller Manager",children:(0,n.jsxs)(a,{open:!0,className:"custom-gray-block",children:[(0,n.jsx)("summary",{children:(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,n.jsx)("p",{style:{marginBottom:0},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kube Controller Manager"}),(0,n.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,n.jsx)(s.default,{})]})}),(0,n.jsx)(c.A,{value:"Kube Scheduler",children:(0,n.jsxs)(a,{open:!0,className:"custom-gray-block",children:[(0,n.jsx)("summary",{children:(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,n.jsx)("p",{style:{marginBottom:0},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kube Scheduler"}),(0,n.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,n.jsx)(i.default,{})]})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},65742:(e,t,a)=>{a.d(t,{$:()=>n});var r=a(44349);const n={etcdCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},kubernetesControllerManagerServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-server.conf`,keySize:"2048",cname:"system:kube-controller-manager-server"},etcdClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/sa.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"},kubernetesSchedulerServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/scheduler-server.conf`,keySize:"2048",cname:"system:kube-scheduler-server"}}},66877:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>p,default:()=>k,frontMatter:()=>h,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/staticPod","title":"staticPod","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/kubeAPI/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/staticPod","permalink":"/tech-docs/kubernetes/components/kubeAPI/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=a(74848),o=a(28453),l=a(44349),s=a(68741),i=a(56223),c=a(285),u=a(68747),d=a(60513);const h={},p=void 0,v={},m=[];function b(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,n.jsx)(u.A,{language:"bash",children:d.A`
    export MACHINE_LOCAL_ADDRESS=${l.M.virtualMachineLocalAddress.value}
  `}),"\n",(0,n.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,n.jsx)(u.A,{language:"bash",children:d.A`
      mkdir -p ${l.M.kubernetesBaseFolderPath.value}/manifests
  `}),"\n",(0,n.jsxs)(t,{className:"custom-blue-block",children:[(0,n.jsx)("summary",{children:"Static Pod Kube-apiserver"}),(0,n.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),(0,n.jsx)(u.A,{language:"bash",children:d.A`
  cat <<EOF > ${l.M.kubernetesBaseFolderPath.value}/manifests/kube-apiserver.yaml
  ---
  apiVersion: v1
  kind: Pod
  metadata:
    annotations:
      kubeadm.kubernetes.io/kube-apiserver.advertise-address.endpoint: $\{MACHINE_LOCAL_ADDRESS}:${i.L.securePort.value}
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
      - --aggregator-reject-forwarding-redirect=${i.L.aggregatorRejectForwardingRedirect.value}
      - --allow-privileged=${i.L.allowPrivileged.value}
      - --anonymous-auth=${i.L.anonymousAuth.value}
      - --api-audiences=${i.L.apiAudiences.value}
      - --apiserver-count=${i.L.apiserverCount.value}
      - --audit-log-batch-buffer-size=${i.L.auditLogBatchBufferSize.value}
      - --audit-log-batch-max-size=${i.L.auditLogBatchMaxSize.value}
      - --audit-log-batch-max-wait=${i.L.auditLogBatchMaxWait.value}
      - --audit-log-batch-throttle-burst=${i.L.auditLogBatchThrottleBurst.value}
      - --audit-log-batch-throttle-enable=${i.L.auditLogBatchThrottleEnable.value}
      - --audit-log-batch-throttle-qps=${i.L.auditLogBatchThrottleQps.value}
      - --audit-log-compress=${i.L.auditLogCompress.value}
      - --audit-log-format=${i.L.auditLogFormat.value}
      - --audit-log-maxage=${i.L.auditLogMaxage.value}
      - --audit-log-maxbackup=${i.L.auditLogMaxbackup.value}
      - --audit-log-maxsize=${i.L.auditLogMaxsize.value}
      - --audit-log-mode=${i.L.auditLogMode.value}
      - --audit-log-truncate-enabled=${i.L.auditLogTruncateEnabled.value}
      - --audit-log-truncate-max-batch-size=${i.L.auditLogTruncateMaxBatchSize.value}
      - --audit-log-truncate-max-event-size=${i.L.auditLogTruncateMaxEventSize.value}
      - --audit-log-version=${i.L.auditLogVersion.value}
      - --audit-webhook-batch-buffer-size=${i.L.auditWebhookBatchBufferSize.value}
      - --audit-webhook-batch-initial-backoff=${i.L.auditWebhookBatchInitialBackoff.value}
      - --audit-webhook-batch-max-size=${i.L.auditWebhookBatchMaxSize.value}
      - --audit-webhook-batch-max-wait=${i.L.auditWebhookBatchMaxWait.value}
      - --audit-webhook-batch-throttle-burst=${i.L.auditWebhookBatchThrottleBurst.value}
      - --audit-webhook-batch-throttle-enable=${i.L.auditWebhookBatchThrottleEnable.value}
      - --audit-webhook-batch-throttle-qps=${i.L.auditWebhookBatchThrottleQps.value}
      - --audit-webhook-initial-backoff=${i.L.auditWebhookInitialBackoff.value}
      - --audit-webhook-mode=${i.L.auditWebhookMode.value}
      - --audit-webhook-truncate-enabled=${i.L.auditWebhookTruncateEnabled.value}
      - --audit-webhook-truncate-max-batch-size=${i.L.auditWebhookTruncateMaxBatchSize.value}
      - --audit-webhook-truncate-max-event-size=${i.L.auditWebhookTruncateMaxEventSize.value}
      - --audit-webhook-version=${i.L.auditWebhookVersion.value}
      - --audit-policy-file=${i.L.auditPolicyFile.value}
      - --audit-log-path=${i.L.auditLogPath.value}
      - --authentication-token-webhook-cache-ttl=${i.L.authenticationTokenWebhookCacheTtl.value}
      - --authentication-token-webhook-version=${i.L.authenticationTokenWebhookVersion.value}
      - --authorization-mode=${i.L.authorizationMode.value}
      - --authorization-webhook-cache-authorized-ttl=${i.L.authorizationWebhookCacheAuthorizedTtl.value}
      - --authorization-webhook-cache-unauthorized-ttl=${i.L.authorizationWebhookCacheUnauthorizedTtl.value}
      - --authorization-webhook-version=${i.L.authorizationWebhookVersion.value}
      - --bind-address=${i.L.bindAddress.value}
      - --cert-dir=${i.L.certDir.value}
      - --client-ca-file=${i.L.clientCaFile.value}
      # -> Включить, если управляете состоянием через Cloud Controller Manager
      # - --cloud-provider=${i.L.cloudProvider.value}
      - --cloud-provider-gce-l7lb-src-cidrs=${i.L.cloudProviderGceL7lbSrcCidrs.value}
      - --cloud-provider-gce-lb-src-cidrs=${i.L.cloudProviderGceLbSrcCidrs.value}
      - --contention-profiling=${i.L.contentionProfiling.value}
      - --default-not-ready-toleration-seconds=${i.L.defaultNotReadyTolerationSeconds.value}
      - --default-unreachable-toleration-seconds=${i.L.defaultUnreachableTolerationSeconds.value}
      - --default-watch-cache-size=${i.L.defaultWatchCacheSize.value}
      - --delete-collection-workers=${i.L.deleteCollectionWorkers.value}
      - --enable-admission-plugins=${i.L.enableAdmissionPlugins.value}
      - --enable-aggregator-routing=${i.L.enableAggregatorRouting.value}
      - --enable-bootstrap-token-auth=${i.L.enableBootstrapTokenAuth.value}
      - --enable-garbage-collector=${i.L.enableGarbageCollector.value}
      - --enable-logs-handler=${i.L.enableLogsHandler.value}
      - --enable-priority-and-fairness=${i.L.enablePriorityAndFairness.value}
      - --encryption-provider-config-automatic-reload=${i.L.encryptionProviderConfigAutomaticReload.value}
      - --endpoint-reconciler-type=${i.L.endpointReconcilerType.value}
      - --etcd-cafile=${i.L.etcdCafile.value}
      - --etcd-certfile=${i.L.etcdCertfile.value}
      - --etcd-compaction-interval=${i.L.etcdCompactionInterval.value}
      - --etcd-count-metric-poll-period=${i.L.etcdCountMetricPollPeriod.value}
      - --etcd-db-metric-poll-interval=${i.L.etcdDbMetricPollInterval.value}
      - --etcd-healthcheck-timeout=${i.L.etcdHealthcheckTimeout.value}
      - --etcd-keyfile=${i.L.etcdKeyfile.value}
      - --etcd-prefix=${i.L.etcdPrefix.value}
      - --etcd-readycheck-timeout=${i.L.etcdReadycheckTimeout.value}
      - --etcd-servers=${i.L.etcdServers.value}
      - --event-ttl=${i.L.eventTtl.value}
      - --feature-gates=${i.L.featureGates.value}
      - --goaway-chance=${i.L.goawayChance.value}
      - --help=${i.L.help.value}
      - --http2-max-streams-per-connection=${i.L.http2MaxStreamsPerConnection.value}
      - --kubelet-client-certificate=${i.L.kubeletClientCertificate.value}
      - --kubelet-client-key=${i.L.kubeletClientKey.value}
      - --kubelet-port=${i.L.kubeletPort.value}
      - --kubelet-preferred-address-types=${i.L.kubeletPreferredAddressTypes.value}
      - --kubelet-read-only-port=${i.L.kubeletReadOnlyPort.value}
      - --kubelet-timeout=${i.L.kubeletTimeout.value}
      - --kubernetes-service-node-port=${i.L.kubernetesServiceNodePort.value}
      - --lease-reuse-duration-seconds=${i.L.leaseReuseDurationSeconds.value}
      - --livez-grace-period=${i.L.livezGracePeriod.value}
      - --log-flush-frequency=${i.L.logFlushFrequency.value}
      - --logging-format=${i.L.loggingFormat.value}
      - --log-json-info-buffer-size=${i.L.logJsonInfoBufferSize.value}
      - --log-json-split-stream=${i.L.logJsonSplitStream.value}
      - --log-text-info-buffer-size=${i.L.logTextInfoBufferSize.value}
      - --log-text-split-stream=${i.L.logTextSplitStream.value}
      - --max-connection-bytes-per-sec=${i.L.maxConnectionBytesPerSec.value}
      - --max-mutating-requests-inflight=${i.L.maxMutatingRequestsInflight.value}
      - --max-requests-inflight=${i.L.maxRequestsInflight.value}
      - --min-request-timeout=${i.L.minRequestTimeout.value}
      - --permit-address-sharing=${i.L.permitAddressSharing.value}
      - --permit-port-sharing=${i.L.permitPortSharing.value}
      - --profiling=${i.L.profiling.value}
      - --proxy-client-cert-file=${i.L.proxyClientCertFile.value}
      - --proxy-client-key-file=${i.L.proxyClientKeyFile.value}
      - --requestheader-allowed-names=${i.L.requestheaderAllowedNames.value}
      - --requestheader-client-ca-file=${i.L.requestheaderClientCaFile.value}
      - --requestheader-extra-headers-prefix=${i.L.requestheaderExtraHeadersPrefix.value}
      - --requestheader-group-headers=${i.L.requestheaderGroupHeaders.value}
      - --requestheader-username-headers=${i.L.requestheaderUsernameHeaders.value}
      - --request-timeout=${i.L.requestTimeout.value}
      - --runtime-config=${i.L.runtimeConfig.value}
      - --secure-port=${i.L.securePort.value}
      - --service-account-extend-token-expiration=${i.L.serviceAccountExtendTokenExpiration.value}
      - --service-account-issuer=${i.L.serviceAccountIssuer.value}
      - --service-account-key-file=${i.L.serviceAccountKeyFile.value}
      - --service-account-lookup=${i.L.serviceAccountLookup.value}
      - --service-account-max-token-expiration=${i.L.serviceAccountMaxTokenExpiration.value}
      - --service-account-signing-key-file=${i.L.serviceAccountSigningKeyFile.value}
      - --service-cluster-ip-range=${i.L.serviceClusterIpRange.value}
      - --service-node-port-range=${i.L.serviceNodePortRange.value}
      - --shutdown-delay-duration=${i.L.shutdownDelayDuration.value}
      - --shutdown-send-retry-after=${i.L.shutdownSendRetryAfter.value}
      - --shutdown-watch-termination-grace-period=${i.L.shutdownWatchTerminationGracePeriod.value}
      - --storage-backend=${i.L.storageBackend.value}
      - --storage-media-type=${i.L.storageMediaType.value}
      - --tls-cert-file=${i.L.tlsCertFile.value}
      - --tls-private-key-file=${i.L.tlsPrivateKeyFile.value}
      - --v=${i.L.v.value}
      - --version=${i.L.version.value}
      - --watch-cache=${i.L.watchCache.value}
      # ЕСЛИ НУЖНО ПОДКЛЮЧИТЬ CLOUD-CONTROLLER-MANAGER
      # ТРЕБУЕТСЯ РАСКОМЕНТИРОВАТЬ
      # ->
      # - --cloud-provider: "${i.L.cloudProvider.value}"
      # Не указывать если значение "" или undefined
      # - --cloud-config=${i.L.cloudConfig.value}
      # - --strict-transport-security-directives=${i.L.strictTransportSecurityDirectives.value}
      # - --disable-admission-plugins=${i.L.disableAdmissionPlugins.value}
      # - --disabled-metrics=${i.L.disabledMetrics.value}
      # - --egress-selector-config-file=${i.L.egressSelectorConfigFile.value}
      # - --encryption-provider-config=${i.L.encryptionProviderConfig.value}
      # - --etcd-servers-overrides=${i.L.etcdServersOverrides.value}
      # - --external-hostname=${i.L.externalHostname.value}
      # - --kubelet-certificate-authority=${i.L.kubeletCertificateAuthority.value}
      # - --oidc-ca-file=${i.L.oidcCaFile.value}
      # - --oidc-client-id=${i.L.oidcClientId.value}
      # - --oidc-groups-claim=${i.L.oidcGroupsClaim.value}
      # - --oidc-groups-prefix=${i.L.oidcGroupsPrefix.value}
      # - --oidc-issuer-url=${i.L.oidcIssuerUrl.value}
      # - --oidc-required-claim=${i.L.oidcRequiredClaim.value}
      # - --oidc-signing-algs=${i.L.oidcSigningAlgs.value}
      # - --oidc-username-claim=${i.L.oidcUsernameClaim.value}
      # - --oidc-username-prefix=${i.L.oidcUsernamePrefix.value}
      # - --peer-advertise-ip=${i.L.peerAdvertiseIp.value}
      # - --peer-advertise-port=${i.L.peerAdvertisePort.value}
      # - --peer-ca-file=${i.L.peerCaFile.value}
      # - --service-account-jwks-uri=${i.L.serviceAccountJwksUri.value}
      # - --show-hidden-metrics-for-version=${i.L.showHiddenMetricsForVersion.value}
      # - --tls-cipher-suites=${i.L.tlsCipherSuites.value}
      # - --tls-min-version=${i.L.tlsMinVersion.value}
      # - --tls-sni-cert-key=${i.L.tlsSniCertKey.value}
      # - --token-auth-file=${i.L.tokenAuthFile.value}
      # - --tracing-config-file=${i.L.tracingConfigFile.value}
      # - --vmodule=${i.L.vmodule.value}
      # - --watch-cache-sizes=${i.L.watchCacheSizes.value}
      # - --authorization-webhook-config-file=${i.L.authorizationWebhookConfigFile.value}
      # - --cors-allowed-origins=${i.L.corsAllowedOrigins.value}
      # - --debug-socket-path=${i.L.debugSocketPath.value}
      # - --authorization-policy-file=${i.L.authorizationPolicyFile.value}
      # - --authorization-config=${i.L.authorizationConfig.value}
      # - --authentication-token-webhook-config-file=${i.L.authenticationTokenWebhookConfigFile.value}
      # - --authentication-config=${i.L.authenticationConfig.value}
      # - --audit-webhook-config-file=${i.L.auditWebhookConfigFile.value}
      # - --allow-metric-labels=${i.L.allowMetricLabels.value}
      # - --allow-metric-labels-manifest=${i.L.allowMetricLabelsManifest.value}
      # - --admission-control=${i.L.admissionControl.value}
      # - --admission-control-config-file=${i.L.admissionControlConfigFile.value}
      # - --advertise-address=${i.L.advertiseAddress.value}
      image: ${l.M.baseDockerRegistry.value}/kube-apiserver:${s.M.kubernetes.value}
      imagePullPolicy: IfNotPresent
      livenessProbe:
        failureThreshold: 8
        httpGet:
          host: $\{MACHINE_LOCAL_ADDRESS}
          path: /livez
          port: ${c.h.kubeAPIServer.portNumber}
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
          port: ${c.h.kubeAPIServer.portNumber}
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
          port: ${c.h.kubeAPIServer.portNumber}
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
`})]})]})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},67459:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcd/setupInitComponent","title":"setupInitComponent","description":"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445.","source":"@site/docs/tech-docs/etcd/components/etcd/setupInitComponent.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/setupInitComponent","permalink":"/tech-docs/etcd/components/etcd/setupInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=a(74848),o=a(28453),l=a(9792),s=a(76331),i=a(26412),c=a(29449);const u={},d=void 0,h={},p=[...i.toc,...c.toc];function v(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:(0,n.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445."})}),"\n",(0,n.jsxs)(s.A,{groupId:"install-type",children:[(0,n.jsx)(l.A,{value:"HardWay",children:(0,n.jsx)(i.default,{})}),(0,n.jsx)(l.A,{value:"Kubeadm",children:(0,n.jsx)(c.default,{})})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(v,{...e})}):v(e)}},68741:(e,t,a)=>{a.d(t,{M:()=>r});const r={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.12"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},71570:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>p,default:()=>k,frontMatter:()=>h,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/controllerManager/staticPod","title":"staticPod","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/controllerManager/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/controllerManager","slug":"/tech-docs/kubernetes/components/controllerManager/staticPod","permalink":"/tech-docs/kubernetes/components/controllerManager/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=a(74848),o=a(28453),l=a(44349),s=(a(65742),a(285)),i=a(68741),c=a(21232),u=a(60513),d=a(68747);const h={},p=void 0,v={},m=[];function b(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,n.jsx)(d.A,{language:"bash",children:u.A`
  export CLUSTER_NAME=${l.M.clusterName.value}
`}),"\n",(0,n.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,n.jsx)(d.A,{language:"bash",children:u.A`
  mkdir -p ${l.M.kubernetesBaseFolderPath.value}/manifests
`}),"\n",(0,n.jsxs)(t,{className:"custom-blue-block",children:[(0,n.jsx)("summary",{children:"Static Pod Kube-Controller-Manager"}),(0,n.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),(0,n.jsx)(d.A,{language:"bash",children:u.A`
  cat <<EOF > ${l.M.kubernetesBaseFolderPath.value}/manifests/kube-controller-manager.yaml
  apiVersion: v1
  kind: Pod
  metadata:
    creationTimestamp: null
    labels:
      component: kube-controller-manager
      tier: control-plane
    name: kube-controller-manager
    namespace: kube-system
  spec:
    containers:
    - command:
      - kube-controller-manager
      - --allocate-node-cidrs=${c.L.allocateNodeCidrs.value}
      - --allow-untagged-cloud=${c.L.allowUntaggedCloud.value}
      - --attach-detach-reconcile-sync-period=${c.L.attachDetachReconcileSyncPeriod.value}
      - --authentication-kubeconfig=${c.L.authenticationKubeconfig.value}
      - --authentication-skip-lookup=${c.L.authenticationSkipLookup.value}
      - --authentication-token-webhook-cache-ttl=${c.L.authenticationTokenWebhookCacheTtl.value}
      - --authentication-tolerate-lookup-failure=${c.L.authenticationTolerateLookupFailure.value}
      - --authorization-always-allow-paths=${c.L.authorizationAlwaysAllowPaths.value}
      - --authorization-kubeconfig=${c.L.authorizationKubeconfig.value}
      - --authorization-webhook-cache-authorized-ttl=${c.L.authorizationWebhookCacheAuthorizedTtl.value}
      - --authorization-webhook-cache-unauthorized-ttl=${c.L.authorizationWebhookCacheUnauthorizedTtl.value}
      - --bind-address=${c.L.bindAddress.value}
      - --cidr-allocator-type=${c.L.cidrAllocatorType.value}
      - --client-ca-file=${c.L.clientCaFile.value}
      - --cluster-name=${c.L.clusterName.value}
      - --cloud-provider-gce-lb-src-cidrs=${c.L.cloudProviderGceLbSrcCidrs.value}
      - --cluster-signing-cert-file=${c.L.clusterSigningCertFile.value}
      - --cluster-signing-duration=${c.L.clusterSigningDuration.value}
      - --cluster-signing-key-file=${c.L.clusterSigningKeyFile.value}
      - --concurrent-cron-job-syncs=${c.L.concurrentCronJobSyncs.value}
      - --concurrent-deployment-syncs=${c.L.concurrentDeploymentSyncs.value}
      - --concurrent-endpoint-syncs=${c.L.concurrentEndpointSyncs.value}
      - --concurrent-ephemeralvolume-syncs=${c.L.concurrentEphemeralvolumeSyncs.value}
      - --concurrent-gc-syncs=${c.L.concurrentGcSyncs.value}
      - --concurrent-horizontal-pod-autoscaler-syncs=${c.L.concurrentHorizontalPodAutoscalerSyncs.value}
      - --concurrent-job-syncs=${c.L.concurrentJobSyncs.value}
      - --concurrent-namespace-syncs=${c.L.concurrentNamespaceSyncs.value}
      - --concurrent-rc-syncs=${c.L.concurrentRcSyncs.value}
      - --concurrent-replicaset-syncs=${c.L.concurrentReplicasetSyncs.value}
      - --concurrent-resource-quota-syncs=${c.L.concurrentResourceQuotaSyncs.value}
      - --concurrent-service-endpoint-syncs=${c.L.concurrentServiceEndpointSyncs.value}
      - --concurrent-service-syncs=${c.L.concurrentServiceSyncs.value}
      - --concurrent-serviceaccount-token-syncs=${c.L.concurrentServiceaccountTokenSyncs.value}
      - --concurrent-statefulset-syncs=${c.L.concurrentStatefulsetSyncs.value}
      - --concurrent-ttl-after-finished-syncs=${c.L.concurrentTtlAfterFinishedSyncs.value}
      - --concurrent-validating-admission-policy-status-syncs=${c.L.concurrentValidatingAdmissionPolicyStatusSyncs.value}
      - --configure-cloud-routes=${c.L.configureCloudRoutes.value}
      - --contention-profiling=${c.L.contentionProfiling.value}
      - --controller-start-interval=${c.L.controllerStartInterval.value}
      - --controllers=${c.L.controllers.value}
      - --disable-attach-detach-reconcile-sync=${c.L.disableAttachDetachReconcileSync.value}
      - --disable-force-detach-on-timeout=${c.L.disableForceDetachOnTimeout.value}
      - --enable-dynamic-provisioning=${c.L.enableDynamicProvisioning.value}
      - --enable-garbage-collector=${c.L.enableGarbageCollector.value}
      - --enable-hostpath-provisioner=${c.L.enableHostpathProvisioner.value}
      - --enable-leader-migration=${c.L.enableLeaderMigration.value}
      - --endpoint-updates-batch-period=${c.L.endpointUpdatesBatchPeriod.value}
      - --endpointslice-updates-batch-period=${c.L.endpointsliceUpdatesBatchPeriod.value}
      - --feature-gates=${c.L.featureGates.value}
      - --flex-volume-plugin-dir=${c.L.flexVolumePluginDir.value}
      - --help=${c.L.help.value}
      - --horizontal-pod-autoscaler-cpu-initialization-period=${c.L.horizontalPodAutoscalerCpuInitializationPeriod.value}
      - --horizontal-pod-autoscaler-downscale-delay=${c.L.horizontalPodAutoscalerDownscaleDelay.value}
      - --horizontal-pod-autoscaler-downscale-stabilization=${c.L.horizontalPodAutoscalerDownscaleStabilization.value}
      - --horizontal-pod-autoscaler-initial-readiness-delay=${c.L.horizontalPodAutoscalerInitialReadinessDelay.value}
      - --horizontal-pod-autoscaler-sync-period=${c.L.horizontalPodAutoscalerSyncPeriod.value}
      - --horizontal-pod-autoscaler-tolerance=${c.L.horizontalPodAutoscalerTolerance.value}
      - --horizontal-pod-autoscaler-upscale-delay=${c.L.horizontalPodAutoscalerUpscaleDelay.value}
      - --http2-max-streams-per-connection=${c.L.http2MaxStreamsPerConnection.value}
      - --kube-api-burst=${c.L.kubeApiBurst.value}
      - --kube-api-content-type=${c.L.kubeApiContentType.value}
      - --kube-api-qps=${c.L.kubeApiQps.value}
      - --kubeconfig=${c.L.kubeconfig.value}
      - --large-cluster-size-threshold=${c.L.largeClusterSizeThreshold.value}
      - --leader-elect=${c.L.leaderElect.value}
      - --leader-elect-lease-duration=${c.L.leaderElectLeaseDuration.value}
      - --leader-elect-renew-deadline=${c.L.leaderElectRenewDeadline.value}
      - --leader-elect-resource-lock=${c.L.leaderElectResourceLock.value}
      - --leader-elect-resource-name=${c.L.leaderElectResourceName.value}
      - --leader-elect-resource-namespace=${c.L.leaderElectResourceNamespace.value}
      - --leader-elect-retry-period=${c.L.leaderElectRetryPeriod.value}
      - --legacy-service-account-token-clean-up-period=${c.L.legacyServiceAccountTokenCleanUpPeriod.value}
      - --log-flush-frequency=${c.L.logFlushFrequency.value}
      - --log-json-info-buffer-size=${c.L.logJsonInfoBufferSize.value}
      - --log-json-split-stream=${c.L.logJsonSplitStream.value}
      - --log-text-info-buffer-size=${c.L.logTextInfoBufferSize.value}
      - --log-text-split-stream=${c.L.logTextSplitStream.value}
      - --logging-format=${c.L.loggingFormat.value}
      - --max-endpoints-per-slice=${c.L.maxEndpointsPerSlice.value}
      - --min-resync-period=${c.L.minResyncPeriod.value}
      - --mirroring-concurrent-service-endpoint-syncs=${c.L.mirroringConcurrentServiceEndpointSyncs.value}
      - --mirroring-endpointslice-updates-batch-period=${c.L.mirroringEndpointsliceUpdatesBatchPeriod.value}
      - --mirroring-max-endpoints-per-subset=${c.L.mirroringMaxEndpointsPerSubset.value}
      - --namespace-sync-period=${c.L.namespaceSyncPeriod.value}
      - --node-cidr-mask-size=${c.L.nodeCidrMaskSize.value}
      - --node-cidr-mask-size-ipv4=${c.L.nodeCidrMaskSizeIpv4.value}
      - --node-cidr-mask-size-ipv6=${c.L.nodeCidrMaskSizeIpv6.value}
      - --node-eviction-rate=${c.L.nodeEvictionRate.value}
      - --node-monitor-grace-period=${c.L.nodeMonitorGracePeriod.value}
      - --node-monitor-period=${c.L.nodeMonitorPeriod.value}
      - --node-startup-grace-period=${c.L.nodeStartupGracePeriod.value}
      - --node-sync-period=${c.L.nodeSyncPeriod.value}
      - --permit-address-sharing=${c.L.permitAddressSharing.value}
      - --permit-port-sharing=${c.L.permitPortSharing.value}
      - --profiling=${c.L.profiling.value}
      - --pv-recycler-increment-timeout-nfs=${c.L.pvRecyclerIncrementTimeoutNfs.value}
      - --pv-recycler-minimum-timeout-hostpath=${c.L.pvRecyclerMinimumTimeoutHostpath.value}
      - --pv-recycler-minimum-timeout-nfs=${c.L.pvRecyclerMinimumTimeoutNfs.value}
      - --pv-recycler-timeout-increment-hostpath=${c.L.pvRecyclerTimeoutIncrementHostpath.value}
      - --pvclaimbinder-sync-period=${c.L.pvclaimbinderSyncPeriod.value}
      - --requestheader-client-ca-file=${c.L.requestheaderClientCaFile.value}
      - --requestheader-extra-headers-prefix=${c.L.requestheaderExtraHeadersPrefix.value}
      - --requestheader-group-headers=${c.L.requestheaderGroupHeaders.value}
      - --requestheader-username-headers=${c.L.requestheaderUsernameHeaders.value}
      - --resource-quota-sync-period=${c.L.resourceQuotaSyncPeriod.value}
      - --root-ca-file=${c.L.rootCaFile.value}
      - --route-reconciliation-period=${c.L.routeReconciliationPeriod.value}
      - --secondary-node-eviction-rate=${c.L.secondaryNodeEvictionRate.value}
      - --secure-port=${c.L.securePort.value}
      - --service-account-private-key-file=${c.L.serviceAccountPrivateKeyFile.value}
      - --terminated-pod-gc-threshold=${c.L.terminatedPodGcThreshold.value}
      - --unhealthy-zone-threshold=${c.L.unhealthyZoneThreshold.value}
      - --use-service-account-credentials=${c.L.useServiceAccountCredentials.value}
      - --v=${c.L.v.value}
      - --version=${c.L.version.value}
      - --volume-host-allow-local-loopback=${c.L.volumeHostAllowLocalLoopback.value}
      # ЕСЛИ НУЖНО ПОДКЛЮЧИТЬ CLOUD-CONTROLLER-MANAGER
      # ТРЕБУЕТСЯ РАСКОМЕНТИРОВАТЬ
      # ->
      # - --cloud-provider: "${c.L.cloudProvider.value}"
      # ЕСЛИ НУЖНО ПОДКЛЮЧИТЬ СЕРВЕРНЫЕ СЕРТИФИКАТЫ ДЛЯ KUBE-CONTROLLER-MANAGER
      # ОБРАТИТЕ ВНИМАНИЕ, ЧТО KUBEADM НЕ СОЗДАЕТ ДАННЫЕ СЕРТИФИКАТЫ
      # ТРЕБУЕТСЯ РАСКОМЕНТИРОВАТЬ
      # ->
      # - --tls-cert-file=${c.L.tlsCertFile.value}
      # - --tls-private-key-file=${c.L.tlsPrivateKeyFile.value}
      # Не указывать если значение "" или undefined
      # - --cluster-signing-kube-apiserver-client-cert-file=${c.L.clusterSigningKubeApiserverClientCertFile.value}
      # - --cluster-signing-kube-apiserver-client-key-file=${c.L.clusterSigningKubeApiserverClientKeyFile.value}
      # - --cluster-signing-kubelet-client-cert-file=${c.L.clusterSigningKubeletClientCertFile.value}
      # - --cluster-signing-kubelet-client-key-file=${c.L.clusterSigningKubeletClientKeyFile.value}
      # - --cluster-signing-kubelet-serving-cert-file=${c.L.clusterSigningKubeletServingCertFile.value}
      # - --cluster-signing-kubelet-serving-key-file=${c.L.clusterSigningKubeletServingKeyFile.value}
      # - --cluster-signing-legacy-unknown-cert-file=${c.L.clusterSigningLegacyUnknownCertFile.value}
      # - --cluster-signing-legacy-unknown-key-file=${c.L.clusterSigningLegacyUnknownKeyFile.value}
      # - --cluster-cidr=${c.L.clusterCidr.value}
      # - --cloud-config=${c.L.cloudConfig.value}
      # - --cert-dir=${c.L.certDir.value}
      # - --allow-metric-labels-manifest=${c.L.allowMetricLabelsManifest.value}
      # - --allow-metric-labels=${c.L.allowMetricLabels.value}
      # - --disabled-metrics=${c.L.disabledMetrics.value}
      # - --leader-migration-config=${c.L.leaderMigrationConfig.value}
      # - --master=${c.L.master.value}
      # - --pv-recycler-pod-template-filepath-hostpath=${c.L.pvRecyclerPodTemplateFilepathHostpath.value}
      # - --pv-recycler-pod-template-filepath-nfs=${c.L.pvRecyclerPodTemplateFilepathNfs.value}
      # - --service-cluster-ip-range=${c.L.serviceClusterIpRange.value}
      # - --show-hidden-metrics-for-version=${c.L.showHiddenMetricsForVersion.value}
      # - --tls-cipher-suites=${c.L.tlsCipherSuites.value}
      # - --tls-min-version=${c.L.tlsMinVersion.value}
      # - --tls-sni-cert-key=${c.L.tlsSniCertKey.value}
      # - --vmodule=${c.L.vmodule.value}
      # - --volume-host-cidr-denylist=${c.L.volumeHostCidrDenylist.value}
      # - --external-cloud-volume-plugin=${c.L.externalCloudVolumePlugin.value}
      # - --requestheader-allowed-names=${c.L.requestheaderAllowedNames.value}
      image: ${l.M.baseDockerRegistry.value}/kube-controller-manager:${i.M.kubernetes.value}
      imagePullPolicy: IfNotPresent
      livenessProbe:
        failureThreshold: 8
        httpGet:
          path: /healthz
          port: ${s.h.kubeControllerManager.portNumber}
          scheme: HTTPS
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      name: kube-controller-manager
      resources:
        requests:
          cpu: 200m
      startupProbe:
        failureThreshold: 24
        httpGet:
          path: /healthz
          port: ${s.h.kubeControllerManager.portNumber}
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
      - mountPath: /usr/libexec/kubernetes/kubelet-plugins/volume/exec/
        name: flexvolume-dir
      - mountPath: ${l.M.kubernetesBaseFolderPath.value}/pki
        name: k8s-certs
        readOnly: true
      - mountPath: ${l.M.kubernetesBaseFolderPath.value}/controller-manager.conf
        name: kubeconfig
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
        path: /usr/libexec/kubernetes/kubelet-plugins/volume/exec/
        type: DirectoryOrCreate
      name: flexvolume-dir
    - hostPath:
        path: ${l.M.kubernetesBaseFolderPath.value}/pki
        type: DirectoryOrCreate
      name: k8s-certs
    - hostPath:
        path: ${l.M.kubernetesBaseFolderPath.value}/controller-manager.conf
        type: FileOrCreate
      name: kubeconfig
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
`})]})]})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},76331:(e,t,a)=>{a.d(t,{A:()=>P});var r=a(96540),n=a(34164),o=a(23104),l=a(56347),s=a(205),i=a(57485),c=a(31682),u=a(70679);function d(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,r.useMemo)(()=>{const e=t??function(e){return d(e).map(({props:{value:e,label:t,attributes:a,default:r}})=>({value:e,label:t,attributes:a,default:r}))}(a);return function(e){const t=(0,c.XI)(e,(e,t)=>e.value===t.value);if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,a])}function p({value:e,tabValues:t}){return t.some(t=>t.value===e)}function v({queryString:e=!1,groupId:t}){const a=(0,l.W6)(),n=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,i.aZ)(n),(0,r.useCallback)(e=>{if(!n)return;const t=new URLSearchParams(a.location.search);t.set(n,e),a.replace({...a.location,search:t.toString()})},[n,a])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=h(e),[l,i]=(0,r.useState)(()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=t.find(e=>e.default)??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o})),[c,d]=v({queryString:a,groupId:n}),[m,b]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[a,n]=(0,u.Dv)(t);return[a,(0,r.useCallback)(e=>{t&&n.set(e)},[t,n])]}({groupId:n}),k=(()=>{const e=c??m;return p({value:e,tabValues:o})?e:null})();(0,s.A)(()=>{k&&i(k)},[k]);return{selectedValue:l,selectValue:(0,r.useCallback)(e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)},[d,b,o]),tabValues:o}}var b=a(92303);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=a(74848);function g({className:e,block:t,selectedValue:a,selectValue:r,tabValues:l}){const s=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.a_)(),c=e=>{const t=e.currentTarget,n=s.indexOf(t),o=l[n].value;o!==a&&(i(t),r(o))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;t=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;t=s[a]??s[s.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},e),children:l.map(({value:e,label:t,attributes:r})=>(0,f.jsx)("li",{role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,ref:e=>{s.push(e)},onKeyDown:u,onClick:c,...r,className:(0,n.A)("tabs__item",k.tabItem,r?.className,{"tabs__item--active":a===e}),children:t??e},e))})}function y({lazy:e,children:t,selectedValue:a}){const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=o.find(e=>e.props.value===a);return e?(0,r.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))})}function $(e){const t=m(e);return(0,f.jsxs)("div",{className:(0,n.A)("tabs-container",k.tabList),children:[(0,f.jsx)(g,{...t,...e}),(0,f.jsx)(y,{...t,...e})]})}function P(e){const t=(0,b.A)();return(0,f.jsx)($,{...e,children:d(e.children)},String(t))}},77517:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/setupJoinComponent","title":"setupJoinComponent","description":"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445.","source":"@site/docs/tech-docs/kubernetes/components/kubeAPI/setupJoinComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/setupJoinComponent","permalink":"/tech-docs/kubernetes/components/kubeAPI/setupJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=a(74848),o=a(28453),l=a(9792),s=a(76331),i=a(66877),c=a(14928);const u={},d=void 0,h={},p=[...i.toc,...c.RM];function v(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:(0,n.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445."})}),"\n",(0,n.jsxs)(s.A,{groupId:"install-type",children:[(0,n.jsx)(l.A,{value:"HardWay",children:(0,n.jsx)(i.default,{})}),(0,n.jsx)(l.A,{value:"Kubeadm",children:(0,n.jsx)(c.Ay,{})})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(v,{...e})}):v(e)}},77720:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/controllerManager/setupInitComponent","title":"setupInitComponent","description":"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445.","source":"@site/docs/tech-docs/kubernetes/components/controllerManager/setupInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/controllerManager","slug":"/tech-docs/kubernetes/components/controllerManager/setupInitComponent","permalink":"/tech-docs/kubernetes/components/controllerManager/setupInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=a(74848),o=a(28453),l=a(9792),s=a(76331),i=a(71570),c=a(25102);const u={},d=void 0,h={},p=[...i.toc,...c.toc];function v(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:(0,n.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445."})}),"\n",(0,n.jsxs)(s.A,{groupId:"install-type",children:[(0,n.jsx)(l.A,{value:"HardWay",children:(0,n.jsx)(i.default,{})}),(0,n.jsx)(l.A,{value:"Kubeadm",children:(0,n.jsx)(c.default,{})})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(v,{...e})}):v(e)}},81009:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>p,default:()=>k,frontMatter:()=>h,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/scheduler/staticPod","title":"staticPod","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/scheduler/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/scheduler","slug":"/tech-docs/kubernetes/components/scheduler/staticPod","permalink":"/tech-docs/kubernetes/components/scheduler/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=a(74848),o=a(28453),l=a(44349),s=a(285),i=a(68741),c=a(68747),u=a(60513),d=a(21502);const h={},p=void 0,v={},m=[];function b(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,n.jsx)(c.A,{language:"bash",children:u.A`
  mkdir -p ${l.M.kubernetesBaseFolderPath.value}/manifests
`}),"\n",(0,n.jsxs)(t,{className:"custom-blue-block",children:[(0,n.jsx)("summary",{children:"Static Pod Kube-Scheduler"}),(0,n.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),(0,n.jsx)(c.A,{language:"bash",children:u.A`
  cat <<EOF > ${l.M.kubernetesBaseFolderPath.value}/manifests/kube-scheduler.yaml
  apiVersion: v1
  kind: Pod
  metadata:
    creationTimestamp: null
    labels:
      component: kube-scheduler
      tier: control-plane
    name: kube-scheduler
    namespace: kube-system
  spec:
    containers:
    - command:
      - kube-scheduler
      - --authentication-kubeconfig=${d.w.authenticationKubeconfig.value}
      - --authentication-skip-lookup=${d.w.authenticationSkipLookup.value}
      - --authentication-token-webhook-cache-ttl=${d.w.authenticationTokenWebhookCacheTtl.value}
      - --authentication-tolerate-lookup-failure=${d.w.authenticationTolerateLookupFailure.value}
      - --authorization-always-allow-paths=${d.w.authorizationAlwaysAllowPaths.value}
      - --authorization-kubeconfig=${d.w.authorizationKubeconfig.value}
      - --authorization-webhook-cache-authorized-ttl=${d.w.authorizationWebhookCacheAuthorizedTtl.value}
      - --authorization-webhook-cache-unauthorized-ttl=${d.w.authorizationWebhookCacheUnauthorizedTtl.value}
      - --bind-address=${d.w.bindAddress.value}
      - --client-ca-file=${d.w.clientCaFile.value}
      - --contention-profiling=${d.w.contentionProfiling.value}
      - --help=${d.w.help.value}
      - --http2-max-streams-per-connection=${d.w.http2MaxStreamsPerConnection.value}
      - --kube-api-burst=${d.w.kubeApiBurst.value}
      - --kube-api-content-type=${d.w.kubeApiContentType.value}
      - --kube-api-qps=${d.w.kubeApiQps.value}
      - --kubeconfig=${d.w.kubeconfig.value}
      - --leader-elect=${d.w.leaderElect.value}
      - --leader-elect-lease-duration=${d.w.leaderElectLeaseDuration.value}
      - --leader-elect-renew-deadline=${d.w.leaderElectRenewDeadline.value}
      - --leader-elect-resource-lock=${d.w.leaderElectResourceLock.value}
      - --leader-elect-resource-name=${d.w.leaderElectResourceName.value}
      - --leader-elect-resource-namespace=${d.w.leaderElectResourceNamespace.value}
      - --leader-elect-retry-period=${d.w.leaderElectRetryPeriod.value}
      - --log-flush-frequency=${d.w.logFlushFrequency.value}
      - --log-json-info-buffer-size=${d.w.logJsonInfoBufferSize.value}
      - --log-json-split-stream=${d.w.logJsonSplitStream.value}
      - --log-text-info-buffer-size=${d.w.logTextInfoBufferSize.value}
      - --log-text-split-stream=${d.w.logTextSplitStream.value}
      - --logging-format=${d.w.loggingFormat.value}
      - --permit-address-sharing=${d.w.permitAddressSharing.value}
      - --permit-port-sharing=${d.w.permitPortSharing.value}
      - --pod-max-in-unschedulable-pods-duration=${d.w.podMaxInUnschedulablePodsDuration.value}
      - --profiling=${d.w.profiling.value}
      - --requestheader-extra-headers-prefix=${d.w.requestheaderExtraHeadersPrefix.value}
      - --requestheader-group-headers=${d.w.requestheaderGroupHeaders.value}
      - --requestheader-username-headers=${d.w.requestheaderUsernameHeaders.value}
      - --secure-port=${d.w.securePort.value}
      - --v=${d.w.v.value}
      - --version=${d.w.version.value}
    # ЕСЛИ НУЖНО ПОДКЛЮЧИТЬ СЕРВЕРНЫЕ СЕРТИФИКАТЫ ДЛЯ KUBE-SCHEDULER
    # ОБРАТИТЕ ВНИМАНИЕ, ЧТО KUBEADM НЕ СОЗДАЕТ ДАННЫЕ СЕРТИФИКАТЫ
    # ТРЕБУЕТСЯ РАСКОМЕНТИРОВАТЬ
    # ->
    # - --tls-cert-file=${d.w.tlsCertFile.value}
    # - --tls-private-key-file=${d.w.tlsPrivateKeyFile.value}
    # <-
    # - --allow-metric-labels=${d.w.allowMetricLabels.value}
    # - --allow-metric-labels-manifest=${d.w.allowMetricLabelsManifest.value}
    # - --cert-dir=${d.w.certDir.value}
    # - --config=${d.w.config.value}
    # - --disabled-metrics=${d.w.disabledMetrics.value}
    # - --feature-gates=${d.w.featureGates.value}
    # - --master=${d.w.master.value}
    # - --requestheader-allowed-names=${d.w.requestheaderAllowedNames.value}
    # - --requestheader-client-ca-file=${d.w.requestheaderClientCaFile.value}
    # - --show-hidden-metrics-for-version=${d.w.showHiddenMetricsForVersion.value}
    # - --tls-cipher-suites=${d.w.tlsCipherSuites.value}
    # - --tls-min-version=${d.w.tlsMinVersion.value}
    # - --tls-sni-cert-key=${d.w.tlsSniCertKey.value}
    # - --vmodule=${d.w.vmodule.value}
    # - --write-config-to=${d.w.writeConfigTo.value}
      image: ${l.M.baseDockerRegistry.value}/kube-scheduler:${i.M.kubernetes.value}
      imagePullPolicy: IfNotPresent
      livenessProbe:
        failureThreshold: 8
        httpGet:
          path: /healthz
          port: ${s.h.kubeScheduler.portNumber}
          scheme: HTTPS
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      name: kube-scheduler
      resources:
        requests:
          cpu: 100m
      startupProbe:
        failureThreshold: 24
        httpGet:
          path: /healthz
          port: ${s.h.kubeScheduler.portNumber}
          scheme: HTTPS
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      volumeMounts:
      - mountPath: ${l.M.kubernetesBaseFolderPath.value}/scheduler.conf
        name: kubeconfig
        readOnly: true
    # ЕСЛИ НУЖНО ПОДКЛЮЧИТЬ СЕРВЕРНЫЕ СЕРТИФИКАТЫ ДЛЯ KUBE-SCHEDULER
    # ОБРАТИТЕ ВНИМАНИЕ, ЧТО KUBEADM НЕ СОЗДАЕТ ДАННЫЕ СЕРТИФИКАТЫ
    # ТРЕБУЕТСЯ РАСКОМЕНТИРОВАТЬ
    # ->
    # - mountPath: ${d.w.tlsCertFile.value}
    #   name: kube-scheduler-crt
    #   readOnly: true
    # - mountPath: ${d.w.tlsPrivateKeyFile.value}
    #   name: kube-scheduler-key
    #   readOnly: true
    hostNetwork: true
    priority: 2000001000
    priorityClassName: system-node-critical
    securityContext:
      seccompProfile:
        type: RuntimeDefault
    volumes:
    - hostPath:
        path: ${l.M.kubernetesBaseFolderPath.value}/scheduler.conf
        type: FileOrCreate
      name: kubeconfig
    # ЕСЛИ НУЖНО ПОДКЛЮЧИТЬ СЕРВЕРНЫЕ СЕРТИФИКАТЫ ДЛЯ KUBE-SCHEDULER
    # ОБРАТИТЕ ВНИМАНИЕ, ЧТО KUBEADM НЕ СОЗДАЕТ ДАННЫЕ СЕРТИФИКАТЫ
    # ТРЕБУЕТСЯ РАСКОМЕНТИРОВАТЬ
    # ->
    # - hostPath:
    #     path: ${d.w.tlsCertFile.value}
    #     type: FileOrCreate
    #   name: kube-scheduler-crt
    # - hostPath:
    #     path: ${d.w.tlsPrivateKeyFile.value}
    #     type: FileOrCreate
    #   name: kube-scheduler-key
  status: {}
  EOF
`})]})]})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},82198:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/setupInitComponent","title":"setupInitComponent","description":"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445.","source":"@site/docs/tech-docs/kubernetes/components/kubeAPI/setupInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/setupInitComponent","permalink":"/tech-docs/kubernetes/components/kubeAPI/setupInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=a(74848),o=a(28453),l=a(9792),s=a(76331),i=a(66877),c=a(92644);const u={},d=void 0,h={},p=[...i.toc,...c.toc];function v(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:(0,n.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445."})}),"\n",(0,n.jsxs)(s.A,{groupId:"install-type",children:[(0,n.jsx)(l.A,{value:"HardWay",children:(0,n.jsx)(i.default,{})}),(0,n.jsx)(l.A,{value:"Kubeadm",children:(0,n.jsx)(c.default,{})})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(v,{...e})}):v(e)}},91169:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>b,frontMatter:()=>d,metadata:()=>r,toc:()=>v});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/allStaticPodsCPJoinComponent","title":"allStaticPodsCPJoinComponent","description":"\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0440\u0443\u0447\u043d\u043e\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 static pod-\u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u043e\u0432 \u0434\u043b\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430 Kubernetes.","source":"@site/docs/tech-docs/kubernetes/components/allStaticPodsCPJoinComponent.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/allStaticPodsCPJoinComponent","permalink":"/tech-docs/kubernetes/components/allStaticPodsCPJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=a(74848),o=a(28453),l=a(77517),s=a(96478),i=a(16232),c=a(9792),u=a(76331);const d={},h=void 0,p={},v=[...l.toc,...s.toc,...i.toc];function m(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0440\u0443\u0447\u043d\u043e\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 static pod-\u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u043e\u0432 \u0434\u043b\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430 Kubernetes."}),"\n"]}),"\n",(0,n.jsxs)(u.A,{groupId:"Componenet",children:[(0,n.jsx)(c.A,{value:"Kube-API",children:(0,n.jsxs)(a,{open:!0,className:"custom-gray-block",children:[(0,n.jsx)("summary",{children:(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,n.jsx)("p",{style:{marginBottom:0},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kube-API"}),(0,n.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,n.jsx)(l.default,{})]})}),(0,n.jsx)(c.A,{value:"Kube Controller Manager",children:(0,n.jsxs)(a,{open:!0,className:"custom-gray-block",children:[(0,n.jsx)("summary",{children:(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,n.jsx)("p",{style:{marginBottom:0},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kube Controller Manager"}),(0,n.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,n.jsx)(s.default,{})]})}),(0,n.jsx)(c.A,{value:"Kube Scheduler",children:(0,n.jsxs)(a,{open:!0,className:"custom-gray-block",children:[(0,n.jsx)("summary",{children:(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,n.jsx)("p",{style:{marginBottom:0},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kube Scheduler"}),(0,n.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,n.jsx)(i.default,{})]})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},92644:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>v,frontMatter:()=>c,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubeAPI/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/kubeadm","permalink":"/tech-docs/kubernetes/components/kubeAPI/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=a(74848),o=a(28453),l=a(44349),s=a(68747),i=a(60513);const c={},u=void 0,d={},h=[];function p(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,n.jsx)(s.A,{language:"bash",children:i.A`
      kubeadm init phase  control-plane apiserver \\
        --config=${l.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
  `}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(s.A,{language:"bash",children:i.A`
      #### Kube API
      [control-plane] Creating static Pod manifest for "apiserver"
  `})})]})}function v(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},93799:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcd/setupJoinComponent","title":"setupJoinComponent","description":"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445.","source":"@site/docs/tech-docs/etcd/components/etcd/setupJoinComponent.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/setupJoinComponent","permalink":"/tech-docs/etcd/components/etcd/setupJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=a(74848),o=a(28453),l=a(9792),s=a(76331),i=a(46856),c=a(11336);const u={},d=void 0,h={},p=[...i.toc,...c.toc];function v(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:(0,n.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445."})}),"\n",(0,n.jsxs)(s.A,{groupId:"install-type",children:[(0,n.jsx)(l.A,{value:"HardWay",children:(0,n.jsx)(i.default,{})}),(0,n.jsx)(l.A,{value:"Kubeadm",children:(0,n.jsx)(c.default,{})})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(v,{...e})}):v(e)}},95538:(e,t,a)=>{a.d(t,{D:()=>o});var r=a(65742),n=a(285);const o={name:{value:"${FULL_HOST_NAME}"},initialCluster:{value:"${ETCD_INITIAL_CLUSTER}"},initialAdvertisePeerUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${n.h.etcdPeer.portNumber}`},initialClusterToken:{value:"etcd"},initialClusterState:{value:"new"},peerCertFile:{value:`${r.$.etcdPeer.crtPath}`},peerKeyFile:{value:`${r.$.etcdPeer.keyPath}`},peerTrustedCAFile:{value:`${r.$.etcdCA.crtPath}`},peerClientCertAuth:{value:"true"},certFile:{value:`${r.$.etcdServer.crtPath}`},keyFile:{value:`${r.$.etcdServer.keyPath}`},trustedCAFile:{value:`${r.$.etcdCA.crtPath}`},listenClientUrls:{value:`https://0.0.0.0:${n.h.etcdServer.portNumber}`},listenPeerUrls:{value:`https://0.0.0.0:${n.h.etcdPeer.portNumber}`},listenMetricsUrls:{value:`http://0.0.0.0:${n.h.etcdMetricServer.portNumber}`},dataDir:{value:"/var/lib/etcd"},quotaBackendBytes:{value:"10737418240"},clientCertAuth:{value:"true"},heartbeatInterval:{value:"250"},electionTimeout:{value:"1500"},maxSnapshots:{value:"10"},maxWals:{value:"10"},autoCompactionRetention:{value:"8"},metrics:{value:"extensive"},logger:{value:"zap"},advertiseClientUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${n.h.etcdServer.portNumber}`},workDir:{value:"/tmp/etcd"},dbPath:{value:"/var/lib/etcd/member/snap/db"},snapshotCount:{value:"10000"},experimentalInitialCorruptCheck:{value:"true"},experimentalWatchProgressNotifyInterval:{value:"5s"}}},96478:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/controllerManager/setupJoinComponent","title":"setupJoinComponent","description":"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445.","source":"@site/docs/tech-docs/kubernetes/components/controllerManager/setupJoinComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/controllerManager","slug":"/tech-docs/kubernetes/components/controllerManager/setupJoinComponent","permalink":"/tech-docs/kubernetes/components/controllerManager/setupJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=a(74848),o=a(28453),l=a(9792),s=a(76331),i=a(71570),c=a(14928);const u={},d=void 0,h={},p=[...i.toc,...c.RM];function v(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:(0,n.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445."})}),"\n",(0,n.jsxs)(s.A,{groupId:"install-type",children:[(0,n.jsx)(l.A,{value:"HardWay",children:(0,n.jsx)(i.default,{})}),(0,n.jsx)(l.A,{value:"Kubeadm",children:(0,n.jsx)(c.Ay,{})})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(v,{...e})}):v(e)}}}]);