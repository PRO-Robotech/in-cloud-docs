"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[316,2056,7662,8625],{46890(e,n,t){t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/lifecycleSettingsComponent","title":"lifecycleSettingsComponent","description":"Component configuration steps","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/containerd/lifecycleSettingsComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/lifecycleSettingsComponent","permalink":"/en/tech-docs/kubernetes/components/containerd/lifecycleSettingsComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=t(74848),o=t(28453),r=(t(7094),t(93306)),c=t(98301);const a={},d=void 0,l={},u=[...c.toc,...r.toc];function p(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Component configuration steps"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Component configuration"}),"\n",(0,s.jsx)(n.li,{children:"Systemd Unit setup for the component"}),"\n",(0,s.jsx)(n.li,{children:"Systemd Unit start"}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{title:"Note",type:"warning",children:[(0,s.jsx)(n.p,{children:"This section depends on the following documents:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/tech-docs/kubernetes/components/containerd/lifecycleDownload",children:"Containerd Install"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/tech-docs/kubernetes/components/runc/lifecycleDownload",children:"Runc Install"}),"."]}),"\n"]})]}),"\n",(0,s.jsx)("h3",{children:"Component configuration"}),"\n",(0,s.jsx)(c.default,{}),"\n",(0,s.jsx)("h3",{children:"Systemd Unit setup for the component"}),"\n",(0,s.jsx)(r.default,{})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},98301(e,n,t){t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>i,toc:()=>g});const i=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/payload/configFiles","title":"configFiles","description":"Creating working directories","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/containerd/payload/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/payload","slug":"/tech-docs/kubernetes/components/containerd/payload/configFiles","permalink":"/en/tech-docs/kubernetes/components/containerd/payload/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=t(74848),o=t(28453),r=t(60513),c=t(57390),a=t(44349),d=t(9792),l=t(76331);const u={},p=void 0,m={},g=[];function h(e){return(0,s.jsxs)(l.A,{groupId:"install-type",children:[(0,s.jsxs)(d.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"Creating working directories"}),(0,s.jsx)(c.A,{language:"bash",children:r.A`
      mkdir -p /etc/containerd/
      mkdir -p /etc/containerd/conf.d
      mkdir -p /etc/containerd/certs.d
    `}),(0,s.jsx)("h4",{children:"Base configuration file"}),(0,s.jsx)(c.A,{language:"bash",children:r.A`
      cat <<"EOF" > /etc/containerd/config.toml
      version = 2
      imports = ["/etc/containerd/conf.d/*.toml"]
      EOF
    `}),(0,s.jsx)("h4",{children:"Custom configuration file template"}),(0,s.jsx)(c.A,{language:"bash",children:r.A`
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
    `})]}),(0,s.jsxs)(d.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"Base configuration file"}),(0,s.jsx)(c.A,{language:"yaml",children:r.A`
      - path: /etc/containerd/config.toml
        owner: root:root
        permissions: '0644'
        content: |
          version = 2
          imports = ["/etc/containerd/conf.d/*.toml"]
    `}),(0,s.jsx)("h4",{children:"Custom configuration file template"}),(0,s.jsx)(c.A,{language:"yaml",children:r.A`
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
    `})]})]})}function f(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h()}},93306(e,n,t){t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>m});const i=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/payload/setupSystemdUnit","title":"setupSystemdUnit","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/containerd/payload/setupSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/payload","slug":"/tech-docs/kubernetes/components/containerd/payload/setupSystemdUnit","permalink":"/en/tech-docs/kubernetes/components/containerd/payload/setupSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=t(74848),o=t(28453),r=t(60513),c=t(57390),a=t(9792),d=t(76331);const l={},u=void 0,p={},m=[];function g(e){return(0,s.jsxs)(d.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"Bash",children:[(0,s.jsx)(c.A,{language:"bash",children:r.A`
      cat <<EOF > /usr/lib/systemd/system/containerd.service
      [Unit]
      Description=containerd container runtime
      Documentation=https://containerd.io
      After=network.target local-fs.target containerd-install.service runc-install.service
      Wants=containerd-install.service runc-install.service

      [Service]
      ExecStartPre=-/sbin/modprobe overlay
      ExecStart=/usr/local/bin/containerd

      Type=notify
      Delegate=yes
      KillMode=process
      Restart=always
      RestartSec=5
      LimitNPROC=infinity
      LimitCORE=infinity
      LimitNOFILE=infinity
      TasksMax=infinity
      OOMScoreAdjust=-999

      [Install]
      WantedBy=multi-user.target
      EOF
    `}),(0,s.jsx)(c.A,{language:"bash",children:r.A`
      systemctl enable containerd
      systemctl start containerd
    `})]}),(0,s.jsxs)(a.A,{value:"Cloud-init",children:[(0,s.jsx)(c.A,{language:"yaml",children:r.A`
        # write_files:
        - path: /usr/lib/systemd/system/containerd.service
          owner: root:root
          permissions: '0644'
          content: |
            [Unit]
            Description=containerd container runtime
            Documentation=https://containerd.io
            After=network.target local-fs.target containerd-install.service runc-install.service
            Wants=containerd-install.service runc-install.service

            [Service]
            ExecStartPre=-/sbin/modprobe overlay
            ExecStart=/usr/local/bin/containerd

            Type=notify
            Delegate=yes
            KillMode=process
            Restart=always
            RestartSec=5
            LimitNPROC=infinity
            LimitCORE=infinity
            LimitNOFILE=infinity
            TasksMax=infinity
            OOMScoreAdjust=-999

            [Install]
            WantedBy=multi-user.target
      `}),(0,s.jsx)(c.A,{language:"bash",children:r.A`
      #runcmd:
      - systemctl enable containerd
      - systemctl start containerd
    `})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(g,{...e})}):g()}},7094(e,n,t){t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/payload/startSystemdUnit","title":"startSystemdUnit","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/containerd/payload/startSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/payload","slug":"/tech-docs/kubernetes/components/containerd/payload/startSystemdUnit","permalink":"/en/tech-docs/kubernetes/components/containerd/payload/startSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=t(74848),o=t(28453),r=t(60513),c=t(57390);const a={},d=void 0,l={},u=[];function p(e){return(0,s.jsx)(c.A,{language:"bash",children:r.A`
  systemctl enable containerd
  systemctl start containerd
`})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p()}}}]);