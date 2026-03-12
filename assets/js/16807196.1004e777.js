"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[147,430,611,3274],{60764(e,t,n){n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>m,default:()=>f,frontMatter:()=>b,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/all-kubelet-start-dp","title":"5.3.3. Kubelet Start","description":"\u041d\u0430 \u044d\u0442\u043e\u043c \u0448\u0430\u0433\u0435 \u043d\u043e\u0434\u0430 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0432\u0441\u0435, \u0447\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u0434\u043b\u044f \u0441\u0442\u0430\u0440\u0442\u0430 kubelet, \u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435.","source":"@site/docs/tech-docs/kubernetes/components/kubelet/allServiceStartComponentDP.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/all-kubelet-start-dp","permalink":"/tech-docs/kubernetes/components/kubelet/all-kubelet-start-dp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"all-kubelet-start-dp","title":"5.3.3. Kubelet Start"},"sidebar":"techDocs","previous":{"title":"5.3.2. \u0410\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f","permalink":"/tech-docs/kubernetes/certificates/authentication-dp"}}');var o=n(74848),i=n(28453),r=n(31992),c=n(72867),a=n(9792),l=n(76331),u=n(57390),d=n(60513),h=n(44349);const b={id:"all-kubelet-start-dp",title:"5.3.3. Kubelet Start"},m=void 0,k={},p=[...r.toc,...c.toc];function g(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["\u041d\u0430 \u044d\u0442\u043e\u043c \u0448\u0430\u0433\u0435 \u043d\u043e\u0434\u0430 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0432\u0441\u0435, \u0447\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u0434\u043b\u044f \u0441\u0442\u0430\u0440\u0442\u0430 ",(0,o.jsx)(t.code,{children:"kubelet"}),", \u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435.\n\u0412 \u0440\u0443\u0447\u043d\u043e\u043c \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0438 \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u043c \u043a\u043e\u043d\u0444\u0438\u0433 \u0438 \u043f\u043e\u0434\u043d\u0438\u043c\u0430\u0435\u043c \u0441\u0435\u0440\u0432\u0438\u0441 \u0441\u0430\u043c\u0438, \u0430 \u0432 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0435 \u0441 ",(0,o.jsx)(t.code,{children:"kubeadm"})," \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u043e\u0434\u043d\u043e\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u044b."]}),"\n"]}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,o.jsx)("p",{style:{marginBottom:0},children:"\u0417\u0430\u043f\u0443\u0441\u043a/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 kubelet"}),(0,o.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,o.jsxs)(l.A,{groupId:"install-type",children:[(0,o.jsxs)(a.A,{value:"HardWay",children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["\u041d\u0438\u0436\u0435 \u0431\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433 ",(0,o.jsx)(t.code,{children:"kubelet"}),", \u043e\u0442 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0431\u0443\u0434\u0435\u043c \u0441\u0442\u0430\u0440\u0442\u043e\u0432\u0430\u0442\u044c \u043d\u0430 worker-\u043d\u043e\u0434\u0435."]}),"\n"]}),(0,o.jsxs)(n,{className:"custom-gray-block",children:[(0,o.jsx)("summary",{children:"Kubelet default config"}),(0,o.jsx)(r.default,{})]}),(0,o.jsxs)(t.admonition,{title:"\u041f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",type:"warning",children:[(0,o.jsxs)(t.p,{children:["\u041f\u0435\u0440\u0435\u0434 \u0441\u0442\u0430\u0440\u0442\u043e\u043c ",(0,o.jsx)(t.code,{children:"kubelet"})," \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0432\u044b \u0443\u0436\u0435 \u043f\u0440\u043e\u0448\u043b\u0438 \u0440\u0430\u0437\u0434\u0435\u043b\n",(0,o.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/authentication-dp",children:"5.3.2. \u0410\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f"})," \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438:"]}),(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 CA-\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430 (",(0,o.jsx)(t.code,{children:"ca.crt"}),")"]}),"\n",(0,o.jsxs)(t.li,{children:["\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 ",(0,o.jsx)(t.code,{children:"bootstrap-kubelet.conf"})," (\u0438\u043b\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0432\u0440\u0443\u0447\u043d\u0443\u044e)"]}),"\n"]})]}),(0,o.jsx)(c.default,{})]}),(0,o.jsxs)(a.A,{value:"Kubeadm",children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["\u0417\u0434\u0435\u0441\u044c \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c ",(0,o.jsx)(t.code,{children:"kubeadm join"}),": \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0441\u0430\u043c\u0430 \u043f\u043e\u0434\u043d\u0438\u043c\u0435\u0442 ",(0,o.jsx)(t.code,{children:"kubelet"}),",\n\u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442 TLS Bootstrap \u0438 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442 \u043d\u043e\u0434\u0443."]}),"\n"]}),(0,o.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"warning",children:(0,o.jsxs)(t.p,{children:["\u041f\u0435\u0440\u0435\u0434 \u0437\u0430\u043f\u0443\u0441\u043a\u043e\u043c \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0433\u043e\u0442\u043e\u0432 \u043a\u043e\u043d\u0444\u0438\u0433 \u0438\u0437 \u0440\u0430\u0437\u0434\u0435\u043b\u0430\n",(0,o.jsx)(t.a,{href:"/tech-docs/kubernetes/components/all-setup-dp",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u041f\u041e (DP)"}),"."]})}),(0,o.jsx)(u.A,{language:"bash",children:d.A`
        kubeadm join \\
          --config=${h.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
      `}),(0,o.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,o.jsx)(u.A,{language:"bash",children:d.A`
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
`})})]})]})]})]})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},53338(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>b,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitRunning","title":"statusSystemdUnitRunning","description":"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Kubeadm \u0431\u0435\u0437 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 kubeadm init \u0438\u043b\u0438 kubeadm join, Systemd Unit \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a, \u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d.","source":"@site/docs/tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitRunning.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/checks","slug":"/tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitRunning","permalink":"/tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitRunning","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=n(74848),i=n(28453),r=n(60513),c=n(57390);const a={},l=void 0,u={},d=[];function h(e){const t={admonition:"admonition",code:"code",em:"em",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"warning",children:(0,o.jsxs)(t.p,{children:["\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,o.jsx)(t.em,{children:(0,o.jsx)(t.strong,{children:"Kubeadm"})})," \u0431\u0435\u0437 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 ",(0,o.jsx)(t.code,{children:"kubeadm init"})," \u0438\u043b\u0438 ",(0,o.jsx)(t.code,{children:"kubeadm join"}),", Systemd Unit \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a, \u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d."]})}),"\n",(0,o.jsx)(c.A,{language:"bash",children:r.A`
      systemctl status kubelet
  `}),"\n",(0,o.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,o.jsx)(c.A,{language:"bash",children:r.A`
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
  `})})]})}function b(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},31992(e,t,n){n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>p,frontMatter:()=>d,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/configFilesDefault","title":"configFilesDefault","description":"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet","source":"@site/docs/tech-docs/kubernetes/components/kubelet/payload/configFilesDefault.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/configFilesDefault","permalink":"/tech-docs/kubernetes/components/kubelet/payload/configFilesDefault","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=n(74848),i=n(28453),r=n(60513),c=n(57390),a=n(44349),l=n(9792),u=n(76331);const d={},h=void 0,b={},m=[];function k(e){return(0,o.jsxs)(u.A,{groupId:"install-type",children:[(0,o.jsxs)(l.A,{value:"Bash",children:[(0,o.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet"}),(0,o.jsx)(c.A,{language:"bash",children:r.A`
      cat <<EOF > ${a.M.kuberneteKubeletFolderPath.value}/config.yaml
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
    `})]}),(0,o.jsxs)(l.A,{value:"Cloud-init",children:[(0,o.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet"}),(0,o.jsx)(c.A,{language:"bash",children:r.A`
      - path: ${a.M.kuberneteKubeletFolderPath.value}/config.yaml
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
    `})]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(k,{...e})}):k()}},72867(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>b,default:()=>g,frontMatter:()=>h,metadata:()=>s,toc:()=>k});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/systemdUnitStart","title":"systemdUnitStart","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/kubelet/systemdUnitStart.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/systemdUnitStart","permalink":"/tech-docs/kubernetes/components/kubelet/systemdUnitStart","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=n(74848),i=n(28453),r=n(60513),c=n(57390),a=n(44349),l=n(9792),u=n(76331),d=n(53338);const h={},b=void 0,m={},k=[...d.toc];function p(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",p:"p",strong:"strong",...(0,i.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,o.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"warning",children:[(0,o.jsxs)(t.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c ",(0,o.jsx)(t.strong,{children:"\u0442\u043e\u043b\u044c\u043a\u043e"})," \u043f\u0440\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 Kubernetes \u0432\u0440\u0443\u0447\u043d\u0443\u044e (\u043c\u0435\u0442\u043e\u0434\u043e\u043c ",(0,o.jsx)(t.em,{children:"\xabKubernetes the Hard Way\xbb"}),"). \u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",(0,o.jsx)(t.strong,{children:"kubeadm"})," \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,o.jsx)(t.code,{children:"kubeadm-config"}),"."]}),(0,o.jsxs)(u.A,{groupId:"install-type",children:[(0,o.jsx)(l.A,{value:"Bash",children:(0,o.jsx)(c.A,{language:"bash",children:r.A`
        cat <<EOF > ${a.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
        KUBELET_KUBEADM_ARGS="--container-runtime-endpoint=unix://${a.M.criEndpoint.value} --pod-infra-container-image=${a.M.baseDockerRegistry.value}/${a.M.pausedImage.value} --config=${a.M.kuberneteKubeletFolderPath.value}/config-custom.yaml --cluster-domain=${a.M.kubernetesClusterDomain.value} --cluster-dns=${a.M.kubernetesDNSAddress.value}
        "
        EOF
      `})}),(0,o.jsx)(l.A,{value:"Cloud-init",children:(0,o.jsx)(c.A,{language:"bash",children:r.A`
        - path: ${a.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
          owner: root:root
          permissions: '0644'
          content: |
            KUBELET_KUBEADM_ARGS="--container-runtime-endpoint=unix://${a.M.criEndpoint.value} --pod-infra-container-image=${a.M.baseDockerRegistry.value}/${a.M.pausedImage.value} --config=${a.M.kuberneteKubeletFolderPath.value}/config-custom.yaml --cluster-domain=${a.M.kubernetesClusterDomain.value} --cluster-dns=${a.M.kubernetesDNSAddress.value}                "
      `})})]})]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0441\u0435\u0440\u0432\u0438\u0441 Kubelet, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435 \u0432\u0441\u0435\u0445 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u043e\u0432 Static Pods."}),"\n"]}),"\n",(0,o.jsx)(c.A,{language:"bash",children:r.A`
      systemctl start kubelet
  `}),"\n",(0,o.jsx)("h3",{children:"\u0421\u0442\u0430\u0442\u0443\u0441 Systemd Unit"}),"\n",(0,o.jsxs)(n,{className:"custom-blue-block",children:[(0,o.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 systemd unit"}),(0,o.jsx)(d.default,{})]})]})}function g(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}}}]);