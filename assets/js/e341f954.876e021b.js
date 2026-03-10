"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[8538],{42913(t,e,c){c.r(e),c.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/etcd/components/etcdbrctl/checks/statusStaticPodInstall","title":"statusStaticPodInstall","description":"{dedent`","source":"@site/docs/tech-docs/etcd/components/etcdbrctl/checks/statusStaticPodInstall.mdx","sourceDirName":"tech-docs/etcd/components/etcdbrctl/checks","slug":"/tech-docs/etcd/components/etcdbrctl/checks/statusStaticPodInstall","permalink":"/tech-docs/etcd/components/etcdbrctl/checks/statusStaticPodInstall","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=c(74848),a=c(28453),o=c(60513),d=c(57390);const i={},l=void 0,r={},u=[];function m(t){const e={admonition:"admonition",...(0,a.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.A,{language:"bash",children:o.A`
  crictl pods --name etcd-backup -o yaml | head -20
`}),"\n",(0,n.jsx)(e.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,n.jsx)(d.A,{language:"bash",children:o.A`
  items:
  - id: ...
    metadata:
      name: etcd-backup-...
      namespace: kube-system
    state: SANDBOX_READY
`})})]})}function h(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(m,{...t})}):m(t)}}}]);