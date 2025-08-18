"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65477],{9675:(e,s,r)=>{r.d(s,{k:()=>t});const t={data:{value:r(60513).A`
      ---
      apiVersion: audit.k8s.io/v1
      kind: Policy

      # Общие правила
      # Исключаем раннюю стадию аудита "RequestReceived", чтобы снизить объем логов и дублирование
      # Эта настройка применяется глобально, но в некоторых правилах переопределяется локально
      # omitStages может быть указано также внутри отдельных правил
      rules:

        # Отключаем логирование "watch"-запросов от kube-proxy к endpoint'ам и сервисам
        - level: None
          users: ["system:kube-proxy"]
          verbs: ["watch"]
          resources:
            - group: ""  # Core API group
              resources: ["endpoints", "services", "services/status"]

        # Отключаем логирование чтения configmap в kube-system от "system:unsecured"
        - level: None
          users: ["system:unsecured"]
          namespaces: ["kube-system"]
          verbs: ["get"]
          resources:
            - group: ""
              resources: ["configmaps"]

        # Отключаем логирование чтения узлов legacy-пользователем "kubelet"
        - level: None
          users: ["kubelet"]
          verbs: ["get"]
          resources:
            - group: ""
              resources: ["nodes", "nodes/status"]

        # Отключаем логирование чтения узлов группой "system:nodes"
        - level: None
          userGroups: ["system:nodes"]
          verbs: ["get"]
          resources:
            - group: ""
              resources: ["nodes", "nodes/status"]

        # Отключаем логирование get/update endpoint'ов в kube-system от контроллеров
        - level: None
          users:
            - system:kube-controller-manager
            - system:kube-scheduler
            - system:serviceaccount:kube-system:endpoint-controller
          verbs: ["get", "update"]
          namespaces: ["kube-system"]
          resources:
            - group: ""
              resources: ["endpoints"]

        # Отключаем логирование операций с namespace'ами от системного пользователя apiserver
        - level: None
          users: ["system:apiserver"]
          verbs: ["get"]
          resources:
            - group: ""
              resources: ["namespaces", "namespaces/status", "namespaces/finalize"]

        # Отключаем логирование операций с configmap и endpoint в kube-system от cluster-autoscaler
        - level: None
          users: ["cluster-autoscaler"]
          verbs: ["get", "update"]
          namespaces: ["kube-system"]
          resources:
            - group: ""
              resources: ["configmaps", "endpoints"]

        # Отключаем логирование запросов к метрикам от kube-controller-manager
        - level: None
          users: ["system:kube-controller-manager"]
          verbs: ["get", "list"]
          resources:
            - group: "metrics.k8s.io"

        # Отключаем логирование системных non-resource URL (здоровье, версия, swagger и т.п.)
        - level: None
          nonResourceURLs:
            - /healthz*
            - /version
            - /swagger*

        # Отключаем логирование событий (events) — они часто шумные и не критичны
        - level: None
          resources:
            - group: ""
              resources: ["events"]

        # Логирование обновлений статуса узлов и подов от kubelet и node-problem-detector
        - level: Request
          users:
            - kubelet
            - system:node-problem-detector
            - system:serviceaccount:kube-system:node-problem-detector
          verbs:
            - update
            - patch
          resources:
            - group: ""
              resources:
                - nodes/status
                - pods/status
          omitStages:
            - "RequestReceived"

        # То же самое для всех участников группы system:nodes
        - level: Request
          userGroups: ["system:nodes"]
          verbs:
            - update
            - patch
          resources:
            - group: ""
              resources:
                - nodes/status
                - pods/status
          omitStages:
            - "RequestReceived"

        # Логирование массового удаления (deletecollection) от namespace-controller
        - level: Request
          users: ["system:serviceaccount:kube-system:namespace-controller"]
          verbs: ["deletecollection"]
          omitStages:
            - "RequestReceived"

        # Логирование метаданных для чувствительных ресурсов: секретов, токенов, токен-рецензий
        - level: Metadata
          resources:
            - group: ""
              resources: ["secrets", "configmaps", "serviceaccounts/token"]
            - group: authentication.k8s.io
              resources: ["tokenreviews"]
          omitStages:
            - "RequestReceived"

        # Логирование всех безопасных операций чтения (get/list/watch) по всем известным группам
        - level: Request
          verbs: ["get", "list", "watch"]
          resources:
            - group: ""  # Core
            - group: "admissionregistration.k8s.io"
            - group: "apiextensions.k8s.io"
            - group: "apiregistration.k8s.io"
            - group: "apps"
            - group: "authentication.k8s.io"
            - group: "authorization.k8s.io"
            - group: "autoscaling"
            - group: "batch"
            - group: "certificates.k8s.io"
            - group: "extensions"
            - group: "metrics.k8s.io"
            - group: "networking.k8s.io"
            - group: "policy"
            - group: "rbac.authorization.k8s.io"
            - group: "scheduling.k8s.io"
            - group: "settings.k8s.io"
            - group: "storage.k8s.io"
          omitStages:
            - "RequestReceived"

        # Логирование всех операций, включая тело запроса и ответа (RequestResponse)
        - level: RequestResponse
          resources:
            - group: ""  # Core
            - group: "admissionregistration.k8s.io"
            - group: "apiextensions.k8s.io"
            - group: "apiregistration.k8s.io"
            - group: "apps"
            - group: "authentication.k8s.io"
            - group: "authorization.k8s.io"
            - group: "autoscaling"
            - group: "batch"
            - group: "certificates.k8s.io"
            - group: "extensions"
            - group: "metrics.k8s.io"
            - group: "networking.k8s.io"
            - group: "policy"
            - group: "rbac.authorization.k8s.io"
            - group: "scheduling.k8s.io"
            - group: "settings.k8s.io"
            - group: "storage.k8s.io"
          omitStages:
            - "RequestReceived"

        # Финальный catch-all: логируем метаданные всего остального
        - level: Metadata
          omitStages:
            - "RequestReceived"
    `}}},22365:(e,s,r)=>{r.d(s,{I:()=>t});const t=()=>"/"},41968:(e,s,r)=>{r.d(s,{R:()=>i});var t=r(96540),o=r(68553),n=r(74848);const i=({yamlContent:e,onCloseOtherModals:s})=>{const[r,i]=(0,t.useState)(!1),[a,c]=(0,t.useState)(!1),[l,u]=(0,t.useState)("300px"),d=(0,t.useRef)(null),p=(0,t.useMemo)(()=>e.split("\n").length,[e]);(0,t.useEffect)(()=>{const e=.65*window.innerHeight,s=20*p,r=Math.min(Math.max(s,200),e);u(`${r}px`)},[p]),(0,t.useEffect)(()=>{const e=e=>{"Escape"===e.key&&r&&i(!1)};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[r]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{onClick:()=>{s?.(),i(!0),setTimeout(()=>d.current?.focus(),0)},style:{whiteSpace:"nowrap",padding:"0.35rem 0.75rem",backgroundColor:"#2b2b2b",color:"#fff",border:"1px solid #555",borderRadius:"6px",fontSize:"0.85rem",fontWeight:500,cursor:"pointer"},children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u0440"}),r&&(0,n.jsx)("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:1e3,display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsx)("dialog",{ref:d,open:!0,style:{border:"none",background:"#1e1e1e",borderRadius:"8px",width:"90vw",maxWidth:"960px",maxHeight:"90vh",overflow:"auto",boxShadow:"0 8px 24px rgba(0, 0, 0, 0.5)"},children:(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,n.jsx)("div",{style:{padding:"1rem",fontWeight:"bold",color:"#ccc"},children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438"}),(0,n.jsx)("div",{style:{padding:"0 1rem 1rem",overflow:"auto",maxHeight:"70vh"},children:(0,n.jsx)(o.Ay,{height:l,defaultLanguage:"yaml",defaultValue:e,theme:"vs-dark",options:{readOnly:!0,minimap:{enabled:!1},scrollBeyondLastLine:!1,fontFamily:'"Fira Code", "Courier New", monospace',fontSize:16}})}),(0,n.jsxs)("div",{style:{textAlign:"right",padding:"0.5rem 1rem"},children:[(0,n.jsx)("button",{onClick:()=>{navigator.clipboard.writeText(e).then(()=>{c(!0),setTimeout(()=>c(!1),2e3)})},style:{marginRight:"0.5rem",padding:"0.4rem 0.8rem",background:"#007acc",color:"#fff",border:"none",borderRadius:"4px",fontSize:"0.85rem",cursor:"pointer"},children:"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),(0,n.jsx)("button",{onClick:()=>i(!1),style:{padding:"0.4rem 0.8rem",background:"#444",color:"#fff",border:"none",borderRadius:"4px",fontSize:"0.85rem",cursor:"pointer"},children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})]})]})})}),a&&(0,n.jsx)("div",{style:{position:"fixed",bottom:"20px",right:"20px",backgroundColor:"#007acc",color:"#fff",padding:"0.5rem 1rem",borderRadius:"4px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",fontSize:"0.85rem",zIndex:1100},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043e \u0432 \u0431\u0443\u0444\u0435\u0440 \u043e\u0431\u043c\u0435\u043d\u0430"})]})}},63069:e=>{e.exports=JSON.parse('{"permalink":"/blog/kubernetes-pods-exec","source":"@site/blog/kubernetes-exec.mdx","title":"Kubernetes pods/exec","description":"\u041f\u0435\u0440\u0435\u0445\u043e\u0434 pods/exec \u043d\u0430 WebSocket (GET \u0432\u043c\u0435\u0441\u0442\u043e POST), \u0432\u043b\u0438\u044f\u043d\u0438\u0435 \u043d\u0430 RBAC \u0438 \u0440\u0438\u0441\u043a\u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0439 \u0432 Kubernetes.","date":"2025-08-18T00:00:00.000Z","tags":[{"inline":true,"label":"Kubernetes","permalink":"/blog/tags/kubernetes"},{"inline":true,"label":"RBAC","permalink":"/blog/tags/rbac"},{"inline":true,"label":"Security","permalink":"/blog/tags/security"},{"inline":true,"label":"pods/exec","permalink":"/blog/tags/pods-exec"}],"readingTime":6.02,"hasTruncateMarker":true,"authors":[{"name":"\u041f\u0443\u0442\u0438\u043b\u0438\u043d \u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u041b\u044c\u0432\u043e\u0432\u0438\u0447","title":"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u043e\u0440","url":"https://t.me/bezumniy_kot_work","image_url":"https://avatars.githubusercontent.com/u/107264732?v=4","socials":{"github":"https://github.com/FR-Solution"},"imageURL":"https://avatars.githubusercontent.com/u/107264732?v=4","key":null,"page":null}],"frontMatter":{"title":"Kubernetes pods/exec","description":"\u041f\u0435\u0440\u0435\u0445\u043e\u0434 pods/exec \u043d\u0430 WebSocket (GET \u0432\u043c\u0435\u0441\u0442\u043e POST), \u0432\u043b\u0438\u044f\u043d\u0438\u0435 \u043d\u0430 RBAC \u0438 \u0440\u0438\u0441\u043a\u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0439 \u0432 Kubernetes.","date":"2025-08-18T00:00:00.000Z","slug":"kubernetes-pods-exec","authors":[{"name":"\u041f\u0443\u0442\u0438\u043b\u0438\u043d \u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u041b\u044c\u0432\u043e\u0432\u0438\u0447","title":"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u043e\u0440","url":"https://t.me/bezumniy_kot_work","image_url":"https://avatars.githubusercontent.com/u/107264732?v=4","socials":{"github":"FR-Solution"},"imageURL":"https://avatars.githubusercontent.com/u/107264732?v=4"}],"toc_min_heading_level":2,"toc_max_heading_level":2,"tags":["Kubernetes","RBAC","Security","pods/exec"]},"unlisted":false,"nextItem":{"title":"Kubernetes Audit","permalink":"/blog/kubernetes-audit"}}')},65124:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>t,toc:()=>p});var t=r(63069),o=r(74848),n=r(28453),i=(r(76331),r(9792),r(68747)),a=r(60513),c=(r(41968),r(22365));r(9675);const l={title:"Kubernetes pods/exec",description:"\u041f\u0435\u0440\u0435\u0445\u043e\u0434 pods/exec \u043d\u0430 WebSocket (GET \u0432\u043c\u0435\u0441\u0442\u043e POST), \u0432\u043b\u0438\u044f\u043d\u0438\u0435 \u043d\u0430 RBAC \u0438 \u0440\u0438\u0441\u043a\u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0439 \u0432 Kubernetes.",date:new Date("2025-08-18T00:00:00.000Z"),slug:"kubernetes-pods-exec",authors:[{name:"\u041f\u0443\u0442\u0438\u043b\u0438\u043d \u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u041b\u044c\u0432\u043e\u0432\u0438\u0447",title:"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u043e\u0440",url:"https://t.me/bezumniy_kot_work",image_url:"https://avatars.githubusercontent.com/u/107264732?v=4",socials:{github:"FR-Solution"}}],toc_min_heading_level:2,toc_max_heading_level:2,tags:["Kubernetes","RBAC","Security","pods/exec"]},u=void 0,d={authorsImageUrls:[void 0]},p=[{value:"\u041e\u0433\u043b\u0430\u0432\u043b\u0435\u043d\u0438\u0435",id:"\u043e\u0433\u043b\u0430\u0432\u043b\u0435\u043d\u0438\u0435",level:2},{value:"\u0427\u0442\u043e \u0438\u0437\u043c\u0435\u043d\u0438\u043b\u043e\u0441\u044c",id:"\u0447\u0442\u043e-\u0438\u0437\u043c\u0435\u043d\u0438\u043b\u043e\u0441\u044c",level:2},{value:"\u0412\u043b\u0438\u044f\u043d\u0438\u0435 \u043d\u0430 kubectl \u0438 RBAC",id:"\u0432\u043b\u0438\u044f\u043d\u0438\u0435-\u043d\u0430-kubectl-\u0438-rbac",level:2},{value:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 Minikube",id:"\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430-\u043d\u0430-minikube",level:2},{value:"\u0414\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0438\u044f (kubectl 1.33.3 vs 1.29.0)",id:"\u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0438\u044f-kubectl-1333-vs-1290",level:2},{value:"\u0418\u0442\u043e\u0433\u0438 \u0438 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438",id:"\u0438\u0442\u043e\u0433\u0438-\u0438-\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438",level:2}];function x(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components},{Details:r}=s;return r||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h3",{children:(0,o.jsxs)(s.p,{children:["Kubernetes pods/exec ",(0,o.jsx)("span",{style:{color:"#1cc5ac"},children:"#"})]})}),"\n",(0,o.jsx)("p",{style:{fontStyle:"italic",fontWeight:600},children:(0,o.jsx)(s.p,{children:"\u0420\u0430\u0437\u0431\u0438\u0440\u0430\u0435\u043c \u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u043d\u0430 WebSocket \u0438 \u0435\u0433\u043e \u0432\u043b\u0438\u044f\u043d\u0438\u0435 \u043d\u0430 RBAC."})}),"\n",(0,o.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"space-between",gap:"30px",marginTop:"1.5rem"},children:[(0,o.jsx)("div",{style:{flex:"1 1 58%",minWidth:"280px",maxWidth:"620px"},children:(0,o.jsx)("p",{children:(0,o.jsxs)(s.p,{children:[(0,o.jsx)("code",{children:"pods/exec"})," \u2014 \u0443\u0434\u043e\u0431\u043d\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0432\u043d\u0443\u0442\u0440\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u0434\u043b\u044f \u043e\u0442\u043b\u0430\u0434\u043a\u0438 \u0438 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f.\n\u0412 \u043d\u043e\u0432\u044b\u0445 \u0432\u0435\u0440\u0441\u0438\u044f\u0445 Kubernetes \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u0451\u043b \u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u0441\u043e \u0441\u0442\u0430\u0440\u043e\u0433\u043e SPDY \u043d\u0430 WebSocket, \u0447\u0442\u043e \u043c\u0435\u043d\u044f\u0435\u0442 \u0441\u0435\u0442\u0435\u0432\u043e\u0435 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0438 \u0437\u0430\u0442\u0440\u0430\u0433\u0438\u0432\u0430\u0435\u0442 \u043c\u043e\u0434\u0435\u043b\u044c \u043f\u0440\u0430\u0432."]})})}),(0,o.jsx)("div",{style:{flex:"1 1 35%",minWidth:"200px",textAlign:"center",marginTop:"-7rem"},children:(0,o.jsx)("img",{src:`${(0,c.I)()}img/pods-exec/promo.png`,alt:"pods/exec audit",style:{width:"100%",maxWidth:"330px",filter:"drop-shadow(0 0 30px rgba(196, 202, 255, 0.2))",transition:"transform 0.3s ease-in-out"}})})]}),"\n","\n",(0,o.jsx)(s.h2,{id:"\u043e\u0433\u043b\u0430\u0432\u043b\u0435\u043d\u0438\u0435",children:"\u041e\u0433\u043b\u0430\u0432\u043b\u0435\u043d\u0438\u0435"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"#%D1%87%D1%82%D0%BE-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B8%D0%BB%D0%BE%D1%81%D1%8C",children:"\u0427\u0442\u043e \u0438\u0437\u043c\u0435\u043d\u0438\u043b\u043e\u0441\u044c"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"#%D0%B2%D0%BB%D0%B8%D1%8F%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-kubectl-%D0%B8-rbac",children:"\u0412\u043b\u0438\u044f\u043d\u0438\u0435 \u043d\u0430 kubectl \u0438 RBAC"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"#%D0%B4%D0%B5%D0%BC%D0%BE%D0%BD%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-kubectl-1333-vs-1290",children:"\u0414\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0438\u044f (kubectl 1.33.3 vs 1.29.0)"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"#%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0-%D0%BD%D0%B0-minikube",children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 Minikube"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"#%D0%B8%D1%82%D0%BE%D0%B3%D0%B8-%D0%B8-%D1%80%D0%B5%D0%BA%D0%BE%D0%BC%D0%B5%D0%BD%D0%B4%D0%B0%D1%86%D0%B8%D0%B8",children:"\u0418\u0442\u043e\u0433\u0438 \u0438 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"})}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"\u0447\u0442\u043e-\u0438\u0437\u043c\u0435\u043d\u0438\u043b\u043e\u0441\u044c",children:"\u0427\u0442\u043e \u0438\u0437\u043c\u0435\u043d\u0438\u043b\u043e\u0441\u044c"}),"\n",(0,o.jsxs)(s.p,{children:["\u041f\u0435\u0440\u0435\u0445\u043e\u0434 \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0445 \u043f\u043e\u0442\u043e\u043a\u043e\u0432 (",(0,o.jsx)(s.code,{children:"kubectl exec"}),", ",(0,o.jsx)(s.code,{children:"attach"}),", ",(0,o.jsx)(s.code,{children:"port-forward"})," \u0438 \u0434\u0440.) \u043d\u0430 WebSocket: \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f WebSocket \u0432\u043c\u0435\u0441\u0442\u043e SPDY.\n\u042d\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0435\u0435 \u0438 \u0432\u043b\u0438\u044f\u0435\u0442 \u043d\u0430 \u0442\u0440\u0430\u043a\u0442\u043e\u0432\u043a\u0443 RBAC \u0434\u043b\u044f \u043f\u043e\u0434\u0440\u0435\u0441\u0443\u0440\u0441\u0430 ",(0,o.jsx)(s.code,{children:"pods/exec"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a: ",(0,o.jsx)(s.a,{href:"https://kubernetes.io/blog/2024/08/20/websockets-transition/",children:"Streaming Transitions from SPDY to WebSockets"})]}),"\n",(0,o.jsx)(s.h2,{id:"\u0432\u043b\u0438\u044f\u043d\u0438\u0435-\u043d\u0430-kubectl-\u0438-rbac",children:"\u0412\u043b\u0438\u044f\u043d\u0438\u0435 \u043d\u0430 kubectl \u0438 RBAC"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["\u0420\u0430\u043d\u0435\u0435 ",(0,o.jsx)(s.code,{children:"kubectl exec"})," \u0447\u0430\u0449\u0435 \u0448\u0451\u043b \u0447\u0435\u0440\u0435\u0437 ",(0,o.jsx)(s.strong,{children:"POST"}),"; \u0442\u0435\u043f\u0435\u0440\u044c \u2014 \u0447\u0435\u0440\u0435\u0437 ",(0,o.jsx)(s.strong,{children:"GET"})," \u0441 \u0430\u043f\u0433\u0440\u0435\u0439\u0434\u043e\u043c \u0434\u043e WebSocket."]}),"\n",(0,o.jsxs)(s.li,{children:["\u0414\u043b\u044f ",(0,o.jsx)(s.code,{children:"pods/exec"})," \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e ",(0,o.jsx)(s.strong,{children:(0,o.jsx)(s.code,{children:"get"})})," (\u0432 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0432\u0435\u0440\u0441\u0438\u044f\u0445) \u043b\u0438\u0431\u043e ",(0,o.jsx)(s.strong,{children:(0,o.jsx)(s.code,{children:"create"})})," (\u0432 \u0441\u0442\u0430\u0440\u044b\u0445), \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043a\u043b\u0438\u0435\u043d\u0442\u0430/\u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430."]}),"\n",(0,o.jsxs)(s.li,{children:["\u042d\u0442\u043e \u043c\u0435\u043d\u044f\u0435\u0442 \u043e\u0446\u0435\u043d\u043a\u0443 \xab\u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438\xbb \u043f\u0440\u0430\u0432\u0438\u043b \u0432\u0440\u043e\u0434\u0435 \xab",(0,o.jsx)(s.code,{children:'verbs: ["get"]'})," \u043d\u0430 ",(0,o.jsx)(s.code,{children:'resources: ["*"]'})," \u0432 ",(0,o.jsx)(s.code,{children:'apiGroups: [""]'})," \xbb \u2014 \u0442\u0430\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u043c\u043e\u0436\u0435\u0442 \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0438 ",(0,o.jsx)(s.code,{children:"pods/exec"}),"."]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430-\u043d\u0430-minikube",children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 Minikube"}),"\n",(0,o.jsx)("h3",{children:"\u041a\u043b\u0430\u0441\u0442\u0435\u0440 \u0438 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u044b"}),"\n",(0,o.jsx)(i.A,{language:"bash",children:a.A`
  minikube -p 13201 start --kubernetes-version=1.32.1 --ssh-port=13201
`}),"\n",(0,o.jsx)(i.A,{language:"bash",children:a.A`
  kubectl get nodes
`}),"\n",(0,o.jsx)(i.A,{language:"bash",children:a.A`
  NAME    STATUS   ROLES           AGE   VERSION
  13201   Ready    control-plane   60s   v1.32.1
`}),"\n",(0,o.jsx)("h3",{children:"cluster-admin \u0438 anonymous"}),"\n",(0,o.jsx)(i.A,{language:"bash",children:a.A`
  export KUBECONFIG=cluster-admin
  minikube -p 13201 update-context
`}),"\n",(0,o.jsx)(i.A,{language:"bash",children:a.A`
  export KUBECONFIG=anonymous-view
  minikube -p 13201 update-context
  sed -i '/^[[:space:]]*users:/,$d' anonymous-view
`}),"\n",(0,o.jsx)("h3",{children:"Pod \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 exec"}),"\n",(0,o.jsx)(i.A,{language:"bash",children:a.A`
  kubectl \\
    --kubeconfig=cluster-admin \\
    apply -f - <<EOF
  ---
  apiVersion: v1
  kind: Pod
  metadata:
    name: nginx
  spec:
    containers:
    - name: nginx
      image: nginx:1.14.2
      ports:
      - containerPort: 80
  EOF
`}),"\n",(0,o.jsx)(i.A,{language:"bash",children:a.A`
  kubectl --kubeconfig=cluster-admin get po
`}),"\n",(0,o.jsx)(i.A,{language:"bash",children:a.A`
  NAME    READY   STATUS    RESTARTS   AGE
  nginx   1/1     Running   0          23s
`}),"\n",(0,o.jsx)("h3",{children:"exec: cluster-admin vs anonymous"}),"\n",(0,o.jsx)(i.A,{language:"bash",children:a.A`
  kubectl --kubeconfig=cluster-admin exec -it nginx -- sh
`}),"\n",(0,o.jsx)(i.A,{language:"bash",children:a.A`
  # ls -al
  total 76
  drwxr-xr-x   1 root root 4096 Aug 18 15:09 .
  drwxr-xr-x   1 root root 4096 Aug 18 15:09 ..
`}),"\n",(0,o.jsx)(i.A,{language:"bash",children:a.A`
  kubectl --kubeconfig=anonymous-view exec -it nginx -- sh
`}),"\n",(0,o.jsx)(i.A,{language:"bash",children:a.A`
  Error from server (Forbidden): pods "nginx" is forbidden: User "system:anonymous" cannot get resource "pods" in API group "" in the namespace "default"
`}),"\n",(0,o.jsxs)("h3",{children:["\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0434\u043e\u0441\u0442\u0443\u043f \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 ",(0,o.jsx)("code",{children:"get"})]}),"\n",(0,o.jsx)(s.admonition,{type:"note",children:(0,o.jsx)(s.p,{children:"\u041f\u0440\u043e\u0441\u044c\u0431\u0430 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u0447\u0442\u043e \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 pods/exec \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0434\u043e\u0441\u0442\u0443\u043f \u043a pods \u0438\u043d\u0430\u0447\u0435 exec \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c."})}),"\n",(0,o.jsx)(i.A,{language:"bash",children:a.A`
  kubectl \\
    --kubeconfig=cluster-admin \\
    apply -f - <<EOF
  ---
  apiVersion: rbac.authorization.k8s.io/v1
  kind: ClusterRole
  metadata:
    name: anonymous-view
  rules:
    - apiGroups: [""]
      resources:
        - pods
        - pods/exec
      verbs: ["get"]
  ---
  apiVersion: rbac.authorization.k8s.io/v1
  kind: ClusterRoleBinding
  metadata:
    name: anonymous-view
  roleRef:
    apiGroup: rbac.authorization.k8s.io
    kind: ClusterRole
    name: anonymous-view
  subjects:
    - kind: User
      name: system:anonymous
      apiGroup: rbac.authorization.k8s.io
  EOF
`}),"\n",(0,o.jsx)(i.A,{language:"bash",children:a.A`
  clusterrole.rbac.authorization.k8s.io/anonymous-view created
  clusterrolebinding.rbac.authorization.k8s.io/anonymous-view created
`}),"\n",(0,o.jsx)(i.A,{language:"bash",children:a.A`
  kubectl --kubeconfig=anonymous-view exec -it nginx -- sh
`}),"\n",(0,o.jsx)(i.A,{language:"bash",children:a.A`
  # ls -la
  total 76
  drwxr-xr-x   1 root root 4096 Aug 18 15:09 .
  drwxr-xr-x   1 root root 4096 Aug 18 15:09 ..
  -rwxr-xr-x   1 root root    0 Aug 18 15:09 .dockerenv
  drwxr-xr-x   2 root root 4096 Mar 26  2019 bin
  drwxr-xr-x   2 root root 4096 Feb  3  2019 boot
  drwxr-xr-x   5 root root  360 Aug 18 15:09 dev
`}),"\n",(0,o.jsx)(s.h2,{id:"\u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0438\u044f-kubectl-1333-vs-1290",children:"\u0414\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0438\u044f (kubectl 1.33.3 vs 1.29.0)"}),"\n",(0,o.jsxs)(r,{open:!0,children:[(0,o.jsx)("summary",{children:(0,o.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,o.jsx)("p",{style:{marginBottom:0},children:"kubectl v1.33.3"})})}),(0,o.jsx)(i.A,{language:"bash",children:a.A`
    kubectl version
    Client Version: v1.33.3
  `}),(0,o.jsx)(i.A,{language:"bash",children:a.A`
    kubectl exec -it nginx -- sh
  `}),(0,o.jsx)(i.A,{language:"bash",children:a.A`
    ******
    verb="GET" url="/api/v1/namespaces/default/pods/incloud-web-incloud-web-chart-d99877d74-27tcd/exec?command=sh&container=nginx&stdin=true&stdout=true&tty=true"
    ******
  `}),(0,o.jsx)(i.A,{language:"bash",children:a.A`
    / $ ls -al
    total 76
    drwxr-xr-x    1 root     root          4096 Aug 16 20:43 .
    drwxr-xr-x    1 root     root          4096 Aug 16 20:43 ..
    drwxr-xr-x    2 root     root          4096 Jul 15 10:42 bin
    drwxr-xr-x    5 root     root           360 Aug 16 20:43 dev
  `})]}),"\n",(0,o.jsxs)(r,{open:!0,children:[(0,o.jsx)("summary",{children:(0,o.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,o.jsx)("p",{style:{marginBottom:0},children:"kubectl v1.29.0"})})}),(0,o.jsx)(i.A,{language:"bash",children:a.A`
    kubectl version
    Client Version: v1.29.0
  `}),(0,o.jsx)(i.A,{language:"bash",children:a.A`
    kubectl exec -it nginx -- sh
  `}),(0,o.jsx)(i.A,{language:"bash",children:a.A`
    ******
    POST https://api/v1/namespaces/default/pods/incloud-web-incloud-web-chart-d99877d74-27tcd/exec?command=sh&container=nginx&stdin=true&stdout=true&tty=true
    ******
  `}),(0,o.jsx)(i.A,{language:"bash",children:a.A`
    / $ ls -al
    total 76
    drwxr-xr-x    1 root     root          4096 Aug 16 20:43 .
    drwxr-xr-x    1 root     root          4096 Aug 16 20:43 ..
    drwxr-xr-x    2 root     root          4096 Jul 15 10:42 bin
    drwxr-xr-x    5 root     root           360 Aug 16 20:43 dev
  `})]}),"\n",(0,o.jsx)("h3",{children:"Kuberentes Audit"}),"\n",(0,o.jsx)(i.A,{language:"bash",children:a.A`
  {
    "annotations": {
      "authorization.k8s.io/decision": "allow",
      "authorization.k8s.io/reason": "RBAC: allowed by ClusterRoleBinding \"anonymous-view-all\" of ClusterRole \"anonymous-view\" to User \"system:anonymous\""
    },
    "apiVersion": "audit.k8s.io/v1",
    "auditID": "142e967e-4958-4a77-b691-2f71e26ba6ec",
    "kind": "Event",
    "level": "Request",
    "objectRef": {
      "apiVersion": "v1",
      "name": "nginx",
      "namespace": "default",
      "resource": "pods",
      "subresource": "exec"
    },
    "requestReceivedTimestamp": "2025-08-15T16:46:50.233954Z",
    "requestURI": "/api/v1/namespaces/default/pods/nginx/exec?container=liveness-probe&stdin=true&stdout=true&tty=true&command=sh&command=-c&command=stty%20cols%20999%3B%20exec%20%2Fbin%2Fsh",
    "responseStatus": {
      "code": 101,
      "metadata": {}
    },
    "sourceIPs": [
      "10.0.0.33"
    ],
    "stage": "ResponseComplete",
    "stageTimestamp": "2025-08-15T16:46:50.296700Z",
    "user": {
      "groups": [
        "system:unauthenticated"
      ],
      "username": "system:anonymous"
    },
    "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
    "verb": "get"
  }
`}),"\n",(0,o.jsx)(s.admonition,{title:"\u041e\u043f\u0430\u0441\u043d\u044b\u0439 \u043f\u0430\u0442\u0442\u0435\u0440\u043d",type:"danger",children:(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:'verbs: ["get"]'})," \u043d\u0430 ",(0,o.jsx)(s.code,{children:'resources: ["*"]'})," \u0432 ",(0,o.jsx)(s.code,{children:'apiGroups: [""]'})," \u043c\u043e\u0436\u0435\u0442 \u0444\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c ",(0,o.jsx)(s.code,{children:"pods/exec"}),". \u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0439\u0442\u0435 \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0438 \u0438 wildcard-\u043f\u0440\u0430\u0432\u0438\u043b\u0430."]})}),"\n",(0,o.jsx)(s.h2,{id:"\u0438\u0442\u043e\u0433\u0438-\u0438-\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438",children:"\u0418\u0442\u043e\u0433\u0438 \u0438 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"pods/exec"})," \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435\u043b\u044c\u0437\u044f \u043e\u0446\u0435\u043d\u0438\u0432\u0430\u0442\u044c \u043a\u0430\u043a \xab\u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u0439\xbb \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u043e\u0431\u0449\u0435\u0433\u043e ",(0,o.jsx)(s.code,{children:"get"})," \u043d\u0430 \u0432\u0441\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b."]}),"\n",(0,o.jsxs)(s.li,{children:["\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0439\u0442\u0435 \u0440\u043e\u043b\u0438 \u0438 \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0438: \u043d\u0430\u043b\u0438\u0447\u0438\u0435 ",(0,o.jsx)(s.code,{children:"pods/exec"})," \u043f\u043e\u0434 ",(0,o.jsx)(s.code,{children:"get"})," \u0442\u0435\u043f\u0435\u0440\u044c \u043a\u0440\u0438\u0442\u0438\u0447\u043d\u043e."]}),"\n",(0,o.jsxs)(s.li,{children:["\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u043f\u0440\u0438\u043d\u0446\u0438\u043f \u043d\u0430\u0438\u043c\u0435\u043d\u044c\u0448\u0438\u0445 \u043f\u0440\u0430\u0432: \u043e\u0442\u0434\u0435\u043b\u044f\u0439\u0442\u0435 ",(0,o.jsx)(s.code,{children:"pods"})," (\u0447\u0442\u0435\u043d\u0438\u0435) \u0438 ",(0,o.jsx)(s.code,{children:"pods/exec"})," (\u0441\u0442\u0440\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u043c\u044b\u0439 \u0434\u043e\u0441\u0442\u0443\u043f)."]}),"\n",(0,o.jsxs)(s.li,{children:["\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0430\u0443\u0434\u0438\u0442 \u0441\u043e\u0431\u044b\u0442\u0438\u0439 ",(0,o.jsx)(s.code,{children:"pods/exec"})," \u0438 \u0430\u043b\u0435\u0440\u0442\u044b (\u043f\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u2014 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0432\u0430\u0439\u0442\u0435 ",(0,o.jsx)(s.code,{children:"kubectl"}),"-\u0432\u0435\u0440\u0441\u0438\u0438, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u0432 \u043f\u0435\u0440\u0438\u043c\u0435\u0442\u0440\u0435)."]}),"\n"]})]})}function g(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(x,{...e})}):x(e)}}}]);