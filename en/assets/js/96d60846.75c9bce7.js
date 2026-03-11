"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[166,8818],{98781(e,n,s){s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>i,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/allMasterTabs","title":"allMasterTabs","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/setup-environments/allMasterTabs.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments","slug":"/tech-docs/kubernetes/setup-environments/allMasterTabs","permalink":"/en/tech-docs/kubernetes/setup-environments/allMasterTabs","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=s(74848),r=s(28453),o=s(9792),l=s(76331),c=s(60513),u=s(57390);const i={},d=void 0,h={},p=[];function m(e){return(0,a.jsxs)(l.A,{children:[(0,a.jsx)(o.A,{value:"master-1",children:(0,a.jsx)(u.A,{language:"bash",children:c.A`
        export HOST_NAME=master-1
      `})}),(0,a.jsx)(o.A,{value:"master-2",children:(0,a.jsx)(u.A,{language:"bash",children:c.A`
        export HOST_NAME=master-2
      `})}),(0,a.jsx)(o.A,{value:"master-3",children:(0,a.jsx)(u.A,{language:"bash",children:c.A`
        export HOST_NAME=master-3
      `})})]})}function b(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m()}},69206(e,n,s){s.r(n),s.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>h,metadata:()=>t,toc:()=>b});const t=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/base-os/baseOSSetupComponent","title":"baseOSSetupComponent","description":"Basic node settings","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/setup-environments/base-os/baseOSSetupComponent.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments/base-os","slug":"/tech-docs/kubernetes/setup-environments/base-os/baseOSSetupComponent","permalink":"/en/tech-docs/kubernetes/setup-environments/base-os/baseOSSetupComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=s(74848),r=s(28453),o=s(44349),l=s(98781),c=s(9792),u=s(76331),i=s(57390),d=s(60513);const h={},p=void 0,m={},b=[...l.toc];function x(e){const n={li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"Basic node settings"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Node environment variables."}),"\n",(0,a.jsx)(n.li,{children:"Changing the node name."}),"\n",(0,a.jsx)(n.li,{children:"Installing dependencies."}),"\n"]}),"\n",(0,a.jsx)("h4",{children:"Node environment variables"}),"\n",(0,a.jsx)(l.default,{}),"\n",(0,a.jsx)(i.A,{language:"bash",children:d.A`
  export CLUSTER_NAME="${o.M.clusterName.value}"
  export BASE_DOMAIN="${o.M.kubernetesBaseDomain.value}"
  export CLUSTER_DOMAIN="${o.M.kubernetesClusterDomain.value}"
  export FULL_HOST_NAME="${o.M.virtualMachineFullName.value}"
`}),"\n",(0,a.jsx)("h4",{children:"Changing the node name"}),"\n",(0,a.jsx)(i.A,{language:"bash",children:d.A`
  hostnamectl set-hostname $\{FULL_HOST_NAME}
`}),"\n",(0,a.jsx)("h4",{children:"Installing dependencies"}),"\n",(0,a.jsxs)(u.A,{groupId:"install-pkg",children:[(0,a.jsx)(c.A,{value:"apt",children:(0,a.jsx)(i.A,{language:"bash",children:d.A`
        sudo apt update
        sudo apt install -y conntrack socat jq tree
      `})}),(0,a.jsx)(c.A,{value:"yum",children:(0,a.jsx)(i.A,{language:"bash",children:d.A`
        sudo yum update
        sudo yum install -y conntrack-tools socat jq tree
      `})}),(0,a.jsx)(c.A,{value:"dnf",children:(0,a.jsx)(i.A,{language:"bash",children:d.A`
        sudo dnf update
        sudo dnf install -y conntrack-tools socat jq tree
      `})})]})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}}}]);