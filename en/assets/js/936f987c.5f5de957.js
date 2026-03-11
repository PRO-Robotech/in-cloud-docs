"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[5074],{28994(e,s,n){n.r(s),n.d(s,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>t,toc:()=>h});var t=n(97945),o=n(74848),r=n(28453),i=(n(76331),n(9792),n(57390)),a=n(60513),c=(n(41968),n(22365));n(51430);const l={title:"Kubernetes pods/exec",description:"The pods/exec transition to WebSocket (GET instead of POST), impact on RBAC and permission risks in Kubernetes.",date:new Date("2025-08-18T00:00:00.000Z"),slug:"kubernetes-pods-exec",authors:["dlputilin"],toc_min_heading_level:2,toc_max_heading_level:2,tags:["Kubernetes","RBAC","Security","pods/exec"]},d=void 0,u={authorsImageUrls:[void 0]},h=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"What changed",id:"what-changed",level:2},{value:"Impact on kubectl and RBAC",id:"impact-on-kubectl-and-rbac",level:2},{value:"Testing on Minikube",id:"testing-on-minikube",level:2},{value:"Cluster and contexts",id:"cluster-and-contexts",level:3},{value:"cluster-admin and anonymous",id:"cluster-admin-and-anonymous",level:3},{value:"Pod and exec verification",id:"pod-and-exec-verification",level:3},{value:"exec: cluster-admin vs anonymous",id:"exec-cluster-admin-vs-anonymous",level:3},{value:"Adding <code>get</code> access only",id:"adding-get-access-only",level:3},{value:"Demonstration (kubectl 1.33.3 vs 1.29.0)",id:"demonstration-kubectl-1333-vs-1290",level:2},{value:"Conclusions and recommendations",id:"conclusions-and-recommendations",level:2}];function p(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h3",{children:(0,o.jsxs)(s.p,{children:["Kubernetes pods/exec ",(0,o.jsx)("span",{style:{color:"#1cc5ac"},children:"#"})," "]})}),"\n",(0,o.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"space-between",gap:"30px",marginTop:"1.5rem"},children:[(0,o.jsx)("div",{style:{flex:"1 1 58%",minWidth:"280px",maxWidth:"620px"},children:(0,o.jsx)("p",{children:(0,o.jsxs)(s.p,{children:[(0,o.jsx)("code",{children:"pods/exec"})," is a convenient way to execute commands inside a container for debugging and administration. But\nhere's a challenge right off the bat: how safe do you think the following Kubernetes role is \u2014 one that could be granted\nto any user, assuming the absurd scenario that the Secret resource is not used in the cluster?"]})})}),(0,o.jsx)("div",{className:"execImageWrapper",children:(0,o.jsx)("img",{src:`${(0,c.I)()}img/blog/pod-exec-promo.png`,alt:"pods/exec audit",style:{width:"100%",maxWidth:"330px",filter:"drop-shadow(0 0 30px rgba(196, 202, 255, 0.2))",transition:"transform 0.3s ease-in-out"}})})]}),"\n",(0,o.jsx)(i.A,{language:"bash",children:a.A`
  ---
  apiVersion: rbac.authorization.k8s.io/v1
  kind: ClusterRole
  metadata:
    name: test-role
  rules:
    - apiGroups: [""]
      resources: ["*"]
      verbs: ["get"]
`}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(s.p,{children:['If you answered "safe," you\'re not alone \u2014 and you would have granted ',(0,o.jsx)("code",{children:"pods/exec"})," access to any\nuser in the cluster, provided you also created a ClusterRoleBinding on top of it."]})}),"\n","\n",(0,o.jsx)(s.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"#what-changed",children:"What changed"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"#impact-on-kubectl-and-rbac",children:"Impact on kubectl and RBAC"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"#testing-on-minikube",children:"Testing on Minikube"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"#demonstration-kubectl-1333-vs-1290",children:"Demonstration (kubectl 1.33.3 vs 1.29.0)"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"#conclusions-and-recommendations",children:"Conclusions and recommendations"})}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"what-changed",children:"What changed"}),"\n",(0,o.jsxs)(s.p,{children:["In reality \u2014 nothing. The issue has been around for over 7 years, yet few people are aware of it. The problem is that a widespread belief has taken root among knowledgeable engineers that access to ",(0,o.jsx)("code",{children:"pods/exec"})," can be granted with a simple rule like this:"]}),"\n",(0,o.jsx)(i.A,{language:"bash",children:a.A`
  ---
  apiVersion: rbac.authorization.k8s.io/v1
  kind: ClusterRole
  metadata:
    name: test-role
  rules:
    - apiGroups: [""]
      resources: ["pods/exec"]
      verbs: ["create"]
`}),"\n",(0,o.jsx)(s.p,{children:"In principle, you would be right, but as practice has shown \u2014 that's not the whole story =)"}),"\n",(0,o.jsxs)(s.p,{children:["The first mention of the issue was found with the help of the folks from ",(0,o.jsx)(s.a,{href:"https://t.me/ever_secure",children:"ever_secure"}),":"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.a,{href:"https://stackoverflow.com/questions/48118125/kubernetes-rbac-role-verbs-to-exec-to-pod",children:"kubernetes RBAC role verbs to exec to pod"})}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:'I had to add the verb "get" to my pods/exec section as well since the client library I\'m using is doing an http GET to negotiate a websocket first.\nUsing kubectl it sends an http POST and requires the "create" verb in that case.\nIt may be worth updating this example to include the "get" verb.'}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["So, as early as 7 years ago there was a warning sign: ",(0,o.jsx)(s.code,{children:"kubectl exec"})," can work not only via POST, but also via GET."]}),"\n",(0,o.jsxs)(s.p,{children:["This was definitively confirmed after ",(0,o.jsx)(s.code,{children:"kubectl"})," transitioned to WebSocket in version 1.31, where ",(0,o.jsx)(s.code,{children:"kubectl exec"})," now uses ",(0,o.jsx)(s.strong,{children:"GET"})," to establish the connection instead of ",(0,o.jsx)(s.strong,{children:"POST"})," by default."]}),"\n",(0,o.jsxs)(s.p,{children:["Source: ",(0,o.jsx)(s.a,{href:"https://kubernetes.io/blog/2024/08/20/websockets-transition/",children:"Streaming Transitions from SPDY to WebSockets"})]}),"\n",(0,o.jsx)(s.h2,{id:"impact-on-kubectl-and-rbac",children:"Impact on kubectl and RBAC"}),"\n",(0,o.jsxs)(s.p,{children:["To understand why ",(0,o.jsx)(s.code,{children:"get"})," is now required, you need to understand how HTTP methods map to Kubernetes verbs:"]}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"HTTP method"}),(0,o.jsx)("th",{children:"Kubernetes verb"})]})}),(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"GET"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"get"})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"POST"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"create"})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"PUT"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"update"})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"DELETE"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"delete"})})]})]})]}),"\n",(0,o.jsxs)(s.p,{children:["Some clients use GET to establish a WebSocket connection with pods/exec rather than POST, as kubectl used to. Therefore, for exec to work, not only ",(0,o.jsx)(s.code,{children:"create"})," but also ",(0,o.jsx)(s.code,{children:"get"})," may be required in RBAC."]}),"\n",(0,o.jsx)(s.h2,{id:"testing-on-minikube",children:"Testing on Minikube"}),"\n",(0,o.jsx)(s.h3,{id:"cluster-and-contexts",children:"Cluster and contexts"}),"\n",(0,o.jsx)(i.A,{language:"bash",children:a.A`
  minikube -p 13201 start --kubernetes-version=1.32.1 --ssh-port=13201
`}),"\n",(0,o.jsx)(i.A,{language:"bash",children:a.A`
  kubectl get nodes
`}),"\n",(0,o.jsx)(i.A,{language:"bash",children:a.A`
  NAME     STATUS   ROLES           AGE   VERSION
  13201    Ready    control-plane   60s   v1.32.1
`}),"\n",(0,o.jsx)(s.h3,{id:"cluster-admin-and-anonymous",children:"cluster-admin and anonymous"}),"\n",(0,o.jsx)(i.A,{language:"bash",children:a.A`
  export KUBECONFIG=cluster-admin
  minikube -p 13201 update-context
`}),"\n",(0,o.jsx)(i.A,{language:"bash",children:a.A`
  export KUBECONFIG=anonymous-view
  minikube -p 13201 update-context
  sed -i '/^[[:space:]]*users:/,$d' anonymous-view
`}),"\n",(0,o.jsx)(s.h3,{id:"pod-and-exec-verification",children:"Pod and exec verification"}),"\n",(0,o.jsx)(i.A,{language:"bash",children:a.A`
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
`}),"\n",(0,o.jsx)(s.h3,{id:"exec-cluster-admin-vs-anonymous",children:"exec: cluster-admin vs anonymous"}),"\n",(0,o.jsx)(i.A,{language:"bash",children:a.A`
  kubectl --kubeconfig=cluster-admin exec -it nginx -- sh
`}),"\n",(0,o.jsx)(i.A,{language:"bash",children:a.A`
  # ls -al
  total 76
  drwxr-xr-x 1 root root 4096 Aug 18 15:09 .
  drwxr-xr-x 1 root root 4096 Aug 18 15:09 ..
`}),"\n",(0,o.jsx)(i.A,{language:"bash",children:a.A`
  kubectl --kubeconfig=anonymous-view exec -it nginx -- sh
`}),"\n",(0,o.jsx)(i.A,{language:"bash",children:a.A`
  Error from server (Forbidden): pods "nginx" is forbidden: User "system:anonymous" cannot get resource "pods" in API group "" in the namespace "default"
`}),"\n",(0,o.jsxs)(s.h3,{id:"adding-get-access-only",children:["Adding ",(0,o.jsx)("code",{children:"get"})," access only"]}),"\n",(0,o.jsx)(s.admonition,{type:"note",children:(0,o.jsxs)(s.p,{children:["Please note that along with ",(0,o.jsx)(s.code,{children:"pods/exec"}),", access to ",(0,o.jsx)(s.code,{children:"pods"})," is also added, otherwise ",(0,o.jsx)(s.code,{children:"exec"})," will not work."]})}),"\n",(0,o.jsx)(i.A,{language:"bash",children:a.A`
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
  drwxr-xr-x 1 root root 4096 Aug 18 15:09 .
  drwxr-xr-x 1 root root 4096 Aug 18 15:09 ..
  -rwxr-xr-x 1 root root    0 Aug 18 15:09 .dockerenv
  drwxr-xr-x 2 root root 4096 Mar 26 2019 bin
  drwxr-xr-x 2 root root 4096 Feb  3 2019 boot
  drwxr-xr-x 5 root root  360 Aug 18 15:09 dev
`}),"\n",(0,o.jsx)(s.h2,{id:"demonstration-kubectl-1333-vs-1290",children:"Demonstration (kubectl 1.33.3 vs 1.29.0)"}),"\n",(0,o.jsxs)(n,{open:!0,children:[(0,o.jsx)("summary",{children:(0,o.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,o.jsx)("p",{style:{marginBottom:0},children:"kubectl v1.33.3"})})}),(0,o.jsx)(i.A,{language:"bash",children:a.A`
  kubectl version
  Client Version: v1.33.3
`}),(0,o.jsx)(i.A,{language:"bash",children:a.A`
  kubectl exec -it nginx -- sh
`}),(0,o.jsx)(i.A,{language:"bash",children:a.A`
  ****** verb="GET" url="/api/v1/namespaces/default/pods/incloud-web-incloud-web-chart-d99877d74-27tcd/exec?command=sh&container=nginx&stdin=true&stdout=true&tty=true" ******
`}),(0,o.jsx)(i.A,{language:"bash",children:a.A`
  / $ ls -al
  total 76
  drwxr-xr-x 1 root root 4096 Aug 16 20:43 .
  drwxr-xr-x 1 root root 4096 Aug 16 20:43 ..
  drwxr-xr-x 2 root root 4096 Jul 15 10:42 bin
  drwxr-xr-x 5 root root  360 Aug 16 20:43 dev
`})]}),"\n",(0,o.jsxs)(n,{open:!0,children:[(0,o.jsx)("summary",{children:(0,o.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,o.jsx)("p",{style:{marginBottom:0},children:"kubectl v1.29.0"})})}),(0,o.jsx)(i.A,{language:"bash",children:a.A`
  kubectl version
  Client Version: v1.29.0
`}),(0,o.jsx)(i.A,{language:"bash",children:a.A`
  kubectl exec -it nginx -- sh
`}),(0,o.jsx)(i.A,{language:"bash",children:a.A`
  ****** POST https://api/v1/namespaces/default/pods/incloud-web-incloud-web-chart-d99877d74-27tcd/exec?command=sh&container=nginx&stdin=true&stdout=true&tty=true ******
`}),(0,o.jsx)(i.A,{language:"bash",children:a.A`
  Error from server (Forbidden): pods "nginx" is forbidden:
  User "system:anonymous" cannot get resource "pods" in API group "" in the namespace "default"
`})]}),"\n",(0,o.jsx)(s.admonition,{title:"Warning!",type:"danger",children:(0,o.jsxs)(s.p,{children:["In this example, we wanted to demonstrate the behavior of ",(0,o.jsx)(s.code,{children:"kubectl exec"})," across different client versions. With the same cluster and role configuration. As you can see, the behavior differs, and depending on the client version, a different RBAC configuration may be required."]})}),"\n",(0,o.jsx)(s.hr,{}),"\n",(0,o.jsx)("h3",{children:"Kubernetes Audit"}),"\n",(0,o.jsx)(i.A,{language:"bash",children:a.A`
  {
    "annotations": {
      "authorization.k8s.io/decision": "allow",
      "authorization.k8s.io/reason": "RBAC: allowed by ClusterRoleBinding \\"anonymous-view-all\\" of ClusterRole \\"anonymous-view\\" to User \\"system:anonymous\\""
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
    "requestURI": "/api/v1/namespaces/default/pods/nginx/exec?...",
    "responseStatus": {
      "code": 101,
      "metadata": {}
    },
    "sourceIPs": ["10.0.0.33"],
    "stage": "ResponseComplete",
    "stageTimestamp": "2025-08-15T16:46:50.296700Z",
    "user": {
      "groups": ["system:unauthenticated"],
      "username": "system:anonymous"
    },
    "userAgent": "Mozilla/5.0 (...) Safari/537.36",
    "verb": "get"
  }
`}),"\n",(0,o.jsx)(s.h2,{id:"conclusions-and-recommendations",children:"Conclusions and recommendations"}),"\n",(0,o.jsx)(s.p,{children:"Unfortunately, you can't know everything, but you can try to minimize the risks."}),"\n",(0,o.jsxs)(s.p,{children:["Review your RBAC \u2014 don't blindly trust roles with ",(0,o.jsx)(s.code,{children:"*"})," in ",(0,o.jsx)(s.code,{children:"resources"})," and ",(0,o.jsx)(s.code,{children:"verbs"}),"."]}),"\n",(0,o.jsx)(i.A,{language:"bash",children:a.A`
  ---
  apiVersion: rbac.authorization.k8s.io/v1
  kind: ClusterRole
  metadata:
    name: test-role
  rules:
    - apiGroups: [""]
      resources: ["pods"]
      verbs: ["get"]
    - apiGroups: [""]
      resources: ["pods/exec"]
      verbs: ["create", "get"]
`}),"\n",(0,o.jsx)(s.admonition,{title:"Dangerous pattern",type:"danger",children:(0,o.jsxs)(s.p,{children:["The best policies are explicit. Do not use ",(0,o.jsx)(s.code,{children:"*"})," in ",(0,o.jsx)(s.code,{children:"resources"})," or ",(0,o.jsx)(s.code,{children:"verbs"}),". This will save you from unexpected surprises."]})})]})}function g(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},41968(e,s,n){n.d(s,{R:()=>a});var t=n(96540),o=n(68553),r=n(21312),i=n(74848);const a=({yamlContent:e,onCloseOtherModals:s})=>{const[n,a]=(0,t.useState)(!1),[c,l]=(0,t.useState)(!1),[d,u]=(0,t.useState)("300px"),h=(0,t.useRef)(null),p=(0,t.useMemo)(()=>e.split("\n").length,[e]);(0,t.useEffect)(()=>{const e=.65*window.innerHeight,s=20*p,n=Math.min(Math.max(s,200),e);u(`${n}px`)},[p]),(0,t.useEffect)(()=>{const e=e=>{"Escape"===e.key&&n&&a(!1)};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[n]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("button",{onClick:()=>{s?.(),a(!0),setTimeout(()=>h.current?.focus(),0)},style:{whiteSpace:"nowrap",padding:"0.35rem 0.75rem",backgroundColor:"#2b2b2b",color:"#fff",border:"1px solid #555",borderRadius:"6px",fontSize:"0.85rem",fontWeight:500,cursor:"pointer"},children:(0,r.T)({id:"yaml.openExample",message:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u0440"})}),n&&(0,i.jsx)("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:1e3,display:"flex",justifyContent:"center",alignItems:"center"},children:(0,i.jsx)("dialog",{ref:h,open:!0,style:{border:"none",background:"#1e1e1e",borderRadius:"8px",width:"90vw",maxWidth:"960px",maxHeight:"90vh",overflow:"auto",boxShadow:"0 8px 24px rgba(0, 0, 0, 0.5)"},children:(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,i.jsx)("div",{style:{padding:"1rem",fontWeight:"bold",color:"#ccc"},children:(0,r.T)({id:"yaml.policyExample",message:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438"})}),(0,i.jsx)("div",{style:{padding:"0 1rem 1rem",overflow:"auto",maxHeight:"70vh"},children:(0,i.jsx)(o.Ay,{height:d,defaultLanguage:"yaml",defaultValue:e,theme:"vs-dark",options:{readOnly:!0,minimap:{enabled:!1},scrollBeyondLastLine:!1,fontFamily:'"Fira Code", "Courier New", monospace',fontSize:16}})}),(0,i.jsxs)("div",{style:{textAlign:"right",padding:"0.5rem 1rem"},children:[(0,i.jsx)("button",{onClick:()=>{navigator.clipboard.writeText(e).then(()=>{l(!0),setTimeout(()=>l(!1),2e3)})},style:{marginRight:"0.5rem",padding:"0.4rem 0.8rem",background:"#007acc",color:"#fff",border:"none",borderRadius:"4px",fontSize:"0.85rem",cursor:"pointer"},children:(0,r.T)({id:"yaml.copy",message:"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})}),(0,i.jsx)("button",{onClick:()=>a(!1),style:{padding:"0.4rem 0.8rem",background:"#444",color:"#fff",border:"none",borderRadius:"4px",fontSize:"0.85rem",cursor:"pointer"},children:(0,r.T)({id:"yaml.close",message:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})})]})]})})}),c&&(0,i.jsx)("div",{style:{position:"fixed",bottom:"20px",right:"20px",backgroundColor:"#007acc",color:"#fff",padding:"0.5rem 1rem",borderRadius:"4px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",fontSize:"0.85rem",zIndex:1100},children:(0,r.T)({id:"yaml.copiedToClipboard",message:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043e \u0432 \u0431\u0443\u0444\u0435\u0440 \u043e\u0431\u043c\u0435\u043d\u0430"})})]})}},51430(e,s,n){n.d(s,{k:()=>t});const t={data:{value:n(60513).A`
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
    `}}},22365(e,s,n){n.d(s,{I:()=>t});const t=()=>"/"},97945(e){e.exports=JSON.parse('{"permalink":"/en/blog/kubernetes-pods-exec","source":"@site/i18n/en/docusaurus-plugin-content-blog/kubernetes-exec.mdx","title":"Kubernetes pods/exec","description":"The pods/exec transition to WebSocket (GET instead of POST), impact on RBAC and permission risks in Kubernetes.","date":"2025-08-18T00:00:00.000Z","tags":[{"inline":true,"label":"Kubernetes","permalink":"/en/blog/tags/kubernetes"},{"inline":true,"label":"RBAC","permalink":"/en/blog/tags/rbac"},{"inline":true,"label":"Security","permalink":"/en/blog/tags/security"},{"inline":true,"label":"pods/exec","permalink":"/en/blog/tags/pods-exec"}],"readingTime":7.51,"hasTruncateMarker":true,"authors":[{"name":"Putilin Dmitry Lvovich","title":"Architecturer","url":"https://t.me/bezumniy_kot_work","socials":{"github":"https://github.com/PRO-Robotech"},"imageURL":"https://avatars.githubusercontent.com/u/107264732?v=4","key":"dlputilin","page":null}],"frontMatter":{"title":"Kubernetes pods/exec","description":"The pods/exec transition to WebSocket (GET instead of POST), impact on RBAC and permission risks in Kubernetes.","date":"2025-08-18T00:00:00.000Z","slug":"kubernetes-pods-exec","authors":["dlputilin"],"toc_min_heading_level":2,"toc_max_heading_level":2,"tags":["Kubernetes","RBAC","Security","pods/exec"]},"unlisted":false,"nextItem":{"title":"Kubernetes Audit","permalink":"/en/blog/kubernetes-audit"}}')}}]);