"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[2229,4477],{5831(e,n,t){t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/sysctls/allSysctlsComponent","title":"allSysctlsComponent","description":"This section covers configuring kernel parameters using sysctl, which are necessary for Kubernetes networking.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/setup-environments/sysctls/allSysctlsComponent.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments/sysctls","slug":"/tech-docs/kubernetes/setup-environments/sysctls/allSysctlsComponent","permalink":"/en/tech-docs/kubernetes/setup-environments/sysctls/allSysctlsComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var i=t(74848),o=t(28453),r=t(32009);const l={},c=void 0,a={},d=[...r.toc];function u(e){const n={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"This section covers configuring kernel parameters using sysctl, which are necessary for Kubernetes networking.\nChanges are made to ensure traffic routing between pods and correct iptables operation for bridges. These parameters are mandatory for enabling IP packet forwarding and network flow filtering in the cluster."}),"\n"]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,i.jsx)("p",{style:{marginBottom:0},children:"Configuring sysctl parameters"}),(0,i.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,i.jsx)(r.default,{})]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},32009(e,n,t){t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>s,toc:()=>g});const s=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/sysctls/sysctlsComponent","title":"sysctlsComponent","description":"Component installation steps:","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/setup-environments/sysctls/sysctlsComponent.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments/sysctls","slug":"/tech-docs/kubernetes/setup-environments/sysctls/sysctlsComponent","permalink":"/en/tech-docs/kubernetes/setup-environments/sysctls/sysctlsComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var i=t(74848),o=t(28453),r=t(57390),l=t(60513),c=t(9792),a=t(76331);const d={},u=void 0,p={},g=[{value:"Component installation steps:",id:"component-installation-steps",level:4},{value:"Network Parameters",id:"network-parameters",level:4},{value:"Sysctl configuration",id:"sysctl-configuration",level:4},{value:"Applying configuration",id:"applying-configuration",level:4},{value:"Sysctl configuration",id:"sysctl-configuration-1",level:4},{value:"Applying configuration",id:"applying-configuration-1",level:4},{value:"Sysctl configuration",id:"sysctl-configuration-2",level:4},{value:"Sysctl configuration",id:"sysctl-configuration-3",level:4},{value:"Applying configuration",id:"applying-configuration-2",level:4}];function h(e){const n={admonition:"admonition",code:"code",h4:"h4",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h4,{id:"component-installation-steps",children:"Component installation steps:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Sysctl configuration."}),"\n",(0,i.jsx)(n.li,{children:"Applying configuration."}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{title:"Note",type:"warning",children:[(0,i.jsx)(n.h4,{id:"network-parameters",children:"Network Parameters"}),(0,i.jsx)(n.p,{children:"For correct traffic routing and filtering, kernel parameters must be set."}),(0,i.jsxs)(a.A,{groupId:"install-type",children:[(0,i.jsxs)(c.A,{value:"Bash",children:[(0,i.jsx)(n.h4,{id:"sysctl-configuration",children:"Sysctl configuration"}),(0,i.jsx)(r.A,{language:"bash",children:l.A`
      cat <<EOF > /etc/sysctl.d/99-br-netfilter.conf
      net.bridge.bridge-nf-call-iptables=1
      net.bridge.bridge-nf-call-ip6tables=1
      EOF
    `}),(0,i.jsx)(n.h4,{id:"applying-configuration",children:"Applying configuration"}),(0,i.jsx)(r.A,{language:"bash",children:l.A`
      sysctl --system
    `})]}),(0,i.jsxs)(c.A,{value:"Cloud-init",children:[(0,i.jsx)(n.h4,{id:"sysctl-configuration-1",children:"Sysctl configuration"}),(0,i.jsx)(r.A,{language:"bash",children:l.A`
      # write_files:
      - path: /etc/sysctl.d/99-br-netfilter.conf
        owner: root:root
        permissions: '0644'
        content: |
          net.bridge.bridge-nf-call-iptables=1
          net.bridge.bridge-nf-call-ip6tables=1
    `}),(0,i.jsx)(n.h4,{id:"applying-configuration-1",children:"Applying configuration"}),(0,i.jsx)(r.A,{language:"bash",children:l.A`
      # runcmd:
      - sysctl --system
    `})]})]}),(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.code,{children:"net.ipv4.ip_forward"})," parameter is not enabled, the system will not forward IP packets between interfaces. This can lead to network failures within the cluster, service unavailability, and loss of connectivity between pods."]}),(0,i.jsxs)(a.A,{groupId:"install-type",children:[(0,i.jsxs)(c.A,{value:"Bash",children:[(0,i.jsx)(n.h4,{id:"sysctl-configuration-2",children:"Sysctl configuration"}),(0,i.jsx)(r.A,{language:"bash",children:l.A`
      cat <<EOF > /etc/sysctl.d/99-network.conf
      net.ipv4.ip_forward=1
      EOF
    `}),(0,i.jsx)(r.A,{language:"bash",children:l.A`
      sysctl --system
    `})]}),(0,i.jsxs)(c.A,{value:"Cloud-init",children:[(0,i.jsx)(n.h4,{id:"sysctl-configuration-3",children:"Sysctl configuration"}),(0,i.jsx)(r.A,{language:"bash",children:l.A`
      # write_files:
      - path: /etc/sysctl.d/99-network.conf
        owner: root:root
        permissions: '0644'
        content: |
          net.ipv4.ip_forward=1
    `}),(0,i.jsx)(n.h4,{id:"applying-configuration-2",children:"Applying configuration"}),(0,i.jsx)(r.A,{language:"bash",children:l.A`
      # runcmd:
      - sysctl --system
    `})]})]})]})]})}function f(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);