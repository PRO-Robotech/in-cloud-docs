"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[2038,4797,6703,7341,7897,9882],{95175(e,t,n){n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>p,default:()=>y,frontMatter:()=>k,metadata:()=>s,toc:()=>g});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/all-kubelet-start","title":"5.2.3.3. Kubelet Start","description":"This section covers the manual startup of Kubelet with systemd unit configuration. It describes the creation of a basic kubelet configuration file, setting up environment variables for the kubelet.service, and starting the service itself.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/allServiceStartComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/all-kubelet-start","permalink":"/en/tech-docs/kubernetes/components/kubelet/all-kubelet-start","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"all-kubelet-start","title":"5.2.3.3. Kubelet Start"},"sidebar":"techDocs","previous":{"title":"5.2.3.2. \u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435","permalink":"/en/tech-docs/kubernetes/k8s-join"},"next":{"title":"5.2.4.1. \u041c\u0430\u0440\u043a\u0438\u0440\u043e\u0432\u043a\u0430","permalink":"/en/tech-docs/kubernetes/additional-setup/marking/all-marking"}}');var o=n(74848),i=n(28453),r=n(60726),a=n(25202),c=n(4687),l=n(25567),u=n(9792),d=n(76331),b=n(60513),m=n(57390),h=n(44349);const k={id:"all-kubelet-start",title:"5.2.3.3. Kubelet Start"},p=void 0,f={},g=[...l.toc,...c.toc,...r.toc,...l.toc,...c.toc,...a.toc];function x(e){const t={blockquote:"blockquote",code:"code",p:"p",...(0,i.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"This section covers the manual startup of Kubelet with systemd unit configuration. It describes the creation of a basic kubelet configuration file, setting up environment variables for the kubelet.service, and starting the service itself."}),"\n"]}),"\n",(0,o.jsxs)(d.A,{groupId:"phase",children:[(0,o.jsx)(u.A,{value:"init",label:"Init",children:(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,o.jsx)("p",{style:{marginBottom:0},children:"Start/Configure kubelet"}),(0,o.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,o.jsxs)(d.A,{groupId:"install-type",children:[(0,o.jsxs)(u.A,{value:"HardWay",children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["This configuration file is required for ",(0,o.jsx)(t.code,{children:"Kubelet"})," to start."]}),"\n"]}),(0,o.jsxs)(n,{className:"custom-gray-block",children:[(0,o.jsx)("summary",{children:"Kubelet default config"}),(0,o.jsx)(l.default,{})]}),(0,o.jsx)(c.default,{})]}),(0,o.jsx)(u.A,{value:"Kubeadm",children:(0,o.jsx)(r.default,{})})]})]})}),(0,o.jsx)(u.A,{value:"join",label:"Join",children:(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,o.jsx)("p",{style:{marginBottom:0},children:"Start/Configure kubelet"}),(0,o.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,o.jsxs)(d.A,{groupId:"install-type",children:[(0,o.jsxs)(u.A,{value:"HardWay",children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["This configuration file is required for ",(0,o.jsx)(t.code,{children:"Kubelet"})," to start."]}),"\n"]}),(0,o.jsxs)(n,{className:"custom-gray-block",children:[(0,o.jsx)("summary",{children:"Kubelet default config"}),(0,o.jsx)(l.default,{})]}),(0,o.jsx)(m.A,{language:"bash",children:b.A`
            export BOOTSTRAP_TOKEN=${h.M.bootstrapToken.value}
          `}),(0,o.jsx)(m.A,{language:"bash",children:b.A`
            cat <<EOF > /etc/kubernetes/bootstrap-kubelet.conf
            apiVersion: v1
            clusters:
            - cluster:
                certificate-authority-data: $(base64 -w 0 /etc/kubernetes/pki/ca.crt)
                server: https://api.my-first-cluster.example.com:6443
              name: my-first-cluster
            contexts:
            - context:
                cluster: my-first-cluster
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
          `}),(0,o.jsx)(c.default,{})]}),(0,o.jsx)(u.A,{value:"Kubeadm",children:(0,o.jsx)(a.default,{})})]})]})})]})]})}function y(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(x,{...e})}):x(e)}},73397(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitRunning","title":"statusSystemdUnitRunning","description":"Note that when creating a cluster with Kubeadm without running kubeadm init or kubeadm join, the Systemd Unit will be added to autostart but will be disabled.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitRunning.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/checks","slug":"/tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitRunning","permalink":"/en/tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitRunning","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=n(74848),i=n(28453),r=n(60513),a=n(57390);const c={},l=void 0,u={},d=[];function b(e){const t={admonition:"admonition",code:"code",em:"em",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,o.jsxs)(t.p,{children:["Note that when creating a cluster with ",(0,o.jsx)(t.em,{children:(0,o.jsx)(t.strong,{children:"Kubeadm"})})," without running ",(0,o.jsx)(t.code,{children:"kubeadm init"})," or ",(0,o.jsx)(t.code,{children:"kubeadm join"}),", the Systemd Unit will be added to autostart but will be disabled."]})}),"\n",(0,o.jsx)(a.A,{language:"bash",children:r.A`
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
  `})})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(b,{...e})}):b(e)}},60726(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>b});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartInit","title":"systemdUnitStartInit","description":"This command starts the Kubelet service as part of a dedicated Kubeadm utility phase.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartInit.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/kubeadm","slug":"/tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartInit","permalink":"/en/tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartInit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=n(74848),i=n(28453),r=n(60513),a=n(57390),c=n(44349);const l={},u=void 0,d={},b=[];function m(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"This command starts the Kubelet service as part of a dedicated Kubeadm utility phase."}),"\n"]}),"\n",(0,o.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,o.jsx)(t.p,{children:"This section depends on the following sections:"}),(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/en/tech-docs/kubernetes/components/kubeadm/lifecycleSettings",children:"Kubeadm Configs"}),"."]}),"\n"]})]}),"\n",(0,o.jsx)("h4",{children:"Start kubelet"}),"\n",(0,o.jsx)(a.A,{language:"bash",children:r.A`
  kubeadm init phase kubelet-start \\
    --config=${c.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,o.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,o.jsx)(a.A,{language:"bash",children:r.A`
  [kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"
  [kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
  [kubelet-start] Starting the kubelet
`})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},25202(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>b});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartJoin","title":"systemdUnitStartJoin","description":"This command starts the Kubelet service as part of a dedicated Kubeadm utility phase.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartJoin.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/kubeadm","slug":"/tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartJoin","permalink":"/en/tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartJoin","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=n(74848),i=n(28453),r=n(60513),a=n(57390),c=n(44349);const l={},u=void 0,d={},b=[];function m(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"This command starts the Kubelet service as part of a dedicated Kubeadm utility phase."}),"\n"]}),"\n",(0,o.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,o.jsx)(t.p,{children:"This section depends on the following sections:"}),(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/en/tech-docs/kubernetes/components/kubeadm/lifecycleSettings",children:"Kubeadm Configs"}),"."]}),"\n"]})]}),"\n",(0,o.jsx)("h4",{children:"Start kubelet"}),"\n",(0,o.jsx)(a.A,{language:"bash",children:r.A`
  kubeadm join phase kubelet-start \\
    --config=${c.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,o.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,o.jsx)(a.A,{language:"bash",children:r.A`
  [preflight] Reading configuration from the cluster...
  [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
  [kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
  [kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"
  [kubelet-start] Starting the kubelet
  [kubelet-check] Waiting for a healthy kubelet at http://127.0.0.1:10248/healthz. This can take up to 4m0s
  [kubelet-check] The kubelet is healthy after 502.252318ms
  [kubelet-start] Waiting for the kubelet to perform the TLS Bootstrap
`})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},25567(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>b,default:()=>p,frontMatter:()=>d,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/configFilesDefault","title":"configFilesDefault","description":"Basic kubelet configuration file","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/payload/configFilesDefault.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/configFilesDefault","permalink":"/en/tech-docs/kubernetes/components/kubelet/payload/configFilesDefault","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=n(74848),i=n(28453),r=n(60513),a=n(57390),c=n(44349),l=n(9792),u=n(76331);const d={},b=void 0,m={},h=[];function k(e){return(0,o.jsxs)(u.A,{groupId:"install-type",children:[(0,o.jsxs)(l.A,{value:"Bash",children:[(0,o.jsx)("h4",{children:"Basic kubelet configuration file"}),(0,o.jsx)(a.A,{language:"bash",children:r.A`
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
    `})]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(k,{...e})}):k()}},4687(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>f,frontMatter:()=>b,metadata:()=>s,toc:()=>k});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/systemdUnitStart","title":"systemdUnitStart","description":"Environment variables","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/systemdUnitStart.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/systemdUnitStart","permalink":"/en/tech-docs/kubernetes/components/kubelet/systemdUnitStart","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=n(74848),i=n(28453),r=n(60513),a=n(57390),c=n(44349),l=n(9792),u=n(76331),d=n(73397);const b={},m=void 0,h={},k=[...d.toc];function p(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",p:"p",strong:"strong",...(0,i.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h4",{children:"Environment variables"}),"\n",(0,o.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,o.jsxs)(t.p,{children:["This configuration block is applicable ",(0,o.jsx)(t.strong,{children:"only"})," when installing Kubernetes manually (using the ",(0,o.jsx)(t.em,{children:'"Kubernetes the Hard Way"'})," method). When using the ",(0,o.jsx)(t.strong,{children:"kubeadm"})," utility, the configuration file will be created automatically based on the specification provided in the ",(0,o.jsx)(t.code,{children:"kubeadm-config"})," file."]}),(0,o.jsxs)(u.A,{groupId:"install-type",children:[(0,o.jsx)(l.A,{value:"Bash",children:(0,o.jsx)(a.A,{language:"bash",children:r.A`
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
  `}),"\n",(0,o.jsx)("h3",{children:"Systemd Unit Status"}),"\n",(0,o.jsxs)(n,{className:"custom-blue-block",children:[(0,o.jsx)("summary",{children:"Systemd unit readiness check"}),(0,o.jsx)(d.default,{})]})]})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}}}]);