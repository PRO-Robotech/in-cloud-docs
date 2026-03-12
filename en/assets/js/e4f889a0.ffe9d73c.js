"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[316],{98301(n,e,i){i.r(e),i.d(e,{assets:()=>p,contentTitle:()=>g,default:()=>f,frontMatter:()=>u,metadata:()=>t,toc:()=>m});const t=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/payload/configFiles","title":"configFiles","description":"Creating working directories","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/containerd/payload/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/payload","slug":"/tech-docs/kubernetes/components/containerd/payload/configFiles","permalink":"/en/tech-docs/kubernetes/components/containerd/payload/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=i(74848),r=i(28453),c=i(60513),s=i(57390),a=i(44349),d=i(9792),l=i(76331);const u={},g=void 0,p={},m=[];function h(n){return(0,o.jsxs)(l.A,{groupId:"install-type",children:[(0,o.jsxs)(d.A,{value:"Bash",children:[(0,o.jsx)("h4",{children:"Creating working directories"}),(0,o.jsx)(s.A,{language:"bash",children:c.A`
      mkdir -p /etc/containerd/
      mkdir -p /etc/containerd/conf.d
      mkdir -p /etc/containerd/certs.d
    `}),(0,o.jsx)("h4",{children:"Base configuration file"}),(0,o.jsx)(s.A,{language:"bash",children:c.A`
      cat <<"EOF" > /etc/containerd/config.toml
      version = 2
      imports = ["/etc/containerd/conf.d/*.toml"]
      EOF
    `}),(0,o.jsx)("h4",{children:"Custom configuration file template"}),(0,o.jsx)(s.A,{language:"bash",children:c.A`
      cat <<"EOF" > /etc/containerd/conf.d/in-cloud.toml
      version = 2
      [plugins]
        [plugins."io.containerd.grpc.v1.cri"]
          sandbox_image = "${a.M.baseDockerRegistry.value}/${a.M.pausedImage.value}"
        [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]
          runtime_type = "io.containerd.runc.v2"
        [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]
          SystemdCgroup = true
        [plugins."io.containerd.grpc.v1.cri".registry]
          config_path = "/etc/containerd/certs.d/"
      EOF
    `})]}),(0,o.jsxs)(d.A,{value:"Cloud-init",children:[(0,o.jsx)("h4",{children:"Base configuration file"}),(0,o.jsx)(s.A,{language:"yaml",children:c.A`
      - path: /etc/containerd/config.toml
        owner: root:root
        permissions: '0644'
        content: |
          version = 2
          imports = ["/etc/containerd/conf.d/*.toml"]
    `}),(0,o.jsx)("h4",{children:"Custom configuration file template"}),(0,o.jsx)(s.A,{language:"yaml",children:c.A`
      - path: /etc/containerd/conf.d/in-cloud.toml
        owner: root:root
        permissions: '0644'
        content: |
          version = 2
          [plugins]
            [plugins."io.containerd.grpc.v1.cri"]
              sandbox_image = "${a.M.baseDockerRegistry.value}/${a.M.pausedImage.value}"
            [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]
              runtime_type = "io.containerd.runc.v2"
            [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]
              SystemdCgroup = true
            [plugins."io.containerd.grpc.v1.cri".registry]
              config_path = "/etc/containerd/certs.d/"
    `})]})]})}function f(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(h,{...n})}):h()}}}]);