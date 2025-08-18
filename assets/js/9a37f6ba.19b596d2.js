"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35976],{9675:(e,s,r)=>{r.d(s,{k:()=>o});const o={data:{value:r(60513).A`
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
    `}}},20066:e=>{e.exports=JSON.parse('{"permalink":"/blog/kubernetes-audit","source":"@site/blog/kubernetes-audit.mdx","title":"Kubernetes Audit","description":"Kubernetes Audit #","date":"2025-03-23T00:00:00.000Z","tags":[{"inline":true,"label":"Kubernetes","permalink":"/blog/tags/kubernetes"},{"inline":true,"label":"Handler-Pipeline","permalink":"/blog/tags/handler-pipeline"},{"inline":true,"label":"Audit","permalink":"/blog/tags/audit"}],"readingTime":13.11,"hasTruncateMarker":true,"authors":[{"name":"\u041f\u0443\u0442\u0438\u043b\u0438\u043d \u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u041b\u044c\u0432\u043e\u0432\u0438\u0447","title":"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u043e\u0440","url":"https://t.me/bezumniy_kot_work","image_url":"https://avatars.githubusercontent.com/u/107264732?v=4","socials":{"github":"https://github.com/FR-Solution"},"imageURL":"https://avatars.githubusercontent.com/u/107264732?v=4","key":null,"page":null}],"frontMatter":{"title":"Kubernetes Audit","date":"2025-03-23T00:00:00.000Z","slug":"kubernetes-audit","authors":[{"name":"\u041f\u0443\u0442\u0438\u043b\u0438\u043d \u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u041b\u044c\u0432\u043e\u0432\u0438\u0447","title":"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u043e\u0440","url":"https://t.me/bezumniy_kot_work","image_url":"https://avatars.githubusercontent.com/u/107264732?v=4","socials":{"github":"FR-Solution"},"imageURL":"https://avatars.githubusercontent.com/u/107264732?v=4"}],"toc_min_heading_level":2,"toc_max_heading_level":2,"tags":["Kubernetes","Handler-Pipeline","Audit"]},"unlisted":false,"prevItem":{"title":"Kubernetes pods/exec","permalink":"/blog/kubernetes-pods-exec"},"nextItem":{"title":"Kubernetes The Hard Way","permalink":"/blog/kubernetes-the-hard-way"}}')},22365:(e,s,r)=>{r.d(s,{I:()=>o});const o=()=>"/"},25946:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>p,contentTitle:()=>h,default:()=>m,frontMatter:()=>u,metadata:()=>o,toc:()=>g});var o=r(20066),i=r(74848),t=r(28453),n=(r(76331),r(9792),r(68747)),l=r(60513),c=r(41968),d=r(22365),a=r(9675);const u={title:"Kubernetes Audit",date:new Date("2025-03-23T00:00:00.000Z"),slug:"kubernetes-audit",authors:[{name:"\u041f\u0443\u0442\u0438\u043b\u0438\u043d \u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u041b\u044c\u0432\u043e\u0432\u0438\u0447",title:"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u043e\u0440",url:"https://t.me/bezumniy_kot_work",image_url:"https://avatars.githubusercontent.com/u/107264732?v=4",socials:{github:"FR-Solution"}}],toc_min_heading_level:"2\xa0",toc_max_heading_level:2,tags:["Kubernetes","Handler-Pipeline","Audit"]},h=void 0,p={authorsImageUrls:[void 0]},g=[{value:"\u041e\u0433\u043b\u0430\u0432\u043b\u0435\u043d\u0438\u0435",id:"\u043e\u0433\u043b\u0430\u0432\u043b\u0435\u043d\u0438\u0435",level:2},{value:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u0430\u0443\u0434\u0438\u0442",id:"\u0447\u0442\u043e-\u0442\u0430\u043a\u043e\u0435-\u0430\u0443\u0434\u0438\u0442",level:2},{value:"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u0430\u0443\u0434\u0438\u0442\u0430",id:"\u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430-\u0430\u0443\u0434\u0438\u0442\u0430",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b-\u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438",level:2},{value:"\u0423\u0440\u043e\u0432\u043d\u0438 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",id:"\u0443\u0440\u043e\u0432\u043d\u0438-\u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",level:2},{value:"\u0421\u0442\u0430\u0434\u0438\u0438 omitStages",id:"\u0441\u0442\u0430\u0434\u0438\u0438-omitstages",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u043f\u043e\u043b\u0438\u0442\u0438\u043a \u0430\u0443\u0434\u0438\u0442\u0430",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b-\u043f\u043e\u043b\u0438\u0442\u0438\u043a-\u0430\u0443\u0434\u0438\u0442\u0430",level:2},{value:"\u041f\u043e\u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u043e\u0433\u043e \u0448\u0443\u043c\u0430",id:"\u043f\u043e\u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u0441\u0438\u0441\u0442\u0435\u043c\u043d\u043e\u0433\u043e-\u0448\u0443\u043c\u0430",level:3},{value:"\u0424\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c",id:"\u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f-\u043f\u043e-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c",level:3},{value:"\u0417\u0430\u0449\u0438\u0442\u0430 \u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445",id:"\u0437\u0430\u0449\u0438\u0442\u0430-\u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445-\u0434\u0430\u043d\u043d\u044b\u0445",level:3},{value:"\u0414\u0435\u0442\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0434\u043b\u044f \u0432\u0430\u0436\u043d\u044b\u0445 API",id:"\u0434\u0435\u0442\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f-\u0434\u043b\u044f-\u0432\u0430\u0436\u043d\u044b\u0445-api",level:3},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 API-\u0441\u0435\u0440\u0432\u0435\u0440\u0430",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-api-\u0441\u0435\u0440\u0432\u0435\u0440\u0430",level:2},{value:"\u0417\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",id:"\u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",level:2},{value:"\u0411\u0430\u0437\u043e\u0432\u044b\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438",id:"\u0431\u0430\u0437\u043e\u0432\u044b\u0435-\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438",level:3},{value:"\u0411\u043e\u043d\u0443\u0441: \u043f\u0440\u0438\u043c\u0435\u0440 Yandex Cloud",id:"\u0431\u043e\u043d\u0443\u0441-\u043f\u0440\u0438\u043c\u0435\u0440-yandex-cloud",level:2}];function x(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h3",{children:(0,i.jsxs)(s.p,{children:["Kubernetes Audit ",(0,i.jsx)("span",{style:{color:"#1cc5ac"},children:"#"})]})}),"\n",(0,i.jsx)("p",{style:{fontStyle:"italic",fontWeight:600},children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0435\u043c \u0441\u0435\u0440\u0438\u044e \u0441\u0442\u0430\u0442\u0435\u0439 \u043f\u043e Kubernetes \u0432 \u043d\u043e\u0432\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435."}),"\n",(0,i.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"flex-start",gap:"30px",marginTop:"1.5rem"},children:[(0,i.jsx)("div",{style:{flex:"1 1 55%",minWidth:"280px"},children:(0,i.jsx)("p",{children:(0,i.jsx)(s.p,{children:"Kubernetes \u2014 \u043c\u043e\u0449\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043f\u043e gRPC \u0438 REST API, \u043d\u043e \u043e\u043d \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0443\u0441\u0438\u043b\u0438\u0439 \u0434\u043b\u044f \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u0438 \u0437\u0430\u0449\u0438\u0442\u044b \u043e\u0442 \u043d\u0435\u0441\u0430\u043d\u043a\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u0430. \u041e\u0434\u043d\u0438\u043c \u0438\u0437 \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0445 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0430\u0443\u0434\u0438\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0442\u044c \u0432\u0441\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435. \u0412 \u044d\u0442\u043e\u0439 \u0441\u0442\u0430\u0442\u044c\u0435 \u043c\u044b \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u043e\u0441\u043d\u043e\u0432\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0430\u0443\u0434\u0438\u0442\u0430 \u0432 Kubernetes, \u0435\u0433\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0438 \u043f\u0440\u0438\u043c\u0435\u0440\u044b \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u043c\u043e\u0433\u0443\u0442 \u0432\u0430\u043c \u0441\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0443\u044e \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443 \u0430\u0443\u0434\u0438\u0442\u0430 \u0434\u043b\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430."})})}),(0,i.jsx)("div",{style:{flex:"1 1 40%",minWidth:"220px",textAlign:"center",marginTop:"-3rem"},children:(0,i.jsx)("img",{src:`${(0,d.I)()}img/audit/audit-promo.png`,alt:"audit",style:{width:"110%",maxWidth:"330px",filter:"drop-shadow(0 0 30px rgba(196, 202, 255, 0.2))",transition:"transform 0.3s ease-in-out"}})})]}),"\n","\n",(0,i.jsx)(s.h2,{id:"\u043e\u0433\u043b\u0430\u0432\u043b\u0435\u043d\u0438\u0435",children:"\u041e\u0433\u043b\u0430\u0432\u043b\u0435\u043d\u0438\u0435"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#%D1%87%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-%D0%B0%D1%83%D0%B4%D0%B8%D1%82",children:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u0430\u0443\u0434\u0438\u0442"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0-%D0%B0%D1%83%D0%B4%D0%B8%D1%82%D0%B0",children:"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u0430\u0443\u0434\u0438\u0442\u0430"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80%D1%8B-%D1%84%D0%B8%D0%BB%D1%8C%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%B8",children:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#%D1%83%D1%80%D0%BE%D0%B2%D0%BD%D0%B8-%D0%BB%D0%BE%D0%B3%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F",children:"\u0423\u0440\u043e\u0432\u043d\u0438 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#%D1%81%D1%82%D0%B0%D0%B4%D0%B8%D0%B8-omitstages",children:"\u0421\u0442\u0430\u0434\u0438\u0438 omitStages"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#%D0%BF%D0%BE%D0%B4%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%BD%D0%BE%D0%B3%D0%BE-%D1%88%D1%83%D0%BC%D0%B0",children:"\u041f\u043e\u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u043e\u0433\u043e \u0448\u0443\u043c\u0430"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#%D1%84%D0%B8%D0%BB%D1%8C%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%BF%D0%BE-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F%D0%BC",children:"\u0424\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#%D0%B7%D0%B0%D1%89%D0%B8%D1%82%D0%B0-%D1%87%D1%83%D0%B2%D1%81%D1%82%D0%B2%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D1%85-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85",children:"\u0417\u0430\u0449\u0438\u0442\u0430 \u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#%D0%B4%D0%B5%D1%82%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B2%D0%B0%D0%B6%D0%BD%D1%8B%D1%85-api",children:"\u0414\u0435\u0442\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0434\u043b\u044f \u0432\u0430\u0436\u043d\u044b\u0445 API"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0-api-%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D1%80%D0%B0",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 API-\u0441\u0435\u0440\u0432\u0435\u0440\u0430"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#%D0%B7%D0%B0%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5",children:"\u0417\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#%D0%B1%D0%BE%D0%BD%D1%83%D1%81-%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80-yandex-cloud",children:"\u0411\u043e\u043d\u0443\u0441: \u043f\u0440\u0438\u043c\u0435\u0440 Yandex Cloud"})}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\u0447\u0442\u043e-\u0442\u0430\u043a\u043e\u0435-\u0430\u0443\u0434\u0438\u0442",children:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u0430\u0443\u0434\u0438\u0442"}),"\n",(0,i.jsx)(s.p,{children:"\u0410\u0443\u0434\u0438\u0442 \u0432 Kubernetes \u2014 \u044d\u0442\u043e \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0444\u0438\u043a\u0441\u0438\u0440\u0443\u0435\u0442 \u0432\u0441\u0435 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f \u043a API-\u0441\u0435\u0440\u0432\u0435\u0440\u0443, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u043f\u043e\u043f\u044b\u0442\u043a\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0434\u043e \u044d\u0442\u0430\u043f\u0430 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438. \u042d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0442\u044c \u043a\u0430\u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, \u0442\u0430\u043a \u0438 \u043b\u044e\u0431\u044b\u0435 \u043d\u0435\u0441\u0430\u043d\u043a\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0438\u043b\u0438 \u0430\u043d\u043e\u043d\u0438\u043c\u043d\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b. \u0422\u0430\u043a\u043e\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c \u0434\u043b\u044f \u0441\u0432\u043e\u0435\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u0432\u044b\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u0438\u043d\u0446\u0438\u0434\u0435\u043d\u0442\u043e\u0432 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438, \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435 \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u0439 \u0440\u0435\u0433\u0443\u043b\u044f\u0442\u043e\u0440\u043e\u0432."}),"\n",(0,i.jsx)(s.p,{children:"\u0410\u0443\u0434\u0438\u0442-\u0441\u043e\u0431\u044b\u0442\u0438\u044f \u0444\u043e\u0440\u043c\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u043e \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0435, \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u043e\u0439 \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435. \u041a\u0430\u0436\u0434\u043e\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u043c\u0435\u0442\u043a\u0443."}),"\n",(0,i.jsx)(s.li,{children:"\u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f (\u0435\u0441\u043b\u0438 \u0435\u0441\u0442\u044c)."}),"\n",(0,i.jsx)(s.li,{children:"\u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435."}),"\n",(0,i.jsx)(s.li,{children:"\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 (\u0443\u0441\u043f\u0435\u0445/\u043e\u0442\u043a\u0430\u0437)."}),"\n",(0,i.jsxs)(s.li,{children:["\u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 ",(0,i.jsx)(s.code,{children:"auditID"}),", \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u043c\u043e\u0436\u043d\u043e \u043e\u0442\u0441\u043b\u0435\u0434\u0438\u0442\u044c \u0446\u0435\u043f\u043e\u0447\u043a\u0443 \u0432\u044b\u0437\u043e\u0432\u043e\u0432."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"\u0421\u0430\u043c\u0438 \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0432 \u0444\u0430\u0439\u043b, \u043d\u0430 \u0443\u0434\u0430\u043b\u0451\u043d\u043d\u044b\u0439 webhook \u0438\u043b\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f."}),"\n",(0,i.jsx)(s.h2,{id:"\u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430-\u0430\u0443\u0434\u0438\u0442\u0430",children:"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u0430\u0443\u0434\u0438\u0442\u0430"}),"\n",(0,i.jsxs)(s.p,{children:["\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u0430\u0443\u0434\u0438\u0442\u0430 \u2014 \u044d\u0442\u043e YAML-\u0444\u0430\u0439\u043b, \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0449\u0438\u0439 \u043d\u0430\u0431\u043e\u0440 \u043f\u0440\u0430\u0432\u0438\u043b, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0449\u0438\u0445, \u043a\u0430\u043a\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u043d\u0443\u0436\u043d\u043e \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438 \u0441 \u043a\u0430\u043a\u043e\u0439 \u0441\u0442\u0435\u043f\u0435\u043d\u044c\u044e \u0434\u0435\u0442\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438. \u041a\u0430\u0436\u0434\u043e\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u043e \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u0443\u0441\u043b\u043e\u0432\u0438\u0439 (\u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432) \u0438 \u0443\u0440\u043e\u0432\u043d\u044f \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f ",(0,i.jsx)(s.code,{children:"level"}),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0437\u0430\u0434\u0430\u0451\u0442 \u043e\u0431\u044a\u0451\u043c \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438."]}),"\n",(0,i.jsx)(s.p,{children:"API-\u0441\u0435\u0440\u0432\u0435\u0440 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u043f\u0440\u0430\u0432\u0438\u043b \u0441\u0432\u0435\u0440\u0445\u0443 \u0432\u043d\u0438\u0437 \u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442 \u043f\u0435\u0440\u0432\u043e\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0435\u0435. \u0415\u0441\u043b\u0438 \u043d\u0438 \u043e\u0434\u043d\u043e \u043f\u0440\u0430\u0432\u0438\u043b\u043e \u043d\u0435 \u0441\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442, \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0438\u043b\u0438 \u043f\u0440\u043e\u043f\u0443\u0441\u043a \u0441\u043e\u0431\u044b\u0442\u0438\u044f."}),"\n",(0,i.jsx)(s.h2,{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b-\u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438",children:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438"}),"\n",(0,i.jsx)(s.p,{children:"\u041d\u0438\u0436\u0435 \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u044b \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 \u0441\u043e\u0431\u044b\u0442\u0438\u0439:"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440"}),(0,i.jsx)("th",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),(0,i.jsx)("th",{children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"level"})}),(0,i.jsx)("td",{children:"\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u0434\u0435\u0442\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"None"}),", ",(0,i.jsx)("code",{children:"Metadata"}),", ",(0,i.jsx)("code",{children:"Request"}),", ",(0,i.jsx)("code",{children:"RequestResponse"})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"users"}),", ",(0,i.jsx)("code",{children:"userGroups"})]})}),(0,i.jsx)("td",{children:"\u0424\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0438\u043b\u0438 \u0433\u0440\u0443\u043f\u043f\u0435"}),(0,i.jsx)("td",{children:(0,i.jsxs)("code",{children:["system:serviceaccount:default",":my-app"]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"verbs"})}),(0,i.jsx)("td",{children:"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u043d\u0430\u0434 \u0440\u0435\u0441\u0443\u0440\u0441\u0430\u043c\u0438"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"get"}),", ",(0,i.jsx)("code",{children:"list"}),", ",(0,i.jsx)("code",{children:"watch"}),", ",(0,i.jsx)("code",{children:"create"}),", ",(0,i.jsx)("code",{children:"update"}),","," ","\n",(0,i.jsx)("code",{children:"patch"}),", ",(0,i.jsx)("code",{children:"delete"}),", ",(0,i.jsx)("code",{children:"deletecollection"}),", ",(0,i.jsx)("code",{children:"proxy"}),","," ","\n",(0,i.jsx)("code",{children:"redirect"}),", ",(0,i.jsx)("code",{children:"head"})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"resources"})}),(0,i.jsx)("td",{children:"\u0426\u0435\u043b\u0435\u0432\u044b\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b Kubernetes"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"pods"}),", ",(0,i.jsx)("code",{children:"configmaps"})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"namespaces"})}),(0,i.jsx)("td",{children:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u043f\u043e namespace"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"default"}),", ",(0,i.jsx)("code",{children:"kube-system"})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"nonResourceURLs"})}),(0,i.jsx)("td",{children:"\u0417\u0430\u043f\u0440\u043e\u0441\u044b \u043a \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u043c \u043f\u0443\u0442\u044f\u043c \u0432\u043d\u0435 API-\u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"/metrics"}),", ",(0,i.jsx)("code",{children:"/healthz"})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"omitStages"})}),(0,i.jsx)("td",{children:"\u0418\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0441\u0442\u0430\u0434\u0438\u0439 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438"}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("code",{children:"RequestReceived"}),", ",(0,i.jsx)("code",{children:"ResponseStarted"}),", ",(0,i.jsx)("code",{children:"ResponseComplete"}),", ",(0,i.jsx)("code",{children:"Panic"})]})})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"\u0443\u0440\u043e\u0432\u043d\u0438-\u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",children:"\u0423\u0440\u043e\u0432\u043d\u0438 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435"}),(0,i.jsx)("th",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"None"})}),(0,i.jsx)("td",{children:"\u041d\u0435 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u043e\u0431\u044b\u0442\u0438\u0435 \u0432\u043e\u043e\u0431\u0449\u0435"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"Metadata"})}),(0,i.jsx)("td",{children:"\u041b\u043e\u0433\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 (\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c, \u0440\u0435\u0441\u0443\u0440\u0441, verb \u0438 \u0442.\u043f.)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"Request"})}),(0,i.jsx)("td",{children:"\u041b\u043e\u0433\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0435 \u0438 \u0442\u0435\u043b\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430. \u041e\u0442\u0432\u0435\u0442 \u043d\u0435 \u043b\u043e\u0433\u0438\u0440\u0443\u0435\u0442\u0441\u044f"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"RequestResponse"})}),(0,i.jsx)("td",{children:"\u041b\u043e\u0433\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0435, \u0442\u0435\u043b\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0438 \u0442\u0435\u043b\u043e \u043e\u0442\u0432\u0435\u0442\u0430"})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"\u0441\u0442\u0430\u0434\u0438\u0438-omitstages",children:"\u0421\u0442\u0430\u0434\u0438\u0438 omitStages"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"\u0421\u0442\u0430\u0434\u0438\u044f"}),(0,i.jsx)("th",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"RequestReceived"})}),(0,i.jsx)("td",{children:"\u0417\u0430\u043f\u0440\u043e\u0441 \u043f\u043e\u043b\u0443\u0447\u0435\u043d API-\u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c, \u043d\u043e \u0435\u0449\u0451 \u043d\u0435 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"ResponseStarted"})}),(0,i.jsx)("td",{children:"\u041d\u0430\u0447\u0430\u043b\u0430\u0441\u044c \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u043e\u0442\u0432\u0435\u0442\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0443"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"ResponseComplete"})}),(0,i.jsx)("td",{children:"\u0417\u0430\u043f\u0440\u043e\u0441 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043d"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"Panic"})}),(0,i.jsx)("td",{children:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043b\u0430\u0441\u044c \u0441 \u0444\u0430\u0442\u0430\u043b\u044c\u043d\u043e\u0439 \u043e\u0448\u0438\u0431\u043a\u043e\u0439"})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b-\u043f\u043e\u043b\u0438\u0442\u0438\u043a-\u0430\u0443\u0434\u0438\u0442\u0430",children:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u043f\u043e\u043b\u0438\u0442\u0438\u043a \u0430\u0443\u0434\u0438\u0442\u0430"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"\u042d\u0442\u0438 \u043f\u0440\u0438\u043c\u0435\u0440\u044b \u043f\u043e\u043c\u043e\u0433\u0443\u0442 \u0432\u0430\u043c \u043d\u0430\u0447\u0430\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 \u0430\u0443\u0434\u0438\u0442\u0430 \u0432 Kubernetes. \u041e\u043d\u0438 \u043f\u043e\u043a\u0440\u044b\u0432\u0430\u044e\u0442 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0438 \u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u0430\u0434\u0430\u043f\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443 \u043f\u043e\u0434 \u0432\u0430\u0448\u0438 \u043d\u0443\u0436\u0434\u044b."}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"\u043f\u043e\u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u0441\u0438\u0441\u0442\u0435\u043c\u043d\u043e\u0433\u043e-\u0448\u0443\u043c\u0430",children:"\u041f\u043e\u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u043e\u0433\u043e \u0448\u0443\u043c\u0430"}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.p,{children:"\u041f\u043e\u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u043e\u0433\u043e \u0448\u0443\u043c\u0430, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u0444\u043e\u043a\u0443\u0441\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u0442\u0435\u0445 \u0441\u043e\u0431\u044b\u0442\u0438\u044f\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u0430\u0436\u043d\u044b \u0434\u043b\u044f \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430. \u042d\u0442\u043e \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u043f\u043e\u043b\u0435\u0437\u043d\u043e \u0434\u043b\u044f \u0441\u043d\u0438\u0436\u0435\u043d\u0438\u044f \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0432 \u043b\u043e\u0433\u0435, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u0441 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u043c\u0438 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430\u043c\u0438 Kubernetes, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0430 \u0434\u043b\u044f \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439."})}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{style:{width:"76%"},children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),(0,i.jsx)("th",{style:{width:"24%"},children:"\u041f\u0440\u0438\u043c\u0435\u0440"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{children:[(0,i.jsx)("strong",{children:"\u041f\u043e\u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0448\u0443\u043c\u0430 \u043e\u0442 kube-apiserver"}),(0,i.jsx)("br",{}),(0,i.jsx)("small",{children:"\u041d\u0435 \u043d\u0443\u0436\u043d\u043e, \u0435\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0432\u0438\u0434\u0435\u0442\u044c \u0432\u0441\u0435 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0441\u0430\u043c\u043e\u0433\u043e API-\u0441\u0435\u0440\u0432\u0435\u0440\u0430 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0434\u043b\u044f \u0433\u043b\u0443\u0431\u043e\u043a\u043e\u0433\u043e \u0430\u0443\u0434\u0438\u0442\u0430 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0445 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432). \u041e\u0431\u044b\u0447\u043d\u043e \u044d\u0442\u0438 \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u043d\u0435 \u043d\u0443\u0436\u043d\u044b \u0434\u043b\u044f \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439."})]}),(0,i.jsx)("td",{children:(0,i.jsx)(c.R,{yamlContent:l.A`
          ---
          apiVersion: audit.k8s.io/v1
          kind: Policy
          rules:

            # 1. Сайлентим GET на /readyz от kube-apисервера
            - level: None
              verbs: ["get"]
              users:
                - "system:apiserver"
              nonResourceURLs:
                - "/readyz"

            # 2. Сайлентим все LIST и WATCH запросы kube-apисервера к ключевым API-группам и ресурсам
            - level: None
              verbs: ["list", "watch"]
              users:
                - "system:apiserver"
              resources:
                - group: "storage.k8s.io"
                  resources:
                    - "volumeattachments"
                    - "storageclasses"

                - group: "rbac.authorization.k8s.io"
                  resources:
                    - "roles"
                    - "rolebindings"
                    - "clusterroles"
                    - "clusterrolebindings"

                - group: "scheduling.k8s.io"
                  resources:
                    - "priorityclasses"

                - group: "node.k8s.io"
                  resources:
                    - "runtimeclasses"

                - group: "networking.k8s.io"
                  resources:
                    - "ingressclasses"

                - group: "flowcontrol.apiserver.k8s.io"
                  resources:
                    - "flowschemas"
                    - "prioritylevelconfigurations"

                - group: "discovery.k8s.io"
                  namespaces: ["kube-system"]
                  resources:
                    - "endpointslices"
                  resourceNames:
                    - "kubernetes"

                - group: "coordination.k8s.io"
                  resources:
                    - "leases"

                - group: "apiregistration.k8s.io"
                  resources:
                    - "apiservices"

                - group: "apiextensions.k8s.io"
                  resources:
                    - "customresourcedefinitions"

                - group: "admissionregistration.k8s.io"
                  resources:
                    - "validatingwebhookconfigurations"
                    - "mutatingwebhookconfigurations"
                    - "validatingadmissionpolicybindings"
                    - "validatingadmissionpolicies"

                - group: ""
                  resources:
                    - "endpoints"
                    - "limitranges"
                    - "namespaces"
                    - "nodes"
                    - "persistentvolumes"
                    - "pods"
                    - "resourcequotas"
                    - "secrets"
                    - "serviceaccounts"
                    - "services"
                    - "configmaps"

            # 3. Сайлентим CREATE-запросы kube-apисервера к тем же API-группам и ресурсам
            - level: None
              verbs: ["create"]
              users:
                - "system:apiserver"
              resources:
                - group: "scheduling.k8s.io"
                  resources:
                    - "priorityclasses"
                - group: "rbac.authorization.k8s.io"
                  resources:
                    - "roles"
                    - "rolebindings"
                    - "clusterroles"
                    - "clusterrolebindings"
                - group: "flowcontrol.apiserver.k8s.io"
                  resources:
                    - "flowschemas"
                    - "prioritylevelconfigurations"
                - group: "discovery.k8s.io"
                  resources:
                    - "endpointslices"
                - group: "coordination.k8s.io"
                  resources:
                    - "leases"
                - group: "apiregistration.k8s.io"
                  resources:
                    - "apiservices"
                - group: ""
                  resources:
                    - "configmaps"
                    - "services"
                    - "endpoints"
                    - "namespaces"

            # 4. Сайлентим PATCH-запросы kube-apисервера к подресурсу status в flowcontrol.apiserver.k8s.io/flowschemas
            - level: None
              verbs: ["patch"]
              users:
                - "system:apiserver"
              resources:
                - group: "flowcontrol.apiserver.k8s.io"
                  resources:
                    - "flowschemas/status"

            # 5. Сайлентим UPDATE-запросы kube-apисервера к coordination.k8s.io/leases и core/v1/configmaps
            - level: None
              verbs: ["update"]
              users:
                - "system:apiserver"
              resources:
                - group: "coordination.k8s.io"
                  resources:
                    - "leases"
                - group: ""
                  resources:
                    - "configmaps"
        `})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{children:[(0,i.jsx)("strong",{children:"\u041f\u043e\u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0448\u0443\u043c\u0430 \u043e\u0442 kube-controller-manager"}),(0,i.jsx)("br",{}),(0,i.jsx)("small",{children:"\u041d\u0435 \u043d\u0443\u0436\u043d\u043e, \u0435\u0441\u043b\u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043f\u043e\u043b\u043d\u044b\u0439 \u0430\u0443\u0434\u0438\u0442 \u0440\u0430\u0431\u043e\u0442\u044b \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u043e\u0432 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0434\u043b\u044f \u043e\u0442\u043b\u0430\u0434\u043a\u0438 \u0438\u0445 \u043b\u043e\u0433\u0438\u043a\u0438). \u0412 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u0435 \u0441\u043b\u0443\u0447\u0430\u0435\u0432 \u044d\u0442\u0438 \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0437\u0430\u0441\u043e\u0440\u044f\u044e\u0442 \u0430\u0443\u0434\u0438\u0442."})]}),(0,i.jsx)("td",{children:(0,i.jsx)(c.R,{yamlContent:l.A`
          ---
          apiVersion: audit.k8s.io/v1
          kind: Policy
          rules:

            # 1. Сайлентим LIST и WATCH запросы от kube-controller-manager для многочисленных API-групп и ресурсов
            - level: None
              verbs: ["list", "watch"]
              users:
                - "system:kube-controller-manager"
              resources:
                - group: "storage.k8s.io"
                  resources:
                    - "volumeattributesclasses"
                    - "volumeattachments"
                    - "storageclasses"
                    - "csistoragecapacities"
                    - "csinodes"
                    - "csidrivers"
                - group: "scheduling.k8s.io"
                  resources:
                    - "priorityclasses"
                - group: "resource.k8s.io"
                  resources:
                    - "resourceslices"
                    - "resourceclassparameters"
                    - "resourceclasses"
                    - "resourceclaimtemplates"
                    - "resourceclaims"
                    - "resourceclaimparameters"
                    - "podschedulingcontexts"
                - group: "rbac.authorization.k8s.io"
                  resources:
                    - "roles"
                    - "rolebindings"
                    - "clusterroles"
                    - "clusterrolebindings"
                - group: "policy"
                  resources:
                    - "poddisruptionbudgets"
                - group: "node.k8s.io"
                  resources:
                    - "runtimeclasses"
                - group: "networking.k8s.io"
                  resources:
                    - "servicecidrs"
                    - "ipaddresses"
                    - "networkpolicies"
                    - "ingresses"
                    - "ingressclasses"
                - group: "internal.apiserver.k8s.io"
                  resources:
                    - "storageversions"
                - group: "flowcontrol.apiserver.k8s.io"
                  resources:
                    - "prioritylevelconfigurations"
                    - "flowschemas"
                - group: "discovery.k8s.io"
                  resources:
                    - "endpointslices"
                - group: "coordination.k8s.io"
                  resources:
                    - "leases"
                - group: "certificates.k8s.io"
                  resources:
                    - "certificatesigningrequests"
                - group: "batch"
                  resources:
                    - "jobs"
                    - "cronjobs"
                - group: "autoscaling"
                  resources:
                    - "horizontalpodautoscalers"
                - group: "apps"
                  resources:
                    - "statefulsets"
                    - "replicasets"
                    - "deployments"
                    - "daemonsets"
                    - "controllerrevisions"
                - group: "apiregistration.k8s.io"
                  resources:
                    - "apiservices"
                - group: "apiextensions.k8s.io"
                  resources:
                    - "customresourcedefinitions"
                - group: "admissionregistration.k8s.io"
                  resources:
                    - "validatingwebhookconfigurations"
                    - "mutatingwebhookconfigurations"
                    - "validatingadmissionpolicybindings"
                    - "validatingadmissionpolicies"
                - group: ""
                  resources:
                    - "services"
                    - "serviceaccounts"
                    - "secrets"
                    - "resourcequotas"
                    - "replicationcontrollers"
                    - "podtemplates"
                    - "pods"
                    - "persistentvolumes"
                    - "persistentvolumeclaims"
                    - "nodes"
                    - "namespaces"
                    - "limitranges"
                    - "endpoints"
                    - "configmaps"

            # 2. Сайлентим GET и UPDATE запросы от kube-controller-manager к coordination.k8s.io/leases
            - level: None
              verbs: ["get", "update"]
              users:
                - "system:kube-controller-manager"
              resources:
                - group: "coordination.k8s.io"
                  namespaces: ["kube-system"]
                  resources:
                    - "leases"
                  resourceNames:
                    - "kube-controller-manager"

            # 3. Сайлентим CREATE-токены для ServiceAccount в kube-system от kube-controller-manager
            - level: None
              verbs: ["create"]
              users:
                - "system:kube-controller-manager"
              resources:
                - group: ""
                  namespaces: ["kube-system"]
                  resources:
                    - "serviceaccounts/token"
                  resourceNames:
                    - "ttl-controller"
                    - "node-controller"

            # 4. Сайлентим GET запросы к ServiceAccount в kube-system от kube-controller-manager
            - level: None
              verbs: ["get"]
              users:
                - "system:kube-controller-manager"
              resources:
                - group: ""
                  namespaces: ["kube-system"]
                  resources:
                    - "serviceaccounts"
                  resourceNames:
                    - "ttl-controller"
                    - "node-controller"
        `})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{children:[(0,i.jsx)("strong",{children:"\u041f\u043e\u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0448\u0443\u043c\u0430 \u043e\u0442 kube-scheduler"}),(0,i.jsx)("br",{}),(0,i.jsx)("small",{children:"\u041d\u0435 \u043d\u0443\u0436\u043d\u043e, \u0435\u0441\u043b\u0438 \u0432\u044b \u0430\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0435\u0442\u0435 \u0440\u0430\u0431\u043e\u0442\u0443 \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u0430. \u0414\u043b\u044f \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u044d\u0442\u0438 \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u043d\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0430."})]}),(0,i.jsx)("td",{children:(0,i.jsx)(c.R,{yamlContent:l.A`
          ---
          apiVersion: audit.k8s.io/v1
          kind: Policy
          rules:

            # 1. Сайлентим все LIST и WATCH запросы от kube-scheduler
            - level: None
              verbs: ["list", "watch"]
              users:
                - "system:kube-scheduler"
              resources:
                - group: "storage.k8s.io"
                  resources:
                    - "storageclasses"
                    - "csistoragecapacities"
                    - "csinodes"
                    - "csidrivers"

                - group: "policy"
                  resources:
                    - "poddisruptionbudgets"

                - group: "apps"
                  resources:
                    - "statefulsets"
                    - "replicasets"

                - group: ""
                  resources:
                    - "services"
                    - "replicationcontrollers"
                    - "pods"
                    - "persistentvolumes"
                    - "persistentvolumeclaims"
                    - "nodes"
                    - "namespaces"

                - group: ""
                  namespaces: ["kube-system"]
                  resources:
                    - "configmaps"
                  resourceNames:
                    - "extension-apiserver-authentication"

            # 2. Сайлентим GET и UPDATE запросы от kube-scheduler к coordination.k8s.io/leases
            - level: None
              verbs: ["get", "update"]
              users:
                - "system:kube-scheduler"
              resources:
                - group: "coordination.k8s.io"
                  namespaces: ["kube-system"]
                  resources:
                    - "leases"
                  resourceNames:
                    - "kube-scheduler"
        `})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{children:[(0,i.jsx)("strong",{children:"\u041f\u043e\u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0448\u0443\u043c\u0430 \u043e\u0442 kubelet"}),(0,i.jsx)("br",{}),(0,i.jsx)("small",{children:"\u041d\u0435 \u043d\u0443\u0436\u043d\u043e, \u0435\u0441\u043b\u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0430\u0443\u0434\u0438\u0442 \u0432\u0441\u0435\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 kubelet \u0438 \u043d\u043e\u0434. \u041e\u0431\u044b\u0447\u043d\u043e \u044d\u0442\u0438 \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u043d\u0443\u0436\u043d\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0434\u0438\u0430\u0433\u043d\u043e\u0441\u0442\u0438\u043a\u0438 \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u0441 \u043d\u043e\u0434\u0430\u043c\u0438."})]}),(0,i.jsx)("td",{children:(0,i.jsx)(c.R,{yamlContent:l.A`
          ---
          apiVersion: audit.k8s.io/v1
          kind: Policy
          rules:

            # 1. Сайлентим LIST и WATCH запросы от всех узлов (system:nodes)
            - level: None
              verbs: ["list", "watch"]
              userGroups:
                - "system:nodes"
              resources:
                - group: "storage.k8s.io"
                  resources:
                    - "csinodes"
                    - "csidrivers"
                - group: "node.k8s.io"
                  resources:
                    - "runtimeclasses"
                - group: ""
                  resources:
                    - "services"
                    - "pods"
                    - "nodes"

            # 2. Сайлентим GET запросы от system:nodes
            - level: None
              verbs: ["get"]
              userGroups:
                - "system:nodes"
              resources:
                - group: "coordination.k8s.io"
                  namespaces: ["kube-node-lease"]
                  resources:
                    - "leases"
                - group: ""
                  namespaces: ["kube-system"]
                  resources:
                    - "pods"
                - group: ""
                  resources:
                    - "nodes"
                - group: "storage.k8s.io"
                  resources:
                    - "csinodes"

            # 3. Сайлентим UPDATE запросы от system:nodes
            - level: None
              verbs: ["update"]
              userGroups:
                - "system:nodes"
              resources:
                - group: "coordination.k8s.io"
                  namespaces: ["kube-node-lease"]
                  resources:
                    - "leases"
                - group: ""
                  namespaces: ["kube-system"]
                  resources:
                    - "pods"

            # 4. Сайлентим PATCH запросы от system:nodes
            - level: None
              verbs: ["patch"]
              userGroups:
                - "system:nodes"
              resources:
                - group: ""
                  resources:
                    - "nodes/status"
                - group: ""
                  namespaces: ["kube-system"]
                  resources:
                    - "pods/status"
                - group: ""
                  namespaces:
                    - "kube-system"
                    - "default"
                  resources:
                    - "pods"
                    - "events"

            # 5. Сайлентим CREATE запросы от system:nodes
            - level: None
              verbs: ["create"]
              userGroups:
                - "system:nodes"
              resources:
                - group: ""
                  resources:
                    - "nodes"
                - group: ""
                  namespaces:
                    - "kube-system"
                    - "default"
                  resources:
                    - "events"
                - group: ""
                  namespaces:
                    - "kube-system"
                  resources:
                    - "pods"
        `})})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"\u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f-\u043f\u043e-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c",children:"\u0424\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c"}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:["\u0424\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u0441\u043e\u0431\u044b\u0442\u0438\u0439 \u043f\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c \u0438 \u0433\u0440\u0443\u043f\u043f\u0430\u043c \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u043e\u0441\u0440\u0435\u0434\u043e\u0442\u043e\u0447\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u043c\u0435\u044e\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0445 \u0433\u0440\u0443\u043f\u043f, \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a ",(0,i.jsx)(s.code,{children:"system:masters"})," \u0443 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0435\u0441\u0442\u044c \u043f\u043e\u043b\u043d\u044b\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443."]})}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{style:{width:"76%"},children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),(0,i.jsx)("th",{style:{width:"24%"},children:"\u041f\u0440\u0438\u043c\u0435\u0440"})]})}),(0,i.jsx)("tbody",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsxs)("strong",{children:["\u041b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u0433\u0440\u0443\u043f\u043f\u044b ",(0,i.jsx)(s.code,{children:"system:masters"})]})}),(0,i.jsx)("td",{children:(0,i.jsx)(c.R,{yamlContent:l.A`
          ---
          apiVersion: audit.k8s.io/v1
          kind: Policy
          rules:
            - level: Metadata
              # omitStages исключает указанные стадии аудита (например, RequestReceived)
              # из логирования — это снижает шум.
              omitStages:
                - "RequestReceived"
              # Фильтрация по группе пользователей
              userGroups:
                - "system:masters"
          `})})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"\u0437\u0430\u0449\u0438\u0442\u0430-\u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445-\u0434\u0430\u043d\u043d\u044b\u0445",children:"\u0417\u0430\u0449\u0438\u0442\u0430 \u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"}),"\n",(0,i.jsx)(s.admonition,{title:"\u0412\u0430\u0436\u043d\u043e!",type:"warning",children:(0,i.jsx)(s.p,{children:"\u0417\u0430\u0449\u0438\u0442\u0430 \u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432\u0430\u0436\u043d\u0430 \u0432 Kubernetes, \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u0435\u0441\u043b\u0438 \u0432\u044b \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 \u0432\u043d\u0435\u0448\u043d\u0438\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u0435\u043a\u0440\u0435\u0442\u0430\u043c\u0438, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a HashiCorp Vault \u0438\u043b\u0438 Sealed Secrets."})}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{style:{width:"76%"},children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),(0,i.jsx)("th",{style:{width:"24%"},children:"\u041f\u0440\u0438\u043c\u0435\u0440"})]})}),(0,i.jsx)("tbody",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("strong",{children:"\u041b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u0441 \u0441\u0435\u043a\u0440\u0435\u0442\u0430\u043c\u0438 \u0438 \u0442\u043e\u043a\u0435\u043d\u0430\u043c\u0438."})}),(0,i.jsx)("td",{children:(0,i.jsx)(c.R,{yamlContent:l.A`
          ---
          apiVersion: audit.k8s.io/v1
          kind: Policy
          rules:
            - level: Metadata
              omitStages:
                - "RequestReceived"
              verbs: ["get","list","watch"]
              resources:
                - group: ""
                  resources:
                    - "secrets"

            - level: Metadata
              omitStages:
                - "RequestReceived"
              verbs: ["delete"]
              resources:
                - group: ""
                  resources:
                    - "secrets"

            - level: Metadata
              omitStages:
                - "RequestReceived"
              verbs: ["create","patch"]
              resources:
                - group: ""
                  resources:
                    - "secrets"
          `})})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"\u0434\u0435\u0442\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f-\u0434\u043b\u044f-\u0432\u0430\u0436\u043d\u044b\u0445-api",children:"\u0414\u0435\u0442\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0434\u043b\u044f \u0432\u0430\u0436\u043d\u044b\u0445 API"}),"\n",(0,i.jsx)(s.admonition,{title:"\u0412\u0430\u0436\u043d\u043e!",type:"warning",children:(0,i.jsx)(s.p,{children:"\u0422\u0430\u043a\u0436\u0435 \u0432 Kubernetes \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u044b \u0434\u043b\u044f \u044d\u0441\u043a\u0430\u043b\u0430\u0446\u0438\u0438 \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0439 \u2014 \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0440\u043e\u043b\u0435\u0432\u044b\u0435 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 (RBAC), workload-\u0440\u0435\u0441\u0443\u0440\u0441\u044b (Deployments, Pods) \u0438 Admission-\u0440\u0435\u0441\u0443\u0440\u0441\u044b. \u041b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u043d\u0430\u0434 \u044d\u0442\u0438\u043c\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0430\u043c\u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0438 \u0432\u044b\u044f\u0432\u043b\u044f\u0442\u044c \u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0443\u0433\u0440\u043e\u0437\u044b \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438."})}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{style:{width:"76%"},children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),(0,i.jsx)("th",{style:{width:"24%"},children:"\u041f\u0440\u0438\u043c\u0435\u0440"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{children:[(0,i.jsx)("strong",{children:"\u041b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u043d\u0430\u0434 \u0440\u043e\u043b\u0435\u0432\u043e\u0439 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u043e\u0439."}),(0,i.jsx)("br",{}),(0,i.jsx)("small",{children:"\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0438: \u0430\u0443\u0434\u0438\u0442 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 RBAC \u0434\u043b\u044f \u0440\u0430\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u044d\u0441\u043a\u0430\u043b\u0430\u0446\u0438\u0438 \u043f\u0440\u0430\u0432, \u0432\u044b\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u043d\u0435\u0441\u0430\u043d\u043a\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u0440\u043e\u043b\u0435\u0439 \u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u0430."})]}),(0,i.jsx)("td",{children:(0,i.jsx)(c.R,{yamlContent:l.A`
          ---
          apiVersion: audit.k8s.io/v1
          kind: Policy

          # omitStages указан глобально — применяется ко всем правилам, чтобы не логировать раннюю стадию RequestReceived и снизить шум.
          omitStages:
            - "RequestReceived"

          rules:
            # Логирование операций чтения RBAC-объектов (get, list, watch)
            - level: Metadata
              verbs:
                - get
                - list
                - watch
              resources:
                - group: rbac.authorization.k8s.io
                  resources:
                    - roles
                    - rolebindings
                    - clusterroles
                    - clusterrolebindings

            # Логирование операций создания RBAC-объектов и SubjectAccessReview
            - level: Metadata
              verbs:
                - create
              resources:
                - group: rbac.authorization.k8s.io
                  resources:
                    - roles
                    - rolebindings
                    - clusterroles
                    - clusterrolebindings
                - group: authorization.k8s.io
                  resources:
                    - subjectaccessreviews

            # Логирование операций изменения RBAC-объектов
            - level: Metadata
              verbs:
                - update
                - patch
              resources:
                - group: rbac.authorization.k8s.io
                  resources:
                    - roles
                    - rolebindings
                    - clusterroles
                    - clusterrolebindings

            # Логирование удаления RBAC-объектов
            - level: Metadata
              verbs:
                - delete
              resources:
                - group: rbac.authorization.k8s.io
                  resources:
                    - roles
                    - rolebindings
                    - clusterroles
                    - clusterrolebindings
        `})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{children:[(0,i.jsx)("strong",{children:"\u041b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u043d\u0430\u0434 workload."}),(0,i.jsx)("br",{}),(0,i.jsx)("small",{children:"\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0438: \u0430\u0443\u0434\u0438\u0442 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u0434\u0435\u043f\u043b\u043e\u0439\u043c\u0435\u043d\u0442\u043e\u0432, \u0440\u0430\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0438\u043d\u0446\u0438\u0434\u0435\u043d\u0442\u043e\u0432 \u0441 \u0437\u0430\u043f\u0443\u0441\u043a\u043e\u043c/\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435\u043c \u043f\u043e\u0434\u043e\u0432, \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u0440\u0443\u0447\u043d\u044b\u0445 \u0432\u043c\u0435\u0448\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432 \u0432 workload."})]}),(0,i.jsx)("td",{children:(0,i.jsx)(c.R,{yamlContent:l.A`
          ---
          apiVersion: audit.k8s.io/v1
          kind: Policy

          # omitStages глобально — для всех правил, чтобы не логировать RequestReceived.
          omitStages:
            - "RequestReceived"

          rules:
            # Логирование операций чтения workload-объектов
            - level: Metadata
              verbs:
                - get
                - list
                - watch
              resources:
                - group: ""
                  resources:
                    - pods
                - group: apps
                  resources:
                    - deployments
                    - statefulsets
                    - daemonsets
                    - replicasets
                - group: batch
                  resources:
                    - jobs
                    - cronjobs

            # Логирование операций изменения workload-объектов
            - level: Metadata
              verbs:
                - create
                - update
                - patch
              resources:
                - group: ""
                  resources:
                    - pods
                - group: apps
                  resources:
                    - deployments
                    - statefulsets
                    - daemonsets
                    - replicasets
                - group: batch
                  resources:
                    - jobs
                    - cronjobs

            # Логирование удаления workload-объектов
            - level: Metadata
              verbs:
                - delete
              resources:
                - group: ""
                  resources:
                    - pods
                - group: apps
                  resources:
                    - deployments
                    - statefulsets
                    - daemonsets
                    - replicasets
                - group: batch
                  resources:
                    - jobs
                    - cronjobs
        `})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{children:[(0,i.jsx)("strong",{children:"\u041b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u043d\u0430\u0434 Admission \u0440\u0435\u0441\u0443\u0440\u0441\u0430\u043c\u0438."}),(0,i.jsx)("br",{}),(0,i.jsx)("small",{children:"\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0438: \u043e\u0442\u043b\u0430\u0434\u043a\u0430 \u0438 \u0430\u0443\u0434\u0438\u0442 Admission Webhook, \u0440\u0430\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u0441 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430\u043c\u0438 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438/\u043c\u0443\u0442\u0430\u0446\u0438\u0438, \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0437\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c\u0438 admission-\u043f\u0440\u0430\u0432\u0438\u043b."})]}),(0,i.jsx)("td",{children:(0,i.jsx)(c.R,{yamlContent:l.A`
          ---
          apiVersion: audit.k8s.io/v1
          kind: Policy

          # omitStages глобально — для всех правил, чтобы не логировать RequestReceived.
          omitStages:
            - "RequestReceived"

          rules:
            # Логирование операций чтения Admission-ресурсов
            - level: Metadata
              verbs:
                - get
                - list
                - watch
              resources:
                - group: admissionregistration.k8s.io
                  resources:
                    - validatingwebhookconfigurations
                    - mutatingwebhookconfigurations
                    - validatingadmissionpolicies
                    - validatingadmissionpolicybindings

            # Логирование операций изменения Admission-ресурсов
            - level: Metadata
              verbs:
                - create
                - update
                - patch
              resources:
                - group: admissionregistration.k8s.io
                  resources:
                    - validatingwebhookconfigurations
                    - mutatingwebhookconfigurations
                    - validatingadmissionpolicies
                    - validatingadmissionpolicybindings

            # Логирование удаления Admission-ресурсов
            - level: Metadata
              verbs:
                - delete
              resources:
                - group: admissionregistration.k8s.io
                  resources:
                    - validatingwebhookconfigurations
                    - mutatingwebhookconfigurations
                    - validatingadmissionpolicies
                    - validatingadmissionpolicybindings
        `})})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-api-\u0441\u0435\u0440\u0432\u0435\u0440\u0430",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 API-\u0441\u0435\u0440\u0432\u0435\u0440\u0430"}),"\n",(0,i.jsx)(s.p,{children:"\u0414\u043b\u044f \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0438 \u0430\u0443\u0434\u0438\u0442\u0430 \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u0443\u0442\u044c \u043a \u0444\u0430\u0439\u043b\u0443 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438:"}),"\n",(0,i.jsx)(n.A,{language:"bash",children:l.A`
  --audit-policy-file=/etc/kubernetes/audit-policy.yaml
  --audit-log-path=/var/log/kubernetes/audit/audit.log
`}),"\n",(0,i.jsx)(s.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"danger",children:(0,i.jsx)(s.p,{children:"\u0425\u043e\u0447\u0443 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c \u0432\u0430\u0448\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b \u043f\u043e\u043b\u0438\u0442\u0438\u043a \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044e\u0442\u0441\u044f \u0432 API-\u0441\u0435\u0440\u0432\u0435\u0440 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0435\u0433\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0435. \u041f\u043e\u044d\u0442\u043e\u043c\u0443, \u0435\u0441\u043b\u0438 \u0432\u044b \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443, \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c API-\u0441\u0435\u0440\u0432\u0435\u0440, \u0447\u0442\u043e\u0431\u044b \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432\u0441\u0442\u0443\u043f\u0438\u043b\u0438 \u0432 \u0441\u0438\u043b\u0443."})}),"\n",(0,i.jsx)(s.h2,{id:"\u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",children:"\u0417\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"}),"\n",(0,i.jsx)(s.p,{children:"\u0410\u0443\u0434\u0438\u0442 Kubernetes \u2014 \u043c\u043e\u0449\u043d\u044b\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438. \u0413\u0440\u0430\u043c\u043e\u0442\u043d\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u043e\u043b\u0438\u0442\u0438\u043a \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432, \u043c\u0438\u043d\u0438\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0443\u0442\u0435\u0447\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0441\u043e\u0441\u0440\u0435\u0434\u043e\u0442\u043e\u0447\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u043a\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0432\u0430\u0436\u043d\u044b\u0445 \u0441\u043e\u0431\u044b\u0442\u0438\u044f\u0445. \u041f\u0440\u0438\u043c\u0435\u0440\u044b \u043f\u043e\u043b\u0438\u0442\u0438\u043a \u0432 \u0441\u0442\u0430\u0442\u044c\u0435 \u2014 \u043e\u0442\u043f\u0440\u0430\u0432\u043d\u0430\u044f \u0442\u043e\u0447\u043a\u0430, \u043d\u043e \u0430\u0443\u0434\u0438\u0442 \u0432\u0441\u0435\u0433\u0434\u0430 \u043f\u0438\u0448\u0435\u0442\u0441\u044f \u043f\u043e\u0434 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f \u0432\u0430\u0448\u0435\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u0438 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b."}),"\n",(0,i.jsx)(s.h3,{id:"\u0431\u0430\u0437\u043e\u0432\u044b\u0435-\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438",children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u041f\u043e\u0434\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0439 \u0448\u0443\u043c (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043e\u0442 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432)"}),"\n",(0,i.jsx)(s.li,{children:"\u0424\u0438\u043b\u044c\u0442\u0440\u0443\u0439\u0442\u0435 \u043f\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c \u0438 \u0433\u0440\u0443\u043f\u043f\u0430\u043c"}),"\n",(0,i.jsx)(s.li,{children:"\u041b\u043e\u0433\u0438\u0440\u0443\u0439\u0442\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 (\u0441\u0435\u043a\u0440\u0435\u0442\u044b, \u0442\u043e\u043a\u0435\u043d\u044b)"}),"\n",(0,i.jsx)(s.li,{children:"\u0414\u0435\u0442\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0439\u0442\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0432\u0430\u0436\u043d\u044b\u0435 API (CRD, Admission, Webhook)"}),"\n",(0,i.jsx)(s.li,{children:"\u0414\u0435\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0440\u0443\u0439\u0442\u0435 \u043f\u043e\u043b\u0438\u0442\u043a\u0438 \u043d\u0430 \u043c\u043e\u0434\u0443\u043b\u0438 \u0434\u043b\u044f \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f"}),"\n",(0,i.jsxs)(s.li,{children:["\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",(0,i.jsx)(s.code,{children:"omitStages"})," \u0434\u043b\u044f \u0441\u043d\u0438\u0436\u0435\u043d\u0438\u044f \u043e\u0431\u044a\u0451\u043c\u0430 \u043b\u043e\u0433\u043e\u0432"]}),"\n",(0,i.jsx)(s.li,{children:"\u0420\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e \u043f\u0435\u0440\u0435\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0439\u0442\u0435 \u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0439\u0442\u0435 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435"}),"\n",(0,i.jsx)(s.li,{children:"\u0422\u0435\u0441\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443 \u043d\u0430 \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u043c \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435 \u043f\u0435\u0440\u0435\u0434 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435\u043c \u0432 \u043f\u0440\u043e\u0434\u0430\u043a\u0448\u043d"}),"\n",(0,i.jsx)(s.li,{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u0434\u043b\u044f \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0438 \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0430\u0443\u0434\u0438\u0442\u0430 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ELK Stack, Loki, Grafana)"}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\u0431\u043e\u043d\u0443\u0441-\u043f\u0440\u0438\u043c\u0435\u0440-yandex-cloud",children:"\u0411\u043e\u043d\u0443\u0441: \u043f\u0440\u0438\u043c\u0435\u0440 Yandex Cloud"}),"\n",(0,i.jsx)(s.p,{children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 Yandex Cloud \u2014 \u0445\u043e\u0440\u043e\u0448\u0438\u0439 \u0441\u0442\u0430\u0440\u0442 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u0430\u0443\u0434\u0438\u0442\u0430."}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{style:{width:"76%"},children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),(0,i.jsx)("th",{style:{width:"24%"},children:"\u041f\u0440\u0438\u043c\u0435\u0440"})]})}),(0,i.jsx)("tbody",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("strong",{children:"\u041b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u043d\u0430\u0434 \u0440\u043e\u043b\u0435\u0432\u043e\u0439 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u043e\u0439."})}),(0,i.jsx)("td",{children:(0,i.jsx)(c.R,{yamlContent:l.A`
          ${a.k.data.value}
        `})})]})})]})]})}function m(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},41968:(e,s,r)=>{r.d(s,{R:()=>n});var o=r(96540),i=r(68553),t=r(74848);const n=({yamlContent:e,onCloseOtherModals:s})=>{const[r,n]=(0,o.useState)(!1),[l,c]=(0,o.useState)(!1),[d,a]=(0,o.useState)("300px"),u=(0,o.useRef)(null),h=(0,o.useMemo)(()=>e.split("\n").length,[e]);(0,o.useEffect)(()=>{const e=.65*window.innerHeight,s=20*h,r=Math.min(Math.max(s,200),e);a(`${r}px`)},[h]),(0,o.useEffect)(()=>{const e=e=>{"Escape"===e.key&&r&&n(!1)};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[r]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("button",{onClick:()=>{s?.(),n(!0),setTimeout(()=>u.current?.focus(),0)},style:{whiteSpace:"nowrap",padding:"0.35rem 0.75rem",backgroundColor:"#2b2b2b",color:"#fff",border:"1px solid #555",borderRadius:"6px",fontSize:"0.85rem",fontWeight:500,cursor:"pointer"},children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u0440"}),r&&(0,t.jsx)("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:1e3,display:"flex",justifyContent:"center",alignItems:"center"},children:(0,t.jsx)("dialog",{ref:u,open:!0,style:{border:"none",background:"#1e1e1e",borderRadius:"8px",width:"90vw",maxWidth:"960px",maxHeight:"90vh",overflow:"auto",boxShadow:"0 8px 24px rgba(0, 0, 0, 0.5)"},children:(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,t.jsx)("div",{style:{padding:"1rem",fontWeight:"bold",color:"#ccc"},children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438"}),(0,t.jsx)("div",{style:{padding:"0 1rem 1rem",overflow:"auto",maxHeight:"70vh"},children:(0,t.jsx)(i.Ay,{height:d,defaultLanguage:"yaml",defaultValue:e,theme:"vs-dark",options:{readOnly:!0,minimap:{enabled:!1},scrollBeyondLastLine:!1,fontFamily:'"Fira Code", "Courier New", monospace',fontSize:16}})}),(0,t.jsxs)("div",{style:{textAlign:"right",padding:"0.5rem 1rem"},children:[(0,t.jsx)("button",{onClick:()=>{navigator.clipboard.writeText(e).then(()=>{c(!0),setTimeout(()=>c(!1),2e3)})},style:{marginRight:"0.5rem",padding:"0.4rem 0.8rem",background:"#007acc",color:"#fff",border:"none",borderRadius:"4px",fontSize:"0.85rem",cursor:"pointer"},children:"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),(0,t.jsx)("button",{onClick:()=>n(!1),style:{padding:"0.4rem 0.8rem",background:"#444",color:"#fff",border:"none",borderRadius:"4px",fontSize:"0.85rem",cursor:"pointer"},children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})]})]})})}),l&&(0,t.jsx)("div",{style:{position:"fixed",bottom:"20px",right:"20px",backgroundColor:"#007acc",color:"#fff",padding:"0.5rem 1rem",borderRadius:"4px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",fontSize:"0.85rem",zIndex:1100},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043e \u0432 \u0431\u0443\u0444\u0435\u0440 \u043e\u0431\u043c\u0435\u043d\u0430"})]})}}}]);