"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[9371],{63433(e,t,n){n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/payload/setupSystemdUnit","title":"setupSystemdUnit","description":"Delegate=yes \u0434\u0435\u043b\u0435\u0433\u0438\u0440\u0443\u0435\u0442 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 cgroup-\u043f\u043e\u0434\u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043d\u043e\u043c\u0443 \u0440\u0430\u043d\u0442\u0430\u0439\u043c\u0443 (\u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043b\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b Kubernetes). KillMode=process \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u0443\u0435\u0442, \u0447\u0442\u043e \u043f\u0440\u0438 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0433\u043b\u0430\u0432\u043d\u044b\u0439 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 containerd, \u0430 \u043d\u0435 \u0434\u043e\u0447\u0435\u0440\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b. OOMScoreAdjust=-999 \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u043e\u0442 OOM Killer \u2014 \u0431\u0435\u0437 \u0440\u0430\u043d\u0442\u0430\u0439\u043c\u0430 \u0432\u0441\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b \u043d\u0430 \u0443\u0437\u043b\u0435 \u0441\u0442\u0430\u043d\u0443\u0442 \u043d\u0435\u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u043c\u0438.","source":"@site/docs/tech-docs/kubernetes/components/containerd/payload/setupSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/payload","slug":"/tech-docs/kubernetes/components/containerd/payload/setupSystemdUnit","permalink":"/tech-docs/kubernetes/components/containerd/payload/setupSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var i=n(74848),r=n(28453),c=n(60513),a=n(57390),o=n(9792),l=n(76331);const d={},u=void 0,p={},m=[];function y(e){const t={blockquote:"blockquote",code:"code",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Delegate=yes"})," \u0434\u0435\u043b\u0435\u0433\u0438\u0440\u0443\u0435\u0442 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 cgroup-\u043f\u043e\u0434\u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043d\u043e\u043c\u0443 \u0440\u0430\u043d\u0442\u0430\u0439\u043c\u0443 (\u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043b\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b Kubernetes). ",(0,i.jsx)(t.code,{children:"KillMode=process"})," \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u0443\u0435\u0442, \u0447\u0442\u043e \u043f\u0440\u0438 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0433\u043b\u0430\u0432\u043d\u044b\u0439 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 containerd, \u0430 \u043d\u0435 \u0434\u043e\u0447\u0435\u0440\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b. ",(0,i.jsx)(t.code,{children:"OOMScoreAdjust=-999"})," \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u043e\u0442 OOM Killer \u2014 \u0431\u0435\u0437 \u0440\u0430\u043d\u0442\u0430\u0439\u043c\u0430 \u0432\u0441\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b \u043d\u0430 \u0443\u0437\u043b\u0435 \u0441\u0442\u0430\u043d\u0443\u0442 \u043d\u0435\u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u043c\u0438."]}),"\n"]}),"\n",(0,i.jsxs)(l.A,{groupId:"install-type",children:[(0,i.jsxs)(o.A,{value:"Bash",children:[(0,i.jsx)(a.A,{language:"bash",children:c.A`
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
    `}),(0,i.jsx)(a.A,{language:"bash",children:c.A`
      systemctl enable containerd
      systemctl start containerd
    `})]}),(0,i.jsxs)(o.A,{value:"Cloud-init",children:[(0,i.jsx)(a.A,{language:"yaml",children:c.A`
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
      `}),(0,i.jsx)(a.A,{language:"bash",children:c.A`
      #runcmd:
      - systemctl enable containerd
      - systemctl start containerd
    `})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(y,{...e})}):y(e)}}}]);