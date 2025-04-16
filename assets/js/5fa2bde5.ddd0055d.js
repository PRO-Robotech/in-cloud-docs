"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[83659],{50488:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>b,frontMatter:()=>u,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/scheduler/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/scheduler/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/components/scheduler","slug":"/tech-docs/kubernetes/components/scheduler/kubeadm","permalink":"/tech-docs/kubernetes/components/scheduler/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=t(74848),c=t(28453),a=t(7478),r=t(1775),d=t(60513);const u={},i=void 0,l={},m=[];function h(e){const n={admonition:"admonition",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,o.jsx)(r.A,{language:"bash",children:d.A`
  kubeadm init phase  control-plane scheduler \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(r.A,{language:"bash",children:d.A`
  #### Kube API
  [control-plane] Creating static Pod manifest for "kube-scheduler"
`})})]})}function b(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}}}]);