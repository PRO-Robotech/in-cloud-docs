"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[3018],{12817(e,o,n){n.r(o),n.d(o,{assets:()=>m,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/modprobe/coreModulesComponent","title":"coreModulesComponent","description":"Component installation steps:","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/setup-environments/modprobe/coreModulesComponent.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments/modprobe","slug":"/tech-docs/kubernetes/setup-environments/modprobe/coreModulesComponent","permalink":"/en/tech-docs/kubernetes/setup-environments/modprobe/coreModulesComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),i=n(28453),r=n(57390),l=n(60513),d=n(9792),a=n(76331);const c={},u=void 0,m={},p=[{value:"Component installation steps:",id:"component-installation-steps",level:4},{value:"Modprobe configuration",id:"modprobe-configuration",level:4},{value:"Loading modules",id:"loading-modules",level:4},{value:"Modprobe configuration",id:"modprobe-configuration-1",level:4},{value:"Loading modules",id:"loading-modules-1",level:4}];function h(e){const o={admonition:"admonition",h4:"h4",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h4,{id:"component-installation-steps",children:"Component installation steps:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Modprobe configuration."}),"\n",(0,s.jsx)(o.li,{children:"Loading modules."}),"\n"]}),"\n",(0,s.jsxs)(a.A,{groupId:"install-type",children:[(0,s.jsxs)(d.A,{value:"Bash",children:[(0,s.jsx)(o.h4,{id:"modprobe-configuration",children:"Modprobe configuration"}),(0,s.jsx)(r.A,{language:"bash",children:l.A`
    cat <<EOF > /etc/modules-load.d/k8s.conf
    overlay
    br_netfilter
    EOF
  `}),(0,s.jsx)(o.h4,{id:"loading-modules",children:"Loading modules"}),(0,s.jsx)(r.A,{language:"bash",children:l.A`
    sudo -i
    modprobe overlay
    modprobe br_netfilter
  `})]}),(0,s.jsxs)(d.A,{value:"Cloud-init",children:[(0,s.jsx)(o.h4,{id:"modprobe-configuration-1",children:"Modprobe configuration"}),(0,s.jsx)(r.A,{language:"bash",children:l.A`
    # write_files:
    - path: /etc/modules-load.d/k8s.conf
      owner: root:root
      permissions: '0644'
      content: |
        overlay
        br_netfilter
  `}),(0,s.jsx)(o.h4,{id:"loading-modules-1",children:"Loading modules"}),(0,s.jsx)(r.A,{language:"bash",children:l.A`
    # runcmd:
    - modprobe overlay
    - modprobe br_netfilter
  `})]})]}),"\n",(0,s.jsxs)(o.admonition,{type:"note",children:[(0,s.jsx)(o.p,{children:"The overlay module is used by the OverlayFS filesystem to manage container layers. It allows merging multiple directories into a single virtual filesystem. It is used by runtimes such as Docker and containerd."}),(0,s.jsx)(o.p,{children:"The br_netfilter module enables processing of network bridge traffic through the netfilter subsystem. This is necessary for the correct operation of iptables in Kubernetes."})]})]})}function b(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);