"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[4502],{1359(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/kubeadm","title":"kubeadm","description":"kubeadm does not manage the server certificate used by the kubelet component.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/kubeadm","permalink":"/en/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),i=n(28453),c=n(57390),a=n(60513);const o={},l=void 0,u={},d=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"kubeadm"})," does not manage the server certificate used by the ",(0,s.jsx)(t.code,{children:"kubelet"})," component."]}),(0,s.jsxs)(t.p,{children:["When the ",(0,s.jsx)(t.code,{children:"kubelet"})," systemd unit starts, it initiates a certificate signing request.\nTo complete the process, manual approval is required using the command:\n",(0,s.jsx)(t.code,{children:"kubectl certificate approve $CERT_NAME"}),"."]}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)("h4",{children:"RotateKubeletServerCertificate"}),"\nFor automatic ",(0,s.jsx)(t.code,{children:"kubelet"})," certificate rotation, additional configuration is required:"]})]}),"\n",(0,s.jsx)("h4",{children:"Kube-Apiserver configuration"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/en/tech-docs/kubernetes/components/kubeAPI/setup",children:"Static Pod"})}),"\n"]}),"\n",(0,s.jsx)(c.A,{language:"yaml",children:a.A`
  spec:
    containers:
    - command:
      - --feature-gates=RotateKubeletServerCertificate=true
`}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/en/tech-docs/kubernetes/components/kubeadm/lifecycleSettings",children:"Kubeadm Configs"})}),"\n"]}),"\n",(0,s.jsx)(c.A,{language:"yaml",children:a.A`
  apiServer:
    extraArgs:
      feature-gates: "RotateKubeletServerCertificate=true"
`}),"\n",(0,s.jsx)("h4",{children:"Kube-Controller-Manager configuration"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/en/tech-docs/kubernetes/components/controllerManager/setup",children:"Static Pod"})}),"\n"]}),"\n",(0,s.jsx)(c.A,{language:"yaml",children:a.A`
  spec:
    containers:
    - command:
      - --feature-gates=RotateKubeletServerCertificate=true
`}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/en/tech-docs/kubernetes/components/kubeadm/lifecycleSettings",children:"Kubeadm Configs"})}),"\n"]}),"\n",(0,s.jsx)(c.A,{language:"yaml",children:a.A`
  controllerManager:
    extraArgs:
      feature-gates: "RotateKubeletServerCertificate=true"
`}),"\n",(0,s.jsx)("h4",{children:"Kubelet configuration"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/en/tech-docs/kubernetes/components/kubelet/lifecycleSettings",children:"Kubelet Custom Config"})}),"\n"]}),"\n",(0,s.jsx)(c.A,{language:"yaml",children:a.A`
  rotateCertificates: true
  featureGates:
    RotateKubeletServerCertificate: true
`}),"\n",(0,s.jsx)(t.admonition,{title:"Important for cloud environments!",type:"danger",children:(0,s.jsxs)(t.p,{children:["If you are using Cloud Controller Manager (CCM), the certificate will not be issued until\n",(0,s.jsx)(t.code,{children:"CCM"})," assigns an address to the ",(0,s.jsx)(t.code,{children:"Node"})," in the ",(0,s.jsx)(t.code,{children:"INTERNAL_IP"})," field."]})})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);