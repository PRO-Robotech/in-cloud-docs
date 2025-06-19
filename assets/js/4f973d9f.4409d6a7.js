"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14048,20909,25703,51121,51296,69013,95362],{285:(e,t,a)=>{a.d(t,{h:()=>r});const r={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},9792:(e,t,a)=>{a.d(t,{A:()=>n});a(96540);var r=a(34164);const l={tabItem:"tabItem_Ymn6"};var o=a(74848);function n({children:e,hidden:t,className:a}){return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,a),hidden:t,children:e})}},12480:(e,t,a)=>{a.d(t,{Q:()=>u});var r=a(60513),l=a(56223),o=a(68741),n=a(51908),i=a(44349);const u={data:{value:r.A`
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
            ${n.Nu.data.value}
          peerCertSANs:
            - 127.0.0.1
          serverCertSANs:
            - 127.0.0.1
      apiServer:
        extraArgs:
          ${n.IL.data.value}
        extraVolumes:
        - name: "k8s-audit"
          hostPath: "/var/log/kubernetes/audit/"
          mountPath: "/var/log/kubernetes/audit/"
          readOnly: false
          pathType: DirectoryOrCreate
        certSANs:
          - "127.0.0.1"
          # TODO для доабвления внешнего FQDN в сертификаты кластера
          # - $\{INTERNAL_API}
        timeoutForControlPlane: 4m0s
      controllerManager:
        extraArgs:
          cluster-name: "$\{CLUSTER_NAME}"
          ${n.Uj.data.value}
      scheduler:
        extraArgs:
          ${n.hZ.data.value}
    `}}},21232:(e,t,a)=>{a.d(t,{L:()=>o});var r=a(65742),l=a(44349);const o={authenticationKubeconfig:{value:`${l.M.kubernetesBaseFolderPath.value}/controller-manager.conf`},authorizationKubeconfig:{value:`${l.M.kubernetesBaseFolderPath.value}/controller-manager.conf`},kubeconfig:{value:`${l.M.kubernetesBaseFolderPath.value}/controller-manager.conf`},clientCaFile:{value:`${r.$.kubernetesCA.crtPath}`},clusterSigningCertFile:{value:`${r.$.kubernetesCA.crtPath}`},clusterSigningKeyFile:{value:`${r.$.kubernetesCA.keyPath}`},requestheaderClientCaFile:{value:`${r.$.frontProxyCA.crtPath}`},rootCaFile:{value:`${r.$.kubernetesCA.crtPath}`},serviceAccountPrivateKeyFile:{value:`${l.M.kubernetesBaseFolderPath.value}/pki/sa.key`},clusterName:{value:"${CLUSTER_NAME}"},allocateNodeCidrs:{value:"false"},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},allowUntaggedCloud:{value:"false"},authenticationSkipLookup:{value:"false"},authenticationTokenWebhookCacheTtl:{value:"10s"},authenticationTolerateLookupFailure:{value:"false"},authorizationAlwaysAllowPaths:{value:"/healthz,/readyz,/livez,/metrics"},authorizationWebhookCacheAuthorizedTtl:{value:"10s"},authorizationWebhookCacheUnauthorizedTtl:{value:"10s"},bindAddress:{value:"0.0.0.0"},certDir:{value:""},cidrAllocatorType:{value:"RangeAllocator"},cloudConfig:{value:""},cloudProvider:{value:"external"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},clusterCidr:{value:""},clusterSigningDuration:{value:"720h0m0s"},clusterSigningKubeApiserverClientCertFile:{value:""},clusterSigningKubeApiserverClientKeyFile:{value:""},clusterSigningKubeletClientCertFile:{value:""},clusterSigningKubeletClientKeyFile:{value:""},clusterSigningKubeletServingCertFile:{value:""},clusterSigningKubeletServingKeyFile:{value:""},clusterSigningLegacyUnknownCertFile:{value:""},clusterSigningLegacyUnknownKeyFile:{value:""},concurrentCronJobSyncs:{value:"5"},concurrentDeploymentSyncs:{value:"5"},concurrentEndpointSyncs:{value:"5"},concurrentEphemeralvolumeSyncs:{value:"5"},concurrentGcSyncs:{value:"20"},concurrentHorizontalPodAutoscalerSyncs:{value:"5"},concurrentJobSyncs:{value:"5"},concurrentNamespaceSyncs:{value:"10"},concurrentRcSyncs:{value:"5"},concurrentReplicasetSyncs:{value:"20"},concurrentResourceQuotaSyncs:{value:"5"},concurrentServiceEndpointSyncs:{value:"5"},concurrentServiceSyncs:{value:"1"},concurrentServiceaccountTokenSyncs:{value:"5"},concurrentStatefulsetSyncs:{value:"5"},concurrentTtlAfterFinishedSyncs:{value:"5"},concurrentValidatingAdmissionPolicyStatusSyncs:{value:"5"},configureCloudRoutes:{value:"true"},contentionProfiling:{value:"false"},controllerStartInterval:{value:"0s"},controllers:{value:"*,bootstrapsigner,tokencleaner"},disableAttachDetachReconcileSync:{value:"false"},disableForceDetachOnTimeout:{value:"false"},disabledMetrics:{value:""},enableDynamicProvisioning:{value:"true"},enableGarbageCollector:{value:"true"},enableHostpathProvisioner:{value:"false"},enableLeaderMigration:{value:"false"},endpointUpdatesBatchPeriod:{value:"0s"},endpointsliceUpdatesBatchPeriod:{value:"0s"},externalCloudVolumePlugin:{value:""},featureGates:{value:"RotateKubeletServerCertificate=true"},flexVolumePluginDir:{value:"/usr/libexec/kubernetes/kubelet-plugins/volume/exec/"},help:{value:"false"},horizontalPodAutoscalerCpuInitializationPeriod:{value:"5m0s"},horizontalPodAutoscalerDownscaleDelay:{value:"5m0s"},horizontalPodAutoscalerDownscaleStabilization:{value:"5m0s"},horizontalPodAutoscalerInitialReadinessDelay:{value:"30s"},horizontalPodAutoscalerSyncPeriod:{value:"30s"},horizontalPodAutoscalerTolerance:{value:"0.1"},horizontalPodAutoscalerUpscaleDelay:{value:"3m0s"},http2MaxStreamsPerConnection:{value:"0"},kubeApiBurst:{value:"120"},kubeApiContentType:{value:"application/vnd.kubernetes.protobuf"},kubeApiQps:{value:"100"},largeClusterSizeThreshold:{value:"50"},leaderElect:{value:"true"},leaderElectLeaseDuration:{value:"15s"},leaderElectRenewDeadline:{value:"10s"},leaderElectResourceLock:{value:"leases"},leaderElectResourceName:{value:"kube-controller-manager"},leaderElectResourceNamespace:{value:"kube-system"},leaderElectRetryPeriod:{value:"2s"},leaderMigrationConfig:{value:""},legacyServiceAccountTokenCleanUpPeriod:{value:"8760h0m0s"},logFlushFrequency:{value:"5s"},logJsonInfoBufferSize:{value:"0"},logJsonSplitStream:{value:"false"},logTextInfoBufferSize:{value:"0"},logTextSplitStream:{value:"false"},loggingFormat:{value:"text"},attachDetachReconcileSyncPeriod:{value:"1m0s"},master:{value:""},maxEndpointsPerSlice:{value:"100"},minResyncPeriod:{value:"12h0m0s"},mirroringConcurrentServiceEndpointSyncs:{value:"5"},mirroringEndpointsliceUpdatesBatchPeriod:{value:"0s"},mirroringMaxEndpointsPerSubset:{value:"1000"},namespaceSyncPeriod:{value:"2m0s"},nodeCidrMaskSize:{value:"0"},nodeCidrMaskSizeIpv4:{value:"0"},nodeCidrMaskSizeIpv6:{value:"0"},nodeEvictionRate:{value:"0.1"},nodeMonitorGracePeriod:{value:"40s"},nodeMonitorPeriod:{value:"5s"},nodeStartupGracePeriod:{value:"10s"},nodeSyncPeriod:{value:"0s"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},pvRecyclerIncrementTimeoutNfs:{value:"30"},pvRecyclerMinimumTimeoutHostpath:{value:"60"},pvRecyclerMinimumTimeoutNfs:{value:"300"},pvRecyclerPodTemplateFilepathHostpath:{value:""},pvRecyclerPodTemplateFilepathNfs:{value:""},pvRecyclerTimeoutIncrementHostpath:{value:"30"},pvclaimbinderSyncPeriod:{value:"15s"},requestheaderAllowedNames:{value:""},requestheaderExtraHeadersPrefix:{value:"x-remote-extra-"},requestheaderGroupHeaders:{value:"x-remote-group"},requestheaderUsernameHeaders:{value:"x-remote-user"},resourceQuotaSyncPeriod:{value:"5m0s"},routeReconciliationPeriod:{value:"10s"},secondaryNodeEvictionRate:{value:"0.01"},securePort:{value:"10257"},serviceClusterIpRange:{value:""},showHiddenMetricsForVersion:{value:""},terminatedPodGcThreshold:{value:"0"},tlsCertFile:{value:""},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsPrivateKeyFile:{value:""},tlsSniCertKey:{value:""},unhealthyZoneThreshold:{value:"0.55"},useServiceAccountCredentials:{value:"true"},v:{value:"2"},version:{value:"false"},vmodule:{value:""},volumeHostAllowLocalLoopback:{value:"true"},volumeHostCidrDenylist:{value:""}}},21502:(e,t,a)=>{a.d(t,{w:()=>o});var r=a(285),l=a(44349);const o={authenticationKubeconfig:{value:`${l.M.kubernetesBaseFolderPath.value}/scheduler.conf`},authenticationSkipLookup:{value:"false"},authenticationTokenWebhookCacheTtl:{value:"10s"},authenticationTolerateLookupFailure:{value:"true"},authorizationAlwaysAllowPaths:{value:"/healthz,/readyz,/livez,/metrics"},authorizationKubeconfig:{value:`${l.M.kubernetesBaseFolderPath.value}/scheduler.conf`},authorizationWebhookCacheAuthorizedTtl:{value:"10s"},authorizationWebhookCacheUnauthorizedTtl:{value:"10s"},bindAddress:{value:"0.0.0.0"},contentionProfiling:{value:"true"},help:{value:"false"},http2MaxStreamsPerConnection:{value:"0"},kubeApiBurst:{value:"100"},kubeApiContentType:{value:"application/vnd.kubernetes.protobuf"},kubeApiQps:{value:"50"},kubeconfig:{value:`${l.M.kubernetesBaseFolderPath.value}/scheduler.conf`},leaderElect:{value:"true"},leaderElectLeaseDuration:{value:"15s"},leaderElectRenewDeadline:{value:"10s"},leaderElectResourceLock:{value:"leases"},leaderElectResourceName:{value:"kube-scheduler"},leaderElectResourceNamespace:{value:"kube-system"},leaderElectRetryPeriod:{value:"2s"},logFlushFrequency:{value:"5s"},logJsonInfoBufferSize:{value:"0"},logJsonSplitStream:{value:"false"},logTextInfoBufferSize:{value:"0"},logTextSplitStream:{value:"false"},loggingFormat:{value:"text"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},podMaxInUnschedulablePodsDuration:{value:"5m0s"},profiling:{value:"true"},requestheaderExtraHeadersPrefix:{value:"[x-remote-extra-]"},requestheaderGroupHeaders:{value:"[x-remote-group]"},requestheaderUsernameHeaders:{value:"[x-remote-user]"},securePort:{value:`${r.h.kubeScheduler.portNumber}`},v:{value:"2"},version:{value:"false"},allowMetricLabels:{value:"[]"},disabledMetrics:{value:"[]"},requestheaderAllowedNames:{value:"[]"},tlsCipherSuites:{value:"[]"},tlsSniCertKey:{value:"[]"},allowMetricLabelsManifest:{value:""},certDir:{value:""},clientCaFile:{value:""},config:{value:""},featureGates:{value:""},vmodule:{value:""},writeConfigTo:{value:""},tlsMinVersion:{value:""},tlsPrivateKeyFile:{value:""},showHiddenMetricsForVersion:{value:""},tlsCertFile:{value:""},requestheaderClientCaFile:{value:""},master:{value:""}}},50455:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/initMaster","title":"initMaster","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/setup-environments/initMaster.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments","slug":"/tech-docs/kubernetes/setup-environments/initMaster","permalink":"/tech-docs/kubernetes/setup-environments/initMaster","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=a(74848),o=a(28453),n=a(9792),i=a(76331),u=a(60513),s=a(68747);const c={},d=void 0,v={},h=[];function p(e){return(0,l.jsx)(i.A,{children:(0,l.jsx)(n.A,{value:"master-1",children:(0,l.jsx)(s.A,{language:"bash",children:u.A`
        export HOST_NAME=master-1
      `})})})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(p,{...e})}):p()}},51079:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>k,default:()=>y,frontMatter:()=>m,metadata:()=>r,toc:()=>f});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/configs/initConfig","title":"initConfig","description":"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/configs/initConfig.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/configs","slug":"/tech-docs/kubernetes/components/kubeadm/configs/initConfig","permalink":"/tech-docs/kubernetes/components/kubeadm/configs/initConfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=a(74848),o=a(28453),n=a(60513),i=a(68747),u=a(95538),s=a(56223),c=a(44349),d=a(68741),v=a(12480),h=a(51908),p=a(9792),b=a(76331);const m={},k=void 0,g={},f=[];function $(e){const t={admonition:"admonition",code:"code",p:"p",...(0,o.R)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(a,{children:[(0,l.jsx)("summary",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430"}),(0,l.jsxs)(b.A,{groupId:"install-type",children:[(0,l.jsxs)(p.A,{value:"Bash",children:[(0,l.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,l.jsx)(i.A,{language:"bash",children:n.A`
        export CLUSTER_NAME='${c.M.clusterName.value}'
        export BASE_DOMAIN='${c.M.kubernetesBaseDomain.value}'
        export FULL_HOST_NAME=${c.M.virtualMachineFullName.value}
        export INTERNAL_API=api.${c.M.kubernetesClusterExternalDomain.value}
        export MACHINE_LOCAL_ADDRESS=${c.M.virtualMachineLocalAddress.value}
        export ETCD_INITIAL_CLUSTER="$\{FULL_HOST_NAME}=${u.D.initialAdvertisePeerUrls.value}"
        export CERTIFICATE_UPLOAD_KEY=0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
      `}),(0,l.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430"}),(0,l.jsx)(t.admonition,{type:"warning",children:(0,l.jsxs)(t.p,{children:["\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u044d\u0442\u0430\u043f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 ",(0,l.jsx)(t.code,{children:"addons"})," \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f."]})}),(0,l.jsx)(i.A,{children:n.A`
        cat <<EOF > ${c.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
        ---
        apiVersion: kubeadm.k8s.io/v1beta3
        kind: InitConfiguration
        skipPhases:
          - addon
        bootstrapTokens:
          - token: "fjt9ex.lwzqgdlvoxtqk4yw"
            description: "kubeadm bootstrap token"
            ttl: "24h"
        certificateKey: $\{CERTIFICATE_UPLOAD_KEY}
        nodeRegistration:
          imagePullPolicy: IfNotPresent
          taints: null
          kubeletExtraArgs:
            # -> Включить, если управляете состоянием через Cloud Controller Manager
            # cloud-provider: external
            config: "${c.M.kuberneteKubeletFolderPath.value}/config-custom.yaml"
            cluster-domain: ${c.M.kubernetesClusterDomain.value}
            cluster-dns: "${c.M.kubernetesDNSAddress.value}"
          # name: '$\{FULL_HOST_NAME}'
          ignorePreflightErrors:
            # > При поэтапной сборке кластера, а не выполнении единой команды,
            # > необходимо указать исключения в параметре ignorePreflightErrors,
            # > чтобы команда kubeadm init phase preflight выполнялась без препятствий.
            # > Для этого в nodeRegistration добавляются следующие исключения:
            - FileAvailable--etc-kubernetes-manifests-kube-apiserver.yaml
            - FileAvailable--etc-kubernetes-manifests-kube-controller-manager.yaml
            - FileAvailable--etc-kubernetes-manifests-kube-scheduler.yaml
            - FileAvailable--etc-kubernetes-manifests-etcd.yaml
        ---
        ${v.Q.data.value}
        EOF
      `})]}),(0,l.jsx)(p.A,{value:"Cloud-init",children:(0,l.jsx)(i.A,{children:n.A`
        - path: ${c.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
          owner: root:root
          permissions: '0644'
          content: |
            ---
            apiVersion: kubeadm.k8s.io/v1beta3
            kind: InitConfiguration
            skipPhases:
              - addon
            bootstrapTokens:
              - token: "fjt9ex.lwzqgdlvoxtqk4yw"
                description: "kubeadm bootstrap token"
                ttl: "24h"
            certificateKey: 0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
            nodeRegistration:
              imagePullPolicy: IfNotPresent
              taints: null
              kubeletExtraArgs:
                cloud-provider: external
                config: "${c.M.kuberneteKubeletFolderPath.value}/config-custom.yaml"
                cluster-domain: cluster.local
                cluster-dns: "${c.M.kubernetesDNSAddress.value}"

              # TODO тут нужно подумать, нужно ли определение имени узла при инициализации УК
              # name: {{ local_hostname }}

              ignorePreflightErrors:
                # > При поэтапной сборке кластера, а не выполнении единой команды,
                # > необходимо указать исключения в параметре ignorePreflightErrors,
                # > чтобы команда kubeadm init phase preflight выполнялась без препятствий.
                # > Для этого в nodeRegistration добавляются следующие исключения:
                - FileAvailable--etc-kubernetes-manifests-kube-apiserver.yaml
                - FileAvailable--etc-kubernetes-manifests-kube-controller-manager.yaml
                - FileAvailable--etc-kubernetes-manifests-kube-scheduler.yaml
                - FileAvailable--etc-kubernetes-manifests-etcd.yaml
            ---
            apiVersion: kubeadm.k8s.io/v1beta3
            kind: ClusterConfiguration

            clusterName: "${c.M.clusterName.value}"
            # TODO нужно указывать VIP LoadBalancer
            controlPlaneEndpoint: {{ local_hostname }}:${s.L.securePort.value}

            imageRepository: "${c.M.baseDockerRegistry.value}"

            networking:
              serviceSubnet: ${c.M.kubernetesServiceCIDR.value}
              dnsDomain: cluster.local
            kubernetesVersion: ${d.M.kubernetes.value}

            dns: {}
            etcd:
              local:
                imageRepository: "${c.M.baseDockerRegistry.value}"
                dataDir: "/var/lib/etcd"
                extraArgs:
                  ${h.Nu.data.value}
                peerCertSANs:
                  - 127.0.0.1
                serverCertSANs:
                  - 127.0.0.1

            apiServer:
              extraArgs:
                ${h.IL.data.value}

              extraVolumes:
              - name: "k8s-audit"
                hostPath: "/var/log/kubernetes/audit/"
                mountPath: "/var/log/kubernetes/audit/"
                pathType: DirectoryOrCreate
              certSANs:
                - "127.0.0.1"
              timeoutForControlPlane: 4m0s

            controllerManager:
              extraArgs:
                cluster-name: "${c.M.clusterName.value}"
                ${h.Uj.data.value}

            scheduler:
              extraArgs:
                ${h.hZ.data.value}
      `})})]})]})}function y(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)($,{...e})}):$(e)}},51908:(e,t,a)=>{a.d(t,{IL:()=>s,Nu:()=>u,Uj:()=>c,hZ:()=>d});var r=a(60513),l=a(95538),o=a(56223),n=a(21232),i=a(21502);const u={data:{value:r.A`
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
      allocate-node-cidrs: "${n.L.allocateNodeCidrs.value}"
      allow-untagged-cloud: "${n.L.allowUntaggedCloud.value}"
      attach-detach-reconcile-sync-period: "${n.L.attachDetachReconcileSyncPeriod.value}"
      authentication-kubeconfig: "${n.L.authenticationKubeconfig.value}"
      authentication-skip-lookup: "${n.L.authenticationSkipLookup.value}"
      authentication-token-webhook-cache-ttl: "${n.L.authenticationTokenWebhookCacheTtl.value}"
      authentication-tolerate-lookup-failure: "${n.L.authenticationTolerateLookupFailure.value}"
      authorization-always-allow-paths: "${n.L.authorizationAlwaysAllowPaths.value}"
      authorization-kubeconfig: "${n.L.authorizationKubeconfig.value}"
      authorization-webhook-cache-authorized-ttl: "${n.L.authorizationWebhookCacheAuthorizedTtl.value}"
      authorization-webhook-cache-unauthorized-ttl: "${n.L.authorizationWebhookCacheUnauthorizedTtl.value}"
      bind-address: "${n.L.bindAddress.value}"
      cidr-allocator-type: "${n.L.cidrAllocatorType.value}"
      client-ca-file: "${n.L.clientCaFile.value}"
      # -> Включить, если управляете состоянием через Cloud Controller Manager
      # cloud-provider: "${n.L.cloudProvider.value}"
      cloud-provider-gce-lb-src-cidrs: "${n.L.cloudProviderGceLbSrcCidrs.value}"
      cluster-signing-cert-file: "${n.L.clusterSigningCertFile.value}"
      cluster-signing-duration: "${n.L.clusterSigningDuration.value}"
      cluster-signing-key-file: "${n.L.clusterSigningKeyFile.value}"
      concurrent-cron-job-syncs: "${n.L.concurrentCronJobSyncs.value}"
      concurrent-deployment-syncs: "${n.L.concurrentDeploymentSyncs.value}"
      concurrent-endpoint-syncs: "${n.L.concurrentEndpointSyncs.value}"
      concurrent-ephemeralvolume-syncs: "${n.L.concurrentEphemeralvolumeSyncs.value}"
      concurrent-gc-syncs: "${n.L.concurrentGcSyncs.value}"
      concurrent-horizontal-pod-autoscaler-syncs: "${n.L.concurrentHorizontalPodAutoscalerSyncs.value}"
      concurrent-job-syncs: "${n.L.concurrentJobSyncs.value}"
      concurrent-namespace-syncs: "${n.L.concurrentNamespaceSyncs.value}"
      concurrent-rc-syncs: "${n.L.concurrentRcSyncs.value}"
      concurrent-replicaset-syncs: "${n.L.concurrentReplicasetSyncs.value}"
      concurrent-resource-quota-syncs: "${n.L.concurrentResourceQuotaSyncs.value}"
      concurrent-service-endpoint-syncs: "${n.L.concurrentServiceEndpointSyncs.value}"
      concurrent-service-syncs: "${n.L.concurrentServiceSyncs.value}"
      concurrent-serviceaccount-token-syncs: "${n.L.concurrentServiceaccountTokenSyncs.value}"
      concurrent-statefulset-syncs: "${n.L.concurrentStatefulsetSyncs.value}"
      concurrent-ttl-after-finished-syncs: "${n.L.concurrentTtlAfterFinishedSyncs.value}"
      concurrent-validating-admission-policy-status-syncs: "${n.L.concurrentValidatingAdmissionPolicyStatusSyncs.value}"
      configure-cloud-routes: "${n.L.configureCloudRoutes.value}"
      contention-profiling: "${n.L.contentionProfiling.value}"
      controller-start-interval: "${n.L.controllerStartInterval.value}"
      controllers: "${n.L.controllers.value}"
      disable-attach-detach-reconcile-sync: "${n.L.disableAttachDetachReconcileSync.value}"
      disable-force-detach-on-timeout: "${n.L.disableForceDetachOnTimeout.value}"
      enable-dynamic-provisioning: "${n.L.enableDynamicProvisioning.value}"
      enable-garbage-collector: "${n.L.enableGarbageCollector.value}"
      enable-hostpath-provisioner: "${n.L.enableHostpathProvisioner.value}"
      enable-leader-migration: "${n.L.enableLeaderMigration.value}"
      endpoint-updates-batch-period: "${n.L.endpointUpdatesBatchPeriod.value}"
      endpointslice-updates-batch-period: "${n.L.endpointsliceUpdatesBatchPeriod.value}"
      feature-gates: "${n.L.featureGates.value}"
      flex-volume-plugin-dir: "${n.L.flexVolumePluginDir.value}"
      help: "${n.L.help.value}"
      horizontal-pod-autoscaler-cpu-initialization-period: "${n.L.horizontalPodAutoscalerCpuInitializationPeriod.value}"
      horizontal-pod-autoscaler-downscale-delay: "${n.L.horizontalPodAutoscalerDownscaleDelay.value}"
      horizontal-pod-autoscaler-downscale-stabilization: "${n.L.horizontalPodAutoscalerDownscaleStabilization.value}"
      horizontal-pod-autoscaler-initial-readiness-delay: "${n.L.horizontalPodAutoscalerInitialReadinessDelay.value}"
      horizontal-pod-autoscaler-sync-period: "${n.L.horizontalPodAutoscalerSyncPeriod.value}"
      horizontal-pod-autoscaler-tolerance: "${n.L.horizontalPodAutoscalerTolerance.value}"
      horizontal-pod-autoscaler-upscale-delay: "${n.L.horizontalPodAutoscalerUpscaleDelay.value}"
      http2-max-streams-per-connection: "${n.L.http2MaxStreamsPerConnection.value}"
      kube-api-burst: "${n.L.kubeApiBurst.value}"
      kube-api-content-type: "${n.L.kubeApiContentType.value}"
      kube-api-qps: "${n.L.kubeApiQps.value}"
      kubeconfig: "${n.L.kubeconfig.value}"
      large-cluster-size-threshold: "${n.L.largeClusterSizeThreshold.value}"
      leader-elect: "${n.L.leaderElect.value}"
      leader-elect-lease-duration: "${n.L.leaderElectLeaseDuration.value}"
      leader-elect-renew-deadline: "${n.L.leaderElectRenewDeadline.value}"
      leader-elect-resource-lock: "${n.L.leaderElectResourceLock.value}"
      leader-elect-resource-name: "${n.L.leaderElectResourceName.value}"
      leader-elect-resource-namespace: "${n.L.leaderElectResourceNamespace.value}"
      leader-elect-retry-period: "${n.L.leaderElectRetryPeriod.value}"
      legacy-service-account-token-clean-up-period: "${n.L.legacyServiceAccountTokenCleanUpPeriod.value}"
      log-flush-frequency: "${n.L.logFlushFrequency.value}"
      log-json-info-buffer-size: "${n.L.logJsonInfoBufferSize.value}"
      log-json-split-stream: "${n.L.logJsonSplitStream.value}"
      log-text-info-buffer-size: "${n.L.logTextInfoBufferSize.value}"
      log-text-split-stream: "${n.L.logTextSplitStream.value}"
      logging-format: "${n.L.loggingFormat.value}"
      max-endpoints-per-slice: "${n.L.maxEndpointsPerSlice.value}"
      min-resync-period: "${n.L.minResyncPeriod.value}"
      mirroring-concurrent-service-endpoint-syncs: "${n.L.mirroringConcurrentServiceEndpointSyncs.value}"
      mirroring-endpointslice-updates-batch-period: "${n.L.mirroringEndpointsliceUpdatesBatchPeriod.value}"
      mirroring-max-endpoints-per-subset: "${n.L.mirroringMaxEndpointsPerSubset.value}"
      namespace-sync-period: "${n.L.namespaceSyncPeriod.value}"
      node-cidr-mask-size: "${n.L.nodeCidrMaskSize.value}"
      node-cidr-mask-size-ipv4: "${n.L.nodeCidrMaskSizeIpv4.value}"
      node-cidr-mask-size-ipv6: "${n.L.nodeCidrMaskSizeIpv6.value}"
      node-eviction-rate: "${n.L.nodeEvictionRate.value}"
      node-monitor-grace-period: "${n.L.nodeMonitorGracePeriod.value}"
      node-monitor-period: "${n.L.nodeMonitorPeriod.value}"
      node-startup-grace-period: "${n.L.nodeStartupGracePeriod.value}"
      node-sync-period: "${n.L.nodeSyncPeriod.value}"
      permit-address-sharing: "${n.L.permitAddressSharing.value}"
      permit-port-sharing: "${n.L.permitPortSharing.value}"
      profiling: "${n.L.profiling.value}"
      pv-recycler-increment-timeout-nfs: "${n.L.pvRecyclerIncrementTimeoutNfs.value}"
      pv-recycler-minimum-timeout-hostpath: "${n.L.pvRecyclerMinimumTimeoutHostpath.value}"
      pv-recycler-minimum-timeout-nfs: "${n.L.pvRecyclerMinimumTimeoutNfs.value}"
      pv-recycler-timeout-increment-hostpath: "${n.L.pvRecyclerTimeoutIncrementHostpath.value}"
      pvclaimbinder-sync-period: "${n.L.pvclaimbinderSyncPeriod.value}"
      requestheader-client-ca-file: "${n.L.requestheaderClientCaFile.value}"
      requestheader-extra-headers-prefix: "${n.L.requestheaderExtraHeadersPrefix.value}"
      requestheader-group-headers: "${n.L.requestheaderGroupHeaders.value}"
      requestheader-username-headers: "${n.L.requestheaderUsernameHeaders.value}"
      resource-quota-sync-period: "${n.L.resourceQuotaSyncPeriod.value}"
      root-ca-file: "${n.L.rootCaFile.value}"
      route-reconciliation-period: "${n.L.routeReconciliationPeriod.value}"
      secondary-node-eviction-rate: "${n.L.secondaryNodeEvictionRate.value}"
      secure-port: "${n.L.securePort.value}"
      service-account-private-key-file: "${n.L.serviceAccountPrivateKeyFile.value}"
      terminated-pod-gc-threshold: "${n.L.terminatedPodGcThreshold.value}"
      unhealthy-zone-threshold: "${n.L.unhealthyZoneThreshold.value}"
      use-service-account-credentials: "${n.L.useServiceAccountCredentials.value}"
      v: "${n.L.v.value}"
      version: "${n.L.version.value}"
      volume-host-allow-local-loopback: "${n.L.volumeHostAllowLocalLoopback.value}"
      # Не указывать если значение "" или undefined
      # cluster-signing-kube-apiserver-client-cert-file: "${n.L.clusterSigningKubeApiserverClientCertFile.value}"
      # cluster-signing-kube-apiserver-client-key-file: "${n.L.clusterSigningKubeApiserverClientKeyFile.value}"
      # cluster-signing-kubelet-client-cert-file: "${n.L.clusterSigningKubeletClientCertFile.value}"
      # cluster-signing-kubelet-client-key-file: "${n.L.clusterSigningKubeletClientKeyFile.value}"
      # cluster-signing-kubelet-serving-cert-file: "${n.L.clusterSigningKubeletServingCertFile.value}"
      # cluster-signing-kubelet-serving-key-file: "${n.L.clusterSigningKubeletServingKeyFile.value}"
      # cluster-signing-legacy-unknown-cert-file: "${n.L.clusterSigningLegacyUnknownCertFile.value}"
      # cluster-signing-legacy-unknown-key-file: "${n.L.clusterSigningLegacyUnknownKeyFile.value}"
      # cluster-cidr: "${n.L.clusterCidr.value}"
      # cloud-config: "${n.L.cloudConfig.value}"
      # cert-dir: "${n.L.certDir.value}"
      # allow-metric-labels-manifest: "${n.L.allowMetricLabelsManifest.value}"
      # allow-metric-labels: "${n.L.allowMetricLabels.value}"
      # disabled-metrics: "${n.L.disabledMetrics.value}"
      # leader-migration-config: "${n.L.leaderMigrationConfig.value}"
      # master: "${n.L.master.value}"
      # pv-recycler-pod-template-filepath-hostpath: "${n.L.pvRecyclerPodTemplateFilepathHostpath.value}"
      # pv-recycler-pod-template-filepath-nfs: "${n.L.pvRecyclerPodTemplateFilepathNfs.value}"
      # service-cluster-ip-range: "${n.L.serviceClusterIpRange.value}"
      # show-hidden-metrics-for-version: "${n.L.showHiddenMetricsForVersion.value}"
      # tls-cert-file: "${n.L.tlsCertFile.value}"
      # tls-cipher-suites: "${n.L.tlsCipherSuites.value}"
      # tls-min-version: "${n.L.tlsMinVersion.value}"
      # tls-private-key-file: "${n.L.tlsPrivateKeyFile.value}"
      # tls-sni-cert-key: "${n.L.tlsSniCertKey.value}"
      # vmodule: "${n.L.vmodule.value}"
      # volume-host-cidr-denylist: "${n.L.volumeHostCidrDenylist.value}"
      # external-cloud-volume-plugin: "${n.L.externalCloudVolumePlugin.value}"
      # requestheader-allowed-names: "${n.L.requestheaderAllowedNames.value}"
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
      # tls-cert-file: "${i.w.tlsCertFile.value}"
      # tls-cipher-suites: "${i.w.tlsCipherSuites.value}"
      # tls-min-version: "${i.w.tlsMinVersion.value}"
      # tls-private-key-file: "${i.w.tlsPrivateKeyFile.value}"
      # tls-sni-cert-key: "${i.w.tlsSniCertKey.value}"
      # vmodule: "${i.w.vmodule.value}"
      # write-config-to: "${i.w.writeConfigTo.value}"
    `}}},56153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/secondaryMasters","title":"secondaryMasters","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/setup-environments/secondaryMasters.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments","slug":"/tech-docs/kubernetes/setup-environments/secondaryMasters","permalink":"/tech-docs/kubernetes/setup-environments/secondaryMasters","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=a(74848),o=a(28453),n=a(9792),i=a(76331),u=a(60513),s=a(68747);const c={},d=void 0,v={},h=[];function p(e){return(0,l.jsxs)(i.A,{children:[(0,l.jsx)(n.A,{value:"master-2",children:(0,l.jsx)(s.A,{language:"bash",children:u.A`
        export HOST_NAME=master-2
      `})}),(0,l.jsx)(n.A,{value:"master-3",children:(0,l.jsx)(s.A,{language:"bash",children:u.A`
        export HOST_NAME=master-3
      `})})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(p,{...e})}):p()}},56223:(e,t,a)=>{a.d(t,{L:()=>n});var r=a(65742),l=a(285),o=a(44349);const n={etcdCafile:{value:`${r.$.etcdCA.crtPath}`},etcdCertfile:{value:`${r.$.kubernetesEtcdClient.crtPath}`},etcdKeyfile:{value:`${r.$.kubernetesEtcdClient.keyPath}`},certDir:{value:"/var/run/kubernetes"},kubeletClientCertificate:{value:`${r.$.kubernetesKubeletClient.crtPath}`},kubeletClientKey:{value:`${r.$.kubernetesKubeletClient.keyPath}`},clientCAFile:{value:`${r.$.kubernetesCA.crtPath}`},proxyClientCertFile:{value:`${r.$.kubernetesFrontProxyClient.crtPath}`},proxyClientKeyFile:{value:`${r.$.kubernetesFrontProxyClient.keyPath}`},tlsCertFile:{value:`${r.$.kubernetesServer.crtPath}`},tlsPrivateKeyFile:{value:`${r.$.kubernetesServer.keyPath}`},clientCaFile:{value:`${r.$.kubernetesCA.crtPath}`},serviceAccountKeyFile:{value:`${r.$.kubernetesSA.crtPath}`},requestheaderClientCaFile:{value:`${r.$.frontProxyCA.crtPath}`},serviceAccountSigningKeyFile:{value:`${r.$.kubernetesSA.keyPath}`},aggregatorRejectForwardingRedirect:{value:"true"},allowPrivileged:{value:"true"},anonymousAuth:{value:"true"},auditLogBatchThrottleEnable:{value:"false"},auditLogCompress:{value:"false"},auditLogTruncateEnabled:{value:"false"},auditWebhookBatchThrottleEnable:{value:"true"},auditWebhookTruncateEnabled:{value:"false"},contentionProfiling:{value:"false"},enableAggregatorRouting:{value:"true"},enableBootstrapTokenAuth:{value:"true"},enableGarbageCollector:{value:"true"},enableLogsHandler:{value:"true"},enablePriorityAndFairness:{value:"true"},encryptionProviderConfigAutomaticReload:{value:"false"},help:{value:"false"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},version:{value:"false"},watchCache:{value:"true"},logTextSplitStream:{value:"false"},shutdownSendRetryAfter:{value:"false"},logJsonSplitStream:{value:"false"},serviceAccountExtendTokenExpiration:{value:"true"},serviceAccountLookup:{value:"true"},apiserverCount:{value:"1"},auditLogBatchBufferSize:{value:"10000"},auditLogBatchMaxSize:{value:"1"},auditLogBatchThrottleBurst:{value:"0"},auditLogBatchThrottleQps:{value:"0"},auditLogMaxage:{value:"30"},auditLogMaxbackup:{value:"10"},auditLogMaxsize:{value:"1000"},auditLogTruncateMaxBatchSize:{value:"10485760"},auditLogTruncateMaxEventSize:{value:"102400"},auditWebhookBatchBufferSize:{value:"10000"},auditWebhookBatchMaxSize:{value:"400"},auditWebhookBatchThrottleBurst:{value:"15"},auditWebhookBatchThrottleQps:{value:"10"},auditWebhookTruncateMaxBatchSize:{value:"10485760"},auditWebhookTruncateMaxEventSize:{value:"102400"},defaultNotReadyTolerationSeconds:{value:"300"},defaultUnreachableTolerationSeconds:{value:"300"},defaultWatchCacheSize:{value:"100"},deleteCollectionWorkers:{value:"1"},kubernetesServiceNodePort:{value:"0"},leaseReuseDurationSeconds:{value:"60"},maxMutatingRequestsInflight:{value:"200"},maxRequestsInflight:{value:"400"},minRequestTimeout:{value:"1800"},goawayChance:{value:"0"},http2MaxStreamsPerConnection:{value:"0"},v:{value:"2"},logJsonInfoBufferSize:{value:"0"},logTextInfoBufferSize:{value:"0"},maxConnectionBytesPerSec:{value:"0"},kubeletPort:{value:`${l.h.kubeletServer.portNumber}`},securePort:{value:`${l.h.kubeAPIServer.portNumber}`},kubeletReadOnlyPort:{value:`${l.h.kubeletReadOnlyPort.portNumber}`},serviceNodePortRange:{value:"30000-32767"},etcdServers:{value:`https://127.0.0.1:${l.h.etcdServer.portNumber}`},serviceAccountIssuer:{value:`https://kubernetes.default.svc.${o.M.kubernetesClusterDomain.value}`},serviceClusterIpRange:{value:`${o.M.kubernetesServiceCIDR.value}`},auditWebhookInitialBackoff:{value:"10s"},auditWebhookBatchMaxWait:{value:"30s"},serviceAccountMaxTokenExpiration:{value:"0s"},shutdownWatchTerminationGracePeriod:{value:"0s"},shutdownDelayDuration:{value:"0s"},requestTimeout:{value:"1m0s"},eventTtl:{value:"1h0m0s"},livezGracePeriod:{value:"0s"},logFlushFrequency:{value:"5s"},kubeletTimeout:{value:"5s"},etcdCompactionInterval:{value:"5m0s"},etcdCountMetricPollPeriod:{value:"1m0s"},etcdDbMetricPollInterval:{value:"30s"},etcdHealthcheckTimeout:{value:"2s"},etcdReadycheckTimeout:{value:"2s"},authenticationTokenWebhookCacheTtl:{value:"2m0s"},authorizationWebhookCacheAuthorizedTtl:{value:"5m0s"},authorizationWebhookCacheUnauthorizedTtl:{value:"30s"},auditWebhookBatchInitialBackoff:{value:"10s"},auditLogBatchMaxWait:{value:"0s"},bindAddress:{value:"0.0.0.0"},cloudProviderGceL7lbSrcCidrs:{value:"130.211.0.0/22,35.191.0.0/16"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},apiAudiences:{value:"konnectivity-server"},loggingFormat:{value:"text"},auditLogFormat:{value:"json"},auditLogMode:{value:"batch"},auditWebhookMode:{value:"batch"},auditLogVersion:{value:"audit.k8s.io/v1"},auditWebhookVersion:{value:"audit.k8s.io/v1"},authenticationTokenWebhookVersion:{value:"v1beta1"},authorizationMode:{value:"Node,RBAC"},authorizationWebhookVersion:{value:"v1beta1"},cloudProvider:{value:"external"},enableAdmissionPlugins:{value:"NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,AlwaysPullImages,NodeRestriction,PodSecurity"},endpointReconcilerType:{value:"lease"},storageMediaType:{value:"application/vnd.kubernetes.protobuf"},etcdPrefix:{value:"/registry"},featureGates:{value:"RotateKubeletServerCertificate=true"},kubeletPreferredAddressTypes:{value:"InternalIP,ExternalIP,Hostname"},oidcSigningAlgs:{value:"RS256"},oidcUsernameClaim:{value:"sub"},requestheaderAllowedNames:{value:"front-proxy-client"},requestheaderExtraHeadersPrefix:{value:"X-Remote-Extra-"},requestheaderGroupHeaders:{value:"X-Remote-Group"},requestheaderUsernameHeaders:{value:"X-Remote-User"},runtimeConfig:{value:"api/all=true"},storageBackend:{value:"etcd3"},auditPolicyFile:{value:`${o.M.kubernetesAPIAuditPolicyPath.value}`},auditLogPath:{value:`${o.M.kubernetesAPIAuditLogPath.value}`},advertiseAddress:{value:""},admissionControl:{value:""},admissionControlConfigFile:{value:""},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},auditWebhookConfigFile:{value:""},authenticationConfig:{value:""},authenticationTokenWebhookConfigFile:{value:""},authorizationConfig:{value:""},authorizationPolicyFile:{value:""},authorizationWebhookConfigFile:{value:""},cloudConfig:{value:""},corsAllowedOrigins:{value:""},debugSocketPath:{value:""},disableAdmissionPlugins:{value:""},disabledMetrics:{value:""},egressSelectorConfigFile:{value:""},encryptionProviderConfig:{value:""},etcdServersOverrides:{value:""},externalHostname:{value:""},kubeletCertificateAuthority:{value:""},oidcCaFile:{value:""},oidcClientId:{value:""},oidcGroupsClaim:{value:""},oidcGroupsPrefix:{value:""},oidcIssuerUrl:{value:""},oidcRequiredClaim:{value:""},oidcUsernamePrefix:{value:""},peerAdvertiseIp:{value:""},peerAdvertisePort:{value:""},peerCaFile:{value:""},serviceAccountJwksUri:{value:""},showHiddenMetricsForVersion:{value:""},strictTransportSecurityDirectives:{value:""},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsSniCertKey:{value:""},tokenAuthFile:{value:""},tracingConfigFile:{value:""},vmodule:{value:""},watchCacheSizes:{value:""}}},65742:(e,t,a)=>{a.d(t,{$:()=>l});var r=a(44349);const l={etcdCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},etcdClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/sa.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"}}},66958:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>u,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/lifecycleSettingsComponent","title":"lifecycleSettingsComponent","description":"\u042d\u0442\u0430\u043f\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/lifecycleSettingsComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/lifecycleSettingsComponent","permalink":"/tech-docs/kubernetes/components/kubeadm/lifecycleSettingsComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=a(74848),o=a(28453),n=a(92309),i=a(82202);const u={},s=void 0,c={},d=[...i.toc,...n.toc];function v(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439."}),"\n",(0,l.jsx)(t.li,{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n"]}),"\n",(0,l.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:[(0,l.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432:"}),(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"/tech-docs/kubernetes/components/kubelet/lifecycle",children:"Kubelet Install"}),"."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"/tech-docs/kubernetes/components/containerd/lifecycle",children:"Containerd Install"}),"."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"/tech-docs/kubernetes/components/runc/lifecycle",children:"Runc Install"}),"."]}),"\n"]})]}),"\n",(0,l.jsx)("h3",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),"\n",(0,l.jsx)(i.default,{}),"\n",(0,l.jsx)("h3",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,l.jsx)(n.default,{})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(v,{...e})}):v(e)}},68741:(e,t,a)=>{a.d(t,{M:()=>r});const r={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.12"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},76331:(e,t,a)=>{a.d(t,{A:()=>L});var r=a(96540),l=a(34164),o=a(23104),n=a(56347),i=a(205),u=a(57485),s=a(31682),c=a(70679);function d(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function v(e){const{values:t,children:a}=e;return(0,r.useMemo)(()=>{const e=t??function(e){return d(e).map(({props:{value:e,label:t,attributes:a,default:r}})=>({value:e,label:t,attributes:a,default:r}))}(a);return function(e){const t=(0,s.XI)(e,(e,t)=>e.value===t.value);if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,a])}function h({value:e,tabValues:t}){return t.some(t=>t.value===e)}function p({queryString:e=!1,groupId:t}){const a=(0,n.W6)(),l=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,u.aZ)(l),(0,r.useCallback)(e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})},[l,a])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:l}=e,o=v(e),[n,u]=(0,r.useState)(()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=t.find(e=>e.default)??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o})),[s,d]=p({queryString:a,groupId:l}),[b,m]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[a,l]=(0,c.Dv)(t);return[a,(0,r.useCallback)(e=>{t&&l.set(e)},[t,l])]}({groupId:l}),k=(()=>{const e=s??b;return h({value:e,tabValues:o})?e:null})();(0,i.A)(()=>{k&&u(k)},[k]);return{selectedValue:n,selectValue:(0,r.useCallback)(e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),m(e)},[d,m,o]),tabValues:o}}var m=a(92303);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(74848);function f({className:e,block:t,selectedValue:a,selectValue:r,tabValues:n}){const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),s=e=>{const t=e.currentTarget,l=i.indexOf(t),o=n[l].value;o!==a&&(u(t),r(o))},c=e=>{let t=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},e),children:n.map(({value:e,label:t,attributes:r})=>(0,g.jsx)("li",{role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,ref:e=>{i.push(e)},onKeyDown:c,onClick:s,...r,className:(0,l.A)("tabs__item",k.tabItem,r?.className,{"tabs__item--active":a===e}),children:t??e},e))})}function $({lazy:e,children:t,selectedValue:a}){const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=o.find(e=>e.props.value===a);return e?(0,r.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))})}function y(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,l.A)("tabs-container",k.tabList),children:[(0,g.jsx)(f,{...t,...e}),(0,g.jsx)($,{...t,...e})]})}function L(e){const t=(0,m.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},82202:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>u,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/payload/dir","title":"dir","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/payload/dir.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/payload","slug":"/tech-docs/kubernetes/components/kubeadm/payload/dir","permalink":"/tech-docs/kubernetes/components/kubeadm/payload/dir","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=a(74848),o=a(28453),n=a(60513),i=a(68747);const u={},s=void 0,c={},d=[];function v(e){return(0,l.jsx)(i.A,{language:"bash",children:n.A`
  mkdir -p /var/run/kubeadm/
`})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(v,{...e})}):v()}},90997:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>v,default:()=>m,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/configs/joinConfig","title":"joinConfig","description":"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u0442\u0435\u0440 \u043d\u043e\u0434\u044b \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/configs/joinConfig.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/configs","slug":"/tech-docs/kubernetes/components/kubeadm/configs/joinConfig","permalink":"/tech-docs/kubernetes/components/kubeadm/configs/joinConfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=a(74848),o=a(28453),n=a(68747),i=a(56223),u=a(60513),s=a(44349),c=a(285);const d={},v=void 0,h={},p=[];function b(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(t,{children:[(0,l.jsx)("summary",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u0442\u0435\u0440 \u043d\u043e\u0434\u044b \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443"}),(0,l.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,l.jsx)(n.A,{language:"bash",children:u.A`
      export MACHINE_LOCAL_ADDRESS="${s.M.virtualMachineLocalAddress.value}"
      export CLUSTER_API_ENDPOINT=api.${s.M.clusterName.value}.${s.M.kubernetesBaseDomain.value}
      export CERTIFICATE_UPLOAD_KEY=0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59

    `}),(0,l.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubeadm \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u0442\u0435\u0440\u0430 \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443"}),(0,l.jsx)(n.A,{children:u.A`cat <<EOF > ${s.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
    ---
    apiVersion: kubeadm.k8s.io/v1beta3
    controlPlane:
      localAPIEndpoint:
        advertiseAddress: $\{MACHINE_LOCAL_ADDRESS}
        bindPort: ${c.h.kubeAPIServer.portNumber}
      certificateKey: $\{CERTIFICATE_UPLOAD_KEY}
    discovery:
      bootstrapToken:
        apiServerEndpoint: $\{CLUSTER_API_ENDPOINT}:${i.L.securePort.value}
        unsafeSkipCAVerification: true
        token: "fjt9ex.lwzqgdlvoxtqk4yw"
    kind: JoinConfiguration
    EOF
  `})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(b,{...e})}):b(e)}},92309:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>k,frontMatter:()=>v,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/payload/configFiles","title":"configFiles","description":"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/payload/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/payload","slug":"/tech-docs/kubernetes/components/kubeadm/payload/configFiles","permalink":"/tech-docs/kubernetes/components/kubeadm/payload/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=a(74848),o=a(28453),n=a(90997),i=a(51079),u=a(50455),s=a(56153),c=a(9792),d=a(76331);const v={},h=void 0,p={},b=[...u.toc,...i.toc,...s.toc,...n.toc];function m(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(d.A,{groupId:"phase",children:[(0,l.jsx)(c.A,{value:"init",children:(0,l.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,l.jsx)("summary",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm"}),(0,l.jsx)(u.default,{}),(0,l.jsx)(i.default,{})]})}),(0,l.jsx)(c.A,{value:"join",children:(0,l.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,l.jsx)("summary",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm"}),(0,l.jsx)(s.default,{}),(0,l.jsx)(n.default,{})]})})]})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(m,{...e})}):m(e)}},95538:(e,t,a)=>{a.d(t,{D:()=>o});var r=a(65742),l=a(285);const o={name:{value:"${FULL_HOST_NAME}"},initialCluster:{value:"${ETCD_INITIAL_CLUSTER}"},initialAdvertisePeerUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${l.h.etcdPeer.portNumber}`},initialClusterToken:{value:"etcd"},initialClusterState:{value:"new"},peerCertFile:{value:`${r.$.etcdPeer.crtPath}`},peerKeyFile:{value:`${r.$.etcdPeer.keyPath}`},peerTrustedCAFile:{value:`${r.$.etcdCA.crtPath}`},peerClientCertAuth:{value:"true"},certFile:{value:`${r.$.etcdServer.crtPath}`},keyFile:{value:`${r.$.etcdServer.keyPath}`},trustedCAFile:{value:`${r.$.etcdCA.crtPath}`},listenClientUrls:{value:`https://0.0.0.0:${l.h.etcdServer.portNumber}`},listenPeerUrls:{value:`https://0.0.0.0:${l.h.etcdPeer.portNumber}`},listenMetricsUrls:{value:`http://0.0.0.0:${l.h.etcdMetricServer.portNumber}`},dataDir:{value:"/var/lib/etcd"},quotaBackendBytes:{value:"10737418240"},clientCertAuth:{value:"true"},heartbeatInterval:{value:"250"},electionTimeout:{value:"1500"},maxSnapshots:{value:"10"},maxWals:{value:"10"},autoCompactionRetention:{value:"8"},metrics:{value:"extensive"},logger:{value:"zap"},advertiseClientUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${l.h.etcdServer.portNumber}`},workDir:{value:"/tmp/etcd"},dbPath:{value:"/var/lib/etcd/member/snap/db"},snapshotCount:{value:"10000"},experimentalInitialCorruptCheck:{value:"true"},experimentalWatchProgressNotifyInterval:{value:"5s"}}}}]);