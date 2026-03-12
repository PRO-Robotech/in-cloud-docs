"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[5326],{44782(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>h,metadata:()=>r,toc:()=>v});var r=n(6776),l=n(74848),a=n(28453),s=n(57390),i=n(60513),o=n(44349),c=n(68741),u=n(24722),d=n(22365);const h={title:"Kubernetes The Hard Way: Workers",description:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c Worker-\u043d\u043e\u0434\u0443 \u043a Kubernetes-\u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443 \u0432\u0440\u0443\u0447\u043d\u0443\u044e: \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u041e\u0421, bootstrap token, CSR API, kubeadm join \u0438 \u0437\u0430\u043f\u0443\u0441\u043a kubelet.",date:new Date("2026-03-12T00:00:00.000Z"),slug:"kubernetes-the-hard-way-workers",authors:["dlputilin"],tags:["Kubernetes","Hard-Way","Workers"]},p=void 0,m={authorsImageUrls:[void 0]},v=[{value:"1. \u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",id:"1-\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435",level:3},{value:"2. \u0418\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430",id:"2-\u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430",level:3},{value:"3. \u0411\u0430\u0437\u043e\u0432\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0443\u0437\u043b\u043e\u0432",id:"3-\u0431\u0430\u0437\u043e\u0432\u0430\u044f-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u0443\u0437\u043b\u043e\u0432",level:3},{value:"4. \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u044f\u0434\u0440\u0430",id:"4-\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-\u043c\u043e\u0434\u0443\u043b\u0435\u0439-\u044f\u0434\u0440\u0430",level:3},{value:"5. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 sysctl",id:"5-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432-sysctl",level:3},{value:"6. \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",id:"6-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",level:3},{value:"7. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",id:"7-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",level:3},{value:"8. \u0410\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f",id:"8-\u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f",level:3},{value:"9. \u0417\u0430\u043f\u0443\u0441\u043a Kubelet",id:"9-\u0437\u0430\u043f\u0443\u0441\u043a-kubelet",level:3},{value:"10. \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430",id:"10-\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430",level:3},{value:"\u0412\u044b\u0432\u043e\u0434",id:"\u0432\u044b\u0432\u043e\u0434",level:2}];function b(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h3",{children:(0,l.jsxs)(t.p,{children:["Kubernetes THW: Workers ",(0,l.jsx)("span",{style:{color:"#1cc5ac"},children:"#"})]})}),"\n",(0,l.jsx)("p",{style:{fontStyle:"italic",fontWeight:600},children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0435\u043c Kubernetes The Hard Way: \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c \u0440\u0430\u0431\u043e\u0447\u0438\u0435 \u0443\u0437\u043b\u044b."}),"\n",(0,l.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"flex-start",gap:"30px",marginTop:"1.5rem"},children:[(0,l.jsxs)("div",{style:{flex:"1 1 55%",minWidth:"280px"},children:[(0,l.jsx)("p",{children:(0,l.jsxs)(t.p,{children:["\u0412 ",(0,l.jsx)("a",{href:"/blog/kubernetes-the-hard-way",children:"\u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0439 \u0441\u0442\u0430\u0442\u044c\u0435"})," \u043c\u044b \u0441\u043e\u0431\u0440\u0430\u043b\u0438 control plane \u0432\u0440\u0443\u0447\u043d\u0443\u044e: \u0432\u044b\u043f\u0443\u0441\u0442\u0438\u043b\u0438\n\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b, \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u043b\u0438 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0438 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b. API-\u0441\u0435\u0440\u0432\u0435\u0440 \u0443\u0436\u0435 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442, \u043d\u043e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\n\u043f\u043e\u043a\u0430 \u043e\u0441\u0442\u0430\u0435\u0442\u0441\u044f \u0431\u0435\u0437 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0443\u0437\u043b\u043e\u0432."]})}),(0,l.jsx)("p",{children:(0,l.jsxs)(t.p,{children:["\u041f\u043e\u043a\u0430 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435 \u043d\u0435\u0442 worker-\u043d\u043e\u0434, \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u043d\u044b\u0435 \u043f\u043e\u0434\u044b \u043f\u0440\u043e\u0441\u0442\u043e \u043d\u0435\u0433\u0434\u0435. \u0412 \u044d\u0442\u043e\u0439 \u0441\u0442\u0430\u0442\u044c\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u043c"," ","\n",(0,l.jsx)("strong",{children:"Worker-\u043d\u043e\u0434\u0443"})," \u0438 \u0440\u0430\u0437\u0431\u0435\u0440\u0435\u043c \u0432\u0435\u0441\u044c \u043f\u0443\u0442\u044c \u043e\u0442 \u0447\u0438\u0441\u0442\u043e\u0439 VM \u0434\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0443\u0437\u043b\u0430 \u0432 Kubernetes."]})}),(0,l.jsx)("p",{children:(0,l.jsxs)(t.p,{children:["\u0424\u043e\u0440\u043c\u0430\u0442 \u0442\u043e\u0442 \u0436\u0435, \u0447\u0442\u043e \u0438 \u0432 \u043f\u0435\u0440\u0432\u043e\u0439 \u0447\u0430\u0441\u0442\u0438: \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u043c \u041e\u0421, \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u043c ",(0,l.jsx)(t.code,{children:"containerd"})," \u0438 ",(0,l.jsx)(t.code,{children:"kubelet"}),", \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u043c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a\n\u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443 \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u043c \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044e \u0443\u0437\u043b\u0430. \u041f\u043e\u043a\u0430\u0436\u0443 \u0434\u0432\u0430 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430: \u0440\u0443\u0447\u043d\u043e\u0439 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439 \u0447\u0435\u0440\u0435\u0437 bootstrap token \u0438 CSR API \u0438\u043b\u0438\n\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439 \u043f\u0443\u0442\u044c \u0447\u0435\u0440\u0435\u0437 ",(0,l.jsx)("code",{children:"kubeadm join"}),"."]})})]}),(0,l.jsx)("div",{style:{flex:"1 1 40%",minWidth:"220px",textAlign:"center",marginTop:"0rem"},children:(0,l.jsx)("img",{src:`${(0,d.I)()}img/blog/kthw-promo.png`,alt:"Kubernetes The Hard Way",style:{width:"90%",maxWidth:"330px",filter:"drop-shadow(0 0 12px rgba(255, 255, 255, 0.2))",transition:"transform 0.3s ease-in-out"}})})]}),"\n","\n",(0,l.jsx)(t.h3,{id:"1-\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435",children:"1. \u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435"}),"\n",(0,l.jsxs)(t.p,{children:["Control Plane \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0440\u0435\u0448\u0435\u043d\u0438\u044f: \u0433\u0434\u0435 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c \u043f\u043e\u0434\u044b, \u043a\u0430\u043a \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044c \u0436\u0435\u043b\u0430\u0435\u043c\u043e\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0438 \u0447\u0442\u043e \u0434\u0435\u043b\u0430\u0442\u044c \u043f\u0440\u0438 \u0441\u0431\u043e\u044f\u0445. \u041d\u043e \u0441\u0430\u043c\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0436\u0438\u0432\u0443\u0442 \u043d\u0430 ",(0,l.jsx)(t.strong,{children:"worker-\u043d\u043e\u0434\u0430\u0445"}),", \u0442\u043e \u0435\u0441\u0442\u044c \u0432 data plane \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430."]}),"\n",(0,l.jsxs)(t.p,{children:["Worker-\u043d\u043e\u0434\u0430 \u043e\u0431\u044b\u0447\u043d\u043e \u0441\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u043a \u0434\u0432\u0443\u043c \u0433\u043b\u0430\u0432\u043d\u044b\u043c \u0447\u0430\u0441\u0442\u044f\u043c: ",(0,l.jsx)(t.code,{children:"kubelet"})," \u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043d\u044b\u0439 \u0440\u0430\u043d\u0442\u0430\u0439\u043c, \u0432 \u043d\u0430\u0448\u0435\u043c \u0441\u043b\u0443\u0447\u0430\u0435 ",(0,l.jsx)(t.code,{children:"containerd"}),". ",(0,l.jsx)(t.code,{children:"kubelet"})," \u043e\u0431\u0449\u0430\u0435\u0442\u0441\u044f \u0441 API-\u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c, \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u043f\u043e\u0434\u043e\u0432 \u0438 \u0441\u043b\u0435\u0434\u0438\u0442 \u0437\u0430 \u0442\u0435\u043c, \u0447\u0442\u043e\u0431\u044b \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u043b\u0438."]}),"\n",(0,l.jsxs)(t.p,{children:["\u0412 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 \u043c\u0430\u0441\u0442\u0435\u0440-\u043d\u043e\u0434, \u0437\u0434\u0435\u0441\u044c ",(0,l.jsx)(t.strong,{children:"\u043d\u0435\u0442"})," etcd, ",(0,l.jsx)(t.code,{children:"kube-apiserver"}),", ",(0,l.jsx)(t.code,{children:"kube-controller-manager"})," \u0438 ",(0,l.jsx)(t.code,{children:"kube-scheduler"}),". \u041d\u0435\u0442 \u0438 static pod-\u043e\u0432 control plane. \u041f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 CA \u043d\u0430 worker-\u043d\u043e\u0434\u0443 \u0442\u043e\u0436\u0435 \u043d\u0435 \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u0442."]}),"\n",(0,l.jsx)(t.p,{children:"\u0418\u0437-\u0437\u0430 \u044d\u0442\u043e\u0433\u043e \u0441\u0430\u043c\u0430 \u043c\u0430\u0448\u0438\u043d\u0430 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0449\u0435, \u043d\u043e \u043f\u043e\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 bootstrap-\u0432\u043e\u043f\u0440\u043e\u0441: \u043a\u0430\u043a \u043d\u043e\u0432\u043e\u0439 \u043d\u043e\u0434\u0435 \u0432\u043e\u0439\u0442\u0438 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440, \u0435\u0441\u043b\u0438 \u0443 \u043d\u0435\u0435 \u0435\u0449\u0435 \u043d\u0435\u0442 \u043d\u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0433\u043e \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430, \u043d\u0438 \u0434\u043e\u0432\u0435\u0440\u0438\u044f \u043a API?"}),"\n",(0,l.jsxs)("div",{className:"alert alert--info",role:"alert",children:[(0,l.jsx)("strong",{children:"\u041f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f"}),(0,l.jsx)("p",{children:(0,l.jsxs)(t.p,{children:["\u042d\u0442\u0430 \u0441\u0442\u0430\u0442\u044c\u044f \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0435\u0442 ",(0,l.jsx)("a",{href:"/blog/kubernetes-the-hard-way",children:"Kubernetes The Hard Way"}),". \u041f\u0435\u0440\u0435\u0434 \u043d\u0430\u0447\u0430\u043b\u043e\u043c\n\u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e:"]})}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"\u0423\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u043a\u043e\u043d\u0442\u0443\u0440 (CP) \u0440\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442 \u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442"}),(0,l.jsxs)("li",{children:["API-\u0441\u0435\u0440\u0432\u0435\u0440 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 ",(0,l.jsxs)("code",{children:["api.",o.M.clusterName.value,".",o.M.kubernetesBaseDomain.value,":6443"]})]}),(0,l.jsx)("li",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u0430 \u0440\u043e\u043b\u0435\u0432\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c (RBAC) \u0438 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u044b \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440"})]})]}),"\n",(0,l.jsxs)("div",{style:{position:"relative"},children:[(0,l.jsx)("h4",{children:"\u0413\u043b\u0430\u0432\u044b:"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#1-\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435",children:"1. \u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#2-\u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430",children:"2. \u0418\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#3-\u0431\u0430\u0437\u043e\u0432\u0430\u044f-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u0443\u0437\u043b\u043e\u0432",children:"3. \u0411\u0430\u0437\u043e\u0432\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0443\u0437\u043b\u043e\u0432"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#4-\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-\u043c\u043e\u0434\u0443\u043b\u0435\u0439-\u044f\u0434\u0440\u0430",children:"4. \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u044f\u0434\u0440\u0430"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#5-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432-sysctl",children:"5. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 sysctl"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#6-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",children:"6. \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#7-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",children:"7. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#8-\u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f",children:"8. \u0410\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#9-\u0437\u0430\u043f\u0443\u0441\u043a-kubelet",children:"9. \u0417\u0430\u043f\u0443\u0441\u043a Kubelet"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#10-\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430",children:"10. \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430"})})]})]}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"2-\u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430",children:"2. \u0418\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430"}),"\n",(0,l.jsx)("p",{children:(0,l.jsx)(t.p,{children:"\u041d\u0438\u0436\u0435 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u043d\u0430\u0431\u043e\u0440 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432, \u0441 \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0431\u0443\u0434\u0435\u043c \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c worker-\u043d\u043e\u0434\u0443: \u0438\u043c\u044f, \u0430\u0434\u0440\u0435\u0441, DNS \u0438 \u0441\u043e\u0441\u0442\u0430\u0432 \u041f\u041e. \u042d\u0442\u043e\u0433\u043e\n\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u0448\u0430\u0433\u0438 \u0438\u0437 \u0441\u0442\u0430\u0442\u044c\u0438 \u0432 \u0441\u0432\u043e\u0435\u0439 \u0441\u0440\u0435\u0434\u0435."})}),"\n",(0,l.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0438\u0435 \u0443\u0437\u043b\u044b"}),"\n",(0,l.jsx)("div",{style:{overflowX:"auto"},children:(0,l.jsxs)("table",{children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"\u0418\u043c\u044f"}),(0,l.jsx)("th",{children:"IP-\u0430\u0434\u0440\u0435\u0441"}),(0,l.jsx)("th",{children:"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430"}),(0,l.jsx)("th",{children:"\u0420\u0435\u0441\u0443\u0440\u0441\u044b"})]})}),(0,l.jsx)("tbody",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsxs)(t.p,{children:["worker-1.",o.M.clusterName.value,".",o.M.kubernetesBaseDomain.value]})}),(0,l.jsx)("td",{children:"NODE-IP-4"}),(0,l.jsx)("td",{children:"ubuntu-24-04-lts"}),(0,l.jsx)("td",{children:"2CPU / 4RAM / 40GB"})]})})]})}),"\n",(0,l.jsx)("h4",{children:"DNS-\u0437\u0430\u043f\u0438\u0441\u0438"}),"\n",(0,l.jsx)("div",{style:{overflowX:"auto"},children:(0,l.jsxs)("table",{children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"A-\u0437\u0430\u043f\u0438\u0441\u044c"}),(0,l.jsx)("th",{children:"IP-\u0430\u0434\u0440\u0435\u0441"}),(0,l.jsx)("th",{children:"TTL"})]})}),(0,l.jsx)("tbody",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsxs)(t.p,{children:["worker-1.",o.M.clusterName.value,".",o.M.kubernetesBaseDomain.value]})}),(0,l.jsx)("td",{children:"NODE-IP-4"}),(0,l.jsx)("td",{children:"60s"})]})})]})}),"\n",(0,l.jsx)("h4",{children:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b"}),"\n",(0,l.jsx)("p",{children:(0,l.jsx)(t.p,{children:"\u041d\u0430 worker-\u043d\u043e\u0434\u0435 \u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u043e, \u0447\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u043d\u0430\u0433\u0440\u0443\u0437\u043e\u043a. \u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b control plane \u0438 etcd \u0437\u0434\u0435\u0441\u044c \u043d\u0435\n\u043d\u0443\u0436\u043d\u044b."})}),"\n",(0,l.jsx)("div",{style:{overflowX:"auto"},children:(0,l.jsxs)("table",{children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442"}),(0,l.jsx)("th",{children:"\u0412\u0435\u0440\u0441\u0438\u044f"}),(0,l.jsx)("th",{children:"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"})]})}),(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"containerd"}),(0,l.jsx)("td",{children:c.M.containerd.value}),(0,l.jsx)("td",{children:"\u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043d\u044b\u0439 \u0440\u0430\u043d\u0442\u0430\u0439\u043c, \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u043c \u0446\u0438\u043a\u043b\u043e\u043c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432."})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"runc"}),(0,l.jsx)("td",{children:c.M.runc.value}),(0,l.jsx)("td",{children:"\u041d\u0438\u0437\u043a\u043e\u0443\u0440\u043e\u0432\u043d\u0435\u0432\u044b\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u044f\u0434\u0440\u0430 Linux."})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"crictl"}),(0,l.jsx)("td",{children:c.M.crictl.value}),(0,l.jsx)("td",{children:"\u0423\u0442\u0438\u043b\u0438\u0442\u0430 \u0434\u043b\u044f \u043e\u0442\u043b\u0430\u0434\u043a\u0438 CRI-\u0441\u0440\u0435\u0434 \u0441 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u043e\u0439 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441 containerd."})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"kubelet"}),(0,l.jsx)("td",{children:c.M.kubernetes.value}),(0,l.jsx)("td",{children:"\u0410\u0433\u0435\u043d\u0442, \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c\u044b\u0439 \u043d\u0430 \u043a\u0430\u0436\u0434\u043e\u043c \u0443\u0437\u043b\u0435, \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u044e\u0449\u0438\u0439 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u043f\u043e\u0434\u043e\u0432."})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"kubectl"}),(0,l.jsx)("td",{children:c.M.kubernetes.value}),(0,l.jsx)("td",{children:"\u041a\u043b\u0438\u0435\u043d\u0442 \u0434\u043b\u044f \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441 Kubernetes API (\u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e)."})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"kubeadm"}),(0,l.jsx)("td",{children:c.M.kubernetes.value}),(0,l.jsx)("td",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0443\u0437\u043b\u0430 \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443 (\u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e)."})]})]})]})}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"3-\u0431\u0430\u0437\u043e\u0432\u0430\u044f-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u0443\u0437\u043b\u043e\u0432",children:"3. \u0411\u0430\u0437\u043e\u0432\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0443\u0437\u043b\u043e\u0432"}),"\n",(0,l.jsx)("p",{children:(0,l.jsx)(t.p,{children:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u043c \u041e\u0421 \u0432 \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0443\u0435\u043c\u043e\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435: \u0437\u0430\u0434\u0430\u0435\u043c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f, \u043c\u0435\u043d\u044f\u0435\u043c hostname \u0438 \u0441\u0442\u0430\u0432\u0438\u043c \u0431\u0430\u0437\u043e\u0432\u044b\u0435\n\u0443\u0442\u0438\u043b\u0438\u0442\u044b. \u0428\u0430\u0433 \u043f\u043e\u0447\u0442\u0438 \u0442\u0430\u043a\u043e\u0439 \u0436\u0435, \u043a\u0430\u043a \u043d\u0430 master-\u043d\u043e\u0434\u0430\u0445, \u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f worker-\u0443\u0437\u043b\u0430."})}),"\n",(0,l.jsx)(u.z6,{}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"4-\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-\u043c\u043e\u0434\u0443\u043b\u0435\u0439-\u044f\u0434\u0440\u0430",children:"4. \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u044f\u0434\u0440\u0430"}),"\n",(0,l.jsx)("p",{children:(0,l.jsxs)(t.p,{children:["\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c \u043c\u043e\u0434\u0443\u043b\u0438 \u044f\u0434\u0440\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0443\u0436\u043d\u044b ",(0,l.jsx)(t.code,{children:"containerd"})," \u0438 \u0441\u0435\u0442\u0435\u0432\u043e\u0439 \u0447\u0430\u0441\u0442\u0438 Kubernetes. \u041d\u0430\u0431\u043e\u0440 \u0442\u043e\u0442 \u0436\u0435, \u0447\u0442\u043e \u0438 \u043d\u0430 master-\u043d\u043e\u0434\u0430\u0445."]})}),"\n",(0,l.jsx)(u.NQ,{}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"5-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432-sysctl",children:"5. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 sysctl"}),"\n",(0,l.jsx)("p",{children:(0,l.jsxs)(t.p,{children:["\u0414\u0430\u043b\u044c\u0448\u0435 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c ",(0,l.jsx)(t.code,{children:"sysctl"}),": \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u043c IP forwarding \u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u043b\u044f bridge-\u0442\u0440\u0430\u0444\u0438\u043a\u0430. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0437\u0434\u0435\u0441\u044c \u0442\u043e\u0436\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442 \u0441\ncontrol plane."]})}),"\n",(0,l.jsx)(u.EU,{}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"6-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",children:"6. \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432"}),"\n",(0,l.jsx)("p",{children:(0,l.jsxs)(t.p,{children:["\u041d\u0430 worker-\u043d\u043e\u0434\u0443 \u0441\u0442\u0430\u0432\u0438\u043c \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u043e, \u0447\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 \u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0443\u0437\u043b\u0430 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435: ",(0,l.jsx)(t.code,{children:"containerd"}),",\n",(0,l.jsx)(t.code,{children:"kubelet"})," \u0438 \u0432\u0441\u043f\u043e\u043c\u043e\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b. \u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b control plane \u0437\u0434\u0435\u0441\u044c ",(0,l.jsx)("strong",{children:"\u043d\u0435 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u044e\u0442\u0441\u044f"}),"."]})}),"\n",(0,l.jsx)(u.kq,{}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"7-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",children:"7. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432"}),"\n",(0,l.jsx)("p",{children:(0,l.jsxs)(t.p,{children:["\u041f\u043e\u0441\u043b\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u043c \u043a\u043e\u043d\u0444\u0438\u0433\u0438 \u0434\u043b\u044f ",(0,l.jsx)(t.code,{children:"containerd"}),", ",(0,l.jsx)(t.code,{children:"kubelet"}),", ",(0,l.jsx)(t.code,{children:"crictl"})," \u0438 \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 ",(0,l.jsx)(t.code,{children:"kubeadm"}),". \u0414\u043b\u044f\nworker-\u043d\u043e\u0434\u044b \u0432 ",(0,l.jsx)(t.code,{children:"kubeadm"})," \u043d\u0443\u0436\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u043b\u043e\u043a ",(0,l.jsx)("code",{children:"JoinConfiguration"}),", \u0431\u0435\u0437 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,l.jsx)("code",{children:"controlPlane"}),"."]})}),"\n",(0,l.jsx)(u.iO,{}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"8-\u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f",children:"8. \u0410\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f"}),"\n",(0,l.jsx)("p",{children:(0,l.jsx)(t.p,{children:"\u042d\u0442\u043e \u0441\u0430\u043c\u044b\u0439 \u0432\u0430\u0436\u043d\u044b\u0439 \u0448\u0430\u0433 \u0432\u043e \u0432\u0441\u0435\u0439 \u0441\u0442\u0430\u0442\u044c\u0435. \u0423 worker-\u043d\u043e\u0434\u044b \u043d\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u043c\u0443 \u043a\u043b\u044e\u0447\u0443 CA, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0435\u0439 \u043d\u0443\u0436\u043d\u043e \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\n\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0432\u0435\u0440\u0438\u0435 \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443 \u043e\u0434\u043d\u0438\u043c \u0438\u0437 \u0434\u0432\u0443\u0445 \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u0432:"})}),"\n",(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("strong",{children:"Bootstrap Token + CSR API"})," \u2014 \u0440\u0443\u0447\u043d\u043e\u0439 \u043f\u0443\u0442\u044c \u0441 \u043f\u043e\u043b\u043d\u044b\u043c \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u043c \u043d\u0430\u0434 TLS Bootstrap"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("strong",{children:"Kubeadm"})," \u2014 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 ",(0,l.jsx)("code",{children:"kubeadm join"})]})]}),"\n",(0,l.jsxs)(n,{children:[(0,l.jsx)("summary",{children:(0,l.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,l.jsx)("p",{style:{marginBottom:0},children:"\u0410\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f worker-\u043d\u043e\u0434\u044b"}),(0,l.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,l.jsx)("p",{children:(0,l.jsxs)(t.p,{children:["\u0412\u043d\u0443\u0442\u0440\u0438 \u0440\u0443\u0447\u043d\u043e\u0433\u043e \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u044f \u043f\u043e\u043b\u0443\u0447\u0438\u043c ",(0,l.jsx)("code",{children:"ca.crt"})," \u0438\u0437 ",(0,l.jsx)("code",{children:"cluster-info"}),", \u0441\u043e\u0431\u0435\u0440\u0435\u043c\n",(0,l.jsx)("code",{children:"bootstrap-kubelet.conf"})," \u0438 \u043f\u0440\u0438 \u0436\u0435\u043b\u0430\u043d\u0438\u0438 \u0432\u0440\u0443\u0447\u043d\u0443\u044e \u043f\u0440\u043e\u0439\u0434\u0435\u043c \u043f\u043e\u0442\u043e\u043a CSR \u0434\u043b\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0433\u043e \u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0433\u043e\n\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 kubelet."]})}),(0,l.jsx)(u.VC,{})]}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"9-\u0437\u0430\u043f\u0443\u0441\u043a-kubelet",children:"9. \u0417\u0430\u043f\u0443\u0441\u043a Kubelet"}),"\n",(0,l.jsx)("p",{children:(0,l.jsxs)(t.p,{children:["\u041a\u043e\u0433\u0434\u0430 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u0433\u043e\u0442\u043e\u0432\u0430, \u043e\u0441\u0442\u0430\u0435\u0442\u0441\u044f \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c ",(0,l.jsx)(t.code,{children:"kubelet"}),". \u041d\u0430 \u044d\u0442\u043e\u043c \u0448\u0430\u0433\u0435 \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u0435\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433, \u043f\u043e\u0434\u043d\u0438\u043c\u0430\u0435\u043c\n",(0,l.jsx)(t.code,{children:"systemd"}),"-\u0441\u0435\u0440\u0432\u0438\u0441 \u0438 \u0434\u0430\u0435\u043c \u0443\u0437\u043b\u0443 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435."]})}),"\n",(0,l.jsx)(u.iD,{}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"10-\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430",children:"10. \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430"}),"\n",(0,l.jsx)("p",{children:(0,l.jsxs)(t.p,{children:["\u041f\u043e\u0441\u043b\u0435 \u0441\u0442\u0430\u0440\u0442\u0430 ",(0,l.jsx)(t.code,{children:"kubelet"})," \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435, \u0447\u0442\u043e \u043d\u043e\u0434\u0430 \u043f\u043e\u044f\u0432\u0438\u043b\u0430\u0441\u044c \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435. \u0414\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0441\u0435\u0442\u0435\u0432\u043e\u0433\u043e \u043f\u043b\u0430\u0433\u0438\u043d\u0430 \u043e\u043d\u0430 \u043c\u043e\u0436\u0435\u0442\n\u043e\u0441\u0442\u0430\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0438 ",(0,l.jsx)("code",{children:"NotReady"})," \u2014 \u044d\u0442\u043e \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e."]})}),"\n",(0,l.jsx)("p",{children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043d\u0430 \u043c\u0430\u0441\u0442\u0435\u0440-\u043d\u043e\u0434\u0435:"}),"\n",(0,l.jsx)(s.A,{language:"bash",children:i.A`
  kubectl --kubeconfig=${o.M.kubernetesBaseFolderPath.value}/super-admin.conf get nodes -o wide
`}),"\n",(0,l.jsxs)("div",{className:"alert alert--secondary",role:"alert",children:[(0,l.jsx)("strong",{children:"\u041e\u0436\u0438\u0434\u0430\u0435\u043c\u044b\u0439 \u0432\u044b\u0432\u043e\u0434"}),(0,l.jsx)(s.A,{children:i.A`
    NAME                                          STATUS     ROLES    AGE   VERSION
    master-1.${o.M.clusterName.value}.${o.M.kubernetesBaseDomain.value}         NotReady   master   1d    v1.32.0
    master-2.${o.M.clusterName.value}.${o.M.kubernetesBaseDomain.value}         NotReady   master   1d    v1.32.0
    master-3.${o.M.clusterName.value}.${o.M.kubernetesBaseDomain.value}         NotReady   master   1d    v1.32.0
    worker-1.${o.M.clusterName.value}.${o.M.kubernetesBaseDomain.value}         NotReady   <none>   30s   v1.32.0
  `})]}),"\n",(0,l.jsxs)("div",{className:"alert alert--info",role:"alert",children:[(0,l.jsx)("strong",{children:"\u0421\u0442\u0430\u0442\u0443\u0441 NotReady"}),(0,l.jsx)("p",{children:(0,l.jsxs)(t.p,{children:["\u0421\u0442\u0430\u0442\u0443\u0441 ",(0,l.jsx)("code",{children:"NotReady"})," \u2014 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0434\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0441\u0435\u0442\u0435\u0432\u043e\u0433\u043e \u043f\u043b\u0430\u0433\u0438\u043d\u0430 (CNI).\n\u041f\u043e\u0441\u043b\u0435 \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u044f CNI (Calico, Cilium, Flannel \u0438 \u0442.\u0434.) \u0441\u0442\u0430\u0442\u0443\u0441 \u0443\u0437\u043b\u043e\u0432 \u0441\u043c\u0435\u043d\u0438\u0442\u0441\u044f \u043d\u0430 ",(0,l.jsx)("code",{children:"Ready"}),"."]})})]}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h2,{id:"\u0432\u044b\u0432\u043e\u0434",children:"\u0412\u044b\u0432\u043e\u0434"}),"\n",(0,l.jsx)(t.p,{children:"Worker-\u043d\u043e\u0434\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440. \u0422\u0435\u043f\u0435\u0440\u044c control plane \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u043e \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e: \u043e\u043d \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,l.jsx)(t.p,{children:"\u041f\u043e \u043f\u0443\u0442\u0438 \u043c\u044b:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u043b\u0438 \u041e\u0421 \u0438 \u0441\u0435\u0442\u0435\u0432\u043e\u0439 \u0441\u0442\u0435\u043a"}),"\n",(0,l.jsxs)(t.li,{children:["\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043b\u0438 ",(0,l.jsx)(t.code,{children:"containerd"}),", ",(0,l.jsx)(t.code,{children:"kubelet"})," \u0438 \u0441\u043e\u043f\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b"]}),"\n",(0,l.jsxs)(t.li,{children:["\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u043b\u0438 \u043d\u043e\u0434\u0443 \u0432\u0440\u0443\u0447\u043d\u0443\u044e \u0447\u0435\u0440\u0435\u0437 bootstrap token \u0438 CSR API \u0438\u043b\u0438 \u0447\u0435\u0440\u0435\u0437 ",(0,l.jsx)(t.code,{children:"kubeadm"})]}),"\n",(0,l.jsxs)(t.li,{children:["\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u043b\u0438 ",(0,l.jsx)(t.code,{children:"kubelet"})," \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u043b\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044e \u0443\u0437\u043b\u0430"]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u043b\u043e\u0433\u0438\u0447\u043d\u044b\u0439 \u0448\u0430\u0433 \u2014 \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c CNI, \u043f\u043e\u0434\u043d\u044f\u0442\u044c DNS \u0432\u043d\u0443\u0442\u0440\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0442\u043e\u043c \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u0442\u044c \u043a \u043f\u0435\u0440\u0432\u044b\u043c \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u043d\u044b\u043c \u043f\u043e\u0434\u0430\u043c."}),"\n",(0,l.jsx)(t.admonition,{type:"note",children:(0,l.jsx)(t.p,{children:"\u0415\u0441\u043b\u0438 \u0432\u044b \u0434\u043e\u0448\u043b\u0438 \u0434\u043e \u044d\u0442\u043e\u0433\u043e \u043c\u0435\u0441\u0442\u0430, \u0443 \u0432\u0430\u0441 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0432\u0440\u0443\u0447\u043d\u0443\u044e \u0441\u043e\u0431\u0440\u0430\u043d\u043d\u044b\u0439 control plane \u0438 \u043f\u0435\u0440\u0432\u044b\u0439 worker-\u0443\u0437\u0435\u043b.\n\u0414\u0430\u043b\u044c\u0448\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u0442\u044c \u043a \u0441\u0435\u0442\u0435\u0432\u043e\u043c\u0443 \u043f\u043b\u0430\u0433\u0438\u043d\u0443 \u0438 \u043f\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0442\u044c \u0437\u0430\u0433\u043e\u0442\u043e\u0432\u043a\u0443 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0432 \u0440\u0430\u0431\u043e\u0447\u0443\u044e \u0441\u0440\u0435\u0434\u0443."})})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(b,{...e})}):b(e)}},27653(e,t,n){n.d(t,{A:()=>C});var r=n(96540),l=n(74848);function a(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=r.Children.toArray(e),n=t.find(e=>r.isValidElement(e)&&"mdxAdmonitionTitle"===e.type),a=t.filter(e=>e!==n),s=n?.props.children;return{mdxAdmonitionTitle:s,rest:a.length>0?(0,l.jsx)(l.Fragment,{children:a}):null}}(e.children),a=e.title??t;return{...e,...a&&{title:a},children:n}}var s=n(34164),i=n(21312),o=n(17559);const c="admonition_xJq3",u="admonitionHeading_Gvgb",d="admonitionIcon_Rf37",h="admonitionContent_BuS1";function p({type:e,className:t,children:n}){return(0,l.jsx)("div",{className:(0,s.A)(o.G.common.admonition,o.G.common.admonitionType(e),c,t),children:n})}function m({icon:e,title:t}){return(0,l.jsxs)("div",{className:u,children:[(0,l.jsx)("span",{className:d,children:e}),t]})}function v({children:e}){return e?(0,l.jsx)("div",{className:h,children:e}):null}function b(e){const{type:t,icon:n,title:r,children:a,className:s}=e;return(0,l.jsxs)(p,{type:t,className:s,children:[r||n?(0,l.jsx)(m,{title:r,icon:n}):null,(0,l.jsx)(v,{children:a})]})}function g(e){return(0,l.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const x={icon:(0,l.jsx)(g,{}),title:(0,l.jsx)(i.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function k(e){return(0,l.jsx)(b,{...x,...e,className:(0,s.A)("alert alert--secondary",e.className),children:e.children})}function j(e){return(0,l.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const f={icon:(0,l.jsx)(j,{}),title:(0,l.jsx)(i.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function y(e){return(0,l.jsx)(b,{...f,...e,className:(0,s.A)("alert alert--success",e.className),children:e.children})}function $(e){return(0,l.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const A={icon:(0,l.jsx)($,{}),title:(0,l.jsx)(i.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function S(e){return(0,l.jsx)(b,{...A,...e,className:(0,s.A)("alert alert--info",e.className),children:e.children})}function E(e){return(0,l.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const N={icon:(0,l.jsx)(E,{}),title:(0,l.jsx)(i.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function O(e){return(0,l.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const P={icon:(0,l.jsx)(O,{}),title:(0,l.jsx)(i.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const T={icon:(0,l.jsx)(E,{}),title:(0,l.jsx)(i.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const R={...{note:k,tip:y,info:S,warning:function(e){return(0,l.jsx)(b,{...N,...e,className:(0,s.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,l.jsx)(b,{...P,...e,className:(0,s.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,l.jsx)(k,{title:"secondary",...e}),important:e=>(0,l.jsx)(S,{title:"important",...e}),success:e=>(0,l.jsx)(y,{title:"success",...e}),caution:function(e){return(0,l.jsx)(b,{...T,...e,className:(0,s.A)("alert alert--warning",e.className),children:e.children})}}};function C(e){const t=a(e),n=(r=t.type,R[r]||(console.warn(`No admonition component found for admonition type "${r}". Using Info as fallback.`),R.info));var r;return(0,l.jsx)(n,{...t})}},69623(e,t,n){n.d(t,{A:()=>b});var r=n(96540),l=n(34164),a=n(63427),s=n(92303),i=n(41422);const o="details_lb9f",c="isBrowser_bmU9",u="collapsibleContent_i85q";var d=n(74848);function h(e){return!!e&&("SUMMARY"===e.tagName||h(e.parentElement))}function p(e,t){return!!e&&(e===t||p(e.parentElement,t))}function m({summary:e,children:t,...n}){(0,a.A)().collectAnchor(n.id);const m=(0,s.A)(),v=(0,r.useRef)(null),{collapsed:b,setCollapsed:g}=(0,i.u)({initialState:!n.open}),[x,k]=(0,r.useState)(n.open),j=r.isValidElement(e)?e:(0,d.jsx)("summary",{children:e??"Details"});return(0,d.jsxs)("details",{...n,ref:v,open:x,"data-collapsed":b,className:(0,l.A)(o,m&&c,n.className),onMouseDown:e=>{h(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;h(t)&&p(t,v.current)&&(e.preventDefault(),b?(g(!1),k(!0)):g(!0))},children:[j,(0,d.jsx)(i.N,{lazy:!1,collapsed:b,onCollapseTransitionEnd:e=>{g(e),k(!e)},children:(0,d.jsx)("div",{className:u,children:t})})]})}const v="details_b_Ee";function b({...e}){return(0,d.jsx)(m,{...e,className:(0,l.A)("alert alert--info",v,e.className)})}},24722(e,t,n){n.d(t,{z6:()=>Sn,kq:()=>Nn,iD:()=>Gn,NQ:()=>pn,iO:()=>_n,EU:()=>nn,VC:()=>Bn});var r=n(74848),l=n(28453),a=n(60513),s=n(57390),i=n(58700),o=n(68741);const c={value:a.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${o.M.containerd.value}}"
      REPOSITORY="$\{REPOSITORY:-${i.m.containerd.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${i.m.containerd.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${i.m.containerd.templateUrlBinCheckSum}"
      INSTALL_PATH="${i.m.containerd.path}"


      LOG_TAG="containerd-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current containerd version..."

      CURRENT_VERSION=$($INSTALL_PATH/containerd --version 2>/dev/null | awk '{print $3}' | sed 's/v//') || CURRENT_VERSION="none"
      COMPONENT_VERSION_CLEAN=$(echo "$COMPONENT_VERSION" | sed 's/^v//')

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION_CLEAN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION_CLEAN" ]]; then
        logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"
        logger -t "$LOG_TAG" "[INFO] Updating containerd to version $COMPONENT_VERSION_CLEAN..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading containerd..."
        curl -fsSL -o "containerd-$\{COMPONENT_VERSION}-linux-amd64.tar.gz" "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download containerd"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o "containerd.sha256sum" "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        sha256sum -c containerd.sha256sum | grep 'OK' || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Extracting files..."
        tar -C "$TMP_DIR" -xvf "containerd-$\{COMPONENT_VERSION}-linux-amd64.tar.gz"

        logger -t "$LOG_TAG" "[INFO] Installing binaries..."
        install -m 755 "$TMP_DIR/bin/containerd" $INSTALL_PATH
        install -m 755 "$TMP_DIR/bin/containerd-shim"* $INSTALL_PATH
        install -m 755 "$TMP_DIR/bin/ctr" $INSTALL_PATH

        logger -t "$LOG_TAG" "[INFO] Containerd successfully updated to $COMPONENT_VERSION."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] Containerd is already up to date. Skipping installation."
      fi
    `};var u=n(9792),d=n(76331);function h(e){return(0,r.jsxs)(d.A,{groupId:"install-type",children:[(0,r.jsxs)(u.A,{value:"Bash",children:[(0,r.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
        mkdir -p /etc/default/containerd
      `}),(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
        cat <<EOF > /etc/default/containerd/download.env
        COMPONENT_VERSION="${o.M.containerd.value}"
        REPOSITORY="${i.m.containerd.baseUrl}"
        EOF
      `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
        cat <<"EOF" > /etc/default/containerd/download-script.sh
        ${c.value}
        EOF
      `}),(0,r.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,r.jsx)(s.A,{language:"yaml",children:a.A`
        chmod +x /etc/default/containerd/download-script.sh
      `}),(0,r.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
        cat <<EOF > /usr/lib/systemd/system/containerd-install.service
        [Unit]
        Description=Install and update in-cloud component containerd
        After=network.target
        Wants=network-online.target

        [Service]
        Type=oneshot
        EnvironmentFile=-/etc/default/containerd/download.env
        ExecStart=/bin/bash -c "/etc/default/containerd/download-script.sh"
        RemainAfterExit=yes

        [Install]
        WantedBy=multi-user.target
        EOF
      `}),(0,r.jsx)("h4",{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
        systemctl enable containerd-install.service
        systemctl start containerd-install.service
      `})]}),(0,r.jsxs)(u.A,{value:"Cloud-init",children:[(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(s.A,{language:"yaml",children:a.A`
      - path: /etc/default/containerd/download.env
        owner: root:root
        permissions: '0644'
        content: |
          COMPONENT_VERSION="${o.M.containerd.value}"
          REPOSITORY="${i.m.containerd.baseUrl}"
    `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,r.jsx)(s.A,{language:"yaml",children:a.A`
      - path: /etc/default/containerd/download-script.sh
        owner: root:root
        permissions: '0755'
        content: |
          ${c.value}
    `}),(0,r.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(s.A,{language:"yaml",children:a.A`
      - path: /usr/lib/systemd/system/containerd-install.service
        owner: root:root
        permissions: '0644'
        content: |
          [Unit]
          Description=Install and update in-cloud component containerd
          After=network.target
          Wants=network-online.target

          [Service]
          Type=oneshot
          EnvironmentFile=-/etc/default/containerd/download.env
          ExecStart=/bin/bash -c "/etc/default/containerd/download-script.sh"
          RemainAfterExit=yes

          [Install]
          WantedBy=multi-user.target
    `}),(0,r.jsx)("h4",{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      - systemctl enable containerd-install.service
      - systemctl start containerd-install.service
    `})]})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h()}const m=[];function v(e){const t={li:"li",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439."}),"\n",(0,r.jsx)(t.li,{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f."}),"\n",(0,r.jsx)(t.li,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,r.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432."}),"\n",(0,r.jsx)(t.li,{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,r.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n"]}),"\n",(0,r.jsx)(p,{})]})}function b(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(v,{...e})}):v(e)}var g=n(94949);function x(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u0418\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b"}),"\n",(0,r.jsx)(g.N,{binaryName:"containerd",version:o.M.containerd.value,installSteps:["Extracting files...","Installing binaries..."],successMessage:"Containerd successfully updated to",grepCommand:'-E "containerd|ctr"',lsOutput:"-rwxr-xr-x  1 root root  54855296 Feb 18 15:12 containerd\n-rwxr-xr-x  1 root root   7176192 Feb 18 15:12 containerd-shim\n-rwxr-xr-x  1 root root   8884224 Feb 18 15:12 containerd-shim-containerd-v1\n-rwxr-xr-x  1 root root  12169216 Feb 18 15:12 containerd-shim-containerd-v2\n-rwxr-xr-x  1 root root  12169216 Feb 18 15:12 ctr"}),"\n",(0,r.jsx)("h3",{children:"\u0412\u0435\u0440\u0441\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),"\n",(0,r.jsx)(g.y,{command:"containerd --version",output:"containerd github.com/containerd/containerd v1.7.19 2bf793ef6dc9a18e00cb12efb64355c2c9d5eb41"})]})}function k(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x()}const j=[];function f(e){const{Details:t}={...(0,l.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),"\n",(0,r.jsxs)(t,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),(0,r.jsx)(k,{})]})]})}function y(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}const $={value:a.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${o.M.runc.value}}"
      REPOSITORY="$\{REPOSITORY:-https://github.com/opencontainers/runc/releases/download}"
      PATH_BIN="$\{REPOSITORY}/${i.m.runc.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${i.m.runc.templateUrlBinCheckSum}"
      INSTALL_PATH="${i.m.runc.path}"

      LOG_TAG="runc-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current runc version..."

      CURRENT_VERSION=$($INSTALL_PATH --version 2>/dev/null | head -n1 | awk '{print $NF}') || CURRENT_VERSION="none"
      COMPONENT_VERSION_CLEAN=$(echo "$COMPONENT_VERSION" | sed 's/^v//')

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION_CLEAN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION_CLEAN" ]]; then
        logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"
        logger -t "$LOG_TAG" "[INFO] Updating runc to version $COMPONENT_VERSION..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading runc..."
        curl -fsSL -o runc.amd64 "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download runc"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o runc.sha256sum "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        grep "runc.amd64" runc.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Installing runc..."
        install -m 755 runc.amd64 "$INSTALL_PATH"

        logger -t "$LOG_TAG" "[INFO] runc successfully updated to $COMPONENT_VERSION."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] runc is already up to date. Skipping installation."
      fi
    `};function A(e){return(0,r.jsxs)(d.A,{groupId:"install-type",children:[(0,r.jsxs)(u.A,{value:"Bash",children:[(0,r.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      mkdir -p /etc/default/runc
    `}),(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      cat <<EOF > /etc/default/runc/download.env
      COMPONENT_VERSION="${o.M.runc.value}"
      REPOSITORY="${i.m.runc.baseUrl}"
      EOF
    `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      cat <<"EOF" > /etc/default/runc/download-script.sh
      ${$.value}
      EOF
    `}),(0,r.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      chmod +x /etc/default/runc/download-script.sh
    `}),(0,r.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      cat <<EOF > /usr/lib/systemd/system/runc-install.service
      [Unit]
      Description=Install and update in-cloud component runc
      After=network.target
      Wants=network-online.target

      [Service]
      Type=oneshot
      EnvironmentFile=-/etc/default/runc/download.env
      ExecStart=/bin/bash -c "/etc/default/runc/download-script.sh"
      RemainAfterExit=yes

      [Install]
      WantedBy=multi-user.target
      EOF
    `}),(0,r.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      systemctl enable runc-install.service
      systemctl start runc-install.service
    `})]}),(0,r.jsxs)(u.A,{value:"Cloud-init",children:[(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(s.A,{language:"yaml",children:a.A`
      - path: /etc/default/runc/download.env
        owner: root:root
        permissions: '0644'
        content: |
          COMPONENT_VERSION="${o.M.runc.value}"
          REPOSITORY="${i.m.runc.baseUrl}"
    `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,r.jsx)(s.A,{language:"yaml",children:a.A`
      - path: /etc/default/runc/download-script.sh
        owner: root:root
        permissions: '0755'
        content: |
          ${$.value}
    `}),(0,r.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(s.A,{language:"yaml",children:a.A`
      - path: /usr/lib/systemd/system/runc-install.service
        owner: root:root
        permissions: '0644'
        content: |
          [Unit]
          Description=Install and update in-cloud component runc
          After=network.target
          Wants=network-online.target

          [Service]
          Type=oneshot
          EnvironmentFile=-/etc/default/runc/download.env
          ExecStart=/bin/bash -c "/etc/default/runc/download-script.sh"
          RemainAfterExit=yes

          [Install]
          WantedBy=multi-user.target
    `}),(0,r.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      - systemctl enable runc-install.service
      - systemctl start runc-install.service
    `})]})]})}function S(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(A,{...e})}):A()}const E=[];function N(e){const t={li:"li",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439."}),"\n",(0,r.jsx)(t.li,{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f."}),"\n",(0,r.jsx)(t.li,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,r.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432."}),"\n",(0,r.jsx)(t.li,{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,r.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n"]}),"\n",(0,r.jsx)(S,{})]})}function O(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(N,{...e})}):N(e)}function P(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u0418\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b"}),"\n",(0,r.jsx)(g.N,{binaryName:"runc",version:o.M.runc.value,installSteps:["Installing runc..."],successMessage:"runc successfully updated to",grepCommand:"'runc$'",lsOutput:"-rwxr-xr-x  1 root root  10709696 Jan 23  2024 runc"}),"\n",(0,r.jsx)("h3",{children:"\u0412\u0435\u0440\u0441\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),"\n",(0,r.jsx)(g.y,{command:"runc --version",output:"runc version 1.1.12\ncommit: v1.1.12-0-g51d5e946\nspec: 1.0.2-dev\ngo: go1.20.13\nlibseccomp: 2.5.4"})]})}function T(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(P,{...e})}):P()}const R=[];function C(e){const{Details:t}={...(0,l.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),"\n",(0,r.jsxs)(t,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),(0,r.jsx)(T,{})]})]})}function L(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(C,{...e})}):C(e)}const w={value:a.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${o.M.kubernetes.value}}"
      REPOSITORY="$\{REPOSITORY:-${i.m.kubelet.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${i.m.kubelet.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${i.m.kubelet.templateUrlBinCheckSum}"
      INSTALL_PATH="${i.m.kubelet.path}"


      LOG_TAG="kubelet-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current kubelet version..."

      CURRENT_VERSION=$($INSTALL_PATH --version 2>/dev/null | awk '{print $2}' | sed 's/v//') || CURRENT_VERSION="none"
      COMPONENT_VERSION_CLEAN=$(echo "$COMPONENT_VERSION" | sed 's/^v//')

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION_CLEAN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION_CLEAN" ]]; then
        logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"
        logger -t "$LOG_TAG" "[INFO] Updating kubelet to version $COMPONENT_VERSION_CLEAN..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading kubelet..."
        curl -fsSL -o kubelet "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download kubelet"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o kubelet.sha256sum "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        awk '{print $1"  kubelet"}' kubelet.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Installing kubelet..."
        install -m 755 kubelet "$INSTALL_PATH"

        logger -t "$LOG_TAG" "[INFO] kubelet successfully updated to $COMPONENT_VERSION_CLEAN."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] kubelet is already up to date. Skipping installation."
      fi
    `};function M(e){return(0,r.jsxs)(d.A,{groupId:"install-type",children:[(0,r.jsxs)(u.A,{value:"Bash",children:[(0,r.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
            mkdir -p /etc/default/kubelet
          `}),(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
            cat <<EOF > /etc/default/kubelet/download.env
            COMPONENT_VERSION="${o.M.kubernetes.value}"
            REPOSITORY="${i.m.kubelet.baseUrl}"
            EOF
          `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
          cat <<"EOF" > /etc/default/kubelet/download-script.sh
          ${w.value}
          EOF
        `}),(0,r.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
          chmod +x /etc/default/kubelet/download-script.sh
        `}),(0,r.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
          cat <<EOF > /usr/lib/systemd/system/kubelet-install.service
          [Unit]
          Description=Install and update kubelet
          After=network.target
          Wants=network-online.target

          [Service]
          Type=oneshot
          EnvironmentFile=-/etc/default/kubelet/download.env
          ExecStart=/bin/bash -c "/etc/default/kubelet/download-script.sh"
          RemainAfterExit=yes

          [Install]
          WantedBy=multi-user.target
          EOF
        `}),(0,r.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
          systemctl enable kubelet-install.service
          systemctl start kubelet-install.service
        `})]}),(0,r.jsxs)(u.A,{value:"Cloud-init",children:[(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(s.A,{language:"yaml",children:a.A`
          - path: /etc/default/kubelet/download.env
            owner: root:root
            permissions: '0644'
            content: |
              COMPONENT_VERSION="${o.M.kubernetes.value}"
              REPOSITORY="${i.m.kubelet.baseUrl}"
        `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,r.jsx)(s.A,{language:"yaml",children:a.A`
          - path: /etc/default/kubelet/download-script.sh
            owner: root:root
            permissions: '0755'
            content: |
              ${w.value}
        `}),(0,r.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(s.A,{language:"yaml",children:a.A`
          - path: /usr/lib/systemd/system/kubelet-install.service
            owner: root:root
            permissions: '0644'
            content: |
              [Unit]
              Description=Install and update kubelet
              After=network.target
              Wants=network-online.target

              [Service]
              Type=oneshot
              EnvironmentFile=-/etc/default/kubelet/download.env
              ExecStart=/bin/bash -c "/etc/default/kubelet/download-script.sh"
              RemainAfterExit=yes

              [Install]
              WantedBy=multi-user.target
        `}),(0,r.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
          - systemctl enable kubelet-install.service
          - systemctl start kubelet-install.service
        `})]})]})}function I(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(M,{...e})}):M()}const _=[];function F(e){const t={li:"li",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439."}),"\n",(0,r.jsx)(t.li,{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f."}),"\n",(0,r.jsx)(t.li,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,r.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432."}),"\n",(0,r.jsx)(t.li,{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,r.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n"]}),"\n",(0,r.jsx)(I,{})]})}function B(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(F,{...e})}):F(e)}const D=[];function G(e){const{Details:t}={...(0,l.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),"\n",(0,r.jsxs)(t,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),(0,r.jsx)(g.N,{binaryName:"kubelet",version:o.M.kubernetes.value,installSteps:["Installing kubelet..."],successMessage:"kubelet successfully updated to",grepCommand:"'kubelet$'",lsOutput:"-rwxr-xr-x  1 root root 100125080 Aug 14  2024 kubelet"}),(0,r.jsx)(g.y,{command:"kubelet --version",output:"Kubernetes v1.30.4"})]})]})}function U(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(G,{...e})}):G(e)}const z={value:a.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${o.M.kubernetes.value}}"
      REPOSITORY="$\{REPOSITORY:-${i.m.kubectl.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${i.m.kubectl.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${i.m.kubectl.templateUrlBinCheckSum}"
      INSTALL_PATH="${i.m.kubectl.path}"


      LOG_TAG="kubectl-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current kubectl version..."

      CURRENT_VERSION=$($INSTALL_PATH version -o json --client=true 2>/dev/null | jq -r '.clientVersion.gitVersion' | sed 's/^v//') || CURRENT_VERSION="none"
      COMPONENT_VERSION_CLEAN=$(echo "$COMPONENT_VERSION" | sed 's/^v//')

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION_CLEAN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION_CLEAN" ]]; then
        logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"
        logger -t "$LOG_TAG" "[INFO] Updating kubectl to version $COMPONENT_VERSION_CLEAN..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading kubectl..."
        curl -fsSL -o kubectl "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download kubectl"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o kubectl.sha256sum "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        awk '{print $1"  kubectl"}' kubectl.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Installing kubectl..."
        install -m 755 kubectl "$INSTALL_PATH"

        logger -t "$LOG_TAG" "[INFO] kubectl successfully updated to $COMPONENT_VERSION_CLEAN."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] kubectl is already up to date. Skipping installation."
      fi
    `};function K(e){return(0,r.jsxs)(d.A,{groupId:"install-type",children:[(0,r.jsxs)(u.A,{value:"Bash",children:[(0,r.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
            mkdir -p /etc/default/kubectl
          `}),(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
            cat <<EOF > /etc/default/kubectl/download.env
            COMPONENT_VERSION="${o.M.kubernetes.value}"
            REPOSITORY="${i.m.kubectl.baseUrl}"
            EOF
          `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
          cat <<"EOF" > /etc/default/kubectl/download-script.sh
          ${z.value}
          EOF
        `}),(0,r.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
          chmod +x /etc/default/kubectl/download-script.sh
        `}),(0,r.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
          cat <<EOF > /usr/lib/systemd/system/kubectl-install.service
          [Unit]
          Description=Install and update kubectl
          After=network.target
          Wants=network-online.target

          [Service]
          Type=oneshot
          EnvironmentFile=-/etc/default/kubectl/download.env
          ExecStart=/bin/bash -c "/etc/default/kubectl/download-script.sh"
          RemainAfterExit=yes

          [Install]
          WantedBy=multi-user.target
          EOF
        `}),(0,r.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
          systemctl enable kubectl-install.service
          systemctl start kubectl-install.service
        `})]}),(0,r.jsxs)(u.A,{value:"Cloud-init",children:[(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(s.A,{language:"yaml",children:a.A`
          - path: /etc/default/kubectl/download.env
            owner: root:root
            permissions: '0644'
            content: |
              COMPONENT_VERSION="${o.M.kubernetes.value}"
              REPOSITORY="${i.m.kubectl.baseUrl}"
        `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,r.jsx)(s.A,{language:"yaml",children:a.A`
          - path: /etc/default/kubectl/download-script.sh
            owner: root:root
            permissions: '0755'
            content: |
              ${z.value}
        `}),(0,r.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(s.A,{language:"yaml",children:a.A`
          - path: /usr/lib/systemd/system/kubectl-install.service
            owner: root:root
            permissions: '0644'
            content: |
              [Unit]
              Description=Install and update kubectl
              After=network.target
              Wants=network-online.target

              [Service]
              Type=oneshot
              EnvironmentFile=-/etc/default/kubectl/download.env
              ExecStart=/bin/bash -c "/etc/default/kubectl/download-script.sh"
              RemainAfterExit=yes

              [Install]
              WantedBy=multi-user.target
        `}),(0,r.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
          - systemctl enable kubectl-install.service
          - systemctl start kubectl-install.service
        `})]})]})}function H(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(K,{...e})}):K()}const V=[];function W(e){const t={li:"li",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439."}),"\n",(0,r.jsx)(t.li,{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f."}),"\n",(0,r.jsx)(t.li,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,r.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432."}),"\n",(0,r.jsx)(t.li,{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,r.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n"]}),"\n",(0,r.jsx)(H,{})]})}function q(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(W,{...e})}):W(e)}function Y(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u0418\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b"}),"\n",(0,r.jsx)(g.N,{binaryName:"kubectl",version:o.M.kubernetes.value,installSteps:["Installing kubectl..."],successMessage:"kubectl successfully updated to",grepCommand:"'kubectl$'",lsOutput:"-rwxr-xr-x  1 root root  51454104 Aug 14  2024 kubectl"}),"\n",(0,r.jsx)("h3",{children:"\u0412\u0435\u0440\u0441\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),"\n",(0,r.jsx)(g.y,{command:"kubectl version",output:"Client Version: v1.30.4\nKustomize Version: v5.0.4-0.20230601165947-6ce0bf390ce3"})]})}function J(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(Y,{...e})}):Y()}const X=[];function Q(e){const{Details:t}={...(0,l.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),"\n",(0,r.jsxs)(t,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),(0,r.jsx)(J,{})]})]})}function Z(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(Q,{...e})}):Q(e)}const ee={value:a.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${o.M.crictl.value}}"
      REPOSITORY="$\{REPOSITORY:-${i.m.crictl.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${i.m.crictl.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${i.m.crictl.templateUrlBinCheckSum}"
      INSTALL_PATH="${i.m.crictl.path}"


      LOG_TAG="crictl-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current crictl version..."

      CURRENT_VERSION=$($INSTALL_PATH --version 2>/dev/null | awk '{print $3}' | sed 's/v//') || CURRENT_VERSION="none"
      COMPONENT_VERSION_CLEAN=$(echo "$COMPONENT_VERSION" | sed 's/^v//')

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION_CLEAN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION_CLEAN" ]]; then
        logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"
        logger -t "$LOG_TAG" "[INFO] Updating crictl to version $COMPONENT_VERSION_CLEAN..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading crictl..."
        curl -fsSL -o crictl.tar.gz "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download crictl"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o crictl.sha256sum "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        awk '{print $1"  crictl.tar.gz"}' crictl.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Extracting files..."
        tar -C "$TMP_DIR" -xvf crictl.tar.gz

        logger -t "$LOG_TAG" "[INFO] Installing crictl..."
        install -m 755 "$TMP_DIR/crictl" "$INSTALL_PATH"

        logger -t "$LOG_TAG" "[INFO] crictl successfully updated to $COMPONENT_VERSION_CLEAN."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] crictl is already up to date. Skipping installation."
      fi
    `};function te(e){return(0,r.jsxs)(d.A,{groupId:"install-type",children:[(0,r.jsxs)(u.A,{value:"Bash",children:[(0,r.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
            mkdir -p /etc/default/crictl
          `}),(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
            cat <<EOF > /etc/default/crictl/download.env
            COMPONENT_VERSION="${o.M.crictl.value}"
            REPOSITORY="${i.m.crictl.baseUrl}"
            EOF
          `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
            cat <<"EOF" > /etc/default/crictl/download-script.sh
            ${ee.value}
            EOF
          `}),(0,r.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
            chmod +x /etc/default/crictl/download-script.sh
          `}),(0,r.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
            cat <<EOF > /usr/lib/systemd/system/crictl-install.service
            [Unit]
            Description=Install and update in-cloud component crictl
            After=network.target
            Wants=network-online.target

            [Service]
            Type=oneshot
            EnvironmentFile=-/etc/default/crictl/download.env
            ExecStart=/bin/bash -c "/etc/default/crictl/download-script.sh"
            RemainAfterExit=yes

            [Install]
            WantedBy=multi-user.target
            EOF
          `}),(0,r.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
            systemctl enable crictl-install.service
            systemctl start crictl-install.service
          `})]}),(0,r.jsxs)(u.A,{value:"Cloud-init",children:[(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(s.A,{language:"yaml",children:a.A`
            - path: /etc/default/crictl/download.env
              owner: root:root
              permissions: '0644'
              content: |
                COMPONENT_VERSION="${o.M.crictl.value}"
                REPOSITORY="${i.m.crictl.baseUrl}"
          `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,r.jsx)(s.A,{language:"yaml",children:a.A`
            - path: /etc/default/crictl/download-script.sh
              owner: root:root
              permissions: '0755'
              content: |
                ${ee.value}
          `}),(0,r.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(s.A,{language:"yaml",children:a.A`
            - path: /usr/lib/systemd/system/crictl-install.service
              owner: root:root
              permissions: '0644'
              content: |
                [Unit]
                Description=Install and update in-cloud component crictl
                After=network.target
                Wants=network-online.target

                [Service]
                Type=oneshot
                EnvironmentFile=-/etc/default/crictl/download.env
                ExecStart=/bin/bash -c "/etc/default/crictl/download-script.sh"
                RemainAfterExit=yes

                [Install]
                WantedBy=multi-user.target
          `}),(0,r.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
            - systemctl enable crictl-install.service
            - systemctl start crictl-install.service
          `})]})]})}function ne(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(te,{...e})}):te()}const re=[];function le(e){const t={li:"li",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439."}),"\n",(0,r.jsx)(t.li,{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f."}),"\n",(0,r.jsx)(t.li,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,r.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432."}),"\n",(0,r.jsx)(t.li,{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,r.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n"]}),"\n",(0,r.jsx)(ne,{})]})}function ae(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(le,{...e})}):le(e)}const se=[];function ie(e){const{Details:t}={...(0,l.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),"\n",(0,r.jsxs)(t,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),(0,r.jsx)(g.N,{binaryName:"crictl",version:o.M.crictl.value,installSteps:["Installing crictl..."],successMessage:"crictl successfully updated to",grepCommand:"'crictl$'",lsOutput:"-rwxr-xr-x  1 1001  127  58376628 Apr 18  2024 crictl"}),(0,r.jsx)(g.y,{command:"crictl --version",output:"crictl version v1.30.0"})]})]})}function oe(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(ie,{...e})}):ie(e)}const ce={value:a.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${o.M.kubernetes.value}}"
      REPOSITORY="$\{REPOSITORY:-${i.m.kubeadm.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${i.m.kubeadm.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${i.m.kubeadm.templateUrlBinCheckSum}"
      INSTALL_PATH="${i.m.kubeadm.path}"


      LOG_TAG="kubeadm-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current kubeadm version..."

      CURRENT_VERSION=$($INSTALL_PATH version -o json 2>/dev/null | jq -r '.clientVersion.gitVersion' | sed 's/^v//') || CURRENT_VERSION="none"
      COMPONENT_VERSION_CLEAN=$(echo "$COMPONENT_VERSION" | sed 's/^v//')

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION_CLEAN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION_CLEAN" ]]; then
        logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"
        logger -t "$LOG_TAG" "[INFO] Updating kubeadm to version $COMPONENT_VERSION_CLEAN..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading kubeadm..."
        curl -fsSL -o kubeadm "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download kubeadm"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o kubeadm.sha256sum "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        awk '{print $1"  kubeadm"}' kubeadm.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Installing kubeadm..."
        install -m 755 kubeadm "$INSTALL_PATH"

        logger -t "$LOG_TAG" "[INFO] kubeadm successfully updated to $COMPONENT_VERSION_CLEAN."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] kubeadm is already up to date. Skipping installation."
      fi
    `};function ue(e){return(0,r.jsxs)(d.A,{groupId:"install-type",children:[(0,r.jsxs)(u.A,{value:"Bash",children:[(0,r.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
            mkdir -p /etc/default/kubeadm
          `}),(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
            cat <<EOF > /etc/default/kubeadm/download.env
            COMPONENT_VERSION="${o.M.kubernetes.value}"
            REPOSITORY="${i.m.kubeadm.baseUrl}"
            EOF
          `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
          cat <<"EOF" > /etc/default/kubeadm/download-script.sh
          ${ce.value}
          EOF
        `}),(0,r.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
          chmod +x /etc/default/kubeadm/download-script.sh
        `}),(0,r.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
          cat <<EOF > /usr/lib/systemd/system/kubeadm-install.service
          [Unit]
          Description=Install and update kubeadm
          After=network.target
          Wants=network-online.target

          [Service]
          Type=oneshot
          EnvironmentFile=-/etc/default/kubeadm/download.env
          ExecStart=/bin/bash -c "/etc/default/kubeadm/download-script.sh"
          RemainAfterExit=yes

          [Install]
          WantedBy=multi-user.target
          EOF
        `}),(0,r.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
          systemctl enable kubeadm-install.service
          systemctl start kubeadm-install.service
        `})]}),(0,r.jsxs)(u.A,{value:"Cloud-init",children:[(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(s.A,{language:"yaml",children:a.A`
          - path: /etc/default/kubeadm/download.env
            owner: root:root
            permissions: '0644'
            content: |
              COMPONENT_VERSION="${o.M.kubernetes.value}"
              REPOSITORY="${i.m.kubeadm.baseUrl}"
        `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,r.jsx)(s.A,{language:"yaml",children:a.A`
          - path: /etc/default/kubeadm/download-script.sh
            owner: root:root
            permissions: '0755'
            content: |
              ${ce.value}
        `}),(0,r.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(s.A,{language:"yaml",children:a.A`
          - path: /usr/lib/systemd/system/kubeadm-install.service
            owner: root:root
            permissions: '0644'
            content: |
              [Unit]
              Description=Install and update kubeadm
              After=network.target
              Wants=network-online.target

              [Service]
              Type=oneshot
              EnvironmentFile=-/etc/default/kubeadm/download.env
              ExecStart=/bin/bash -c "/etc/default/kubeadm/download-script.sh"
              RemainAfterExit=yes

              [Install]
              WantedBy=multi-user.target
        `}),(0,r.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
          - systemctl enable kubeadm-install.service
          - systemctl start kubeadm-install.service
        `})]})]})}function de(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(ue,{...e})}):ue()}const he=[];function pe(e){const t={li:"li",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439."}),"\n",(0,r.jsx)(t.li,{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f."}),"\n",(0,r.jsx)(t.li,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,r.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432."}),"\n",(0,r.jsx)(t.li,{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,r.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n"]}),"\n",(0,r.jsx)(de,{})]})}function me(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(pe,{...e})}):pe(e)}const ve=[];function be(e){const{Details:t}={...(0,l.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),"\n",(0,r.jsxs)(t,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),(0,r.jsx)(g.N,{binaryName:"kubeadm",version:o.M.kubernetes.value,installSteps:["Extracting files...","Installing binaries..."],successMessage:"kubeadm successfully updated to",grepCommand:"'kubeadm$'",lsOutput:"-rwxr-xr-x  1 root root  50253976 Aug 14  2024 kubeadm"}),(0,r.jsx)(g.y,{command:"kubeadm version",output:'kubeadm version: &version.Info{Major:"1", Minor:"30", GitVersion:"v1.30.4", GitCommit:"a51b3b711150f57ffc1f526a640ec058514ed596", GitTreeState:"clean", BuildDate:"2024-08-14T19:02:46Z", GoVersion:"go1.22.5", Compiler:"gc", Platform:"linux/amd64"}'})]})]})}function ge(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(be,{...e})}):be(e)}a.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${o.M.etcdctl.value}}"
      REPOSITORY="$\{REPOSITORY:-${i.m.etcdctl.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${i.m.etcdctl.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${i.m.etcdctl.templateUrlBinCheckSum}"
      INSTALL_PATH="${i.m.etcdctl.path}"


      LOG_TAG="etcd-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current etcd version..."

      CURRENT_VERSION=$($INSTALL_PATH/etcd --version 2>/dev/null | grep 'etcd Version:' | awk '{print $3}' | sed 's/v//') || CURRENT_VERSION="none"
      COMPONENT_VERSION_CLEAN=$(echo "$COMPONENT_VERSION" | sed 's/^v//')

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION_CLEAN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION_CLEAN" ]]; then
        logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"
        logger -t "$LOG_TAG" "[INFO] Updating etcd to version $COMPONENT_VERSION_CLEAN..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading etcd..."
        curl -fsSL -o "etcd-$\{COMPONENT_VERSION}-linux-amd64.tar.gz" "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download etcd"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o "etcd.sha256sum" "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        grep "etcd-$\{COMPONENT_VERSION}-linux-amd64.tar.gz" etcd.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Extracting files..."
        tar -C "$TMP_DIR" -xvf "etcd-$\{COMPONENT_VERSION}-linux-amd64.tar.gz"

        logger -t "$LOG_TAG" "[INFO] Installing binaries..."
        install -m 755 "$TMP_DIR/etcd-$\{COMPONENT_VERSION}-linux-amd64/etcd" $INSTALL_PATH
        install -m 755 "$TMP_DIR/etcd-$\{COMPONENT_VERSION}-linux-amd64/etcdctl" $INSTALL_PATH
        install -m 755 "$TMP_DIR/etcd-$\{COMPONENT_VERSION}-linux-amd64/etcdutl" $INSTALL_PATH

        logger -t "$LOG_TAG" "[INFO] etcd successfully updated to $COMPONENT_VERSION_CLEAN."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] etcd is already up to date. Skipping installation."
      fi
    `;const xe=[];function ke(e){const t={admonition:"admonition",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.A,{language:"bash",children:a.A`
  systemctl status containerd
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(s.A,{language:"bash",children:a.A`
  ● containerd.service - containerd container runtime
        Loaded: loaded (/usr/lib/systemd/system/containerd.service; enabled; preset: enabled)
        Active: active (running) since Tue 2024-12-31 17:26:21 UTC; 2min 30s ago
          Docs: https://containerd.io
      Main PID: 839 (containerd)
        Tasks: 7 (limit: 2274)
        Memory: 62.0M (peak: 62.5M)
          CPU: 375ms
        CGroup: /system.slice/containerd.service
                └─839 /usr/local/bin/containerd

  ***** level=info msg="Start subscribing containerd event"
  ***** level=info msg="Start recovering state"
  ***** level=info msg="Start event monitor"
  ***** level=info msg="Start snapshots syncer"
  ***** level=info msg="Start cni network conf syncer for default"
  ***** level=info msg="Start streaming server"
  ***** level=info msg=serving... address=/run/containerd/containerd.sock.ttrpc
  ***** level=info msg=serving... address=/run/containerd/containerd.sock
  ***** level=info msg="containerd successfully booted in 0.065807s"
  ***** Started containerd.service - containerd container runtime.

`})})]})}function je(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(ke,{...e})}):ke(e)}function fe(e){const t={admonition:"admonition",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.A,{language:"bash",children:a.A`
  tree /etc/containerd/
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(s.A,{language:"bash",children:a.A`
  /etc/containerd/
  ├── certs.d
  ├── conf.d
  │   └── cloud.toml
  └── config.toml
`})})]})}function ye(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(fe,{...e})}):fe(e)}const $e=[];function Ae(e){const{Details:t}={...(0,l.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),"\n",(0,r.jsxs)(t,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),(0,r.jsx)(ye,{}),(0,r.jsx)(je,{})]})]})}function Se(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(Ae,{...e})}):Ae(e)}function Ee(e){return(0,r.jsxs)(d.A,{groupId:"install-type",children:[(0,r.jsxs)(u.A,{value:"Bash",children:[(0,r.jsx)(s.A,{language:"bash",children:a.A`
      cat <<EOF > /usr/lib/systemd/system/containerd.service
      [Unit]
      Description=containerd container runtime
      Documentation=https://containerd.io
      After=network.target local-fs.target containerd-install.service runc-install.service
      Wants=containerd-install.service runc-install.service

      [Service]
      ExecStartPre=-/sbin/modprobe overlay
      ExecStart=/usr/local/bin/containerd

      Type=notify
      Delegate=yes
      KillMode=process
      Restart=always
      RestartSec=5
      LimitNPROC=infinity
      LimitCORE=infinity
      LimitNOFILE=infinity
      TasksMax=infinity
      OOMScoreAdjust=-999

      [Install]
      WantedBy=multi-user.target
      EOF
    `}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      systemctl enable containerd
      systemctl start containerd
    `})]}),(0,r.jsxs)(u.A,{value:"Cloud-init",children:[(0,r.jsx)(s.A,{language:"yaml",children:a.A`
        # write_files:
        - path: /usr/lib/systemd/system/containerd.service
          owner: root:root
          permissions: '0644'
          content: |
            [Unit]
            Description=containerd container runtime
            Documentation=https://containerd.io
            After=network.target local-fs.target containerd-install.service runc-install.service
            Wants=containerd-install.service runc-install.service

            [Service]
            ExecStartPre=-/sbin/modprobe overlay
            ExecStart=/usr/local/bin/containerd

            Type=notify
            Delegate=yes
            KillMode=process
            Restart=always
            RestartSec=5
            LimitNPROC=infinity
            LimitCORE=infinity
            LimitNOFILE=infinity
            TasksMax=infinity
            OOMScoreAdjust=-999

            [Install]
            WantedBy=multi-user.target
      `}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      #runcmd:
      - systemctl enable containerd
      - systemctl start containerd
    `})]})]})}function Ne(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(Ee,{...e})}):Ee()}var Oe=n(44349);function Pe(e){return(0,r.jsxs)(d.A,{groupId:"install-type",children:[(0,r.jsxs)(u.A,{value:"Bash",children:[(0,r.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      mkdir -p /etc/containerd/
      mkdir -p /etc/containerd/conf.d
      mkdir -p /etc/containerd/certs.d
    `}),(0,r.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      cat <<"EOF" > /etc/containerd/config.toml
      version = 2
      imports = ["/etc/containerd/conf.d/*.toml"]
      EOF
    `}),(0,r.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      cat <<"EOF" > /etc/containerd/conf.d/in-cloud.toml
      version = 2
      [plugins]
        [plugins."io.containerd.grpc.v1.cri"]
          sandbox_image = "${Oe.M.baseDockerRegistry.value}/${Oe.M.pausedImage.value}"
        [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]
          runtime_type = "io.containerd.runc.v2"
        [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]
          SystemdCgroup = true
        [plugins."io.containerd.grpc.v1.cri".registry]
          config_path = "/etc/containerd/certs.d/"
      EOF
    `})]}),(0,r.jsxs)(u.A,{value:"Cloud-init",children:[(0,r.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"}),(0,r.jsx)(s.A,{language:"yaml",children:a.A`
      - path: /etc/containerd/config.toml
        owner: root:root
        permissions: '0644'
        content: |
          version = 2
          imports = ["/etc/containerd/conf.d/*.toml"]
    `}),(0,r.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,r.jsx)(s.A,{language:"yaml",children:a.A`
      - path: /etc/containerd/conf.d/in-cloud.toml
        owner: root:root
        permissions: '0644'
        content: |
          version = 2
          [plugins]
            [plugins."io.containerd.grpc.v1.cri"]
              sandbox_image = "${Oe.M.baseDockerRegistry.value}/${Oe.M.pausedImage.value}"
            [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]
              runtime_type = "io.containerd.runc.v2"
            [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]
              SystemdCgroup = true
            [plugins."io.containerd.grpc.v1.cri".registry]
              config_path = "/etc/containerd/certs.d/"
    `})]})]})}function Te(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(Pe,{...e})}):Pe()}const Re=[];function Ce(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Systemd Unit \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsx)(t.li,{children:"\u0421\u0442\u0430\u0440\u0442 Systemd Unit"}),"\n"]}),"\n",(0,r.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"warning",children:[(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/components/containerd/lifecycleDownload",children:"Containerd Install"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/components/runc/lifecycleDownload",children:"Runc Install"}),"."]}),"\n"]})]}),"\n",(0,r.jsx)("h3",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsx)(Te,{}),"\n",(0,r.jsx)("h3",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Systemd Unit \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsx)(Ne,{})]})}function Le(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(Ce,{...e})}):Ce(e)}function we(e){const t={admonition:"admonition",code:"code",em:"em",p:"p",strong:"strong",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"warning",children:(0,r.jsxs)(t.p,{children:["\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"Kubeadm"})})," \u0431\u0435\u0437 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 ",(0,r.jsx)(t.code,{children:"kubeadm init"})," \u0438\u043b\u0438 ",(0,r.jsx)(t.code,{children:"kubeadm join"}),", Systemd Unit \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a, \u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d."]})}),"\n",(0,r.jsx)(s.A,{language:"bash",children:a.A`
      systemctl status kubelet
  `}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(s.A,{language:"bash",children:a.A`
      ○ kubelet.service - kubelet: The Kubernetes Node Agent
          Loaded: loaded (/usr/lib/systemd/system/kubelet.service; enabled; preset: enabled)
          Drop-In: /usr/lib/systemd/system/kubelet.service.d
                  └─10-kubeadm.conf
          Active: inactive (dead)
          Docs: https://kubernetes.io/docs/
  `})})]})}function Me(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(we,{...e})}):we(e)}function Ie(e){const t={admonition:"admonition",code:"code",em:"em",p:"p",strong:"strong",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"warning",children:(0,r.jsxs)(t.p,{children:["\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.em,{children:"Kubeadm"})})," \u0431\u0435\u0437 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 ",(0,r.jsx)(t.code,{children:"kubeadm init"})," \u0438\u043b\u0438 ",(0,r.jsx)(t.code,{children:"kubeadm join"}),", \u0444\u0430\u0439\u043b \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 Kubelet (",(0,r.jsx)(t.code,{children:"/var/lib/kubelet/config.yaml"}),") \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d."]})}),"\n",(0,r.jsx)(s.A,{language:"bash",children:a.A`
      ls -la ${Oe.M.kuberneteKubeletFolderPath.value}/config-custom.yaml
  `}),"\n",(0,r.jsx)(s.A,{language:"bash",children:a.A`
      ls -la /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
  `}),"\n",(0,r.jsxs)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:[(0,r.jsx)(s.A,{language:"bash",children:a.A`
      -rw-r--r-- 1 root root 1721 Feb 19 18:57 /var/lib/kubelet/config.yaml
  `}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      -rw-r--r-- 1 root root 903 Feb 19 22:10 /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
  `})]})]})}function _e(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(Ie,{...e})}):Ie(e)}const Fe=[];function Be(e){const{Details:t}={...(0,l.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),"\n",(0,r.jsxs)(t,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),(0,r.jsx)(_e,{}),(0,r.jsx)(Me,{})]})]})}function De(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(Be,{...e})}):Be(e)}function Ge(e){return(0,r.jsx)(s.A,{language:"bash",children:a.A`
      mkdir -p /usr/lib/systemd/system/kubelet.service.d
      mkdir -p /var/lib/kubelet/
  `})}function Ue(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(Ge,{...e})}):Ge()}const ze=[];function Ke(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",p:"p",strong:"strong",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Dropin-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",(0,r.jsx)(t.code,{children:"10-kubeadm.conf"})," \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u0435\u0442 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043d\u0430 \u0442\u0440\u0438 \u0443\u0440\u043e\u0432\u043d\u044f: ",(0,r.jsx)(t.code,{children:"bootstrap-kubeconfig"})," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u043e\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0443\u0437\u043b\u0430 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435 (\u0434\u043e \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0433\u043e ",(0,r.jsx)(t.code,{children:"kubelet.conf"}),"), ",(0,r.jsx)(t.code,{children:"kubeadm-flags.env"})," \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0444\u043b\u0430\u0433\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 ",(0,r.jsx)(t.code,{children:"kubeadm init"})," / ",(0,r.jsx)(t.code,{children:"kubeadm join"})," \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u044e\u0442 \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u0440\u0438 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438, \u0430 ",(0,r.jsx)(t.code,{children:"extra-args.env"})," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0437\u0430\u0434\u0430\u0442\u044c \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,r.jsx)(t.code,{children:"--cloud-provider=external"})," \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 Cloud Controller Manager)."]}),"\n"]}),"\n",(0,r.jsxs)(d.A,{groupId:"install-type",children:[(0,r.jsxs)(u.A,{value:"Bash",children:[(0,r.jsx)(Ue,{}),(0,r.jsx)("h4",{children:"Systemd Unit"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      cat <<EOF > /usr/lib/systemd/system/kubelet.service
      [Unit]
      Description=kubelet: The Kubernetes Node Agent
      Documentation=https://kubernetes.io/docs/
      Wants=network-online.target containerd.service
      After=network-online.target containerd.service

      [Service]
      ExecStart=${i.m.kubelet.path}
      Restart=always
      StartLimitInterval=0
      RestartSec=10

      [Install]
      WantedBy=multi-user.target
      EOF
    `}),(0,r.jsx)("h4",{children:"Systemd Unit Config"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      cat <<EOF > /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
      # Note: This dropin only works with kubeadm and kubelet v1.11+
      [Service]
      Environment="KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=${Oe.M.kubernetesBaseFolderPath.value}/bootstrap-kubelet.conf --kubeconfig=${Oe.M.kubernetesBaseFolderPath.value}/kubelet.conf"
      Environment="KUBELET_CONFIG_ARGS=--config=${Oe.M.kuberneteKubeletFolderPath.value}/config.yaml"
      # This is a file that "kubeadm init" and "kubeadm join" generates at runtime, populating the KUBELET_KUBEADM_ARGS variable dynamically
      EnvironmentFile=-${Oe.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
      # This is a file that the user can use for overrides of the kubelet args as a last resort. Preferably, the user should use
      # the .NodeRegistration.KubeletExtraArgs object in the configuration files instead. KUBELET_EXTRA_ARGS should be sourced from this file.
      EnvironmentFile=-/etc/default/kubelet/extra-args.env
      ExecStart=
      ExecStart=/usr/local/bin/kubelet \\$KUBELET_KUBECONFIG_ARGS \\$KUBELET_CONFIG_ARGS \\$KUBELET_KUBEADM_ARGS \\$KUBELET_EXTRA_ARGS
      EOF
    `}),(0,r.jsxs)(d.A,{groupId:"ccm",children:[(0,r.jsxs)(u.A,{value:"Default",children:[(0,r.jsx)("h4",{children:"Systemd Unit ENV"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
          cat <<EOF > /etc/default/kubelet/extra-args.env
          KUBELET_EXTRA_ARGS=""
          EOF
        `})]}),(0,r.jsxs)(u.A,{value:"Cloud Controller Manager",children:[(0,r.jsx)("h4",{children:"Systemd Unit ENV"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
          cat <<EOF > /etc/default/kubelet/extra-args.env
          KUBELET_EXTRA_ARGS="--cloud-provider=external"
          EOF
        `})]})]}),(0,r.jsx)("h3",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0430\u0432\u0442\u043e\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0443 Systemd Unit"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      systemctl enable kubelet
    `})]}),(0,r.jsxs)(u.A,{value:"Cloud-init",children:[(0,r.jsx)("h4",{children:"Systemd Unit ENV"}),(0,r.jsx)(s.A,{language:"yaml",children:a.A`
      # write_files:
      - path: /usr/lib/systemd/system/kubelet.service
        owner: root:root
        permissions: '0644'
        content: |
          [Unit]
          Description=kubelet: The Kubernetes Node Agent
          Documentation=https://kubernetes.io/docs/
          Wants=network-online.target containerd.service
          After=network-online.target containerd.service

          [Service]
          ExecStart=${i.m.kubelet.path}
          Restart=always
          StartLimitInterval=0
          RestartSec=10

          [Install]
          WantedBy=multi-user.target
    `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(s.A,{language:"yaml",children:a.A`
      # write_files:
      - path: /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
        owner: root:root
        permissions: '0644'
        content: |
          # Note: This dropin only works with kubeadm and kubelet v1.11+
          [Service]
          Environment="KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=${Oe.M.kubernetesBaseFolderPath.value}/bootstrap-kubelet.conf --kubeconfig=${Oe.M.kubernetesBaseFolderPath.value}/kubelet.conf"
          Environment="KUBELET_CONFIG_ARGS=--config=${Oe.M.kuberneteKubeletFolderPath.value}/config.yaml"
          # This is a file that "kubeadm init" and "kubeadm join" generates at runtime, populating the KUBELET_KUBEADM_ARGS variable dynamically
          EnvironmentFile=-${Oe.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
          # This is a file that the user can use for overrides of the kubelet args as a last resort. Preferably, the user should use
          # the .NodeRegistration.KubeletExtraArgs object in the configuration files instead. KUBELET_EXTRA_ARGS should be sourced from this file.
          EnvironmentFile=-/etc/default/kubelet/extra-args.env
          ExecStart=
          ExecStart=/usr/local/bin/kubelet $KUBELET_KUBECONFIG_ARGS $KUBELET_CONFIG_ARGS $KUBELET_KUBEADM_ARGS $KUBELET_EXTRA_ARGS
    `}),(0,r.jsx)("h4",{children:"Systemd Unit Download"}),(0,r.jsx)(s.A,{language:"yaml",children:a.A`
      # write_files:
      - path: /etc/default/kubelet/extra-args.env
        owner: root:root
        permissions: '0644'
        content: |
          KUBELET_EXTRA_ARGS="--cloud-provider=external"
    `}),(0,r.jsx)("h4",{children:"Systemd Unit Custom ENV"}),(0,r.jsxs)(t.admonition,{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"info",children:[(0,r.jsxs)(t.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c ",(0,r.jsx)(t.strong,{children:"\u0442\u043e\u043b\u044c\u043a\u043e"})," \u043f\u0440\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 Kubernetes \u0432\u0440\u0443\u0447\u043d\u0443\u044e (\u043c\u0435\u0442\u043e\u0434\u043e\u043c ",(0,r.jsx)(t.em,{children:"\xabKubernetes the Hard Way\xbb"}),"). \u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",(0,r.jsx)(t.strong,{children:"kubeadm"})," \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,r.jsx)(t.code,{children:"kubeadm-config"}),"."]}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
  # write_files:
  - path: ${Oe.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
    owner: root:root
    permissions: '0644'
    content: |
      KUBELET_KUBEADM_ARGS="--container-runtime-endpoint=unix://${Oe.M.criEndpoint.value} --pod-infra-container-image=${Oe.M.baseDockerRegistry.value}/${Oe.M.pausedImage.value} --config=${Oe.M.kuberneteKubeletFolderPath.value}/config-custom.yaml"
`})]}),(0,r.jsx)("h3",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0430\u0432\u0442\u043e\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0443 Systemd Unit"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      # runcmd:
      - systemctl enable kubelet
    `})]})]})]})}function He(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(Ke,{...e})}):Ke(e)}var Ve=n(26225);function We(e){return(0,r.jsxs)(d.A,{groupId:"install-type",children:[(0,r.jsxs)(u.A,{value:"Bash",children:[(0,r.jsx)("h4",{children:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      cat <<EOF > ${Oe.M.kuberneteKubeletFolderPath.value}/config-custom.yaml
      ---
      ${Ve.h.data.value}
      EOF
    `})]}),(0,r.jsxs)(u.A,{value:"Cloud-init",children:[(0,r.jsx)("h4",{children:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      - path: ${Oe.M.kuberneteKubeletFolderPath.value}/config-custom.yaml
        owner: root:root
        permissions: '0644'
        content: |
          ---
          ${Ve.h.data.value}
    `})]})]})}function qe(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(We,{...e})}):We()}const Ye=[...ze];function Je(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Systemd Unit \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsx)(t.li,{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0430\u0432\u0442\u043e\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0443 Systemd Unit"}),"\n",(0,r.jsx)(t.li,{children:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u0430\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n"]}),"\n",(0,r.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"warning",children:[(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/components/containerd/lifecycleDownload",children:"Containerd Install"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/components/runc/lifecycleDownload",children:"Runc Install"}),"."]}),"\n"]})]}),"\n",(0,r.jsx)("h3",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Systemd Unit \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsx)(He,{}),"\n",(0,r.jsx)("h3",{children:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u0430\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsxs)(n,{className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:"Kubelet config"}),(0,r.jsx)(qe,{})]})]})}function Xe(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(Je,{...e})}):Je(e)}function Qe(e){const t={admonition:"admonition",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.A,{language:"bash",children:a.A`
  ls -la /etc/crictl.yaml
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(s.A,{language:"bash",children:a.A`
  -rw-r--r-- 1 root root 61 Feb 18 15:18 /etc/crictl.yaml
`})}),"\n",(0,r.jsx)(s.A,{language:"bash",children:a.A`
  crictl info \|
    jq '.status.conditions[] \|
    select(.type=="RuntimeReady") \|
    .status'

`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(s.A,{language:"bash",children:a.A`
  true
`})})]})}function Ze(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(Qe,{...e})}):Qe(e)}const et=[];function tt(e){const{Details:t}={...(0,l.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),"\n",(0,r.jsxs)(t,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),(0,r.jsx)(Ze,{})]})]})}function nt(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(tt,{...e})}):tt(e)}function rt(e){return(0,r.jsxs)(d.A,{groupId:"install-type",children:[(0,r.jsxs)(u.A,{value:"Bash",children:[(0,r.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      cat <<"EOF" > /etc/crictl.yaml
      runtime-endpoint: unix://${Oe.M.criEndpoint.value}
      EOF
    `})]}),(0,r.jsxs)(u.A,{value:"Cloud-init",children:[(0,r.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      - path: /etc/crictl.yaml
        owner: root:root
        permissions: '0644'
        content: |
          runtime-endpoint: unix://${Oe.M.criEndpoint.value}
    `})]})]})}function lt(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(rt,{...e})}):rt()}const at=[];function st(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Systemd Unit \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsx)(t.li,{children:"\u0421\u0442\u0430\u0440\u0442 Systemd Unit"}),"\n"]}),"\n",(0,r.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"warning",children:[(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/components/containerd/lifecycleDownload",children:"Containerd Install"}),"."]}),"\n"]})]}),"\n",(0,r.jsx)("h3",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsx)(lt,{})]})}function it(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(st,{...e})}):st(e)}function ot(e){const t={admonition:"admonition",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.A,{language:"bash",children:a.A`
  ls -al ${Oe.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(s.A,{language:"bash",children:a.A`
  -rw-r--r-- 1 root root 6463 Feb 18 15:20 ${Oe.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`})})]})}function ct(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(ot,{...e})}):ot(e)}const ut=[];function dt(e){const{Details:t}={...(0,l.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),"\n",(0,r.jsxs)(t,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),(0,r.jsx)(ct,{})]})]})}function ht(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(dt,{...e})}):dt(e)}var pt=n(56223);n(285);n(95538),n(12480),n(51908);const mt=[];const vt=[];const bt=[...mt,...vt];const gt=[];function xt(e){return(0,r.jsx)(s.A,{language:"bash",children:a.A`
  mkdir -p /var/run/kubeadm/
`})}function kt(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(xt,{...e})}):xt()}const jt=[...gt,...bt];n(51430);var ft=n(65742);const yt=[];n(21186);const $t=[...yt];const At=[];const St=[...At];const Et=[];const Nt=[...Et];const Ot=[];const Pt=[...Ot];const Tt=[];const Rt=[];const Ct=[];const Lt=[];const wt=[];const Mt=[];const It=[];const _t=[];const Ft=[];const Bt=[...[..._t,...Ft]];const Dt=[];const Gt=[];const Ut=[...Dt,...Gt];const zt=[];const Kt=[{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f <code>admin</code>",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kubeconfig-\u0434\u043b\u044f-admin",level:4}];const Ht=[...zt,...Kt];const Vt=[];const Wt=[{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f <code>super-admin</code>",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kubeconfig-\u0434\u043b\u044f-super-admin",level:4}];const qt=[...Vt,...Wt];const Yt=[];const Jt=[{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f <code>controller-manager-client</code>",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kubeconfig-\u0434\u043b\u044f-controller-manager-client",level:4}];const Xt=[...Yt,...Jt];n(27653);const Qt=[];function Zt(e){const t={admonition:"admonition",code:"code",h4:"h4",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h4,{id:"\u044d\u0442\u0430\u043f\u044b-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f sysctl."}),"\n",(0,r.jsx)(t.li,{children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438."}),"\n"]}),"\n",(0,r.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"warning",children:[(0,r.jsx)(t.h4,{id:"\u0441\u0435\u0442\u0435\u0432\u044b\u0435-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",children:"\u0421\u0435\u0442\u0435\u0432\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),(0,r.jsx)(t.p,{children:"\u0414\u043b\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0439 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 \u0442\u0440\u0430\u0444\u0438\u043a\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u0434\u0430\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u044f\u0434\u0440\u0430."}),(0,r.jsxs)(d.A,{groupId:"install-type",children:[(0,r.jsxs)(u.A,{value:"Bash",children:[(0,r.jsx)(t.h4,{id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-sysctl",children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f sysctl"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      cat <<EOF > /etc/sysctl.d/99-br-netfilter.conf
      net.bridge.bridge-nf-call-iptables=1
      net.bridge.bridge-nf-call-ip6tables=1
      EOF
    `}),(0,r.jsx)(t.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      sysctl --system
    `})]}),(0,r.jsxs)(u.A,{value:"Cloud-init",children:[(0,r.jsx)(t.h4,{id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-sysctl-1",children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f sysctl"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      # write_files:
      - path: /etc/sysctl.d/99-br-netfilter.conf
        owner: root:root
        permissions: '0644'
        content: |
          net.bridge.bridge-nf-call-iptables=1
          net.bridge.bridge-nf-call-ip6tables=1
    `}),(0,r.jsx)(t.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438-1",children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      # runcmd:
      - sysctl --system
    `})]})]}),(0,r.jsxs)(t.p,{children:["\u0415\u0441\u043b\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,r.jsx)(t.code,{children:"net.ipv4.ip_forward"})," \u043d\u0435 \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d, \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0441\u044b\u043b\u0430\u0442\u044c IP-\u043f\u0430\u043a\u0435\u0442\u044b \u043c\u0435\u0436\u0434\u0443 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430\u043c\u0438. \u042d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043a \u0441\u0435\u0442\u0435\u0432\u044b\u043c \u0441\u0431\u043e\u044f\u043c \u0432\u043d\u0443\u0442\u0440\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430, \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432 \u0438 \u043f\u043e\u0442\u0435\u0440\u0435 \u0441\u0432\u044f\u0437\u0438 \u043c\u0435\u0436\u0434\u0443 \u043f\u043e\u0434\u0430\u043c\u0438."]}),(0,r.jsxs)(d.A,{groupId:"install-type",children:[(0,r.jsxs)(u.A,{value:"Bash",children:[(0,r.jsx)(t.h4,{id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-sysctl-2",children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f sysctl"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      cat <<EOF > /etc/sysctl.d/99-network.conf
      net.ipv4.ip_forward=1
      EOF
    `}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      sysctl --system
    `})]}),(0,r.jsxs)(u.A,{value:"Cloud-init",children:[(0,r.jsx)(t.h4,{id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-sysctl-3",children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f sysctl"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      # write_files:
      - path: /etc/sysctl.d/99-network.conf
        owner: root:root
        permissions: '0644'
        content: |
          net.ipv4.ip_forward=1
    `}),(0,r.jsx)(t.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438-2",children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      # runcmd:
      - sysctl --system
    `})]})]})]})]})}function en(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(Zt,{...e})}):Zt(e)}function tn(e){const t={blockquote:"blockquote",p:"p",...(0,l.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043f\u043e\u0441\u0432\u044f\u0449\u0435\u043d \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u044f\u0434\u0440\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e sysctl, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u0434\u043b\u044f \u0441\u0435\u0442\u0435\u0432\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b Kubernetes.\n\u0412\u043d\u043e\u0441\u044f\u0442\u0441\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f, \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u044e\u0449\u0438\u0435 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u044e \u0442\u0440\u0430\u0444\u0438\u043a\u0430 \u043c\u0435\u0436\u0434\u0443 \u043f\u043e\u0434\u0430\u043c\u0438 \u0438 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0443 iptables \u0434\u043b\u044f \u043c\u043e\u0441\u0442\u043e\u0432. \u042d\u0442\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b \u0434\u043b\u044f \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u0441\u044b\u043b\u043a\u0438 IP-\u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0438 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 \u0441\u0435\u0442\u0435\u0432\u044b\u0445 \u043f\u043e\u0442\u043e\u043a\u043e\u0432 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435."}),"\n"]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 sysctl"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(en,{})]})]})}function nn(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(tn,{...e})}):tn(e)}const rn=[];const ln=[...rn];n(21232);const an=[];const sn=[...an];n(21502);const on=[];const cn=[];function un(e){const t={admonition:"admonition",h4:"h4",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h4,{id:"\u044d\u0442\u0430\u043f\u044b-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f modprobe."}),"\n",(0,r.jsx)(t.li,{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043c\u043e\u0434\u0443\u043b\u0435\u0439."}),"\n"]}),"\n",(0,r.jsxs)(d.A,{groupId:"install-type",children:[(0,r.jsxs)(u.A,{value:"Bash",children:[(0,r.jsx)(t.h4,{id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-modprobe",children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f modprobe"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
    cat <<EOF > /etc/modules-load.d/k8s.conf
    overlay
    br_netfilter
    EOF
  `}),(0,r.jsx)(t.h4,{id:"\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-\u043c\u043e\u0434\u0443\u043b\u0435\u0439",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043c\u043e\u0434\u0443\u043b\u0435\u0439"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
    sudo -i
    modprobe overlay
    modprobe br_netfilter
  `})]}),(0,r.jsxs)(u.A,{value:"Cloud-init",children:[(0,r.jsx)(t.h4,{id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-modprobe-1",children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f modprobe"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
    # write_files:
    - path: /etc/modules-load.d/k8s.conf
      owner: root:root
      permissions: '0644'
      content: |
        overlay
        br_netfilter
  `}),(0,r.jsx)(t.h4,{id:"\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-\u043c\u043e\u0434\u0443\u043b\u0435\u0439-1",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043c\u043e\u0434\u0443\u043b\u0435\u0439"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
    # runcmd:
    - modprobe overlay
    - modprobe br_netfilter
  `})]})]}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"\u041c\u043e\u0434\u0443\u043b\u044c overlay \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 OverlayFS \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u043b\u043e\u044f\u043c\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432. \u041e\u043d \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439 \u0432 \u0435\u0434\u0438\u043d\u0443\u044e \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u0443\u044e \u0444\u0430\u0439\u043b\u043e\u0432\u0443\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0443. \u041f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0442\u0430\u043a\u0438\u043c\u0438 \u0440\u0430\u043d\u0442\u0430\u0439\u043c\u0430\u043c\u0438, \u043a\u0430\u043a Docker \u0438 containerd."}),(0,r.jsx)(t.p,{children:"\u041c\u043e\u0434\u0443\u043b\u044c br_netfilter \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0442\u0440\u0430\u0444\u0438\u043a\u0430 \u0441\u0435\u0442\u0435\u0432\u044b\u0445 \u043c\u043e\u0441\u0442\u043e\u0432 \u0447\u0435\u0440\u0435\u0437 \u043f\u043e\u0434\u0441\u0438\u0441\u0442\u0435\u043c\u0443 netfilter. \u042d\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043b\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b iptables \u0432 Kubernetes."})]})]})}function dn(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(un,{...e})}):un(e)}function hn(e){const t={blockquote:"blockquote",p:"p",...(0,l.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043f\u043e\u0441\u0432\u044f\u0449\u0435\u043d \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u044f\u0434\u0440\u0430, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u0434\u043b\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b Kubernetes.\n\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e modprobe \u0438 \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u044e \u043c\u043e\u0434\u0443\u043b\u0435\u0439 overlay \u0438 br_netfilter, \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u044e\u0449\u0438\u0445 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043d\u043e\u0439 \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0438 \u0441\u0435\u0442\u0435\u0432\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439. \u042d\u0442\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b \u0434\u043b\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0435\u0442\u0435\u0432\u044b\u0445 \u043f\u043e\u043b\u0438\u0442\u0438\u043a, iptables \u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043d\u044b\u0445 \u0440\u0430\u043d\u0442\u0430\u0439\u043c\u043e\u0432."}),"\n"]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u044f\u0434\u0440\u0430"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(dn,{})]})]})}function pn(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(hn,{...e})}):hn(e)}function mn(e){const t={admonition:"admonition",code:"code",em:"em",p:"p",strong:"strong",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"warning",children:(0,r.jsxs)(t.p,{children:["\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"Kubeadm"})})," \u0431\u0435\u0437 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 ",(0,r.jsx)(t.code,{children:"kubeadm init"})," \u0438\u043b\u0438 ",(0,r.jsx)(t.code,{children:"kubeadm join"}),", Systemd Unit \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a, \u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d."]})}),"\n",(0,r.jsx)(s.A,{language:"bash",children:a.A`
      systemctl status kubelet
  `}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(s.A,{language:"bash",children:a.A`
      ● kubelet.service - kubelet: The Kubernetes Node Agent
              Loaded: loaded (/usr/lib/systemd/system/kubelet.service; enabled; preset: enabled)
          Drop-In: /usr/lib/systemd/system/kubelet.service.d
                      └─10-kubeadm.conf
              Active: active (running) since Sat 2025-02-22 10:33:54 UTC; 17min ago
              Docs: https://kubernetes.io/docs/
          Main PID: 13779 (kubelet)
              Tasks: 14 (limit: 7069)
              Memory: 34.0M (peak: 35.3M)
              CPU: 27.131s
              CGroup: /system.slice/kubelet.service
                      └─13779 /usr/local/bin/kubelet --bootstrap-kubeconfig=/etc/kubernetes/bootstrap-kubelet.conf --kubeconfig=/etc/kubernetes/kubelet.conf --config=/var/lib/kubelet/config.yaml
  `})})]})}function vn(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(mn,{...e})}):mn(e)}const bn=[];function gn(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",p:"p",strong:"strong",...(0,l.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,r.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"warning",children:[(0,r.jsxs)(t.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c ",(0,r.jsx)(t.strong,{children:"\u0442\u043e\u043b\u044c\u043a\u043e"})," \u043f\u0440\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 Kubernetes \u0432\u0440\u0443\u0447\u043d\u0443\u044e (\u043c\u0435\u0442\u043e\u0434\u043e\u043c ",(0,r.jsx)(t.em,{children:"\xabKubernetes the Hard Way\xbb"}),"). \u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",(0,r.jsx)(t.strong,{children:"kubeadm"})," \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,r.jsx)(t.code,{children:"kubeadm-config"}),"."]}),(0,r.jsxs)(d.A,{groupId:"install-type",children:[(0,r.jsx)(u.A,{value:"Bash",children:(0,r.jsx)(s.A,{language:"bash",children:a.A`
        cat <<EOF > ${Oe.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
        KUBELET_KUBEADM_ARGS="--container-runtime-endpoint=unix://${Oe.M.criEndpoint.value} --pod-infra-container-image=${Oe.M.baseDockerRegistry.value}/${Oe.M.pausedImage.value} --config=${Oe.M.kuberneteKubeletFolderPath.value}/config-custom.yaml --cluster-domain=${Oe.M.kubernetesClusterDomain.value} --cluster-dns=${Oe.M.kubernetesDNSAddress.value}
        "
        EOF
      `})}),(0,r.jsx)(u.A,{value:"Cloud-init",children:(0,r.jsx)(s.A,{language:"bash",children:a.A`
        - path: ${Oe.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
          owner: root:root
          permissions: '0644'
          content: |
            KUBELET_KUBEADM_ARGS="--container-runtime-endpoint=unix://${Oe.M.criEndpoint.value} --pod-infra-container-image=${Oe.M.baseDockerRegistry.value}/${Oe.M.pausedImage.value} --config=${Oe.M.kuberneteKubeletFolderPath.value}/config-custom.yaml --cluster-domain=${Oe.M.kubernetesClusterDomain.value} --cluster-dns=${Oe.M.kubernetesDNSAddress.value}                "
      `})})]})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0441\u0435\u0440\u0432\u0438\u0441 Kubelet, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435 \u0432\u0441\u0435\u0445 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u043e\u0432 Static Pods."}),"\n"]}),"\n",(0,r.jsx)(s.A,{language:"bash",children:a.A`
      systemctl start kubelet
  `}),"\n",(0,r.jsx)("h3",{children:"\u0421\u0442\u0430\u0442\u0443\u0441 Systemd Unit"}),"\n",(0,r.jsxs)(n,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 systemd unit"}),(0,r.jsx)(vn,{})]})]})}function xn(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(gn,{...e})}):gn(e)}const kn=[];function jn(e){return(0,r.jsxs)(d.A,{groupId:"install-type",children:[(0,r.jsxs)(u.A,{value:"Bash",children:[(0,r.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      cat <<EOF > ${Oe.M.kuberneteKubeletFolderPath.value}/config.yaml
      ---
      apiVersion: kubelet.config.k8s.io/v1beta1
      authentication:
        anonymous:
          enabled: false
        webhook:
          cacheTTL: 0s
          enabled: true
        x509:
          clientCAFile: /etc/kubernetes/pki/ca.crt
      authorization:
        mode: Webhook
        webhook:
          cacheAuthorizedTTL: 0s
          cacheUnauthorizedTTL: 0s
      cgroupDriver: systemd
      clusterDNS:
      - 29.64.0.10
      clusterDomain: cluster.local
      containerRuntimeEndpoint: ""
      cpuManagerReconcilePeriod: 0s
      evictionPressureTransitionPeriod: 0s
      fileCheckFrequency: 0s
      healthzBindAddress: 127.0.0.1
      healthzPort: 10248
      httpCheckFrequency: 0s
      imageMaximumGCAge: 0s
      imageMinimumGCAge: 0s
      kind: KubeletConfiguration
      logging:
        flushFrequency: 0
        options:
          json:
            infoBufferSize: "0"
          text:
            infoBufferSize: "0"
        verbosity: 0
      memorySwap: {}
      nodeStatusReportFrequency: 0s
      nodeStatusUpdateFrequency: 0s
      resolvConf: /run/systemd/resolve/resolv.conf
      rotateCertificates: true
      runtimeRequestTimeout: 0s
      shutdownGracePeriod: 0s
      shutdownGracePeriodCriticalPods: 0s
      staticPodPath: /etc/kubernetes/manifests
      streamingConnectionIdleTimeout: 0s
      syncFrequency: 0s
      volumeStatsAggPeriod: 0s
      EOF
    `})]}),(0,r.jsxs)(u.A,{value:"Cloud-init",children:[(0,r.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      - path: ${Oe.M.kuberneteKubeletFolderPath.value}/config.yaml
        owner: root:root
        permissions: '0644'
        content: |
          ---
          apiVersion: kubelet.config.k8s.io/v1beta1
          authentication:
            anonymous:
              enabled: false
            webhook:
              cacheTTL: 0s
              enabled: true
            x509:
              clientCAFile: /etc/kubernetes/pki/ca.crt
          authorization:
            mode: Webhook
            webhook:
              cacheAuthorizedTTL: 0s
              cacheUnauthorizedTTL: 0s
          cgroupDriver: systemd
          clusterDNS:
          - 29.64.0.10
          clusterDomain: cluster.local
          containerRuntimeEndpoint: ""
          cpuManagerReconcilePeriod: 0s
          evictionPressureTransitionPeriod: 0s
          fileCheckFrequency: 0s
          healthzBindAddress: 127.0.0.1
          healthzPort: 10248
          httpCheckFrequency: 0s
          imageMaximumGCAge: 0s
          imageMinimumGCAge: 0s
          kind: KubeletConfiguration
          logging:
            flushFrequency: 0
            options:
              json:
                infoBufferSize: "0"
              text:
                infoBufferSize: "0"
            verbosity: 0
          memorySwap: {}
          nodeStatusReportFrequency: 0s
          nodeStatusUpdateFrequency: 0s
          resolvConf: /run/systemd/resolve/resolv.conf
          rotateCertificates: true
          runtimeRequestTimeout: 0s
          shutdownGracePeriod: 0s
          shutdownGracePeriodCriticalPods: 0s
          staticPodPath: /etc/kubernetes/manifests
          streamingConnectionIdleTimeout: 0s
          syncFrequency: 0s
          volumeStatsAggPeriod: 0s
    `})]})]})}function fn(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(jn,{...e})}):jn()}n(50400);function yn(e){const t={li:"li",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0443\u0437\u043b\u043e\u0432"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0443\u0437\u043b\u0430."}),"\n",(0,r.jsx)(t.li,{children:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0438\u043c\u0435\u043d\u0438 \u0443\u0437\u043b\u0430."}),"\n",(0,r.jsx)(t.li,{children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439."}),"\n"]}),"\n",(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0443\u0437\u043b\u0430"}),"\n",(0,r.jsx)(s.A,{language:"bash",children:a.A`
  export HOST_NAME=worker-1
  export CLUSTER_NAME="${Oe.M.clusterName.value}"
  export BASE_DOMAIN="${Oe.M.kubernetesBaseDomain.value}"
  export CLUSTER_DOMAIN="${Oe.M.kubernetesClusterDomain.value}"
  export FULL_HOST_NAME="${Oe.M.virtualMachineFullName.value}"
`}),"\n",(0,r.jsx)("h4",{children:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0438\u043c\u0435\u043d\u0438 \u0443\u0437\u043b\u0430"}),"\n",(0,r.jsx)(s.A,{language:"bash",children:a.A`
  hostnamectl set-hostname $\{FULL_HOST_NAME}
`}),"\n",(0,r.jsx)("h4",{children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439"}),"\n",(0,r.jsxs)(d.A,{groupId:"install-pkg",children:[(0,r.jsx)(u.A,{value:"apt",children:(0,r.jsx)(s.A,{language:"bash",children:a.A`
        sudo apt update
        sudo apt install -y conntrack socat jq tree
      `})}),(0,r.jsx)(u.A,{value:"yum",children:(0,r.jsx)(s.A,{language:"bash",children:a.A`
        sudo yum update
        sudo yum install -y conntrack-tools socat jq tree
      `})}),(0,r.jsx)(u.A,{value:"dnf",children:(0,r.jsx)(s.A,{language:"bash",children:a.A`
        sudo dnf update
        sudo dnf install -y conntrack-tools socat jq tree
      `})})]})]})}function $n(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(yn,{...e})}):yn(e)}function An(e){const t={blockquote:"blockquote",p:"p",...(0,l.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u043c worker-\u0443\u0437\u0435\u043b \u0432 \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0443\u0435\u043c\u043e\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435: \u0437\u0430\u0434\u0430\u0435\u043c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f, \u043c\u0435\u043d\u044f\u0435\u043c hostname \u0438 \u0441\u0442\u0430\u0432\u0438\u043c\n\u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b. \u042d\u0442\u043e \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u0448\u0430\u0433, \u043d\u043e \u0434\u0430\u043b\u044c\u0448\u0435 \u043f\u043e\u0447\u0442\u0438 \u0432\u0441\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0431\u0443\u0434\u0443\u0442 \u043e\u043f\u0438\u0440\u0430\u0442\u044c\u0441\u044f \u0438\u043c\u0435\u043d\u043d\u043e \u043d\u0430 \u044d\u0442\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f."}),"\n"]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0411\u0430\u0437\u043e\u0432\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0443\u0437\u043b\u043e\u0432"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)($n,{})]})]})}function Sn(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(An,{...e})}):An(e)}function En(e){const t={blockquote:"blockquote",code:"code",p:"p",...(0,l.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u0417\u0434\u0435\u0441\u044c \u0441\u0442\u0430\u0432\u0438\u043c \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u043d\u0430\u0431\u043e\u0440 \u0431\u0438\u043d\u0430\u0440\u043d\u0438\u043a\u043e\u0432 \u0434\u043b\u044f worker-\u043d\u043e\u0434\u044b.\n\u042d\u0442\u043e\u0433\u043e \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b, \u043f\u043e\u0434\u043d\u044f\u0442\u044c ",(0,r.jsx)(t.code,{children:"kubelet"})," \u0438 \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c \u0443\u0437\u0435\u043b \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443."]}),"\n"]}),"\n",(0,r.jsxs)(d.A,{groupId:"component",children:[(0,r.jsx)(u.A,{value:"runc",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 runc"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(O,{}),(0,r.jsx)(L,{})]})}),(0,r.jsx)(u.A,{value:"containerd",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 containerd"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(b,{}),(0,r.jsx)(y,{})]})}),(0,r.jsx)(u.A,{value:"kubelet",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 kubelet"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(B,{}),(0,r.jsx)(U,{})]})}),(0,r.jsx)(u.A,{value:"kubectl",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 kubectl"}),(0,r.jsx)("p",{className:"obligatory-note-green",children:"\u25cf \u041d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(q,{}),(0,r.jsx)(Z,{})]})}),(0,r.jsx)(u.A,{value:"crictl",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 crictl"}),(0,r.jsx)("p",{className:"obligatory-note-green",children:"\u25cf \u041d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(ae,{}),(0,r.jsx)(oe,{})]})}),(0,r.jsx)(u.A,{value:"kubeadm",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 kubeadm"}),(0,r.jsx)("p",{className:"obligatory-note-green",children:"\u25cf \u041d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(me,{}),(0,r.jsx)(ge,{})]})})]})]})}function Nn(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(En,{...e})}):En(e)}function On(e){const{Details:t}={...(0,l.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f worker \u043d\u043e\u0434\u044b \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443"}),(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      export CLUSTER_API_ENDPOINT=api.${Oe.M.clusterName.value}.${Oe.M.kubernetesBaseDomain.value}
      export BOOTSTRAP_TOKEN=${Oe.M.bootstrapToken.value}
    `}),(0,r.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubeadm \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0432\u043e\u0440\u043a\u0435\u0440\u0430 \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443"}),(0,r.jsx)(s.A,{children:a.A`cat <<EOF > ${Oe.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
    ---
    apiVersion: kubeadm.k8s.io/v1beta3
    discovery:
      bootstrapToken:
        apiServerEndpoint: $\{CLUSTER_API_ENDPOINT}:${pt.L.securePort.value}
        unsafeSkipCAVerification: true
        token: "$\{BOOTSTRAP_TOKEN}"
    kind: JoinConfiguration
    EOF
  `})]})}function Pn(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(On,{...e})}):On(e)}const Tn=[];function Rn(e){const t={blockquote:"blockquote",code:"code",p:"p",...(0,l.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",(0,r.jsx)(t.code,{children:"kubeadm"})," \u0434\u043b\u044f worker-\u0443\u0437\u043b\u0430 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b ",(0,r.jsx)(t.code,{children:"JoinConfiguration"})," (bootstrap-\u0442\u043e\u043a\u0435\u043d, apiServerEndpoint). \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0438 \u0432\u043e\u0440\u043a\u0435\u0440\u0430 \u043a \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u043c\u0443 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443."]}),"\n"]}),"\n",(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm"}),(0,r.jsx)(Pn,{})]})]})}function Cn(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(Rn,{...e})}):Rn(e)}const Ln=[...gt,...Tn];function wn(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439."}),"\n",(0,r.jsx)(t.li,{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n"]}),"\n",(0,r.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"warning",children:[(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/components/kubelet/lifecycleDownload",children:"Kubelet Install"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/components/containerd/lifecycleDownload",children:"Containerd Install"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/components/runc/lifecycleDownload",children:"Runc Install"}),"."]}),"\n"]})]}),"\n",(0,r.jsx)("h3",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),"\n",(0,r.jsx)(kt,{}),"\n",(0,r.jsx)("h3",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsx)(Cn,{})]})}function Mn(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(wn,{...e})}):wn(e)}function In(e){const t={blockquote:"blockquote",code:"code",p:"p",...(0,l.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u041f\u043e\u0441\u043b\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u043c \u043a\u043e\u043d\u0444\u0438\u0433\u0438 \u0434\u043b\u044f ",(0,r.jsx)(t.code,{children:"containerd"}),", ",(0,r.jsx)(t.code,{children:"kubelet"}),", ",(0,r.jsx)(t.code,{children:"crictl"})," \u0438 \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 ",(0,r.jsx)(t.code,{children:"kubeadm"}),".\n\u0415\u0441\u043b\u0438 \u0434\u0435\u043b\u0430\u0435\u0442\u0435 join \u0432\u0440\u0443\u0447\u043d\u0443\u044e, \u0432\u043a\u043b\u0430\u0434\u043a\u0443 \u0441 ",(0,r.jsx)(t.code,{children:"kubeadm"})," \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c."]}),"\n"]}),"\n",(0,r.jsxs)(d.A,{groupId:"component",children:[(0,r.jsx)(u.A,{value:"containerd",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 containerd"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(Le,{}),(0,r.jsx)(Se,{})]})}),(0,r.jsx)(u.A,{value:"kubelet",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 kubelet"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(Xe,{}),(0,r.jsx)(De,{})]})}),(0,r.jsx)(u.A,{value:"crictl",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 crictl"}),(0,r.jsx)("p",{className:"obligatory-note-green",children:"\u25cf \u041d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),(0,r.jsx)(it,{}),(0,r.jsx)(nt,{})]})}),(0,r.jsx)(u.A,{value:"kubeadm",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 kubeadm"}),(0,r.jsx)("p",{className:"obligatory-note-green",children:"\u25cf \u041d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(Mn,{}),(0,r.jsx)(ht,{})]})})]})]})}function _n(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(In,{...e})}):In(e)}function Fn(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",strong:"strong",...(0,l.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u041d\u0438\u0436\u0435 \u0434\u0432\u0430 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f worker-\u043d\u043e\u0434\u044b \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443.\n\u041f\u0435\u0440\u0432\u044b\u0439 \u0434\u0430\u0435\u0442 \u043f\u043e\u043b\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u043d\u0430\u0434 bootstrap-\u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u043c, \u0432\u0442\u043e\u0440\u043e\u0439 \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0435\u0442 \u043f\u0440\u0438\u0432\u044b\u0447\u043d\u044b\u0439 \u043f\u0443\u0442\u044c \u0447\u0435\u0440\u0435\u0437 ",(0,r.jsx)(t.code,{children:"kubeadm join"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(d.A,{groupId:"auth-strategy",children:[(0,r.jsxs)(u.A,{value:"bootstrap-token",label:"Bootstrap Token (Hard Way)",children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u042d\u0442\u043e \u0440\u0443\u0447\u043d\u043e\u0439 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439: \u0441\u043e\u0437\u0434\u0430\u0435\u043c ",(0,r.jsx)(t.code,{children:"bootstrap-kubelet.conf"}),", \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c kubelet \u0438 \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0441\u0430\u043c\u0438 \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u043c CSR\n\u0447\u0435\u0440\u0435\u0437 Kubernetes API.\n\u041f\u043e\u0434\u0445\u043e\u0434\u0438\u0442, \u0435\u0441\u043b\u0438 \u0445\u043e\u0442\u0438\u0442\u0435 \u0432\u0438\u0434\u0435\u0442\u044c \u0432\u0435\u0441\u044c \u043f\u0443\u0442\u044c TLS Bootstrap \u0431\u0435\u0437 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u043a\u0438 ",(0,r.jsx)(t.code,{children:"kubeadm"}),"."]}),"\n"]}),(0,r.jsx)(t.admonition,{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"danger",children:(0,r.jsxs)(t.p,{children:["\u0412 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u043d\u0438\u0436\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ",(0,r.jsx)(t.strong,{children:"\u0441\u0442\u0430\u0442\u0438\u0447\u043d\u044b\u0439 bootstrap-\u0442\u043e\u043a\u0435\u043d"})," \u0434\u043b\u044f \u0432\u0441\u0435\u0445 worker-\u0443\u0437\u043b\u043e\u0432.\n\u0414\u043b\u044f production-\u0441\u0440\u0435\u0434\u044b \u043b\u0443\u0447\u0448\u0435 \u0432\u044b\u043f\u0443\u0441\u043a\u0430\u0442\u044c ",(0,r.jsx)(t.strong,{children:"\u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u043d\u0430 \u043a\u0430\u0436\u0434\u0443\u044e \u043d\u043e\u0434\u0443"})," \u0438 \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044c \u0435\u043c\u0443 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u044b\u0439 \u0441\u0440\u043e\u043a \u0436\u0438\u0437\u043d\u0438."]})}),(0,r.jsx)("h3",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 bootstrap-\u0442\u043e\u043a\u0435\u043d\u0430"}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Bootstrap-\u0442\u043e\u043a\u0435\u043d \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0432 Secret \u0432 namespace ",(0,r.jsx)(t.code,{children:"kube-system"})," \u0438 \u0434\u0430\u0435\u0442 \u043d\u043e\u0432\u043e\u0439 \u043d\u043e\u0434\u0435 \u043f\u0440\u0430\u0432\u043e \u043d\u0430\u0447\u0430\u0442\u044c bootstrap-\u043f\u0440\u043e\u0446\u0435\u0441\u0441.\n\u041d\u0438\u0436\u0435 \u0434\u0432\u0430 \u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u0435\u0433\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c."]}),"\n"]}),(0,r.jsxs)(d.A,{groupId:"token-creation",children:[(0,r.jsxs)(u.A,{value:"manual",label:"\u0412\u0440\u0443\u0447\u043d\u0443\u044e",children:[(0,r.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f \u041c\u0430\u0441\u0442\u0435\u0440-\u043d\u043e\u0434\u0430",type:"warning",children:(0,r.jsxs)(t.p,{children:["\u041a\u043e\u043c\u0430\u043d\u0434\u044b \u043d\u0438\u0436\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u043d\u0430 ",(0,r.jsx)(t.strong,{children:"\u043c\u0430\u0441\u0442\u0435\u0440-\u043d\u043e\u0434\u0435"})," \u0438\u043b\u0438 \u043d\u0430 \u0445\u043e\u0441\u0442\u0435 \u0441 kubeconfig, \u0438\u043c\u0435\u044e\u0449\u0438\u043c \u043f\u0440\u0430\u0432\u0430 \u043d\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 Secret \u0432 namespace ",(0,r.jsx)(t.code,{children:"kube-system"}),"."]})}),(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
          export AUTH_EXTRA_GROUPS="system:bootstrappers:kubeadm:default-node-token"
          export DESCRIPTION="kubeadm bootstrap token"
          export EXPIRATION=$(date -d '24 hours' "+%Y-%m-%dT%H:%M:%SZ")
          export TOKEN_ID="fjt9ex"
          export TOKEN_SECRET="lwzqgdlvoxtqk4yw"
          export USAGE_BOOTSTRAP_AUTHENTIFICATION="true"
          export USAGE_BOOTSTRAP_SIGNING="true"
        `}),(0,r.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 Secret"}),(0,r.jsx)(s.A,{children:a.A`
          kubectl \\
            --kubeconfig=${Oe.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
            apply -f - <<EOF
          ---
          apiVersion: v1
          kind: Secret
          metadata:
            name: bootstrap-token-$\{TOKEN_ID}
            namespace: kube-system
          data:
            auth-extra-groups: $(echo -n "$AUTH_EXTRA_GROUPS" | base64)
            description: $(echo -n "$DESCRIPTION" | base64)
            expiration: $(echo -n "$EXPIRATION" | base64)
            token-id: $(echo -n "$TOKEN_ID" | base64)
            token-secret: $(echo -n "$TOKEN_SECRET" | base64)
            usage-bootstrap-authentication: $(echo -n "$USAGE_BOOTSTRAP_AUTHENTIFICATION" | base64)
            usage-bootstrap-signing: $(echo -n "$USAGE_BOOTSTRAP_SIGNING" | base64)
          type: bootstrap.kubernetes.io/token
          EOF
        `})]}),(0,r.jsxs)(u.A,{value:"kubeadm-token",label:"kubeadm token create",children:[(0,r.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f \u041c\u0430\u0441\u0442\u0435\u0440-\u043d\u043e\u0434\u0430",type:"warning",children:(0,r.jsxs)(t.p,{children:["\u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u043d\u0430 ",(0,r.jsx)(t.strong,{children:"\u043c\u0430\u0441\u0442\u0435\u0440-\u043d\u043e\u0434\u0435"})," \u0438\u043b\u0438 \u043d\u0430 \u0445\u043e\u0441\u0442\u0435 \u0441 kubeconfig, \u0438\u043c\u0435\u044e\u0449\u0438\u043c \u043f\u0440\u0430\u0432\u0430 \u043d\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 bootstrap-\u0442\u043e\u043a\u0435\u043d\u0430\u043c\u0438."]})}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
          kubeadm token create \\
            --kubeconfig=${Oe.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
            --print-join-command \\
            --ttl 24h
        `}),(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(s.A,{language:"bash",children:a.A`
  kubeadm join api.${Oe.M.clusterName.value}.${Oe.M.kubernetesBaseDomain.value}:6443 \\
    --token <generated-token> \\
    --discovery-token-ca-cert-hash sha256:<hash>
`})}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 ",(0,r.jsx)(t.code,{children:"bootstrap-kubelet.conf"})," \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e ",(0,r.jsx)(t.code,{children:"kubeadm join"}),"."]}),"\n"]})]})]}),(0,r.jsx)("h3",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 bootstrap-kubelet.conf"}),(0,r.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Worker-\u043d\u043e\u0434\u0430",type:"info",children:(0,r.jsxs)(t.p,{children:["\u0412\u0441\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u044d\u0442\u0430\u043f\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u043d\u0430 ",(0,r.jsx)(t.strong,{children:"worker-\u043d\u043e\u0434\u0435"}),".\n\u041d\u0430 worker-\u043d\u043e\u0434\u0435 \u0444\u0430\u0439\u043b ",(0,r.jsx)(t.code,{children:"ca.crt"})," \u0435\u0449\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442. CA-\u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0438\u0437 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e ConfigMap ",(0,r.jsx)(t.code,{children:"cluster-info"}),"\n\u0432 namespace ",(0,r.jsx)(t.code,{children:"kube-public"}),", \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0433\u043e \u0430\u043d\u043e\u043d\u0438\u043c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 kube-apiserver."]})}),(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      export BOOTSTRAP_TOKEN=${Oe.M.bootstrapToken.value}
      export API_SERVER="https://api.${Oe.M.clusterName.value}.${Oe.M.kubernetesBaseDomain.value}:6443"
    `}),(0,r.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      mkdir -p ${Oe.M.kubernetesBaseFolderPath.value}
    `}),(0,r.jsx)("h4",{children:"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 CA \u0438\u0437 cluster-info"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      export CA_DATA=$(curl -sk "$\{API_SERVER}/api/v1/namespaces/kube-public/configmaps/cluster-info" | \\
        jq -r '.data.kubeconfig' | \\
        grep 'certificate-authority-data' | \\
        awk '{print $2}')
    `}),(0,r.jsx)("h4",{children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 CA-\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      mkdir -p ${Oe.M.kubernetesBaseFolderPath.value}/pki
      echo "$\{CA_DATA}" | base64 -d > ${Oe.M.kubernetesBaseFolderPath.value}/pki/ca.crt
    `}),(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f kubeconfig"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      cat <<EOF > ${Oe.M.kubernetesBaseFolderPath.value}/bootstrap-kubelet.conf
      apiVersion: v1
      clusters:
      - cluster:
          certificate-authority-data: $\{CA_DATA}
          server: $\{API_SERVER}
        name: ${Oe.M.clusterName.value}
      contexts:
      - context:
          cluster: ${Oe.M.clusterName.value}
          user: tls-bootstrap-token-user
        name: tls-bootstrap-token-user@kubernetes
      current-context: tls-bootstrap-token-user@kubernetes
      kind: Config
      preferences: {}
      users:
      - name: tls-bootstrap-token-user
        user:
          token: $\{BOOTSTRAP_TOKEN}
      EOF
    `}),(0,r.jsx)("h3",{children:"Kubernetes CSR (\u0438\u043c\u0438\u0442\u0430\u0446\u0438\u044f TLS Bootstrap)"}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u041d\u0438\u0436\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u043d \u0442\u043e\u0442 \u0436\u0435 \u043f\u043e\u0442\u043e\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 kubelet \u043e\u0431\u044b\u0447\u043d\u043e \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442 \u0441\u0430\u043c \u0432\u043e \u0432\u0440\u0435\u043c\u044f TLS Bootstrap:\n\u043a\u043b\u044e\u0447\u0438 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u043d\u0430 worker-\u043d\u043e\u0434\u0435, CSR \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 Kubernetes API,\n\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u044c \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440 \u043d\u0430 \u043c\u0430\u0441\u0442\u0435\u0440-\u043d\u043e\u0434\u0435.\n\u041f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 CA \u043d\u0430 worker-\u043d\u043e\u0434\u0435 \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e ",(0,r.jsx)(t.strong,{children:"\u043d\u0435 \u043d\u0443\u0436\u0435\u043d"}),"."]}),"\n"]}),(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"Kubelet Client Certificate (CSR)"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435:"})," \u041a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0439 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 kubelet \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a kube-apiserver."]}),"\n"]}),(0,r.jsx)("h4",{children:"1. \u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043a\u043b\u044e\u0447\u0430 \u0438 CSR"}),(0,r.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Worker-\u043d\u043e\u0434\u0430",type:"info",children:(0,r.jsxs)(t.p,{children:["\u0412\u0441\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u044d\u0442\u0430\u043f\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u043d\u0430 ",(0,r.jsx)(t.strong,{children:"worker-\u043d\u043e\u0434\u0435"}),"."]})}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
        export HOST_NAME=worker-1
        export CLUSTER_NAME="${Oe.M.clusterName.value}"
        export BASE_DOMAIN="${Oe.M.kubernetesBaseDomain.value}"
        export FULL_HOST_NAME="${Oe.M.virtualMachineFullName.value}"
      `}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
        mkdir -p ${Oe.M.kuberneteKubeletFolderPath.value}/pki
        mkdir -p ${Oe.M.kubernetesBaseFolderPath.value}/openssl/csr
      `}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
        cat <<EOF > ${ft.$.kubeletClient.crtConf}
        [ req ]
        default_bits        = ${ft.$.kubeletClient.keySize}
        prompt              = no
        default_md          = sha256
        distinguished_name  = dn

        [ dn ]
        CN = system:node:$\{FULL_HOST_NAME}
        O  = system:nodes

        [ v3_ext ]
        authorityKeyIdentifier=keyid,issuer:always
        basicConstraints=CA:FALSE
        keyUsage=keyEncipherment,dataEncipherment
        extendedKeyUsage=clientAuth
        EOF
      `}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
        openssl genrsa \\
          -out ${ft.$.kubeletClient.keyPath} ${ft.$.kubeletClient.keySize}
      `}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
        openssl req -new \\
          -key ${ft.$.kubeletClient.keyPath} \\
          -out ${ft.$.kubeletClient.csrPath} \\
          -config ${ft.$.kubeletClient.crtConf}
      `}),(0,r.jsx)("h4",{children:"2. \u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 CSR \u0432 Kubernetes API"}),(0,r.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Worker-\u043d\u043e\u0434\u0430",type:"info",children:(0,r.jsxs)(t.p,{children:["Worker-\u043d\u043e\u0434\u0430 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u0443\u0435\u0442\u0441\u044f bootstrap-\u0442\u043e\u043a\u0435\u043d\u043e\u043c \u0447\u0435\u0440\u0435\u0437 ",(0,r.jsx)(t.code,{children:"bootstrap-kubelet.conf"}),"."]})}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
        export HOST_NAME=worker-1
        export CSR_NAME="$\{HOST_NAME}-kubelet-client"
        export CSR_CONTENT=$(cat ${ft.$.kubeletClient.csrPath} | base64 | tr -d '\\n')
      `}),(0,r.jsx)(s.A,{children:a.A`
        kubectl \\
          --kubeconfig=${Oe.M.kubernetesBaseFolderPath.value}/bootstrap-kubelet.conf \\
          apply -f - <<EOF
        apiVersion: certificates.k8s.io/v1
        kind: CertificateSigningRequest
        metadata:
          name: $\{CSR_NAME}
        spec:
          request: $\{CSR_CONTENT}
          signerName: kubernetes.io/kube-apiserver-client-kubelet
          usages:
          - digital signature
          - key encipherment
          - client auth
        EOF
      `}),(0,r.jsx)("h4",{children:"3. \u0423\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 CSR"}),(0,r.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f \u041c\u0430\u0441\u0442\u0435\u0440-\u043d\u043e\u0434\u0430",type:"warning",children:(0,r.jsxs)(t.p,{children:["\u0423\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 CSR \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u043d\u0430 ",(0,r.jsx)(t.strong,{children:"\u043c\u0430\u0441\u0442\u0435\u0440-\u043d\u043e\u0434\u0435"}),". \u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0438\u043c\u044f worker-\u043d\u043e\u0434\u044b, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442\u0441\u044f CSR."]})}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
        export HOST_NAME=worker-1
        export CSR_NAME="$\{HOST_NAME}-kubelet-client"
      `}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
        kubectl \\
          --kubeconfig=${Oe.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
          certificate approve $\{CSR_NAME}
      `}),(0,r.jsx)("h4",{children:"4. \u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,r.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Worker-\u043d\u043e\u0434\u0430",type:"info",children:(0,r.jsxs)(t.p,{children:["\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u043d\u0430 ",(0,r.jsx)(t.strong,{children:"worker-\u043d\u043e\u0434\u0435"})," \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c ",(0,r.jsx)(t.code,{children:"bootstrap-kubelet.conf"}),"."]})}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
        export HOST_NAME=worker-1
        export CSR_NAME="$\{HOST_NAME}-kubelet-client"
      `}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
        kubectl \\
          --kubeconfig=${Oe.M.kubernetesBaseFolderPath.value}/bootstrap-kubelet.conf \\
          get csr $\{CSR_NAME} \\
          -o jsonpath='{.status.certificate}' | base64 -d > ${ft.$.kubeletClient.crtPath}
      `}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
        cat ${ft.$.kubeletClient.crtPath} ${ft.$.kubeletClient.keyPath} > ${ft.$.kubeletNowClient.crtPath}
        ln -sf ${ft.$.kubeletNowClient.crtPath} ${ft.$.kubeletCurrentClient.crtPath}
      `})]}),(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"Kubelet Server Certificate (CSR)"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435:"})," \u0421\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u0439 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 kubelet \u0434\u043b\u044f TLS \u043d\u0430 \u043f\u043e\u0440\u0442\u0443 10250."]}),"\n"]}),(0,r.jsx)("h4",{children:"1. \u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043a\u043b\u044e\u0447\u0430 \u0438 CSR"}),(0,r.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Worker-\u043d\u043e\u0434\u0430",type:"info",children:(0,r.jsxs)(t.p,{children:["\u0412\u0441\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u044d\u0442\u0430\u043f\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u043d\u0430 ",(0,r.jsx)(t.strong,{children:"worker-\u043d\u043e\u0434\u0435"}),"."]})}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
        export HOST_NAME=worker-1
        export CLUSTER_NAME="${Oe.M.clusterName.value}"
        export BASE_DOMAIN="${Oe.M.kubernetesBaseDomain.value}"
        export FULL_HOST_NAME="${Oe.M.virtualMachineFullName.value}"
        export MACHINE_LOCAL_ADDRESS="${Oe.M.virtualMachineLocalAddress.value}"
      `}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
        mkdir -p ${Oe.M.kuberneteKubeletFolderPath.value}/pki
        mkdir -p ${Oe.M.kubernetesBaseFolderPath.value}/openssl/csr
      `}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
        cat <<EOF > ${ft.$.kubeletServer.crtConf}
        [ req ]
        default_bits        = ${ft.$.kubeletServer.keySize}
        prompt              = no
        default_md          = sha256
        distinguished_name  = dn
        req_extensions      = req_ext

        [ req_ext ]
        subjectAltName = @alt_names

        [ alt_names ]
        DNS.1 = localhost
        DNS.2 = $\{HOST_NAME}
        DNS.3 = $\{FULL_HOST_NAME}
        IP.1  = 127.0.0.1
        IP.2  = 0:0:0:0:0:0:0:1
        IP.3  = $\{MACHINE_LOCAL_ADDRESS}

        [ dn ]
        CN = system:node:$\{FULL_HOST_NAME}
        O  = system:nodes

        [ v3_ext ]
        authorityKeyIdentifier=keyid,issuer:always
        basicConstraints=CA:FALSE
        keyUsage=keyEncipherment,dataEncipherment
        extendedKeyUsage=serverAuth
        subjectAltName=@alt_names
        EOF
      `}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
        openssl genrsa \\
          -out ${ft.$.kubeletServer.keyPath} ${ft.$.kubeletServer.keySize}
      `}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
        openssl req -new \\
          -key ${ft.$.kubeletServer.keyPath} \\
          -out ${ft.$.kubeletServer.csrPath} \\
          -config ${ft.$.kubeletServer.crtConf}
      `}),(0,r.jsx)("h4",{children:"2. \u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 CSR \u0432 Kubernetes API"}),(0,r.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Worker-\u043d\u043e\u0434\u0430",type:"info",children:(0,r.jsxs)(t.p,{children:["Worker-\u043d\u043e\u0434\u0430 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u0443\u0435\u0442\u0441\u044f bootstrap-\u0442\u043e\u043a\u0435\u043d\u043e\u043c \u0447\u0435\u0440\u0435\u0437 ",(0,r.jsx)(t.code,{children:"bootstrap-kubelet.conf"}),"."]})}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
        export HOST_NAME=worker-1
        export CSR_NAME="$\{HOST_NAME}-kubelet-server"
        export CSR_CONTENT=$(cat ${ft.$.kubeletServer.csrPath} | base64 | tr -d '\\n')
      `}),(0,r.jsx)(s.A,{children:a.A`
        kubectl \\
          --kubeconfig=${Oe.M.kubernetesBaseFolderPath.value}/bootstrap-kubelet.conf \\
          apply -f - <<EOF
        apiVersion: certificates.k8s.io/v1
        kind: CertificateSigningRequest
        metadata:
          name: $\{CSR_NAME}
        spec:
          request: $\{CSR_CONTENT}
          signerName: kubernetes.io/kubelet-serving
          usages:
          - digital signature
          - key encipherment
          - server auth
        EOF
      `}),(0,r.jsx)("h4",{children:"3. \u0423\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 CSR"}),(0,r.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f \u041c\u0430\u0441\u0442\u0435\u0440-\u043d\u043e\u0434\u0430",type:"warning",children:(0,r.jsxs)(t.p,{children:["\u0423\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 CSR \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u043d\u0430 ",(0,r.jsx)(t.strong,{children:"\u043c\u0430\u0441\u0442\u0435\u0440-\u043d\u043e\u0434\u0435"}),". \u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0438\u043c\u044f worker-\u043d\u043e\u0434\u044b, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442\u0441\u044f CSR."]})}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
        export HOST_NAME=worker-1
        export CSR_NAME="$\{HOST_NAME}-kubelet-server"
      `}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
        kubectl \\
          --kubeconfig=${Oe.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
          certificate approve $\{CSR_NAME}
      `}),(0,r.jsx)("h4",{children:"4. \u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,r.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Worker-\u043d\u043e\u0434\u0430",type:"info",children:(0,r.jsxs)(t.p,{children:["\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u043d\u0430 ",(0,r.jsx)(t.strong,{children:"worker-\u043d\u043e\u0434\u0435"})," \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c ",(0,r.jsx)(t.code,{children:"bootstrap-kubelet.conf"}),"."]})}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
        export HOST_NAME=worker-1
        export CSR_NAME="$\{HOST_NAME}-kubelet-server"
      `}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
        kubectl \\
          --kubeconfig=${Oe.M.kubernetesBaseFolderPath.value}/bootstrap-kubelet.conf \\
          get csr $\{CSR_NAME} \\
          -o jsonpath='{.status.certificate}' | base64 -d > ${ft.$.kubeletServer.crtPath}
      `}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
        cat ${ft.$.kubeletServer.crtPath} ${ft.$.kubeletServer.keyPath} > ${ft.$.kubeletNowServer.crtPath}
        ln -sf ${ft.$.kubeletNowServer.crtPath} ${ft.$.kubeletCurrentServer.crtPath}
      `})]})]}),(0,r.jsxs)(u.A,{value:"kubeadm",label:"Kubeadm",children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u0417\u0434\u0435\u0441\u044c \u043f\u043e\u0447\u0442\u0438 \u0432\u0441\u0435 \u0434\u0435\u043b\u0430\u0435\u0442 ",(0,r.jsx)(t.code,{children:"kubeadm join"}),": \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 ",(0,r.jsx)(t.code,{children:"cluster-info"}),", \u0441\u0442\u0430\u0440\u0442\u0443\u0435\u0442 kubelet \u0438 \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442 TLS Bootstrap.\n\u042d\u0442\u043e \u0441\u0430\u043c\u044b\u0439 \u0431\u043b\u0438\u0437\u043a\u0438\u0439 \u043a \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0439 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u043f\u0443\u0442\u044c."]}),"\n"]}),(0,r.jsx)("h3",{children:"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0442\u043e\u043a\u0435\u043d\u0430"}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u0415\u0441\u043b\u0438 \u0442\u043e\u043a\u0435\u043d \u043d\u0435 \u0431\u044b\u043b \u0441\u043e\u0437\u0434\u0430\u043d \u0437\u0430\u0440\u0430\u043d\u0435\u0435 \u0438\u043b\u0438 \u0438\u0441\u0442\u0435\u043a, \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0439\u0442\u0435 \u043d\u043e\u0432\u044b\u0439."}),"\n"]}),(0,r.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f \u041c\u0430\u0441\u0442\u0435\u0440-\u043d\u043e\u0434\u0430",type:"warning",children:(0,r.jsxs)(t.p,{children:["\u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u043d\u0430 ",(0,r.jsx)(t.strong,{children:"\u043c\u0430\u0441\u0442\u0435\u0440-\u043d\u043e\u0434\u0435"})," \u0438\u043b\u0438 \u043d\u0430 \u0445\u043e\u0441\u0442\u0435 \u0441 kubeconfig, \u0438\u043c\u0435\u044e\u0449\u0438\u043c \u043f\u0440\u0430\u0432\u0430 \u043d\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 bootstrap-\u0442\u043e\u043a\u0435\u043d\u0430\u043c\u0438."]})}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      kubeadm token create \\
        --kubeconfig=${Oe.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
        --print-join-command \\
        --ttl 24h
    `}),(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(s.A,{language:"bash",children:a.A`
  kubeadm join api.${Oe.M.clusterName.value}.${Oe.M.kubernetesBaseDomain.value}:6443 \\
    --token <generated-token> \\
    --discovery-token-ca-cert-hash sha256:<hash>
`})}),(0,r.jsx)("h3",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f kubeadm"}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u043d\u0444\u0438\u0433 ",(0,r.jsx)(t.code,{children:"kubeadm"})," \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u043f\u0440\u044f\u043c\u043e \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435."]}),"\n"]}),(0,r.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"warning",children:(0,r.jsxs)(t.p,{children:["\u041f\u0435\u0440\u0435\u0434 \u0437\u0430\u043f\u0443\u0441\u043a\u043e\u043c \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0443 \u0432\u0430\u0441 \u0443\u0436\u0435 \u0433\u043e\u0442\u043e\u0432 \u0444\u0430\u0439\u043b ",(0,r.jsx)(t.code,{children:"kubeadm.yaml"})," \u0438\u0437 \u0440\u0430\u0437\u0434\u0435\u043b\u0430\n",(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/components/all-setup-dp",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u041f\u041e (DP)"}),"."]})}),(0,r.jsx)("h4",{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0442\u0430\u0442\u0438\u0447\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0430"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      kubeadm join \\
        --config=${Oe.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
    `}),(0,r.jsx)("h4",{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u043a\u0435\u043d\u0430 \u0438\u0437 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438"}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
      kubeadm join \\
        api.${Oe.M.clusterName.value}.${Oe.M.kubernetesBaseDomain.value}:6443 \\
        --token <generated-token> \\
        --discovery-token-ca-cert-hash sha256:<hash>
    `})]})]})]})}function Bn(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(Fn,{...e})}):Fn(e)}function Dn(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u041d\u0430 \u044d\u0442\u043e\u043c \u0448\u0430\u0433\u0435 \u043d\u043e\u0434\u0430 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0432\u0441\u0435, \u0447\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u0434\u043b\u044f \u0441\u0442\u0430\u0440\u0442\u0430 ",(0,r.jsx)(t.code,{children:"kubelet"}),", \u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435.\n\u0412 \u0440\u0443\u0447\u043d\u043e\u043c \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0438 \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u043c \u043a\u043e\u043d\u0444\u0438\u0433 \u0438 \u043f\u043e\u0434\u043d\u0438\u043c\u0430\u0435\u043c \u0441\u0435\u0440\u0432\u0438\u0441 \u0441\u0430\u043c\u0438, \u0430 \u0432 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0435 \u0441 ",(0,r.jsx)(t.code,{children:"kubeadm"})," \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u043e\u0434\u043d\u043e\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u044b."]}),"\n"]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0417\u0430\u043f\u0443\u0441\u043a/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 kubelet"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsxs)(d.A,{groupId:"install-type",children:[(0,r.jsxs)(u.A,{value:"HardWay",children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u041d\u0438\u0436\u0435 \u0431\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433 ",(0,r.jsx)(t.code,{children:"kubelet"}),", \u043e\u0442 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0431\u0443\u0434\u0435\u043c \u0441\u0442\u0430\u0440\u0442\u043e\u0432\u0430\u0442\u044c \u043d\u0430 worker-\u043d\u043e\u0434\u0435."]}),"\n"]}),(0,r.jsxs)(n,{className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:"Kubelet default config"}),(0,r.jsx)(fn,{})]}),(0,r.jsxs)(t.admonition,{title:"\u041f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",type:"warning",children:[(0,r.jsxs)(t.p,{children:["\u041f\u0435\u0440\u0435\u0434 \u0441\u0442\u0430\u0440\u0442\u043e\u043c ",(0,r.jsx)(t.code,{children:"kubelet"})," \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0432\u044b \u0443\u0436\u0435 \u043f\u0440\u043e\u0448\u043b\u0438 \u0440\u0430\u0437\u0434\u0435\u043b\n",(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/authentication-dp",children:"5.3.2. \u0410\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f"})," \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438:"]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 CA-\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430 (",(0,r.jsx)(t.code,{children:"ca.crt"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 ",(0,r.jsx)(t.code,{children:"bootstrap-kubelet.conf"})," (\u0438\u043b\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0432\u0440\u0443\u0447\u043d\u0443\u044e)"]}),"\n"]})]}),(0,r.jsx)(xn,{})]}),(0,r.jsxs)(u.A,{value:"Kubeadm",children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u0417\u0434\u0435\u0441\u044c \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c ",(0,r.jsx)(t.code,{children:"kubeadm join"}),": \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0441\u0430\u043c\u0430 \u043f\u043e\u0434\u043d\u0438\u043c\u0435\u0442 ",(0,r.jsx)(t.code,{children:"kubelet"}),",\n\u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442 TLS Bootstrap \u0438 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442 \u043d\u043e\u0434\u0443."]}),"\n"]}),(0,r.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"warning",children:(0,r.jsxs)(t.p,{children:["\u041f\u0435\u0440\u0435\u0434 \u0437\u0430\u043f\u0443\u0441\u043a\u043e\u043c \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0433\u043e\u0442\u043e\u0432 \u043a\u043e\u043d\u0444\u0438\u0433 \u0438\u0437 \u0440\u0430\u0437\u0434\u0435\u043b\u0430\n",(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/components/all-setup-dp",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u041f\u041e (DP)"}),"."]})}),(0,r.jsx)(s.A,{language:"bash",children:a.A`
        kubeadm join \\
          --config=${Oe.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
      `}),(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(s.A,{language:"bash",children:a.A`
  [preflight] Running pre-flight checks
  [preflight] Reading configuration from the cluster...
  [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
  [kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
  [kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"
  [kubelet-start] Starting the kubelet
  [kubelet-check] Waiting for a healthy kubelet at http://127.0.0.1:10248/healthz. This can take up to 4m0s
  [kubelet-check] The kubelet is healthy after 1.001250916s
  [kubelet-start] Waiting for the kubelet to perform the TLS Bootstrap

  This node has joined the cluster:
  * Certificate signing request was sent to apiserver and approval was received.
  * The Kubelet was informed of the new secure connection details.

  Run 'kubectl get nodes' on the control-plane to see this node join the cluster.
`})})]})]})]})]})}function Gn(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(Dn,{...e})}):Dn(e)}},94949(e,t,n){n.d(t,{N:()=>o,y:()=>i});n(96540);var r=n(57390),l=n(27653),a=n(21312),s=n(74848);const i=({command:e,output:t})=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.A,{language:"bash",children:e}),(0,s.jsx)(l.A,{type:"note",title:(0,a.T)({id:"common.commandOutput",message:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}),children:(0,s.jsx)(r.A,{language:"bash",children:t})})]}),o=({binaryName:e,version:t,installSteps:n,successMessage:i,grepCommand:o,lsOutput:c})=>{const u=[`***** [INFO] Checking current ${e} version...`,`***** [INFO] Current: none, Target: ${t}`,"***** [INFO] Download URL: https://*******",`***** [INFO] Updating ${e} to version ${t}...`,"***** [INFO] Working directory: /tmp/tmp.*****",`***** [INFO] Downloading ${e}...`,"***** [INFO] Downloading checksum file...","***** [INFO] Verifying checksum...",...n.map(e=>`***** [INFO] ${e}`),`***** [INFO] ${i} ${t}.`].join("\n");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.A,{language:"bash",children:`journalctl -t ${e}-installer`}),(0,s.jsx)(l.A,{type:"note",title:(0,a.T)({id:"common.commandOutput",message:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}),children:(0,s.jsx)(r.A,{language:"text",children:u})}),(0,s.jsx)(r.A,{language:"bash",children:`ls -la /usr/local/bin/ | grep ${o}`}),(0,s.jsx)(l.A,{type:"note",title:(0,a.T)({id:"common.commandOutput",message:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}),children:(0,s.jsx)(r.A,{language:"bash",children:c})})]})}},21186(e,t,n){n.d(t,{A:()=>d});n(96540);var r=n(57390),l=n(27653),a=n(69623),s=n(28774),i=n(21312),o=n(60513),c=n(44349),u=n(74848);const d=({method:e,certPath:t,certDisplayName:n,caDisplayName:d})=>{const h="openssl"===e,p=h?`${c.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${t}`:"kubeadm certs check-expiration",m=h?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.A,{id:"cert.dependsOnSections",children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,u.jsx)("ul",{children:(0,u.jsx)("li",{children:(0,u.jsx)(s.A,{to:"/tech-docs/kubernetes/certificates/examination/all-examination",children:"SSL Certificate Check"})})})]}):(0,u.jsx)(i.A,{id:"cert.kubeadmLimitation",children:"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043d\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430, \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445."}),v=o.A`
    CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
    ${n.padEnd(27)}Oct 22, 2025 22:06 UTC   364d            ${(d??"").padEnd(24)}no
  `;return(0,u.jsxs)(a.A,{className:"custom-blue-block",summary:(0,u.jsx)("summary",{children:(0,i.T)({id:"cert.checkReadiness",message:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"})}),children:[(0,u.jsx)(l.A,{type:"warning",title:(0,i.T)({id:"common.attention",message:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435"}),children:m}),(0,u.jsx)(r.A,{language:"bash",children:p}),(0,u.jsx)(l.A,{type:"note",title:(0,i.T)({id:"common.commandOutput",message:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}),children:(0,u.jsx)(r.A,{language:"bash",children:v})})]})}},99780(e,t,n){n.d(t,{l:()=>s});var r=n(96540),l=n(60197),a=n(74848);const s=({delegate:e,options:t,children:n})=>{const s=(0,r.useRef)(null);return(0,r.useEffect)(()=>{const n=s.current,r=e||"[data-fancybox]",a=t||{};return l.lX.bind(n,r,a),()=>{l.lX.unbind(n),l.lX.close()}}),(0,a.jsx)("div",{ref:s,children:n})}},50400(e,t,n){n.d(t,{Y:()=>a});n(96540);var r=n(99780),l=n(74848);const a=({src:e})=>(0,l.jsx)(r.l,{options:{Carousel:{infinite:!1}},children:(0,l.jsx)("a",{"data-fancybox":"gallery",href:e,children:(0,l.jsx)("img",{src:e})})})},65742(e,t,n){n.d(t,{$:()=>l});var r=n(44349);const l={etcdCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},kubernetesControllerManagerServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-server.conf`,keySize:"2048",cname:"system:kube-controller-manager-server"},etcdClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/sa.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"},kubernetesSchedulerServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/scheduler-server.conf`,keySize:"2048",cname:"system:kube-scheduler-server"}}},68741(e,t,n){n.d(t,{M:()=>r});const r={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.12"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},58700(e,t,n){n.d(t,{m:()=>r});const r={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${COMPONENT_VERSION}/runc.amd64",templateUrlBinCheckSum:"${COMPONENT_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${COMPONENT_VERSION}/etcd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}},95538(e,t,n){n.d(t,{D:()=>a});var r=n(65742),l=n(285);const a={name:{value:"${FULL_HOST_NAME}"},initialCluster:{value:"${ETCD_INITIAL_CLUSTER}"},initialAdvertisePeerUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${l.h.etcdPeer.portNumber}`},initialClusterToken:{value:"etcd"},initialClusterState:{value:"new"},peerCertFile:{value:`${r.$.etcdPeer.crtPath}`},peerKeyFile:{value:`${r.$.etcdPeer.keyPath}`},peerTrustedCAFile:{value:`${r.$.etcdCA.crtPath}`},peerClientCertAuth:{value:"true"},certFile:{value:`${r.$.etcdServer.crtPath}`},keyFile:{value:`${r.$.etcdServer.keyPath}`},trustedCAFile:{value:`${r.$.etcdCA.crtPath}`},listenClientUrls:{value:`https://0.0.0.0:${l.h.etcdServer.portNumber}`},listenPeerUrls:{value:`https://0.0.0.0:${l.h.etcdPeer.portNumber}`},listenMetricsUrls:{value:`http://0.0.0.0:${l.h.etcdMetricServer.portNumber}`},dataDir:{value:"/var/lib/etcd"},quotaBackendBytes:{value:"10737418240"},clientCertAuth:{value:"true"},heartbeatInterval:{value:"250"},electionTimeout:{value:"1500"},maxSnapshots:{value:"10"},maxWals:{value:"10"},autoCompactionRetention:{value:"8"},metrics:{value:"extensive"},logger:{value:"zap"},advertiseClientUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${l.h.etcdServer.portNumber}`},workDir:{value:"/tmp/etcd"},dbPath:{value:"/var/lib/etcd/member/snap/db"},snapshotCount:{value:"10000"},experimentalInitialCorruptCheck:{value:"true"},experimentalWatchProgressNotifyInterval:{value:"5s"}}},56223(e,t,n){n.d(t,{L:()=>s});var r=n(65742),l=n(285),a=n(44349);const s={etcdCafile:{value:`${r.$.etcdCA.crtPath}`},etcdCertfile:{value:`${r.$.kubernetesEtcdClient.crtPath}`},etcdKeyfile:{value:`${r.$.kubernetesEtcdClient.keyPath}`},certDir:{value:"/var/run/kubernetes"},kubeletClientCertificate:{value:`${r.$.kubernetesKubeletClient.crtPath}`},kubeletClientKey:{value:`${r.$.kubernetesKubeletClient.keyPath}`},clientCAFile:{value:`${r.$.kubernetesCA.crtPath}`},proxyClientCertFile:{value:`${r.$.kubernetesFrontProxyClient.crtPath}`},proxyClientKeyFile:{value:`${r.$.kubernetesFrontProxyClient.keyPath}`},tlsCertFile:{value:`${r.$.kubernetesServer.crtPath}`},tlsPrivateKeyFile:{value:`${r.$.kubernetesServer.keyPath}`},clientCaFile:{value:`${r.$.kubernetesCA.crtPath}`},serviceAccountKeyFile:{value:`${r.$.kubernetesSA.crtPath}`},requestheaderClientCaFile:{value:`${r.$.frontProxyCA.crtPath}`},serviceAccountSigningKeyFile:{value:`${r.$.kubernetesSA.keyPath}`},aggregatorRejectForwardingRedirect:{value:"true"},allowPrivileged:{value:"true"},anonymousAuth:{value:"true"},auditLogBatchThrottleEnable:{value:"false"},auditLogCompress:{value:"false"},auditLogTruncateEnabled:{value:"false"},auditWebhookBatchThrottleEnable:{value:"true"},auditWebhookTruncateEnabled:{value:"false"},contentionProfiling:{value:"false"},enableAggregatorRouting:{value:"true"},enableBootstrapTokenAuth:{value:"true"},enableGarbageCollector:{value:"true"},enableLogsHandler:{value:"true"},enablePriorityAndFairness:{value:"true"},encryptionProviderConfigAutomaticReload:{value:"false"},help:{value:"false"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},version:{value:"false"},watchCache:{value:"true"},logTextSplitStream:{value:"false"},shutdownSendRetryAfter:{value:"false"},logJsonSplitStream:{value:"false"},serviceAccountExtendTokenExpiration:{value:"true"},serviceAccountLookup:{value:"true"},apiserverCount:{value:"1"},auditLogBatchBufferSize:{value:"10000"},auditLogBatchMaxSize:{value:"1"},auditLogBatchThrottleBurst:{value:"0"},auditLogBatchThrottleQps:{value:"0"},auditLogMaxage:{value:"30"},auditLogMaxbackup:{value:"10"},auditLogMaxsize:{value:"1000"},auditLogTruncateMaxBatchSize:{value:"10485760"},auditLogTruncateMaxEventSize:{value:"102400"},auditWebhookBatchBufferSize:{value:"10000"},auditWebhookBatchMaxSize:{value:"400"},auditWebhookBatchThrottleBurst:{value:"15"},auditWebhookBatchThrottleQps:{value:"10"},auditWebhookTruncateMaxBatchSize:{value:"10485760"},auditWebhookTruncateMaxEventSize:{value:"102400"},defaultNotReadyTolerationSeconds:{value:"300"},defaultUnreachableTolerationSeconds:{value:"300"},defaultWatchCacheSize:{value:"100"},deleteCollectionWorkers:{value:"1"},kubernetesServiceNodePort:{value:"0"},leaseReuseDurationSeconds:{value:"60"},maxMutatingRequestsInflight:{value:"200"},maxRequestsInflight:{value:"400"},minRequestTimeout:{value:"1800"},goawayChance:{value:"0"},http2MaxStreamsPerConnection:{value:"0"},v:{value:"2"},logJsonInfoBufferSize:{value:"0"},logTextInfoBufferSize:{value:"0"},maxConnectionBytesPerSec:{value:"0"},kubeletPort:{value:`${l.h.kubeletServer.portNumber}`},securePort:{value:`${l.h.kubeAPIServer.portNumber}`},kubeletReadOnlyPort:{value:`${l.h.kubeletReadOnlyPort.portNumber}`},serviceNodePortRange:{value:"30000-32767"},etcdServers:{value:`https://127.0.0.1:${l.h.etcdServer.portNumber}`},serviceAccountIssuer:{value:`https://kubernetes.default.svc.${a.M.kubernetesClusterDomain.value}`},serviceClusterIpRange:{value:`${a.M.kubernetesServiceCIDR.value}`},auditWebhookInitialBackoff:{value:"10s"},auditWebhookBatchMaxWait:{value:"30s"},serviceAccountMaxTokenExpiration:{value:"0s"},shutdownWatchTerminationGracePeriod:{value:"0s"},shutdownDelayDuration:{value:"0s"},requestTimeout:{value:"1m0s"},eventTtl:{value:"1h0m0s"},livezGracePeriod:{value:"0s"},logFlushFrequency:{value:"5s"},kubeletTimeout:{value:"5s"},etcdCompactionInterval:{value:"5m0s"},etcdCountMetricPollPeriod:{value:"1m0s"},etcdDbMetricPollInterval:{value:"30s"},etcdHealthcheckTimeout:{value:"2s"},etcdReadycheckTimeout:{value:"2s"},authenticationTokenWebhookCacheTtl:{value:"2m0s"},authorizationWebhookCacheAuthorizedTtl:{value:"5m0s"},authorizationWebhookCacheUnauthorizedTtl:{value:"30s"},auditWebhookBatchInitialBackoff:{value:"10s"},auditLogBatchMaxWait:{value:"0s"},bindAddress:{value:"0.0.0.0"},cloudProviderGceL7lbSrcCidrs:{value:"130.211.0.0/22,35.191.0.0/16"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},apiAudiences:{value:"konnectivity-server"},loggingFormat:{value:"text"},auditLogFormat:{value:"json"},auditLogMode:{value:"batch"},auditWebhookMode:{value:"batch"},auditLogVersion:{value:"audit.k8s.io/v1"},auditWebhookVersion:{value:"audit.k8s.io/v1"},authenticationTokenWebhookVersion:{value:"v1beta1"},authorizationMode:{value:"Node,RBAC"},authorizationWebhookVersion:{value:"v1beta1"},cloudProvider:{value:"external"},enableAdmissionPlugins:{value:"NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,PodSecurity"},endpointReconcilerType:{value:"lease"},storageMediaType:{value:"application/vnd.kubernetes.protobuf"},etcdPrefix:{value:"/registry"},featureGates:{value:"RotateKubeletServerCertificate=true"},kubeletPreferredAddressTypes:{value:"InternalIP,ExternalIP,Hostname"},oidcSigningAlgs:{value:"RS256"},oidcUsernameClaim:{value:"sub"},requestheaderAllowedNames:{value:"front-proxy-client"},requestheaderExtraHeadersPrefix:{value:"X-Remote-Extra-"},requestheaderGroupHeaders:{value:"X-Remote-Group"},requestheaderUsernameHeaders:{value:"X-Remote-User"},runtimeConfig:{value:"api/all=true"},storageBackend:{value:"etcd3"},auditPolicyFile:{value:`${a.M.kubernetesAPIAuditPolicyPath.value}`},auditLogPath:{value:`${a.M.kubernetesAPIAuditLogPath.value}`},advertiseAddress:{value:""},admissionControl:{value:""},admissionControlConfigFile:{value:""},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},auditWebhookConfigFile:{value:""},authenticationConfig:{value:""},authenticationTokenWebhookConfigFile:{value:""},authorizationConfig:{value:""},authorizationPolicyFile:{value:""},authorizationWebhookConfigFile:{value:""},cloudConfig:{value:""},corsAllowedOrigins:{value:""},debugSocketPath:{value:""},disableAdmissionPlugins:{value:""},disabledMetrics:{value:""},egressSelectorConfigFile:{value:""},encryptionProviderConfig:{value:""},etcdServersOverrides:{value:""},externalHostname:{value:""},kubeletCertificateAuthority:{value:""},oidcCaFile:{value:""},oidcClientId:{value:""},oidcGroupsClaim:{value:""},oidcGroupsPrefix:{value:""},oidcIssuerUrl:{value:""},oidcRequiredClaim:{value:""},oidcUsernamePrefix:{value:""},peerAdvertiseIp:{value:""},peerAdvertisePort:{value:""},peerCaFile:{value:""},serviceAccountJwksUri:{value:""},showHiddenMetricsForVersion:{value:""},strictTransportSecurityDirectives:{value:""},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsSniCertKey:{value:""},tokenAuthFile:{value:""},tracingConfigFile:{value:""},vmodule:{value:""},watchCacheSizes:{value:""}}},21232(e,t,n){n.d(t,{L:()=>a});var r=n(65742),l=n(44349);const a={authenticationKubeconfig:{value:`${l.M.kubernetesBaseFolderPath.value}/controller-manager.conf`},authorizationKubeconfig:{value:`${l.M.kubernetesBaseFolderPath.value}/controller-manager.conf`},kubeconfig:{value:`${l.M.kubernetesBaseFolderPath.value}/controller-manager.conf`},clientCaFile:{value:`${r.$.kubernetesCA.crtPath}`},clusterSigningCertFile:{value:`${r.$.kubernetesCA.crtPath}`},clusterSigningKeyFile:{value:`${r.$.kubernetesCA.keyPath}`},requestheaderClientCaFile:{value:`${r.$.frontProxyCA.crtPath}`},rootCaFile:{value:`${r.$.kubernetesCA.crtPath}`},serviceAccountPrivateKeyFile:{value:`${l.M.kubernetesBaseFolderPath.value}/pki/sa.key`},clusterName:{value:"${CLUSTER_NAME}"},allocateNodeCidrs:{value:"false"},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},allowUntaggedCloud:{value:"false"},authenticationSkipLookup:{value:"false"},authenticationTokenWebhookCacheTtl:{value:"10s"},authenticationTolerateLookupFailure:{value:"false"},authorizationAlwaysAllowPaths:{value:"/healthz,/readyz,/livez,/metrics"},authorizationWebhookCacheAuthorizedTtl:{value:"10s"},authorizationWebhookCacheUnauthorizedTtl:{value:"10s"},bindAddress:{value:"0.0.0.0"},certDir:{value:""},cidrAllocatorType:{value:"RangeAllocator"},cloudConfig:{value:""},cloudProvider:{value:"external"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},clusterCidr:{value:""},clusterSigningDuration:{value:"720h0m0s"},clusterSigningKubeApiserverClientCertFile:{value:""},clusterSigningKubeApiserverClientKeyFile:{value:""},clusterSigningKubeletClientCertFile:{value:""},clusterSigningKubeletClientKeyFile:{value:""},clusterSigningKubeletServingCertFile:{value:""},clusterSigningKubeletServingKeyFile:{value:""},clusterSigningLegacyUnknownCertFile:{value:""},clusterSigningLegacyUnknownKeyFile:{value:""},concurrentCronJobSyncs:{value:"5"},concurrentDeploymentSyncs:{value:"5"},concurrentEndpointSyncs:{value:"5"},concurrentEphemeralvolumeSyncs:{value:"5"},concurrentGcSyncs:{value:"20"},concurrentHorizontalPodAutoscalerSyncs:{value:"5"},concurrentJobSyncs:{value:"5"},concurrentNamespaceSyncs:{value:"10"},concurrentRcSyncs:{value:"5"},concurrentReplicasetSyncs:{value:"20"},concurrentResourceQuotaSyncs:{value:"5"},concurrentServiceEndpointSyncs:{value:"5"},concurrentServiceSyncs:{value:"1"},concurrentServiceaccountTokenSyncs:{value:"5"},concurrentStatefulsetSyncs:{value:"5"},concurrentTtlAfterFinishedSyncs:{value:"5"},concurrentValidatingAdmissionPolicyStatusSyncs:{value:"5"},configureCloudRoutes:{value:"true"},contentionProfiling:{value:"false"},controllerStartInterval:{value:"0s"},controllers:{value:"*,bootstrapsigner,tokencleaner"},disableAttachDetachReconcileSync:{value:"false"},disableForceDetachOnTimeout:{value:"false"},disabledMetrics:{value:""},enableDynamicProvisioning:{value:"true"},enableGarbageCollector:{value:"true"},enableHostpathProvisioner:{value:"false"},enableLeaderMigration:{value:"false"},endpointUpdatesBatchPeriod:{value:"0s"},endpointsliceUpdatesBatchPeriod:{value:"0s"},externalCloudVolumePlugin:{value:""},featureGates:{value:"RotateKubeletServerCertificate=true"},flexVolumePluginDir:{value:"/usr/libexec/kubernetes/kubelet-plugins/volume/exec/"},help:{value:"false"},horizontalPodAutoscalerCpuInitializationPeriod:{value:"5m0s"},horizontalPodAutoscalerDownscaleDelay:{value:"5m0s"},horizontalPodAutoscalerDownscaleStabilization:{value:"5m0s"},horizontalPodAutoscalerInitialReadinessDelay:{value:"30s"},horizontalPodAutoscalerSyncPeriod:{value:"30s"},horizontalPodAutoscalerTolerance:{value:"0.1"},horizontalPodAutoscalerUpscaleDelay:{value:"3m0s"},http2MaxStreamsPerConnection:{value:"0"},kubeApiBurst:{value:"120"},kubeApiContentType:{value:"application/vnd.kubernetes.protobuf"},kubeApiQps:{value:"100"},largeClusterSizeThreshold:{value:"50"},leaderElect:{value:"true"},leaderElectLeaseDuration:{value:"15s"},leaderElectRenewDeadline:{value:"10s"},leaderElectResourceLock:{value:"leases"},leaderElectResourceName:{value:"kube-controller-manager"},leaderElectResourceNamespace:{value:"kube-system"},leaderElectRetryPeriod:{value:"2s"},leaderMigrationConfig:{value:""},legacyServiceAccountTokenCleanUpPeriod:{value:"8760h0m0s"},logFlushFrequency:{value:"5s"},logJsonInfoBufferSize:{value:"0"},logJsonSplitStream:{value:"false"},logTextInfoBufferSize:{value:"0"},logTextSplitStream:{value:"false"},loggingFormat:{value:"text"},attachDetachReconcileSyncPeriod:{value:"1m0s"},master:{value:""},maxEndpointsPerSlice:{value:"100"},minResyncPeriod:{value:"12h0m0s"},mirroringConcurrentServiceEndpointSyncs:{value:"5"},mirroringEndpointsliceUpdatesBatchPeriod:{value:"0s"},mirroringMaxEndpointsPerSubset:{value:"1000"},namespaceSyncPeriod:{value:"2m0s"},nodeCidrMaskSize:{value:"0"},nodeCidrMaskSizeIpv4:{value:"0"},nodeCidrMaskSizeIpv6:{value:"0"},nodeEvictionRate:{value:"0.1"},nodeMonitorGracePeriod:{value:"40s"},nodeMonitorPeriod:{value:"5s"},nodeStartupGracePeriod:{value:"10s"},nodeSyncPeriod:{value:"0s"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},pvRecyclerIncrementTimeoutNfs:{value:"30"},pvRecyclerMinimumTimeoutHostpath:{value:"60"},pvRecyclerMinimumTimeoutNfs:{value:"300"},pvRecyclerPodTemplateFilepathHostpath:{value:""},pvRecyclerPodTemplateFilepathNfs:{value:""},pvRecyclerTimeoutIncrementHostpath:{value:"30"},pvclaimbinderSyncPeriod:{value:"15s"},requestheaderAllowedNames:{value:""},requestheaderExtraHeadersPrefix:{value:"x-remote-extra-"},requestheaderGroupHeaders:{value:"x-remote-group"},requestheaderUsernameHeaders:{value:"x-remote-user"},resourceQuotaSyncPeriod:{value:"5m0s"},routeReconciliationPeriod:{value:"10s"},secondaryNodeEvictionRate:{value:"0.01"},securePort:{value:"10257"},serviceClusterIpRange:{value:""},showHiddenMetricsForVersion:{value:""},terminatedPodGcThreshold:{value:"0"},tlsCertFile:{value:"/etc/kubernetes/pki/controller-manager-server.crt"},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsPrivateKeyFile:{value:"/etc/kubernetes/pki/controller-manager-server.key"},tlsSniCertKey:{value:""},unhealthyZoneThreshold:{value:"0.55"},useServiceAccountCredentials:{value:"true"},v:{value:"2"},version:{value:"false"},vmodule:{value:""},volumeHostAllowLocalLoopback:{value:"true"},volumeHostCidrDenylist:{value:""}}},21502(e,t,n){n.d(t,{w:()=>a});var r=n(285),l=n(44349);const a={authenticationKubeconfig:{value:`${l.M.kubernetesBaseFolderPath.value}/scheduler.conf`},authenticationSkipLookup:{value:"false"},authenticationTokenWebhookCacheTtl:{value:"10s"},authenticationTolerateLookupFailure:{value:"true"},authorizationAlwaysAllowPaths:{value:"/healthz,/readyz,/livez,/metrics"},authorizationKubeconfig:{value:`${l.M.kubernetesBaseFolderPath.value}/scheduler.conf`},authorizationWebhookCacheAuthorizedTtl:{value:"10s"},authorizationWebhookCacheUnauthorizedTtl:{value:"10s"},bindAddress:{value:"0.0.0.0"},contentionProfiling:{value:"true"},help:{value:"false"},http2MaxStreamsPerConnection:{value:"0"},kubeApiBurst:{value:"100"},kubeApiContentType:{value:"application/vnd.kubernetes.protobuf"},kubeApiQps:{value:"50"},kubeconfig:{value:`${l.M.kubernetesBaseFolderPath.value}/scheduler.conf`},leaderElect:{value:"true"},leaderElectLeaseDuration:{value:"15s"},leaderElectRenewDeadline:{value:"10s"},leaderElectResourceLock:{value:"leases"},leaderElectResourceName:{value:"kube-scheduler"},leaderElectResourceNamespace:{value:"kube-system"},leaderElectRetryPeriod:{value:"2s"},logFlushFrequency:{value:"5s"},logJsonInfoBufferSize:{value:"0"},logJsonSplitStream:{value:"false"},logTextInfoBufferSize:{value:"0"},logTextSplitStream:{value:"false"},loggingFormat:{value:"text"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},podMaxInUnschedulablePodsDuration:{value:"5m0s"},profiling:{value:"true"},requestheaderExtraHeadersPrefix:{value:"[x-remote-extra-]"},requestheaderGroupHeaders:{value:"[x-remote-group]"},requestheaderUsernameHeaders:{value:"[x-remote-user]"},securePort:{value:`${r.h.kubeScheduler.portNumber}`},v:{value:"2"},version:{value:"false"},allowMetricLabels:{value:"[]"},disabledMetrics:{value:"[]"},requestheaderAllowedNames:{value:"[]"},tlsCipherSuites:{value:"[]"},tlsSniCertKey:{value:"[]"},allowMetricLabelsManifest:{value:""},certDir:{value:""},clientCaFile:{value:""},config:{value:""},featureGates:{value:""},vmodule:{value:""},writeConfigTo:{value:""},tlsMinVersion:{value:""},tlsPrivateKeyFile:{value:"/etc/kubernetes/pki/scheduler-server.key"},showHiddenMetricsForVersion:{value:""},tlsCertFile:{value:"/etc/kubernetes/pki/scheduler-server.crt"},requestheaderClientCaFile:{value:""},master:{value:""}}},12480(e,t,n){n.d(t,{I:()=>o});var r=n(60513),l=n(56223),a=n(68741),s=n(51908),i=n(44349);const o={data:{value:r.A`
      apiVersion: kubeadm.k8s.io/v1beta3
      kind: ClusterConfiguration
      clusterName: "$\{CLUSTER_NAME}"
      certificatesDir: ${i.M.kubernetesBaseFolderPath.value}/pki
      controlPlaneEndpoint: $\{INTERNAL_API}:${l.L.securePort.value}
      imageRepository: "${i.M.baseDockerRegistry.value}"
      networking:
        serviceSubnet: ${i.M.kubernetesServiceCIDR.value}
        dnsDomain: ${i.M.kubernetesClusterDomain.value}
      kubernetesVersion: ${a.M.kubernetes.value}
      dns: {}
      etcd:
        local:
          imageRepository: "${i.M.baseDockerRegistry.value}"
          dataDir: "/var/lib/etcd"
          extraArgs:
            ${s.Nu.data.value}
          peerCertSANs:
            - 127.0.0.1
          serverCertSANs:
            - 127.0.0.1
      apiServer:
        extraArgs:
          ${s.IL.data.value}
        extraVolumes:
        - name: "k8s-audit"
          hostPath: "/var/log/kubernetes/audit/"
          mountPath: "/var/log/kubernetes/audit/"
          readOnly: false
          pathType: DirectoryOrCreate
        - name: "k8s-audit-policy"
          hostPath: "/etc/kubernetes/audit-policy.yaml"
          mountPath: "/etc/kubernetes/audit-policy.yaml"
          pathType: File
        certSANs:
          - "127.0.0.1"
          # TODO для доабвления внешнего FQDN в сертификаты кластера
          # - $\{INTERNAL_API}
        timeoutForControlPlane: 4m0s
      controllerManager:
        extraArgs:
          cluster-name: "$\{CLUSTER_NAME}"
          ${s.Uj.data.value}
        # ЕСЛИ НУЖНО ПОДКЛЮЧИТЬ СЕРВЕРНЫЕ СЕРТИФИКАТЫ ДЛЯ KUBE-CONTROLLER-MANAGER
        # ОБРАТИТЕ ВНИМАНИЕ, ЧТО KUBEADM НЕ СОЗДАЕТ ДАННЫЕ СЕРТИФИКАТЫ
        # ТРЕБУЕТСЯ РАСКОМЕНТИРОВАТЬ
        # ->
        # extraVolumes:
        # - name: "controller-manager-crt"
        #   hostPath: "/etc/kubernetes/pki/controller-manager-server.crt"
        #   mountPath: "/etc/kubernetes/pki/controller-manager-server.crt"
        #   pathType: File
        # - name: "controller-manager-key"
        #   hostPath: "/etc/kubernetes/pki/controller-manager-server.key"
        #   mountPath: "/etc/kubernetes/pki/controller-manager-server.key"
        #   pathType: File
      scheduler:
        extraArgs:
          ${s.hZ.data.value}
        # ЕСЛИ НУЖНО ПОДКЛЮЧИТЬ СЕРВЕРНЫЕ СЕРТИФИКАТЫ ДЛЯ KUBE-SCHEDULER
        # ОБРАТИТЕ ВНИМАНИЕ, ЧТО KUBEADM НЕ СОЗДАЕТ ДАННЫЕ СЕРТИФИКАТЫ
        # ТРЕБУЕТСЯ РАСКОМЕНТИРОВАТЬ
        # ->
        # extraVolumes:
        # - name: "scheduler-crt"
        #   hostPath: "/etc/kubernetes/pki/scheduler-server.crt"
        #   mountPath: "/etc/kubernetes/pki/scheduler-server.crt"
        #   pathType: File
        # - name: "scheduler-key"
        #   hostPath: "/etc/kubernetes/pki/scheduler-server.key"
        #   mountPath: "/etc/kubernetes/pki/scheduler-server.key"
        #   pathType: File
    `}}},26225(e,t,n){n.d(t,{h:()=>i});var r=n(60513),l=n(65742),a=n(44349),s=n(285);const i={data:{value:r.A`
      apiVersion: kubelet.config.k8s.io/v1beta1
      authentication:
        anonymous:
            enabled: false
        webhook:
            cacheTTL: 0s
            enabled: true
        x509:
          clientCAFile: "${l.$.kubernetesCA.crtPath}"
      authorization:
        mode: Webhook
        webhook:
          cacheAuthorizedTTL: 0s
          cacheUnauthorizedTTL: 0s
      cgroupDriver: systemd
      containerLogMaxSize: "50Mi"
      containerRuntimeEndpoint: "${a.M.criEndpoint.value}"
      cpuManagerReconcilePeriod: 0s
      evictionPressureTransitionPeriod: 5s
      fileCheckFrequency: 0s
      healthzBindAddress: 127.0.0.1
      healthzPort: ${s.h.kubeletHealthz.portNumber}
      httpCheckFrequency: 0s
      imageGCHighThresholdPercent: 55
      imageGCLowThresholdPercent: 50
      imageMaximumGCAge: 0s
      imageMinimumGCAge: 0s
      kind: KubeletConfiguration
      logging:
        flushFrequency: 0
        options:
          json:
            infoBufferSize: "0"
          text:
            infoBufferSize: "0"
        verbosity: 0
      kubeAPIQPS: 50
      kubeAPIBurst: 100
      maxPods: 250
      memorySwap: {}
      nodeStatusReportFrequency: 1s
      nodeStatusUpdateFrequency: 1s
      podPidsLimit: 4096
      registerNode: true
      resolvConf: /run/systemd/resolve/resolv.conf
      rotateCertificates: true
      runtimeRequestTimeout: 0s
      serializeImagePulls: false
      serverTLSBootstrap: true
      shutdownGracePeriod: 15s
      shutdownGracePeriodCriticalPods: 5s
      staticPodPath: ${a.M.kubernetesBaseFolderPath.value}/manifests
      streamingConnectionIdleTimeout: 0s
      syncFrequency: 0s
      tlsMinVersion: "VersionTLS12"
      volumeStatsAggPeriod: 0s
      featureGates:
        RotateKubeletServerCertificate: true
        APIPriorityAndFairness:         true
      tlsCipherSuites:
        - "TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256"
        - "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256"
        - "TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384"
        - "TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384"
        - "TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256"
        - "TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256"
    `}}},51908(e,t,n){n.d(t,{IL:()=>c,Nu:()=>o,Uj:()=>u,hZ:()=>d});var r=n(60513),l=n(95538),a=n(56223),s=n(21232),i=n(21502);const o={data:{value:r.A`
      auto-compaction-retention: "${l.D.autoCompactionRetention.value}"
      cert-file: "${l.D.certFile.value}"
      client-cert-auth: "${l.D.clientCertAuth.value}"
      data-dir: "${l.D.dataDir.value}"
      election-timeout: "${l.D.electionTimeout.value}"
      heartbeat-interval: "${l.D.heartbeatInterval.value}"
      key-file: "${l.D.keyFile.value}"
      listen-client-urls: "${l.D.listenClientUrls.value}"
      listen-metrics-urls: "${l.D.listenMetricsUrls.value}"
      listen-peer-urls: "${l.D.listenPeerUrls.value}"
      logger: "${l.D.logger.value}"
      max-snapshots: "${l.D.maxSnapshots.value}"
      max-wals: "${l.D.maxWals.value}"
      metrics: "${l.D.metrics.value}"
      peer-cert-file: "${l.D.peerCertFile.value}"
      peer-client-cert-auth: "${l.D.peerClientCertAuth.value}"
      peer-key-file: "${l.D.peerKeyFile.value}"
      peer-trusted-ca-file: "${l.D.peerTrustedCAFile.value}"
      snapshot-count: "${l.D.snapshotCount.value}"
      quota-backend-bytes: "10737418240" # TODO
      experimental-initial-corrupt-check: "true"
      experimental-watch-progress-notify-interval: "5s"
      trusted-ca-file: "${l.D.trustedCAFile.value}"
    `}},c={data:{value:r.A`
      aggregator-reject-forwarding-redirect: "${a.L.aggregatorRejectForwardingRedirect.value}"
      allow-privileged: "${a.L.allowPrivileged.value}"
      anonymous-auth: "${a.L.anonymousAuth.value}"
      api-audiences: "${a.L.apiAudiences.value}"
      apiserver-count: "${a.L.apiserverCount.value}"
      audit-log-batch-buffer-size: "${a.L.auditLogBatchBufferSize.value}"
      audit-log-batch-max-size: "${a.L.auditLogBatchMaxSize.value}"
      audit-log-batch-max-wait: "${a.L.auditLogBatchMaxWait.value}"
      audit-log-batch-throttle-burst: "${a.L.auditLogBatchThrottleBurst.value}"
      audit-log-batch-throttle-enable: "${a.L.auditLogBatchThrottleEnable.value}"
      audit-log-batch-throttle-qps: "${a.L.auditLogBatchThrottleQps.value}"
      audit-log-compress: "${a.L.auditLogCompress.value}"
      audit-log-format: "${a.L.auditLogFormat.value}"
      audit-log-maxage: "${a.L.auditLogMaxage.value}"
      audit-log-maxbackup: "${a.L.auditLogMaxbackup.value}"
      audit-log-maxsize: "${a.L.auditLogMaxsize.value}"
      audit-log-mode: "${a.L.auditLogMode.value}"
      audit-log-truncate-enabled: "${a.L.auditLogTruncateEnabled.value}"
      audit-log-truncate-max-batch-size: "${a.L.auditLogTruncateMaxBatchSize.value}"
      audit-log-truncate-max-event-size: "${a.L.auditLogTruncateMaxEventSize.value}"
      audit-log-version: "${a.L.auditLogVersion.value}"
      audit-webhook-batch-buffer-size: "${a.L.auditWebhookBatchBufferSize.value}"
      audit-webhook-batch-initial-backoff: "${a.L.auditWebhookBatchInitialBackoff.value}"
      audit-webhook-batch-max-size: "${a.L.auditWebhookBatchMaxSize.value}"
      audit-webhook-batch-max-wait: "${a.L.auditWebhookBatchMaxWait.value}"
      audit-webhook-batch-throttle-burst: "${a.L.auditWebhookBatchThrottleBurst.value}"
      audit-webhook-batch-throttle-enable: "${a.L.auditWebhookBatchThrottleEnable.value}"
      audit-webhook-batch-throttle-qps: "${a.L.auditWebhookBatchThrottleQps.value}"
      audit-webhook-initial-backoff: "${a.L.auditWebhookInitialBackoff.value}"
      audit-webhook-mode: "${a.L.auditWebhookMode.value}"
      audit-webhook-truncate-enabled: "${a.L.auditWebhookTruncateEnabled.value}"
      audit-webhook-truncate-max-batch-size: "${a.L.auditWebhookTruncateMaxBatchSize.value}"
      audit-webhook-truncate-max-event-size: "${a.L.auditWebhookTruncateMaxEventSize.value}"
      audit-webhook-version: "${a.L.auditWebhookVersion.value}"
      audit-policy-file: ${a.L.auditPolicyFile.value}
      audit-log-path: ${a.L.auditLogPath.value}
      authentication-token-webhook-cache-ttl: "${a.L.authenticationTokenWebhookCacheTtl.value}"
      authentication-token-webhook-version: "${a.L.authenticationTokenWebhookVersion.value}"
      authorization-mode: "${a.L.authorizationMode.value}"
      authorization-webhook-cache-authorized-ttl: "${a.L.authorizationWebhookCacheAuthorizedTtl.value}"
      authorization-webhook-cache-unauthorized-ttl: "${a.L.authorizationWebhookCacheUnauthorizedTtl.value}"
      authorization-webhook-version: "${a.L.authorizationWebhookVersion.value}"
      bind-address: "${a.L.bindAddress.value}"
      cert-dir: "${a.L.certDir.value}"
      client-ca-file: "${a.L.clientCaFile.value}"
      cloud-provider-gce-l7lb-src-cidrs: "${a.L.cloudProviderGceL7lbSrcCidrs.value}"
      cloud-provider-gce-lb-src-cidrs: "${a.L.cloudProviderGceLbSrcCidrs.value}"
      contention-profiling: "${a.L.contentionProfiling.value}"
      default-not-ready-toleration-seconds: "${a.L.defaultNotReadyTolerationSeconds.value}"
      default-unreachable-toleration-seconds: "${a.L.defaultUnreachableTolerationSeconds.value}"
      default-watch-cache-size: "${a.L.defaultWatchCacheSize.value}"
      delete-collection-workers: "${a.L.deleteCollectionWorkers.value}"
      enable-admission-plugins: "${a.L.enableAdmissionPlugins.value}"
      enable-aggregator-routing: "${a.L.enableAggregatorRouting.value}"
      enable-bootstrap-token-auth: "${a.L.enableBootstrapTokenAuth.value}"
      enable-garbage-collector: "${a.L.enableGarbageCollector.value}"
      enable-logs-handler: "${a.L.enableLogsHandler.value}"
      enable-priority-and-fairness: "${a.L.enablePriorityAndFairness.value}"
      encryption-provider-config-automatic-reload: "${a.L.encryptionProviderConfigAutomaticReload.value}"
      endpoint-reconciler-type: "${a.L.endpointReconcilerType.value}"
      etcd-cafile: "${a.L.etcdCafile.value}"
      etcd-certfile: "${a.L.etcdCertfile.value}"
      etcd-compaction-interval: "${a.L.etcdCompactionInterval.value}"
      etcd-count-metric-poll-period: "${a.L.etcdCountMetricPollPeriod.value}"
      etcd-db-metric-poll-interval: "${a.L.etcdDbMetricPollInterval.value}"
      etcd-healthcheck-timeout: "${a.L.etcdHealthcheckTimeout.value}"
      etcd-keyfile: "${a.L.etcdKeyfile.value}"
      etcd-prefix: "${a.L.etcdPrefix.value}"
      etcd-readycheck-timeout: "${a.L.etcdReadycheckTimeout.value}"
      etcd-servers: "${a.L.etcdServers.value}"
      event-ttl: "${a.L.eventTtl.value}"
      feature-gates: "${a.L.featureGates.value}"
      goaway-chance: "${a.L.goawayChance.value}"
      help: "${a.L.help.value}"
      http2-max-streams-per-connection: "${a.L.http2MaxStreamsPerConnection.value}"
      kubelet-client-certificate: "${a.L.kubeletClientCertificate.value}"
      kubelet-client-key: "${a.L.kubeletClientKey.value}"
      kubelet-port: "${a.L.kubeletPort.value}"
      kubelet-preferred-address-types: "${a.L.kubeletPreferredAddressTypes.value}"
      kubelet-read-only-port: "${a.L.kubeletReadOnlyPort.value}"
      kubelet-timeout: "${a.L.kubeletTimeout.value}"
      kubernetes-service-node-port: "${a.L.kubernetesServiceNodePort.value}"
      lease-reuse-duration-seconds: "${a.L.leaseReuseDurationSeconds.value}"
      livez-grace-period: "${a.L.livezGracePeriod.value}"
      log-flush-frequency: "${a.L.logFlushFrequency.value}"
      logging-format: "${a.L.loggingFormat.value}"
      log-json-info-buffer-size: "${a.L.logJsonInfoBufferSize.value}"
      log-json-split-stream: "${a.L.logJsonSplitStream.value}"
      log-text-info-buffer-size: "${a.L.logTextInfoBufferSize.value}"
      log-text-split-stream: "${a.L.logTextSplitStream.value}"
      max-connection-bytes-per-sec: "${a.L.maxConnectionBytesPerSec.value}"
      max-mutating-requests-inflight: "${a.L.maxMutatingRequestsInflight.value}"
      max-requests-inflight: "${a.L.maxRequestsInflight.value}"
      min-request-timeout: "${a.L.minRequestTimeout.value}"
      permit-address-sharing: "${a.L.permitAddressSharing.value}"
      permit-port-sharing: "${a.L.permitPortSharing.value}"
      profiling: "${a.L.profiling.value}"
      proxy-client-cert-file: "${a.L.proxyClientCertFile.value}"
      proxy-client-key-file: "${a.L.proxyClientKeyFile.value}"
      requestheader-allowed-names: "${a.L.requestheaderAllowedNames.value}"
      requestheader-client-ca-file: "${a.L.requestheaderClientCaFile.value}"
      requestheader-extra-headers-prefix: "${a.L.requestheaderExtraHeadersPrefix.value}"
      requestheader-group-headers: "${a.L.requestheaderGroupHeaders.value}"
      requestheader-username-headers: "${a.L.requestheaderUsernameHeaders.value}"
      request-timeout: "${a.L.requestTimeout.value}"
      runtime-config: "${a.L.runtimeConfig.value}"
      secure-port: "${a.L.securePort.value}"
      service-account-extend-token-expiration: "${a.L.serviceAccountExtendTokenExpiration.value}"
      service-account-issuer: "${a.L.serviceAccountIssuer.value}"
      service-account-key-file: "${a.L.serviceAccountKeyFile.value}"
      service-account-lookup: "${a.L.serviceAccountLookup.value}"
      service-account-max-token-expiration: "${a.L.serviceAccountMaxTokenExpiration.value}"
      service-account-signing-key-file: "${a.L.serviceAccountSigningKeyFile.value}"
      service-cluster-ip-range: "${a.L.serviceClusterIpRange.value}"
      service-node-port-range: "${a.L.serviceNodePortRange.value}"
      shutdown-delay-duration: "${a.L.shutdownDelayDuration.value}"
      shutdown-send-retry-after: "${a.L.shutdownSendRetryAfter.value}"
      shutdown-watch-termination-grace-period: "${a.L.shutdownWatchTerminationGracePeriod.value}"
      storage-backend: "${a.L.storageBackend.value}"
      storage-media-type: "${a.L.storageMediaType.value}"
      tls-cert-file: "${a.L.tlsCertFile.value}"
      tls-private-key-file: "${a.L.tlsPrivateKeyFile.value}"
      v: "${a.L.v.value}"
      version: "${a.L.version.value}"
      watch-cache: "${a.L.watchCache.value}"
      # ЕСЛИ НУЖНО ПОДКЛЮЧИТЬ CLOUD-CONTROLLER-MANAGER
      # ТРЕБУЕТСЯ РАСКОМЕНТИРОВАТЬ
      # ->
      # cloud-provider: "${a.L.cloudProvider.value}"
      # Не указывать если значение "" или undefined
      # cloud-config: "${a.L.cloudConfig.value}"
      # strict-transport-security-directives: "${a.L.strictTransportSecurityDirectives.value}"
      # disable-admission-plugins: "${a.L.disableAdmissionPlugins.value}"
      # disabled-metrics: "${a.L.disabledMetrics.value}"
      # egress-selector-config-file: "${a.L.egressSelectorConfigFile.value}"
      # encryption-provider-config: "${a.L.encryptionProviderConfig.value}"
      # etcd-servers-overrides: "${a.L.etcdServersOverrides.value}"
      # external-hostname: "${a.L.externalHostname.value}"
      # kubelet-certificate-authority: "${a.L.kubeletCertificateAuthority.value}"
      # oidc-ca-file: "${a.L.oidcCaFile.value}"
      # oidc-client-id: "${a.L.oidcClientId.value}"
      # oidc-groups-claim: "${a.L.oidcGroupsClaim.value}"
      # oidc-groups-prefix: "${a.L.oidcGroupsPrefix.value}"
      # oidc-issuer-url: "${a.L.oidcIssuerUrl.value}"
      # oidc-required-claim: "${a.L.oidcRequiredClaim.value}"
      # oidc-signing-algs: "${a.L.oidcSigningAlgs.value}"
      # oidc-username-claim: "${a.L.oidcUsernameClaim.value}"
      # oidc-username-prefix: "${a.L.oidcUsernamePrefix.value}"
      # peer-advertise-ip: "${a.L.peerAdvertiseIp.value}"
      # peer-advertise-port: "${a.L.peerAdvertisePort.value}"
      # peer-ca-file: "${a.L.peerCaFile.value}"
      # service-account-jwks-uri: "${a.L.serviceAccountJwksUri.value}"
      # show-hidden-metrics-for-version: "${a.L.showHiddenMetricsForVersion.value}"
      # tls-cipher-suites: "${a.L.tlsCipherSuites.value}"
      # tls-min-version: "${a.L.tlsMinVersion.value}"
      # tls-sni-cert-key: "${a.L.tlsSniCertKey.value}"
      # token-auth-file: "${a.L.tokenAuthFile.value}"
      # tracing-config-file: "${a.L.tracingConfigFile.value}"
      # vmodule: "${a.L.vmodule.value}"
      # watch-cache-sizes: "${a.L.watchCacheSizes.value}"
      # authorization-webhook-config-file: "${a.L.authorizationWebhookConfigFile.value}"
      # cors-allowed-origins: "${a.L.corsAllowedOrigins.value}"
      # debug-socket-path: "${a.L.debugSocketPath.value}"
      # authorization-policy-file: "${a.L.authorizationPolicyFile.value}"
      # authorization-config: "${a.L.authorizationConfig.value}"
      # authentication-token-webhook-config-file: "${a.L.authenticationTokenWebhookConfigFile.value}"
      # authentication-config: "${a.L.authenticationConfig.value}"
      # audit-webhook-config-file: "${a.L.auditWebhookConfigFile.value}"
      # audit-policy-file: "${a.L.auditPolicyFile.value}"
      # audit-log-path: "${a.L.auditLogPath.value}"
      # allow-metric-labels: "${a.L.allowMetricLabels.value}"
      # allow-metric-labels-manifest: "${a.L.allowMetricLabelsManifest.value}"
      # admission-control: "${a.L.admissionControl.value}"
      # admission-control-config-file: "${a.L.admissionControlConfigFile.value}"
      # advertise-address: "${a.L.advertiseAddress.value}"
    `}},u={data:{value:r.A`
      allocate-node-cidrs: "${s.L.allocateNodeCidrs.value}"
      allow-untagged-cloud: "${s.L.allowUntaggedCloud.value}"
      attach-detach-reconcile-sync-period: "${s.L.attachDetachReconcileSyncPeriod.value}"
      authentication-kubeconfig: "${s.L.authenticationKubeconfig.value}"
      authentication-skip-lookup: "${s.L.authenticationSkipLookup.value}"
      authentication-token-webhook-cache-ttl: "${s.L.authenticationTokenWebhookCacheTtl.value}"
      authentication-tolerate-lookup-failure: "${s.L.authenticationTolerateLookupFailure.value}"
      authorization-always-allow-paths: "${s.L.authorizationAlwaysAllowPaths.value}"
      authorization-kubeconfig: "${s.L.authorizationKubeconfig.value}"
      authorization-webhook-cache-authorized-ttl: "${s.L.authorizationWebhookCacheAuthorizedTtl.value}"
      authorization-webhook-cache-unauthorized-ttl: "${s.L.authorizationWebhookCacheUnauthorizedTtl.value}"
      bind-address: "${s.L.bindAddress.value}"
      cidr-allocator-type: "${s.L.cidrAllocatorType.value}"
      client-ca-file: "${s.L.clientCaFile.value}"
      # -> Включить, если управляете состоянием через Cloud Controller Manager
      # cloud-provider: "${s.L.cloudProvider.value}"
      cloud-provider-gce-lb-src-cidrs: "${s.L.cloudProviderGceLbSrcCidrs.value}"
      cluster-signing-cert-file: "${s.L.clusterSigningCertFile.value}"
      cluster-signing-duration: "${s.L.clusterSigningDuration.value}"
      cluster-signing-key-file: "${s.L.clusterSigningKeyFile.value}"
      concurrent-cron-job-syncs: "${s.L.concurrentCronJobSyncs.value}"
      concurrent-deployment-syncs: "${s.L.concurrentDeploymentSyncs.value}"
      concurrent-endpoint-syncs: "${s.L.concurrentEndpointSyncs.value}"
      concurrent-ephemeralvolume-syncs: "${s.L.concurrentEphemeralvolumeSyncs.value}"
      concurrent-gc-syncs: "${s.L.concurrentGcSyncs.value}"
      concurrent-horizontal-pod-autoscaler-syncs: "${s.L.concurrentHorizontalPodAutoscalerSyncs.value}"
      concurrent-job-syncs: "${s.L.concurrentJobSyncs.value}"
      concurrent-namespace-syncs: "${s.L.concurrentNamespaceSyncs.value}"
      concurrent-rc-syncs: "${s.L.concurrentRcSyncs.value}"
      concurrent-replicaset-syncs: "${s.L.concurrentReplicasetSyncs.value}"
      concurrent-resource-quota-syncs: "${s.L.concurrentResourceQuotaSyncs.value}"
      concurrent-service-endpoint-syncs: "${s.L.concurrentServiceEndpointSyncs.value}"
      concurrent-service-syncs: "${s.L.concurrentServiceSyncs.value}"
      concurrent-serviceaccount-token-syncs: "${s.L.concurrentServiceaccountTokenSyncs.value}"
      concurrent-statefulset-syncs: "${s.L.concurrentStatefulsetSyncs.value}"
      concurrent-ttl-after-finished-syncs: "${s.L.concurrentTtlAfterFinishedSyncs.value}"
      concurrent-validating-admission-policy-status-syncs: "${s.L.concurrentValidatingAdmissionPolicyStatusSyncs.value}"
      configure-cloud-routes: "${s.L.configureCloudRoutes.value}"
      contention-profiling: "${s.L.contentionProfiling.value}"
      controller-start-interval: "${s.L.controllerStartInterval.value}"
      controllers: "${s.L.controllers.value}"
      disable-attach-detach-reconcile-sync: "${s.L.disableAttachDetachReconcileSync.value}"
      disable-force-detach-on-timeout: "${s.L.disableForceDetachOnTimeout.value}"
      enable-dynamic-provisioning: "${s.L.enableDynamicProvisioning.value}"
      enable-garbage-collector: "${s.L.enableGarbageCollector.value}"
      enable-hostpath-provisioner: "${s.L.enableHostpathProvisioner.value}"
      enable-leader-migration: "${s.L.enableLeaderMigration.value}"
      endpoint-updates-batch-period: "${s.L.endpointUpdatesBatchPeriod.value}"
      endpointslice-updates-batch-period: "${s.L.endpointsliceUpdatesBatchPeriod.value}"
      feature-gates: "${s.L.featureGates.value}"
      flex-volume-plugin-dir: "${s.L.flexVolumePluginDir.value}"
      help: "${s.L.help.value}"
      horizontal-pod-autoscaler-cpu-initialization-period: "${s.L.horizontalPodAutoscalerCpuInitializationPeriod.value}"
      horizontal-pod-autoscaler-downscale-delay: "${s.L.horizontalPodAutoscalerDownscaleDelay.value}"
      horizontal-pod-autoscaler-downscale-stabilization: "${s.L.horizontalPodAutoscalerDownscaleStabilization.value}"
      horizontal-pod-autoscaler-initial-readiness-delay: "${s.L.horizontalPodAutoscalerInitialReadinessDelay.value}"
      horizontal-pod-autoscaler-sync-period: "${s.L.horizontalPodAutoscalerSyncPeriod.value}"
      horizontal-pod-autoscaler-tolerance: "${s.L.horizontalPodAutoscalerTolerance.value}"
      horizontal-pod-autoscaler-upscale-delay: "${s.L.horizontalPodAutoscalerUpscaleDelay.value}"
      http2-max-streams-per-connection: "${s.L.http2MaxStreamsPerConnection.value}"
      kube-api-burst: "${s.L.kubeApiBurst.value}"
      kube-api-content-type: "${s.L.kubeApiContentType.value}"
      kube-api-qps: "${s.L.kubeApiQps.value}"
      kubeconfig: "${s.L.kubeconfig.value}"
      large-cluster-size-threshold: "${s.L.largeClusterSizeThreshold.value}"
      leader-elect: "${s.L.leaderElect.value}"
      leader-elect-lease-duration: "${s.L.leaderElectLeaseDuration.value}"
      leader-elect-renew-deadline: "${s.L.leaderElectRenewDeadline.value}"
      leader-elect-resource-lock: "${s.L.leaderElectResourceLock.value}"
      leader-elect-resource-name: "${s.L.leaderElectResourceName.value}"
      leader-elect-resource-namespace: "${s.L.leaderElectResourceNamespace.value}"
      leader-elect-retry-period: "${s.L.leaderElectRetryPeriod.value}"
      legacy-service-account-token-clean-up-period: "${s.L.legacyServiceAccountTokenCleanUpPeriod.value}"
      log-flush-frequency: "${s.L.logFlushFrequency.value}"
      log-json-info-buffer-size: "${s.L.logJsonInfoBufferSize.value}"
      log-json-split-stream: "${s.L.logJsonSplitStream.value}"
      log-text-info-buffer-size: "${s.L.logTextInfoBufferSize.value}"
      log-text-split-stream: "${s.L.logTextSplitStream.value}"
      logging-format: "${s.L.loggingFormat.value}"
      max-endpoints-per-slice: "${s.L.maxEndpointsPerSlice.value}"
      min-resync-period: "${s.L.minResyncPeriod.value}"
      mirroring-concurrent-service-endpoint-syncs: "${s.L.mirroringConcurrentServiceEndpointSyncs.value}"
      mirroring-endpointslice-updates-batch-period: "${s.L.mirroringEndpointsliceUpdatesBatchPeriod.value}"
      mirroring-max-endpoints-per-subset: "${s.L.mirroringMaxEndpointsPerSubset.value}"
      namespace-sync-period: "${s.L.namespaceSyncPeriod.value}"
      node-cidr-mask-size: "${s.L.nodeCidrMaskSize.value}"
      node-cidr-mask-size-ipv4: "${s.L.nodeCidrMaskSizeIpv4.value}"
      node-cidr-mask-size-ipv6: "${s.L.nodeCidrMaskSizeIpv6.value}"
      node-eviction-rate: "${s.L.nodeEvictionRate.value}"
      node-monitor-grace-period: "${s.L.nodeMonitorGracePeriod.value}"
      node-monitor-period: "${s.L.nodeMonitorPeriod.value}"
      node-startup-grace-period: "${s.L.nodeStartupGracePeriod.value}"
      node-sync-period: "${s.L.nodeSyncPeriod.value}"
      permit-address-sharing: "${s.L.permitAddressSharing.value}"
      permit-port-sharing: "${s.L.permitPortSharing.value}"
      profiling: "${s.L.profiling.value}"
      pv-recycler-increment-timeout-nfs: "${s.L.pvRecyclerIncrementTimeoutNfs.value}"
      pv-recycler-minimum-timeout-hostpath: "${s.L.pvRecyclerMinimumTimeoutHostpath.value}"
      pv-recycler-minimum-timeout-nfs: "${s.L.pvRecyclerMinimumTimeoutNfs.value}"
      pv-recycler-timeout-increment-hostpath: "${s.L.pvRecyclerTimeoutIncrementHostpath.value}"
      pvclaimbinder-sync-period: "${s.L.pvclaimbinderSyncPeriod.value}"
      requestheader-client-ca-file: "${s.L.requestheaderClientCaFile.value}"
      requestheader-extra-headers-prefix: "${s.L.requestheaderExtraHeadersPrefix.value}"
      requestheader-group-headers: "${s.L.requestheaderGroupHeaders.value}"
      requestheader-username-headers: "${s.L.requestheaderUsernameHeaders.value}"
      resource-quota-sync-period: "${s.L.resourceQuotaSyncPeriod.value}"
      root-ca-file: "${s.L.rootCaFile.value}"
      route-reconciliation-period: "${s.L.routeReconciliationPeriod.value}"
      secondary-node-eviction-rate: "${s.L.secondaryNodeEvictionRate.value}"
      secure-port: "${s.L.securePort.value}"
      service-account-private-key-file: "${s.L.serviceAccountPrivateKeyFile.value}"
      terminated-pod-gc-threshold: "${s.L.terminatedPodGcThreshold.value}"
      unhealthy-zone-threshold: "${s.L.unhealthyZoneThreshold.value}"
      use-service-account-credentials: "${s.L.useServiceAccountCredentials.value}"
      v: "${s.L.v.value}"
      version: "${s.L.version.value}"
      volume-host-allow-local-loopback: "${s.L.volumeHostAllowLocalLoopback.value}"
      # ЕСЛИ НУЖНО ПОДКЛЮЧИТЬ СЕРВЕРНЫЕ СЕРТИФИКАТЫ ДЛЯ KUBE-CONTROLLER-MANAGER
      # ОБРАТИТЕ ВНИМАНИЕ, ЧТО KUBEADM НЕ СОЗДАЕТ ДАННЫЕ СЕРТИФИКАТЫ
      # ТРЕБУЕТСЯ РАСКОМЕНТИРОВАТЬ
      # ->
      # tls-cert-file=${s.L.tlsCertFile.value}
      # tls-private-key-file=${s.L.tlsPrivateKeyFile.value}
      # Не указывать если значение "" или undefined
      # cluster-signing-kube-apiserver-client-cert-file: "${s.L.clusterSigningKubeApiserverClientCertFile.value}"
      # cluster-signing-kube-apiserver-client-key-file: "${s.L.clusterSigningKubeApiserverClientKeyFile.value}"
      # cluster-signing-kubelet-client-cert-file: "${s.L.clusterSigningKubeletClientCertFile.value}"
      # cluster-signing-kubelet-client-key-file: "${s.L.clusterSigningKubeletClientKeyFile.value}"
      # cluster-signing-kubelet-serving-cert-file: "${s.L.clusterSigningKubeletServingCertFile.value}"
      # cluster-signing-kubelet-serving-key-file: "${s.L.clusterSigningKubeletServingKeyFile.value}"
      # cluster-signing-legacy-unknown-cert-file: "${s.L.clusterSigningLegacyUnknownCertFile.value}"
      # cluster-signing-legacy-unknown-key-file: "${s.L.clusterSigningLegacyUnknownKeyFile.value}"
      # cluster-cidr: "${s.L.clusterCidr.value}"
      # cloud-config: "${s.L.cloudConfig.value}"
      # cert-dir: "${s.L.certDir.value}"
      # allow-metric-labels-manifest: "${s.L.allowMetricLabelsManifest.value}"
      # allow-metric-labels: "${s.L.allowMetricLabels.value}"
      # disabled-metrics: "${s.L.disabledMetrics.value}"
      # leader-migration-config: "${s.L.leaderMigrationConfig.value}"
      # master: "${s.L.master.value}"
      # pv-recycler-pod-template-filepath-hostpath: "${s.L.pvRecyclerPodTemplateFilepathHostpath.value}"
      # pv-recycler-pod-template-filepath-nfs: "${s.L.pvRecyclerPodTemplateFilepathNfs.value}"
      # service-cluster-ip-range: "${s.L.serviceClusterIpRange.value}"
      # show-hidden-metrics-for-version: "${s.L.showHiddenMetricsForVersion.value}"
      # tls-cipher-suites: "${s.L.tlsCipherSuites.value}"
      # tls-min-version: "${s.L.tlsMinVersion.value}"
      # tls-sni-cert-key: "${s.L.tlsSniCertKey.value}"
      # vmodule: "${s.L.vmodule.value}"
      # volume-host-cidr-denylist: "${s.L.volumeHostCidrDenylist.value}"
      # external-cloud-volume-plugin: "${s.L.externalCloudVolumePlugin.value}"
      # requestheader-allowed-names: "${s.L.requestheaderAllowedNames.value}"
    `}},d={data:{value:r.A`
      authentication-kubeconfig: "${i.w.authenticationKubeconfig.value}"
      authentication-skip-lookup: "${i.w.authenticationSkipLookup.value}"
      authentication-token-webhook-cache-ttl: "${i.w.authenticationTokenWebhookCacheTtl.value}"
      authentication-tolerate-lookup-failure: "${i.w.authenticationTolerateLookupFailure.value}"
      authorization-always-allow-paths: "${i.w.authorizationAlwaysAllowPaths.value}"
      authorization-kubeconfig: "${i.w.authorizationKubeconfig.value}"
      authorization-webhook-cache-authorized-ttl: "${i.w.authorizationWebhookCacheAuthorizedTtl.value}"
      authorization-webhook-cache-unauthorized-ttl: "${i.w.authorizationWebhookCacheUnauthorizedTtl.value}"
      bind-address: "${i.w.bindAddress.value}"
      client-ca-file: "${i.w.clientCaFile.value}"
      contention-profiling: "${i.w.contentionProfiling.value}"
      help: "${i.w.help.value}"
      http2-max-streams-per-connection: "${i.w.http2MaxStreamsPerConnection.value}"
      kube-api-burst: "${i.w.kubeApiBurst.value}"
      kube-api-content-type: "${i.w.kubeApiContentType.value}"
      kube-api-qps: "${i.w.kubeApiQps.value}"
      kubeconfig: "${i.w.kubeconfig.value}"
      leader-elect: "${i.w.leaderElect.value}"
      leader-elect-lease-duration: "${i.w.leaderElectLeaseDuration.value}"
      leader-elect-renew-deadline: "${i.w.leaderElectRenewDeadline.value}"
      leader-elect-resource-lock: "${i.w.leaderElectResourceLock.value}"
      leader-elect-resource-name: "${i.w.leaderElectResourceName.value}"
      leader-elect-resource-namespace: "${i.w.leaderElectResourceNamespace.value}"
      leader-elect-retry-period: "${i.w.leaderElectRetryPeriod.value}"
      log-flush-frequency: "${i.w.logFlushFrequency.value}"
      log-json-info-buffer-size: "${i.w.logJsonInfoBufferSize.value}"
      log-json-split-stream: "${i.w.logJsonSplitStream.value}"
      log-text-info-buffer-size: "${i.w.logTextInfoBufferSize.value}"
      log-text-split-stream: "${i.w.logTextSplitStream.value}"
      logging-format: "${i.w.loggingFormat.value}"
      permit-address-sharing: "${i.w.permitAddressSharing.value}"
      permit-port-sharing: "${i.w.permitPortSharing.value}"
      pod-max-in-unschedulable-pods-duration: "${i.w.podMaxInUnschedulablePodsDuration.value}"
      profiling: "${i.w.profiling.value}"
      requestheader-extra-headers-prefix: "${i.w.requestheaderExtraHeadersPrefix.value}"
      requestheader-group-headers: "${i.w.requestheaderGroupHeaders.value}"
      requestheader-username-headers: "${i.w.requestheaderUsernameHeaders.value}"
      secure-port: "${i.w.securePort.value}"
      v: "${i.w.v.value}"
      version: "${i.w.version.value}"
      # ЕСЛИ НУЖНО ПОДКЛЮЧИТЬ СЕРВЕРНЫЕ СЕРТИФИКАТЫ ДЛЯ KUBE-SCHEDULER
      # ОБРАТИТЕ ВНИМАНИЕ, ЧТО KUBEADM НЕ СОЗДАЕТ ДАННЫЕ СЕРТИФИКАТЫ
      # ТРЕБУЕТСЯ РАСКОМЕНТИРОВАТЬ
      # ->
      # tls-cert-file=${i.w.tlsCertFile.value}
      # tls-private-key-file=${i.w.tlsPrivateKeyFile.value}
      # <-
      # allow-metric-labels: "${i.w.allowMetricLabels.value}"
      # allow-metric-labels-manifest: "${i.w.allowMetricLabelsManifest.value}"
      # cert-dir: "${i.w.certDir.value}"
      # config: "${i.w.config.value}"
      # disabled-metrics: "${i.w.disabledMetrics.value}"
      # feature-gates: "${i.w.featureGates.value}"
      # master: "${i.w.master.value}"
      # requestheader-allowed-names: "${i.w.requestheaderAllowedNames.value}"
      # requestheader-client-ca-file: "${i.w.requestheaderClientCaFile.value}"
      # show-hidden-metrics-for-version: "${i.w.showHiddenMetricsForVersion.value}"
      # tls-cipher-suites: "${i.w.tlsCipherSuites.value}"
      # tls-min-version: "${i.w.tlsMinVersion.value}"
      # tls-sni-cert-key: "${i.w.tlsSniCertKey.value}"
      # vmodule: "${i.w.vmodule.value}"
      # write-config-to: "${i.w.writeConfigTo.value}"
    `}}},51430(e,t,n){n.d(t,{k:()=>r});const r={data:{value:n(60513).A`
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
    `}}},285(e,t,n){n.d(t,{h:()=>r});const r={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},22365(e,t,n){n.d(t,{I:()=>r});const r=()=>"/"},6776(e){e.exports=JSON.parse('{"permalink":"/en/blog/kubernetes-the-hard-way-workers","source":"@site/blog/kubernetes-the-hard-way-workers.mdx","title":"Kubernetes The Hard Way: Workers","description":"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c Worker-\u043d\u043e\u0434\u0443 \u043a Kubernetes-\u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443 \u0432\u0440\u0443\u0447\u043d\u0443\u044e: \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u041e\u0421, bootstrap token, CSR API, kubeadm join \u0438 \u0437\u0430\u043f\u0443\u0441\u043a kubelet.","date":"2026-03-12T00:00:00.000Z","tags":[{"inline":true,"label":"Kubernetes","permalink":"/en/blog/tags/kubernetes"},{"inline":true,"label":"Hard-Way","permalink":"/en/blog/tags/hard-way"},{"inline":true,"label":"Workers","permalink":"/en/blog/tags/workers"}],"readingTime":7,"hasTruncateMarker":true,"authors":[{"name":"Putilin Dmitry Lvovich","title":"Architecturer","url":"https://t.me/bezumniy_kot_work","socials":{"github":"https://github.com/PRO-Robotech"},"imageURL":"https://avatars.githubusercontent.com/u/107264732?v=4","key":"dlputilin","page":null}],"frontMatter":{"title":"Kubernetes The Hard Way: Workers","description":"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c Worker-\u043d\u043e\u0434\u0443 \u043a Kubernetes-\u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443 \u0432\u0440\u0443\u0447\u043d\u0443\u044e: \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u041e\u0421, bootstrap token, CSR API, kubeadm join \u0438 \u0437\u0430\u043f\u0443\u0441\u043a kubelet.","date":"2026-03-12T00:00:00.000Z","slug":"kubernetes-the-hard-way-workers","authors":["dlputilin"],"tags":["Kubernetes","Hard-Way","Workers"]},"unlisted":false,"nextItem":{"title":"Kubernetes pods/exec","permalink":"/en/blog/kubernetes-pods-exec"}}')}}]);