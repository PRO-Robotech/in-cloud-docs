"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[55533],{62774:(e,r,t)=>{t.d(r,{A:()=>N});var s=t(96540),n=t(34164),l=t(65627),o=t(56347),a=t(50372),i=t(30604),c=t(11861),u=t(78749);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:r,children:t}=e;return(0,s.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:s,default:n}}=e;return{value:r,label:t,attributes:s,default:n}}))}(t);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function h(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function p(e){let{queryString:r=!1,groupId:t}=e;const n=(0,o.W6)(),l=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,i.aZ)(l),(0,s.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(n.location.search);r.set(l,e),n.replace({...n.location,search:r.toString()})}),[l,n])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,l=m(e),[o,i]=(0,s.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:l}))),[c,d]=p({queryString:t,groupId:n}),[f,x]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,l]=(0,u.Dv)(t);return[n,(0,s.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:n}),b=(()=>{const e=c??f;return h({value:e,tabValues:l})?e:null})();(0,a.A)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),x(e)}),[d,x,l]),tabValues:l}}var x=t(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function g(e){let{className:r,block:t,selectedValue:s,selectValue:o,tabValues:a}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const r=e.currentTarget,t=i.indexOf(r),n=a[t].value;n!==s&&(c(r),o(n))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;r=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;r=i[t]??i[i.length-1];break}}r?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},r),children:a.map((e=>{let{value:r,label:t,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>{i.push(e)},onKeyDown:d,onClick:u,...l,className:(0,n.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":s===r}),children:t??r},r)}))})}function y(e){let{lazy:r,children:t,selectedValue:l}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===l));return e?(0,s.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==l})))})}function j(e){const r=f(e);return(0,v.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,v.jsx)(g,{...r,...e}),(0,v.jsx)(y,{...r,...e})]})}function N(e){const r=(0,x.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(r))}},81305:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>m,default:()=>x,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/monitoring/exporters/node-exporter/node-exporter-install","title":"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 Node Exporter","description":"Node Exporter \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u043e\u0431\u044b\u0447\u043d\u043e\u0435 Kubernetes-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u043e\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Helm Chart, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043c\u043e\u0436\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043b\u0438\u0431\u043e \u0438\u0437 in-cloud manifests \u043b\u0438\u0431\u043e \u0447\u0435\u0440\u0435\u0437 helm.","source":"@site/docs/tech-docs/monitoring/exporters/node-exporter/node-exporter-install.mdx","sourceDirName":"tech-docs/monitoring/exporters/node-exporter","slug":"/tech-docs/monitoring/exporters/node-exporter/node-exporter-install","permalink":"/tech-docs/monitoring/exporters/node-exporter/node-exporter-install","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"node-exporter-install","title":"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 Node Exporter"}}');var n=t(74848),l=t(28453),o=t(87464),a=t(62774),i=t(1775),c=t(60513),u=t(86680);const d={id:"node-exporter-install",title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 Node Exporter"},m="5.5.1.2.1. Node Exporter",h={},p=[{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e helm",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-helm",level:2},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 Helm",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435-helm",level:3},{value:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 \u0441 Helm chart",id:"\u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435-\u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439-\u0441-helm-chart",level:3},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 Node Exporter",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435-node-exporter",level:3},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e bcloud manifests",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-bcloud-manifests",level:2}];function f(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"55121-node-exporter",children:"5.5.1.2.1. Node Exporter"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Node Exporter"})," \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u043e\u0431\u044b\u0447\u043d\u043e\u0435 Kubernetes-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u043e\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Helm Chart, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043c\u043e\u0436\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043b\u0438\u0431\u043e \u0438\u0437 in-cloud manifests \u043b\u0438\u0431\u043e \u0447\u0435\u0440\u0435\u0437 helm."]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsxs)(o.A,{value:"helm",children:[(0,n.jsx)(r.h2,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-helm",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e helm"}),(0,n.jsx)(r.h3,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435-helm",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 Helm"}),(0,n.jsxs)(r.p,{children:["\u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0449\u0435 \u043d\u0435\u0442 Helm, \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0435\u0433\u043e. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043a\u0430\u0447\u0430\u0442\u044c Helm \u0441 ",(0,n.jsx)(r.a,{href:"https://helm.sh/docs/intro/install/",children:"\u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0430\u0439\u0442\u0430"}),". \u0421\u043b\u0435\u0434\u0443\u0439\u0442\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f\u043c \u0434\u043b\u044f \u0432\u0430\u0448\u0435\u0439 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b."]}),(0,n.jsx)(r.h3,{id:"\u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435-\u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439-\u0441-helm-chart",children:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 \u0441 Helm chart"}),(0,n.jsx)(r.p,{children:"\u0412\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 \u0441 charts, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f Node Exporter. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 Prometheus Community:"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"helm repo add prom https://prometheus-community.github.io/helm-charts\n"})}),(0,n.jsx)(r.p,{children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u043f\u0438\u0441\u043e\u043a charts:"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"helm repo update\n"})}),(0,n.jsx)(r.h3,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435-node-exporter",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 Node Exporter"}),(0,n.jsxs)(r.p,{children:["\u0422\u0435\u043f\u0435\u0440\u044c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c ",(0,n.jsx)(r.code,{children:"Node Exporter"})," \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Helm. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u0443:"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"helm install prometheus-node-exporter prom/prometheus-node-exporter --namespace bcloud-monitoring-nodes --create-namespace -f values.yaml\n"})}),(0,n.jsxs)(r.p,{children:["\u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u0441\u043e\u0437\u0434\u0430\u0441\u0442 \u0440\u0435\u043b\u0438\u0437 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c ",(0,n.jsx)(r.code,{children:"node-exporter"})," \u0438 \u0440\u0430\u0437\u0432\u0435\u0440\u043d\u0435\u0442 ",(0,n.jsx)(r.code,{children:"Node Exporter"})," \u043d\u0430 \u0432\u0430\u0448\u0435\u043c \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435 Kubernetes \u0432 \u043d\u0435\u0439\u043c\u0441\u043f\u0435\u0439\u0441\u0435 ",(0,n.jsx)(r.code,{children:"bcloud-monitoring-nodes"}),"."]}),(0,n.jsxs)("div",{className:"parent-div",style:{minHeight:"420px"},children:[(0,n.jsx)("div",{className:"child-block",children:(0,n.jsx)("h4",{className:"center",children:"Enivironments"})}),(0,n.jsxs)("div",{className:"child-block",children:[(0,n.jsx)("h4",{className:"center",children:"Values"}),(0,n.jsx)(i.A,{language:"yaml",children:c.A`
              ---
              extraArgs:
                - --collector.filesystem.ignored-mount-points=^/(dev|proc|sys|var/lib/docker/.+|var/lib/kubelet/.+)($|/)
                - --collector.filesystem.ignored-fs-types=^(autofs|binfmt_misc|bpf|cgroup2?|configfs|debugfs|devpts|devtmpfs|fusectl|hugetlbfs|iso9660|mqueue|nsfs|overlay|proc|procfs|pstore|rpc_pipefs|securityfs|selinuxfs|squashfs|sysfs|tracefs)$
                - --collector.dmi
              containerSecurityContext:
                # C-0013 - Non-root containers
                runAsNonRoot: true
                # C-0017 - Immutable container filesystem
                readOnlyRootFilesystem: true
                # C-0197 - Minimize the admission of containers with allowPrivilegeEscalation
                allowPrivilegeEscalation: false
              resources:
                requests:
                  # C-0050 - Resources CPU limit and request
                  cpu: 100m
                  # C-0004 - Resources memory limit and request
                  memory: 64Mi
                limits:
                  # C-0050 - Resources CPU limit and request
                  cpu: 512m
                  # C-0004 - Resources memory limit and request
                  memory: 256Mi
              serviceAccount:
                create: true
              priorityClassName: system-node-critical
            `})]})]})]}),(0,n.jsxs)(o.A,{value:"in-cloud/manifests",children:[(0,n.jsx)(r.h2,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-bcloud-manifests",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e bcloud manifests"}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Node Exporter"})," \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u043e\u0431\u044b\u0447\u043d\u043e\u0435 Kubernetes-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u043e\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Helm Chart."]}),(0,n.jsxs)("div",{className:"parent-div",style:{minHeight:"420px"},children:[(0,n.jsxs)("div",{className:"child-block",children:[(0,n.jsx)("h4",{className:"center",children:"Enivironments"}),(0,n.jsx)(i.A,{language:"bash",children:c.A`
              export PROMETHEUS_NODE_EXPORTER_VERSION="${u.M.nodeExporter.value}"
            `})]}),(0,n.jsxs)("div",{className:"child-block",children:[(0,n.jsx)("h4",{className:"center",children:"Values"}),(0,n.jsx)(i.A,{language:"yaml",children:c.A`
              ---
              extraArgs:
                - --collector.filesystem.ignored-mount-points=^/(dev|proc|sys|var/lib/docker/.+|var/lib/kubelet/.+)($|/)
                - --collector.filesystem.ignored-fs-types=^(autofs|binfmt_misc|bpf|cgroup2?|configfs|debugfs|devpts|devtmpfs|fusectl|hugetlbfs|iso9660|mqueue|nsfs|overlay|proc|procfs|pstore|rpc_pipefs|securityfs|selinuxfs|squashfs|sysfs|tracefs)$
                - --collector.dmi
              containerSecurityContext:
                # C-0013 - Non-root containers
                runAsNonRoot: true
                # C-0017 - Immutable container filesystem
                readOnlyRootFilesystem: true
                # C-0197 - Minimize the admission of containers with allowPrivilegeEscalation
                allowPrivilegeEscalation: false
              resources:
                requests:
                  # C-0050 - Resources CPU limit and request
                  cpu: 100m
                  # C-0004 - Resources memory limit and request
                  memory: 64Mi
                limits:
                  # C-0050 - Resources CPU limit and request
                  cpu: 512m
                  # C-0004 - Resources memory limit and request
                  memory: 256Mi
              serviceAccount:
                create: true
              priorityClassName: system-node-critical
            `})]})]}),(0,n.jsx)(r.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u0435\u043c \u0432\u0430\u0448\u0435\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430:"}),(0,n.jsx)(i.A,{language:"bash",children:c.A`helmfile -e $\{PROMETHEUS_NODE_EXPORTER_VERSION} -l bcloud-collections=prometheus-node-exporter bcloud-monitoring-stack=client | kubectl apply -f - `})]})]})]})}function x(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},86680:(e,r,t)=>{t.d(r,{M:()=>s});const s={victoriaMetricsOperator:{value:"0.37.0"},victoriaMetricsStack:{value:"0.28.2"},nodeExporter:{value:"4.27.0"},blackboxExporter:{value:"9.0.0"},processExporter:{value:"0.5.0"},kubeStateMetrics:{value:"5.16.4"},metricsServer:{value:"3.12.1"}}},87464:(e,r,t)=>{t.d(r,{A:()=>o});t(96540);var s=t(34164);const n={tabItem:"tabItem_Ymn6"};var l=t(74848);function o(e){let{children:r,hidden:t,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,o),hidden:t,children:r})}}}]);