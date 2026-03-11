"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[499],{29484(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>b});const i=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeadm","title":"kubeadm","description":"Certificate generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeadm","permalink":"/en/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),o=n(28453),c=n(60513),s=n(57390),u=n(44349);const r={},l=void 0,d={},b=[];function k(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"Certificate generation"}),"\n",(0,a.jsx)(s.A,{language:"bash",children:c.A`
  kubeadm init phase kubeconfig kubelet \\
    --config=${u.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.p,{children:"After executing the commands, we get the following output."}),(0,a.jsx)(s.A,{language:"bash",children:c.A`
  #### Certificate generation
  [kubeconfig] Writing "kubelet.conf" kubeconfig file
`})]}),"\n",(0,a.jsx)("h4",{children:"Certificate rotation"}),"\n",(0,a.jsx)(s.A,{language:"bash",children:c.A`
  kubeadm init phase kubelet-finalize experimental-cert-rotation \\
    --config=${u.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.p,{children:"After executing the commands, we get the following output."}),(0,a.jsx)(s.A,{language:"bash",children:c.A`
  #### Certificate rotation
  [kubelet-finalize] Updating "/etc/kubernetes/kubelet.conf" to point to a rotatable kubelet client certificate and key
`})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(k,{...e})}):k(e)}}}]);