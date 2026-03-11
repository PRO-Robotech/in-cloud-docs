"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[2554],{54084(e,t,n){n.d(t,{Ay:()=>d,RM:()=>o});var s=n(74848),r=n(28453),a=n(44349),c=n(57390),i=n(60513);const o=[];function l(e){const t={admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"Warning",type:"danger",children:(0,s.jsx)(t.p,{children:"Please note: during the Join phase, you cannot choose which manifests to generate \u2014 kubeadm creates all of them at once, in full."})}),"\n",(0,s.jsx)("h4",{children:"Manifest generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm join phase control-plane-prepare control-plane \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:i.A`
  [preflight] Reading configuration from the cluster...
  [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
  [control-plane] Using manifest folder "/etc/kubernetes/manifests"
  [control-plane] Creating static Pod manifest for "kube-apiserver"
  [control-plane] Creating static Pod manifest for "kube-controller-manager"
  [control-plane] Creating static Pod manifest for "kube-scheduler"
`})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},69770(e,t,n){n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>x,frontMatter:()=>f,metadata:()=>s,toc:()=>b});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/allStaticPodsCPComponent","title":"allStaticPodsCPComponent","description":"This section describes the automatic generation of static pod manifests for Kubernetes control plane components using kubeadm.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/allStaticPodsCPComponent.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/allStaticPodsCPComponent","permalink":"/en/tech-docs/kubernetes/components/allStaticPodsCPComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),a=n(28453),c=n(44349),i=n(57390),o=n(60513);function l(e){const t={admonition:"admonition",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"Certificate generation"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  kubeadm init phase certs all \\
    --config=${c.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(i.A,{language:"bash",children:o.A`
  [certs] Using certificateDir folder "/etc/kubernetes/pki"
  [certs] Generating "ca" certificate and key
  [certs] Generating "apiserver" certificate and key
  [certs] apiserver serving cert is signed for DNS names [api.my-first-cluster.example.com kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.my-first-cluster.example.com pylcozuscb] and IPs [29.64.0.1 31.129.111.153 127.0.0.1]
  [certs] Generating "apiserver-kubelet-client" certificate and key
  [certs] Generating "front-proxy-ca" certificate and key
  [certs] Generating "front-proxy-client" certificate and key
  [certs] Generating "etcd/ca" certificate and key
  [certs] Generating "etcd/server" certificate and key
  [certs] etcd/server serving cert is signed for DNS names [localhost master-1.my-first-cluster.example.com pylcozuscb] and IPs [31.129.111.153 127.0.0.1 ::1]
  [certs] Generating "etcd/peer" certificate and key
  [certs] etcd/peer serving cert is signed for DNS names [localhost master-1.my-first-cluster.example.com pylcozuscb] and IPs [31.129.111.153 127.0.0.1 ::1]
  [certs] Generating "etcd/healthcheck-client" certificate and key
  [certs] Generating "apiserver-etcd-client" certificate and key
  [certs] Generating "sa" key and public key
`})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}var u=n(54084),p=n(9792),m=n(76331);const f={},h=void 0,g={},b=[...u.RM];function k(e){const t={blockquote:"blockquote",code:"code",p:"p",...(0,a.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["This section describes the automatic generation of static pod manifests for Kubernetes control plane components using ",(0,r.jsx)(t.code,{children:"kubeadm"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(m.A,{groupId:"phase",children:[(0,r.jsx)(p.A,{value:"init",label:"Init",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"Static Pods setup"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,r.jsx)(d,{})]})}),(0,r.jsx)(p.A,{value:"join",label:"Join",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"Static Pods setup"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,r.jsx)(u.Ay,{})]})})]})]})}function x(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k(e)}}}]);