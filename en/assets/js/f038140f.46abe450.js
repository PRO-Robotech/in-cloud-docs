"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[5458,8769],{51524(e,n,t){t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>h,default:()=>k,frontMatter:()=>m,metadata:()=>a,toc:()=>g});const a=JSON.parse('{"id":"tech-docs/kubernetes/additional-setup/marking/markingJoinComponent","title":"markingJoinComponent","description":"This section describes the cluster configuration that allows you to set the container scheduling policy in advance and protect the control plane from unplanned workloads.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/additional-setup/marking/markingJoinComponent.mdx","sourceDirName":"tech-docs/kubernetes/additional-setup/marking","slug":"/tech-docs/kubernetes/additional-setup/marking/markingJoinComponent","permalink":"/en/tech-docs/kubernetes/additional-setup/marking/markingJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=t(74848),s=t(28453),r=t(9792),i=t(76331),l=t(57390),c=t(60513),d=t(44349),u=t(28415);const m={},h=void 0,p={},g=[...u.toc];function b(e){const n={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,o.jsx)(n.p,{children:"This section describes the cluster configuration that allows you to set the container scheduling policy in advance and protect the control plane from unplanned workloads."})}),"\n",(0,o.jsx)(u.default,{}),"\n",(0,o.jsx)("h4",{children:"Environment variables"}),"\n",(0,o.jsx)(l.A,{language:"bash",children:c.A`
  export CLUSTER_NAME=${d.M.clusterName.value}
  export BASE_DOMAIN=${d.M.kubernetesBaseDomain.value}
  export FULL_HOST_NAME=${d.M.virtualMachineFullName.value}
`}),"\n",(0,o.jsxs)(i.A,{groupId:"install-type",children:[(0,o.jsxs)(r.A,{value:"HardWay",children:[(0,o.jsx)("h4",{children:"Node labeling"}),(0,o.jsx)(l.A,{language:"bash",children:c.A`
      kubectl label node $\{FULL_HOST_NAME} node-role.kubernetes.io/control-plane="" \\
        --kubeconfig=${d.M.kubernetesBaseFolderPath.value}/super-admin.conf
    `}),(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(l.A,{language:"bash",children:c.A`
  node/master-<n>.my-first-cluster.example.com labeled
`})}),(0,o.jsx)("h4",{children:"Node tainting"}),(0,o.jsx)(l.A,{language:"bash",children:c.A`
      kubectl taint node $\{FULL_HOST_NAME} node-role.kubernetes.io/control-plane="":NoSchedule \\
        --overwrite \\
        --kubeconfig=${d.M.kubernetesBaseFolderPath.value}/super-admin.conf
    `}),(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(l.A,{language:"bash",children:c.A`
    node/master-<n>.my-first-cluster.example.com modified
  `})})]}),(0,o.jsxs)(r.A,{value:"Kubeadm",children:[(0,o.jsx)(l.A,{language:"bash",children:c.A`
      kubeadm join phase control-plane-join mark-control-plane \\
        --config=${d.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
    `}),(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(l.A,{language:"bash",children:c.A`
    [mark-control-plane] Marking the node master-<n>.my-first-cluster.example.com as control-plane by adding the labels: [node-role.kubernetes.io/control-plane node.kubernetes.io/exclude-from-external-load-balancers]
    [mark-control-plane] Marking the node master-<n>.my-first-cluster.example.com as control-plane by adding the taints [node-role.kubernetes.io/control-plane:NoSchedule]
  `})})]})]})]})}function k(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(b,{...e})}):b(e)}},28415(e,n,t){t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>d,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/secondaryMasters","title":"secondaryMasters","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/setup-environments/secondaryMasters.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments","slug":"/tech-docs/kubernetes/setup-environments/secondaryMasters","permalink":"/en/tech-docs/kubernetes/setup-environments/secondaryMasters","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=t(74848),s=t(28453),r=t(9792),i=t(76331),l=t(60513),c=t(57390);const d={},u=void 0,m={},h=[];function p(e){return(0,o.jsxs)(i.A,{children:[(0,o.jsx)(r.A,{value:"master-2",children:(0,o.jsx)(c.A,{language:"bash",children:l.A`
        export HOST_NAME=master-2
      `})}),(0,o.jsx)(r.A,{value:"master-3",children:(0,o.jsx)(c.A,{language:"bash",children:l.A`
        export HOST_NAME=master-3
      `})})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p()}}}]);