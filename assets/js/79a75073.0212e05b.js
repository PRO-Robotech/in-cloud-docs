"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3634],{285:(e,a,t)=>{t.d(a,{h:()=>r});const r={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},9792:(e,a,t)=>{t.d(a,{A:()=>u});t(96540);var r=t(34164);const l={tabItem:"tabItem_Ymn6"};var o=t(74848);function u({children:e,hidden:a,className:t}){return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,t),hidden:a,children:e})}},12480:(e,a,t)=>{t.d(a,{Q:()=>n});var r=t(60513),l=t(56223),o=t(68741),u=t(51908),i=t(44349);const n={data:{value:r.A`
      apiVersion: kubeadm.k8s.io/v1beta3
      kind: ClusterConfiguration
      clusterName: "$\{CLUSTER_NAME}"
      certificatesDir: ${i.M.kubernetesBaseFolderPath.value}/pki
      controlPlaneEndpoint: $\{INTERNAL_API}:${l.L.securePort.value}
      imageRepository: "${i.M.baseDockerRegistry.value}"
      networking:
        serviceSubnet: ${i.M.kubernetesServiceCIDR.value}
        dnsDomain: ${i.M.kubernetesClusterDomain.value}
      kubernetesVersion: ${o.M.kubernetes.value}
      dns: {}
      etcd:
        local:
          imageRepository: "${i.M.baseDockerRegistry.value}"
          dataDir: "/var/lib/etcd"
          extraArgs:
            ${u.Nu.data.value}
          peerCertSANs:
            - 127.0.0.1
          serverCertSANs:
            - 127.0.0.1
      apiServer:
        extraArgs:
          ${u.IL.data.value}
        extraVolumes:
        - name: "k8s-audit"
          hostPath: "/var/log/kubernetes/audit/"
          mountPath: "/var/log/kubernetes/audit/"
          readOnly: false
          pathType: DirectoryOrCreate
        - name: "k8s-audit-policy"
          hostPath: "/etc/kubernetes/audit-policy.yaml"
          mountPath: "/etc/kubernetes/audit-policy.yaml"
          pathType: File
        certSANs:
          - "127.0.0.1"
          # TODO для доабвления внешнего FQDN в сертификаты кластера
          # - $\{INTERNAL_API}
        timeoutForControlPlane: 4m0s
      controllerManager:
        extraArgs:
          cluster-name: "$\{CLUSTER_NAME}"
          ${u.Uj.data.value}
        # ЕСЛИ НУЖНО ПОДКЛЮЧИТЬ СЕРВЕРНЫЕ СЕРТИФИКАТЫ ДЛЯ KUBE-CONTROLLER-MANAGER
        # ОБРАТИТЕ ВНИМАНИЕ, ЧТО KUBEADM НЕ СОЗДАЕТ ДАННЫЕ СЕРТИФИКАТЫ
        # ТРЕБУЕТСЯ РАСКОМЕНТИРОВАТЬ
        # ->
        # extraVolumes:
        # - name: "controller-manager-crt"
        #   hostPath: "/etc/kubernetes/pki/controller-manager-server.crt"
        #   mountPath: "/etc/kubernetes/pki/controller-manager-server.crt"
        #   pathType: File
        # - name: "controller-manager-key"
        #   hostPath: "/etc/kubernetes/pki/controller-manager-server.key"
        #   mountPath: "/etc/kubernetes/pki/controller-manager-server.key"
        #   pathType: File
      scheduler:
        extraArgs:
          ${u.hZ.data.value}
        # ЕСЛИ НУЖНО ПОДКЛЮЧИТЬ СЕРВЕРНЫЕ СЕРТИФИКАТЫ ДЛЯ KUBE-SCHEDULER
        # ОБРАТИТЕ ВНИМАНИЕ, ЧТО KUBEADM НЕ СОЗДАЕТ ДАННЫЕ СЕРТИФИКАТЫ
        # ТРЕБУЕТСЯ РАСКОМЕНТИРОВАТЬ
        # ->
        # extraVolumes:
        # - name: "scheduler-crt"
        #   hostPath: "/etc/kubernetes/pki/scheduler-server.crt"
        #   mountPath: "/etc/kubernetes/pki/scheduler-server.crt"
        #   pathType: File
        # - name: "scheduler-key"
        #   hostPath: "/etc/kubernetes/pki/scheduler-server.key"
        #   mountPath: "/etc/kubernetes/pki/scheduler-server.key"
        #   pathType: File
    `}}},21232:(e,a,t)=>{t.d(a,{L:()=>o});var r=t(65742),l=t(44349);const o={authenticationKubeconfig:{value:`${l.M.kubernetesBaseFolderPath.value}/controller-manager.conf`},authorizationKubeconfig:{value:`${l.M.kubernetesBaseFolderPath.value}/controller-manager.conf`},kubeconfig:{value:`${l.M.kubernetesBaseFolderPath.value}/controller-manager.conf`},clientCaFile:{value:`${r.$.kubernetesCA.crtPath}`},clusterSigningCertFile:{value:`${r.$.kubernetesCA.crtPath}`},clusterSigningKeyFile:{value:`${r.$.kubernetesCA.keyPath}`},requestheaderClientCaFile:{value:`${r.$.frontProxyCA.crtPath}`},rootCaFile:{value:`${r.$.kubernetesCA.crtPath}`},serviceAccountPrivateKeyFile:{value:`${l.M.kubernetesBaseFolderPath.value}/pki/sa.key`},clusterName:{value:"${CLUSTER_NAME}"},allocateNodeCidrs:{value:"false"},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},allowUntaggedCloud:{value:"false"},authenticationSkipLookup:{value:"false"},authenticationTokenWebhookCacheTtl:{value:"10s"},authenticationTolerateLookupFailure:{value:"false"},authorizationAlwaysAllowPaths:{value:"/healthz,/readyz,/livez,/metrics"},authorizationWebhookCacheAuthorizedTtl:{value:"10s"},authorizationWebhookCacheUnauthorizedTtl:{value:"10s"},bindAddress:{value:"0.0.0.0"},certDir:{value:""},cidrAllocatorType:{value:"RangeAllocator"},cloudConfig:{value:""},cloudProvider:{value:"external"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},clusterCidr:{value:""},clusterSigningDuration:{value:"720h0m0s"},clusterSigningKubeApiserverClientCertFile:{value:""},clusterSigningKubeApiserverClientKeyFile:{value:""},clusterSigningKubeletClientCertFile:{value:""},clusterSigningKubeletClientKeyFile:{value:""},clusterSigningKubeletServingCertFile:{value:""},clusterSigningKubeletServingKeyFile:{value:""},clusterSigningLegacyUnknownCertFile:{value:""},clusterSigningLegacyUnknownKeyFile:{value:""},concurrentCronJobSyncs:{value:"5"},concurrentDeploymentSyncs:{value:"5"},concurrentEndpointSyncs:{value:"5"},concurrentEphemeralvolumeSyncs:{value:"5"},concurrentGcSyncs:{value:"20"},concurrentHorizontalPodAutoscalerSyncs:{value:"5"},concurrentJobSyncs:{value:"5"},concurrentNamespaceSyncs:{value:"10"},concurrentRcSyncs:{value:"5"},concurrentReplicasetSyncs:{value:"20"},concurrentResourceQuotaSyncs:{value:"5"},concurrentServiceEndpointSyncs:{value:"5"},concurrentServiceSyncs:{value:"1"},concurrentServiceaccountTokenSyncs:{value:"5"},concurrentStatefulsetSyncs:{value:"5"},concurrentTtlAfterFinishedSyncs:{value:"5"},concurrentValidatingAdmissionPolicyStatusSyncs:{value:"5"},configureCloudRoutes:{value:"true"},contentionProfiling:{value:"false"},controllerStartInterval:{value:"0s"},controllers:{value:"*,bootstrapsigner,tokencleaner"},disableAttachDetachReconcileSync:{value:"false"},disableForceDetachOnTimeout:{value:"false"},disabledMetrics:{value:""},enableDynamicProvisioning:{value:"true"},enableGarbageCollector:{value:"true"},enableHostpathProvisioner:{value:"false"},enableLeaderMigration:{value:"false"},endpointUpdatesBatchPeriod:{value:"0s"},endpointsliceUpdatesBatchPeriod:{value:"0s"},externalCloudVolumePlugin:{value:""},featureGates:{value:"RotateKubeletServerCertificate=true"},flexVolumePluginDir:{value:"/usr/libexec/kubernetes/kubelet-plugins/volume/exec/"},help:{value:"false"},horizontalPodAutoscalerCpuInitializationPeriod:{value:"5m0s"},horizontalPodAutoscalerDownscaleDelay:{value:"5m0s"},horizontalPodAutoscalerDownscaleStabilization:{value:"5m0s"},horizontalPodAutoscalerInitialReadinessDelay:{value:"30s"},horizontalPodAutoscalerSyncPeriod:{value:"30s"},horizontalPodAutoscalerTolerance:{value:"0.1"},horizontalPodAutoscalerUpscaleDelay:{value:"3m0s"},http2MaxStreamsPerConnection:{value:"0"},kubeApiBurst:{value:"120"},kubeApiContentType:{value:"application/vnd.kubernetes.protobuf"},kubeApiQps:{value:"100"},largeClusterSizeThreshold:{value:"50"},leaderElect:{value:"true"},leaderElectLeaseDuration:{value:"15s"},leaderElectRenewDeadline:{value:"10s"},leaderElectResourceLock:{value:"leases"},leaderElectResourceName:{value:"kube-controller-manager"},leaderElectResourceNamespace:{value:"kube-system"},leaderElectRetryPeriod:{value:"2s"},leaderMigrationConfig:{value:""},legacyServiceAccountTokenCleanUpPeriod:{value:"8760h0m0s"},logFlushFrequency:{value:"5s"},logJsonInfoBufferSize:{value:"0"},logJsonSplitStream:{value:"false"},logTextInfoBufferSize:{value:"0"},logTextSplitStream:{value:"false"},loggingFormat:{value:"text"},attachDetachReconcileSyncPeriod:{value:"1m0s"},master:{value:""},maxEndpointsPerSlice:{value:"100"},minResyncPeriod:{value:"12h0m0s"},mirroringConcurrentServiceEndpointSyncs:{value:"5"},mirroringEndpointsliceUpdatesBatchPeriod:{value:"0s"},mirroringMaxEndpointsPerSubset:{value:"1000"},namespaceSyncPeriod:{value:"2m0s"},nodeCidrMaskSize:{value:"0"},nodeCidrMaskSizeIpv4:{value:"0"},nodeCidrMaskSizeIpv6:{value:"0"},nodeEvictionRate:{value:"0.1"},nodeMonitorGracePeriod:{value:"40s"},nodeMonitorPeriod:{value:"5s"},nodeStartupGracePeriod:{value:"10s"},nodeSyncPeriod:{value:"0s"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},pvRecyclerIncrementTimeoutNfs:{value:"30"},pvRecyclerMinimumTimeoutHostpath:{value:"60"},pvRecyclerMinimumTimeoutNfs:{value:"300"},pvRecyclerPodTemplateFilepathHostpath:{value:""},pvRecyclerPodTemplateFilepathNfs:{value:""},pvRecyclerTimeoutIncrementHostpath:{value:"30"},pvclaimbinderSyncPeriod:{value:"15s"},requestheaderAllowedNames:{value:""},requestheaderExtraHeadersPrefix:{value:"x-remote-extra-"},requestheaderGroupHeaders:{value:"x-remote-group"},requestheaderUsernameHeaders:{value:"x-remote-user"},resourceQuotaSyncPeriod:{value:"5m0s"},routeReconciliationPeriod:{value:"10s"},secondaryNodeEvictionRate:{value:"0.01"},securePort:{value:"10257"},serviceClusterIpRange:{value:""},showHiddenMetricsForVersion:{value:""},terminatedPodGcThreshold:{value:"0"},tlsCertFile:{value:"/etc/kubernetes/pki/controller-manager-server.crt"},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsPrivateKeyFile:{value:"/etc/kubernetes/pki/controller-manager-server.key"},tlsSniCertKey:{value:""},unhealthyZoneThreshold:{value:"0.55"},useServiceAccountCredentials:{value:"true"},v:{value:"2"},version:{value:"false"},vmodule:{value:""},volumeHostAllowLocalLoopback:{value:"true"},volumeHostCidrDenylist:{value:""}}},21502:(e,a,t)=>{t.d(a,{w:()=>o});var r=t(285),l=t(44349);const o={authenticationKubeconfig:{value:`${l.M.kubernetesBaseFolderPath.value}/scheduler.conf`},authenticationSkipLookup:{value:"false"},authenticationTokenWebhookCacheTtl:{value:"10s"},authenticationTolerateLookupFailure:{value:"true"},authorizationAlwaysAllowPaths:{value:"/healthz,/readyz,/livez,/metrics"},authorizationKubeconfig:{value:`${l.M.kubernetesBaseFolderPath.value}/scheduler.conf`},authorizationWebhookCacheAuthorizedTtl:{value:"10s"},authorizationWebhookCacheUnauthorizedTtl:{value:"10s"},bindAddress:{value:"0.0.0.0"},contentionProfiling:{value:"true"},help:{value:"false"},http2MaxStreamsPerConnection:{value:"0"},kubeApiBurst:{value:"100"},kubeApiContentType:{value:"application/vnd.kubernetes.protobuf"},kubeApiQps:{value:"50"},kubeconfig:{value:`${l.M.kubernetesBaseFolderPath.value}/scheduler.conf`},leaderElect:{value:"true"},leaderElectLeaseDuration:{value:"15s"},leaderElectRenewDeadline:{value:"10s"},leaderElectResourceLock:{value:"leases"},leaderElectResourceName:{value:"kube-scheduler"},leaderElectResourceNamespace:{value:"kube-system"},leaderElectRetryPeriod:{value:"2s"},logFlushFrequency:{value:"5s"},logJsonInfoBufferSize:{value:"0"},logJsonSplitStream:{value:"false"},logTextInfoBufferSize:{value:"0"},logTextSplitStream:{value:"false"},loggingFormat:{value:"text"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},podMaxInUnschedulablePodsDuration:{value:"5m0s"},profiling:{value:"true"},requestheaderExtraHeadersPrefix:{value:"[x-remote-extra-]"},requestheaderGroupHeaders:{value:"[x-remote-group]"},requestheaderUsernameHeaders:{value:"[x-remote-user]"},securePort:{value:`${r.h.kubeScheduler.portNumber}`},v:{value:"2"},version:{value:"false"},allowMetricLabels:{value:"[]"},disabledMetrics:{value:"[]"},requestheaderAllowedNames:{value:"[]"},tlsCipherSuites:{value:"[]"},tlsSniCertKey:{value:"[]"},allowMetricLabelsManifest:{value:""},certDir:{value:""},clientCaFile:{value:""},config:{value:""},featureGates:{value:""},vmodule:{value:""},writeConfigTo:{value:""},tlsMinVersion:{value:""},tlsPrivateKeyFile:{value:"/etc/kubernetes/pki/scheduler-server.key"},showHiddenMetricsForVersion:{value:""},tlsCertFile:{value:"/etc/kubernetes/pki/scheduler-server.crt"},requestheaderClientCaFile:{value:""},master:{value:""}}},26225:(e,a,t)=>{t.d(a,{D:()=>i});var r=t(60513),l=t(65742),o=t(44349),u=t(285);const i={data:{value:r.A`
      apiVersion: kubelet.config.k8s.io/v1beta1
      authentication:
        anonymous:
            enabled: false
        webhook:
            cacheTTL: 0s
            enabled: true
        x509:
          clientCAFile: "${l.$.kubernetesCA.crtPath}"
      authorization:
        mode: Webhook
        webhook:
          cacheAuthorizedTTL: 0s
          cacheUnauthorizedTTL: 0s
      cgroupDriver: systemd
      containerLogMaxSize: "50Mi"
      containerRuntimeEndpoint: "${o.M.criEndpoint.value}"
      cpuManagerReconcilePeriod: 0s
      evictionPressureTransitionPeriod: 5s
      fileCheckFrequency: 0s
      healthzBindAddress: 127.0.0.1
      healthzPort: ${u.h.kubeletHealthz.portNumber}
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
      staticPodPath: ${o.M.kubernetesBaseFolderPath.value}/manifests
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
    `}}},36123:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>k,contentTitle:()=>b,default:()=>f,frontMatter:()=>p,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/additional-setup/upload-configs/uploadConfigsInitComponent","title":"uploadConfigsInitComponent","description":"\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u043f\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 Kubeadm \u0438 Kubelet \u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u043a\u043e\u043d\u0442\u0443\u0440 Kubernetes \u0432 \u0432\u0438\u0434\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u0430 ConfigMap. \u042d\u0442\u043e\u0442 \u043f\u043e\u0434\u0445\u043e\u0434 \u0443\u043f\u0440\u043e\u0449\u0430\u0435\u0442 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c\u0438 \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0443\u0437\u043b\u043e\u0432 Kubernetes, \u043e\u0445\u0432\u0430\u0442\u044b\u0432\u0430\u044f \u043a\u0430\u043a \u0440\u0430\u0431\u043e\u0447\u0438\u0435 (worker), \u0442\u0430\u043a \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0435 (master) \u0443\u0437\u043b\u044b.","source":"@site/docs/tech-docs/kubernetes/additional-setup/upload-configs/uploadConfigsInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/additional-setup/upload-configs","slug":"/tech-docs/kubernetes/additional-setup/upload-configs/uploadConfigsInitComponent","permalink":"/tech-docs/kubernetes/additional-setup/upload-configs/uploadConfigsInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=t(74848),o=t(28453),u=t(9792),i=t(76331),n=t(68747),s=t(60513),c=t(12480),d=t(26225),v=t(44349),h=t(95538);const p={},b=void 0,k={},m=[];function g(e){const a={admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",...(0,o.R)(),...e.components},{Details:t}=a;return t||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.admonition,{type:"warning",children:(0,l.jsxs)(a.p,{children:["\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u043f\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 ",(0,l.jsx)(a.code,{children:"Kubeadm"})," \u0438 ",(0,l.jsx)(a.code,{children:"Kubelet"})," \u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u043a\u043e\u043d\u0442\u0443\u0440 Kubernetes \u0432 \u0432\u0438\u0434\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u0430 ",(0,l.jsx)(a.code,{children:"ConfigMap"}),". \u042d\u0442\u043e\u0442 \u043f\u043e\u0434\u0445\u043e\u0434 \u0443\u043f\u0440\u043e\u0449\u0430\u0435\u0442 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c\u0438 \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0443\u0437\u043b\u043e\u0432 Kubernetes, \u043e\u0445\u0432\u0430\u0442\u044b\u0432\u0430\u044f \u043a\u0430\u043a \u0440\u0430\u0431\u043e\u0447\u0438\u0435 (",(0,l.jsx)(a.code,{children:"worker"}),"), \u0442\u0430\u043a \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0435 (",(0,l.jsx)(a.code,{children:"master"}),") \u0443\u0437\u043b\u044b."]})}),"\n",(0,l.jsxs)(i.A,{groupId:"install-type",children:[(0,l.jsxs)(u.A,{value:"HardWay",children:[(0,l.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,l.jsx)(n.A,{language:"bash",children:s.A`
      export CLUSTER_NAME='${v.M.clusterName.value}'
      export BASE_DOMAIN='${v.M.kubernetesBaseDomain.value}'
      export FULL_HOST_NAME=${v.M.virtualMachineFullName.value}
      export INTERNAL_API=api.${v.M.kubernetesClusterExternalDomain.value}
      export MACHINE_LOCAL_ADDRESS=${v.M.virtualMachineLocalAddress.value}
      export ETCD_INITIAL_CLUSTER="$\{FULL_HOST_NAME}=${h.D.initialAdvertisePeerUrls.value}"
      export AUTH_EXTRA_GROUPS="system:bootstrappers:kubeadm:default-node-token"
    `}),(0,l.jsxs)(t,{className:"custom-gray-block",children:[(0,l.jsx)("summary",{children:"kubeadm-config"}),(0,l.jsxs)(a.blockquote,{children:["\n",(0,l.jsxs)(a.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c, \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u043d\u043e\u0434\u0430\u043c \u0447\u0438\u0442\u0430\u0442\u044c ConfigMap ",(0,l.jsx)(a.code,{children:"kubeadm-config"})," \u0432 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435 \u0438\u043c\u0451\u043d ",(0,l.jsx)(a.code,{children:"kube-system"}),":"]}),"\n"]}),(0,l.jsx)(n.A,{children:s.A`
        kubectl \\
          --kubeconfig=${v.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
          apply -f - <<EOF
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: Role
        metadata:
          name: kubeadm:nodes-kubeadm-config
          namespace: kube-system
        rules:
        - apiGroups:
          - ""
          resourceNames:
          - kubeadm-config
          resources:
          - configmaps
          verbs:
          - get
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: RoleBinding
        metadata:
          name: kubeadm:nodes-kubeadm-config
          namespace: kube-system
        roleRef:
          apiGroup: rbac.authorization.k8s.io
          kind: Role
          name: kubeadm:nodes-kubeadm-config
        subjects:
        - apiGroup: rbac.authorization.k8s.io
          kind: Group
          name: $\{AUTH_EXTRA_GROUPS}
        - apiGroup: rbac.authorization.k8s.io
          kind: Group
          name: system:nodes
        EOF
      `}),(0,l.jsxs)(a.blockquote,{children:["\n",(0,l.jsxs)(a.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 ",(0,l.jsx)(a.code,{children:"kubeadm join"})," \u0443\u0437\u0435\u043b \u043f\u043e\u043b\u0443\u0447\u0438\u043b \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0439 ",(0,l.jsx)(a.code,{children:"ClusterConfiguration"})," \u043e\u0442 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0438 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u043b\u0441\u044f \u043a control-plane."]}),"\n"]}),(0,l.jsx)(n.A,{children:s.A`
        kubectl \\
          --kubeconfig=${v.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
          apply -f - <<EOF
        ---
        apiVersion: v1
        kind: ConfigMap
        metadata:
          name: kubeadm-config
          namespace: kube-system
        data:
          ClusterConfiguration: |
            ${c.Q.data.value}
        EOF
      `})]}),(0,l.jsxs)(t,{className:"custom-gray-block",children:[(0,l.jsx)("summary",{children:"kubelet-config"}),(0,l.jsxs)(a.blockquote,{children:["\n",(0,l.jsxs)(a.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c, \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u043d\u043e\u0434\u0430\u043c \u0447\u0438\u0442\u0430\u0442\u044c ConfigMap ",(0,l.jsx)(a.code,{children:"kubelet-config"})," \u0432 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435 \u0438\u043c\u0451\u043d ",(0,l.jsx)(a.code,{children:"kube-system"}),":"]}),"\n"]}),(0,l.jsx)(n.A,{children:s.A`
        kubectl \\
          --kubeconfig=${v.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
          apply -f - <<EOF
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: Role
        metadata:
          name: kubeadm:kubelet-config
          namespace: kube-system
        rules:
        - apiGroups:
          - ""
          resourceNames:
          - kubelet-config
          resources:
          - configmaps
          verbs:
          - get
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: RoleBinding
        metadata:
          name: kubeadm:kubelet-config
          namespace: kube-system
        roleRef:
          apiGroup: rbac.authorization.k8s.io
          kind: Role
          name: kubeadm:kubelet-config
        subjects:
        - apiGroup: rbac.authorization.k8s.io
          kind: Group
          name: system:nodes
        - apiGroup: rbac.authorization.k8s.io
          kind: Group
          name: $\{AUTH_EXTRA_GROUPS}
        EOF
      `}),(0,l.jsxs)(a.blockquote,{children:["\n",(0,l.jsxs)(a.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 ",(0,l.jsx)(a.code,{children:"kubeadm join"})," \u0443\u0437\u0435\u043b \u043f\u043e\u043b\u0443\u0447\u0438\u043b \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0439 ",(0,l.jsx)(a.code,{children:"kubelet-config"})," \u043e\u0442 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0438 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u043b\u0441\u044f \u043a control-plane."]}),"\n"]}),(0,l.jsx)(n.A,{children:s.A`
        kubectl \\
          --kubeconfig=${v.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
          apply -f - <<EOF
        ---
        apiVersion: v1
        kind: ConfigMap
        metadata:
          name: kubelet-config
          namespace: kube-system
        data:
          kubelet: |
            ${d.D.data.value}
        EOF
      `})]})]}),(0,l.jsxs)(u.A,{value:"Kubeadm",children:[(0,l.jsx)("h4",{children:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"}),(0,l.jsx)(n.A,{language:"bash",children:s.A`
      kubeadm init phase upload-config all \\
        --config=${v.M.kubeadmBaseConfigPath.value}/kubeadm.yaml \\
        --kubeconfig=${v.M.kubernetesBaseFolderPath.value}/super-admin.conf
    `}),(0,l.jsx)(a.admonition,{type:"note",children:(0,l.jsx)(n.A,{language:"bash",children:s.A`
  [upload-config] Storing the configuration used in ConfigMap "kubeadm-config" in the "kube-system" Namespace
  [kubelet] Creating a ConfigMap "kubelet-config" in namespace kube-system with the configuration for the kubelets in the cluster
`})})]})]})]})}function f(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(g,{...e})}):g(e)}},51908:(e,a,t)=>{t.d(a,{IL:()=>s,Nu:()=>n,Uj:()=>c,hZ:()=>d});var r=t(60513),l=t(95538),o=t(56223),u=t(21232),i=t(21502);const n={data:{value:r.A`
      auto-compaction-retention: "${l.D.autoCompactionRetention.value}"
      cert-file: "${l.D.certFile.value}"
      client-cert-auth: "${l.D.clientCertAuth.value}"
      data-dir: "${l.D.dataDir.value}"
      election-timeout: "${l.D.electionTimeout.value}"
      heartbeat-interval: "${l.D.heartbeatInterval.value}"
      key-file: "${l.D.keyFile.value}"
      listen-client-urls: "${l.D.listenClientUrls.value}"
      listen-metrics-urls: "${l.D.listenMetricsUrls.value}"
      listen-peer-urls: "${l.D.listenPeerUrls.value}"
      logger: "${l.D.logger.value}"
      max-snapshots: "${l.D.maxSnapshots.value}"
      max-wals: "${l.D.maxWals.value}"
      metrics: "${l.D.metrics.value}"
      peer-cert-file: "${l.D.peerCertFile.value}"
      peer-client-cert-auth: "${l.D.peerClientCertAuth.value}"
      peer-key-file: "${l.D.peerKeyFile.value}"
      peer-trusted-ca-file: "${l.D.peerTrustedCAFile.value}"
      snapshot-count: "${l.D.snapshotCount.value}"
      quota-backend-bytes: "10737418240" # TODO
      experimental-initial-corrupt-check: "true"
      experimental-watch-progress-notify-interval: "5s"
      trusted-ca-file: "${l.D.trustedCAFile.value}"
    `}},s={data:{value:r.A`
      aggregator-reject-forwarding-redirect: "${o.L.aggregatorRejectForwardingRedirect.value}"
      allow-privileged: "${o.L.allowPrivileged.value}"
      anonymous-auth: "${o.L.anonymousAuth.value}"
      api-audiences: "${o.L.apiAudiences.value}"
      apiserver-count: "${o.L.apiserverCount.value}"
      audit-log-batch-buffer-size: "${o.L.auditLogBatchBufferSize.value}"
      audit-log-batch-max-size: "${o.L.auditLogBatchMaxSize.value}"
      audit-log-batch-max-wait: "${o.L.auditLogBatchMaxWait.value}"
      audit-log-batch-throttle-burst: "${o.L.auditLogBatchThrottleBurst.value}"
      audit-log-batch-throttle-enable: "${o.L.auditLogBatchThrottleEnable.value}"
      audit-log-batch-throttle-qps: "${o.L.auditLogBatchThrottleQps.value}"
      audit-log-compress: "${o.L.auditLogCompress.value}"
      audit-log-format: "${o.L.auditLogFormat.value}"
      audit-log-maxage: "${o.L.auditLogMaxage.value}"
      audit-log-maxbackup: "${o.L.auditLogMaxbackup.value}"
      audit-log-maxsize: "${o.L.auditLogMaxsize.value}"
      audit-log-mode: "${o.L.auditLogMode.value}"
      audit-log-truncate-enabled: "${o.L.auditLogTruncateEnabled.value}"
      audit-log-truncate-max-batch-size: "${o.L.auditLogTruncateMaxBatchSize.value}"
      audit-log-truncate-max-event-size: "${o.L.auditLogTruncateMaxEventSize.value}"
      audit-log-version: "${o.L.auditLogVersion.value}"
      audit-webhook-batch-buffer-size: "${o.L.auditWebhookBatchBufferSize.value}"
      audit-webhook-batch-initial-backoff: "${o.L.auditWebhookBatchInitialBackoff.value}"
      audit-webhook-batch-max-size: "${o.L.auditWebhookBatchMaxSize.value}"
      audit-webhook-batch-max-wait: "${o.L.auditWebhookBatchMaxWait.value}"
      audit-webhook-batch-throttle-burst: "${o.L.auditWebhookBatchThrottleBurst.value}"
      audit-webhook-batch-throttle-enable: "${o.L.auditWebhookBatchThrottleEnable.value}"
      audit-webhook-batch-throttle-qps: "${o.L.auditWebhookBatchThrottleQps.value}"
      audit-webhook-initial-backoff: "${o.L.auditWebhookInitialBackoff.value}"
      audit-webhook-mode: "${o.L.auditWebhookMode.value}"
      audit-webhook-truncate-enabled: "${o.L.auditWebhookTruncateEnabled.value}"
      audit-webhook-truncate-max-batch-size: "${o.L.auditWebhookTruncateMaxBatchSize.value}"
      audit-webhook-truncate-max-event-size: "${o.L.auditWebhookTruncateMaxEventSize.value}"
      audit-webhook-version: "${o.L.auditWebhookVersion.value}"
      audit-policy-file: ${o.L.auditPolicyFile.value}
      audit-log-path: ${o.L.auditLogPath.value}
      authentication-token-webhook-cache-ttl: "${o.L.authenticationTokenWebhookCacheTtl.value}"
      authentication-token-webhook-version: "${o.L.authenticationTokenWebhookVersion.value}"
      authorization-mode: "${o.L.authorizationMode.value}"
      authorization-webhook-cache-authorized-ttl: "${o.L.authorizationWebhookCacheAuthorizedTtl.value}"
      authorization-webhook-cache-unauthorized-ttl: "${o.L.authorizationWebhookCacheUnauthorizedTtl.value}"
      authorization-webhook-version: "${o.L.authorizationWebhookVersion.value}"
      bind-address: "${o.L.bindAddress.value}"
      cert-dir: "${o.L.certDir.value}"
      client-ca-file: "${o.L.clientCaFile.value}"
      cloud-provider-gce-l7lb-src-cidrs: "${o.L.cloudProviderGceL7lbSrcCidrs.value}"
      cloud-provider-gce-lb-src-cidrs: "${o.L.cloudProviderGceLbSrcCidrs.value}"
      contention-profiling: "${o.L.contentionProfiling.value}"
      default-not-ready-toleration-seconds: "${o.L.defaultNotReadyTolerationSeconds.value}"
      default-unreachable-toleration-seconds: "${o.L.defaultUnreachableTolerationSeconds.value}"
      default-watch-cache-size: "${o.L.defaultWatchCacheSize.value}"
      delete-collection-workers: "${o.L.deleteCollectionWorkers.value}"
      enable-admission-plugins: "${o.L.enableAdmissionPlugins.value}"
      enable-aggregator-routing: "${o.L.enableAggregatorRouting.value}"
      enable-bootstrap-token-auth: "${o.L.enableBootstrapTokenAuth.value}"
      enable-garbage-collector: "${o.L.enableGarbageCollector.value}"
      enable-logs-handler: "${o.L.enableLogsHandler.value}"
      enable-priority-and-fairness: "${o.L.enablePriorityAndFairness.value}"
      encryption-provider-config-automatic-reload: "${o.L.encryptionProviderConfigAutomaticReload.value}"
      endpoint-reconciler-type: "${o.L.endpointReconcilerType.value}"
      etcd-cafile: "${o.L.etcdCafile.value}"
      etcd-certfile: "${o.L.etcdCertfile.value}"
      etcd-compaction-interval: "${o.L.etcdCompactionInterval.value}"
      etcd-count-metric-poll-period: "${o.L.etcdCountMetricPollPeriod.value}"
      etcd-db-metric-poll-interval: "${o.L.etcdDbMetricPollInterval.value}"
      etcd-healthcheck-timeout: "${o.L.etcdHealthcheckTimeout.value}"
      etcd-keyfile: "${o.L.etcdKeyfile.value}"
      etcd-prefix: "${o.L.etcdPrefix.value}"
      etcd-readycheck-timeout: "${o.L.etcdReadycheckTimeout.value}"
      etcd-servers: "${o.L.etcdServers.value}"
      event-ttl: "${o.L.eventTtl.value}"
      feature-gates: "${o.L.featureGates.value}"
      goaway-chance: "${o.L.goawayChance.value}"
      help: "${o.L.help.value}"
      http2-max-streams-per-connection: "${o.L.http2MaxStreamsPerConnection.value}"
      kubelet-client-certificate: "${o.L.kubeletClientCertificate.value}"
      kubelet-client-key: "${o.L.kubeletClientKey.value}"
      kubelet-port: "${o.L.kubeletPort.value}"
      kubelet-preferred-address-types: "${o.L.kubeletPreferredAddressTypes.value}"
      kubelet-read-only-port: "${o.L.kubeletReadOnlyPort.value}"
      kubelet-timeout: "${o.L.kubeletTimeout.value}"
      kubernetes-service-node-port: "${o.L.kubernetesServiceNodePort.value}"
      lease-reuse-duration-seconds: "${o.L.leaseReuseDurationSeconds.value}"
      livez-grace-period: "${o.L.livezGracePeriod.value}"
      log-flush-frequency: "${o.L.logFlushFrequency.value}"
      logging-format: "${o.L.loggingFormat.value}"
      log-json-info-buffer-size: "${o.L.logJsonInfoBufferSize.value}"
      log-json-split-stream: "${o.L.logJsonSplitStream.value}"
      log-text-info-buffer-size: "${o.L.logTextInfoBufferSize.value}"
      log-text-split-stream: "${o.L.logTextSplitStream.value}"
      max-connection-bytes-per-sec: "${o.L.maxConnectionBytesPerSec.value}"
      max-mutating-requests-inflight: "${o.L.maxMutatingRequestsInflight.value}"
      max-requests-inflight: "${o.L.maxRequestsInflight.value}"
      min-request-timeout: "${o.L.minRequestTimeout.value}"
      permit-address-sharing: "${o.L.permitAddressSharing.value}"
      permit-port-sharing: "${o.L.permitPortSharing.value}"
      profiling: "${o.L.profiling.value}"
      proxy-client-cert-file: "${o.L.proxyClientCertFile.value}"
      proxy-client-key-file: "${o.L.proxyClientKeyFile.value}"
      requestheader-allowed-names: "${o.L.requestheaderAllowedNames.value}"
      requestheader-client-ca-file: "${o.L.requestheaderClientCaFile.value}"
      requestheader-extra-headers-prefix: "${o.L.requestheaderExtraHeadersPrefix.value}"
      requestheader-group-headers: "${o.L.requestheaderGroupHeaders.value}"
      requestheader-username-headers: "${o.L.requestheaderUsernameHeaders.value}"
      request-timeout: "${o.L.requestTimeout.value}"
      runtime-config: "${o.L.runtimeConfig.value}"
      secure-port: "${o.L.securePort.value}"
      service-account-extend-token-expiration: "${o.L.serviceAccountExtendTokenExpiration.value}"
      service-account-issuer: "${o.L.serviceAccountIssuer.value}"
      service-account-key-file: "${o.L.serviceAccountKeyFile.value}"
      service-account-lookup: "${o.L.serviceAccountLookup.value}"
      service-account-max-token-expiration: "${o.L.serviceAccountMaxTokenExpiration.value}"
      service-account-signing-key-file: "${o.L.serviceAccountSigningKeyFile.value}"
      service-cluster-ip-range: "${o.L.serviceClusterIpRange.value}"
      service-node-port-range: "${o.L.serviceNodePortRange.value}"
      shutdown-delay-duration: "${o.L.shutdownDelayDuration.value}"
      shutdown-send-retry-after: "${o.L.shutdownSendRetryAfter.value}"
      shutdown-watch-termination-grace-period: "${o.L.shutdownWatchTerminationGracePeriod.value}"
      storage-backend: "${o.L.storageBackend.value}"
      storage-media-type: "${o.L.storageMediaType.value}"
      tls-cert-file: "${o.L.tlsCertFile.value}"
      tls-private-key-file: "${o.L.tlsPrivateKeyFile.value}"
      v: "${o.L.v.value}"
      version: "${o.L.version.value}"
      watch-cache: "${o.L.watchCache.value}"
      # ЕСЛИ НУЖНО ПОДКЛЮЧИТЬ CLOUD-CONTROLLER-MANAGER
      # ТРЕБУЕТСЯ РАСКОМЕНТИРОВАТЬ
      # ->
      # cloud-provider: "${o.L.cloudProvider.value}"
      # Не указывать если значение "" или undefined
      # cloud-config: "${o.L.cloudConfig.value}"
      # strict-transport-security-directives: "${o.L.strictTransportSecurityDirectives.value}"
      # disable-admission-plugins: "${o.L.disableAdmissionPlugins.value}"
      # disabled-metrics: "${o.L.disabledMetrics.value}"
      # egress-selector-config-file: "${o.L.egressSelectorConfigFile.value}"
      # encryption-provider-config: "${o.L.encryptionProviderConfig.value}"
      # etcd-servers-overrides: "${o.L.etcdServersOverrides.value}"
      # external-hostname: "${o.L.externalHostname.value}"
      # kubelet-certificate-authority: "${o.L.kubeletCertificateAuthority.value}"
      # oidc-ca-file: "${o.L.oidcCaFile.value}"
      # oidc-client-id: "${o.L.oidcClientId.value}"
      # oidc-groups-claim: "${o.L.oidcGroupsClaim.value}"
      # oidc-groups-prefix: "${o.L.oidcGroupsPrefix.value}"
      # oidc-issuer-url: "${o.L.oidcIssuerUrl.value}"
      # oidc-required-claim: "${o.L.oidcRequiredClaim.value}"
      # oidc-signing-algs: "${o.L.oidcSigningAlgs.value}"
      # oidc-username-claim: "${o.L.oidcUsernameClaim.value}"
      # oidc-username-prefix: "${o.L.oidcUsernamePrefix.value}"
      # peer-advertise-ip: "${o.L.peerAdvertiseIp.value}"
      # peer-advertise-port: "${o.L.peerAdvertisePort.value}"
      # peer-ca-file: "${o.L.peerCaFile.value}"
      # service-account-jwks-uri: "${o.L.serviceAccountJwksUri.value}"
      # show-hidden-metrics-for-version: "${o.L.showHiddenMetricsForVersion.value}"
      # tls-cipher-suites: "${o.L.tlsCipherSuites.value}"
      # tls-min-version: "${o.L.tlsMinVersion.value}"
      # tls-sni-cert-key: "${o.L.tlsSniCertKey.value}"
      # token-auth-file: "${o.L.tokenAuthFile.value}"
      # tracing-config-file: "${o.L.tracingConfigFile.value}"
      # vmodule: "${o.L.vmodule.value}"
      # watch-cache-sizes: "${o.L.watchCacheSizes.value}"
      # authorization-webhook-config-file: "${o.L.authorizationWebhookConfigFile.value}"
      # cors-allowed-origins: "${o.L.corsAllowedOrigins.value}"
      # debug-socket-path: "${o.L.debugSocketPath.value}"
      # authorization-policy-file: "${o.L.authorizationPolicyFile.value}"
      # authorization-config: "${o.L.authorizationConfig.value}"
      # authentication-token-webhook-config-file: "${o.L.authenticationTokenWebhookConfigFile.value}"
      # authentication-config: "${o.L.authenticationConfig.value}"
      # audit-webhook-config-file: "${o.L.auditWebhookConfigFile.value}"
      # audit-policy-file: "${o.L.auditPolicyFile.value}"
      # audit-log-path: "${o.L.auditLogPath.value}"
      # allow-metric-labels: "${o.L.allowMetricLabels.value}"
      # allow-metric-labels-manifest: "${o.L.allowMetricLabelsManifest.value}"
      # admission-control: "${o.L.admissionControl.value}"
      # admission-control-config-file: "${o.L.admissionControlConfigFile.value}"
      # advertise-address: "${o.L.advertiseAddress.value}"
    `}},c={data:{value:r.A`
      allocate-node-cidrs: "${u.L.allocateNodeCidrs.value}"
      allow-untagged-cloud: "${u.L.allowUntaggedCloud.value}"
      attach-detach-reconcile-sync-period: "${u.L.attachDetachReconcileSyncPeriod.value}"
      authentication-kubeconfig: "${u.L.authenticationKubeconfig.value}"
      authentication-skip-lookup: "${u.L.authenticationSkipLookup.value}"
      authentication-token-webhook-cache-ttl: "${u.L.authenticationTokenWebhookCacheTtl.value}"
      authentication-tolerate-lookup-failure: "${u.L.authenticationTolerateLookupFailure.value}"
      authorization-always-allow-paths: "${u.L.authorizationAlwaysAllowPaths.value}"
      authorization-kubeconfig: "${u.L.authorizationKubeconfig.value}"
      authorization-webhook-cache-authorized-ttl: "${u.L.authorizationWebhookCacheAuthorizedTtl.value}"
      authorization-webhook-cache-unauthorized-ttl: "${u.L.authorizationWebhookCacheUnauthorizedTtl.value}"
      bind-address: "${u.L.bindAddress.value}"
      cidr-allocator-type: "${u.L.cidrAllocatorType.value}"
      client-ca-file: "${u.L.clientCaFile.value}"
      # -> Включить, если управляете состоянием через Cloud Controller Manager
      # cloud-provider: "${u.L.cloudProvider.value}"
      cloud-provider-gce-lb-src-cidrs: "${u.L.cloudProviderGceLbSrcCidrs.value}"
      cluster-signing-cert-file: "${u.L.clusterSigningCertFile.value}"
      cluster-signing-duration: "${u.L.clusterSigningDuration.value}"
      cluster-signing-key-file: "${u.L.clusterSigningKeyFile.value}"
      concurrent-cron-job-syncs: "${u.L.concurrentCronJobSyncs.value}"
      concurrent-deployment-syncs: "${u.L.concurrentDeploymentSyncs.value}"
      concurrent-endpoint-syncs: "${u.L.concurrentEndpointSyncs.value}"
      concurrent-ephemeralvolume-syncs: "${u.L.concurrentEphemeralvolumeSyncs.value}"
      concurrent-gc-syncs: "${u.L.concurrentGcSyncs.value}"
      concurrent-horizontal-pod-autoscaler-syncs: "${u.L.concurrentHorizontalPodAutoscalerSyncs.value}"
      concurrent-job-syncs: "${u.L.concurrentJobSyncs.value}"
      concurrent-namespace-syncs: "${u.L.concurrentNamespaceSyncs.value}"
      concurrent-rc-syncs: "${u.L.concurrentRcSyncs.value}"
      concurrent-replicaset-syncs: "${u.L.concurrentReplicasetSyncs.value}"
      concurrent-resource-quota-syncs: "${u.L.concurrentResourceQuotaSyncs.value}"
      concurrent-service-endpoint-syncs: "${u.L.concurrentServiceEndpointSyncs.value}"
      concurrent-service-syncs: "${u.L.concurrentServiceSyncs.value}"
      concurrent-serviceaccount-token-syncs: "${u.L.concurrentServiceaccountTokenSyncs.value}"
      concurrent-statefulset-syncs: "${u.L.concurrentStatefulsetSyncs.value}"
      concurrent-ttl-after-finished-syncs: "${u.L.concurrentTtlAfterFinishedSyncs.value}"
      concurrent-validating-admission-policy-status-syncs: "${u.L.concurrentValidatingAdmissionPolicyStatusSyncs.value}"
      configure-cloud-routes: "${u.L.configureCloudRoutes.value}"
      contention-profiling: "${u.L.contentionProfiling.value}"
      controller-start-interval: "${u.L.controllerStartInterval.value}"
      controllers: "${u.L.controllers.value}"
      disable-attach-detach-reconcile-sync: "${u.L.disableAttachDetachReconcileSync.value}"
      disable-force-detach-on-timeout: "${u.L.disableForceDetachOnTimeout.value}"
      enable-dynamic-provisioning: "${u.L.enableDynamicProvisioning.value}"
      enable-garbage-collector: "${u.L.enableGarbageCollector.value}"
      enable-hostpath-provisioner: "${u.L.enableHostpathProvisioner.value}"
      enable-leader-migration: "${u.L.enableLeaderMigration.value}"
      endpoint-updates-batch-period: "${u.L.endpointUpdatesBatchPeriod.value}"
      endpointslice-updates-batch-period: "${u.L.endpointsliceUpdatesBatchPeriod.value}"
      feature-gates: "${u.L.featureGates.value}"
      flex-volume-plugin-dir: "${u.L.flexVolumePluginDir.value}"
      help: "${u.L.help.value}"
      horizontal-pod-autoscaler-cpu-initialization-period: "${u.L.horizontalPodAutoscalerCpuInitializationPeriod.value}"
      horizontal-pod-autoscaler-downscale-delay: "${u.L.horizontalPodAutoscalerDownscaleDelay.value}"
      horizontal-pod-autoscaler-downscale-stabilization: "${u.L.horizontalPodAutoscalerDownscaleStabilization.value}"
      horizontal-pod-autoscaler-initial-readiness-delay: "${u.L.horizontalPodAutoscalerInitialReadinessDelay.value}"
      horizontal-pod-autoscaler-sync-period: "${u.L.horizontalPodAutoscalerSyncPeriod.value}"
      horizontal-pod-autoscaler-tolerance: "${u.L.horizontalPodAutoscalerTolerance.value}"
      horizontal-pod-autoscaler-upscale-delay: "${u.L.horizontalPodAutoscalerUpscaleDelay.value}"
      http2-max-streams-per-connection: "${u.L.http2MaxStreamsPerConnection.value}"
      kube-api-burst: "${u.L.kubeApiBurst.value}"
      kube-api-content-type: "${u.L.kubeApiContentType.value}"
      kube-api-qps: "${u.L.kubeApiQps.value}"
      kubeconfig: "${u.L.kubeconfig.value}"
      large-cluster-size-threshold: "${u.L.largeClusterSizeThreshold.value}"
      leader-elect: "${u.L.leaderElect.value}"
      leader-elect-lease-duration: "${u.L.leaderElectLeaseDuration.value}"
      leader-elect-renew-deadline: "${u.L.leaderElectRenewDeadline.value}"
      leader-elect-resource-lock: "${u.L.leaderElectResourceLock.value}"
      leader-elect-resource-name: "${u.L.leaderElectResourceName.value}"
      leader-elect-resource-namespace: "${u.L.leaderElectResourceNamespace.value}"
      leader-elect-retry-period: "${u.L.leaderElectRetryPeriod.value}"
      legacy-service-account-token-clean-up-period: "${u.L.legacyServiceAccountTokenCleanUpPeriod.value}"
      log-flush-frequency: "${u.L.logFlushFrequency.value}"
      log-json-info-buffer-size: "${u.L.logJsonInfoBufferSize.value}"
      log-json-split-stream: "${u.L.logJsonSplitStream.value}"
      log-text-info-buffer-size: "${u.L.logTextInfoBufferSize.value}"
      log-text-split-stream: "${u.L.logTextSplitStream.value}"
      logging-format: "${u.L.loggingFormat.value}"
      max-endpoints-per-slice: "${u.L.maxEndpointsPerSlice.value}"
      min-resync-period: "${u.L.minResyncPeriod.value}"
      mirroring-concurrent-service-endpoint-syncs: "${u.L.mirroringConcurrentServiceEndpointSyncs.value}"
      mirroring-endpointslice-updates-batch-period: "${u.L.mirroringEndpointsliceUpdatesBatchPeriod.value}"
      mirroring-max-endpoints-per-subset: "${u.L.mirroringMaxEndpointsPerSubset.value}"
      namespace-sync-period: "${u.L.namespaceSyncPeriod.value}"
      node-cidr-mask-size: "${u.L.nodeCidrMaskSize.value}"
      node-cidr-mask-size-ipv4: "${u.L.nodeCidrMaskSizeIpv4.value}"
      node-cidr-mask-size-ipv6: "${u.L.nodeCidrMaskSizeIpv6.value}"
      node-eviction-rate: "${u.L.nodeEvictionRate.value}"
      node-monitor-grace-period: "${u.L.nodeMonitorGracePeriod.value}"
      node-monitor-period: "${u.L.nodeMonitorPeriod.value}"
      node-startup-grace-period: "${u.L.nodeStartupGracePeriod.value}"
      node-sync-period: "${u.L.nodeSyncPeriod.value}"
      permit-address-sharing: "${u.L.permitAddressSharing.value}"
      permit-port-sharing: "${u.L.permitPortSharing.value}"
      profiling: "${u.L.profiling.value}"
      pv-recycler-increment-timeout-nfs: "${u.L.pvRecyclerIncrementTimeoutNfs.value}"
      pv-recycler-minimum-timeout-hostpath: "${u.L.pvRecyclerMinimumTimeoutHostpath.value}"
      pv-recycler-minimum-timeout-nfs: "${u.L.pvRecyclerMinimumTimeoutNfs.value}"
      pv-recycler-timeout-increment-hostpath: "${u.L.pvRecyclerTimeoutIncrementHostpath.value}"
      pvclaimbinder-sync-period: "${u.L.pvclaimbinderSyncPeriod.value}"
      requestheader-client-ca-file: "${u.L.requestheaderClientCaFile.value}"
      requestheader-extra-headers-prefix: "${u.L.requestheaderExtraHeadersPrefix.value}"
      requestheader-group-headers: "${u.L.requestheaderGroupHeaders.value}"
      requestheader-username-headers: "${u.L.requestheaderUsernameHeaders.value}"
      resource-quota-sync-period: "${u.L.resourceQuotaSyncPeriod.value}"
      root-ca-file: "${u.L.rootCaFile.value}"
      route-reconciliation-period: "${u.L.routeReconciliationPeriod.value}"
      secondary-node-eviction-rate: "${u.L.secondaryNodeEvictionRate.value}"
      secure-port: "${u.L.securePort.value}"
      service-account-private-key-file: "${u.L.serviceAccountPrivateKeyFile.value}"
      terminated-pod-gc-threshold: "${u.L.terminatedPodGcThreshold.value}"
      unhealthy-zone-threshold: "${u.L.unhealthyZoneThreshold.value}"
      use-service-account-credentials: "${u.L.useServiceAccountCredentials.value}"
      v: "${u.L.v.value}"
      version: "${u.L.version.value}"
      volume-host-allow-local-loopback: "${u.L.volumeHostAllowLocalLoopback.value}"
      # ЕСЛИ НУЖНО ПОДКЛЮЧИТЬ СЕРВЕРНЫЕ СЕРТИФИКАТЫ ДЛЯ KUBE-CONTROLLER-MANAGER
      # ОБРАТИТЕ ВНИМАНИЕ, ЧТО KUBEADM НЕ СОЗДАЕТ ДАННЫЕ СЕРТИФИКАТЫ
      # ТРЕБУЕТСЯ РАСКОМЕНТИРОВАТЬ
      # ->
      # tls-cert-file=${u.L.tlsCertFile.value}
      # tls-private-key-file=${u.L.tlsPrivateKeyFile.value}
      # Не указывать если значение "" или undefined
      # cluster-signing-kube-apiserver-client-cert-file: "${u.L.clusterSigningKubeApiserverClientCertFile.value}"
      # cluster-signing-kube-apiserver-client-key-file: "${u.L.clusterSigningKubeApiserverClientKeyFile.value}"
      # cluster-signing-kubelet-client-cert-file: "${u.L.clusterSigningKubeletClientCertFile.value}"
      # cluster-signing-kubelet-client-key-file: "${u.L.clusterSigningKubeletClientKeyFile.value}"
      # cluster-signing-kubelet-serving-cert-file: "${u.L.clusterSigningKubeletServingCertFile.value}"
      # cluster-signing-kubelet-serving-key-file: "${u.L.clusterSigningKubeletServingKeyFile.value}"
      # cluster-signing-legacy-unknown-cert-file: "${u.L.clusterSigningLegacyUnknownCertFile.value}"
      # cluster-signing-legacy-unknown-key-file: "${u.L.clusterSigningLegacyUnknownKeyFile.value}"
      # cluster-cidr: "${u.L.clusterCidr.value}"
      # cloud-config: "${u.L.cloudConfig.value}"
      # cert-dir: "${u.L.certDir.value}"
      # allow-metric-labels-manifest: "${u.L.allowMetricLabelsManifest.value}"
      # allow-metric-labels: "${u.L.allowMetricLabels.value}"
      # disabled-metrics: "${u.L.disabledMetrics.value}"
      # leader-migration-config: "${u.L.leaderMigrationConfig.value}"
      # master: "${u.L.master.value}"
      # pv-recycler-pod-template-filepath-hostpath: "${u.L.pvRecyclerPodTemplateFilepathHostpath.value}"
      # pv-recycler-pod-template-filepath-nfs: "${u.L.pvRecyclerPodTemplateFilepathNfs.value}"
      # service-cluster-ip-range: "${u.L.serviceClusterIpRange.value}"
      # show-hidden-metrics-for-version: "${u.L.showHiddenMetricsForVersion.value}"
      # tls-cipher-suites: "${u.L.tlsCipherSuites.value}"
      # tls-min-version: "${u.L.tlsMinVersion.value}"
      # tls-sni-cert-key: "${u.L.tlsSniCertKey.value}"
      # vmodule: "${u.L.vmodule.value}"
      # volume-host-cidr-denylist: "${u.L.volumeHostCidrDenylist.value}"
      # external-cloud-volume-plugin: "${u.L.externalCloudVolumePlugin.value}"
      # requestheader-allowed-names: "${u.L.requestheaderAllowedNames.value}"
    `}},d={data:{value:r.A`
      authentication-kubeconfig: "${i.w.authenticationKubeconfig.value}"
      authentication-skip-lookup: "${i.w.authenticationSkipLookup.value}"
      authentication-token-webhook-cache-ttl: "${i.w.authenticationTokenWebhookCacheTtl.value}"
      authentication-tolerate-lookup-failure: "${i.w.authenticationTolerateLookupFailure.value}"
      authorization-always-allow-paths: "${i.w.authorizationAlwaysAllowPaths.value}"
      authorization-kubeconfig: "${i.w.authorizationKubeconfig.value}"
      authorization-webhook-cache-authorized-ttl: "${i.w.authorizationWebhookCacheAuthorizedTtl.value}"
      authorization-webhook-cache-unauthorized-ttl: "${i.w.authorizationWebhookCacheUnauthorizedTtl.value}"
      bind-address: "${i.w.bindAddress.value}"
      client-ca-file: "${i.w.clientCaFile.value}"
      contention-profiling: "${i.w.contentionProfiling.value}"
      help: "${i.w.help.value}"
      http2-max-streams-per-connection: "${i.w.http2MaxStreamsPerConnection.value}"
      kube-api-burst: "${i.w.kubeApiBurst.value}"
      kube-api-content-type: "${i.w.kubeApiContentType.value}"
      kube-api-qps: "${i.w.kubeApiQps.value}"
      kubeconfig: "${i.w.kubeconfig.value}"
      leader-elect: "${i.w.leaderElect.value}"
      leader-elect-lease-duration: "${i.w.leaderElectLeaseDuration.value}"
      leader-elect-renew-deadline: "${i.w.leaderElectRenewDeadline.value}"
      leader-elect-resource-lock: "${i.w.leaderElectResourceLock.value}"
      leader-elect-resource-name: "${i.w.leaderElectResourceName.value}"
      leader-elect-resource-namespace: "${i.w.leaderElectResourceNamespace.value}"
      leader-elect-retry-period: "${i.w.leaderElectRetryPeriod.value}"
      log-flush-frequency: "${i.w.logFlushFrequency.value}"
      log-json-info-buffer-size: "${i.w.logJsonInfoBufferSize.value}"
      log-json-split-stream: "${i.w.logJsonSplitStream.value}"
      log-text-info-buffer-size: "${i.w.logTextInfoBufferSize.value}"
      log-text-split-stream: "${i.w.logTextSplitStream.value}"
      logging-format: "${i.w.loggingFormat.value}"
      permit-address-sharing: "${i.w.permitAddressSharing.value}"
      permit-port-sharing: "${i.w.permitPortSharing.value}"
      pod-max-in-unschedulable-pods-duration: "${i.w.podMaxInUnschedulablePodsDuration.value}"
      profiling: "${i.w.profiling.value}"
      requestheader-extra-headers-prefix: "${i.w.requestheaderExtraHeadersPrefix.value}"
      requestheader-group-headers: "${i.w.requestheaderGroupHeaders.value}"
      requestheader-username-headers: "${i.w.requestheaderUsernameHeaders.value}"
      secure-port: "${i.w.securePort.value}"
      v: "${i.w.v.value}"
      version: "${i.w.version.value}"
      # ЕСЛИ НУЖНО ПОДКЛЮЧИТЬ СЕРВЕРНЫЕ СЕРТИФИКАТЫ ДЛЯ KUBE-SCHEDULER
      # ОБРАТИТЕ ВНИМАНИЕ, ЧТО KUBEADM НЕ СОЗДАЕТ ДАННЫЕ СЕРТИФИКАТЫ
      # ТРЕБУЕТСЯ РАСКОМЕНТИРОВАТЬ
      # ->
      # tls-cert-file=${i.w.tlsCertFile.value}
      # tls-private-key-file=${i.w.tlsPrivateKeyFile.value}
      # <-
      # allow-metric-labels: "${i.w.allowMetricLabels.value}"
      # allow-metric-labels-manifest: "${i.w.allowMetricLabelsManifest.value}"
      # cert-dir: "${i.w.certDir.value}"
      # config: "${i.w.config.value}"
      # disabled-metrics: "${i.w.disabledMetrics.value}"
      # feature-gates: "${i.w.featureGates.value}"
      # master: "${i.w.master.value}"
      # requestheader-allowed-names: "${i.w.requestheaderAllowedNames.value}"
      # requestheader-client-ca-file: "${i.w.requestheaderClientCaFile.value}"
      # show-hidden-metrics-for-version: "${i.w.showHiddenMetricsForVersion.value}"
      # tls-cipher-suites: "${i.w.tlsCipherSuites.value}"
      # tls-min-version: "${i.w.tlsMinVersion.value}"
      # tls-sni-cert-key: "${i.w.tlsSniCertKey.value}"
      # vmodule: "${i.w.vmodule.value}"
      # write-config-to: "${i.w.writeConfigTo.value}"
    `}}},56223:(e,a,t)=>{t.d(a,{L:()=>u});var r=t(65742),l=t(285),o=t(44349);const u={etcdCafile:{value:`${r.$.etcdCA.crtPath}`},etcdCertfile:{value:`${r.$.kubernetesEtcdClient.crtPath}`},etcdKeyfile:{value:`${r.$.kubernetesEtcdClient.keyPath}`},certDir:{value:"/var/run/kubernetes"},kubeletClientCertificate:{value:`${r.$.kubernetesKubeletClient.crtPath}`},kubeletClientKey:{value:`${r.$.kubernetesKubeletClient.keyPath}`},clientCAFile:{value:`${r.$.kubernetesCA.crtPath}`},proxyClientCertFile:{value:`${r.$.kubernetesFrontProxyClient.crtPath}`},proxyClientKeyFile:{value:`${r.$.kubernetesFrontProxyClient.keyPath}`},tlsCertFile:{value:`${r.$.kubernetesServer.crtPath}`},tlsPrivateKeyFile:{value:`${r.$.kubernetesServer.keyPath}`},clientCaFile:{value:`${r.$.kubernetesCA.crtPath}`},serviceAccountKeyFile:{value:`${r.$.kubernetesSA.crtPath}`},requestheaderClientCaFile:{value:`${r.$.frontProxyCA.crtPath}`},serviceAccountSigningKeyFile:{value:`${r.$.kubernetesSA.keyPath}`},aggregatorRejectForwardingRedirect:{value:"true"},allowPrivileged:{value:"true"},anonymousAuth:{value:"true"},auditLogBatchThrottleEnable:{value:"false"},auditLogCompress:{value:"false"},auditLogTruncateEnabled:{value:"false"},auditWebhookBatchThrottleEnable:{value:"true"},auditWebhookTruncateEnabled:{value:"false"},contentionProfiling:{value:"false"},enableAggregatorRouting:{value:"true"},enableBootstrapTokenAuth:{value:"true"},enableGarbageCollector:{value:"true"},enableLogsHandler:{value:"true"},enablePriorityAndFairness:{value:"true"},encryptionProviderConfigAutomaticReload:{value:"false"},help:{value:"false"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},version:{value:"false"},watchCache:{value:"true"},logTextSplitStream:{value:"false"},shutdownSendRetryAfter:{value:"false"},logJsonSplitStream:{value:"false"},serviceAccountExtendTokenExpiration:{value:"true"},serviceAccountLookup:{value:"true"},apiserverCount:{value:"1"},auditLogBatchBufferSize:{value:"10000"},auditLogBatchMaxSize:{value:"1"},auditLogBatchThrottleBurst:{value:"0"},auditLogBatchThrottleQps:{value:"0"},auditLogMaxage:{value:"30"},auditLogMaxbackup:{value:"10"},auditLogMaxsize:{value:"1000"},auditLogTruncateMaxBatchSize:{value:"10485760"},auditLogTruncateMaxEventSize:{value:"102400"},auditWebhookBatchBufferSize:{value:"10000"},auditWebhookBatchMaxSize:{value:"400"},auditWebhookBatchThrottleBurst:{value:"15"},auditWebhookBatchThrottleQps:{value:"10"},auditWebhookTruncateMaxBatchSize:{value:"10485760"},auditWebhookTruncateMaxEventSize:{value:"102400"},defaultNotReadyTolerationSeconds:{value:"300"},defaultUnreachableTolerationSeconds:{value:"300"},defaultWatchCacheSize:{value:"100"},deleteCollectionWorkers:{value:"1"},kubernetesServiceNodePort:{value:"0"},leaseReuseDurationSeconds:{value:"60"},maxMutatingRequestsInflight:{value:"200"},maxRequestsInflight:{value:"400"},minRequestTimeout:{value:"1800"},goawayChance:{value:"0"},http2MaxStreamsPerConnection:{value:"0"},v:{value:"2"},logJsonInfoBufferSize:{value:"0"},logTextInfoBufferSize:{value:"0"},maxConnectionBytesPerSec:{value:"0"},kubeletPort:{value:`${l.h.kubeletServer.portNumber}`},securePort:{value:`${l.h.kubeAPIServer.portNumber}`},kubeletReadOnlyPort:{value:`${l.h.kubeletReadOnlyPort.portNumber}`},serviceNodePortRange:{value:"30000-32767"},etcdServers:{value:`https://127.0.0.1:${l.h.etcdServer.portNumber}`},serviceAccountIssuer:{value:`https://kubernetes.default.svc.${o.M.kubernetesClusterDomain.value}`},serviceClusterIpRange:{value:`${o.M.kubernetesServiceCIDR.value}`},auditWebhookInitialBackoff:{value:"10s"},auditWebhookBatchMaxWait:{value:"30s"},serviceAccountMaxTokenExpiration:{value:"0s"},shutdownWatchTerminationGracePeriod:{value:"0s"},shutdownDelayDuration:{value:"0s"},requestTimeout:{value:"1m0s"},eventTtl:{value:"1h0m0s"},livezGracePeriod:{value:"0s"},logFlushFrequency:{value:"5s"},kubeletTimeout:{value:"5s"},etcdCompactionInterval:{value:"5m0s"},etcdCountMetricPollPeriod:{value:"1m0s"},etcdDbMetricPollInterval:{value:"30s"},etcdHealthcheckTimeout:{value:"2s"},etcdReadycheckTimeout:{value:"2s"},authenticationTokenWebhookCacheTtl:{value:"2m0s"},authorizationWebhookCacheAuthorizedTtl:{value:"5m0s"},authorizationWebhookCacheUnauthorizedTtl:{value:"30s"},auditWebhookBatchInitialBackoff:{value:"10s"},auditLogBatchMaxWait:{value:"0s"},bindAddress:{value:"0.0.0.0"},cloudProviderGceL7lbSrcCidrs:{value:"130.211.0.0/22,35.191.0.0/16"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},apiAudiences:{value:"konnectivity-server"},loggingFormat:{value:"text"},auditLogFormat:{value:"json"},auditLogMode:{value:"batch"},auditWebhookMode:{value:"batch"},auditLogVersion:{value:"audit.k8s.io/v1"},auditWebhookVersion:{value:"audit.k8s.io/v1"},authenticationTokenWebhookVersion:{value:"v1beta1"},authorizationMode:{value:"Node,RBAC"},authorizationWebhookVersion:{value:"v1beta1"},cloudProvider:{value:"external"},enableAdmissionPlugins:{value:"NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,PodSecurity"},endpointReconcilerType:{value:"lease"},storageMediaType:{value:"application/vnd.kubernetes.protobuf"},etcdPrefix:{value:"/registry"},featureGates:{value:"RotateKubeletServerCertificate=true"},kubeletPreferredAddressTypes:{value:"InternalIP,ExternalIP,Hostname"},oidcSigningAlgs:{value:"RS256"},oidcUsernameClaim:{value:"sub"},requestheaderAllowedNames:{value:"front-proxy-client"},requestheaderExtraHeadersPrefix:{value:"X-Remote-Extra-"},requestheaderGroupHeaders:{value:"X-Remote-Group"},requestheaderUsernameHeaders:{value:"X-Remote-User"},runtimeConfig:{value:"api/all=true"},storageBackend:{value:"etcd3"},auditPolicyFile:{value:`${o.M.kubernetesAPIAuditPolicyPath.value}`},auditLogPath:{value:`${o.M.kubernetesAPIAuditLogPath.value}`},advertiseAddress:{value:""},admissionControl:{value:""},admissionControlConfigFile:{value:""},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},auditWebhookConfigFile:{value:""},authenticationConfig:{value:""},authenticationTokenWebhookConfigFile:{value:""},authorizationConfig:{value:""},authorizationPolicyFile:{value:""},authorizationWebhookConfigFile:{value:""},cloudConfig:{value:""},corsAllowedOrigins:{value:""},debugSocketPath:{value:""},disableAdmissionPlugins:{value:""},disabledMetrics:{value:""},egressSelectorConfigFile:{value:""},encryptionProviderConfig:{value:""},etcdServersOverrides:{value:""},externalHostname:{value:""},kubeletCertificateAuthority:{value:""},oidcCaFile:{value:""},oidcClientId:{value:""},oidcGroupsClaim:{value:""},oidcGroupsPrefix:{value:""},oidcIssuerUrl:{value:""},oidcRequiredClaim:{value:""},oidcUsernamePrefix:{value:""},peerAdvertiseIp:{value:""},peerAdvertisePort:{value:""},peerCaFile:{value:""},serviceAccountJwksUri:{value:""},showHiddenMetricsForVersion:{value:""},strictTransportSecurityDirectives:{value:""},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsSniCertKey:{value:""},tokenAuthFile:{value:""},tracingConfigFile:{value:""},vmodule:{value:""},watchCacheSizes:{value:""}}},65742:(e,a,t)=>{t.d(a,{$:()=>l});var r=t(44349);const l={etcdCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},kubernetesControllerManagerServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-server.conf`,keySize:"2048",cname:"system:kube-controller-manager-server"},etcdClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/sa.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"},kubernetesSchedulerServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/scheduler-server.conf`,keySize:"2048",cname:"system:kube-scheduler-server"}}},68741:(e,a,t)=>{t.d(a,{M:()=>r});const r={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.12"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},76331:(e,a,t)=>{t.d(a,{A:()=>L});var r=t(96540),l=t(34164),o=t(23104),u=t(56347),i=t(205),n=t(57485),s=t(31682),c=t(70679);function d(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function v(e){const{values:a,children:t}=e;return(0,r.useMemo)(()=>{const e=a??function(e){return d(e).map(({props:{value:e,label:a,attributes:t,default:r}})=>({value:e,label:a,attributes:t,default:r}))}(t);return function(e){const a=(0,s.XI)(e,(e,a)=>e.value===a.value);if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[a,t])}function h({value:e,tabValues:a}){return a.some(a=>a.value===e)}function p({queryString:e=!1,groupId:a}){const t=(0,u.W6)(),l=function({queryString:e=!1,groupId:a}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,n.aZ)(l),(0,r.useCallback)(e=>{if(!l)return;const a=new URLSearchParams(t.location.search);a.set(l,e),t.replace({...t.location,search:a.toString()})},[l,t])]}function b(e){const{defaultValue:a,queryString:t=!1,groupId:l}=e,o=v(e),[u,n]=(0,r.useState)(()=>function({defaultValue:e,tabValues:a}){if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const t=a.find(e=>e.default)??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:o})),[s,d]=p({queryString:t,groupId:l}),[b,k]=function({groupId:e}){const a=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,l]=(0,c.Dv)(a);return[t,(0,r.useCallback)(e=>{a&&l.set(e)},[a,l])]}({groupId:l}),m=(()=>{const e=s??b;return h({value:e,tabValues:o})?e:null})();(0,i.A)(()=>{m&&n(m)},[m]);return{selectedValue:u,selectValue:(0,r.useCallback)(e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);n(e),d(e),k(e)},[d,k,o]),tabValues:o}}var k=t(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function f({className:e,block:a,selectedValue:t,selectValue:r,tabValues:u}){const i=[],{blockElementScrollPositionUntilNextRender:n}=(0,o.a_)(),s=e=>{const a=e.currentTarget,l=i.indexOf(a),o=u[l].value;o!==t&&(n(a),r(o))},c=e=>{let a=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;a=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;a=i[t]??i[i.length-1];break}}a?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},e),children:u.map(({value:e,label:a,attributes:r})=>(0,g.jsx)("li",{role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>{i.push(e)},onKeyDown:c,onClick:s,...r,className:(0,l.A)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":t===e}),children:a??e},e))})}function $({lazy:e,children:a,selectedValue:t}){const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(e){const e=o.find(e=>e.props.value===t);return e?(0,r.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==t}))})}function y(e){const a=b(e);return(0,g.jsxs)("div",{className:(0,l.A)("tabs-container",m.tabList),children:[(0,g.jsx)(f,{...a,...e}),(0,g.jsx)($,{...a,...e})]})}function L(e){const a=(0,k.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(a))}},95538:(e,a,t)=>{t.d(a,{D:()=>o});var r=t(65742),l=t(285);const o={name:{value:"${FULL_HOST_NAME}"},initialCluster:{value:"${ETCD_INITIAL_CLUSTER}"},initialAdvertisePeerUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${l.h.etcdPeer.portNumber}`},initialClusterToken:{value:"etcd"},initialClusterState:{value:"new"},peerCertFile:{value:`${r.$.etcdPeer.crtPath}`},peerKeyFile:{value:`${r.$.etcdPeer.keyPath}`},peerTrustedCAFile:{value:`${r.$.etcdCA.crtPath}`},peerClientCertAuth:{value:"true"},certFile:{value:`${r.$.etcdServer.crtPath}`},keyFile:{value:`${r.$.etcdServer.keyPath}`},trustedCAFile:{value:`${r.$.etcdCA.crtPath}`},listenClientUrls:{value:`https://0.0.0.0:${l.h.etcdServer.portNumber}`},listenPeerUrls:{value:`https://0.0.0.0:${l.h.etcdPeer.portNumber}`},listenMetricsUrls:{value:`http://0.0.0.0:${l.h.etcdMetricServer.portNumber}`},dataDir:{value:"/var/lib/etcd"},quotaBackendBytes:{value:"10737418240"},clientCertAuth:{value:"true"},heartbeatInterval:{value:"250"},electionTimeout:{value:"1500"},maxSnapshots:{value:"10"},maxWals:{value:"10"},autoCompactionRetention:{value:"8"},metrics:{value:"extensive"},logger:{value:"zap"},advertiseClientUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${l.h.etcdServer.portNumber}`},workDir:{value:"/tmp/etcd"},dbPath:{value:"/var/lib/etcd/member/snap/db"},snapshotCount:{value:"10000"},experimentalInitialCorruptCheck:{value:"true"},experimentalWatchProgressNotifyInterval:{value:"5s"}}}}]);