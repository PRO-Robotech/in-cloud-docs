"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[7482],{74794(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/componentsReadyInitComponent","title":"componentsReadyInitComponent","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/componentsReadyInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/componentsReadyInitComponent","permalink":"/en/tech-docs/kubernetes/components/componentsReadyInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=n(74848),i=n(28453),a=n(57390),l=n(60513),c=n(44349);const r={},u=void 0,m={},d=[];function p(e){const t={admonition:"admonition",blockquote:"blockquote",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.A,{language:"bash",children:l.A`
  kubeadm init phase preflight --dry-run \\
    --config=${c.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,o.jsxs)(t.admonition,{title:"Command output",type:"note",children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"If everything is installed correctly, the command will complete without errors, and you will see the following output:"}),"\n"]}),(0,o.jsx)(a.A,{language:"bash",children:l.A`
    [preflight] Running pre-flight checks
    [preflight] Would pull the required images (like 'kubeadm config images pull')
  `})]}),"\n",(0,o.jsxs)(t.admonition,{title:"Command output",type:"note",children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"If the process was performed in semi-automatic mode, the acceptable output may look like this:"}),"\n"]}),(0,o.jsx)(a.A,{language:"bash",children:l.A`
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-apiserver.yaml]: /etc/kubernetes/manifests/kube-apiserver.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-controller-manager.yaml]: /etc/kubernetes/manifests/kube-controller-manager.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-scheduler.yaml]: /etc/kubernetes/manifests/kube-scheduler.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-etcd.yaml]: /etc/kubernetes/manifests/etcd.yaml already exists
    [preflight] Running pre-flight checks
    [preflight] Reading configuration from the cluster...
    [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
    [preflight] Running pre-flight checks before initializing the new control plane instance
    [preflight] Would pull the required images (like 'kubeadm config images pull')
  `})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}}}]);