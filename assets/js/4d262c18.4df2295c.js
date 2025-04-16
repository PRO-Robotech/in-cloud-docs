"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76597],{62774:(e,r,t)=>{t.d(r,{A:()=>E});var a=t(96540),l=t(34164),i=t(65627),s=t(56347),n=t(50372),o=t(30604),c=t(11861),u=t(78749);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,a.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:a,default:l}}=e;return{value:r,label:t,attributes:a,default:l}}))}(t);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function m(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function p(e){let{queryString:r=!1,groupId:t}=e;const l=(0,s.W6)(),i=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,o.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(l.location.search);r.set(i,e),l.replace({...l.location,search:r.toString()})}),[i,l])]}function v(e){const{defaultValue:r,queryString:t=!1,groupId:l}=e,i=h(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:i}))),[c,d]=p({queryString:t,groupId:l}),[v,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[l,i]=(0,u.Dv)(t);return[l,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:l}),f=(()=>{const e=c??v;return m({value:e,tabValues:i})?e:null})();(0,n.A)((()=>{f&&o(f)}),[f]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=t(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function M(e){let{className:r,block:t,selectedValue:a,selectValue:s,tabValues:n}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const r=e.currentTarget,t=o.indexOf(r),l=n[t].value;l!==a&&(c(r),s(l))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;r=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;r=o[t]??o[o.length-1];break}}r?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},r),children:n.map((e=>{let{value:r,label:t,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>{o.push(e)},onKeyDown:d,onClick:u,...i,className:(0,l.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":a===r}),children:t??r},r)}))})}function j(e){let{lazy:r,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==i})))})}function g(e){const r=v(e);return(0,x.jsxs)("div",{className:(0,l.A)("tabs-container",f.tabList),children:[(0,x.jsx)(M,{...r,...e}),(0,x.jsx)(j,{...r,...e})]})}function E(e){const r=(0,b.A)();return(0,x.jsx)(g,{...e,children:d(e.children)},String(r))}},80621:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>h,default:()=>b,frontMatter:()=>d,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"tech-docs/monitoring/victoria-metrics-operator/victoria-metrics-operator-install","title":"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 VictoriaMetrics Operator","description":"VictoriaMetrics Operator \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u043e\u0431\u044b\u0447\u043d\u043e\u0435 Kubernetes-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u043e\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Helm Chart, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043c\u043e\u0436\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043b\u0438\u0431\u043e \u0438\u0437 in-cloud manifests \u043b\u0438\u0431\u043e \u0447\u0435\u0440\u0435\u0437 helm.","source":"@site/docs/tech-docs/monitoring/victoria-metrics-operator/victoria-metrics-operator-install.mdx","sourceDirName":"tech-docs/monitoring/victoria-metrics-operator","slug":"/tech-docs/monitoring/victoria-metrics-operator/victoria-metrics-operator-install","permalink":"/tech-docs/monitoring/victoria-metrics-operator/victoria-metrics-operator-install","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"victoria-metrics-operator-install","title":"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 VictoriaMetrics Operator"}}');var l=t(74848),i=t(28453),s=t(87464),n=t(62774),o=t(1775),c=t(60513),u=t(86680);const d={id:"victoria-metrics-operator-install",title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 VictoriaMetrics Operator"},h="5.5.1.2.6. VictoriaMetrics Operator",m={},p=[{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e helm",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-helm",level:2},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 Helm",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435-helm",level:3},{value:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 \u0441 Helm chart",id:"\u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435-\u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439-\u0441-helm-chart",level:3},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 VictoriaMetrics Operator",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435-victoriametrics-operator",level:3},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e bcloud manifests",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-bcloud-manifests",level:2}];function v(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.header,{children:(0,l.jsx)(r.h1,{id:"55126-victoriametrics-operator",children:"5.5.1.2.6. VictoriaMetrics Operator"})}),"\n",(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.code,{children:"VictoriaMetrics Operator"})," \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u043e\u0431\u044b\u0447\u043d\u043e\u0435 Kubernetes-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u043e\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Helm Chart, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043c\u043e\u0436\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043b\u0438\u0431\u043e \u0438\u0437 in-cloud manifests \u043b\u0438\u0431\u043e \u0447\u0435\u0440\u0435\u0437 helm."]}),"\n",(0,l.jsxs)(n.A,{children:[(0,l.jsxs)(s.A,{value:"helm",children:[(0,l.jsx)(r.h2,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-helm",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e helm"}),(0,l.jsx)(r.h3,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435-helm",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 Helm"}),(0,l.jsxs)(r.p,{children:["\u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0449\u0435 \u043d\u0435\u0442 Helm, \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0435\u0433\u043e. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043a\u0430\u0447\u0430\u0442\u044c Helm \u0441 ",(0,l.jsx)(r.a,{href:"https://helm.sh/docs/intro/install/",children:"\u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0430\u0439\u0442\u0430"}),". \u0421\u043b\u0435\u0434\u0443\u0439\u0442\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f\u043c \u0434\u043b\u044f \u0432\u0430\u0448\u0435\u0439 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b."]}),(0,l.jsx)(r.h3,{id:"\u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435-\u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439-\u0441-helm-chart",children:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 \u0441 Helm chart"}),(0,l.jsxs)(r.p,{children:["\u0412\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 \u0441 charts, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f ",(0,l.jsx)(r.code,{children:"VictoriaMetrics Operator"}),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 VictoriaMetrics:"]}),(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"helm repo add helm repo add victoriametrics https://victoriametrics.github.io/helm-charts/\n"})}),(0,l.jsx)(r.p,{children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u043f\u0438\u0441\u043e\u043a charts:"}),(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"helm repo update\n"})}),(0,l.jsx)(r.h3,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435-victoriametrics-operator",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 VictoriaMetrics Operator"}),(0,l.jsxs)(r.p,{children:["\u0422\u0435\u043f\u0435\u0440\u044c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c ",(0,l.jsx)(r.code,{children:"VictoriaMetrics Operator"})," \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Helm. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u0443:"]}),(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"helm install --name vmoperator-infra-victoria-metrics-operator victoriametrics/victoria-metrics-operator --namespace bcloud-vmcluster --create-namespace -f values.yaml\n"})}),(0,l.jsxs)(r.p,{children:["\u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u0441\u043e\u0437\u0434\u0430\u0441\u0442 \u0440\u0435\u043b\u0438\u0437 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c ",(0,l.jsx)(r.code,{children:"vmoperator-infra-victoria-metrics-operator"})," \u0438 \u0440\u0430\u0437\u0432\u0435\u0440\u043d\u0435\u0442 ",(0,l.jsx)(r.code,{children:"VictoriaMetrics Operator"})," \u043d\u0430 \u0432\u0430\u0448\u0435\u043c \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435 Kubernetes \u0432 \u043d\u0435\u0439\u043c\u0441\u043f\u0435\u0439\u0441\u0435 ",(0,l.jsx)(r.code,{children:"bcloud-vmcluster"}),"."]}),(0,l.jsxs)("div",{className:"parent-div",style:{minHeight:"420px"},children:[(0,l.jsx)("div",{className:"child-block",children:(0,l.jsx)("h4",{className:"center",children:"Enivironments"})}),(0,l.jsxs)("div",{className:"child-block",children:[(0,l.jsx)("h4",{className:"center",children:"Values"}),(0,l.jsx)(o.A,{language:"yaml",children:c.A`
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
            `})]})]})]}),(0,l.jsxs)(s.A,{value:"in-cloud/manifests",children:[(0,l.jsx)(r.h2,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-bcloud-manifests",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e bcloud manifests"}),(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.code,{children:"VictoriaMetrics Operator"})," \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u043e\u0431\u044b\u0447\u043d\u043e\u0435 Kubernetes-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u043e\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Helm Chart."]}),(0,l.jsxs)("div",{className:"parent-div",style:{minHeight:"420px"},children:[(0,l.jsxs)("div",{className:"child-block",children:[(0,l.jsx)("h4",{className:"center",children:"Enivironments"}),(0,l.jsx)(o.A,{language:"bash",children:c.A`
              export VM_OPERATOR_VERSION="${u.M.kubeStateMetrics.value}"
            `})]}),(0,l.jsxs)("div",{className:"child-block",children:[(0,l.jsx)("h4",{className:"center",children:"Values"}),(0,l.jsx)(o.A,{language:"yaml",children:c.A`
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
            `})]})]}),(0,l.jsx)(r.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u0435\u043c \u0432\u0430\u0448\u0435\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430:"}),(0,l.jsx)(o.A,{language:"bash",children:c.A`helmfile -e $\{VM_OPERATOR_VERSION} -l bcloud-collections=victoria-metrics-operator bcloud-monitoring-stack=client | kubectl apply -f - `})]})]})]})}function b(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(v,{...e})}):v(e)}},86680:(e,r,t)=>{t.d(r,{M:()=>a});const a={victoriaMetricsOperator:{value:"0.37.0"},victoriaMetricsStack:{value:"0.28.2"},nodeExporter:{value:"4.27.0"},blackboxExporter:{value:"9.0.0"},processExporter:{value:"0.5.0"},kubeStateMetrics:{value:"5.16.4"},metricsServer:{value:"3.12.1"}}},87464:(e,r,t)=>{t.d(r,{A:()=>s});t(96540);var a=t(34164);const l={tabItem:"tabItem_Ymn6"};var i=t(74848);function s(e){let{children:r,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,s),hidden:t,children:r})}}}]);