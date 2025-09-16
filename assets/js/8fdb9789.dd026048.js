"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[346],{17590:(t,e,c)=>{c.r(e),c.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"tech-docs/etcd/components/etcd/checks/statusBinFiles","title":"statusBinFiles","description":"{dedent`","source":"@site/docs/tech-docs/etcd/components/etcd/checks/statusBinFiles.mdx","sourceDirName":"tech-docs/etcd/components/etcd/checks","slug":"/tech-docs/etcd/components/etcd/checks/statusBinFiles","permalink":"/tech-docs/etcd/components/etcd/checks/statusBinFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=c(74848),o=c(28453),r=c(60513),d=c(68747),a=c(68741);const i={},l=void 0,u={},h=[];function p(t){const e={admonition:"admonition",...(0,o.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.A,{language:"bash",children:r.A`
  journalctl -t etcd-installer
`}),"\n",(0,s.jsx)(e.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(d.A,{language:"text",children:r.A`
  ***** [INFO] Checking current etcd version...
  ***** [INFO] Current: none, Target: ${a.M.etcd.value}
  ***** [INFO] Download URL: https://*******
  ***** [INFO] Updating etcd to version ${a.M.etcd.value}...
  ***** [INFO] Working directory: /tmp/tmp.*****
  ***** [INFO] Downloading etcd...
  ***** [INFO] Downloading checksum file...
  ***** [INFO] Verifying checksum...
  ***** [INFO] Installing etcd...
  ***** [INFO] etcd successfully updated to ${a.M.etcd.value}.
`})}),"\n",(0,s.jsx)(d.A,{language:"bash",children:r.A`
  ls -la /usr/local/bin/ | grep 'etcd'
`}),"\n",(0,s.jsx)(e.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(d.A,{language:"text",children:r.A`
  -rwxr-xr-x  1 root root  23760896 Mar 29 16:21 etcd
  -rwxr-xr-x  1 root root  17960960 Mar 29 16:21 etcdctl
  -rwxr-xr-x  1 root root  16031744 Mar 29 16:21 etcdutl
`})})]})}function m(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(p,{...t})}):p(t)}},68741:(t,e,c)=>{c.d(e,{M:()=>n});const n={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.12"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}}}]);