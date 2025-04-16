"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[210,42477,51507],{4898:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>u,metadata:()=>a,toc:()=>v});const a=JSON.parse('{"id":"tech-docs/kubernetes/components/controllerManager/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/controllerManager/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/components/controllerManager","slug":"/tech-docs/kubernetes/components/controllerManager/kubeadm","permalink":"/tech-docs/kubernetes/components/controllerManager/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=r(74848),l=r(28453),o=r(7478),c=r(1775),s=r(60513);const u={},i=void 0,d={},v=[];function h(e){const t={admonition:"admonition",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,n.jsx)(c.A,{language:"bash",children:s.A`
      kubeadm init phase  control-plane controller-manager \\
        --config=${o.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
  `}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(c.A,{language:"bash",children:s.A`
      #### Kube API
      [control-plane] Creating static Pod manifest for "kube-controller-manager"
  `})})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},6353:(e,t,r)=>{r.d(t,{$:()=>n});var a=r(7478);const n={etcdCA:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/ca.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},etcdClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/sa.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"}}},7022:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"tech-docs/kubernetes/components/controllerManager/setupInitComponent","title":"setupInitComponent","description":"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445.","source":"@site/docs/tech-docs/kubernetes/components/controllerManager/setupInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/controllerManager","slug":"/tech-docs/kubernetes/components/controllerManager/setupInitComponent","permalink":"/tech-docs/kubernetes/components/controllerManager/setupInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=r(74848),l=r(28453),o=r(87464),c=r(62774),s=r(85631),u=r(4898);const i={},d=void 0,v={},h=[...s.toc,...u.toc];function p(e){const t={admonition:"admonition",p:"p",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:(0,n.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445."})}),"\n",(0,n.jsxs)(c.A,{groupId:"install-type",children:[(0,n.jsx)(o.A,{value:"HardWay",children:(0,n.jsx)(s.default,{})}),(0,n.jsx)(o.A,{value:"Kubeadm",children:(0,n.jsx)(u.default,{})})]})]})}function m(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},31798:(e,t,r)=>{r.d(t,{h:()=>a});const a={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},62774:(e,t,r)=>{r.d(t,{A:()=>$});var a=r(96540),n=r(34164),l=r(65627),o=r(56347),c=r(50372),s=r(30604),u=r(11861),i=r(78749);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function v(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const n=(0,o.W6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=v(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,d]=p({queryString:r,groupId:n}),[m,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,i.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),k=(()=>{const e=u??m;return h({value:e,tabValues:l})?e:null})();(0,c.A)((()=>{k&&s(k)}),[k]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=r(9136);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=r(74848);function g(e){let{className:t,block:r,selectedValue:a,selectValue:o,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),i=e=>{const t=e.currentTarget,r=s.indexOf(t),n=c[r].value;n!==a&&(u(t),o(n))},d=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;t=s[r]??s[0];break}case"ArrowLeft":{const r=s.indexOf(e.currentTarget)-1;t=s[r]??s[s.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:c.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{s.push(e)},onKeyDown:d,onClick:i,...l,className:(0,n.A)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function f(e){let{lazy:t,children:r,selectedValue:l}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function P(e){const t=m(e);return(0,y.jsxs)("div",{className:(0,n.A)("tabs-container",k.tabList),children:[(0,y.jsx)(g,{...t,...e}),(0,y.jsx)(f,{...t,...e})]})}function $(e){const t=(0,b.A)();return(0,y.jsx)(P,{...e,children:d(e.children)},String(t))}},63770:(e,t,r)=>{r.d(t,{M:()=>a});const a={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.12"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},66483:(e,t,r)=>{r.d(t,{L:()=>l});var a=r(6353),n=r(7478);const l={authenticationKubeconfig:{value:`${n.M.kubernetesBaseFolderPath.value}/controller-manager.conf`},authorizationKubeconfig:{value:`${n.M.kubernetesBaseFolderPath.value}/controller-manager.conf`},kubeconfig:{value:`${n.M.kubernetesBaseFolderPath.value}/controller-manager.conf`},clientCaFile:{value:`${a.$.kubernetesCA.crtPath}`},clusterSigningCertFile:{value:`${a.$.kubernetesCA.crtPath}`},clusterSigningKeyFile:{value:`${a.$.kubernetesCA.keyPath}`},requestheaderClientCaFile:{value:`${a.$.frontProxyCA.crtPath}`},rootCaFile:{value:`${a.$.kubernetesCA.crtPath}`},serviceAccountPrivateKeyFile:{value:`${n.M.kubernetesBaseFolderPath.value}/pki/sa.key`},clusterName:{value:"${CLUSTER_NAME}"},allocateNodeCidrs:{value:"false"},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},allowUntaggedCloud:{value:"false"},authenticationSkipLookup:{value:"false"},authenticationTokenWebhookCacheTtl:{value:"10s"},authenticationTolerateLookupFailure:{value:"false"},authorizationAlwaysAllowPaths:{value:"/healthz,/readyz,/livez,/metrics"},authorizationWebhookCacheAuthorizedTtl:{value:"10s"},authorizationWebhookCacheUnauthorizedTtl:{value:"10s"},bindAddress:{value:"0.0.0.0"},certDir:{value:""},cidrAllocatorType:{value:"RangeAllocator"},cloudConfig:{value:""},cloudProvider:{value:"external"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},clusterCidr:{value:""},clusterSigningDuration:{value:"720h0m0s"},clusterSigningKubeApiserverClientCertFile:{value:""},clusterSigningKubeApiserverClientKeyFile:{value:""},clusterSigningKubeletClientCertFile:{value:""},clusterSigningKubeletClientKeyFile:{value:""},clusterSigningKubeletServingCertFile:{value:""},clusterSigningKubeletServingKeyFile:{value:""},clusterSigningLegacyUnknownCertFile:{value:""},clusterSigningLegacyUnknownKeyFile:{value:""},concurrentCronJobSyncs:{value:"5"},concurrentDeploymentSyncs:{value:"5"},concurrentEndpointSyncs:{value:"5"},concurrentEphemeralvolumeSyncs:{value:"5"},concurrentGcSyncs:{value:"20"},concurrentHorizontalPodAutoscalerSyncs:{value:"5"},concurrentJobSyncs:{value:"5"},concurrentNamespaceSyncs:{value:"10"},concurrentRcSyncs:{value:"5"},concurrentReplicasetSyncs:{value:"20"},concurrentResourceQuotaSyncs:{value:"5"},concurrentServiceEndpointSyncs:{value:"5"},concurrentServiceSyncs:{value:"1"},concurrentServiceaccountTokenSyncs:{value:"5"},concurrentStatefulsetSyncs:{value:"5"},concurrentTtlAfterFinishedSyncs:{value:"5"},concurrentValidatingAdmissionPolicyStatusSyncs:{value:"5"},configureCloudRoutes:{value:"true"},contentionProfiling:{value:"false"},controllerStartInterval:{value:"0s"},controllers:{value:"*,bootstrapsigner,tokencleaner"},disableAttachDetachReconcileSync:{value:"false"},disableForceDetachOnTimeout:{value:"false"},disabledMetrics:{value:""},enableDynamicProvisioning:{value:"true"},enableGarbageCollector:{value:"true"},enableHostpathProvisioner:{value:"false"},enableLeaderMigration:{value:"false"},endpointUpdatesBatchPeriod:{value:"0s"},endpointsliceUpdatesBatchPeriod:{value:"0s"},externalCloudVolumePlugin:{value:""},featureGates:{value:"RotateKubeletServerCertificate=true"},flexVolumePluginDir:{value:"/usr/libexec/kubernetes/kubelet-plugins/volume/exec/"},help:{value:"false"},horizontalPodAutoscalerCpuInitializationPeriod:{value:"5m0s"},horizontalPodAutoscalerDownscaleDelay:{value:"5m0s"},horizontalPodAutoscalerDownscaleStabilization:{value:"5m0s"},horizontalPodAutoscalerInitialReadinessDelay:{value:"30s"},horizontalPodAutoscalerSyncPeriod:{value:"30s"},horizontalPodAutoscalerTolerance:{value:"0.1"},horizontalPodAutoscalerUpscaleDelay:{value:"3m0s"},http2MaxStreamsPerConnection:{value:"0"},kubeApiBurst:{value:"120"},kubeApiContentType:{value:"application/vnd.kubernetes.protobuf"},kubeApiQps:{value:"100"},largeClusterSizeThreshold:{value:"50"},leaderElect:{value:"true"},leaderElectLeaseDuration:{value:"15s"},leaderElectRenewDeadline:{value:"10s"},leaderElectResourceLock:{value:"leases"},leaderElectResourceName:{value:"kube-controller-manager"},leaderElectResourceNamespace:{value:"kube-system"},leaderElectRetryPeriod:{value:"2s"},leaderMigrationConfig:{value:""},legacyServiceAccountTokenCleanUpPeriod:{value:"8760h0m0s"},logFlushFrequency:{value:"5s"},logJsonInfoBufferSize:{value:"0"},logJsonSplitStream:{value:"false"},logTextInfoBufferSize:{value:"0"},logTextSplitStream:{value:"false"},loggingFormat:{value:"text"},attachDetachReconcileSyncPeriod:{value:"1m0s"},master:{value:""},maxEndpointsPerSlice:{value:"100"},minResyncPeriod:{value:"12h0m0s"},mirroringConcurrentServiceEndpointSyncs:{value:"5"},mirroringEndpointsliceUpdatesBatchPeriod:{value:"0s"},mirroringMaxEndpointsPerSubset:{value:"1000"},namespaceSyncPeriod:{value:"2m0s"},nodeCidrMaskSize:{value:"0"},nodeCidrMaskSizeIpv4:{value:"0"},nodeCidrMaskSizeIpv6:{value:"0"},nodeEvictionRate:{value:"0.1"},nodeMonitorGracePeriod:{value:"40s"},nodeMonitorPeriod:{value:"5s"},nodeStartupGracePeriod:{value:"10s"},nodeSyncPeriod:{value:"0s"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},pvRecyclerIncrementTimeoutNfs:{value:"30"},pvRecyclerMinimumTimeoutHostpath:{value:"60"},pvRecyclerMinimumTimeoutNfs:{value:"300"},pvRecyclerPodTemplateFilepathHostpath:{value:""},pvRecyclerPodTemplateFilepathNfs:{value:""},pvRecyclerTimeoutIncrementHostpath:{value:"30"},pvclaimbinderSyncPeriod:{value:"15s"},requestheaderAllowedNames:{value:""},requestheaderExtraHeadersPrefix:{value:"x-remote-extra-"},requestheaderGroupHeaders:{value:"x-remote-group"},requestheaderUsernameHeaders:{value:"x-remote-user"},resourceQuotaSyncPeriod:{value:"5m0s"},routeReconciliationPeriod:{value:"10s"},secondaryNodeEvictionRate:{value:"0.01"},securePort:{value:"10257"},serviceClusterIpRange:{value:""},showHiddenMetricsForVersion:{value:""},terminatedPodGcThreshold:{value:"0"},tlsCertFile:{value:""},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsPrivateKeyFile:{value:""},tlsSniCertKey:{value:""},unhealthyZoneThreshold:{value:"0.55"},useServiceAccountCredentials:{value:"true"},v:{value:"2"},version:{value:"false"},vmodule:{value:""},volumeHostAllowLocalLoopback:{value:"true"},volumeHostCidrDenylist:{value:""}}},85631:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>k,frontMatter:()=>v,metadata:()=>a,toc:()=>m});const a=JSON.parse('{"id":"tech-docs/kubernetes/components/controllerManager/staticPod","title":"staticPod","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/controllerManager/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/controllerManager","slug":"/tech-docs/kubernetes/components/controllerManager/staticPod","permalink":"/tech-docs/kubernetes/components/controllerManager/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=r(74848),l=r(28453),o=r(7478),c=(r(6353),r(31798)),s=r(63770),u=r(66483),i=r(60513),d=r(1775);const v={},h=void 0,p={},m=[];function b(e){const{Details:t}={...(0,l.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,n.jsx)(d.A,{language:"bash",children:i.A`
  export CLUSTER_NAME=${o.M.clusterName.value}
`}),"\n",(0,n.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,n.jsx)(d.A,{language:"bash",children:i.A`
  mkdir -p ${o.M.kubernetesBaseFolderPath.value}/manifests
`}),"\n",(0,n.jsxs)(t,{className:"custom-blue-block",children:[(0,n.jsx)("summary",{children:"Static Pod Kube-Controller-Manager"}),(0,n.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),(0,n.jsx)(d.A,{language:"bash",children:i.A`
  cat <<EOF > ${o.M.kubernetesBaseFolderPath.value}/manifests/kube-controller-manager.yaml
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
      - --allocate-node-cidrs=${u.L.allocateNodeCidrs.value}
      - --allow-untagged-cloud=${u.L.allowUntaggedCloud.value}
      - --attach-detach-reconcile-sync-period=${u.L.attachDetachReconcileSyncPeriod.value}
      - --authentication-kubeconfig=${u.L.authenticationKubeconfig.value}
      - --authentication-skip-lookup=${u.L.authenticationSkipLookup.value}
      - --authentication-token-webhook-cache-ttl=${u.L.authenticationTokenWebhookCacheTtl.value}
      - --authentication-tolerate-lookup-failure=${u.L.authenticationTolerateLookupFailure.value}
      - --authorization-always-allow-paths=${u.L.authorizationAlwaysAllowPaths.value}
      - --authorization-kubeconfig=${u.L.authorizationKubeconfig.value}
      - --authorization-webhook-cache-authorized-ttl=${u.L.authorizationWebhookCacheAuthorizedTtl.value}
      - --authorization-webhook-cache-unauthorized-ttl=${u.L.authorizationWebhookCacheUnauthorizedTtl.value}
      - --bind-address=${u.L.bindAddress.value}
      - --cidr-allocator-type=${u.L.cidrAllocatorType.value}
      - --client-ca-file=${u.L.clientCaFile.value}
      - --cluster-name=${u.L.clusterName.value}
      - --cloud-provider-gce-lb-src-cidrs=${u.L.cloudProviderGceLbSrcCidrs.value}
      - --cluster-signing-cert-file=${u.L.clusterSigningCertFile.value}
      - --cluster-signing-duration=${u.L.clusterSigningDuration.value}
      - --cluster-signing-key-file=${u.L.clusterSigningKeyFile.value}
      - --concurrent-cron-job-syncs=${u.L.concurrentCronJobSyncs.value}
      - --concurrent-deployment-syncs=${u.L.concurrentDeploymentSyncs.value}
      - --concurrent-endpoint-syncs=${u.L.concurrentEndpointSyncs.value}
      - --concurrent-ephemeralvolume-syncs=${u.L.concurrentEphemeralvolumeSyncs.value}
      - --concurrent-gc-syncs=${u.L.concurrentGcSyncs.value}
      - --concurrent-horizontal-pod-autoscaler-syncs=${u.L.concurrentHorizontalPodAutoscalerSyncs.value}
      - --concurrent-job-syncs=${u.L.concurrentJobSyncs.value}
      - --concurrent-namespace-syncs=${u.L.concurrentNamespaceSyncs.value}
      - --concurrent-rc-syncs=${u.L.concurrentRcSyncs.value}
      - --concurrent-replicaset-syncs=${u.L.concurrentReplicasetSyncs.value}
      - --concurrent-resource-quota-syncs=${u.L.concurrentResourceQuotaSyncs.value}
      - --concurrent-service-endpoint-syncs=${u.L.concurrentServiceEndpointSyncs.value}
      - --concurrent-service-syncs=${u.L.concurrentServiceSyncs.value}
      - --concurrent-serviceaccount-token-syncs=${u.L.concurrentServiceaccountTokenSyncs.value}
      - --concurrent-statefulset-syncs=${u.L.concurrentStatefulsetSyncs.value}
      - --concurrent-ttl-after-finished-syncs=${u.L.concurrentTtlAfterFinishedSyncs.value}
      - --concurrent-validating-admission-policy-status-syncs=${u.L.concurrentValidatingAdmissionPolicyStatusSyncs.value}
      - --configure-cloud-routes=${u.L.configureCloudRoutes.value}
      - --contention-profiling=${u.L.contentionProfiling.value}
      - --controller-start-interval=${u.L.controllerStartInterval.value}
      - --controllers=${u.L.controllers.value}
      - --disable-attach-detach-reconcile-sync=${u.L.disableAttachDetachReconcileSync.value}
      - --disable-force-detach-on-timeout=${u.L.disableForceDetachOnTimeout.value}
      - --enable-dynamic-provisioning=${u.L.enableDynamicProvisioning.value}
      - --enable-garbage-collector=${u.L.enableGarbageCollector.value}
      - --enable-hostpath-provisioner=${u.L.enableHostpathProvisioner.value}
      - --enable-leader-migration=${u.L.enableLeaderMigration.value}
      - --endpoint-updates-batch-period=${u.L.endpointUpdatesBatchPeriod.value}
      - --endpointslice-updates-batch-period=${u.L.endpointsliceUpdatesBatchPeriod.value}
      - --feature-gates=${u.L.featureGates.value}
      - --flex-volume-plugin-dir=${u.L.flexVolumePluginDir.value}
      - --help=${u.L.help.value}
      - --horizontal-pod-autoscaler-cpu-initialization-period=${u.L.horizontalPodAutoscalerCpuInitializationPeriod.value}
      - --horizontal-pod-autoscaler-downscale-delay=${u.L.horizontalPodAutoscalerDownscaleDelay.value}
      - --horizontal-pod-autoscaler-downscale-stabilization=${u.L.horizontalPodAutoscalerDownscaleStabilization.value}
      - --horizontal-pod-autoscaler-initial-readiness-delay=${u.L.horizontalPodAutoscalerInitialReadinessDelay.value}
      - --horizontal-pod-autoscaler-sync-period=${u.L.horizontalPodAutoscalerSyncPeriod.value}
      - --horizontal-pod-autoscaler-tolerance=${u.L.horizontalPodAutoscalerTolerance.value}
      - --horizontal-pod-autoscaler-upscale-delay=${u.L.horizontalPodAutoscalerUpscaleDelay.value}
      - --http2-max-streams-per-connection=${u.L.http2MaxStreamsPerConnection.value}
      - --kube-api-burst=${u.L.kubeApiBurst.value}
      - --kube-api-content-type=${u.L.kubeApiContentType.value}
      - --kube-api-qps=${u.L.kubeApiQps.value}
      - --kubeconfig=${u.L.kubeconfig.value}
      - --large-cluster-size-threshold=${u.L.largeClusterSizeThreshold.value}
      - --leader-elect=${u.L.leaderElect.value}
      - --leader-elect-lease-duration=${u.L.leaderElectLeaseDuration.value}
      - --leader-elect-renew-deadline=${u.L.leaderElectRenewDeadline.value}
      - --leader-elect-resource-lock=${u.L.leaderElectResourceLock.value}
      - --leader-elect-resource-name=${u.L.leaderElectResourceName.value}
      - --leader-elect-resource-namespace=${u.L.leaderElectResourceNamespace.value}
      - --leader-elect-retry-period=${u.L.leaderElectRetryPeriod.value}
      - --legacy-service-account-token-clean-up-period=${u.L.legacyServiceAccountTokenCleanUpPeriod.value}
      - --log-flush-frequency=${u.L.logFlushFrequency.value}
      - --log-json-info-buffer-size=${u.L.logJsonInfoBufferSize.value}
      - --log-json-split-stream=${u.L.logJsonSplitStream.value}
      - --log-text-info-buffer-size=${u.L.logTextInfoBufferSize.value}
      - --log-text-split-stream=${u.L.logTextSplitStream.value}
      - --logging-format=${u.L.loggingFormat.value}
      - --max-endpoints-per-slice=${u.L.maxEndpointsPerSlice.value}
      - --min-resync-period=${u.L.minResyncPeriod.value}
      - --mirroring-concurrent-service-endpoint-syncs=${u.L.mirroringConcurrentServiceEndpointSyncs.value}
      - --mirroring-endpointslice-updates-batch-period=${u.L.mirroringEndpointsliceUpdatesBatchPeriod.value}
      - --mirroring-max-endpoints-per-subset=${u.L.mirroringMaxEndpointsPerSubset.value}
      - --namespace-sync-period=${u.L.namespaceSyncPeriod.value}
      - --node-cidr-mask-size=${u.L.nodeCidrMaskSize.value}
      - --node-cidr-mask-size-ipv4=${u.L.nodeCidrMaskSizeIpv4.value}
      - --node-cidr-mask-size-ipv6=${u.L.nodeCidrMaskSizeIpv6.value}
      - --node-eviction-rate=${u.L.nodeEvictionRate.value}
      - --node-monitor-grace-period=${u.L.nodeMonitorGracePeriod.value}
      - --node-monitor-period=${u.L.nodeMonitorPeriod.value}
      - --node-startup-grace-period=${u.L.nodeStartupGracePeriod.value}
      - --node-sync-period=${u.L.nodeSyncPeriod.value}
      - --permit-address-sharing=${u.L.permitAddressSharing.value}
      - --permit-port-sharing=${u.L.permitPortSharing.value}
      - --profiling=${u.L.profiling.value}
      - --pv-recycler-increment-timeout-nfs=${u.L.pvRecyclerIncrementTimeoutNfs.value}
      - --pv-recycler-minimum-timeout-hostpath=${u.L.pvRecyclerMinimumTimeoutHostpath.value}
      - --pv-recycler-minimum-timeout-nfs=${u.L.pvRecyclerMinimumTimeoutNfs.value}
      - --pv-recycler-timeout-increment-hostpath=${u.L.pvRecyclerTimeoutIncrementHostpath.value}
      - --pvclaimbinder-sync-period=${u.L.pvclaimbinderSyncPeriod.value}
      - --requestheader-client-ca-file=${u.L.requestheaderClientCaFile.value}
      - --requestheader-extra-headers-prefix=${u.L.requestheaderExtraHeadersPrefix.value}
      - --requestheader-group-headers=${u.L.requestheaderGroupHeaders.value}
      - --requestheader-username-headers=${u.L.requestheaderUsernameHeaders.value}
      - --resource-quota-sync-period=${u.L.resourceQuotaSyncPeriod.value}
      - --root-ca-file=${u.L.rootCaFile.value}
      - --route-reconciliation-period=${u.L.routeReconciliationPeriod.value}
      - --secondary-node-eviction-rate=${u.L.secondaryNodeEvictionRate.value}
      - --secure-port=${u.L.securePort.value}
      - --service-account-private-key-file=${u.L.serviceAccountPrivateKeyFile.value}
      - --terminated-pod-gc-threshold=${u.L.terminatedPodGcThreshold.value}
      - --unhealthy-zone-threshold=${u.L.unhealthyZoneThreshold.value}
      - --use-service-account-credentials=${u.L.useServiceAccountCredentials.value}
      - --v=${u.L.v.value}
      - --version=${u.L.version.value}
      - --volume-host-allow-local-loopback=${u.L.volumeHostAllowLocalLoopback.value}
      # ЕСЛИ НУЖНО ПОДКЛЮЧИТЬ CLOUD-CONTROLLER-MANAGER
      # ТРЕБУЕТСЯ РАСКОМЕНТИРОВАТЬ
      # ->
      # - --cloud-provider: "${u.L.cloudProvider.value}"
      # Не указывать если значение "" или undefined
      # - --cluster-signing-kube-apiserver-client-cert-file=${u.L.clusterSigningKubeApiserverClientCertFile.value}
      # - --cluster-signing-kube-apiserver-client-key-file=${u.L.clusterSigningKubeApiserverClientKeyFile.value}
      # - --cluster-signing-kubelet-client-cert-file=${u.L.clusterSigningKubeletClientCertFile.value}
      # - --cluster-signing-kubelet-client-key-file=${u.L.clusterSigningKubeletClientKeyFile.value}
      # - --cluster-signing-kubelet-serving-cert-file=${u.L.clusterSigningKubeletServingCertFile.value}
      # - --cluster-signing-kubelet-serving-key-file=${u.L.clusterSigningKubeletServingKeyFile.value}
      # - --cluster-signing-legacy-unknown-cert-file=${u.L.clusterSigningLegacyUnknownCertFile.value}
      # - --cluster-signing-legacy-unknown-key-file=${u.L.clusterSigningLegacyUnknownKeyFile.value}
      # - --cluster-cidr=${u.L.clusterCidr.value}
      # - --cloud-config=${u.L.cloudConfig.value}
      # - --cert-dir=${u.L.certDir.value}
      # - --allow-metric-labels-manifest=${u.L.allowMetricLabelsManifest.value}
      # - --allow-metric-labels=${u.L.allowMetricLabels.value}
      # - --disabled-metrics=${u.L.disabledMetrics.value}
      # - --leader-migration-config=${u.L.leaderMigrationConfig.value}
      # - --master=${u.L.master.value}
      # - --pv-recycler-pod-template-filepath-hostpath=${u.L.pvRecyclerPodTemplateFilepathHostpath.value}
      # - --pv-recycler-pod-template-filepath-nfs=${u.L.pvRecyclerPodTemplateFilepathNfs.value}
      # - --service-cluster-ip-range=${u.L.serviceClusterIpRange.value}
      # - --show-hidden-metrics-for-version=${u.L.showHiddenMetricsForVersion.value}
      # - --tls-cert-file=${u.L.tlsCertFile.value}
      # - --tls-cipher-suites=${u.L.tlsCipherSuites.value}
      # - --tls-min-version=${u.L.tlsMinVersion.value}
      # - --tls-private-key-file=${u.L.tlsPrivateKeyFile.value}
      # - --tls-sni-cert-key=${u.L.tlsSniCertKey.value}
      # - --vmodule=${u.L.vmodule.value}
      # - --volume-host-cidr-denylist=${u.L.volumeHostCidrDenylist.value}
      # - --external-cloud-volume-plugin=${u.L.externalCloudVolumePlugin.value}
      # - --requestheader-allowed-names=${u.L.requestheaderAllowedNames.value}
      image: ${o.M.baseDockerRegistry.value}/kube-controller-manager:${s.M.kubernetes.value}
      imagePullPolicy: IfNotPresent
      livenessProbe:
        failureThreshold: 8
        httpGet:
          path: /healthz
          port: ${c.h.kubeControllerManager.portNumber}
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
          port: ${c.h.kubeControllerManager.portNumber}
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
      - mountPath: ${o.M.kubernetesBaseFolderPath.value}/pki
        name: k8s-certs
        readOnly: true
      - mountPath: ${o.M.kubernetesBaseFolderPath.value}/controller-manager.conf
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
        path: ${o.M.kubernetesBaseFolderPath.value}/pki
        type: DirectoryOrCreate
      name: k8s-certs
    - hostPath:
        path: ${o.M.kubernetesBaseFolderPath.value}/controller-manager.conf
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
`})]})]})}function k(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},87464:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var a=r(34164);const n={tabItem:"tabItem_Ymn6"};var l=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,o),hidden:r,children:t})}}}]);