"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[1740],{54481(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>g,frontMatter:()=>d,metadata:()=>c,toc:()=>m});const c=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/payload/configFiles","title":"configFiles","description":"Custom configuration file template","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/crictl/payload/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl/payload","slug":"/tech-docs/kubernetes/components/crictl/payload/configFiles","permalink":"/en/tech-docs/kubernetes/components/crictl/payload/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=n(74848),i=n(28453),s=n(60513),r=n(57390),a=n(44349),l=n(9792),u=n(76331);const d={},p=void 0,h={},m=[];function f(e){return(0,o.jsxs)(u.A,{groupId:"install-type",children:[(0,o.jsxs)(l.A,{value:"Bash",children:[(0,o.jsx)("h4",{children:"Custom configuration file template"}),(0,o.jsx)(r.A,{language:"bash",children:s.A`
      cat <<"EOF" > /etc/crictl.yaml
      runtime-endpoint: unix://${a.M.criEndpoint.value}
      EOF
    `})]}),(0,o.jsxs)(l.A,{value:"Cloud-init",children:[(0,o.jsx)("h4",{children:"Custom configuration file template"}),(0,o.jsx)(r.A,{language:"bash",children:s.A`
      - path: /etc/crictl.yaml
        owner: root:root
        permissions: '0644'
        content: |
          runtime-endpoint: unix://${a.M.criEndpoint.value}
    `})]})]})}function g(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(f,{...e})}):f()}}}]);