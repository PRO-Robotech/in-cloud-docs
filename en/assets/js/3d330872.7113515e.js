"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[3479],{55215(e,t,n){n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>x,frontMatter:()=>p,metadata:()=>r,toc:()=>y});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/allCertificatesComponent","title":"allCertificatesComponent","description":"This section describes the generation of all certificates.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/allCertificatesComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates","slug":"/tech-docs/kubernetes/certificates/allCertificatesComponent","permalink":"/en/tech-docs/kubernetes/certificates/allCertificatesComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var i=n(74848),s=n(28453),c=n(53474),a=n(44349),o=n(57390),l=n(60513);function d(e){const t={admonition:"admonition",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h4",{children:"Certificate generation"}),"\n",(0,i.jsx)(o.A,{language:"bash",children:l.A`
  kubeadm init phase certs all \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(o.A,{language:"bash",children:l.A`
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
`})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}var f=n(9792),m=n(76331);const p={},h=void 0,g={},y=[...c.RM];function k(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"This section describes the generation of all certificates."}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["If you ",(0,i.jsx)(t.strong,{children:"have not performed manual certificate generation"}),", use this block to automatically create the necessary files."]})}),"\n",(0,i.jsxs)(m.A,{groupId:"phase",children:[(0,i.jsx)(f.A,{value:"init",label:"Init",children:(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,i.jsx)("p",{style:{marginBottom:0},children:"Generation of all certificates"}),(0,i.jsx)("p",{className:"obligatory-note-green",children:"\u25cf Optional"})]})}),(0,i.jsx)(u,{})]})}),(0,i.jsx)(f.A,{value:"join",label:"Join",children:(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,i.jsx)("p",{style:{marginBottom:0},children:"Generation of all certificates"}),(0,i.jsx)("p",{className:"obligatory-note-green",children:"\u25cf Optional"})]})}),(0,i.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,i.jsx)(t.p,{children:"This section depends on the following sections:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/center-authority/all-ca",children:"CA Download"}),"."]}),"\n"]})]}),(0,i.jsx)(c.Ay,{})]})})]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(k,{...e})}):k(e)}},53474(e,t,n){n.d(t,{Ay:()=>d,RM:()=>o});var r=n(74848),i=n(28453),s=n(44349),c=n(57390),a=n(60513);const o=[];function l(e){const t={admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{title:"Warning",type:"danger",children:(0,r.jsx)(t.p,{children:"Please note: during the Join phase, you cannot choose which certificates to generate \u2014 kubeadm creates them all at once, in full."})}),"\n",(0,r.jsx)("h4",{children:"Certificate generation"}),"\n",(0,r.jsx)(c.A,{language:"bash",children:a.A`
  kubeadm join phase control-plane-prepare certs \\
    --config=${s.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(c.A,{language:"bash",children:a.A`
  [preflight] Reading configuration from the cluster...
  [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
  [certs] Using certificateDir folder "/etc/kubernetes/pki"
  [certs] Generating "etcd/server" certificate and key
  [certs] etcd/server serving cert is signed for DNS names [localhost master-1.my-first-cluster.example.com master-3.my-first-cluster.example.com] and IPs [217.114.0.145 127.0.0.1 ::1 31.129.111.153]
  [certs] Generating "etcd/peer" certificate and key
  [certs] etcd/peer serving cert is signed for DNS names [localhost master-1.my-first-cluster.example.com master-3.my-first-cluster.example.com] and IPs [217.114.0.145 127.0.0.1 ::1 31.129.111.153]
  [certs] Generating "etcd/healthcheck-client" certificate and key
  [certs] Generating "apiserver-etcd-client" certificate and key
  [certs] Generating "apiserver" certificate and key
  [certs] apiserver serving cert is signed for DNS names [api.my-first-cluster.example.com kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.my-first-cluster.example.com master-3.my-first-cluster.example.com] and IPs [29.64.0.1 217.114.0.145 31.129.111.153 127.0.0.1]
  [certs] Generating "apiserver-kubelet-client" certificate and key
  [certs] Generating "front-proxy-client" certificate and key
  [certs] Valid certificates and keys now exist in "/etc/kubernetes/pki"
  [certs] Using the existing "sa" key
`})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}}}]);