"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[24918],{9675:(e,s,t)=>{t.d(s,{k:()=>o});const o={data:{value:t(60513).A`
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
    `}}},22365:(e,s,t)=>{t.d(s,{I:()=>o});const o=()=>"/"},41968:(e,s,t)=>{t.d(s,{R:()=>i});var o=t(96540),r=t(68553),n=t(74848);const i=({yamlContent:e,onCloseOtherModals:s})=>{const[t,i]=(0,o.useState)(!1),[a,u]=(0,o.useState)(!1),[c,l]=(0,o.useState)("300px"),p=(0,o.useRef)(null),d=(0,o.useMemo)(()=>e.split("\n").length,[e]);(0,o.useEffect)(()=>{const e=.65*window.innerHeight,s=20*d,t=Math.min(Math.max(s,200),e);l(`${t}px`)},[d]),(0,o.useEffect)(()=>{const e=e=>{"Escape"===e.key&&t&&i(!1)};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[t]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{onClick:()=>{s?.(),i(!0),setTimeout(()=>p.current?.focus(),0)},style:{whiteSpace:"nowrap",padding:"0.35rem 0.75rem",backgroundColor:"#2b2b2b",color:"#fff",border:"1px solid #555",borderRadius:"6px",fontSize:"0.85rem",fontWeight:500,cursor:"pointer"},children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u0440"}),t&&(0,n.jsx)("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:1e3,display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsx)("dialog",{ref:p,open:!0,style:{border:"none",background:"#1e1e1e",borderRadius:"8px",width:"90vw",maxWidth:"960px",maxHeight:"90vh",overflow:"auto",boxShadow:"0 8px 24px rgba(0, 0, 0, 0.5)"},children:(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,n.jsx)("div",{style:{padding:"1rem",fontWeight:"bold",color:"#ccc"},children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438"}),(0,n.jsx)("div",{style:{padding:"0 1rem 1rem",overflow:"auto",maxHeight:"70vh"},children:(0,n.jsx)(r.Ay,{height:c,defaultLanguage:"yaml",defaultValue:e,theme:"vs-dark",options:{readOnly:!0,minimap:{enabled:!1},scrollBeyondLastLine:!1,fontFamily:'"Fira Code", "Courier New", monospace',fontSize:16}})}),(0,n.jsxs)("div",{style:{textAlign:"right",padding:"0.5rem 1rem"},children:[(0,n.jsx)("button",{onClick:()=>{navigator.clipboard.writeText(e).then(()=>{u(!0),setTimeout(()=>u(!1),2e3)})},style:{marginRight:"0.5rem",padding:"0.4rem 0.8rem",background:"#007acc",color:"#fff",border:"none",borderRadius:"4px",fontSize:"0.85rem",cursor:"pointer"},children:"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),(0,n.jsx)("button",{onClick:()=>i(!1),style:{padding:"0.4rem 0.8rem",background:"#444",color:"#fff",border:"none",borderRadius:"4px",fontSize:"0.85rem",cursor:"pointer"},children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})]})]})})}),a&&(0,n.jsx)("div",{style:{position:"fixed",bottom:"20px",right:"20px",backgroundColor:"#007acc",color:"#fff",padding:"0.5rem 1rem",borderRadius:"4px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",fontSize:"0.85rem",zIndex:1100},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043e \u0432 \u0431\u0443\u0444\u0435\u0440 \u043e\u0431\u043c\u0435\u043d\u0430"})]})}},54944:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var o=t(63069),r=t(74848),n=t(28453),i=(t(76331),t(9792),t(68747),t(41968),t(22365));t(9675);const a={title:"Kubernetes pods/exec",description:"\u041f\u0435\u0440\u0435\u0445\u043e\u0434 pods/exec \u043d\u0430 WebSocket (GET \u0432\u043c\u0435\u0441\u0442\u043e POST), \u0432\u043b\u0438\u044f\u043d\u0438\u0435 \u043d\u0430 RBAC \u0438 \u0440\u0438\u0441\u043a\u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0439 \u0432 Kubernetes.",date:new Date("2025-08-18T00:00:00.000Z"),slug:"kubernetes-pods-exec",authors:[{name:"\u041f\u0443\u0442\u0438\u043b\u0438\u043d \u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u041b\u044c\u0432\u043e\u0432\u0438\u0447",title:"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u043e\u0440",url:"https://t.me/bezumniy_kot_work",image_url:"https://avatars.githubusercontent.com/u/107264732?v=4",socials:{github:"FR-Solution"}}],toc_min_heading_level:2,toc_max_heading_level:2,tags:["Kubernetes","RBAC","Security","pods/exec"]},u=void 0,c={authorsImageUrls:[void 0]},l=[];function p(e){const s={p:"p",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:(0,r.jsxs)(s.p,{children:["Kubernetes pods/exec ",(0,r.jsx)("span",{style:{color:"#1cc5ac"},children:"#"})]})}),"\n",(0,r.jsx)("p",{style:{fontStyle:"italic",fontWeight:600},children:(0,r.jsx)(s.p,{children:"\u0420\u0430\u0437\u0431\u0438\u0440\u0430\u0435\u043c \u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u043d\u0430 WebSocket \u0438 \u0435\u0433\u043e \u0432\u043b\u0438\u044f\u043d\u0438\u0435 \u043d\u0430 RBAC."})}),"\n",(0,r.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"space-between",gap:"30px",marginTop:"1.5rem"},children:[(0,r.jsx)("div",{style:{flex:"1 1 58%",minWidth:"280px",maxWidth:"620px"},children:(0,r.jsx)("p",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"pods/exec"})," \u2014 \u0443\u0434\u043e\u0431\u043d\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0432\u043d\u0443\u0442\u0440\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u0434\u043b\u044f \u043e\u0442\u043b\u0430\u0434\u043a\u0438 \u0438 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f.\n\u0412 \u043d\u043e\u0432\u044b\u0445 \u0432\u0435\u0440\u0441\u0438\u044f\u0445 Kubernetes \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u0451\u043b \u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u0441\u043e \u0441\u0442\u0430\u0440\u043e\u0433\u043e SPDY \u043d\u0430 WebSocket, \u0447\u0442\u043e \u043c\u0435\u043d\u044f\u0435\u0442 \u0441\u0435\u0442\u0435\u0432\u043e\u0435 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0438 \u0437\u0430\u0442\u0440\u0430\u0433\u0438\u0432\u0430\u0435\u0442 \u043c\u043e\u0434\u0435\u043b\u044c \u043f\u0440\u0430\u0432."]})})}),(0,r.jsx)("div",{style:{flex:"1 1 35%",minWidth:"200px",textAlign:"center",marginTop:"-7rem"},children:(0,r.jsx)("img",{src:`${(0,i.I)()}img/pods-exec/promo.png`,alt:"pods/exec audit",style:{width:"100%",maxWidth:"330px",filter:"drop-shadow(0 0 30px rgba(196, 202, 255, 0.2))",transition:"transform 0.3s ease-in-out"}})})]})]})}function d(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},63069:e=>{e.exports=JSON.parse('{"permalink":"/blog/kubernetes-pods-exec","source":"@site/blog/kubernetes-exec.mdx","title":"Kubernetes pods/exec","description":"\u041f\u0435\u0440\u0435\u0445\u043e\u0434 pods/exec \u043d\u0430 WebSocket (GET \u0432\u043c\u0435\u0441\u0442\u043e POST), \u0432\u043b\u0438\u044f\u043d\u0438\u0435 \u043d\u0430 RBAC \u0438 \u0440\u0438\u0441\u043a\u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0439 \u0432 Kubernetes.","date":"2025-08-18T00:00:00.000Z","tags":[{"inline":true,"label":"Kubernetes","permalink":"/blog/tags/kubernetes"},{"inline":true,"label":"RBAC","permalink":"/blog/tags/rbac"},{"inline":true,"label":"Security","permalink":"/blog/tags/security"},{"inline":true,"label":"pods/exec","permalink":"/blog/tags/pods-exec"}],"readingTime":6.02,"hasTruncateMarker":true,"authors":[{"name":"\u041f\u0443\u0442\u0438\u043b\u0438\u043d \u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u041b\u044c\u0432\u043e\u0432\u0438\u0447","title":"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u043e\u0440","url":"https://t.me/bezumniy_kot_work","image_url":"https://avatars.githubusercontent.com/u/107264732?v=4","socials":{"github":"https://github.com/FR-Solution"},"imageURL":"https://avatars.githubusercontent.com/u/107264732?v=4","key":null,"page":null}],"frontMatter":{"title":"Kubernetes pods/exec","description":"\u041f\u0435\u0440\u0435\u0445\u043e\u0434 pods/exec \u043d\u0430 WebSocket (GET \u0432\u043c\u0435\u0441\u0442\u043e POST), \u0432\u043b\u0438\u044f\u043d\u0438\u0435 \u043d\u0430 RBAC \u0438 \u0440\u0438\u0441\u043a\u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0439 \u0432 Kubernetes.","date":"2025-08-18T00:00:00.000Z","slug":"kubernetes-pods-exec","authors":[{"name":"\u041f\u0443\u0442\u0438\u043b\u0438\u043d \u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u041b\u044c\u0432\u043e\u0432\u0438\u0447","title":"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u043e\u0440","url":"https://t.me/bezumniy_kot_work","image_url":"https://avatars.githubusercontent.com/u/107264732?v=4","socials":{"github":"FR-Solution"},"imageURL":"https://avatars.githubusercontent.com/u/107264732?v=4"}],"toc_min_heading_level":2,"toc_max_heading_level":2,"tags":["Kubernetes","RBAC","Security","pods/exec"]},"unlisted":false,"nextItem":{"title":"Kubernetes Audit","permalink":"/blog/kubernetes-audit"}}')}}]);