"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[8625],{93306(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>y,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/payload/setupSystemdUnit","title":"setupSystemdUnit","description":"Delegate=yes delegates cgroup subsystem management to the container runtime (required for proper Kubernetes operation). KillMode=process ensures that when the service is stopped, only the main containerd process is terminated, not the child containers. OOMScoreAdjust=-999 protects the process from OOM Killer \u2014 without the runtime, all containers on the node become unmanageable.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/containerd/payload/setupSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/payload","slug":"/tech-docs/kubernetes/components/containerd/payload/setupSystemdUnit","permalink":"/en/tech-docs/kubernetes/components/containerd/payload/setupSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var i=n(74848),r=n(28453),o=n(60513),a=n(57390),c=n(9792),l=n(76331);const d={},u=void 0,m={},p=[];function h(e){const t={blockquote:"blockquote",code:"code",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Delegate=yes"})," delegates cgroup subsystem management to the container runtime (required for proper Kubernetes operation). ",(0,i.jsx)(t.code,{children:"KillMode=process"})," ensures that when the service is stopped, only the main containerd process is terminated, not the child containers. ",(0,i.jsx)(t.code,{children:"OOMScoreAdjust=-999"})," protects the process from OOM Killer \u2014 without the runtime, all containers on the node become unmanageable."]}),"\n"]}),"\n",(0,i.jsxs)(l.A,{groupId:"install-type",children:[(0,i.jsxs)(c.A,{value:"Bash",children:[(0,i.jsx)(a.A,{language:"bash",children:o.A`
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
    `}),(0,i.jsx)(a.A,{language:"bash",children:o.A`
      systemctl enable containerd
      systemctl start containerd
    `})]}),(0,i.jsxs)(c.A,{value:"Cloud-init",children:[(0,i.jsx)(a.A,{language:"yaml",children:o.A`
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
      `}),(0,i.jsx)(a.A,{language:"bash",children:o.A`
      #runcmd:
      - systemctl enable containerd
      - systemctl start containerd
    `})]})]})]})}function y(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);