"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[1068],{92204(t,e,n){n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/checks/statusConfigFiles","title":"statusConfigFiles","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/crictl/checks/statusConfigFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl/checks","slug":"/tech-docs/kubernetes/components/crictl/checks/statusConfigFiles","permalink":"/en/tech-docs/kubernetes/components/crictl/checks/statusConfigFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),o=n(28453),i=n(60513),r=n(57390);const a={},l=void 0,u={},d=[];function h(t){const e={admonition:"admonition",...(0,o.R)(),...t.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.A,{language:"bash",children:i.A`
  ls -la /etc/crictl.yaml
`}),"\n",(0,c.jsx)(e.admonition,{title:"Command output",type:"note",children:(0,c.jsx)(r.A,{language:"bash",children:i.A`
  -rw-r--r-- 1 root root 61 Feb 18 15:18 /etc/crictl.yaml
`})}),"\n",(0,c.jsx)(r.A,{language:"bash",children:i.A`
  crictl info \|
    jq '.status.conditions[] \|
    select(.type=="RuntimeReady") \|
    .status'

`}),"\n",(0,c.jsx)(e.admonition,{title:"Command output",type:"note",children:(0,c.jsx)(r.A,{language:"bash",children:i.A`
  true
`})})]})}function m(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,c.jsx)(e,{...t,children:(0,c.jsx)(h,{...t})}):h(t)}}}]);