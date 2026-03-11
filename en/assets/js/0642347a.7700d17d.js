"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[2038],{73397(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitRunning","title":"statusSystemdUnitRunning","description":"Note that when creating a cluster with Kubeadm without running kubeadm init or kubeadm join, the Systemd Unit will be added to autostart but will be disabled.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitRunning.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/checks","slug":"/tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitRunning","permalink":"/en/tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitRunning","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var i=n(74848),o=n(28453),c=n(60513),u=n(57390);const a={},r=void 0,d={},l=[];function b(e){const t={admonition:"admonition",code:"code",em:"em",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,i.jsxs)(t.p,{children:["Note that when creating a cluster with ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"Kubeadm"})})," without running ",(0,i.jsx)(t.code,{children:"kubeadm init"})," or ",(0,i.jsx)(t.code,{children:"kubeadm join"}),", the Systemd Unit will be added to autostart but will be disabled."]})}),"\n",(0,i.jsx)(u.A,{language:"bash",children:c.A`
      systemctl status kubelet
  `}),"\n",(0,i.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,i.jsx)(u.A,{language:"bash",children:c.A`
      ● kubelet.service - kubelet: The Kubernetes Node Agent
              Loaded: loaded (/usr/lib/systemd/system/kubelet.service; enabled; preset: enabled)
          Drop-In: /usr/lib/systemd/system/kubelet.service.d
                      └─10-kubeadm.conf
              Active: active (running) since Sat 2025-02-22 10:33:54 UTC; 17min ago
              Docs: https://kubernetes.io/docs/
          Main PID: 13779 (kubelet)
              Tasks: 14 (limit: 7069)
              Memory: 34.0M (peak: 35.3M)
              CPU: 27.131s
              CGroup: /system.slice/kubelet.service
                      └─13779 /usr/local/bin/kubelet --bootstrap-kubeconfig=/etc/kubernetes/bootstrap-kubelet.conf --kubeconfig=/etc/kubernetes/kubelet.conf --config=/var/lib/kubelet/config.yaml
  `})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(b,{...e})}):b(e)}}}]);