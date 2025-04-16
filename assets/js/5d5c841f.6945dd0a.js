"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18185],{45749:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/checks/statusConfigFiles","title":"statusConfigFiles","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/crictl/checks/statusConfigFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl/checks","slug":"/tech-docs/kubernetes/components/crictl/checks/statusConfigFiles","permalink":"/tech-docs/kubernetes/components/crictl/checks/statusConfigFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=s(74848),o=s(28453),i=s(60513),r=s(1775);const a={},l=void 0,u={},d=[];function h(t){const e={admonition:"admonition",...(0,o.R)(),...t.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.A,{language:"bash",children:i.A`
  ls -la /etc/crictl.yaml
`}),"\n",(0,c.jsx)(e.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,c.jsx)(r.A,{language:"bash",children:i.A`
  -rw-r--r-- 1 root root 61 Feb 18 15:18 /etc/crictl.yaml
`})}),"\n",(0,c.jsx)(r.A,{language:"bash",children:i.A`
  crictl info \|
    jq '.status.conditions[] \|
    select(.type=="RuntimeReady") \|
    .status'

`}),"\n",(0,c.jsx)(e.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,c.jsx)(r.A,{language:"bash",children:i.A`
  true
`})})]})}function m(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,c.jsx)(e,{...t,children:(0,c.jsx)(h,{...t})}):h(t)}}}]);