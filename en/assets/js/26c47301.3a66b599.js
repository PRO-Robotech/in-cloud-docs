"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[7873],{91522(e,s,t){t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>p,default:()=>v,frontMatter:()=>l,metadata:()=>o,toc:()=>g});const o=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/auditPolicy","title":"auditPolicy","description":"The audit policy defines which requests to the API Server are logged and with what level of detail. The file is loaded at kube-apiserver startup via --audit-policy-file; changes require a restart.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubeAPI/auditPolicy.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/auditPolicy","permalink":"/en/tech-docs/kubernetes/components/kubeAPI/auditPolicy","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=t(74848),u=t(28453),i=t(60513),n=t(57390),a=(t(68741),t(44349)),c=t(51430);const l={},p=void 0,d={},g=[];function k(e){const s={blockquote:"blockquote",code:"code",li:"li",p:"p",ul:"ul",...(0,u.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["The audit policy defines which requests to the API Server are logged and with what level of detail. The file is loaded at kube-apiserver startup via ",(0,r.jsx)(s.code,{children:"--audit-policy-file"}),"; changes require a restart."]}),"\n"]}),"\n",(0,r.jsx)("h3",{children:"Component configuration steps"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Creating the working directory"}),"\n",(0,r.jsx)(s.li,{children:"Preparing the audit policy"}),"\n"]}),"\n",(0,r.jsx)("h3",{children:"Creating the working directory"}),"\n",(0,r.jsx)(n.A,{language:"bash",children:i.A`
  mkdir -p /var/log/kubernetes/audit
`}),"\n",(0,r.jsx)("h3",{children:"Preparing the audit policy"}),"\n",(0,r.jsx)(n.A,{language:"bash",children:i.A`
    cat <<EOF > ${a.M.kubernetesAPIAuditPolicyPath.value}
    ${c.k.data.value}
    EOF
  `})]})}function v(e={}){const{wrapper:s}={...(0,u.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(k,{...e})}):k(e)}},68741(e,s,t){t.d(s,{M:()=>o});const o={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.12"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},51430(e,s,t){t.d(s,{k:()=>o});const o={data:{value:t(60513).A`
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
    `}}}}]);