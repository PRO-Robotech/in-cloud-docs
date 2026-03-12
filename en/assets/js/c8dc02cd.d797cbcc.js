"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[288,316,344,354,435,1068,1157,1740,1915,2056,2102,2480,2630,3114,3798,5978,7662,7918,7952,8072,8515,8532,8625,9028,9033],{26026(e,t,n){n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>y,frontMatter:()=>k,metadata:()=>o,toc:()=>v});const o=JSON.parse('{"id":"tech-docs/kubernetes/components/all-setup-dp","title":"5.3.1.3. Software Configuration","description":"This section describes the setup and configuration of components required for Kubernetes worker nodes.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/allSetupComponentDP.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/all-setup-dp","permalink":"/en/tech-docs/kubernetes/components/all-setup-dp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"all-setup-dp","title":"5.3.1.3. Software Configuration"},"sidebar":"techDocs","previous":{"title":"5.3.1.2. \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u041f\u041e","permalink":"/en/tech-docs/kubernetes/components/all-install-dp"},"next":{"title":"5.3.2. \u0410\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f","permalink":"/en/tech-docs/kubernetes/certificates/authentication-dp"}}');var s=n(74848),r=n(28453),a=n(11952),i=n(46890),c=n(66440),l=n(82796),u=n(74773),d=n(40111),h=n(37033),m=n(26338),p=n(9792),b=n(76331);const k={id:"all-setup-dp",title:"5.3.1.3. Software Configuration"},f=void 0,g={},v=[...i.toc,...a.toc,...l.toc,...c.toc,...d.toc,...u.toc,...m.toc,...h.toc];function x(e){const t={blockquote:"blockquote",p:"p",...(0,r.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This section describes the setup and configuration of components required for Kubernetes worker nodes."}),"\n"]}),"\n",(0,s.jsxs)(b.A,{groupId:"component",children:[(0,s.jsx)(p.A,{value:"containerd",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Configuration of containerd"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(i.default,{}),(0,s.jsx)(a.default,{})]})}),(0,s.jsx)(p.A,{value:"kubelet",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Configuration of kubelet"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(l.default,{}),(0,s.jsx)(c.default,{})]})}),(0,s.jsx)(p.A,{value:"crictl",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Configuration of crictl"}),(0,s.jsx)("p",{className:"obligatory-note-green",children:"\u25cf Optional"})]})}),(0,s.jsx)("h4",{children:"Component configuration"}),(0,s.jsx)(d.default,{}),(0,s.jsx)(u.default,{})]})}),(0,s.jsx)(p.A,{value:"kubeadm",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Configuration of kubeadm"}),(0,s.jsx)("p",{className:"obligatory-note-green",children:"\u25cf Optional"})]})}),(0,s.jsx)(m.default,{}),(0,s.jsx)(h.default,{})]})})]})]})}function y(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},11952(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/checkComponent","title":"checkComponent","description":"Configuration verification","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/containerd/checkComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/checkComponent","permalink":"/en/tech-docs/kubernetes/components/containerd/checkComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),a=n(56772),i=n(6301);const c={},l=void 0,u={},d=[...i.toc,...a.toc];function h(e){const{Details:t}={...(0,r.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Configuration verification"}),"\n",(0,s.jsxs)(t,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"Configuration verification"}),(0,s.jsx)(i.default,{}),(0,s.jsx)(a.default,{})]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},6301(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/checks/statusConfigFiles","title":"statusConfigFiles","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/containerd/checks/statusConfigFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/checks","slug":"/tech-docs/kubernetes/components/containerd/checks/statusConfigFiles","permalink":"/en/tech-docs/kubernetes/components/containerd/checks/statusConfigFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),a=n(60513),i=n(57390);const c={},l=void 0,u={},d=[];function h(e){const t={admonition:"admonition",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{language:"bash",children:a.A`
  tree /etc/containerd/
`}),"\n",(0,s.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:a.A`
  /etc/containerd/
  ├── certs.d
  ├── conf.d
  │   └── cloud.toml
  └── config.toml
`})})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},56772(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/checks/statusSystemdUnit","title":"statusSystemdUnit","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/containerd/checks/statusSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/checks","slug":"/tech-docs/kubernetes/components/containerd/checks/statusSystemdUnit","permalink":"/en/tech-docs/kubernetes/components/containerd/checks/statusSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),a=n(60513),i=n(57390);const c={},l=void 0,u={},d=[];function h(e){const t={admonition:"admonition",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{language:"bash",children:a.A`
  systemctl status containerd
`}),"\n",(0,s.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:a.A`
  ● containerd.service - containerd container runtime
        Loaded: loaded (/usr/lib/systemd/system/containerd.service; enabled; preset: enabled)
        Active: active (running) since Tue 2024-12-31 17:26:21 UTC; 2min 30s ago
          Docs: https://containerd.io
      Main PID: 839 (containerd)
        Tasks: 7 (limit: 2274)
        Memory: 62.0M (peak: 62.5M)
          CPU: 375ms
        CGroup: /system.slice/containerd.service
                └─839 /usr/local/bin/containerd

  ***** level=info msg="Start subscribing containerd event"
  ***** level=info msg="Start recovering state"
  ***** level=info msg="Start event monitor"
  ***** level=info msg="Start snapshots syncer"
  ***** level=info msg="Start cni network conf syncer for default"
  ***** level=info msg="Start streaming server"
  ***** level=info msg=serving... address=/run/containerd/containerd.sock.ttrpc
  ***** level=info msg=serving... address=/run/containerd/containerd.sock
  ***** level=info msg="containerd successfully booted in 0.065807s"
  ***** Started containerd.service - containerd container runtime.

`})})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},46890(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/lifecycleSettingsComponent","title":"lifecycleSettingsComponent","description":"Component configuration steps","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/containerd/lifecycleSettingsComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/lifecycleSettingsComponent","permalink":"/en/tech-docs/kubernetes/components/containerd/lifecycleSettingsComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),a=(n(7094),n(93306)),i=n(98301);const c={},l=void 0,u={},d=[...i.toc,...a.toc];function h(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Component configuration steps"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Component configuration"}),"\n",(0,s.jsx)(t.li,{children:"Systemd Unit setup for the component"}),"\n",(0,s.jsx)(t.li,{children:"Systemd Unit start"}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,s.jsx)(t.p,{children:"This section depends on the following documents:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/containerd/lifecycleDownload",children:"Containerd Install"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/runc/lifecycleDownload",children:"Runc Install"}),"."]}),"\n"]})]}),"\n",(0,s.jsx)("h3",{children:"Component configuration"}),"\n",(0,s.jsx)(i.default,{}),"\n",(0,s.jsx)("h3",{children:"Systemd Unit setup for the component"}),"\n",(0,s.jsx)(a.default,{})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},98301(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>k,frontMatter:()=>d,metadata:()=>o,toc:()=>p});const o=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/payload/configFiles","title":"configFiles","description":"Creating working directories","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/containerd/payload/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/payload","slug":"/tech-docs/kubernetes/components/containerd/payload/configFiles","permalink":"/en/tech-docs/kubernetes/components/containerd/payload/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),a=n(60513),i=n(57390),c=n(44349),l=n(9792),u=n(76331);const d={},h=void 0,m={},p=[];function b(e){return(0,s.jsxs)(u.A,{groupId:"install-type",children:[(0,s.jsxs)(l.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"Creating working directories"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      mkdir -p /etc/containerd/
      mkdir -p /etc/containerd/conf.d
      mkdir -p /etc/containerd/certs.d
    `}),(0,s.jsx)("h4",{children:"Base configuration file"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      cat <<"EOF" > /etc/containerd/config.toml
      version = 2
      imports = ["/etc/containerd/conf.d/*.toml"]
      EOF
    `}),(0,s.jsx)("h4",{children:"Custom configuration file template"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      cat <<"EOF" > /etc/containerd/conf.d/in-cloud.toml
      version = 2
      [plugins]
        [plugins."io.containerd.grpc.v1.cri"]
          sandbox_image = "${c.M.baseDockerRegistry.value}/${c.M.pausedImage.value}"
        [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]
          runtime_type = "io.containerd.runc.v2"
        [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]
          SystemdCgroup = true
        [plugins."io.containerd.grpc.v1.cri".registry]
          config_path = "/etc/containerd/certs.d/"
      EOF
    `})]}),(0,s.jsxs)(l.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"Base configuration file"}),(0,s.jsx)(i.A,{language:"yaml",children:a.A`
      - path: /etc/containerd/config.toml
        owner: root:root
        permissions: '0644'
        content: |
          version = 2
          imports = ["/etc/containerd/conf.d/*.toml"]
    `}),(0,s.jsx)("h4",{children:"Custom configuration file template"}),(0,s.jsx)(i.A,{language:"yaml",children:a.A`
      - path: /etc/containerd/conf.d/in-cloud.toml
        owner: root:root
        permissions: '0644'
        content: |
          version = 2
          [plugins]
            [plugins."io.containerd.grpc.v1.cri"]
              sandbox_image = "${c.M.baseDockerRegistry.value}/${c.M.pausedImage.value}"
            [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]
              runtime_type = "io.containerd.runc.v2"
            [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]
              SystemdCgroup = true
            [plugins."io.containerd.grpc.v1.cri".registry]
              config_path = "/etc/containerd/certs.d/"
    `})]})]})}function k(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},93306(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>o,toc:()=>m});const o=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/payload/setupSystemdUnit","title":"setupSystemdUnit","description":"Delegate=yes delegates cgroup subsystem management to the container runtime (required for proper Kubernetes operation). KillMode=process ensures that when the service is stopped, only the main containerd process is terminated, not the child containers. OOMScoreAdjust=-999 protects the process from OOM Killer \u2014 without the runtime, all containers on the node become unmanageable.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/containerd/payload/setupSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/payload","slug":"/tech-docs/kubernetes/components/containerd/payload/setupSystemdUnit","permalink":"/en/tech-docs/kubernetes/components/containerd/payload/setupSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),a=n(60513),i=n(57390),c=n(9792),l=n(76331);const u={},d=void 0,h={},m=[];function p(e){const t={blockquote:"blockquote",code:"code",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Delegate=yes"})," delegates cgroup subsystem management to the container runtime (required for proper Kubernetes operation). ",(0,s.jsx)(t.code,{children:"KillMode=process"})," ensures that when the service is stopped, only the main containerd process is terminated, not the child containers. ",(0,s.jsx)(t.code,{children:"OOMScoreAdjust=-999"})," protects the process from OOM Killer \u2014 without the runtime, all containers on the node become unmanageable."]}),"\n"]}),"\n",(0,s.jsxs)(l.A,{groupId:"install-type",children:[(0,s.jsxs)(c.A,{value:"Bash",children:[(0,s.jsx)(i.A,{language:"bash",children:a.A`
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
    `}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      systemctl enable containerd
      systemctl start containerd
    `})]}),(0,s.jsxs)(c.A,{value:"Cloud-init",children:[(0,s.jsx)(i.A,{language:"yaml",children:a.A`
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
      `}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      #runcmd:
      - systemctl enable containerd
      - systemctl start containerd
    `})]})]})]})}function b(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},7094(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/payload/startSystemdUnit","title":"startSystemdUnit","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/containerd/payload/startSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/payload","slug":"/tech-docs/kubernetes/components/containerd/payload/startSystemdUnit","permalink":"/en/tech-docs/kubernetes/components/containerd/payload/startSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),a=n(60513),i=n(57390);const c={},l=void 0,u={},d=[];function h(e){return(0,s.jsx)(i.A,{language:"bash",children:a.A`
  systemctl enable containerd
  systemctl start containerd
`})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h()}},74773(e,t,n){n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/checkComponent","title":"checkComponent","description":"Configuration verification","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/crictl/checkComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl","slug":"/tech-docs/kubernetes/components/crictl/checkComponent","permalink":"/en/tech-docs/kubernetes/components/crictl/checkComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),a=n(92204);const i={},c=void 0,l={},u=[...a.toc];function d(e){const{Details:t}={...(0,r.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Configuration verification"}),"\n",(0,s.jsxs)(t,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"Configuration verification"}),(0,s.jsx)(a.default,{})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},92204(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/checks/statusConfigFiles","title":"statusConfigFiles","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/crictl/checks/statusConfigFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl/checks","slug":"/tech-docs/kubernetes/components/crictl/checks/statusConfigFiles","permalink":"/en/tech-docs/kubernetes/components/crictl/checks/statusConfigFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),a=n(60513),i=n(57390);const c={},l=void 0,u={},d=[];function h(e){const t={admonition:"admonition",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{language:"bash",children:a.A`
  ls -la /etc/crictl.yaml
`}),"\n",(0,s.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:a.A`
  -rw-r--r-- 1 root root 61 Feb 18 15:18 /etc/crictl.yaml
`})}),"\n",(0,s.jsx)(i.A,{language:"bash",children:a.A`
  crictl info \|
    jq '.status.conditions[] \|
    select(.type=="RuntimeReady") \|
    .status'

`}),"\n",(0,s.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:a.A`
  true
`})})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},40111(e,t,n){n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/lifecycleSettingsComponent","title":"lifecycleSettingsComponent","description":"Component configuration steps","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/crictl/lifecycleSettingsComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl","slug":"/tech-docs/kubernetes/components/crictl/lifecycleSettingsComponent","permalink":"/en/tech-docs/kubernetes/components/crictl/lifecycleSettingsComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),a=n(54481);const i={},c=void 0,l={},u=[...a.toc];function d(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Component configuration steps"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Component configuration"}),"\n",(0,s.jsx)(t.li,{children:"Systemd Unit setup for the component"}),"\n",(0,s.jsx)(t.li,{children:"Systemd Unit start"}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,s.jsx)(t.p,{children:"This section depends on the following documents:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/containerd/lifecycleDownload",children:"Containerd Install"}),"."]}),"\n"]})]}),"\n",(0,s.jsx)("h3",{children:"Component configuration"}),"\n",(0,s.jsx)(a.default,{})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},54481(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>k,frontMatter:()=>d,metadata:()=>o,toc:()=>p});const o=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/payload/configFiles","title":"configFiles","description":"Custom configuration file template","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/crictl/payload/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl/payload","slug":"/tech-docs/kubernetes/components/crictl/payload/configFiles","permalink":"/en/tech-docs/kubernetes/components/crictl/payload/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),a=n(60513),i=n(57390),c=n(44349),l=n(9792),u=n(76331);const d={},h=void 0,m={},p=[];function b(e){return(0,s.jsxs)(u.A,{groupId:"install-type",children:[(0,s.jsxs)(l.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"Custom configuration file template"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      cat <<"EOF" > /etc/crictl.yaml
      runtime-endpoint: unix://${c.M.criEndpoint.value}
      EOF
    `})]}),(0,s.jsxs)(l.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"Custom configuration file template"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      - path: /etc/crictl.yaml
        owner: root:root
        permissions: '0644'
        content: |
          runtime-endpoint: unix://${c.M.criEndpoint.value}
    `})]})]})}function k(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},37033(e,t,n){n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/checkComponent","title":"checkComponent","description":"Configuration verification","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubeadm/checkComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/checkComponent","permalink":"/en/tech-docs/kubernetes/components/kubeadm/checkComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),a=n(57017);const i={},c=void 0,l={},u=[...a.toc];function d(e){const{Details:t}={...(0,r.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Configuration verification"}),"\n",(0,s.jsxs)(t,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"Configuration verification"}),(0,s.jsx)(a.default,{})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},57017(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>h});const o=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/checks/statusConfigFiles","title":"statusConfigFiles","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubeadm/checks/statusConfigFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/checks","slug":"/tech-docs/kubernetes/components/kubeadm/checks/statusConfigFiles","permalink":"/en/tech-docs/kubernetes/components/kubeadm/checks/statusConfigFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),a=n(60513),i=n(57390),c=n(44349);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{language:"bash",children:a.A`
  ls -al ${c.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:a.A`
  -rw-r--r-- 1 root root 6463 Feb 18 15:20 ${c.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},89878(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>o,toc:()=>m});const o=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/configs/joinConfigDP","title":"joinConfigDP","description":"Kubeadm configuration for joining a worker node to the cluster","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubeadm/configs/joinConfigDP.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/configs","slug":"/tech-docs/kubernetes/components/kubeadm/configs/joinConfigDP","permalink":"/en/tech-docs/kubernetes/components/kubeadm/configs/joinConfigDP","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),a=n(57390),i=n(56223),c=n(60513),l=n(44349);const u={},d=void 0,h={},m=[];function p(e){const{Details:t}={...(0,r.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Kubeadm configuration for joining a worker node to the cluster"}),(0,s.jsx)("h4",{children:"Environment variables for configuration file template"}),(0,s.jsx)(a.A,{language:"bash",children:c.A`
      export CLUSTER_API_ENDPOINT=api.${l.M.clusterName.value}.${l.M.kubernetesBaseDomain.value}
      export BOOTSTRAP_TOKEN=${l.M.bootstrapToken.value}
    `}),(0,s.jsx)("h4",{children:"Kubeadm configuration file for joining a worker to the cluster"}),(0,s.jsx)(a.A,{children:c.A`cat <<EOF > ${l.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
    ---
    apiVersion: kubeadm.k8s.io/v1beta3
    discovery:
      bootstrapToken:
        apiServerEndpoint: $\{CLUSTER_API_ENDPOINT}:${i.L.securePort.value}
        unsafeSkipCAVerification: true
        token: "$\{BOOTSTRAP_TOKEN}"
    kind: JoinConfiguration
    EOF
  `})]})}function b(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},26338(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/lifecycleSettingsComponentDP","title":"lifecycleSettingsComponentDP","description":"Component setup steps","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubeadm/lifecycleSettingsComponentDP.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/lifecycleSettingsComponentDP","permalink":"/en/tech-docs/kubernetes/components/kubeadm/lifecycleSettingsComponentDP","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),a=n(39484),i=n(26329);const c={},l=void 0,u={},d=[...i.toc,...a.toc];function h(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Component setup steps"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Creating working directories."}),"\n",(0,s.jsx)(t.li,{children:"Component configuration"}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,s.jsx)(t.p,{children:"This section depends on the following documents:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/kubelet/lifecycleDownload",children:"Kubelet Install"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/containerd/lifecycleDownload",children:"Containerd Install"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/runc/lifecycleDownload",children:"Runc Install"}),"."]}),"\n"]})]}),"\n",(0,s.jsx)("h3",{children:"Creating working directories"}),"\n",(0,s.jsx)(i.default,{}),"\n",(0,s.jsx)("h3",{children:"Component configuration"}),"\n",(0,s.jsx)(a.default,{})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},39484(e,t,n){n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/payload/configFilesDP","title":"configFilesDP","description":"The kubeadm configuration for a worker node describes JoinConfiguration parameters (bootstrap token, apiServerEndpoint). It is used when joining a worker to an existing cluster.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubeadm/payload/configFilesDP.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/payload","slug":"/tech-docs/kubernetes/components/kubeadm/payload/configFilesDP","permalink":"/en/tech-docs/kubernetes/components/kubeadm/payload/configFilesDP","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),a=n(89878);const i={},c=void 0,l={},u=[...a.toc];function d(e){const t={blockquote:"blockquote",code:"code",p:"p",...(0,r.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"kubeadm"})," configuration for a worker node describes ",(0,s.jsx)(t.code,{children:"JoinConfiguration"})," parameters (bootstrap token, apiServerEndpoint). It is used when joining a worker to an existing cluster."]}),"\n"]}),"\n",(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"Kubeadm Configuration"}),(0,s.jsx)(a.default,{})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},26329(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/payload/dir","title":"dir","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubeadm/payload/dir.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/payload","slug":"/tech-docs/kubernetes/components/kubeadm/payload/dir","permalink":"/en/tech-docs/kubernetes/components/kubeadm/payload/dir","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),a=n(60513),i=n(57390);const c={},l=void 0,u={},d=[];function h(e){return(0,s.jsx)(i.A,{language:"bash",children:a.A`
  mkdir -p /var/run/kubeadm/
`})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h()}},66440(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/checkComponent","title":"checkComponent","description":"Configuration check","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/checkComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/checkComponent","permalink":"/en/tech-docs/kubernetes/components/kubelet/checkComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),a=n(39225),i=n(74989);const c={},l=void 0,u={},d=[...i.toc,...a.toc];function h(e){const{Details:t}={...(0,r.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Configuration check"}),"\n",(0,s.jsxs)(t,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"Configuration check"}),(0,s.jsx)(i.default,{}),(0,s.jsx)(a.default,{})]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},74989(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>h});const o=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/checks/statusConfigFiles","title":"statusConfigFiles","description":"Note that when creating a cluster with _Kubeadm_ without running kubeadm init or kubeadm join, the Kubelet configuration file (/var/lib/kubelet/config.yaml) will not be created.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/checks/statusConfigFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/checks","slug":"/tech-docs/kubernetes/components/kubelet/checks/statusConfigFiles","permalink":"/en/tech-docs/kubernetes/components/kubelet/checks/statusConfigFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),a=n(60513),i=n(57390),c=n(44349);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",code:"code",em:"em",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,s.jsxs)(t.p,{children:["Note that when creating a cluster with ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.em,{children:"Kubeadm"})})," without running ",(0,s.jsx)(t.code,{children:"kubeadm init"})," or ",(0,s.jsx)(t.code,{children:"kubeadm join"}),", the Kubelet configuration file (",(0,s.jsx)(t.code,{children:"/var/lib/kubelet/config.yaml"}),") will not be created."]})}),"\n",(0,s.jsx)(i.A,{language:"bash",children:a.A`
      ls -la ${c.M.kuberneteKubeletFolderPath.value}/config-custom.yaml
  `}),"\n",(0,s.jsx)(i.A,{language:"bash",children:a.A`
      ls -la /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
  `}),"\n",(0,s.jsxs)(t.admonition,{title:"Command output",type:"note",children:[(0,s.jsx)(i.A,{language:"bash",children:a.A`
      -rw-r--r-- 1 root root 1721 Feb 19 18:57 /var/lib/kubelet/config.yaml
  `}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      -rw-r--r-- 1 root root 903 Feb 19 22:10 /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
  `})]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},39225(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitEnabled","title":"statusSystemdUnitEnabled","description":"Note that when creating a cluster with Kubeadm without running kubeadm init or kubeadm join, the Systemd Unit will be added to autostart but will be disabled.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitEnabled.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/checks","slug":"/tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitEnabled","permalink":"/en/tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitEnabled","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),a=n(60513),i=n(57390);const c={},l=void 0,u={},d=[];function h(e){const t={admonition:"admonition",code:"code",em:"em",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,s.jsxs)(t.p,{children:["Note that when creating a cluster with ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Kubeadm"})})," without running ",(0,s.jsx)(t.code,{children:"kubeadm init"})," or ",(0,s.jsx)(t.code,{children:"kubeadm join"}),", the Systemd Unit will be added to autostart but will be disabled."]})}),"\n",(0,s.jsx)(i.A,{language:"bash",children:a.A`
      systemctl status kubelet
  `}),"\n",(0,s.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:a.A`
      ○ kubelet.service - kubelet: The Kubernetes Node Agent
          Loaded: loaded (/usr/lib/systemd/system/kubelet.service; enabled; preset: enabled)
          Drop-In: /usr/lib/systemd/system/kubelet.service.d
                  └─10-kubeadm.conf
          Active: inactive (dead)
          Docs: https://kubernetes.io/docs/
  `})})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},82796(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/lifecycleSettingsComponent","title":"lifecycleSettingsComponent","description":"Component configuration steps","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/lifecycleSettingsComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/lifecycleSettingsComponent","permalink":"/en/tech-docs/kubernetes/components/kubelet/lifecycleSettingsComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),a=n(96493),i=n(30221);const c={},l=void 0,u={},d=[...a.toc,...i.toc];function h(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Component configuration steps"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Component Systemd Unit configuration"}),"\n",(0,s.jsx)(t.li,{children:"Add Systemd Unit to autostart"}),"\n",(0,s.jsx)(t.li,{children:"Custom component configuration"}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,s.jsx)(t.p,{children:"This section depends on the following documents:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/containerd/lifecycleDownload",children:"Containerd Install"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/runc/lifecycleDownload",children:"Runc Install"}),"."]}),"\n"]})]}),"\n",(0,s.jsx)("h3",{children:"Component Systemd Unit configuration"}),"\n",(0,s.jsx)(a.default,{}),"\n",(0,s.jsx)("h3",{children:"Custom component configuration"}),"\n",(0,s.jsxs)(n,{className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"Kubelet config"}),(0,s.jsx)(i.default,{})]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},30221(e,t,n){n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>f,frontMatter:()=>h,metadata:()=>o,toc:()=>b});const o=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/configFiles","title":"configFiles","description":"Custom kubelet configuration file","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/payload/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/configFiles","permalink":"/en/tech-docs/kubernetes/components/kubelet/payload/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),a=n(60513),i=n(57390),c=n(44349),l=n(26225),u=n(9792),d=n(76331);const h={},m=void 0,p={},b=[];function k(e){return(0,s.jsxs)(d.A,{groupId:"install-type",children:[(0,s.jsxs)(u.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"Custom kubelet configuration file"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      cat <<EOF > ${c.M.kuberneteKubeletFolderPath.value}/config-custom.yaml
      ---
      ${l.h.data.value}
      EOF
    `})]}),(0,s.jsxs)(u.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"Custom kubelet configuration file"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      - path: ${c.M.kuberneteKubeletFolderPath.value}/config-custom.yaml
        owner: root:root
        permissions: '0644'
        content: |
          ---
          ${l.h.data.value}
    `})]})]})}function f(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k()}},28778(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/dir","title":"dir","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/payload/dir.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/dir","permalink":"/en/tech-docs/kubernetes/components/kubelet/payload/dir","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),a=n(60513),i=n(57390);const c={},l=void 0,u={},d=[];function h(e){return(0,s.jsx)(i.A,{language:"bash",children:a.A`
      mkdir -p /usr/lib/systemd/system/kubelet.service.d
      mkdir -p /var/lib/kubelet/
  `})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h()}},96493(e,t,n){n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>p,default:()=>g,frontMatter:()=>m,metadata:()=>o,toc:()=>k});const o=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/setupSystemdUnit","title":"setupSystemdUnit","description":"The dropin configuration 10-kubeadm.conf separates parameters into three levels: bootstrap-kubeconfig is used during initial node registration in the cluster (before obtaining a permanent kubelet.conf), kubeadm-flags.env contains flags that kubeadm init / kubeadm join generate dynamically during initialization, and extra-args.env allows specifying additional arguments (e.g., --cloud-provider=external when using Cloud Controller Manager).","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/payload/setupSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/setupSystemdUnit","permalink":"/en/tech-docs/kubernetes/components/kubelet/payload/setupSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),a=n(60513),i=n(57390),c=n(44349),l=n(9792),u=n(76331),d=n(28778),h=n(58700);const m={},p=void 0,b={},k=[...d.toc];function f(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["The dropin configuration ",(0,s.jsx)(t.code,{children:"10-kubeadm.conf"})," separates parameters into three levels: ",(0,s.jsx)(t.code,{children:"bootstrap-kubeconfig"})," is used during initial node registration in the cluster (before obtaining a permanent ",(0,s.jsx)(t.code,{children:"kubelet.conf"}),"), ",(0,s.jsx)(t.code,{children:"kubeadm-flags.env"})," contains flags that ",(0,s.jsx)(t.code,{children:"kubeadm init"})," / ",(0,s.jsx)(t.code,{children:"kubeadm join"})," generate dynamically during initialization, and ",(0,s.jsx)(t.code,{children:"extra-args.env"})," allows specifying additional arguments (e.g., ",(0,s.jsx)(t.code,{children:"--cloud-provider=external"})," when using Cloud Controller Manager)."]}),"\n"]}),"\n",(0,s.jsxs)(u.A,{groupId:"install-type",children:[(0,s.jsxs)(l.A,{value:"Bash",children:[(0,s.jsx)(d.default,{}),(0,s.jsx)("h4",{children:"Systemd Unit"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      cat <<EOF > /usr/lib/systemd/system/kubelet.service
      [Unit]
      Description=kubelet: The Kubernetes Node Agent
      Documentation=https://kubernetes.io/docs/
      Wants=network-online.target containerd.service
      After=network-online.target containerd.service

      [Service]
      ExecStart=${h.m.kubelet.path}
      Restart=always
      StartLimitInterval=0
      RestartSec=10

      [Install]
      WantedBy=multi-user.target
      EOF
    `}),(0,s.jsx)("h4",{children:"Systemd Unit Config"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      cat <<EOF > /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
      # Note: This dropin only works with kubeadm and kubelet v1.11+
      [Service]
      Environment="KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=${c.M.kubernetesBaseFolderPath.value}/bootstrap-kubelet.conf --kubeconfig=${c.M.kubernetesBaseFolderPath.value}/kubelet.conf"
      Environment="KUBELET_CONFIG_ARGS=--config=${c.M.kuberneteKubeletFolderPath.value}/config.yaml"
      # This is a file that "kubeadm init" and "kubeadm join" generates at runtime, populating the KUBELET_KUBEADM_ARGS variable dynamically
      EnvironmentFile=-${c.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
      # This is a file that the user can use for overrides of the kubelet args as a last resort. Preferably, the user should use
      # the .NodeRegistration.KubeletExtraArgs object in the configuration files instead. KUBELET_EXTRA_ARGS should be sourced from this file.
      EnvironmentFile=-/etc/default/kubelet/extra-args.env
      ExecStart=
      ExecStart=/usr/local/bin/kubelet \\$KUBELET_KUBECONFIG_ARGS \\$KUBELET_CONFIG_ARGS \\$KUBELET_KUBEADM_ARGS \\$KUBELET_EXTRA_ARGS
      EOF
    `}),(0,s.jsxs)(u.A,{groupId:"ccm",children:[(0,s.jsxs)(l.A,{value:"Default",children:[(0,s.jsx)("h4",{children:"Systemd Unit ENV"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
          cat <<EOF > /etc/default/kubelet/extra-args.env
          KUBELET_EXTRA_ARGS=""
          EOF
        `})]}),(0,s.jsxs)(l.A,{value:"Cloud Controller Manager",children:[(0,s.jsx)("h4",{children:"Systemd Unit ENV"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
          cat <<EOF > /etc/default/kubelet/extra-args.env
          KUBELET_EXTRA_ARGS="--cloud-provider=external"
          EOF
        `})]})]}),(0,s.jsx)("h3",{children:"Add Systemd Unit to autostart"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      systemctl enable kubelet
    `})]}),(0,s.jsxs)(l.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"Systemd Unit ENV"}),(0,s.jsx)(i.A,{language:"yaml",children:a.A`
      # write_files:
      - path: /usr/lib/systemd/system/kubelet.service
        owner: root:root
        permissions: '0644'
        content: |
          [Unit]
          Description=kubelet: The Kubernetes Node Agent
          Documentation=https://kubernetes.io/docs/
          Wants=network-online.target containerd.service
          After=network-online.target containerd.service

          [Service]
          ExecStart=${h.m.kubelet.path}
          Restart=always
          StartLimitInterval=0
          RestartSec=10

          [Install]
          WantedBy=multi-user.target
    `}),(0,s.jsx)("h4",{children:"Download instructions"}),(0,s.jsx)(i.A,{language:"yaml",children:a.A`
      # write_files:
      - path: /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
        owner: root:root
        permissions: '0644'
        content: |
          # Note: This dropin only works with kubeadm and kubelet v1.11+
          [Service]
          Environment="KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=${c.M.kubernetesBaseFolderPath.value}/bootstrap-kubelet.conf --kubeconfig=${c.M.kubernetesBaseFolderPath.value}/kubelet.conf"
          Environment="KUBELET_CONFIG_ARGS=--config=${c.M.kuberneteKubeletFolderPath.value}/config.yaml"
          # This is a file that "kubeadm init" and "kubeadm join" generates at runtime, populating the KUBELET_KUBEADM_ARGS variable dynamically
          EnvironmentFile=-${c.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
          # This is a file that the user can use for overrides of the kubelet args as a last resort. Preferably, the user should use
          # the .NodeRegistration.KubeletExtraArgs object in the configuration files instead. KUBELET_EXTRA_ARGS should be sourced from this file.
          EnvironmentFile=-/etc/default/kubelet/extra-args.env
          ExecStart=
          ExecStart=/usr/local/bin/kubelet $KUBELET_KUBECONFIG_ARGS $KUBELET_CONFIG_ARGS $KUBELET_KUBEADM_ARGS $KUBELET_EXTRA_ARGS
    `}),(0,s.jsx)("h4",{children:"Systemd Unit Download"}),(0,s.jsx)(i.A,{language:"yaml",children:a.A`
      # write_files:
      - path: /etc/default/kubelet/extra-args.env
        owner: root:root
        permissions: '0644'
        content: |
          KUBELET_EXTRA_ARGS="--cloud-provider=external"
    `}),(0,s.jsx)("h4",{children:"Systemd Unit Custom ENV"}),(0,s.jsxs)(t.admonition,{title:"Warning",type:"info",children:[(0,s.jsxs)(t.p,{children:["This configuration block is applicable ",(0,s.jsx)(t.strong,{children:"only"})," when installing Kubernetes manually (using the ",(0,s.jsx)(t.em,{children:'"Kubernetes the Hard Way"'})," method). When using the ",(0,s.jsx)(t.strong,{children:"kubeadm"})," utility, the configuration file will be created automatically based on the specification provided in the ",(0,s.jsx)(t.code,{children:"kubeadm-config"})," file."]}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
  # write_files:
  - path: ${c.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
    owner: root:root
    permissions: '0644'
    content: |
      KUBELET_KUBEADM_ARGS="--container-runtime-endpoint=unix://${c.M.criEndpoint.value} --pod-infra-container-image=${c.M.baseDockerRegistry.value}/${c.M.pausedImage.value} --config=${c.M.kuberneteKubeletFolderPath.value}/config-custom.yaml"
`})]}),(0,s.jsx)("h3",{children:"Add Systemd Unit to autostart"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      # runcmd:
      - systemctl enable kubelet
    `})]})]})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},65742(e,t,n){n.d(t,{$:()=>s});var o=n(44349);const s={etcdCA:{keyPath:`${o.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${o.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${o.M.kubernetesBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${o.M.kubernetesBaseFolderPath.value}/pki/ca.key`,crtPath:`${o.M.kubernetesBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${o.M.kubernetesBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${o.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${o.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${o.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${o.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${o.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${o.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${o.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},kubernetesControllerManagerServer:{keyPath:`${o.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.key`,crtPath:`${o.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.crt`,csrPath:`${o.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-server.csr`,crtConf:`${o.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-server.conf`,keySize:"2048",cname:"system:kube-controller-manager-server"},etcdClient:{keyPath:`${o.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${o.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${o.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${o.M.kubernetesBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${o.M.kubernetesBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${o.M.kubernetesBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${o.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${o.M.kubernetesBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${o.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${o.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${o.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${o.M.kubernetesBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${o.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${o.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${o.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${o.M.kubernetesBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${o.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${o.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${o.M.kubernetesBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${o.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${o.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${o.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${o.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${o.M.kubernetesBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${o.M.kubernetesBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${o.M.kubernetesBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${o.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${o.M.kubernetesBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${o.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${o.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${o.M.kubernetesBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${o.M.kubernetesBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${o.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${o.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${o.M.kubernetesBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${o.M.kubernetesBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${o.M.kubernetesBaseFolderPath.value}/pki/sa.key`,crtPath:`${o.M.kubernetesBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${o.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${o.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${o.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${o.M.kubernetesBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${o.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${o.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${o.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${o.M.kubernetesBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${o.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${o.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${o.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${o.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${o.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${o.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${o.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${o.M.kubernetesBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"},kubernetesSchedulerServer:{keyPath:`${o.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.key`,crtPath:`${o.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.crt`,csrPath:`${o.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-server.csr`,crtConf:`${o.M.kubernetesBaseFolderPath.value}/openssl/scheduler-server.conf`,keySize:"2048",cname:"system:kube-scheduler-server"}}},58700(e,t,n){n.d(t,{m:()=>o});const o={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${COMPONENT_VERSION}/runc.amd64",templateUrlBinCheckSum:"${COMPONENT_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${COMPONENT_VERSION}/etcd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}},56223(e,t,n){n.d(t,{L:()=>a});var o=n(65742),s=n(285),r=n(44349);const a={etcdCafile:{value:`${o.$.etcdCA.crtPath}`},etcdCertfile:{value:`${o.$.kubernetesEtcdClient.crtPath}`},etcdKeyfile:{value:`${o.$.kubernetesEtcdClient.keyPath}`},certDir:{value:"/var/run/kubernetes"},kubeletClientCertificate:{value:`${o.$.kubernetesKubeletClient.crtPath}`},kubeletClientKey:{value:`${o.$.kubernetesKubeletClient.keyPath}`},clientCAFile:{value:`${o.$.kubernetesCA.crtPath}`},proxyClientCertFile:{value:`${o.$.kubernetesFrontProxyClient.crtPath}`},proxyClientKeyFile:{value:`${o.$.kubernetesFrontProxyClient.keyPath}`},tlsCertFile:{value:`${o.$.kubernetesServer.crtPath}`},tlsPrivateKeyFile:{value:`${o.$.kubernetesServer.keyPath}`},clientCaFile:{value:`${o.$.kubernetesCA.crtPath}`},serviceAccountKeyFile:{value:`${o.$.kubernetesSA.crtPath}`},requestheaderClientCaFile:{value:`${o.$.frontProxyCA.crtPath}`},serviceAccountSigningKeyFile:{value:`${o.$.kubernetesSA.keyPath}`},aggregatorRejectForwardingRedirect:{value:"true"},allowPrivileged:{value:"true"},anonymousAuth:{value:"true"},auditLogBatchThrottleEnable:{value:"false"},auditLogCompress:{value:"false"},auditLogTruncateEnabled:{value:"false"},auditWebhookBatchThrottleEnable:{value:"true"},auditWebhookTruncateEnabled:{value:"false"},contentionProfiling:{value:"false"},enableAggregatorRouting:{value:"true"},enableBootstrapTokenAuth:{value:"true"},enableGarbageCollector:{value:"true"},enableLogsHandler:{value:"true"},enablePriorityAndFairness:{value:"true"},encryptionProviderConfigAutomaticReload:{value:"false"},help:{value:"false"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},version:{value:"false"},watchCache:{value:"true"},logTextSplitStream:{value:"false"},shutdownSendRetryAfter:{value:"false"},logJsonSplitStream:{value:"false"},serviceAccountExtendTokenExpiration:{value:"true"},serviceAccountLookup:{value:"true"},apiserverCount:{value:"1"},auditLogBatchBufferSize:{value:"10000"},auditLogBatchMaxSize:{value:"1"},auditLogBatchThrottleBurst:{value:"0"},auditLogBatchThrottleQps:{value:"0"},auditLogMaxage:{value:"30"},auditLogMaxbackup:{value:"10"},auditLogMaxsize:{value:"1000"},auditLogTruncateMaxBatchSize:{value:"10485760"},auditLogTruncateMaxEventSize:{value:"102400"},auditWebhookBatchBufferSize:{value:"10000"},auditWebhookBatchMaxSize:{value:"400"},auditWebhookBatchThrottleBurst:{value:"15"},auditWebhookBatchThrottleQps:{value:"10"},auditWebhookTruncateMaxBatchSize:{value:"10485760"},auditWebhookTruncateMaxEventSize:{value:"102400"},defaultNotReadyTolerationSeconds:{value:"300"},defaultUnreachableTolerationSeconds:{value:"300"},defaultWatchCacheSize:{value:"100"},deleteCollectionWorkers:{value:"1"},kubernetesServiceNodePort:{value:"0"},leaseReuseDurationSeconds:{value:"60"},maxMutatingRequestsInflight:{value:"200"},maxRequestsInflight:{value:"400"},minRequestTimeout:{value:"1800"},goawayChance:{value:"0"},http2MaxStreamsPerConnection:{value:"0"},v:{value:"2"},logJsonInfoBufferSize:{value:"0"},logTextInfoBufferSize:{value:"0"},maxConnectionBytesPerSec:{value:"0"},kubeletPort:{value:`${s.h.kubeletServer.portNumber}`},securePort:{value:`${s.h.kubeAPIServer.portNumber}`},kubeletReadOnlyPort:{value:`${s.h.kubeletReadOnlyPort.portNumber}`},serviceNodePortRange:{value:"30000-32767"},etcdServers:{value:`https://127.0.0.1:${s.h.etcdServer.portNumber}`},serviceAccountIssuer:{value:`https://kubernetes.default.svc.${r.M.kubernetesClusterDomain.value}`},serviceClusterIpRange:{value:`${r.M.kubernetesServiceCIDR.value}`},auditWebhookInitialBackoff:{value:"10s"},auditWebhookBatchMaxWait:{value:"30s"},serviceAccountMaxTokenExpiration:{value:"0s"},shutdownWatchTerminationGracePeriod:{value:"0s"},shutdownDelayDuration:{value:"0s"},requestTimeout:{value:"1m0s"},eventTtl:{value:"1h0m0s"},livezGracePeriod:{value:"0s"},logFlushFrequency:{value:"5s"},kubeletTimeout:{value:"5s"},etcdCompactionInterval:{value:"5m0s"},etcdCountMetricPollPeriod:{value:"1m0s"},etcdDbMetricPollInterval:{value:"30s"},etcdHealthcheckTimeout:{value:"2s"},etcdReadycheckTimeout:{value:"2s"},authenticationTokenWebhookCacheTtl:{value:"2m0s"},authorizationWebhookCacheAuthorizedTtl:{value:"5m0s"},authorizationWebhookCacheUnauthorizedTtl:{value:"30s"},auditWebhookBatchInitialBackoff:{value:"10s"},auditLogBatchMaxWait:{value:"0s"},bindAddress:{value:"0.0.0.0"},cloudProviderGceL7lbSrcCidrs:{value:"130.211.0.0/22,35.191.0.0/16"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},apiAudiences:{value:"konnectivity-server"},loggingFormat:{value:"text"},auditLogFormat:{value:"json"},auditLogMode:{value:"batch"},auditWebhookMode:{value:"batch"},auditLogVersion:{value:"audit.k8s.io/v1"},auditWebhookVersion:{value:"audit.k8s.io/v1"},authenticationTokenWebhookVersion:{value:"v1beta1"},authorizationMode:{value:"Node,RBAC"},authorizationWebhookVersion:{value:"v1beta1"},cloudProvider:{value:"external"},enableAdmissionPlugins:{value:"NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,PodSecurity"},endpointReconcilerType:{value:"lease"},storageMediaType:{value:"application/vnd.kubernetes.protobuf"},etcdPrefix:{value:"/registry"},featureGates:{value:"RotateKubeletServerCertificate=true"},kubeletPreferredAddressTypes:{value:"InternalIP,ExternalIP,Hostname"},oidcSigningAlgs:{value:"RS256"},oidcUsernameClaim:{value:"sub"},requestheaderAllowedNames:{value:"front-proxy-client"},requestheaderExtraHeadersPrefix:{value:"X-Remote-Extra-"},requestheaderGroupHeaders:{value:"X-Remote-Group"},requestheaderUsernameHeaders:{value:"X-Remote-User"},runtimeConfig:{value:"api/all=true"},storageBackend:{value:"etcd3"},auditPolicyFile:{value:`${r.M.kubernetesAPIAuditPolicyPath.value}`},auditLogPath:{value:`${r.M.kubernetesAPIAuditLogPath.value}`},advertiseAddress:{value:""},admissionControl:{value:""},admissionControlConfigFile:{value:""},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},auditWebhookConfigFile:{value:""},authenticationConfig:{value:""},authenticationTokenWebhookConfigFile:{value:""},authorizationConfig:{value:""},authorizationPolicyFile:{value:""},authorizationWebhookConfigFile:{value:""},cloudConfig:{value:""},corsAllowedOrigins:{value:""},debugSocketPath:{value:""},disableAdmissionPlugins:{value:""},disabledMetrics:{value:""},egressSelectorConfigFile:{value:""},encryptionProviderConfig:{value:""},etcdServersOverrides:{value:""},externalHostname:{value:""},kubeletCertificateAuthority:{value:""},oidcCaFile:{value:""},oidcClientId:{value:""},oidcGroupsClaim:{value:""},oidcGroupsPrefix:{value:""},oidcIssuerUrl:{value:""},oidcRequiredClaim:{value:""},oidcUsernamePrefix:{value:""},peerAdvertiseIp:{value:""},peerAdvertisePort:{value:""},peerCaFile:{value:""},serviceAccountJwksUri:{value:""},showHiddenMetricsForVersion:{value:""},strictTransportSecurityDirectives:{value:""},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsSniCertKey:{value:""},tokenAuthFile:{value:""},tracingConfigFile:{value:""},vmodule:{value:""},watchCacheSizes:{value:""}}},26225(e,t,n){n.d(t,{h:()=>i});var o=n(60513),s=n(65742),r=n(44349),a=n(285);const i={data:{value:o.A`
      apiVersion: kubelet.config.k8s.io/v1beta1
      authentication:
        anonymous:
            enabled: false
        webhook:
            cacheTTL: 0s
            enabled: true
        x509:
          clientCAFile: "${s.$.kubernetesCA.crtPath}"
      authorization:
        mode: Webhook
        webhook:
          cacheAuthorizedTTL: 0s
          cacheUnauthorizedTTL: 0s
      cgroupDriver: systemd
      containerLogMaxSize: "50Mi"
      containerRuntimeEndpoint: "${r.M.criEndpoint.value}"
      cpuManagerReconcilePeriod: 0s
      evictionPressureTransitionPeriod: 5s
      fileCheckFrequency: 0s
      healthzBindAddress: 127.0.0.1
      healthzPort: ${a.h.kubeletHealthz.portNumber}
      httpCheckFrequency: 0s
      imageGCHighThresholdPercent: 55
      imageGCLowThresholdPercent: 50
      imageMaximumGCAge: 0s
      imageMinimumGCAge: 0s
      kind: KubeletConfiguration
      logging:
        flushFrequency: 0
        options:
          json:
            infoBufferSize: "0"
          text:
            infoBufferSize: "0"
        verbosity: 0
      kubeAPIQPS: 50
      kubeAPIBurst: 100
      maxPods: 250
      memorySwap: {}
      nodeStatusReportFrequency: 1s
      nodeStatusUpdateFrequency: 1s
      podPidsLimit: 4096
      registerNode: true
      resolvConf: /run/systemd/resolve/resolv.conf
      rotateCertificates: true
      runtimeRequestTimeout: 0s
      serializeImagePulls: false
      serverTLSBootstrap: true
      shutdownGracePeriod: 15s
      shutdownGracePeriodCriticalPods: 5s
      staticPodPath: ${r.M.kubernetesBaseFolderPath.value}/manifests
      streamingConnectionIdleTimeout: 0s
      syncFrequency: 0s
      tlsMinVersion: "VersionTLS12"
      volumeStatsAggPeriod: 0s
      featureGates:
        RotateKubeletServerCertificate: true
        APIPriorityAndFairness:         true
      tlsCipherSuites:
        - "TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256"
        - "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256"
        - "TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384"
        - "TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384"
        - "TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256"
        - "TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256"
    `}}},285(e,t,n){n.d(t,{h:()=>o});const o={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}}}]);