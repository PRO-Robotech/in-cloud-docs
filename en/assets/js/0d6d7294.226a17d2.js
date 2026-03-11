"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[344,2102,2630,7029,8072],{37872(e,t,n){n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/lifecycleSettings","title":"Kubelet","description":"","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/lifecycleSettings.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/lifecycleSettings","permalink":"/en/tech-docs/kubernetes/components/kubelet/lifecycleSettings","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),l=n(82796);const o={},c="Kubelet",i={},u=[...l.toc];function d(e){const t={h1:"h1",header:"header",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"kubelet",children:"Kubelet"})}),"\n",(0,s.jsx)(l.default,{})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},82796(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/lifecycleSettingsComponent","title":"lifecycleSettingsComponent","description":"Component configuration steps","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/lifecycleSettingsComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/lifecycleSettingsComponent","permalink":"/en/tech-docs/kubernetes/components/kubelet/lifecycleSettingsComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),l=n(96493),o=n(30221);const c={},i=void 0,u={},d=[...l.toc,...o.toc];function h(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Component configuration steps"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Component Systemd Unit configuration"}),"\n",(0,s.jsx)(t.li,{children:"Add Systemd Unit to autostart"}),"\n",(0,s.jsx)(t.li,{children:"Custom component configuration"}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,s.jsx)(t.p,{children:"This section depends on the following documents:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/containerd/lifecycleDownload",children:"Containerd Install"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/runc/lifecycleDownload",children:"Runc Install"}),"."]}),"\n"]})]}),"\n",(0,s.jsx)("h3",{children:"Component Systemd Unit configuration"}),"\n",(0,s.jsx)(l.default,{}),"\n",(0,s.jsx)("h3",{children:"Custom component configuration"}),"\n",(0,s.jsxs)(n,{className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"Kubelet config"}),(0,s.jsx)(o.default,{})]})]})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},30221(e,t,n){n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>k,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/configFiles","title":"configFiles","description":"Custom kubelet configuration file","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/payload/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/configFiles","permalink":"/en/tech-docs/kubernetes/components/kubelet/payload/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),l=n(60513),o=n(57390),c=n(44349),i=n(26225),u=n(9792),d=n(76331);const h={},k=void 0,b={},m=[];function p(e){return(0,s.jsxs)(d.A,{groupId:"install-type",children:[(0,s.jsxs)(u.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"Custom kubelet configuration file"}),(0,s.jsx)(o.A,{language:"bash",children:l.A`
      cat <<EOF > ${c.M.kuberneteKubeletFolderPath.value}/config-custom.yaml
      ---
      ${i.h.data.value}
      EOF
    `})]}),(0,s.jsxs)(u.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"Custom kubelet configuration file"}),(0,s.jsx)(o.A,{language:"bash",children:l.A`
      - path: ${c.M.kuberneteKubeletFolderPath.value}/config-custom.yaml
        owner: root:root
        permissions: '0644'
        content: |
          ---
          ${i.h.data.value}
    `})]})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},28778(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/dir","title":"dir","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/payload/dir.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/dir","permalink":"/en/tech-docs/kubernetes/components/kubelet/payload/dir","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),l=n(60513),o=n(57390);const c={},i=void 0,u={},d=[];function h(e){return(0,s.jsx)(o.A,{language:"bash",children:l.A`
      mkdir -p /usr/lib/systemd/system/kubelet.service.d
      mkdir -p /var/lib/kubelet/
  `})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h()}},96493(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>b,default:()=>v,frontMatter:()=>k,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/setupSystemdUnit","title":"setupSystemdUnit","description":"The dropin configuration 10-kubeadm.conf separates parameters into three levels: bootstrap-kubeconfig is used during initial node registration in the cluster (before obtaining a permanent kubelet.conf), kubeadm-flags.env contains flags that kubeadm init / kubeadm join generate dynamically during initialization, and extra-args.env allows specifying additional arguments (e.g., --cloud-provider=external when using Cloud Controller Manager).","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/payload/setupSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/setupSystemdUnit","permalink":"/en/tech-docs/kubernetes/components/kubelet/payload/setupSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),l=n(60513),o=n(57390),c=n(44349),i=n(9792),u=n(76331),d=n(28778),h=n(58700);const k={},b=void 0,m={},p=[...d.toc];function f(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["The dropin configuration ",(0,s.jsx)(t.code,{children:"10-kubeadm.conf"})," separates parameters into three levels: ",(0,s.jsx)(t.code,{children:"bootstrap-kubeconfig"})," is used during initial node registration in the cluster (before obtaining a permanent ",(0,s.jsx)(t.code,{children:"kubelet.conf"}),"), ",(0,s.jsx)(t.code,{children:"kubeadm-flags.env"})," contains flags that ",(0,s.jsx)(t.code,{children:"kubeadm init"})," / ",(0,s.jsx)(t.code,{children:"kubeadm join"})," generate dynamically during initialization, and ",(0,s.jsx)(t.code,{children:"extra-args.env"})," allows specifying additional arguments (e.g., ",(0,s.jsx)(t.code,{children:"--cloud-provider=external"})," when using Cloud Controller Manager)."]}),"\n"]}),"\n",(0,s.jsxs)(u.A,{groupId:"install-type",children:[(0,s.jsxs)(i.A,{value:"Bash",children:[(0,s.jsx)(d.default,{}),(0,s.jsx)("h4",{children:"Systemd Unit"}),(0,s.jsx)(o.A,{language:"bash",children:l.A`
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
    `}),(0,s.jsx)("h4",{children:"Systemd Unit Config"}),(0,s.jsx)(o.A,{language:"bash",children:l.A`
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
    `}),(0,s.jsxs)(u.A,{groupId:"ccm",children:[(0,s.jsxs)(i.A,{value:"Default",children:[(0,s.jsx)("h4",{children:"Systemd Unit ENV"}),(0,s.jsx)(o.A,{language:"bash",children:l.A`
          cat <<EOF > /etc/default/kubelet/extra-args.env
          KUBELET_EXTRA_ARGS=""
          EOF
        `})]}),(0,s.jsxs)(i.A,{value:"Cloud Controller Manager",children:[(0,s.jsx)("h4",{children:"Systemd Unit ENV"}),(0,s.jsx)(o.A,{language:"bash",children:l.A`
          cat <<EOF > /etc/default/kubelet/extra-args.env
          KUBELET_EXTRA_ARGS="--cloud-provider=external"
          EOF
        `})]})]}),(0,s.jsx)("h3",{children:"Add Systemd Unit to autostart"}),(0,s.jsx)(o.A,{language:"bash",children:l.A`
      systemctl enable kubelet
    `})]}),(0,s.jsxs)(i.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"Systemd Unit ENV"}),(0,s.jsx)(o.A,{language:"yaml",children:l.A`
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
    `}),(0,s.jsx)("h4",{children:"Download instructions"}),(0,s.jsx)(o.A,{language:"yaml",children:l.A`
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
    `}),(0,s.jsx)("h4",{children:"Systemd Unit Download"}),(0,s.jsx)(o.A,{language:"yaml",children:l.A`
      # write_files:
      - path: /etc/default/kubelet/extra-args.env
        owner: root:root
        permissions: '0644'
        content: |
          KUBELET_EXTRA_ARGS="--cloud-provider=external"
    `}),(0,s.jsx)("h4",{children:"Systemd Unit Custom ENV"}),(0,s.jsxs)(t.admonition,{title:"Warning",type:"info",children:[(0,s.jsxs)(t.p,{children:["This configuration block is applicable ",(0,s.jsx)(t.strong,{children:"only"})," when installing Kubernetes manually (using the ",(0,s.jsx)(t.em,{children:'"Kubernetes the Hard Way"'})," method). When using the ",(0,s.jsx)(t.strong,{children:"kubeadm"})," utility, the configuration file will be created automatically based on the specification provided in the ",(0,s.jsx)(t.code,{children:"kubeadm-config"})," file."]}),(0,s.jsx)(o.A,{language:"bash",children:l.A`
  # write_files:
  - path: ${c.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
    owner: root:root
    permissions: '0644'
    content: |
      KUBELET_KUBEADM_ARGS="--container-runtime-endpoint=unix://${c.M.criEndpoint.value} --pod-infra-container-image=${c.M.baseDockerRegistry.value}/${c.M.pausedImage.value} --config=${c.M.kuberneteKubeletFolderPath.value}/config-custom.yaml"
`})]}),(0,s.jsx)("h3",{children:"Add Systemd Unit to autostart"}),(0,s.jsx)(o.A,{language:"bash",children:l.A`
      # runcmd:
      - systemctl enable kubelet
    `})]})]})]})}function v(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},65742(e,t,n){n.d(t,{$:()=>s});var r=n(44349);const s={etcdCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},kubernetesControllerManagerServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-server.conf`,keySize:"2048",cname:"system:kube-controller-manager-server"},etcdClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/sa.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"},kubernetesSchedulerServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/scheduler-server.conf`,keySize:"2048",cname:"system:kube-scheduler-server"}}},58700(e,t,n){n.d(t,{m:()=>r});const r={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${COMPONENT_VERSION}/runc.amd64",templateUrlBinCheckSum:"${COMPONENT_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${COMPONENT_VERSION}/etcd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}},26225(e,t,n){n.d(t,{h:()=>o});var r=n(60513),s=n(65742),a=n(44349),l=n(285);const o={data:{value:r.A`
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
      containerRuntimeEndpoint: "${a.M.criEndpoint.value}"
      cpuManagerReconcilePeriod: 0s
      evictionPressureTransitionPeriod: 5s
      fileCheckFrequency: 0s
      healthzBindAddress: 127.0.0.1
      healthzPort: ${l.h.kubeletHealthz.portNumber}
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
      staticPodPath: ${a.M.kubernetesBaseFolderPath.value}/manifests
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
    `}}},285(e,t,n){n.d(t,{h:()=>r});const r={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}}}]);