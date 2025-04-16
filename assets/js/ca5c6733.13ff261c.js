"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[15800],{49717:(e,t,c)=>{c.r(t),c.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdServer/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdServer/kubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdServer","slug":"/tech-docs/etcd/certificates/components/etcd/etcdServer/kubeadm","permalink":"/tech-docs/etcd/certificates/components/etcd/etcdServer/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=c(74848),r=c(28453),a=c(7478),d=c(1775),o=c(60513);const i={},m=void 0,u={},l=[];function h(e){const t={admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,n.jsx)(d.A,{language:"bash",children:o.A`
  kubeadm init phase certs etcd-server \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,n.jsx)(d.A,{language:"bash",children:o.A`
  #### Генерация сертификатов
  [certs] Generating "etcd/server" certificate and key
  [certs] etcd/server serving cert is signed for DNS names [localhost master-1.my-first-cluster.example.com] and IPs [192.168.10.27 127.0.0.1 ::1]
`})]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);