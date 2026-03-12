"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[1175,2038,6703,7897],{61008(e,t,n){n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>m,default:()=>f,frontMatter:()=>b,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/all-kubelet-start-dp","title":"5.3.2. Kubelet Start","description":"This section describes connecting a worker node to a Kubernetes cluster and starting Kubelet.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/allServiceStartComponentDP.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/all-kubelet-start-dp","permalink":"/en/tech-docs/kubernetes/components/kubelet/all-kubelet-start-dp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"all-kubelet-start-dp","title":"5.3.2. Kubelet Start"},"sidebar":"techDocs","previous":{"title":"5.3.1.3. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u041f\u041e","permalink":"/en/tech-docs/kubernetes/components/all-setup-dp"}}');var o=n(74848),i=n(28453),r=n(25567),a=n(4687),c=n(9792),l=n(76331),u=n(60513),d=n(57390),h=n(44349);const b={id:"all-kubelet-start-dp",title:"5.3.2. Kubelet Start"},m=void 0,k={},p=[...r.toc,...a.toc];function g(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["This section describes connecting a worker node to a Kubernetes cluster and starting Kubelet.\nFor manual installation (Hard Way), you need to create a bootstrap kubeconfig with an authentication token,\na base kubelet configuration file, and start the systemd service.\nWhen using kubeadm, simply run the ",(0,o.jsx)(t.code,{children:"kubeadm join"})," command."]}),"\n"]}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,o.jsx)("p",{style:{marginBottom:0},children:"Start/Configure kubelet"}),(0,o.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,o.jsxs)(l.A,{groupId:"install-type",children:[(0,o.jsxs)(c.A,{value:"HardWay",children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["This configuration file is required to start ",(0,o.jsx)(t.code,{children:"Kubelet"}),"."]}),"\n"]}),(0,o.jsxs)(n,{className:"custom-gray-block",children:[(0,o.jsx)("summary",{children:"Kubelet default config"}),(0,o.jsx)(r.default,{})]}),(0,o.jsx)("h4",{children:"Bootstrap kubeconfig"}),(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"To authenticate the kubelet on a worker node, a bootstrap kubeconfig with a token is required.\nAfter starting, the kubelet will automatically perform TLS Bootstrap and obtain a client certificate."}),"\n"]}),(0,o.jsx)(d.A,{language:"bash",children:u.A`
        export BOOTSTRAP_TOKEN=${h.M.bootstrapToken.value}
      `}),(0,o.jsx)(d.A,{language:"bash",children:u.A`
        cat <<EOF > ${h.M.kubernetesBaseFolderPath.value}/bootstrap-kubelet.conf
        apiVersion: v1
        clusters:
        - cluster:
            certificate-authority-data: $(base64 -w 0 ${h.M.kubernetesBaseFolderPath.value}/pki/ca.crt)
            server: https://api.${h.M.clusterName.value}.${h.M.kubernetesBaseDomain.value}:6443
          name: ${h.M.clusterName.value}
        contexts:
        - context:
            cluster: ${h.M.clusterName.value}
            user: tls-bootstrap-token-user
          name: tls-bootstrap-token-user@kubernetes
        current-context: tls-bootstrap-token-user@kubernetes
        kind: Config
        preferences: {}
        users:
        - name: tls-bootstrap-token-user
          user:
            token: $\{BOOTSTRAP_TOKEN}
        EOF
      `}),(0,o.jsx)(a.default,{})]}),(0,o.jsxs)(c.A,{value:"Kubeadm",children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"This command connects a worker node to the Kubernetes cluster,\nincluding starting kubelet, TLS Bootstrap, and node registration."}),"\n"]}),(0,o.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,o.jsx)(t.p,{children:"This section depends on the following documents:"}),(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/tech-docs/kubernetes/components/all-setup-dp",children:"Software Config (DP)"}),"."]}),"\n"]})]}),(0,o.jsx)(d.A,{language:"bash",children:u.A`
        kubeadm join \\
          --config=${h.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
      `}),(0,o.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,o.jsx)(d.A,{language:"bash",children:u.A`
  [preflight] Running pre-flight checks
  [preflight] Reading configuration from the cluster...
  [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
  [kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
  [kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"
  [kubelet-start] Starting the kubelet
  [kubelet-check] Waiting for a healthy kubelet at http://127.0.0.1:10248/healthz. This can take up to 4m0s
  [kubelet-check] The kubelet is healthy after 1.001250916s
  [kubelet-start] Waiting for the kubelet to perform the TLS Bootstrap

  This node has joined the cluster:
  * Certificate signing request was sent to apiserver and approval was received.
  * The Kubelet was informed of the new secure connection details.

  Run 'kubectl get nodes' on the control-plane to see this node join the cluster.
`})})]})]})]})]})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},73397(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>b,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitRunning","title":"statusSystemdUnitRunning","description":"Note that when creating a cluster with Kubeadm without running kubeadm init or kubeadm join, the Systemd Unit will be added to autostart but will be disabled.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitRunning.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/checks","slug":"/tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitRunning","permalink":"/en/tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitRunning","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=n(74848),i=n(28453),r=n(60513),a=n(57390);const c={},l=void 0,u={},d=[];function h(e){const t={admonition:"admonition",code:"code",em:"em",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,o.jsxs)(t.p,{children:["Note that when creating a cluster with ",(0,o.jsx)(t.em,{children:(0,o.jsx)(t.strong,{children:"Kubeadm"})})," without running ",(0,o.jsx)(t.code,{children:"kubeadm init"})," or ",(0,o.jsx)(t.code,{children:"kubeadm join"}),", the Systemd Unit will be added to autostart but will be disabled."]})}),"\n",(0,o.jsx)(a.A,{language:"bash",children:r.A`
      systemctl status kubelet
  `}),"\n",(0,o.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,o.jsx)(a.A,{language:"bash",children:r.A`
      ● kubelet.service - kubelet: The Kubernetes Node Agent
              Loaded: loaded (/usr/lib/systemd/system/kubelet.service; enabled; preset: enabled)
          Drop-In: /usr/lib/systemd/system/kubelet.service.d
                      └─10-kubeadm.conf
              Active: active (running) since Sat 2025-02-22 10:33:54 UTC; 17min ago
              Docs: https://kubernetes.io/docs/
          Main PID: 13779 (kubelet)
              Tasks: 14 (limit: 7069)
              Memory: 34.0M (peak: 35.3M)
              CPU: 27.131s
              CGroup: /system.slice/kubelet.service
                      └─13779 /usr/local/bin/kubelet --bootstrap-kubeconfig=/etc/kubernetes/bootstrap-kubelet.conf --kubeconfig=/etc/kubernetes/kubelet.conf --config=/var/lib/kubelet/config.yaml
  `})})]})}function b(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},25567(e,t,n){n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>p,frontMatter:()=>d,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/configFilesDefault","title":"configFilesDefault","description":"Basic kubelet configuration file","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/payload/configFilesDefault.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/configFilesDefault","permalink":"/en/tech-docs/kubernetes/components/kubelet/payload/configFilesDefault","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=n(74848),i=n(28453),r=n(60513),a=n(57390),c=n(44349),l=n(9792),u=n(76331);const d={},h=void 0,b={},m=[];function k(e){return(0,o.jsxs)(u.A,{groupId:"install-type",children:[(0,o.jsxs)(l.A,{value:"Bash",children:[(0,o.jsx)("h4",{children:"Basic kubelet configuration file"}),(0,o.jsx)(a.A,{language:"bash",children:r.A`
      cat <<EOF > ${c.M.kuberneteKubeletFolderPath.value}/config.yaml
      ---
      apiVersion: kubelet.config.k8s.io/v1beta1
      authentication:
        anonymous:
          enabled: false
        webhook:
          cacheTTL: 0s
          enabled: true
        x509:
          clientCAFile: /etc/kubernetes/pki/ca.crt
      authorization:
        mode: Webhook
        webhook:
          cacheAuthorizedTTL: 0s
          cacheUnauthorizedTTL: 0s
      cgroupDriver: systemd
      clusterDNS:
      - 29.64.0.10
      clusterDomain: cluster.local
      containerRuntimeEndpoint: ""
      cpuManagerReconcilePeriod: 0s
      evictionPressureTransitionPeriod: 0s
      fileCheckFrequency: 0s
      healthzBindAddress: 127.0.0.1
      healthzPort: 10248
      httpCheckFrequency: 0s
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
      memorySwap: {}
      nodeStatusReportFrequency: 0s
      nodeStatusUpdateFrequency: 0s
      resolvConf: /run/systemd/resolve/resolv.conf
      rotateCertificates: true
      runtimeRequestTimeout: 0s
      shutdownGracePeriod: 0s
      shutdownGracePeriodCriticalPods: 0s
      staticPodPath: /etc/kubernetes/manifests
      streamingConnectionIdleTimeout: 0s
      syncFrequency: 0s
      volumeStatsAggPeriod: 0s
      EOF
    `})]}),(0,o.jsxs)(l.A,{value:"Cloud-init",children:[(0,o.jsx)("h4",{children:"Basic kubelet configuration file"}),(0,o.jsx)(a.A,{language:"bash",children:r.A`
      - path: ${c.M.kuberneteKubeletFolderPath.value}/config.yaml
        owner: root:root
        permissions: '0644'
        content: |
          ---
          apiVersion: kubelet.config.k8s.io/v1beta1
          authentication:
            anonymous:
              enabled: false
            webhook:
              cacheTTL: 0s
              enabled: true
            x509:
              clientCAFile: /etc/kubernetes/pki/ca.crt
          authorization:
            mode: Webhook
            webhook:
              cacheAuthorizedTTL: 0s
              cacheUnauthorizedTTL: 0s
          cgroupDriver: systemd
          clusterDNS:
          - 29.64.0.10
          clusterDomain: cluster.local
          containerRuntimeEndpoint: ""
          cpuManagerReconcilePeriod: 0s
          evictionPressureTransitionPeriod: 0s
          fileCheckFrequency: 0s
          healthzBindAddress: 127.0.0.1
          healthzPort: 10248
          httpCheckFrequency: 0s
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
          memorySwap: {}
          nodeStatusReportFrequency: 0s
          nodeStatusUpdateFrequency: 0s
          resolvConf: /run/systemd/resolve/resolv.conf
          rotateCertificates: true
          runtimeRequestTimeout: 0s
          shutdownGracePeriod: 0s
          shutdownGracePeriodCriticalPods: 0s
          staticPodPath: /etc/kubernetes/manifests
          streamingConnectionIdleTimeout: 0s
          syncFrequency: 0s
          volumeStatsAggPeriod: 0s
    `})]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(k,{...e})}):k()}},4687(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>b,default:()=>g,frontMatter:()=>h,metadata:()=>s,toc:()=>k});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/systemdUnitStart","title":"systemdUnitStart","description":"Environment variables","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/systemdUnitStart.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/systemdUnitStart","permalink":"/en/tech-docs/kubernetes/components/kubelet/systemdUnitStart","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=n(74848),i=n(28453),r=n(60513),a=n(57390),c=n(44349),l=n(9792),u=n(76331),d=n(73397);const h={},b=void 0,m={},k=[...d.toc];function p(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",p:"p",strong:"strong",...(0,i.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h4",{children:"Environment variables"}),"\n",(0,o.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,o.jsxs)(t.p,{children:["This configuration block is applicable ",(0,o.jsx)(t.strong,{children:"only"})," when installing Kubernetes manually (using the ",(0,o.jsx)(t.em,{children:'"Kubernetes the Hard Way"'})," method). When using the ",(0,o.jsx)(t.strong,{children:"kubeadm"})," utility, the configuration file will be created automatically based on the specification provided in the ",(0,o.jsx)(t.code,{children:"kubeadm-config"})," file."]}),(0,o.jsxs)(u.A,{groupId:"install-type",children:[(0,o.jsx)(l.A,{value:"Bash",children:(0,o.jsx)(a.A,{language:"bash",children:r.A`
        cat <<EOF > ${c.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
        KUBELET_KUBEADM_ARGS="--container-runtime-endpoint=unix://${c.M.criEndpoint.value} --pod-infra-container-image=${c.M.baseDockerRegistry.value}/${c.M.pausedImage.value} --config=${c.M.kuberneteKubeletFolderPath.value}/config-custom.yaml --cluster-domain=${c.M.kubernetesClusterDomain.value} --cluster-dns=${c.M.kubernetesDNSAddress.value}
        "
        EOF
      `})}),(0,o.jsx)(l.A,{value:"Cloud-init",children:(0,o.jsx)(a.A,{language:"bash",children:r.A`
        - path: ${c.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
          owner: root:root
          permissions: '0644'
          content: |
            KUBELET_KUBEADM_ARGS="--container-runtime-endpoint=unix://${c.M.criEndpoint.value} --pod-infra-container-image=${c.M.baseDockerRegistry.value}/${c.M.pausedImage.value} --config=${c.M.kuberneteKubeletFolderPath.value}/config-custom.yaml --cluster-domain=${c.M.kubernetesClusterDomain.value} --cluster-dns=${c.M.kubernetesDNSAddress.value}                "
      `})})]})]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"This command starts the Kubelet service, which is responsible for deploying all containers based on Static Pods manifests."}),"\n"]}),"\n",(0,o.jsx)(a.A,{language:"bash",children:r.A`
      systemctl start kubelet
  `}),"\n",(0,o.jsx)("h3",{children:"Systemd Unit Status"}),"\n",(0,o.jsxs)(n,{className:"custom-blue-block",children:[(0,o.jsx)("summary",{children:"Systemd unit readiness check"}),(0,o.jsx)(d.default,{})]})]})}function g(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}}}]);