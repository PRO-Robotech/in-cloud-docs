"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[33234],{14760:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"tech-docs/kubernetes/certificates/init-all","title":"5.2.2.0.1. \u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f  \u0441\u0435\u0440\u0442-\u043e\u0432","description":"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0432\u0441\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430, \u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u0438 \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b.","source":"@site/docs/tech-docs/kubernetes/certificates/initAll.mdx","sourceDirName":"tech-docs/kubernetes/certificates","slug":"/tech-docs/kubernetes/certificates/init-all","permalink":"/tech-docs/kubernetes/certificates/init-all","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"init-all"}}');var c=t(74848),r=t(28453),s=t(42127),a=t(90365);const o={id:"init-all"},l="5.2.2.0.1. \u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f  \u0441\u0435\u0440\u0442-\u043e\u0432",d={},u=[{value:"5.2.2.0.1.1. \u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432",id:"522011-\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f-\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432",level:2},...a.RM,{value:"5.2.2.0.1.2. \u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f Kubeconfigs",id:"522012-\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f-kubeconfigs",level:2},...s.RM];function f(e){const n={admonition:"admonition",h1:"h1",h2:"h2",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"52201-\u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f--\u0441\u0435\u0440\u0442-\u043e\u0432",children:"5.2.2.0.1. \u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f  \u0441\u0435\u0440\u0442-\u043e\u0432"})}),"\n",(0,c.jsx)(n.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:(0,c.jsx)(n.p,{children:"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0432\u0441\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430, \u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u0438 \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b."})}),"\n",(0,c.jsx)(n.h2,{id:"522011-\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f-\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432",children:"5.2.2.0.1.1. \u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,c.jsx)(a.Ay,{}),"\n",(0,c.jsx)(n.h2,{id:"522012-\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f-kubeconfigs",children:"5.2.2.0.1.2. \u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f Kubeconfigs"}),"\n",(0,c.jsx)(s.Ay,{})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(f,{...e})}):f(e)}},42127:(e,n,t)=>{t.d(n,{Ay:()=>d,RM:()=>o});var i=t(74848),c=t(28453),r=t(7478),s=t(1775),a=t(60513);const o=[];function l(e){const n={admonition:"admonition",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f kubeconfigs"}),"\n",(0,i.jsx)(s.A,{language:"bash",children:a.A`
  kubeadm init phase kubeconfig all \\
    --config=${r.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(s.A,{language:"bash",children:a.A`
  [kubeconfig] Using kubeconfig folder "/etc/kubernetes"
  [kubeconfig] Writing "admin.conf" kubeconfig file
  [kubeconfig] Writing "super-admin.conf" kubeconfig file
  [kubeconfig] Writing "kubelet.conf" kubeconfig file
  [kubeconfig] Writing "controller-manager.conf" kubeconfig file
  [kubeconfig] Writing "scheduler.conf" kubeconfig file
`})})]})}function d(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},90365:(e,n,t)=>{t.d(n,{Ay:()=>d,RM:()=>o});var i=t(74848),c=t(28453),r=t(7478),s=t(1775),a=t(60513);const o=[];function l(e){const n={admonition:"admonition",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,i.jsx)(s.A,{language:"bash",children:a.A`
  kubeadm init phase certs all \\
    --config=${r.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(s.A,{language:"bash",children:a.A`
  [certs] Using certificateDir folder "/etc/kubernetes/pki"
  [certs] Generating "ca" certificate and key
  [certs] Generating "apiserver" certificate and key
  [certs] apiserver serving cert is signed for DNS names [api.my-first-cluster.example.com kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.my-first-cluster.example.com pylcozuscb] and IPs [29.64.0.1 31.129.111.153 127.0.0.1]
  [certs] Generating "apiserver-kubelet-client" certificate and key
  [certs] Generating "front-proxy-ca" certificate and key
  [certs] Generating "front-proxy-client" certificate and key
  [certs] Generating "etcd/ca" certificate and key
  [certs] Generating "etcd/server" certificate and key
  [certs] etcd/server serving cert is signed for DNS names [localhost master-1.my-first-cluster.example.com pylcozuscb] and IPs [31.129.111.153 127.0.0.1 ::1]
  [certs] Generating "etcd/peer" certificate and key
  [certs] etcd/peer serving cert is signed for DNS names [localhost master-1.my-first-cluster.example.com pylcozuscb] and IPs [31.129.111.153 127.0.0.1 ::1]
  [certs] Generating "etcd/healthcheck-client" certificate and key
  [certs] Generating "apiserver-etcd-client" certificate and key
  [certs] Generating "sa" key and public key
`})})]})}function d(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}}}]);