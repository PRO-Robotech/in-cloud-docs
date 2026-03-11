"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[4477],{32009(n,e,t){t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>s,toc:()=>g});const s=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/sysctls/sysctlsComponent","title":"sysctlsComponent","description":"Component installation steps:","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/setup-environments/sysctls/sysctlsComponent.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments/sysctls","slug":"/tech-docs/kubernetes/setup-environments/sysctls/sysctlsComponent","permalink":"/en/tech-docs/kubernetes/setup-environments/sysctls/sysctlsComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var i=t(74848),l=t(28453),o=t(57390),r=t(60513),c=t(9792),a=t(76331);const d={},u=void 0,p={},g=[{value:"Component installation steps:",id:"component-installation-steps",level:4},{value:"Network Parameters",id:"network-parameters",level:4},{value:"Sysctl configuration",id:"sysctl-configuration",level:4},{value:"Applying configuration",id:"applying-configuration",level:4},{value:"Sysctl configuration",id:"sysctl-configuration-1",level:4},{value:"Applying configuration",id:"applying-configuration-1",level:4},{value:"Sysctl configuration",id:"sysctl-configuration-2",level:4},{value:"Sysctl configuration",id:"sysctl-configuration-3",level:4},{value:"Applying configuration",id:"applying-configuration-2",level:4}];function h(n){const e={admonition:"admonition",code:"code",h4:"h4",li:"li",p:"p",ul:"ul",...(0,l.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h4,{id:"component-installation-steps",children:"Component installation steps:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Sysctl configuration."}),"\n",(0,i.jsx)(e.li,{children:"Applying configuration."}),"\n"]}),"\n",(0,i.jsxs)(e.admonition,{title:"Note",type:"warning",children:[(0,i.jsx)(e.h4,{id:"network-parameters",children:"Network Parameters"}),(0,i.jsx)(e.p,{children:"For correct traffic routing and filtering, kernel parameters must be set."}),(0,i.jsxs)(a.A,{groupId:"install-type",children:[(0,i.jsxs)(c.A,{value:"Bash",children:[(0,i.jsx)(e.h4,{id:"sysctl-configuration",children:"Sysctl configuration"}),(0,i.jsx)(o.A,{language:"bash",children:r.A`
      cat <<EOF > /etc/sysctl.d/99-br-netfilter.conf
      net.bridge.bridge-nf-call-iptables=1
      net.bridge.bridge-nf-call-ip6tables=1
      EOF
    `}),(0,i.jsx)(e.h4,{id:"applying-configuration",children:"Applying configuration"}),(0,i.jsx)(o.A,{language:"bash",children:r.A`
      sysctl --system
    `})]}),(0,i.jsxs)(c.A,{value:"Cloud-init",children:[(0,i.jsx)(e.h4,{id:"sysctl-configuration-1",children:"Sysctl configuration"}),(0,i.jsx)(o.A,{language:"bash",children:r.A`
      # write_files:
      - path: /etc/sysctl.d/99-br-netfilter.conf
        owner: root:root
        permissions: '0644'
        content: |
          net.bridge.bridge-nf-call-iptables=1
          net.bridge.bridge-nf-call-ip6tables=1
    `}),(0,i.jsx)(e.h4,{id:"applying-configuration-1",children:"Applying configuration"}),(0,i.jsx)(o.A,{language:"bash",children:r.A`
      # runcmd:
      - sysctl --system
    `})]})]}),(0,i.jsxs)(e.p,{children:["If the ",(0,i.jsx)(e.code,{children:"net.ipv4.ip_forward"})," parameter is not enabled, the system will not forward IP packets between interfaces. This can lead to network failures within the cluster, service unavailability, and loss of connectivity between pods."]}),(0,i.jsxs)(a.A,{groupId:"install-type",children:[(0,i.jsxs)(c.A,{value:"Bash",children:[(0,i.jsx)(e.h4,{id:"sysctl-configuration-2",children:"Sysctl configuration"}),(0,i.jsx)(o.A,{language:"bash",children:r.A`
      cat <<EOF > /etc/sysctl.d/99-network.conf
      net.ipv4.ip_forward=1
      EOF
    `}),(0,i.jsx)(o.A,{language:"bash",children:r.A`
      sysctl --system
    `})]}),(0,i.jsxs)(c.A,{value:"Cloud-init",children:[(0,i.jsx)(e.h4,{id:"sysctl-configuration-3",children:"Sysctl configuration"}),(0,i.jsx)(o.A,{language:"bash",children:r.A`
      # write_files:
      - path: /etc/sysctl.d/99-network.conf
        owner: root:root
        permissions: '0644'
        content: |
          net.ipv4.ip_forward=1
    `}),(0,i.jsx)(e.h4,{id:"applying-configuration-2",children:"Applying configuration"}),(0,i.jsx)(o.A,{language:"bash",children:r.A`
      # runcmd:
      - sysctl --system
    `})]})]})]})]})}function f(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}}}]);