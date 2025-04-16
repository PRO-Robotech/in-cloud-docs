"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[67162,86661,90276],{4391:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/runc/checks/statusBinFiles","title":"statusBinFiles","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/runc/checks/statusBinFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/runc/checks","slug":"/tech-docs/kubernetes/components/runc/checks/statusBinFiles","permalink":"/tech-docs/kubernetes/components/runc/checks/statusBinFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=t(74848),o=t(28453),r=t(60513),a=t(1775),u=t(63770);const i={},l=void 0,d={},h=[];function m(e){const n={admonition:"admonition",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.A,{language:"bash",children:r.A`
  journalctl -t runc-installer
`}),"\n",(0,c.jsx)(n.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,c.jsx)(a.A,{language:"text",children:r.A`
  ***** [INFO] Checking current runc version...
  ***** [INFO] Current: none, Target: ${u.M.runc.value}
  ***** [INFO] Download URL: https://*******
  ***** [INFO] Updating runc to version ${u.M.runc.value}...
  ***** [INFO] Working directory: /tmp/tmp.*****
  ***** [INFO] Downloading runc...
  ***** [INFO] Downloading checksum file...
  ***** [INFO] Verifying checksum...
  ***** [INFO] Installing runc...
  ***** [INFO] runc successfully updated to ${u.M.runc.value}.
`})}),"\n",(0,c.jsx)(a.A,{language:"bash",children:r.A`
  ls -la /usr/local/bin/ | grep 'runc$'
`}),"\n",(0,c.jsx)(n.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,c.jsx)(a.A,{language:"text",children:r.A`
  -rwxr-xr-x  1 root root  10709696 Jan 23  2024 runc
`})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(m,{...e})}):m(e)}},4547:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>u,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/runc/checks/statusBinVersion","title":"statusBinVersion","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/runc/checks/statusBinVersion.mdx","sourceDirName":"tech-docs/kubernetes/components/runc/checks","slug":"/tech-docs/kubernetes/components/runc/checks/statusBinVersion","permalink":"/tech-docs/kubernetes/components/runc/checks/statusBinVersion","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=t(74848),o=t(28453),r=t(60513),a=t(1775);const u={},i=void 0,l={},d=[];function h(e){const n={admonition:"admonition",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.A,{language:"bash",children:r.A`
  runc --version
`}),"\n",(0,c.jsx)(n.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,c.jsx)(a.A,{language:"bash",children:r.A`
  runc version 1.1.12
  commit: v1.1.12-0-g51d5e946
  spec: 1.0.2-dev
  go: go1.20.13
  libseccomp: 2.5.4
`})})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},53982:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>u,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/runc/lifecycleDownloadStatus","title":"lifecycleDownloadStatus","description":"\u0418\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b","source":"@site/docs/tech-docs/kubernetes/components/runc/lifecycleDownloadStatus.mdx","sourceDirName":"tech-docs/kubernetes/components/runc","slug":"/tech-docs/kubernetes/components/runc/lifecycleDownloadStatus","permalink":"/tech-docs/kubernetes/components/runc/lifecycleDownloadStatus","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=t(74848),o=t(28453),r=t(4391),a=t(4547);const u={},i=void 0,l={},d=[...r.toc,...a.toc];function h(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{children:"\u0418\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b"}),"\n",(0,c.jsx)(r.default,{}),"\n",(0,c.jsx)("h3",{children:"\u0412\u0435\u0440\u0441\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),"\n",(0,c.jsx)(a.default,{})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h()}},63770:(e,n,t)=>{t.d(n,{M:()=>s});const s={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.12"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}}}]);