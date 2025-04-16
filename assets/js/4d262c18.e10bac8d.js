"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76597],{62774:(e,r,t)=>{t.d(r,{A:()=>E});var a=t(96540),i=t(34164),l=t(65627),n=t(56347),s=t(50372),o=t(30604),c=t(11861),u=t(78749);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,a.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:a,default:i}}=e;return{value:r,label:t,attributes:a,default:i}}))}(t);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function m(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function p(e){let{queryString:r=!1,groupId:t}=e;const i=(0,n.W6)(),l=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,o.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(i.location.search);r.set(l,e),i.replace({...i.location,search:r.toString()})}),[l,i])]}function v(e){const{defaultValue:r,queryString:t=!1,groupId:i}=e,l=h(e),[n,o]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:l}))),[c,d]=p({queryString:t,groupId:i}),[v,f]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[i,l]=(0,u.Dv)(t);return[i,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:i}),b=(()=>{const e=c??v;return m({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{b&&o(b)}),[b]);return{selectedValue:n,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var f=t(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function M(e){let{className:r,block:t,selectedValue:a,selectValue:n,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const r=e.currentTarget,t=o.indexOf(r),i=s[t].value;i!==a&&(c(r),n(i))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;r=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;r=o[t]??o[o.length-1];break}}r?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},r),children:s.map((e=>{let{value:r,label:t,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>{o.push(e)},onKeyDown:d,onClick:u,...l,className:(0,i.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":a===r}),children:t??r},r)}))})}function j(e){let{lazy:r,children:t,selectedValue:l}=e;const n=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=n.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:n.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==l})))})}function g(e){const r=v(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,x.jsx)(M,{...r,...e}),(0,x.jsx)(j,{...r,...e})]})}function E(e){const r=(0,f.A)();return(0,x.jsx)(g,{...e,children:d(e.children)},String(r))}},80621:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>h,default:()=>f,frontMatter:()=>d,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"tech-docs/monitoring/victoria-metrics-operator/victoria-metrics-operator-install","title":"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 VictoriaMetrics Operator","description":"VictoriaMetrics Operator \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u043e\u0431\u044b\u0447\u043d\u043e\u0435 Kubernetes-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u043e\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Helm Chart, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043c\u043e\u0436\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043b\u0438\u0431\u043e \u0438\u0437 in-cloud manifests \u043b\u0438\u0431\u043e \u0447\u0435\u0440\u0435\u0437 helm.","source":"@site/docs/tech-docs/monitoring/victoria-metrics-operator/victoria-metrics-operator-install.mdx","sourceDirName":"tech-docs/monitoring/victoria-metrics-operator","slug":"/tech-docs/monitoring/victoria-metrics-operator/victoria-metrics-operator-install","permalink":"/tech-docs/monitoring/victoria-metrics-operator/victoria-metrics-operator-install","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"victoria-metrics-operator-install","title":"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 VictoriaMetrics Operator"}}');var i=t(74848),l=t(28453),n=t(87464),s=t(62774),o=t(1775),c=t(60513),u=t(86680);const d={id:"victoria-metrics-operator-install",title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 VictoriaMetrics Operator"},h="5.5.1.2.6. VictoriaMetrics Operator",m={},p=[{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e helm",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-helm",level:2},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 Helm",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435-helm",level:3},{value:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 \u0441 Helm chart",id:"\u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435-\u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439-\u0441-helm-chart",level:3},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 VictoriaMetrics Operator",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435-victoriametrics-operator",level:3},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e in-cloud manifests",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-in-cloud-manifests",level:2}];function v(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"55126-victoriametrics-operator",children:"5.5.1.2.6. VictoriaMetrics Operator"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"VictoriaMetrics Operator"})," \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u043e\u0431\u044b\u0447\u043d\u043e\u0435 Kubernetes-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u043e\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Helm Chart, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043c\u043e\u0436\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043b\u0438\u0431\u043e \u0438\u0437 in-cloud manifests \u043b\u0438\u0431\u043e \u0447\u0435\u0440\u0435\u0437 helm."]}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsxs)(n.A,{value:"helm",children:[(0,i.jsx)(r.h2,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-helm",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e helm"}),(0,i.jsx)(r.h3,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435-helm",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 Helm"}),(0,i.jsxs)(r.p,{children:["\u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0449\u0435 \u043d\u0435\u0442 Helm, \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0435\u0433\u043e. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043a\u0430\u0447\u0430\u0442\u044c Helm \u0441 ",(0,i.jsx)(r.a,{href:"https://helm.sh/docs/intro/install/",children:"\u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0430\u0439\u0442\u0430"}),". \u0421\u043b\u0435\u0434\u0443\u0439\u0442\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f\u043c \u0434\u043b\u044f \u0432\u0430\u0448\u0435\u0439 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b."]}),(0,i.jsx)(r.h3,{id:"\u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435-\u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439-\u0441-helm-chart",children:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 \u0441 Helm chart"}),(0,i.jsxs)(r.p,{children:["\u0412\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 \u0441 charts, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f ",(0,i.jsx)(r.code,{children:"VictoriaMetrics Operator"}),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 VictoriaMetrics:"]}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"helm repo add helm repo add victoriametrics https://victoriametrics.github.io/helm-charts/\n"})}),(0,i.jsx)(r.p,{children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u043f\u0438\u0441\u043e\u043a charts:"}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"helm repo update\n"})}),(0,i.jsx)(r.h3,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435-victoriametrics-operator",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 VictoriaMetrics Operator"}),(0,i.jsxs)(r.p,{children:["\u0422\u0435\u043f\u0435\u0440\u044c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c ",(0,i.jsx)(r.code,{children:"VictoriaMetrics Operator"})," \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Helm. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u0443:"]}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"helm install --name vmoperator-infra-victoria-metrics-operator victoriametrics/victoria-metrics-operator --namespace in-cloud-vmcluster --create-namespace -f values.yaml\n"})}),(0,i.jsxs)(r.p,{children:["\u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u0441\u043e\u0437\u0434\u0430\u0441\u0442 \u0440\u0435\u043b\u0438\u0437 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c ",(0,i.jsx)(r.code,{children:"vmoperator-infra-victoria-metrics-operator"})," \u0438 \u0440\u0430\u0437\u0432\u0435\u0440\u043d\u0435\u0442 ",(0,i.jsx)(r.code,{children:"VictoriaMetrics Operator"})," \u043d\u0430 \u0432\u0430\u0448\u0435\u043c \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435 Kubernetes \u0432 \u043d\u0435\u0439\u043c\u0441\u043f\u0435\u0439\u0441\u0435 ",(0,i.jsx)(r.code,{children:"in-cloud-vmcluster"}),"."]}),(0,i.jsxs)("div",{className:"parent-div",style:{minHeight:"420px"},children:[(0,i.jsx)("div",{className:"child-block",children:(0,i.jsx)("h4",{className:"center",children:"Enivironments"})}),(0,i.jsxs)("div",{className:"child-block",children:[(0,i.jsx)("h4",{className:"center",children:"Values"}),(0,i.jsx)(o.A,{language:"yaml",children:c.A`
              enabled: true
              createCRD: true
              replicaCount: 1
              rbac:
                create: true
                pspEnabled: true
              operator:
                disable_prometheus_converter: true
                psp_auto_creation_enabled: false
                enable_converter_ownership: false
                useCustomConfigReloader: true
              env:
                - name: GOMAXPROCS
                  value: '1'
                - name: VM_VMAGENTDEFAULT_CONFIGRELOADERMEMORY
                  value: '100Mi'
                - name: VM_VMALERTMANAGER_CONFIGRELOADERMEMORY
                  value: '100Mi'
                - name: VM_VMALERTDEFAULT_CONFIGRELOADERMEMORY
                  value: '100Mi'
              resources:
                requests:
                  cpu: 100m
                  memory: 128Mi
                limits:
                  cpu: 250m
                  memory: 256Mi
              admissionWebhooks:
                enabled: false
                policy: Fail
                caBundle: ""
                certManager:
                  enabled: false
                  issuer: {}
              serviceMonitor:
                enabled: true
              tolerations:
                - key: node-role.kubernetes.io/master
                  effect: NoSchedule
                - key: node-role.kubernetes.io/control-plane
                  effect: NoSchedule
                - key: node-role.kubernetes.io/data-plane
                  effect: NoSchedule
                - key: node-role.kubernetes.io/in-cloud-infra
                  effect: NoSchedule
                - key: node-role.kubernetes.io/vmcluster
                  effect: NoSchedule
            `})]})]})]}),(0,i.jsxs)(n.A,{value:"in-cloud/manifests",children:[(0,i.jsx)(r.h2,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-in-cloud-manifests",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e in-cloud manifests"}),(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"VictoriaMetrics Operator"})," \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u043e\u0431\u044b\u0447\u043d\u043e\u0435 Kubernetes-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u043e\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Helm Chart."]}),(0,i.jsxs)("div",{className:"parent-div",style:{minHeight:"420px"},children:[(0,i.jsxs)("div",{className:"child-block",children:[(0,i.jsx)("h4",{className:"center",children:"Enivironments"}),(0,i.jsx)(o.A,{language:"bash",children:c.A`
              export VM_OPERATOR_VERSION="${u.M.kubeStateMetrics.value}"
            `})]}),(0,i.jsxs)("div",{className:"child-block",children:[(0,i.jsx)("h4",{className:"center",children:"Values"}),(0,i.jsx)(o.A,{language:"yaml",children:c.A`
              enabled: true
              createCRD: true
              replicaCount: 1
              rbac:
                create: true
                pspEnabled: true
              operator:
                disable_prometheus_converter: true
                psp_auto_creation_enabled: false
                enable_converter_ownership: false
                useCustomConfigReloader: true
              env:
                - name: GOMAXPROCS
                  value: '1'
                - name: VM_VMAGENTDEFAULT_CONFIGRELOADERMEMORY
                  value: '100Mi'
                - name: VM_VMALERTMANAGER_CONFIGRELOADERMEMORY
                  value: '100Mi'
                - name: VM_VMALERTDEFAULT_CONFIGRELOADERMEMORY
                  value: '100Mi'
              resources:
                requests:
                  cpu: 100m
                  memory: 128Mi
                limits:
                  cpu: 250m
                  memory: 256Mi
              admissionWebhooks:
                enabled: false
                policy: Fail
                caBundle: ""
                certManager:
                  enabled: false
                  issuer: {}
              serviceMonitor:
                enabled: true
              tolerations:
                - key: node-role.kubernetes.io/master
                  effect: NoSchedule
                - key: node-role.kubernetes.io/control-plane
                  effect: NoSchedule
                - key: node-role.kubernetes.io/data-plane
                  effect: NoSchedule
                - key: node-role.kubernetes.io/in-cloud-infra
                  effect: NoSchedule
                - key: node-role.kubernetes.io/vmcluster
                  effect: NoSchedule
            `})]})]}),(0,i.jsx)(r.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u0435\u043c \u0432\u0430\u0448\u0435\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430:"}),(0,i.jsx)(o.A,{language:"bash",children:c.A`helmfile -e $\{VM_OPERATOR_VERSION} -l in-cloud-collections=victoria-metrics-operator in-cloud-monitoring-stack=client | kubectl apply -f - `})]})]})]})}function f(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(v,{...e})}):v(e)}},86680:(e,r,t)=>{t.d(r,{M:()=>a});const a={victoriaMetricsOperator:{value:"0.37.0"},victoriaMetricsStack:{value:"0.28.2"},nodeExporter:{value:"4.27.0"},blackboxExporter:{value:"9.0.0"},processExporter:{value:"0.5.0"},kubeStateMetrics:{value:"5.16.4"},metricsServer:{value:"3.12.1"}}},87464:(e,r,t)=>{t.d(r,{A:()=>n});t(96540);var a=t(34164);const i={tabItem:"tabItem_Ymn6"};var l=t(74848);function n(e){let{children:r,hidden:t,className:n}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,n),hidden:t,children:r})}}}]);