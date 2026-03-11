"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[1213],{87440(e,s,r){r.r(s),r.d(s,{assets:()=>p,contentTitle:()=>g,default:()=>x,frontMatter:()=>u,metadata:()=>i,toc:()=>h});var i=r(17652),o=r(74848),t=r(28453),n=(r(76331),r(9792),r(57390)),l=r(60513),a=r(41968),c=r(22365),d=r(51430);const u={title:"Kubernetes Audit",description:"Configuring Kubernetes audit policies: logging levels, event filtering, suppressing system noise, and configuration examples for production clusters.",date:new Date("2025-03-23T00:00:00.000Z"),slug:"kubernetes-audit",authors:["dlputilin"],toc_min_heading_level:2,toc_max_heading_level:2,tags:["Kubernetes","Handler-Pipeline","Audit"]},g=void 0,p={authorsImageUrls:[void 0]},h=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"What is Audit",id:"what-is-audit",level:2},{value:"Audit Policy",id:"audit-policy",level:2},{value:"Filtering Parameters",id:"filtering-parameters",level:2},{value:"Logging Levels",id:"logging-levels",level:2},{value:"omitStages Stages",id:"omitstages-stages",level:2},{value:"Audit Policy Examples",id:"audit-policy-examples",level:2},{value:"Suppressing System Noise",id:"suppressing-system-noise",level:3},{value:"Filtering by Users",id:"filtering-by-users",level:3},{value:"Protecting Sensitive Data",id:"protecting-sensitive-data",level:3},{value:"Detailed Logging for Important APIs",id:"detailed-logging-for-important-apis",level:3},{value:"API Server Configuration",id:"api-server-configuration",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Basic Recommendations",id:"basic-recommendations",level:3},{value:"Bonus: Yandex Cloud Example",id:"bonus-yandex-cloud-example",level:2}];function m(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h3",{children:(0,o.jsxs)(s.p,{children:["Kubernetes Audit ",(0,o.jsx)("span",{style:{color:"#1cc5ac"},children:"#"})]})}),"\n",(0,o.jsx)("p",{style:{fontStyle:"italic",fontWeight:600},children:"Continuing the Kubernetes article series in a new format."}),"\n",(0,o.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"flex-start",gap:"30px",marginTop:"1.5rem"},children:[(0,o.jsx)("div",{style:{flex:"1 1 55%",minWidth:"280px"},children:(0,o.jsx)("p",{children:(0,o.jsx)(s.p,{children:"Kubernetes is a powerful interaction interface via gRPC and REST API, but it requires significant effort to ensure security and protection against unauthorized access. One of the key tools for this is the audit system, which allows you to track all actions in the cluster. In this article, we will cover the basics of configuring audit in Kubernetes, its capabilities, and configuration examples that will help you build an effective audit policy for your cluster."})})}),(0,o.jsx)("div",{style:{flex:"1 1 40%",minWidth:"220px",textAlign:"center",marginTop:"-3rem"},children:(0,o.jsx)("img",{src:`${(0,c.I)()}img/blog/audit-policies-promo.png`,alt:"audit",style:{width:"85%",maxWidth:"330px",filter:"drop-shadow(0 0 30px rgba(196, 202, 255, 0.2))",transition:"transform 0.3s ease-in-out"}})})]}),"\n","\n",(0,o.jsx)(s.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"#what-is-audit",children:"What is Audit"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"#audit-policy",children:"Audit Policy"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"#filtering-parameters",children:"Filtering Parameters"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"#logging-levels",children:"Logging Levels"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"#omitstages-stages",children:"omitStages Stages"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"#suppressing-system-noise",children:"Suppressing System Noise"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"#filtering-by-users",children:"Filtering by Users"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"#protecting-sensitive-data",children:"Protecting Sensitive Data"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"#detailed-logging-for-important-apis",children:"Detailed Logging for Important APIs"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"#api-server-configuration",children:"API Server Configuration"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"#conclusion",children:"Conclusion"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"#bonus-yandex-cloud-example",children:"Bonus: Yandex Cloud Example"})}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"what-is-audit",children:"What is Audit"}),"\n",(0,o.jsx)(s.p,{children:"Audit in Kubernetes is a mechanism that records all requests to the API server, including access attempts before the authentication stage. This allows tracking both actions of authorized users and any unauthorized or anonymous requests. This approach is essential for timely detection of security incidents, analysis of cluster activity, and meeting regulatory requirements."}),"\n",(0,o.jsx)(s.p,{children:"Audit events are generated according to a policy described in a configuration file. Each event contains:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"a timestamp."}),"\n",(0,o.jsx)(s.li,{children:"a user identifier (if available)."}),"\n",(0,o.jsx)(s.li,{children:"the requested resource and action."}),"\n",(0,o.jsx)(s.li,{children:"the result (success/failure)."}),"\n",(0,o.jsxs)(s.li,{children:["a unique ",(0,o.jsx)(s.code,{children:"auditID"})," that can be used to trace the chain of calls."]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"Events themselves can be directed to a file, a remote webhook, or a logging system."}),"\n",(0,o.jsx)(s.h2,{id:"audit-policy",children:"Audit Policy"}),"\n",(0,o.jsxs)(s.p,{children:["An audit policy is a YAML file describing a set of rules that determine which events should be logged and with what level of detail. Each rule consists of conditions (filters) and a logging ",(0,o.jsx)(s.code,{children:"level"})," that defines the amount of information to be saved."]}),"\n",(0,o.jsx)(s.p,{children:"The API server processes the list of rules top-down and applies the first matching rule. If no rule matches, the default behavior or event skip is applied."}),"\n",(0,o.jsx)(s.h2,{id:"filtering-parameters",children:"Filtering Parameters"}),"\n",(0,o.jsx)(s.p,{children:"Below are the attributes that can be used to configure event filtering:"}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Parameter"}),(0,o.jsx)("th",{children:"Description"}),(0,o.jsx)("th",{children:"Example Value"})]})}),(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"level"})}),(0,o.jsx)("td",{children:"Detail level"}),(0,o.jsx)("td",{children:(0,o.jsxs)(s.p,{children:[(0,o.jsx)("code",{children:"None"}),", ",(0,o.jsx)("code",{children:"Metadata"}),", ",(0,o.jsx)("code",{children:"Request"}),", ",(0,o.jsx)("code",{children:"RequestResponse"})]})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsxs)(s.p,{children:[(0,o.jsx)("code",{children:"users"}),", ",(0,o.jsx)("code",{children:"userGroups"})]})}),(0,o.jsx)("td",{children:"Filtering by user or group"}),(0,o.jsx)("td",{children:(0,o.jsxs)("code",{children:["system:serviceaccount:default",":my-app"]})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"verbs"})}),(0,o.jsx)("td",{children:"Operations on resources"}),(0,o.jsx)("td",{children:(0,o.jsxs)(s.p,{children:[(0,o.jsx)("code",{children:"get"}),", ",(0,o.jsx)("code",{children:"list"}),", ",(0,o.jsx)("code",{children:"watch"}),", ",(0,o.jsx)("code",{children:"create"}),", ",(0,o.jsx)("code",{children:"update"}),","," ","\n",(0,o.jsx)("code",{children:"patch"}),", ",(0,o.jsx)("code",{children:"delete"}),", ",(0,o.jsx)("code",{children:"deletecollection"}),", ",(0,o.jsx)("code",{children:"proxy"}),","," ","\n",(0,o.jsx)("code",{children:"redirect"}),", ",(0,o.jsx)("code",{children:"head"})]})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"resources"})}),(0,o.jsx)("td",{children:"Target Kubernetes objects"}),(0,o.jsx)("td",{children:(0,o.jsxs)(s.p,{children:[(0,o.jsx)("code",{children:"pods"}),", ",(0,o.jsx)("code",{children:"configmaps"})]})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"namespaces"})}),(0,o.jsx)("td",{children:"Namespace restriction"}),(0,o.jsx)("td",{children:(0,o.jsxs)(s.p,{children:[(0,o.jsx)("code",{children:"default"}),", ",(0,o.jsx)("code",{children:"kube-system"})]})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"nonResourceURLs"})}),(0,o.jsx)("td",{children:"Requests to system paths outside API objects"}),(0,o.jsx)("td",{children:(0,o.jsxs)(s.p,{children:[(0,o.jsx)("code",{children:"/metrics"}),", ",(0,o.jsx)("code",{children:"/healthz"})]})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"omitStages"})}),(0,o.jsx)("td",{children:"Excluding processing stages"}),(0,o.jsx)("td",{children:(0,o.jsxs)(s.p,{children:[(0,o.jsx)("code",{children:"RequestReceived"}),", ",(0,o.jsx)("code",{children:"ResponseStarted"}),", ",(0,o.jsx)("code",{children:"ResponseComplete"}),", ",(0,o.jsx)("code",{children:"Panic"})]})})]})]})]}),"\n",(0,o.jsx)(s.h2,{id:"logging-levels",children:"Logging Levels"}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Value"}),(0,o.jsx)("th",{children:"Description"})]})}),(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"None"})}),(0,o.jsx)("td",{children:"Do not log the event at all"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"Metadata"})}),(0,o.jsx)("td",{children:"Only request metadata is logged (user, resource, verb, etc.)"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"Request"})}),(0,o.jsx)("td",{children:"Metadata and request body are logged. Response is not logged"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"RequestResponse"})}),(0,o.jsx)("td",{children:"Metadata, request body, and response body are logged"})]})]})]}),"\n",(0,o.jsx)(s.h2,{id:"omitstages-stages",children:"omitStages Stages"}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Stage"}),(0,o.jsx)("th",{children:"Description"})]})}),(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"RequestReceived"})}),(0,o.jsx)("td",{children:"Request received by the API server but not yet processed"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"ResponseStarted"})}),(0,o.jsx)("td",{children:"Response has started being sent to the client"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"ResponseComplete"})}),(0,o.jsx)("td",{children:"Request fully completed"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"Panic"})}),(0,o.jsx)("td",{children:"Request processing ended with a fatal error"})]})]})]}),"\n",(0,o.jsx)(s.h2,{id:"audit-policy-examples",children:"Audit Policy Examples"}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"These examples will help you get started with configuring audit in Kubernetes. They cover the main scenarios and allow you to adapt the policy to your needs."}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"suppressing-system-noise",children:"Suppressing System Noise"}),"\n",(0,o.jsx)(s.admonition,{type:"info",children:(0,o.jsx)(s.p,{children:"Suppressing system noise allows you to focus only on events that are important for cluster security. This is especially useful for reducing the number of log entries related to internal Kubernetes processes that are not of interest to most users."})}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{style:{width:"76%"},children:"Description"}),(0,o.jsx)("th",{style:{width:"24%"},children:"Example"})]})}),(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsxs)("td",{children:[(0,o.jsx)("strong",{children:"Suppressing noise from kube-apiserver"}),(0,o.jsx)("br",{}),(0,o.jsx)("small",{children:"Not needed if you want to see all technical requests from the API server itself (e.g., for deep auditing of internal processes). Usually these events are not needed for analyzing user actions."})]}),(0,o.jsx)("td",{children:(0,o.jsx)(a.R,{yamlContent:l.A`
          ---
          apiVersion: audit.k8s.io/v1
          kind: Policy
          rules:

            # 1. Silence GET on /readyz from kube-apiserver
            - level: None
              verbs: ["get"]
              users:
                - "system:apiserver"
              nonResourceURLs:
                - "/readyz"

            # 2. Silence all LIST and WATCH requests from kube-apiserver to key API groups and resources
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

            # 3. Silence CREATE requests from kube-apiserver to the same API groups and resources
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

            # 4. Silence PATCH requests from kube-apiserver to the status subresource in flowcontrol.apiserver.k8s.io/flowschemas
            - level: None
              verbs: ["patch"]
              users:
                - "system:apiserver"
              resources:
                - group: "flowcontrol.apiserver.k8s.io"
                  resources:
                    - "flowschemas/status"

            # 5. Silence UPDATE requests from kube-apiserver to coordination.k8s.io/leases and core/v1/configmaps
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
        `})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsxs)("td",{children:[(0,o.jsx)("strong",{children:"Suppressing noise from kube-controller-manager"}),(0,o.jsx)("br",{}),(0,o.jsx)("small",{children:"Not needed if full auditing of controller operations is required (e.g., for debugging their logic). In most cases, these events only clutter the audit log."})]}),(0,o.jsx)("td",{children:(0,o.jsx)(a.R,{yamlContent:l.A`
          ---
          apiVersion: audit.k8s.io/v1
          kind: Policy
          rules:

            # 1. Silence LIST and WATCH requests from kube-controller-manager for numerous API groups and resources
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

            # 2. Silence GET and UPDATE requests from kube-controller-manager to coordination.k8s.io/leases
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

            # 3. Silence CREATE tokens for ServiceAccount in kube-system from kube-controller-manager
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

            # 4. Silence GET requests to ServiceAccount in kube-system from kube-controller-manager
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
        `})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsxs)("td",{children:[(0,o.jsx)("strong",{children:"Suppressing noise from kube-scheduler"}),(0,o.jsx)("br",{}),(0,o.jsx)("small",{children:"Not needed if you are analyzing the scheduler's operation. For most users, these events are not of interest."})]}),(0,o.jsx)("td",{children:(0,o.jsx)(a.R,{yamlContent:l.A`
          ---
          apiVersion: audit.k8s.io/v1
          kind: Policy
          rules:

            # 1. Silence all LIST and WATCH requests from kube-scheduler
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

            # 2. Silence GET and UPDATE requests from kube-scheduler to coordination.k8s.io/leases
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
        `})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsxs)("td",{children:[(0,o.jsx)("strong",{children:"Suppressing noise from kubelet"}),(0,o.jsx)("br",{}),(0,o.jsx)("small",{children:"Not needed if auditing of all kubelet and node actions is required. Usually these events are only needed for diagnosing node problems."})]}),(0,o.jsx)("td",{children:(0,o.jsx)(a.R,{yamlContent:l.A`
          ---
          apiVersion: audit.k8s.io/v1
          kind: Policy
          rules:

            # 1. Silence LIST and WATCH requests from all nodes (system:nodes)
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

            # 2. Silence GET requests from system:nodes
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

            # 3. Silence UPDATE requests from system:nodes
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

            # 4. Silence PATCH requests from system:nodes
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

            # 5. Silence CREATE requests from system:nodes
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
        `})})]})]})]}),"\n",(0,o.jsx)(s.h3,{id:"filtering-by-users",children:"Filtering by Users"}),"\n",(0,o.jsx)(s.admonition,{type:"info",children:(0,o.jsxs)(s.p,{children:["Event filtering by users and groups allows you to focus on actions that matter for cluster security. For example, tracking the use of system groups such as ",(0,o.jsx)(s.code,{children:"system:masters"}),", which have full access to the cluster."]})}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{style:{width:"76%"},children:"Description"}),(0,o.jsx)("th",{style:{width:"24%"},children:"Example"})]})}),(0,o.jsx)("tbody",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsxs)("strong",{children:["Logging actions of the ",(0,o.jsx)(s.code,{children:"system:masters"})," group"]})}),(0,o.jsx)("td",{children:(0,o.jsx)(a.R,{yamlContent:l.A`
          ---
          apiVersion: audit.k8s.io/v1
          kind: Policy
          rules:
            - level: Metadata
              # omitStages excludes specified audit stages (e.g., RequestReceived)
              # from logging — this reduces noise.
              omitStages:
                - "RequestReceived"
              # Filtering by user group
              userGroups:
                - "system:masters"
          `})})]})})]}),"\n",(0,o.jsx)(s.h3,{id:"protecting-sensitive-data",children:"Protecting Sensitive Data"}),"\n",(0,o.jsx)(s.admonition,{title:"Important!",type:"warning",children:(0,o.jsx)(s.p,{children:"Protecting sensitive data is critical in Kubernetes, especially if you are not using external secrets management solutions such as HashiCorp Vault or Sealed Secrets."})}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{style:{width:"76%"},children:"Description"}),(0,o.jsx)("th",{style:{width:"24%"},children:"Example"})]})}),(0,o.jsx)("tbody",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("strong",{children:"Logging actions with secrets and tokens."})}),(0,o.jsx)("td",{children:(0,o.jsx)(a.R,{yamlContent:l.A`
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
          `})})]})})]}),"\n",(0,o.jsx)(s.h3,{id:"detailed-logging-for-important-apis",children:"Detailed Logging for Important APIs"}),"\n",(0,o.jsx)(s.admonition,{title:"Important!",type:"warning",children:(0,o.jsx)(s.p,{children:"Kubernetes also has plenty of resources that can be used for privilege escalation \u2014 for example, role-based policies (RBAC), workload resources (Deployments, Pods), and Admission resources. Logging actions on these resources allows you to track changes and identify potential security threats."})}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{style:{width:"76%"},children:"Description"}),(0,o.jsx)("th",{style:{width:"24%"},children:"Example"})]})}),(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsxs)("td",{children:[(0,o.jsx)("strong",{children:"Logging actions on role-based policies."}),(0,o.jsx)("br",{}),(0,o.jsx)("small",{children:"Scenarios: auditing RBAC changes to investigate privilege escalation, detecting unauthorized role and access changes."})]}),(0,o.jsx)("td",{children:(0,o.jsx)(a.R,{yamlContent:l.A`
          ---
          apiVersion: audit.k8s.io/v1
          kind: Policy

          # omitStages is specified globally — applies to all rules to avoid logging the early RequestReceived stage and reduce noise.
          omitStages:
            - "RequestReceived"

          rules:
            # Logging read operations on RBAC objects (get, list, watch)
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

            # Logging create operations on RBAC objects and SubjectAccessReview
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

            # Logging update operations on RBAC objects
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

            # Logging deletion of RBAC objects
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
        `})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsxs)("td",{children:[(0,o.jsx)("strong",{children:"Logging actions on workloads."}),(0,o.jsx)("br",{}),(0,o.jsx)("small",{children:"Scenarios: auditing deployment changes, investigating incidents with pod creation/deletion, tracking manual interventions in workloads."})]}),(0,o.jsx)("td",{children:(0,o.jsx)(a.R,{yamlContent:l.A`
          ---
          apiVersion: audit.k8s.io/v1
          kind: Policy

          # omitStages globally — for all rules, to avoid logging RequestReceived.
          omitStages:
            - "RequestReceived"

          rules:
            # Logging read operations on workload objects
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

            # Logging update operations on workload objects
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

            # Logging deletion of workload objects
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
        `})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsxs)("td",{children:[(0,o.jsx)("strong",{children:"Logging actions on Admission resources."}),(0,o.jsx)("br",{}),(0,o.jsx)("small",{children:"Scenarios: debugging and auditing Admission Webhooks, investigating issues with validation/mutation policies, controlling changes to admission rules."})]}),(0,o.jsx)("td",{children:(0,o.jsx)(a.R,{yamlContent:l.A`
          ---
          apiVersion: audit.k8s.io/v1
          kind: Policy

          # omitStages globally — for all rules, to avoid logging RequestReceived.
          omitStages:
            - "RequestReceived"

          rules:
            # Logging read operations on Admission resources
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

            # Logging update operations on Admission resources
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

            # Logging deletion of Admission resources
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
        `})})]})]})]}),"\n",(0,o.jsx)(s.h2,{id:"api-server-configuration",children:"API Server Configuration"}),"\n",(0,o.jsx)(s.p,{children:"To enable audit, specify the path to the policy file:"}),"\n",(0,o.jsx)(n.A,{language:"bash",children:l.A`
  --audit-policy-file=/etc/kubernetes/audit-policy.yaml
  --audit-log-path=/var/log/kubernetes/audit/audit.log
`}),"\n",(0,o.jsx)(s.admonition,{title:"Note!",type:"danger",children:(0,o.jsx)(s.p,{children:"Please note that policy configuration files are loaded into the API server only at startup. Therefore, if you change the policy, you will need to restart the API server for the changes to take effect."})}),"\n",(0,o.jsx)(s.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(s.p,{children:"Kubernetes audit is a powerful security tool. Proper policy configuration allows you to track actions of users and services, minimize data leaks, and focus on critically important events. The policy examples in this article are a starting point, but audit policies are always written to meet the requirements of your company and infrastructure."}),"\n",(0,o.jsx)(s.h3,{id:"basic-recommendations",children:"Basic Recommendations"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Suppress system noise (e.g., from internal components)"}),"\n",(0,o.jsx)(s.li,{children:"Filter by users and groups"}),"\n",(0,o.jsx)(s.li,{children:"Log only metadata for sensitive data (secrets, tokens)"}),"\n",(0,o.jsx)(s.li,{children:"Add detailed logging only for important APIs (CRD, Admission, Webhook)"}),"\n",(0,o.jsx)(s.li,{children:"Decompose policies into modules for easier management"}),"\n",(0,o.jsxs)(s.li,{children:["Use ",(0,o.jsx)(s.code,{children:"omitStages"})," to reduce log volume"]}),"\n",(0,o.jsx)(s.li,{children:"Regularly review and update the policy as the cluster evolves"}),"\n",(0,o.jsx)(s.li,{children:"Test the policy on a staging cluster before applying to production"}),"\n",(0,o.jsx)(s.li,{children:"Use tools for audit analysis and visualization (e.g., ELK Stack, Loki, Grafana)"}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"bonus-yandex-cloud-example",children:"Bonus: Yandex Cloud Example"}),"\n",(0,o.jsx)(s.p,{children:"The Yandex Cloud policy example is a good starting point for creating your own audit policy."}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{style:{width:"76%"},children:"Description"}),(0,o.jsx)("th",{style:{width:"24%"},children:"Example"})]})}),(0,o.jsx)("tbody",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("strong",{children:"Logging actions on role-based policies."})}),(0,o.jsx)("td",{children:(0,o.jsx)(a.R,{yamlContent:l.A`
          ${d.k.data.value}
        `})})]})})]})]})}function x(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},41968(e,s,r){r.d(s,{R:()=>l});var i=r(96540),o=r(68553),t=r(21312),n=r(74848);const l=({yamlContent:e,onCloseOtherModals:s})=>{const[r,l]=(0,i.useState)(!1),[a,c]=(0,i.useState)(!1),[d,u]=(0,i.useState)("300px"),g=(0,i.useRef)(null),p=(0,i.useMemo)(()=>e.split("\n").length,[e]);(0,i.useEffect)(()=>{const e=.65*window.innerHeight,s=20*p,r=Math.min(Math.max(s,200),e);u(`${r}px`)},[p]),(0,i.useEffect)(()=>{const e=e=>{"Escape"===e.key&&r&&l(!1)};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[r]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{onClick:()=>{s?.(),l(!0),setTimeout(()=>g.current?.focus(),0)},style:{whiteSpace:"nowrap",padding:"0.35rem 0.75rem",backgroundColor:"#2b2b2b",color:"#fff",border:"1px solid #555",borderRadius:"6px",fontSize:"0.85rem",fontWeight:500,cursor:"pointer"},children:(0,t.T)({id:"yaml.openExample",message:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u0440"})}),r&&(0,n.jsx)("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:1e3,display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsx)("dialog",{ref:g,open:!0,style:{border:"none",background:"#1e1e1e",borderRadius:"8px",width:"90vw",maxWidth:"960px",maxHeight:"90vh",overflow:"auto",boxShadow:"0 8px 24px rgba(0, 0, 0, 0.5)"},children:(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,n.jsx)("div",{style:{padding:"1rem",fontWeight:"bold",color:"#ccc"},children:(0,t.T)({id:"yaml.policyExample",message:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438"})}),(0,n.jsx)("div",{style:{padding:"0 1rem 1rem",overflow:"auto",maxHeight:"70vh"},children:(0,n.jsx)(o.Ay,{height:d,defaultLanguage:"yaml",defaultValue:e,theme:"vs-dark",options:{readOnly:!0,minimap:{enabled:!1},scrollBeyondLastLine:!1,fontFamily:'"Fira Code", "Courier New", monospace',fontSize:16}})}),(0,n.jsxs)("div",{style:{textAlign:"right",padding:"0.5rem 1rem"},children:[(0,n.jsx)("button",{onClick:()=>{navigator.clipboard.writeText(e).then(()=>{c(!0),setTimeout(()=>c(!1),2e3)})},style:{marginRight:"0.5rem",padding:"0.4rem 0.8rem",background:"#007acc",color:"#fff",border:"none",borderRadius:"4px",fontSize:"0.85rem",cursor:"pointer"},children:(0,t.T)({id:"yaml.copy",message:"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})}),(0,n.jsx)("button",{onClick:()=>l(!1),style:{padding:"0.4rem 0.8rem",background:"#444",color:"#fff",border:"none",borderRadius:"4px",fontSize:"0.85rem",cursor:"pointer"},children:(0,t.T)({id:"yaml.close",message:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})})]})]})})}),a&&(0,n.jsx)("div",{style:{position:"fixed",bottom:"20px",right:"20px",backgroundColor:"#007acc",color:"#fff",padding:"0.5rem 1rem",borderRadius:"4px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",fontSize:"0.85rem",zIndex:1100},children:(0,t.T)({id:"yaml.copiedToClipboard",message:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043e \u0432 \u0431\u0443\u0444\u0435\u0440 \u043e\u0431\u043c\u0435\u043d\u0430"})})]})}},51430(e,s,r){r.d(s,{k:()=>i});const i={data:{value:r(60513).A`
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
    `}}},22365(e,s,r){r.d(s,{I:()=>i});const i=()=>"/"},17652(e){e.exports=JSON.parse('{"permalink":"/en/blog/kubernetes-audit","source":"@site/i18n/en/docusaurus-plugin-content-blog/kubernetes-audit.mdx","title":"Kubernetes Audit","description":"Configuring Kubernetes audit policies: logging levels, event filtering, suppressing system noise, and configuration examples for production clusters.","date":"2025-03-23T00:00:00.000Z","tags":[{"inline":true,"label":"Kubernetes","permalink":"/en/blog/tags/kubernetes"},{"inline":true,"label":"Handler-Pipeline","permalink":"/en/blog/tags/handler-pipeline"},{"inline":true,"label":"Audit","permalink":"/en/blog/tags/audit"}],"readingTime":13.84,"hasTruncateMarker":true,"authors":[{"name":"Putilin Dmitry Lvovich","title":"Architecturer","url":"https://t.me/bezumniy_kot_work","socials":{"github":"https://github.com/PRO-Robotech"},"imageURL":"https://avatars.githubusercontent.com/u/107264732?v=4","key":"dlputilin","page":null}],"frontMatter":{"title":"Kubernetes Audit","description":"Configuring Kubernetes audit policies: logging levels, event filtering, suppressing system noise, and configuration examples for production clusters.","date":"2025-03-23T00:00:00.000Z","slug":"kubernetes-audit","authors":["dlputilin"],"toc_min_heading_level":2,"toc_max_heading_level":2,"tags":["Kubernetes","Handler-Pipeline","Audit"]},"unlisted":false,"prevItem":{"title":"Kubernetes pods/exec","permalink":"/en/blog/kubernetes-pods-exec"},"nextItem":{"title":"Kubernetes The Hard Way","permalink":"/en/blog/kubernetes-the-hard-way"}}')}}]);