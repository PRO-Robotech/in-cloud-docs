"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[13884,55915,72697,76961,91412],{6353:(e,t,r)=>{r.d(t,{$:()=>a});var n=r(7478);const a={etcdCA:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/ca.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},etcdClient:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/sa.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"}}},20228:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>k,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"tech-docs/kubernetes/certificates/service-account/serviceAccountKubeadmComponent","title":"serviceAccountKubeadmComponent","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/certificates/service-account/serviceAccountKubeadmComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/service-account","slug":"/tech-docs/kubernetes/certificates/service-account/serviceAccountKubeadmComponent","permalink":"/tech-docs/kubernetes/certificates/service-account/serviceAccountKubeadmComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),c=r(28453),s=r(1775),o=r(60513);const l={},u=void 0,i={},d=[];function h(e){const t={admonition:"admonition",blockquote:"blockquote",p:"p",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.A,{language:"bash",children:o.A`
  kubeadm init phase certs sa
`}),"\n",(0,a.jsxs)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:[(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),"\n"]}),(0,a.jsx)(s.A,{language:"bash",children:o.A`
  #### Генерация Kube API сертификатов
  [certs] Generating "sa" key and public key
`})]})]})}function k(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},40413:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>b,frontMatter:()=>u,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"tech-docs/kubernetes/certificates/service-account/serviceAccountHardWayComponent","title":"serviceAccountHardWayComponent","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/certificates/service-account/serviceAccountHardWayComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/service-account","slug":"/tech-docs/kubernetes/certificates/service-account/serviceAccountHardWayComponent","permalink":"/tech-docs/kubernetes/certificates/service-account/serviceAccountHardWayComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),c=r(28453),s=r(1775),o=r(60513),l=r(6353);const u={},i=void 0,d={},h=[];function k(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.A,{language:"bash",children:o.A`
  openssl genpkey \\
    -algorithm RSA \\
    -out ${l.$.kubernetesSA.keyPath} \\
    -pkeyopt rsa_keygen_bits:2048
`}),"\n",(0,a.jsx)(s.A,{language:"bash",children:o.A`
  openssl rsa \\
    -pubout \\
    -in ${l.$.kubernetesSA.keyPath} \\
    -out ${l.$.kubernetesSA.crtPath}
`})]})}function b(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(k,{...e})}):k()}},61888:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>k});const n=JSON.parse('{"id":"tech-docs/kubernetes/certificates/service-account/serviceAccountComponent","title":"serviceAccountComponent","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/service-account/serviceAccountComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/service-account","slug":"/tech-docs/kubernetes/certificates/service-account/serviceAccountComponent","permalink":"/tech-docs/kubernetes/certificates/service-account/serviceAccountComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),c=r(28453),s=r(87464),o=r(62774),l=r(40413),u=r(20228);const i={},d=void 0,h={},k=[...l.toc,...u.toc];function b(e){return(0,a.jsxs)(o.A,{groupId:"install-type",children:[(0,a.jsx)(s.A,{value:"HardWay",children:(0,a.jsx)(l.default,{})}),(0,a.jsx)(s.A,{value:"Kubeadm",children:(0,a.jsx)(u.default,{})})]})}function p(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(b,{...e})}):b()}},62774:(e,t,r)=>{r.d(t,{A:()=>g});var n=r(96540),a=r(34164),c=r(65627),s=r(56347),o=r(50372),l=r(30604),u=r(11861),i=r(78749);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function k(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.W6)(),c=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(c),(0,n.useCallback)((e=>{if(!c)return;const t=new URLSearchParams(a.location.search);t.set(c,e),a.replace({...a.location,search:t.toString()})}),[c,a])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,c=h(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!k({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:c}))),[u,d]=b({queryString:r,groupId:a}),[p,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,c]=(0,i.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&c.set(e)}),[r,c])]}({groupId:a}),f=(()=>{const e=u??p;return k({value:e,tabValues:c})?e:null})();(0,o.A)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!k({value:e,tabValues:c}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),v(e)}),[d,v,c]),tabValues:c}}var v=r(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(74848);function P(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,c.a_)(),i=e=>{const t=e.currentTarget,r=l.indexOf(t),a=o[r].value;a!==n&&(u(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:c}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{l.push(e)},onKeyDown:d,onClick:i,...c,className:(0,a.A)("tabs__item",f.tabItem,c?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:c}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===c));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==c})))})}function x(e){const t=p(e);return(0,m.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,m.jsx)(P,{...t,...e}),(0,m.jsx)(y,{...t,...e})]})}function g(e){const t=(0,v.A)();return(0,m.jsx)(x,{...e,children:d(e.children)},String(t))}},66144:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>b,frontMatter:()=>u,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"tech-docs/kubernetes/certificates/service-account/allServiceAccountComponent","title":"allServiceAccountComponent","description":"\u0412 Kubernetes ServiceAccount \u2014 \u044d\u0442\u043e \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u043c \u0432\u043d\u0443\u0442\u0440\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u0440\u0438 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0438 \u043a API-\u0441\u0435\u0440\u0432\u0435\u0440\u0443.","source":"@site/docs/tech-docs/kubernetes/certificates/service-account/allServiceAccountComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/service-account","slug":"/tech-docs/kubernetes/certificates/service-account/allServiceAccountComponent","permalink":"/tech-docs/kubernetes/certificates/service-account/allServiceAccountComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),c=r(28453),s=r(61888),o=r(87464),l=r(62774);const u={},i=void 0,d={},h=[...s.toc];function k(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,c.R)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["\u0412 Kubernetes ",(0,a.jsx)(t.code,{children:"ServiceAccount"})," \u2014 \u044d\u0442\u043e \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u043c \u0432\u043d\u0443\u0442\u0440\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u0440\u0438 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0438 \u043a API-\u0441\u0435\u0440\u0432\u0435\u0440\u0443.\n\u041f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439 \u043a\u043b\u044e\u0447, \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c\u044b\u0439 \u0432 ",(0,a.jsx)(t.code,{children:"kube-apiserver"})," \u0438 ",(0,a.jsx)(t.code,{children:"kube-controller-manager"}),", \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f ",(0,a.jsx)(t.strong,{children:"\u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0442\u043e\u043a\u0435\u043d\u043e\u0432"})," \u044d\u0442\u0438\u0445 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u043e\u0432. \u042d\u0442\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 ",(0,a.jsx)(t.strong,{children:"\u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0435 \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u043c\u043e\u0435"})," \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043c\u0435\u0436\u0434\u0443 \u0441\u0435\u0440\u0432\u0438\u0441\u0430\u043c\u0438 \u0438 \u0434\u0430\u0451\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c ",(0,a.jsx)(t.strong,{children:"\u0433\u0440\u0430\u043d\u0443\u043b\u044f\u0440\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u0441\u043e\u0437\u0434\u0430\u0451\u0442\u0441\u044f \u0438\u043b\u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u043a\u043b\u044e\u0447, \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e Kubernetes \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0442\u043e\u043a\u0435\u043d\u044b ",(0,a.jsx)(t.code,{children:"ServiceAccount"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(l.A,{groupId:"phase",children:[(0,a.jsx)(o.A,{value:"init",label:"Init",children:(0,a.jsxs)(r,{children:[(0,a.jsx)("summary",{children:(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,a.jsx)("p",{style:{marginBottom:0},children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043b\u044e\u0447\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u0438 ServiceAccount"}),(0,a.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,a.jsx)(s.default,{})]})}),(0,a.jsx)(o.A,{value:"join",label:"Join",children:(0,a.jsxs)(r,{children:[(0,a.jsx)("summary",{children:(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,a.jsx)("p",{style:{marginBottom:0},children:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a\u043b\u044e\u0447\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u0438 ServiceAccount"}),(0,a.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,a.jsxs)(t.admonition,{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:[(0,a.jsxs)(t.p,{children:["\u042d\u0442\u0430\u043f ",(0,a.jsx)(t.code,{children:"join"})," ",(0,a.jsx)(t.strong,{children:"\u043d\u0435 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u043a\u043b\u044e\u0447"}),", \u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043a\u043b\u044e\u0447, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u0447\u0435\u0440\u0435\u0437 \u044d\u0442\u0430\u043f \u0432\u044b\u0433\u0440\u0443\u0437\u043a\u0438 CA."]}),(0,a.jsx)(t.p,{children:"\u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0432\u044b \u043f\u0440\u043e\u0448\u043b\u0438 \u0448\u0430\u0433:"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/center-authority/all-ca",children:"CA Download"})}),"\n"]})]})]})})]})]})}function b(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(k,{...e})}):k(e)}},87464:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var c=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,c.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:r,children:t})}},94392:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>i});const n=JSON.parse('{"id":"tech-docs/kubernetes/certificates/service-account/all-service-account","title":"5.2.2.4. \u0421\u0435\u0440\u0432\u0438\u0441 \u0410\u043a\u043a\u0430\u0443\u043d\u0442","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/service-account/allServiceAccount.mdx","sourceDirName":"tech-docs/kubernetes/certificates/service-account","slug":"/tech-docs/kubernetes/certificates/service-account/all-service-account","permalink":"/tech-docs/kubernetes/certificates/service-account/all-service-account","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"all-service-account"},"sidebar":"techDocs","previous":{"title":"5.2.2.3. Kubeconfigs","permalink":"/tech-docs/kubernetes/certificates/components/all-kubeconfigs"},"next":{"title":"5.2.2.5. \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430","permalink":"/tech-docs/kubernetes/certificates/examination/all-examination"}}');var a=r(74848),c=r(28453),s=r(66144);const o={id:"all-service-account"},l="5.2.2.4. \u0421\u0435\u0440\u0432\u0438\u0441 \u0410\u043a\u043a\u0430\u0443\u043d\u0442",u={},i=[...s.toc];function d(e){const t={h1:"h1",header:"header",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"5224-\u0441\u0435\u0440\u0432\u0438\u0441-\u0430\u043a\u043a\u0430\u0443\u043d\u0442",children:"5.2.2.4. \u0421\u0435\u0440\u0432\u0438\u0441 \u0410\u043a\u043a\u0430\u0443\u043d\u0442"})}),"\n",(0,a.jsx)(s.default,{})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);