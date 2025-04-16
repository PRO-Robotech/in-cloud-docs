"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[87074,87707,97245],{1603:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>h,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>x});const t=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/phases/phases","title":"5.2.2.1. \u0424\u0430\u0437\u044b Kubeadm","description":"\u041f\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043c \u043d\u0430\u0447\u0430\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430, \u043d\u0430\u0434\u043e \u0440\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u043a\u0430\u043a\u0438\u0435 \u044d\u0442\u0430\u043f\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 Kubeadm \u043f\u0440\u0438 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043d\u043e\u0434\u044b.","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/phases/phaseKubeadm.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/phases","slug":"/tech-docs/kubernetes/components/kubeadm/phases/phases","permalink":"/tech-docs/kubernetes/components/kubeadm/phases/phases","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"phases"}}');var s=r(74848),c=r(28453),d=r(87464),l=r(62774),a=r(65538),o=r(18252);const i={id:"phases"},h="5.2.2.1. \u0424\u0430\u0437\u044b Kubeadm",u={},x=[...a.toc,...o.toc];function j(e){const n={blockquote:"blockquote",h1:"h1",header:"header",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"5221-\u0444\u0430\u0437\u044b-kubeadm",children:"5.2.2.1. \u0424\u0430\u0437\u044b Kubeadm"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u041f\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043c \u043d\u0430\u0447\u0430\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430, \u043d\u0430\u0434\u043e \u0440\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u043a\u0430\u043a\u0438\u0435 \u044d\u0442\u0430\u043f\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 Kubeadm \u043f\u0440\u0438 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043d\u043e\u0434\u044b."})}),"\n"]}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(d.A,{value:"kubeadm init",children:(0,s.jsx)(a.default,{})}),(0,s.jsx)(d.A,{value:"kubeadm join",children:(0,s.jsx)(o.default,{})})]})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},18252:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/phases/phaseKubeadmJoin","title":"phaseKubeadmJoin","description":"\u041f\u0443\u0442\u044c","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/phases/phaseKubeadmJoin.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/phases","slug":"/tech-docs/kubernetes/components/kubeadm/phases/phaseKubeadmJoin","permalink":"/tech-docs/kubernetes/components/kubeadm/phases/phaseKubeadmJoin","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=r(74848),c=r(28453);const d={},l=void 0,a={},o=[];function i(e){const n={code:"code",pre:"pre",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"root@compute:/home/user# kubeadm join phase\n\n*****\nAvailable Commands:\n  control-plane-join    Join a machine as a control plane instance\n  control-plane-prepare Prepare the machine for serving a control plane\n  kubelet-start         Write kubelet settings, certificates and (re)start the kubelet\n  preflight             Run join pre-flight checks\n  wait-control-plane    EXPERIMENTAL: Wait for the control plane to start\n"})}),"\n",(0,s.jsx)("div",{className:"scrollable-x",children:(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"\u041f\u0443\u0442\u044c"}),(0,s.jsx)("th",{children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"$control-plane-join.all"})}),(0,s.jsx)("td",{children:"\u0423\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0432\u0441\u0435 \u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"$control-plane-join.etcd"})}),(0,s.jsx)("td",{children:"\u0423\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 CoreDNS"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"$control-plane-join.mark-control-plane"})}),(0,s.jsx)("td",{children:"\u0423\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 kube-proxy"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"$control-plane-prepare.all"})}),(0,s.jsx)("td",{children:"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0432\u0441\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"$control-plane-prepare.control-plane"})}),(0,s.jsx)("td",{children:"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 \u0434\u043b\u044f Kubernetes API"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"$control-plane-prepare.certs"})}),(0,s.jsx)("td",{children:"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 apiserver \u0434\u043b\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a etcd"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"$control-plane-prepare.download-certs"})}),(0,s.jsx)("td",{children:"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 apiserver \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a kubelet"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"$control-plane-prepare.kubeconfig"})}),(0,s.jsx)("td",{children:"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0441\u0430\u043c\u043e\u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0439 Kubernetes \u0426\u0410"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsxs)("td",{children:[(0,s.jsx)(n.code,{children:"$kubelet-start"})," "]}),(0,s.jsx)("td",{children:"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0441\u0430\u043c\u043e\u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0439 ETCD \u0426\u0410"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"$preflight"})}),(0,s.jsx)("td",{children:"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0441\u0430\u043c\u043e\u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0439 Front Proxy \u0426\u0410"})]})]})]})})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},62774:(e,n,r)=>{r.d(n,{A:()=>$});var t=r(96540),s=r(34164),c=r(65627),d=r(56347),l=r(50372),a=r(30604),o=r(11861),i=r(78749);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function x(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:r}=e;const s=(0,d.W6)(),c=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,a.aZ)(c),(0,t.useCallback)((e=>{if(!c)return;const n=new URLSearchParams(s.location.search);n.set(c,e),s.replace({...s.location,search:n.toString()})}),[c,s])]}function p(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,c=u(e),[d,a]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:c}))),[o,h]=j({queryString:r,groupId:s}),[p,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,c]=(0,i.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&c.set(e)}),[r,c])]}({groupId:s}),m=(()=>{const e=o??p;return x({value:e,tabValues:c})?e:null})();(0,l.A)((()=>{m&&a(m)}),[m]);return{selectedValue:d,selectValue:(0,t.useCallback)((e=>{if(!x({value:e,tabValues:c}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),b(e)}),[h,b,c]),tabValues:c}}var b=r(9136);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(74848);function k(e){let{className:n,block:r,selectedValue:t,selectValue:d,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:o}=(0,c.a_)(),i=e=>{const n=e.currentTarget,r=a.indexOf(n),s=l[r].value;s!==t&&(o(n),d(s))},h=e=>{let n=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;n=a[r]??a[0];break}case"ArrowLeft":{const r=a.indexOf(e.currentTarget)-1;n=a[r]??a[a.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:c}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{a.push(e)},onKeyDown:h,onClick:i,...c,className:(0,s.A)("tabs__item",m.tabItem,c?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:c}=e;const d=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=d.find((e=>e.props.value===c));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:d.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==c})))})}function v(e){const n=p(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,f.jsx)(k,{...n,...e}),(0,f.jsx)(g,{...n,...e})]})}function $(e){const n=(0,b.A)();return(0,f.jsx)(v,{...e,children:h(e.children)},String(n))}},65538:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/phases/phaseKubeadmInit","title":"phaseKubeadmInit","description":"\u041f\u0443\u0442\u044c","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/phases/phaseKubeadmInit.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/phases","slug":"/tech-docs/kubernetes/components/kubeadm/phases/phaseKubeadmInit","permalink":"/tech-docs/kubernetes/components/kubeadm/phases/phaseKubeadmInit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=r(74848),c=r(28453);const d={},l=void 0,a={},o=[];function i(e){const n={code:"code",pre:"pre",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"root@compute:/home/user# kubeadm init phase\n\n*****\nAvailable Commands:\n  addon              Install required addons for passing conformance tests\n  bootstrap-token    Generates bootstrap tokens used to join a node to a cluster\n  certs              Certificate generation\n  control-plane      Generate all static Pod manifest files necessary to establish the control plane\n  etcd               Generate static Pod manifest file for local etcd\n  kubeconfig         Generate all kubeconfig files necessary to establish the control plane and the admin kubeconfig file\n  kubelet-finalize   Updates settings relevant to the kubelet after TLS bootstrap\n  kubelet-start      Write kubelet settings and (re)start the kubelet\n  mark-control-plane Mark a node as a control-plane\n  preflight          Run pre-flight checks\n  show-join-command  Show the join command for control-plane and worker node\n  upload-certs       Upload certificates to kubeadm-certs\n  upload-config      Upload the kubeadm and kubelet configuration to a ConfigMap\n"})}),"\n",(0,s.jsx)("div",{className:"scrollable-x",children:(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"\u041f\u0443\u0442\u044c"}),(0,s.jsx)("th",{children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"$addon.all"})}),(0,s.jsx)("td",{children:"\u0423\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0432\u0441\u0435 \u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"$addon.coredns"})}),(0,s.jsx)("td",{children:"\u0423\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 CoreDNS"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"$addon.kube-proxy"})}),(0,s.jsx)("td",{children:"\u0423\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 kube-proxy"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"$certs.all"})}),(0,s.jsx)("td",{children:"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0432\u0441\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"$certs.apiserver"})}),(0,s.jsx)("td",{children:"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 \u0434\u043b\u044f Kubernetes API"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"$certs.apiserver-etcd-client"})}),(0,s.jsx)("td",{children:"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 apiserver \u0434\u043b\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a etcd"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"$certs.apiserver-kubelet-client"})}),(0,s.jsx)("td",{children:"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 apiserver \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a kubelet"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"ca"})}),(0,s.jsx)("td",{children:"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0441\u0430\u043c\u043e\u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0439 Kubernetes \u0426\u0410"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsxs)("td",{children:[(0,s.jsx)(n.code,{children:"etcd-ca"})," "]}),(0,s.jsx)("td",{children:"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0441\u0430\u043c\u043e\u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0439 ETCD \u0426\u0410"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"front-proxy-ca"})}),(0,s.jsx)("td",{children:"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0441\u0430\u043c\u043e\u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0439 Front Proxy \u0426\u0410"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"etcd-healthcheck-client"})}),(0,s.jsx)("td",{children:"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 \u0434\u043b\u044f liveness probes etcd"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"etcd-peer"})}),(0,s.jsx)("td",{children:"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 \u0434\u043b\u044f \u0441\u0432\u044f\u0437\u0438 \u0443\u0437\u043b\u043e\u0432 etcd"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"etcd-server"})}),(0,s.jsx)("td",{children:"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 etcd-\u0441\u0435\u0440\u0432\u0435\u0440\u0430"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"front-proxy-client"})}),(0,s.jsx)("td",{children:"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 front-proxy \u043a\u043b\u0438\u0435\u043d\u0442\u0430"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"sa"})}),(0,s.jsx)("td",{children:"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u043a\u043b\u044e\u0447\u0438 \u0434\u043b\u044f \u043f\u043e\u0434\u043f\u0438\u0441\u0438 \u0442\u043e\u043a\u0435\u043d\u043e\u0432 \u0441\u0435\u0440\u0432\u0438\u0441\u043d\u044b\u0445 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u043e\u0432"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"bootstrap-token"})}),(0,s.jsx)("td",{children:"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 bootstrap-\u0442\u043e\u043a\u0435\u043d\u044b"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"$control-plane.all"})}),(0,s.jsx)("td",{children:"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0432\u0441\u0435 \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 Pod \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u044b"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"$control-plane.apiserver"})}),(0,s.jsx)("td",{children:"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442 Pod \u0434\u043b\u044f kube-apiserver"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"$control-plane.controller-manager"})}),(0,s.jsx)("td",{children:"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442 Pod \u0434\u043b\u044f kube-controller-manager"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"$control-plane.scheduler"})}),(0,s.jsx)("td",{children:"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442 Pod \u0434\u043b\u044f kube-scheduler"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"$etcd.local"})}),(0,s.jsx)("td",{children:"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442 Pod \u0434\u043b\u044f \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e etcd"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"$kubeconfig.all"})}),(0,s.jsx)("td",{children:"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0432\u0441\u0435 \u0444\u0430\u0439\u043b\u044b kubeconfig"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"$kubeconfig.controller-manager"})}),(0,s.jsx)("td",{children:"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 kubeconfig \u0434\u043b\u044f kube-controller-manager"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"$kubeconfig.kubelet"})}),(0,s.jsx)("td",{children:"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 kubeconfig \u0434\u043b\u044f kubelet (\u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"$kubeconfig.scheduler"})}),(0,s.jsx)("td",{children:"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 kubeconfig \u0434\u043b\u044f \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u0430"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"$kubeconfig.admin"})}),(0,s.jsx)("td",{children:"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 kubeconfig \u0434\u043b\u044f \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430 \u0438 kubeadm"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"$kubeconfig.super-admin"})}),(0,s.jsx)("td",{children:"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 kubeconfig \u0434\u043b\u044f \u0441\u0443\u043f\u0435\u0440-\u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"$kubelet-finalize.all"})}),(0,s.jsx)("td",{children:"\u0417\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0432\u0441\u0435 \u044d\u0442\u0430\u043f\u044b kubelet-finalize"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"$kubelet-finalize.experimental-cert-rotation"})}),(0,s.jsx)("td",{children:"\u0412\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0440\u043e\u0442\u0430\u0446\u0438\u044e \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 kubelet"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"kubelet-start"})}),(0,s.jsx)("td",{children:"\u041d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442 \u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 kubelet"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"mark-control-plane"})}),(0,s.jsx)("td",{children:"\u041f\u043e\u043c\u0435\u0447\u0430\u0435\u0442 \u0443\u0437\u0435\u043b \u043a\u0430\u043a control plane"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"preflight"})}),(0,s.jsx)("td",{children:"\u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"show-join-command"})}),(0,s.jsx)("td",{children:"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0434\u043b\u044f \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0443\u0437\u043b\u043e\u0432"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"upload-certs"})}),(0,s.jsx)("td",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b \u0432 kubeadm-certs"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"$upload-config.all"})}),(0,s.jsx)("td",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442 \u0432\u0441\u044e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u0432 ConfigMap"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"$upload-config.kubeadm"})}),(0,s.jsx)("td",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442 kubeadm ClusterConfiguration \u0432 ConfigMap"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"$upload-config.kubelet"})}),(0,s.jsx)("td",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e kubelet \u0432 ConfigMap"})]})]})]})})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},87464:(e,n,r)=>{r.d(n,{A:()=>d});r(96540);var t=r(34164);const s={tabItem:"tabItem_Ymn6"};var c=r(74848);function d(e){let{children:n,hidden:r,className:d}=e;return(0,c.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,d),hidden:r,children:n})}}}]);