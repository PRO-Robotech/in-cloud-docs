"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[210],{4898:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>m});const o=JSON.parse('{"id":"tech-docs/kubernetes/components/controllerManager/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/controllerManager/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/components/controllerManager","slug":"/tech-docs/kubernetes/components/controllerManager/kubeadm","permalink":"/tech-docs/kubernetes/components/controllerManager/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=t(74848),r=t(28453),s=t(7478),c=t(1775),l=t(60513);const d={},i=void 0,u={},m=[];function b(e){const n={admonition:"admonition",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
      kubeadm init phase  control-plane controller-manager \\
        --config=${s.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
  `}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(c.A,{language:"bash",children:l.A`
      #### Kube API
      [control-plane] Creating static Pod manifest for "kube-controller-manager"
  `})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}}}]);