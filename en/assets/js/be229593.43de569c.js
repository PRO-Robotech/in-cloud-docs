"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[2102,2630],{28778(e,t,n){n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/dir","title":"dir","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/payload/dir.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/dir","permalink":"/en/tech-docs/kubernetes/components/kubelet/payload/dir","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),i=n(60513),l=n(57390);const o={},u=void 0,c={},d=[];function b(e){return(0,s.jsx)(l.A,{language:"bash",children:i.A`
      mkdir -p /usr/lib/systemd/system/kubelet.service.d
      mkdir -p /var/lib/kubelet/
  `})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},96493(e,t,n){n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>m,default:()=>E,frontMatter:()=>h,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/setupSystemdUnit","title":"setupSystemdUnit","description":"The dropin configuration 10-kubeadm.conf separates parameters into three levels: bootstrap-kubeconfig is used during initial node registration in the cluster (before obtaining a permanent kubelet.conf), kubeadm-flags.env contains flags that kubeadm init / kubeadm join generate dynamically during initialization, and extra-args.env allows specifying additional arguments (e.g., --cloud-provider=external when using Cloud Controller Manager).","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/payload/setupSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/setupSystemdUnit","permalink":"/en/tech-docs/kubernetes/components/kubelet/payload/setupSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),i=n(60513),l=n(57390),o=n(44349),u=n(9792),c=n(76331),d=n(28778),b=n(58700);const h={},m=void 0,k={},p=[...d.toc];function g(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["The dropin configuration ",(0,s.jsx)(t.code,{children:"10-kubeadm.conf"})," separates parameters into three levels: ",(0,s.jsx)(t.code,{children:"bootstrap-kubeconfig"})," is used during initial node registration in the cluster (before obtaining a permanent ",(0,s.jsx)(t.code,{children:"kubelet.conf"}),"), ",(0,s.jsx)(t.code,{children:"kubeadm-flags.env"})," contains flags that ",(0,s.jsx)(t.code,{children:"kubeadm init"})," / ",(0,s.jsx)(t.code,{children:"kubeadm join"})," generate dynamically during initialization, and ",(0,s.jsx)(t.code,{children:"extra-args.env"})," allows specifying additional arguments (e.g., ",(0,s.jsx)(t.code,{children:"--cloud-provider=external"})," when using Cloud Controller Manager)."]}),"\n"]}),"\n",(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsxs)(u.A,{value:"Bash",children:[(0,s.jsx)(d.default,{}),(0,s.jsx)("h4",{children:"Systemd Unit"}),(0,s.jsx)(l.A,{language:"bash",children:i.A`
      cat <<EOF > /usr/lib/systemd/system/kubelet.service
      [Unit]
      Description=kubelet: The Kubernetes Node Agent
      Documentation=https://kubernetes.io/docs/
      Wants=network-online.target containerd.service
      After=network-online.target containerd.service

      [Service]
      ExecStart=${b.m.kubelet.path}
      Restart=always
      StartLimitInterval=0
      RestartSec=10

      [Install]
      WantedBy=multi-user.target
      EOF
    `}),(0,s.jsx)("h4",{children:"Systemd Unit Config"}),(0,s.jsx)(l.A,{language:"bash",children:i.A`
      cat <<EOF > /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
      # Note: This dropin only works with kubeadm and kubelet v1.11+
      [Service]
      Environment="KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=${o.M.kubernetesBaseFolderPath.value}/bootstrap-kubelet.conf --kubeconfig=${o.M.kubernetesBaseFolderPath.value}/kubelet.conf"
      Environment="KUBELET_CONFIG_ARGS=--config=${o.M.kuberneteKubeletFolderPath.value}/config.yaml"
      # This is a file that "kubeadm init" and "kubeadm join" generates at runtime, populating the KUBELET_KUBEADM_ARGS variable dynamically
      EnvironmentFile=-${o.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
      # This is a file that the user can use for overrides of the kubelet args as a last resort. Preferably, the user should use
      # the .NodeRegistration.KubeletExtraArgs object in the configuration files instead. KUBELET_EXTRA_ARGS should be sourced from this file.
      EnvironmentFile=-/etc/default/kubelet/extra-args.env
      ExecStart=
      ExecStart=/usr/local/bin/kubelet \\$KUBELET_KUBECONFIG_ARGS \\$KUBELET_CONFIG_ARGS \\$KUBELET_KUBEADM_ARGS \\$KUBELET_EXTRA_ARGS
      EOF
    `}),(0,s.jsxs)(c.A,{groupId:"ccm",children:[(0,s.jsxs)(u.A,{value:"Default",children:[(0,s.jsx)("h4",{children:"Systemd Unit ENV"}),(0,s.jsx)(l.A,{language:"bash",children:i.A`
          cat <<EOF > /etc/default/kubelet/extra-args.env
          KUBELET_EXTRA_ARGS=""
          EOF
        `})]}),(0,s.jsxs)(u.A,{value:"Cloud Controller Manager",children:[(0,s.jsx)("h4",{children:"Systemd Unit ENV"}),(0,s.jsx)(l.A,{language:"bash",children:i.A`
          cat <<EOF > /etc/default/kubelet/extra-args.env
          KUBELET_EXTRA_ARGS="--cloud-provider=external"
          EOF
        `})]})]}),(0,s.jsx)("h3",{children:"Add Systemd Unit to autostart"}),(0,s.jsx)(l.A,{language:"bash",children:i.A`
      systemctl enable kubelet
    `})]}),(0,s.jsxs)(u.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"Systemd Unit ENV"}),(0,s.jsx)(l.A,{language:"yaml",children:i.A`
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
          ExecStart=${b.m.kubelet.path}
          Restart=always
          StartLimitInterval=0
          RestartSec=10

          [Install]
          WantedBy=multi-user.target
    `}),(0,s.jsx)("h4",{children:"Download instructions"}),(0,s.jsx)(l.A,{language:"yaml",children:i.A`
      # write_files:
      - path: /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
        owner: root:root
        permissions: '0644'
        content: |
          # Note: This dropin only works with kubeadm and kubelet v1.11+
          [Service]
          Environment="KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=${o.M.kubernetesBaseFolderPath.value}/bootstrap-kubelet.conf --kubeconfig=${o.M.kubernetesBaseFolderPath.value}/kubelet.conf"
          Environment="KUBELET_CONFIG_ARGS=--config=${o.M.kuberneteKubeletFolderPath.value}/config.yaml"
          # This is a file that "kubeadm init" and "kubeadm join" generates at runtime, populating the KUBELET_KUBEADM_ARGS variable dynamically
          EnvironmentFile=-${o.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
          # This is a file that the user can use for overrides of the kubelet args as a last resort. Preferably, the user should use
          # the .NodeRegistration.KubeletExtraArgs object in the configuration files instead. KUBELET_EXTRA_ARGS should be sourced from this file.
          EnvironmentFile=-/etc/default/kubelet/extra-args.env
          ExecStart=
          ExecStart=/usr/local/bin/kubelet $KUBELET_KUBECONFIG_ARGS $KUBELET_CONFIG_ARGS $KUBELET_KUBEADM_ARGS $KUBELET_EXTRA_ARGS
    `}),(0,s.jsx)("h4",{children:"Systemd Unit Download"}),(0,s.jsx)(l.A,{language:"yaml",children:i.A`
      # write_files:
      - path: /etc/default/kubelet/extra-args.env
        owner: root:root
        permissions: '0644'
        content: |
          KUBELET_EXTRA_ARGS="--cloud-provider=external"
    `}),(0,s.jsx)("h4",{children:"Systemd Unit Custom ENV"}),(0,s.jsxs)(t.admonition,{title:"Warning",type:"info",children:[(0,s.jsxs)(t.p,{children:["This configuration block is applicable ",(0,s.jsx)(t.strong,{children:"only"})," when installing Kubernetes manually (using the ",(0,s.jsx)(t.em,{children:'"Kubernetes the Hard Way"'})," method). When using the ",(0,s.jsx)(t.strong,{children:"kubeadm"})," utility, the configuration file will be created automatically based on the specification provided in the ",(0,s.jsx)(t.code,{children:"kubeadm-config"})," file."]}),(0,s.jsx)(l.A,{language:"bash",children:i.A`
  # write_files:
  - path: ${o.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
    owner: root:root
    permissions: '0644'
    content: |
      KUBELET_KUBEADM_ARGS="--container-runtime-endpoint=unix://${o.M.criEndpoint.value} --pod-infra-container-image=${o.M.baseDockerRegistry.value}/${o.M.pausedImage.value} --config=${o.M.kuberneteKubeletFolderPath.value}/config-custom.yaml"
`})]}),(0,s.jsx)("h3",{children:"Add Systemd Unit to autostart"}),(0,s.jsx)(l.A,{language:"bash",children:i.A`
      # runcmd:
      - systemctl enable kubelet
    `})]})]})]})}function E(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},58700(e,t,n){n.d(t,{m:()=>a});const a={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${COMPONENT_VERSION}/runc.amd64",templateUrlBinCheckSum:"${COMPONENT_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${COMPONENT_VERSION}/etcd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}}}]);