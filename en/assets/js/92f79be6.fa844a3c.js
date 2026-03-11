"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[6703],{25567(e,t,n){n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>h,default:()=>b,frontMatter:()=>d,metadata:()=>o,toc:()=>m});const o=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/configFilesDefault","title":"configFilesDefault","description":"Basic kubelet configuration file","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/payload/configFilesDefault.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/configFilesDefault","permalink":"/en/tech-docs/kubernetes/components/kubelet/payload/configFilesDefault","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),i=n(28453),r=n(60513),a=n(57390),c=n(44349),u=n(9792),l=n(76331);const d={},h=void 0,f={},m=[];function g(e){return(0,s.jsxs)(l.A,{groupId:"install-type",children:[(0,s.jsxs)(u.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"Basic kubelet configuration file"}),(0,s.jsx)(a.A,{language:"bash",children:r.A`
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
    `})]}),(0,s.jsxs)(u.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"Basic kubelet configuration file"}),(0,s.jsx)(a.A,{language:"bash",children:r.A`
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
    `})]})]})}function b(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g()}}}]);