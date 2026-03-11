"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[9033],{56772(e,n,t){t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/checks/statusSystemdUnit","title":"statusSystemdUnit","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/containerd/checks/statusSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/checks","slug":"/tech-docs/kubernetes/components/containerd/checks/statusSystemdUnit","permalink":"/en/tech-docs/kubernetes/components/containerd/checks/statusSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=t(74848),c=t(28453),r=t(60513),i=t(57390);const a={},d=void 0,l={},u=[];function m(e){const n={admonition:"admonition",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.A,{language:"bash",children:r.A`
  systemctl status containerd
`}),"\n",(0,o.jsx)(n.admonition,{title:"Command output",type:"note",children:(0,o.jsx)(i.A,{language:"bash",children:r.A`
  ● containerd.service - containerd container runtime
        Loaded: loaded (/usr/lib/systemd/system/containerd.service; enabled; preset: enabled)
        Active: active (running) since Tue 2024-12-31 17:26:21 UTC; 2min 30s ago
          Docs: https://containerd.io
      Main PID: 839 (containerd)
        Tasks: 7 (limit: 2274)
        Memory: 62.0M (peak: 62.5M)
          CPU: 375ms
        CGroup: /system.slice/containerd.service
                └─839 /usr/local/bin/containerd

  ***** level=info msg="Start subscribing containerd event"
  ***** level=info msg="Start recovering state"
  ***** level=info msg="Start event monitor"
  ***** level=info msg="Start snapshots syncer"
  ***** level=info msg="Start cni network conf syncer for default"
  ***** level=info msg="Start streaming server"
  ***** level=info msg=serving... address=/run/containerd/containerd.sock.ttrpc
  ***** level=info msg=serving... address=/run/containerd/containerd.sock
  ***** level=info msg="containerd successfully booted in 0.065807s"
  ***** Started containerd.service - containerd container runtime.

`})})]})}function g(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}}}]);