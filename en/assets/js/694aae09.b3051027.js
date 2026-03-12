"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[294],{57063(e,n,s){s.r(n),s.d(n,{assets:()=>p,contentTitle:()=>h,default:()=>g,frontMatter:()=>d,metadata:()=>t,toc:()=>m});const t=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/base-os/baseOSSetupComponentDP","title":"baseOSSetupComponentDP","description":"Basic node settings","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/setup-environments/base-os/baseOSSetupComponentDP.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments/base-os","slug":"/tech-docs/kubernetes/setup-environments/base-os/baseOSSetupComponentDP","permalink":"/en/tech-docs/kubernetes/setup-environments/base-os/baseOSSetupComponentDP","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=s(74848),o=s(28453),r=s(44349),l=s(9792),i=s(76331),u=s(57390),c=s(60513);const d={},h=void 0,p={},m=[];function b(e){const n={li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"Basic node settings"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Node environment variables."}),"\n",(0,a.jsx)(n.li,{children:"Changing the node name."}),"\n",(0,a.jsx)(n.li,{children:"Installing dependencies."}),"\n"]}),"\n",(0,a.jsx)("h4",{children:"Node environment variables"}),"\n",(0,a.jsx)(u.A,{language:"bash",children:c.A`
  export HOST_NAME=worker-1
  export CLUSTER_NAME="${r.M.clusterName.value}"
  export BASE_DOMAIN="${r.M.kubernetesBaseDomain.value}"
  export CLUSTER_DOMAIN="${r.M.kubernetesClusterDomain.value}"
  export FULL_HOST_NAME="${r.M.virtualMachineFullName.value}"
`}),"\n",(0,a.jsx)("h4",{children:"Changing the node name"}),"\n",(0,a.jsx)(u.A,{language:"bash",children:c.A`
  hostnamectl set-hostname $\{FULL_HOST_NAME}
`}),"\n",(0,a.jsx)("h4",{children:"Installing dependencies"}),"\n",(0,a.jsxs)(i.A,{groupId:"install-pkg",children:[(0,a.jsx)(l.A,{value:"apt",children:(0,a.jsx)(u.A,{language:"bash",children:c.A`
        sudo apt update
        sudo apt install -y conntrack socat jq tree
      `})}),(0,a.jsx)(l.A,{value:"yum",children:(0,a.jsx)(u.A,{language:"bash",children:c.A`
        sudo yum update
        sudo yum install -y conntrack-tools socat jq tree
      `})}),(0,a.jsx)(l.A,{value:"dnf",children:(0,a.jsx)(u.A,{language:"bash",children:c.A`
        sudo dnf update
        sudo dnf install -y conntrack-tools socat jq tree
      `})})]})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}}}]);