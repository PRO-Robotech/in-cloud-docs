"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[4522],{96806(e,n,t){t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>u,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"tech-docs/kubernetes/components/componentsReadyJoinComponent","title":"componentsReadyJoinComponent","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/componentsReadyJoinComponent.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/componentsReadyJoinComponent","permalink":"/en/tech-docs/kubernetes/components/componentsReadyJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=t(74848),s=t(28453),a=t(57390),l=t(60513),c=t(44349);const r={},u=void 0,m={},d=[];function h(e){const n={admonition:"admonition",blockquote:"blockquote",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.A,{language:"bash",children:l.A`
  kubeadm join phase preflight --dry-run \\
    --config=${c.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"If everything is installed correctly, the command will complete without errors, and you will see the following output:"}),"\n"]}),(0,o.jsx)(a.A,{language:"bash",children:l.A`
    [preflight] Running pre-flight checks
    [preflight] Reading configuration from the cluster...
    [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
    [preflight] Running pre-flight checks before initializing the new control plane instance
    [preflight] Would pull the required images (like 'kubeadm config images pull')
  `})]}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"If the process was performed in semi-automatic mode, the acceptable output may look like this:"}),"\n"]}),(0,o.jsx)(a.A,{language:"bash",children:l.A`
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-apiserver.yaml]: /etc/kubernetes/manifests/kube-apiserver.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-controller-manager.yaml]: /etc/kubernetes/manifests/kube-controller-manager.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-scheduler.yaml]: /etc/kubernetes/manifests/kube-scheduler.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-etcd.yaml]: /etc/kubernetes/manifests/etcd.yaml already exists
    [preflight] Running pre-flight checks
    [preflight] Reading configuration from the cluster...
    [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
    [preflight] Running pre-flight checks before initializing the new control plane instance
    [preflight] Would pull the required images (like 'kubeadm config images pull')
  `})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}}}]);