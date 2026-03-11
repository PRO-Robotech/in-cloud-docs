"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[2650],{85517(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>T,frontMatter:()=>s,metadata:()=>c,toc:()=>m});const c=JSON.parse('{"id":"tech-docs/kubernetes/certificates/examination/examinationKubeadmComponent","title":"examinationKubeadmComponent","description":"After configuring the certificates, it is recommended to verify their correctness using Kubeadm","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/examination/examinationKubeadmComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/examination","slug":"/tech-docs/kubernetes/certificates/examination/examinationKubeadmComponent","permalink":"/en/tech-docs/kubernetes/certificates/examination/examinationKubeadmComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=n(74848),i=n(28453),a=n(57390),r=n(60513);const s={},d=void 0,u={},m=[];function l(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["After configuring the certificates, it is recommended to verify their correctness using ",(0,o.jsx)(t.code,{children:"Kubeadm"})]}),"\n"]}),"\n",(0,o.jsx)(a.A,{language:"bash",children:r.A`
  kubeadm certs check-expiration
`}),"\n",(0,o.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,o.jsx)(a.A,{language:"bash",children:r.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  admin.conf                 Oct 22, 2025 22:06 UTC   364d            ca                      no
  apiserver                  Oct 22, 2025 22:06 UTC   364d            ca                      no
  apiserver-etcd-client      Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
  apiserver-kubelet-client   Oct 22, 2025 22:06 UTC   364d            ca                      no
  controller-manager.conf    Oct 22, 2025 22:06 UTC   364d            ca                      no
  etcd-healthcheck-client    Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
  etcd-peer                  Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
  etcd-server                Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
  front-proxy-client         Oct 22, 2025 22:06 UTC   364d            front-proxy-ca          no
  scheduler.conf             Oct 22, 2025 22:06 UTC   364d            ca                      no
  super-admin.conf           Oct 22, 2025 22:06 UTC   364d            ca                      no

  CERTIFICATE AUTHORITY   EXPIRES                  RESIDUAL TIME   EXTERNALLY MANAGED
  ca                      Oct 20, 2034 22:04 UTC   9y              no
  etcd-ca                 Oct 20, 2034 22:04 UTC   9y              no
  front-proxy-ca          Oct 20, 2034 22:04 UTC   9y              no
`})})]})}function T(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}}}]);