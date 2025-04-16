"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[11655,34927,41653,70164,74730,82505],{16455:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/checks/statusSystemdUnit","title":"statusSystemdUnit","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/containerd/checks/statusSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/checks","slug":"/tech-docs/kubernetes/components/containerd/checks/statusSystemdUnit","permalink":"/tech-docs/kubernetes/components/containerd/checks/statusSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=t(74848),c=t(28453),r=t(60513),i=t(1775);const a={},d=void 0,l={},u=[];function m(e){const n={admonition:"admonition",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.A,{language:"bash",children:r.A`
  systemctl status containerd
`}),"\n",(0,o.jsx)(n.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,o.jsx)(i.A,{language:"bash",children:r.A`
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

`})})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},20186:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/componentReadyComponent","title":"componentReadyComponent","description":"\u042d\u0442\u0430\u043f\u044b \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438","source":"@site/docs/tech-docs/kubernetes/components/containerd/componentReadyComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/componentReadyComponent","permalink":"/tech-docs/kubernetes/components/containerd/componentReadyComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=t(74848),c=t(28453),r=t(16455),i=t(71020),a=t(63217),d=t(69536);const l={},u=void 0,m={},h=[...a.toc,...i.toc,...d.toc,...r.toc];function p(e){const n={li:"li",ul:"ul",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u0418\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442."}),"\n",(0,o.jsx)(n.li,{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442."}),"\n",(0,o.jsx)(n.li,{children:"\u0412\u0435\u0440\u0441\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0430."}),"\n",(0,o.jsx)(n.li,{children:"\u0421\u0442\u0430\u0442\u0443\u0441 Systemd Unit."}),"\n"]}),"\n",(0,o.jsx)("h3",{children:"\u0418\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b"}),"\n",(0,o.jsx)(a.default,{}),"\n",(0,o.jsx)("h3",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b"}),"\n",(0,o.jsx)(i.default,{}),"\n",(0,o.jsx)("h3",{children:"\u0412\u0435\u0440\u0441\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),"\n",(0,o.jsx)(d.default,{}),"\n",(0,o.jsx)("h3",{children:"\u0421\u0442\u0430\u0442\u0443\u0441 Systemd Unit"}),"\n",(0,o.jsx)(r.default,{})]})}function f(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},56980:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/component-ready","title":"5.2.1.4.1. Containerd","description":"","source":"@site/docs/tech-docs/kubernetes/components/containerd/componentReady.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/component-ready","permalink":"/tech-docs/kubernetes/components/containerd/component-ready","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"component-ready"}}');var o=t(74848),c=t(28453),r=t(20186);const i={id:"component-ready"},a="5.2.1.4.1. Containerd",d={},l=[...r.toc];function u(e){const n={h1:"h1",header:"header",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"52141-containerd",children:"5.2.1.4.1. Containerd"})}),"\n",(0,o.jsx)(r.default,{})]})}function m(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},63217:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/checks/statusBinFiles","title":"statusBinFiles","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/containerd/checks/statusBinFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/checks","slug":"/tech-docs/kubernetes/components/containerd/checks/statusBinFiles","permalink":"/tech-docs/kubernetes/components/containerd/checks/statusBinFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=t(74848),c=t(28453),r=t(60513),i=t(1775),a=t(63770);const d={},l=void 0,u={},m=[];function h(e){const n={admonition:"admonition",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.A,{language:"bash",children:r.A`
  journalctl -t containerd-installer
`}),"\n",(0,o.jsx)(n.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,o.jsx)(i.A,{language:"text",children:r.A`
  ***** [INFO] Checking current containerd version...
  ***** [INFO] Current: none, Target: ${a.M.containerd.value}
  ***** [INFO] Download URL: https://*******
  ***** [INFO] Updating containerd to version ${a.M.containerd.value}...
  ***** [INFO] Working directory: /tmp/tmp.*****
  ***** [INFO] Downloading containerd...
  ***** [INFO] Downloading checksum file...
  ***** [INFO] Verifying checksum...
  ***** [INFO] Extracting files...
  ***** [INFO] Installing binaries...
  ***** [INFO] Containerd successfully updated to ${a.M.containerd.value}.
`})}),"\n",(0,o.jsx)(i.A,{language:"bash",children:r.A`
  ls -la /usr/local/bin/ | grep -E "containerd|ctr"
`}),"\n",(0,o.jsx)(n.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,o.jsx)(i.A,{language:"bash",children:r.A`
  -rwxr-xr-x  1 root root  54855296 Feb 18 15:12 containerd
  -rwxr-xr-x  1 root root   7176192 Feb 18 15:12 containerd-shim
  -rwxr-xr-x  1 root root   8884224 Feb 18 15:12 containerd-shim-containerd-v1
  -rwxr-xr-x  1 root root  12169216 Feb 18 15:12 containerd-shim-containerd-v2
  -rwxr-xr-x  1 root root  12169216 Feb 18 15:12 ctr
`})})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},63770:(e,n,t)=>{t.d(n,{M:()=>s});const s={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.12"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},69536:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/checks/statusBinVersion","title":"statusBinVersion","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/containerd/checks/statusBinVersion.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/checks","slug":"/tech-docs/kubernetes/components/containerd/checks/statusBinVersion","permalink":"/tech-docs/kubernetes/components/containerd/checks/statusBinVersion","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=t(74848),c=t(28453),r=t(60513),i=t(1775);const a={},d=void 0,l={},u=[];function m(e){const n={admonition:"admonition",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.A,{language:"bash",children:r.A`
  containerd --version
`}),"\n",(0,o.jsx)(n.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,o.jsx)(i.A,{language:"bash",children:r.A`
  containerd github.com/containerd/containerd v1.7.19 2bf793ef6dc9a18e00cb12efb64355c2c9d5eb41
`})})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},71020:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/checks/statusConfigFiles","title":"statusConfigFiles","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/containerd/checks/statusConfigFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/checks","slug":"/tech-docs/kubernetes/components/containerd/checks/statusConfigFiles","permalink":"/tech-docs/kubernetes/components/containerd/checks/statusConfigFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=t(74848),c=t(28453),r=t(60513),i=t(1775);const a={},d=void 0,l={},u=[];function m(e){const n={admonition:"admonition",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.A,{language:"bash",children:r.A`
  tree /etc/containerd/
`}),"\n",(0,o.jsx)(n.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,o.jsx)(i.A,{language:"bash",children:r.A`
  /etc/containerd/
  ├── certs.d
  ├── conf.d
  │   └── cloud.toml
  └── config.toml
`})})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}}}]);