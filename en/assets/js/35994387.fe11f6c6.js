"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[747,982,1663,2401,2577,5357,8246,9137,9298,9714],{37089(e,t,a){a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>v,default:()=>b,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/allStaticPodsCPInitComponent","title":"allStaticPodsCPInitComponent","description":"This section describes the manual creation of static pod manifests for Kubernetes control plane components.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/allStaticPodsCPInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/allStaticPodsCPInitComponent","permalink":"/en/tech-docs/kubernetes/components/allStaticPodsCPInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=a(74848),l=a(28453),n=a(74923),i=a(5529),s=a(89689),u=a(9792),c=a(76331);const d={},v=void 0,h={},p=[...n.toc,...i.toc,...s.toc];function m(e){const t={blockquote:"blockquote",p:"p",...(0,l.R)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"This section describes the manual creation of static pod manifests for Kubernetes control plane components."}),"\n"]}),"\n",(0,o.jsxs)(c.A,{groupId:"component",children:[(0,o.jsx)(u.A,{value:"Kube-API",children:(0,o.jsxs)(a,{open:!0,className:"custom-gray-block",children:[(0,o.jsx)("summary",{children:(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,o.jsx)("p",{style:{marginBottom:0},children:"Kube-API setup"}),(0,o.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,o.jsx)(n.default,{})]})}),(0,o.jsx)(u.A,{value:"Kube Controller Manager",children:(0,o.jsxs)(a,{open:!0,className:"custom-gray-block",children:[(0,o.jsx)("summary",{children:(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,o.jsx)("p",{style:{marginBottom:0},children:"Kube Controller Manager setup"}),(0,o.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,o.jsx)(i.default,{})]})}),(0,o.jsx)(u.A,{value:"Kube Scheduler",children:(0,o.jsxs)(a,{open:!0,className:"custom-gray-block",children:[(0,o.jsx)("summary",{children:(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,o.jsx)("p",{style:{marginBottom:0},children:"Kube Scheduler setup"}),(0,o.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,o.jsx)(s.default,{})]})})]})]})}function b(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},42201(e,t,a){a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>v});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/controllerManager/kubeadm","title":"kubeadm","description":"Manifest generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/controllerManager/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/components/controllerManager","slug":"/tech-docs/kubernetes/components/controllerManager/kubeadm","permalink":"/en/tech-docs/kubernetes/components/controllerManager/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=a(74848),l=a(28453),n=a(44349),i=a(57390),s=a(60513);const u={},c=void 0,d={},v=[];function h(e){const t={admonition:"admonition",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h4",{children:"Manifest generation"}),"\n",(0,o.jsx)(i.A,{language:"bash",children:s.A`
      kubeadm init phase  control-plane controller-manager \\
        --config=${n.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
  `}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(i.A,{language:"bash",children:s.A`
      #### Kube API
      [control-plane] Creating static Pod manifest for "kube-controller-manager"
  `})})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},5529(e,t,a){a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/controllerManager/setupInitComponent","title":"setupInitComponent","description":"This section is optional and intended only for cases where this resource needs to be configured separately from the others.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/controllerManager/setupInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/controllerManager","slug":"/tech-docs/kubernetes/components/controllerManager/setupInitComponent","permalink":"/en/tech-docs/kubernetes/components/controllerManager/setupInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=a(74848),l=a(28453),n=a(9792),i=a(76331),s=a(27450),u=a(42201);const c={},d=void 0,v={},h=[...s.toc,...u.toc];function p(e){const t={admonition:"admonition",p:"p",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,o.jsx)(t.p,{children:"This section is optional and intended only for cases where this resource needs to be configured separately from the others."})}),"\n",(0,o.jsxs)(i.A,{groupId:"install-type",children:[(0,o.jsx)(n.A,{value:"HardWay",children:(0,o.jsx)(s.default,{})}),(0,o.jsx)(n.A,{value:"Kubeadm",children:(0,o.jsx)(u.default,{})})]})]})}function m(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},27450(e,t,a){a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>k,frontMatter:()=>v,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/controllerManager/staticPod","title":"staticPod","description":"Environment variables","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/controllerManager/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/controllerManager","slug":"/tech-docs/kubernetes/components/controllerManager/staticPod","permalink":"/en/tech-docs/kubernetes/components/controllerManager/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=a(74848),l=a(28453),n=a(44349),i=(a(65742),a(285)),s=a(68741),u=a(21232),c=a(60513),d=a(57390);const v={},h=void 0,p={},m=[];function b(e){const{Details:t}={...(0,l.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h4",{children:"Environment variables"}),"\n",(0,o.jsx)(d.A,{language:"bash",children:c.A`
  export CLUSTER_NAME=${n.M.clusterName.value}
`}),"\n",(0,o.jsx)("h4",{children:"Working directory"}),"\n",(0,o.jsx)(d.A,{language:"bash",children:c.A`
  mkdir -p ${n.M.kubernetesBaseFolderPath.value}/manifests
`}),"\n",(0,o.jsxs)(t,{className:"custom-blue-block",children:[(0,o.jsx)("summary",{children:"Static Pod Kube-Controller-Manager"}),(0,o.jsx)("h4",{children:"Manifest generation"}),(0,o.jsx)(d.A,{language:"bash",children:c.A`
  cat <<EOF > ${n.M.kubernetesBaseFolderPath.value}/manifests/kube-controller-manager.yaml
  apiVersion: v1
  kind: Pod
  metadata:
    creationTimestamp: null
    labels:
      component: kube-controller-manager
      tier: control-plane
    name: kube-controller-manager
    namespace: kube-system
  spec:
    containers:
    - command:
      - kube-controller-manager
      - --allocate-node-cidrs=${u.L.allocateNodeCidrs.value}
      - --allow-untagged-cloud=${u.L.allowUntaggedCloud.value}
      - --attach-detach-reconcile-sync-period=${u.L.attachDetachReconcileSyncPeriod.value}
      - --authentication-kubeconfig=${u.L.authenticationKubeconfig.value}
      - --authentication-skip-lookup=${u.L.authenticationSkipLookup.value}
      - --authentication-token-webhook-cache-ttl=${u.L.authenticationTokenWebhookCacheTtl.value}
      - --authentication-tolerate-lookup-failure=${u.L.authenticationTolerateLookupFailure.value}
      - --authorization-always-allow-paths=${u.L.authorizationAlwaysAllowPaths.value}
      - --authorization-kubeconfig=${u.L.authorizationKubeconfig.value}
      - --authorization-webhook-cache-authorized-ttl=${u.L.authorizationWebhookCacheAuthorizedTtl.value}
      - --authorization-webhook-cache-unauthorized-ttl=${u.L.authorizationWebhookCacheUnauthorizedTtl.value}
      - --bind-address=${u.L.bindAddress.value}
      - --cidr-allocator-type=${u.L.cidrAllocatorType.value}
      - --client-ca-file=${u.L.clientCaFile.value}
      - --cluster-name=${u.L.clusterName.value}
      - --cloud-provider-gce-lb-src-cidrs=${u.L.cloudProviderGceLbSrcCidrs.value}
      - --cluster-signing-cert-file=${u.L.clusterSigningCertFile.value}
      - --cluster-signing-duration=${u.L.clusterSigningDuration.value}
      - --cluster-signing-key-file=${u.L.clusterSigningKeyFile.value}
      - --concurrent-cron-job-syncs=${u.L.concurrentCronJobSyncs.value}
      - --concurrent-deployment-syncs=${u.L.concurrentDeploymentSyncs.value}
      - --concurrent-endpoint-syncs=${u.L.concurrentEndpointSyncs.value}
      - --concurrent-ephemeralvolume-syncs=${u.L.concurrentEphemeralvolumeSyncs.value}
      - --concurrent-gc-syncs=${u.L.concurrentGcSyncs.value}
      - --concurrent-horizontal-pod-autoscaler-syncs=${u.L.concurrentHorizontalPodAutoscalerSyncs.value}
      - --concurrent-job-syncs=${u.L.concurrentJobSyncs.value}
      - --concurrent-namespace-syncs=${u.L.concurrentNamespaceSyncs.value}
      - --concurrent-rc-syncs=${u.L.concurrentRcSyncs.value}
      - --concurrent-replicaset-syncs=${u.L.concurrentReplicasetSyncs.value}
      - --concurrent-resource-quota-syncs=${u.L.concurrentResourceQuotaSyncs.value}
      - --concurrent-service-endpoint-syncs=${u.L.concurrentServiceEndpointSyncs.value}
      - --concurrent-service-syncs=${u.L.concurrentServiceSyncs.value}
      - --concurrent-serviceaccount-token-syncs=${u.L.concurrentServiceaccountTokenSyncs.value}
      - --concurrent-statefulset-syncs=${u.L.concurrentStatefulsetSyncs.value}
      - --concurrent-ttl-after-finished-syncs=${u.L.concurrentTtlAfterFinishedSyncs.value}
      - --concurrent-validating-admission-policy-status-syncs=${u.L.concurrentValidatingAdmissionPolicyStatusSyncs.value}
      - --configure-cloud-routes=${u.L.configureCloudRoutes.value}
      - --contention-profiling=${u.L.contentionProfiling.value}
      - --controller-start-interval=${u.L.controllerStartInterval.value}
      - --controllers=${u.L.controllers.value}
      - --disable-attach-detach-reconcile-sync=${u.L.disableAttachDetachReconcileSync.value}
      - --disable-force-detach-on-timeout=${u.L.disableForceDetachOnTimeout.value}
      - --enable-dynamic-provisioning=${u.L.enableDynamicProvisioning.value}
      - --enable-garbage-collector=${u.L.enableGarbageCollector.value}
      - --enable-hostpath-provisioner=${u.L.enableHostpathProvisioner.value}
      - --enable-leader-migration=${u.L.enableLeaderMigration.value}
      - --endpoint-updates-batch-period=${u.L.endpointUpdatesBatchPeriod.value}
      - --endpointslice-updates-batch-period=${u.L.endpointsliceUpdatesBatchPeriod.value}
      - --feature-gates=${u.L.featureGates.value}
      - --flex-volume-plugin-dir=${u.L.flexVolumePluginDir.value}
      - --help=${u.L.help.value}
      - --horizontal-pod-autoscaler-cpu-initialization-period=${u.L.horizontalPodAutoscalerCpuInitializationPeriod.value}
      - --horizontal-pod-autoscaler-downscale-delay=${u.L.horizontalPodAutoscalerDownscaleDelay.value}
      - --horizontal-pod-autoscaler-downscale-stabilization=${u.L.horizontalPodAutoscalerDownscaleStabilization.value}
      - --horizontal-pod-autoscaler-initial-readiness-delay=${u.L.horizontalPodAutoscalerInitialReadinessDelay.value}
      - --horizontal-pod-autoscaler-sync-period=${u.L.horizontalPodAutoscalerSyncPeriod.value}
      - --horizontal-pod-autoscaler-tolerance=${u.L.horizontalPodAutoscalerTolerance.value}
      - --horizontal-pod-autoscaler-upscale-delay=${u.L.horizontalPodAutoscalerUpscaleDelay.value}
      - --http2-max-streams-per-connection=${u.L.http2MaxStreamsPerConnection.value}
      - --kube-api-burst=${u.L.kubeApiBurst.value}
      - --kube-api-content-type=${u.L.kubeApiContentType.value}
      - --kube-api-qps=${u.L.kubeApiQps.value}
      - --kubeconfig=${u.L.kubeconfig.value}
      - --large-cluster-size-threshold=${u.L.largeClusterSizeThreshold.value}
      - --leader-elect=${u.L.leaderElect.value}
      - --leader-elect-lease-duration=${u.L.leaderElectLeaseDuration.value}
      - --leader-elect-renew-deadline=${u.L.leaderElectRenewDeadline.value}
      - --leader-elect-resource-lock=${u.L.leaderElectResourceLock.value}
      - --leader-elect-resource-name=${u.L.leaderElectResourceName.value}
      - --leader-elect-resource-namespace=${u.L.leaderElectResourceNamespace.value}
      - --leader-elect-retry-period=${u.L.leaderElectRetryPeriod.value}
      - --legacy-service-account-token-clean-up-period=${u.L.legacyServiceAccountTokenCleanUpPeriod.value}
      - --log-flush-frequency=${u.L.logFlushFrequency.value}
      - --log-json-info-buffer-size=${u.L.logJsonInfoBufferSize.value}
      - --log-json-split-stream=${u.L.logJsonSplitStream.value}
      - --log-text-info-buffer-size=${u.L.logTextInfoBufferSize.value}
      - --log-text-split-stream=${u.L.logTextSplitStream.value}
      - --logging-format=${u.L.loggingFormat.value}
      - --max-endpoints-per-slice=${u.L.maxEndpointsPerSlice.value}
      - --min-resync-period=${u.L.minResyncPeriod.value}
      - --mirroring-concurrent-service-endpoint-syncs=${u.L.mirroringConcurrentServiceEndpointSyncs.value}
      - --mirroring-endpointslice-updates-batch-period=${u.L.mirroringEndpointsliceUpdatesBatchPeriod.value}
      - --mirroring-max-endpoints-per-subset=${u.L.mirroringMaxEndpointsPerSubset.value}
      - --namespace-sync-period=${u.L.namespaceSyncPeriod.value}
      - --node-cidr-mask-size=${u.L.nodeCidrMaskSize.value}
      - --node-cidr-mask-size-ipv4=${u.L.nodeCidrMaskSizeIpv4.value}
      - --node-cidr-mask-size-ipv6=${u.L.nodeCidrMaskSizeIpv6.value}
      - --node-eviction-rate=${u.L.nodeEvictionRate.value}
      - --node-monitor-grace-period=${u.L.nodeMonitorGracePeriod.value}
      - --node-monitor-period=${u.L.nodeMonitorPeriod.value}
      - --node-startup-grace-period=${u.L.nodeStartupGracePeriod.value}
      - --node-sync-period=${u.L.nodeSyncPeriod.value}
      - --permit-address-sharing=${u.L.permitAddressSharing.value}
      - --permit-port-sharing=${u.L.permitPortSharing.value}
      - --profiling=${u.L.profiling.value}
      - --pv-recycler-increment-timeout-nfs=${u.L.pvRecyclerIncrementTimeoutNfs.value}
      - --pv-recycler-minimum-timeout-hostpath=${u.L.pvRecyclerMinimumTimeoutHostpath.value}
      - --pv-recycler-minimum-timeout-nfs=${u.L.pvRecyclerMinimumTimeoutNfs.value}
      - --pv-recycler-timeout-increment-hostpath=${u.L.pvRecyclerTimeoutIncrementHostpath.value}
      - --pvclaimbinder-sync-period=${u.L.pvclaimbinderSyncPeriod.value}
      - --requestheader-client-ca-file=${u.L.requestheaderClientCaFile.value}
      - --requestheader-extra-headers-prefix=${u.L.requestheaderExtraHeadersPrefix.value}
      - --requestheader-group-headers=${u.L.requestheaderGroupHeaders.value}
      - --requestheader-username-headers=${u.L.requestheaderUsernameHeaders.value}
      - --resource-quota-sync-period=${u.L.resourceQuotaSyncPeriod.value}
      - --root-ca-file=${u.L.rootCaFile.value}
      - --route-reconciliation-period=${u.L.routeReconciliationPeriod.value}
      - --secondary-node-eviction-rate=${u.L.secondaryNodeEvictionRate.value}
      - --secure-port=${u.L.securePort.value}
      - --service-account-private-key-file=${u.L.serviceAccountPrivateKeyFile.value}
      - --terminated-pod-gc-threshold=${u.L.terminatedPodGcThreshold.value}
      - --unhealthy-zone-threshold=${u.L.unhealthyZoneThreshold.value}
      - --use-service-account-credentials=${u.L.useServiceAccountCredentials.value}
      - --v=${u.L.v.value}
      - --version=${u.L.version.value}
      - --volume-host-allow-local-loopback=${u.L.volumeHostAllowLocalLoopback.value}
      # IF YOU NEED TO CONNECT CLOUD-CONTROLLER-MANAGER
      # UNCOMMENT THE FOLLOWING
      # ->
      # - --cloud-provider: "${u.L.cloudProvider.value}"
      # IF YOU NEED TO CONNECT SERVER CERTIFICATES FOR KUBE-CONTROLLER-MANAGER
      # NOTE THAT KUBEADM DOES NOT CREATE THESE CERTIFICATES
      # UNCOMMENT THE FOLLOWING
      # ->
      # - --tls-cert-file=${u.L.tlsCertFile.value}
      # - --tls-private-key-file=${u.L.tlsPrivateKeyFile.value}
      # Do not specify if value is "" or undefined
      # - --cluster-signing-kube-apiserver-client-cert-file=${u.L.clusterSigningKubeApiserverClientCertFile.value}
      # - --cluster-signing-kube-apiserver-client-key-file=${u.L.clusterSigningKubeApiserverClientKeyFile.value}
      # - --cluster-signing-kubelet-client-cert-file=${u.L.clusterSigningKubeletClientCertFile.value}
      # - --cluster-signing-kubelet-client-key-file=${u.L.clusterSigningKubeletClientKeyFile.value}
      # - --cluster-signing-kubelet-serving-cert-file=${u.L.clusterSigningKubeletServingCertFile.value}
      # - --cluster-signing-kubelet-serving-key-file=${u.L.clusterSigningKubeletServingKeyFile.value}
      # - --cluster-signing-legacy-unknown-cert-file=${u.L.clusterSigningLegacyUnknownCertFile.value}
      # - --cluster-signing-legacy-unknown-key-file=${u.L.clusterSigningLegacyUnknownKeyFile.value}
      # - --cluster-cidr=${u.L.clusterCidr.value}
      # - --cloud-config=${u.L.cloudConfig.value}
      # - --cert-dir=${u.L.certDir.value}
      # - --allow-metric-labels-manifest=${u.L.allowMetricLabelsManifest.value}
      # - --allow-metric-labels=${u.L.allowMetricLabels.value}
      # - --disabled-metrics=${u.L.disabledMetrics.value}
      # - --leader-migration-config=${u.L.leaderMigrationConfig.value}
      # - --master=${u.L.master.value}
      # - --pv-recycler-pod-template-filepath-hostpath=${u.L.pvRecyclerPodTemplateFilepathHostpath.value}
      # - --pv-recycler-pod-template-filepath-nfs=${u.L.pvRecyclerPodTemplateFilepathNfs.value}
      # - --service-cluster-ip-range=${u.L.serviceClusterIpRange.value}
      # - --show-hidden-metrics-for-version=${u.L.showHiddenMetricsForVersion.value}
      # - --tls-cipher-suites=${u.L.tlsCipherSuites.value}
      # - --tls-min-version=${u.L.tlsMinVersion.value}
      # - --tls-sni-cert-key=${u.L.tlsSniCertKey.value}
      # - --vmodule=${u.L.vmodule.value}
      # - --volume-host-cidr-denylist=${u.L.volumeHostCidrDenylist.value}
      # - --external-cloud-volume-plugin=${u.L.externalCloudVolumePlugin.value}
      # - --requestheader-allowed-names=${u.L.requestheaderAllowedNames.value}
      image: ${n.M.baseDockerRegistry.value}/kube-controller-manager:${s.M.kubernetes.value}
      imagePullPolicy: IfNotPresent
      livenessProbe:
        failureThreshold: 8
        httpGet:
          path: /healthz
          port: ${i.h.kubeControllerManager.portNumber}
          scheme: HTTPS
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      name: kube-controller-manager
      resources:
        requests:
          cpu: 200m
      startupProbe:
        failureThreshold: 24
        httpGet:
          path: /healthz
          port: ${i.h.kubeControllerManager.portNumber}
          scheme: HTTPS
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      volumeMounts:
      - mountPath: /etc/ssl/certs
        name: ca-certs
        readOnly: true
      - mountPath: /etc/ca-certificates
        name: etc-ca-certificates
        readOnly: true
      - mountPath: /etc/pki
        name: etc-pki
        readOnly: true
      - mountPath: /usr/libexec/kubernetes/kubelet-plugins/volume/exec/
        name: flexvolume-dir
      - mountPath: ${n.M.kubernetesBaseFolderPath.value}/pki
        name: k8s-certs
        readOnly: true
      - mountPath: ${n.M.kubernetesBaseFolderPath.value}/controller-manager.conf
        name: kubeconfig
        readOnly: true
      - mountPath: /usr/local/share/ca-certificates
        name: usr-local-share-ca-certificates
        readOnly: true
      - mountPath: /usr/share/ca-certificates
        name: usr-share-ca-certificates
        readOnly: true
    hostNetwork: true
    priority: 2000001000
    priorityClassName: system-node-critical
    securityContext:
      seccompProfile:
        type: RuntimeDefault
    volumes:
    - hostPath:
        path: /etc/ssl/certs
        type: DirectoryOrCreate
      name: ca-certs
    - hostPath:
        path: /etc/ca-certificates
        type: DirectoryOrCreate
      name: etc-ca-certificates
    - hostPath:
        path: /etc/pki
        type: DirectoryOrCreate
      name: etc-pki
    - hostPath:
        path: /usr/libexec/kubernetes/kubelet-plugins/volume/exec/
        type: DirectoryOrCreate
      name: flexvolume-dir
    - hostPath:
        path: ${n.M.kubernetesBaseFolderPath.value}/pki
        type: DirectoryOrCreate
      name: k8s-certs
    - hostPath:
        path: ${n.M.kubernetesBaseFolderPath.value}/controller-manager.conf
        type: FileOrCreate
      name: kubeconfig
    - hostPath:
        path: /usr/local/share/ca-certificates
        type: DirectoryOrCreate
      name: usr-local-share-ca-certificates
    - hostPath:
        path: /usr/share/ca-certificates
        type: DirectoryOrCreate
      name: usr-share-ca-certificates
  status: {}
  EOF
`})]})]})}function k(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(b,{...e})}):b(e)}},7228(e,t,a){a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>v});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/kubeadm","title":"kubeadm","description":"Manifest generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubeAPI/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/kubeadm","permalink":"/en/tech-docs/kubernetes/components/kubeAPI/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=a(74848),l=a(28453),n=a(44349),i=a(57390),s=a(60513);const u={},c=void 0,d={},v=[];function h(e){const t={admonition:"admonition",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h4",{children:"Manifest generation"}),"\n",(0,o.jsx)(i.A,{language:"bash",children:s.A`
      kubeadm init phase  control-plane apiserver \\
        --config=${n.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
  `}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(i.A,{language:"bash",children:s.A`
      #### Kube API
      [control-plane] Creating static Pod manifest for "apiserver"
  `})})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},74923(e,t,a){a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/setupInitComponent","title":"setupInitComponent","description":"This section is optional and intended only for cases where this resource needs to be configured separately from the others.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubeAPI/setupInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/setupInitComponent","permalink":"/en/tech-docs/kubernetes/components/kubeAPI/setupInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=a(74848),l=a(28453),n=a(9792),i=a(76331),s=a(15944),u=a(7228);const c={},d=void 0,v={},h=[...s.toc,...u.toc];function p(e){const t={admonition:"admonition",p:"p",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,o.jsx)(t.p,{children:"This section is optional and intended only for cases where this resource needs to be configured separately from the others."})}),"\n",(0,o.jsxs)(i.A,{groupId:"install-type",children:[(0,o.jsx)(n.A,{value:"HardWay",children:(0,o.jsx)(s.default,{})}),(0,o.jsx)(n.A,{value:"Kubeadm",children:(0,o.jsx)(u.default,{})})]})]})}function m(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},15944(e,t,a){a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>k,frontMatter:()=>v,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/staticPod","title":"staticPod","description":"Environment variables","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubeAPI/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/staticPod","permalink":"/en/tech-docs/kubernetes/components/kubeAPI/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=a(74848),l=a(28453),n=a(44349),i=a(68741),s=a(56223),u=a(285),c=a(57390),d=a(60513);const v={},h=void 0,p={},m=[];function b(e){const{Details:t}={...(0,l.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h4",{children:"Environment variables"}),"\n",(0,o.jsx)(c.A,{language:"bash",children:d.A`
    export MACHINE_LOCAL_ADDRESS=${n.M.virtualMachineLocalAddress.value}
  `}),"\n",(0,o.jsx)("h4",{children:"Working directory"}),"\n",(0,o.jsx)(c.A,{language:"bash",children:d.A`
      mkdir -p ${n.M.kubernetesBaseFolderPath.value}/manifests
  `}),"\n",(0,o.jsxs)(t,{className:"custom-blue-block",children:[(0,o.jsx)("summary",{children:"Static Pod Kube-apiserver"}),(0,o.jsx)("h4",{children:"Manifest generation"}),(0,o.jsx)(c.A,{language:"bash",children:d.A`
  cat <<EOF > ${n.M.kubernetesBaseFolderPath.value}/manifests/kube-apiserver.yaml
  ---
  apiVersion: v1
  kind: Pod
  metadata:
    annotations:
      kubeadm.kubernetes.io/kube-apiserver.advertise-address.endpoint: $\{MACHINE_LOCAL_ADDRESS}:${s.L.securePort.value}
    creationTimestamp: null
    labels:
      component: kube-apiserver
      tier: control-plane
    name: kube-apiserver
    namespace: kube-system
  spec:
    containers:
    - command:
      - kube-apiserver
      - --advertise-address=$\{MACHINE_LOCAL_ADDRESS}
      - --aggregator-reject-forwarding-redirect=${s.L.aggregatorRejectForwardingRedirect.value}
      - --allow-privileged=${s.L.allowPrivileged.value}
      - --anonymous-auth=${s.L.anonymousAuth.value}
      - --api-audiences=${s.L.apiAudiences.value}
      - --apiserver-count=${s.L.apiserverCount.value}
      - --audit-log-batch-buffer-size=${s.L.auditLogBatchBufferSize.value}
      - --audit-log-batch-max-size=${s.L.auditLogBatchMaxSize.value}
      - --audit-log-batch-max-wait=${s.L.auditLogBatchMaxWait.value}
      - --audit-log-batch-throttle-burst=${s.L.auditLogBatchThrottleBurst.value}
      - --audit-log-batch-throttle-enable=${s.L.auditLogBatchThrottleEnable.value}
      - --audit-log-batch-throttle-qps=${s.L.auditLogBatchThrottleQps.value}
      - --audit-log-compress=${s.L.auditLogCompress.value}
      - --audit-log-format=${s.L.auditLogFormat.value}
      - --audit-log-maxage=${s.L.auditLogMaxage.value}
      - --audit-log-maxbackup=${s.L.auditLogMaxbackup.value}
      - --audit-log-maxsize=${s.L.auditLogMaxsize.value}
      - --audit-log-mode=${s.L.auditLogMode.value}
      - --audit-log-truncate-enabled=${s.L.auditLogTruncateEnabled.value}
      - --audit-log-truncate-max-batch-size=${s.L.auditLogTruncateMaxBatchSize.value}
      - --audit-log-truncate-max-event-size=${s.L.auditLogTruncateMaxEventSize.value}
      - --audit-log-version=${s.L.auditLogVersion.value}
      - --audit-webhook-batch-buffer-size=${s.L.auditWebhookBatchBufferSize.value}
      - --audit-webhook-batch-initial-backoff=${s.L.auditWebhookBatchInitialBackoff.value}
      - --audit-webhook-batch-max-size=${s.L.auditWebhookBatchMaxSize.value}
      - --audit-webhook-batch-max-wait=${s.L.auditWebhookBatchMaxWait.value}
      - --audit-webhook-batch-throttle-burst=${s.L.auditWebhookBatchThrottleBurst.value}
      - --audit-webhook-batch-throttle-enable=${s.L.auditWebhookBatchThrottleEnable.value}
      - --audit-webhook-batch-throttle-qps=${s.L.auditWebhookBatchThrottleQps.value}
      - --audit-webhook-initial-backoff=${s.L.auditWebhookInitialBackoff.value}
      - --audit-webhook-mode=${s.L.auditWebhookMode.value}
      - --audit-webhook-truncate-enabled=${s.L.auditWebhookTruncateEnabled.value}
      - --audit-webhook-truncate-max-batch-size=${s.L.auditWebhookTruncateMaxBatchSize.value}
      - --audit-webhook-truncate-max-event-size=${s.L.auditWebhookTruncateMaxEventSize.value}
      - --audit-webhook-version=${s.L.auditWebhookVersion.value}
      - --audit-policy-file=${s.L.auditPolicyFile.value}
      - --audit-log-path=${s.L.auditLogPath.value}
      - --authentication-token-webhook-cache-ttl=${s.L.authenticationTokenWebhookCacheTtl.value}
      - --authentication-token-webhook-version=${s.L.authenticationTokenWebhookVersion.value}
      - --authorization-mode=${s.L.authorizationMode.value}
      - --authorization-webhook-cache-authorized-ttl=${s.L.authorizationWebhookCacheAuthorizedTtl.value}
      - --authorization-webhook-cache-unauthorized-ttl=${s.L.authorizationWebhookCacheUnauthorizedTtl.value}
      - --authorization-webhook-version=${s.L.authorizationWebhookVersion.value}
      - --bind-address=${s.L.bindAddress.value}
      - --cert-dir=${s.L.certDir.value}
      - --client-ca-file=${s.L.clientCaFile.value}
      # -> Enable if managing state via Cloud Controller Manager
      # - --cloud-provider=${s.L.cloudProvider.value}
      - --cloud-provider-gce-l7lb-src-cidrs=${s.L.cloudProviderGceL7lbSrcCidrs.value}
      - --cloud-provider-gce-lb-src-cidrs=${s.L.cloudProviderGceLbSrcCidrs.value}
      - --contention-profiling=${s.L.contentionProfiling.value}
      - --default-not-ready-toleration-seconds=${s.L.defaultNotReadyTolerationSeconds.value}
      - --default-unreachable-toleration-seconds=${s.L.defaultUnreachableTolerationSeconds.value}
      - --default-watch-cache-size=${s.L.defaultWatchCacheSize.value}
      - --delete-collection-workers=${s.L.deleteCollectionWorkers.value}
      - --enable-admission-plugins=${s.L.enableAdmissionPlugins.value}
      - --enable-aggregator-routing=${s.L.enableAggregatorRouting.value}
      - --enable-bootstrap-token-auth=${s.L.enableBootstrapTokenAuth.value}
      - --enable-garbage-collector=${s.L.enableGarbageCollector.value}
      - --enable-logs-handler=${s.L.enableLogsHandler.value}
      - --enable-priority-and-fairness=${s.L.enablePriorityAndFairness.value}
      - --encryption-provider-config-automatic-reload=${s.L.encryptionProviderConfigAutomaticReload.value}
      - --endpoint-reconciler-type=${s.L.endpointReconcilerType.value}
      - --etcd-cafile=${s.L.etcdCafile.value}
      - --etcd-certfile=${s.L.etcdCertfile.value}
      - --etcd-compaction-interval=${s.L.etcdCompactionInterval.value}
      - --etcd-count-metric-poll-period=${s.L.etcdCountMetricPollPeriod.value}
      - --etcd-db-metric-poll-interval=${s.L.etcdDbMetricPollInterval.value}
      - --etcd-healthcheck-timeout=${s.L.etcdHealthcheckTimeout.value}
      - --etcd-keyfile=${s.L.etcdKeyfile.value}
      - --etcd-prefix=${s.L.etcdPrefix.value}
      - --etcd-readycheck-timeout=${s.L.etcdReadycheckTimeout.value}
      - --etcd-servers=${s.L.etcdServers.value}
      - --event-ttl=${s.L.eventTtl.value}
      - --feature-gates=${s.L.featureGates.value}
      - --goaway-chance=${s.L.goawayChance.value}
      - --help=${s.L.help.value}
      - --http2-max-streams-per-connection=${s.L.http2MaxStreamsPerConnection.value}
      - --kubelet-client-certificate=${s.L.kubeletClientCertificate.value}
      - --kubelet-client-key=${s.L.kubeletClientKey.value}
      - --kubelet-port=${s.L.kubeletPort.value}
      - --kubelet-preferred-address-types=${s.L.kubeletPreferredAddressTypes.value}
      - --kubelet-read-only-port=${s.L.kubeletReadOnlyPort.value}
      - --kubelet-timeout=${s.L.kubeletTimeout.value}
      - --kubernetes-service-node-port=${s.L.kubernetesServiceNodePort.value}
      - --lease-reuse-duration-seconds=${s.L.leaseReuseDurationSeconds.value}
      - --livez-grace-period=${s.L.livezGracePeriod.value}
      - --log-flush-frequency=${s.L.logFlushFrequency.value}
      - --logging-format=${s.L.loggingFormat.value}
      - --log-json-info-buffer-size=${s.L.logJsonInfoBufferSize.value}
      - --log-json-split-stream=${s.L.logJsonSplitStream.value}
      - --log-text-info-buffer-size=${s.L.logTextInfoBufferSize.value}
      - --log-text-split-stream=${s.L.logTextSplitStream.value}
      - --max-connection-bytes-per-sec=${s.L.maxConnectionBytesPerSec.value}
      - --max-mutating-requests-inflight=${s.L.maxMutatingRequestsInflight.value}
      - --max-requests-inflight=${s.L.maxRequestsInflight.value}
      - --min-request-timeout=${s.L.minRequestTimeout.value}
      - --permit-address-sharing=${s.L.permitAddressSharing.value}
      - --permit-port-sharing=${s.L.permitPortSharing.value}
      - --profiling=${s.L.profiling.value}
      - --proxy-client-cert-file=${s.L.proxyClientCertFile.value}
      - --proxy-client-key-file=${s.L.proxyClientKeyFile.value}
      - --requestheader-allowed-names=${s.L.requestheaderAllowedNames.value}
      - --requestheader-client-ca-file=${s.L.requestheaderClientCaFile.value}
      - --requestheader-extra-headers-prefix=${s.L.requestheaderExtraHeadersPrefix.value}
      - --requestheader-group-headers=${s.L.requestheaderGroupHeaders.value}
      - --requestheader-username-headers=${s.L.requestheaderUsernameHeaders.value}
      - --request-timeout=${s.L.requestTimeout.value}
      - --runtime-config=${s.L.runtimeConfig.value}
      - --secure-port=${s.L.securePort.value}
      - --service-account-extend-token-expiration=${s.L.serviceAccountExtendTokenExpiration.value}
      - --service-account-issuer=${s.L.serviceAccountIssuer.value}
      - --service-account-key-file=${s.L.serviceAccountKeyFile.value}
      - --service-account-lookup=${s.L.serviceAccountLookup.value}
      - --service-account-max-token-expiration=${s.L.serviceAccountMaxTokenExpiration.value}
      - --service-account-signing-key-file=${s.L.serviceAccountSigningKeyFile.value}
      - --service-cluster-ip-range=${s.L.serviceClusterIpRange.value}
      - --service-node-port-range=${s.L.serviceNodePortRange.value}
      - --shutdown-delay-duration=${s.L.shutdownDelayDuration.value}
      - --shutdown-send-retry-after=${s.L.shutdownSendRetryAfter.value}
      - --shutdown-watch-termination-grace-period=${s.L.shutdownWatchTerminationGracePeriod.value}
      - --storage-backend=${s.L.storageBackend.value}
      - --storage-media-type=${s.L.storageMediaType.value}
      - --tls-cert-file=${s.L.tlsCertFile.value}
      - --tls-private-key-file=${s.L.tlsPrivateKeyFile.value}
      - --v=${s.L.v.value}
      - --version=${s.L.version.value}
      - --watch-cache=${s.L.watchCache.value}
      # IF YOU NEED TO CONNECT CLOUD-CONTROLLER-MANAGER
      # UNCOMMENT THE FOLLOWING
      # ->
      # - --cloud-provider: "${s.L.cloudProvider.value}"
      # Do not specify if value is "" or undefined
      # - --cloud-config=${s.L.cloudConfig.value}
      # - --strict-transport-security-directives=${s.L.strictTransportSecurityDirectives.value}
      # - --disable-admission-plugins=${s.L.disableAdmissionPlugins.value}
      # - --disabled-metrics=${s.L.disabledMetrics.value}
      # - --egress-selector-config-file=${s.L.egressSelectorConfigFile.value}
      # - --encryption-provider-config=${s.L.encryptionProviderConfig.value}
      # - --etcd-servers-overrides=${s.L.etcdServersOverrides.value}
      # - --external-hostname=${s.L.externalHostname.value}
      # - --kubelet-certificate-authority=${s.L.kubeletCertificateAuthority.value}
      # - --oidc-ca-file=${s.L.oidcCaFile.value}
      # - --oidc-client-id=${s.L.oidcClientId.value}
      # - --oidc-groups-claim=${s.L.oidcGroupsClaim.value}
      # - --oidc-groups-prefix=${s.L.oidcGroupsPrefix.value}
      # - --oidc-issuer-url=${s.L.oidcIssuerUrl.value}
      # - --oidc-required-claim=${s.L.oidcRequiredClaim.value}
      # - --oidc-signing-algs=${s.L.oidcSigningAlgs.value}
      # - --oidc-username-claim=${s.L.oidcUsernameClaim.value}
      # - --oidc-username-prefix=${s.L.oidcUsernamePrefix.value}
      # - --peer-advertise-ip=${s.L.peerAdvertiseIp.value}
      # - --peer-advertise-port=${s.L.peerAdvertisePort.value}
      # - --peer-ca-file=${s.L.peerCaFile.value}
      # - --service-account-jwks-uri=${s.L.serviceAccountJwksUri.value}
      # - --show-hidden-metrics-for-version=${s.L.showHiddenMetricsForVersion.value}
      # - --tls-cipher-suites=${s.L.tlsCipherSuites.value}
      # - --tls-min-version=${s.L.tlsMinVersion.value}
      # - --tls-sni-cert-key=${s.L.tlsSniCertKey.value}
      # - --token-auth-file=${s.L.tokenAuthFile.value}
      # - --tracing-config-file=${s.L.tracingConfigFile.value}
      # - --vmodule=${s.L.vmodule.value}
      # - --watch-cache-sizes=${s.L.watchCacheSizes.value}
      # - --authorization-webhook-config-file=${s.L.authorizationWebhookConfigFile.value}
      # - --cors-allowed-origins=${s.L.corsAllowedOrigins.value}
      # - --debug-socket-path=${s.L.debugSocketPath.value}
      # - --authorization-policy-file=${s.L.authorizationPolicyFile.value}
      # - --authorization-config=${s.L.authorizationConfig.value}
      # - --authentication-token-webhook-config-file=${s.L.authenticationTokenWebhookConfigFile.value}
      # - --authentication-config=${s.L.authenticationConfig.value}
      # - --audit-webhook-config-file=${s.L.auditWebhookConfigFile.value}
      # - --allow-metric-labels=${s.L.allowMetricLabels.value}
      # - --allow-metric-labels-manifest=${s.L.allowMetricLabelsManifest.value}
      # - --admission-control=${s.L.admissionControl.value}
      # - --admission-control-config-file=${s.L.admissionControlConfigFile.value}
      # - --advertise-address=${s.L.advertiseAddress.value}
      image: ${n.M.baseDockerRegistry.value}/kube-apiserver:${i.M.kubernetes.value}
      imagePullPolicy: IfNotPresent
      livenessProbe:
        failureThreshold: 8
        httpGet:
          host: $\{MACHINE_LOCAL_ADDRESS}
          path: /livez
          port: ${u.h.kubeAPIServer.portNumber}
          scheme: HTTPS
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      name: kube-apiserver
      readinessProbe:
        failureThreshold: 3
        httpGet:
          host: $\{MACHINE_LOCAL_ADDRESS}
          path: /readyz
          port: ${u.h.kubeAPIServer.portNumber}
          scheme: HTTPS
        periodSeconds: 1
        timeoutSeconds: 15
      resources:
        requests:
          cpu: 250m
      startupProbe:
        failureThreshold: 24
        httpGet:
          host: $\{MACHINE_LOCAL_ADDRESS}
          path: /livez
          port: ${u.h.kubeAPIServer.portNumber}
          scheme: HTTPS
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      volumeMounts:
      - mountPath: /etc/ssl/certs
        name: ca-certs
        readOnly: true
      - mountPath: /etc/ca-certificates
        name: etc-ca-certificates
        readOnly: true
      - mountPath: /etc/pki
        name: etc-pki
        readOnly: true
      - mountPath: /var/log/kubernetes/audit/
        name: k8s-audit
      - mountPath: /etc/kubernetes/audit-policy.yaml
        name: k8s-audit-policy
        readOnly: true
      - mountPath: ${n.M.kubernetesBaseFolderPath.value}/pki
        name: k8s-certs
        readOnly: true
      - mountPath: /usr/local/share/ca-certificates
        name: usr-local-share-ca-certificates
        readOnly: true
      - mountPath: /usr/share/ca-certificates
        name: usr-share-ca-certificates
        readOnly: true
    hostNetwork: true
    priority: 2000001000
    priorityClassName: system-node-critical
    securityContext:
      seccompProfile:
        type: RuntimeDefault
    volumes:
    - hostPath:
        path: /etc/ssl/certs
        type: DirectoryOrCreate
      name: ca-certs
    - hostPath:
        path: /etc/ca-certificates
        type: DirectoryOrCreate
      name: etc-ca-certificates
    - hostPath:
        path: /etc/pki
        type: DirectoryOrCreate
      name: etc-pki
    - hostPath:
        path: /var/log/kubernetes/audit/
        type: DirectoryOrCreate
      name: k8s-audit
    - hostPath:
        path: /etc/kubernetes/audit-policy.yaml
        type: File
      name: k8s-audit-policy
    - hostPath:
        path: ${n.M.kubernetesBaseFolderPath.value}/pki
        type: DirectoryOrCreate
      name: k8s-certs
    - hostPath:
        path: /usr/local/share/ca-certificates
        type: DirectoryOrCreate
      name: usr-local-share-ca-certificates
    - hostPath:
        path: /usr/share/ca-certificates
        type: DirectoryOrCreate
      name: usr-share-ca-certificates
  status: {}
  EOF
`})]})]})}function k(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(b,{...e})}):b(e)}},56879(e,t,a){a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>v});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/scheduler/kubeadm","title":"kubeadm","description":"Manifest generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/scheduler/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/components/scheduler","slug":"/tech-docs/kubernetes/components/scheduler/kubeadm","permalink":"/en/tech-docs/kubernetes/components/scheduler/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=a(74848),l=a(28453),n=a(44349),i=a(57390),s=a(60513);const u={},c=void 0,d={},v=[];function h(e){const t={admonition:"admonition",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h4",{children:"Manifest generation"}),"\n",(0,o.jsx)(i.A,{language:"bash",children:s.A`
  kubeadm init phase  control-plane scheduler \\
    --config=${n.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(i.A,{language:"bash",children:s.A`
  #### Kube API
  [control-plane] Creating static Pod manifest for "kube-scheduler"
`})})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},89689(e,t,a){a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/scheduler/setupInitComponent","title":"setupInitComponent","description":"This section is optional and is intended only for cases where this resource needs to be configured separately from the rest.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/scheduler/setupInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/scheduler","slug":"/tech-docs/kubernetes/components/scheduler/setupInitComponent","permalink":"/en/tech-docs/kubernetes/components/scheduler/setupInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=a(74848),l=a(28453),n=a(9792),i=a(76331),s=a(33271),u=a(56879);const c={},d=void 0,v={},h=[...s.toc,...u.toc];function p(e){const t={admonition:"admonition",p:"p",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,o.jsx)(t.p,{children:"This section is optional and is intended only for cases where this resource needs to be configured separately from the rest."})}),"\n",(0,o.jsxs)(i.A,{groupId:"install-type",children:[(0,o.jsx)(n.A,{value:"HardWay",children:(0,o.jsx)(s.default,{})}),(0,o.jsx)(n.A,{value:"Kubeadm",children:(0,o.jsx)(u.default,{})})]})]})}function m(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},33271(e,t,a){a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>k,frontMatter:()=>v,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/scheduler/staticPod","title":"staticPod","description":"Working directory","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/scheduler/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/scheduler","slug":"/tech-docs/kubernetes/components/scheduler/staticPod","permalink":"/en/tech-docs/kubernetes/components/scheduler/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=a(74848),l=a(28453),n=a(44349),i=a(285),s=a(68741),u=a(57390),c=a(60513),d=a(21502);const v={},h=void 0,p={},m=[];function b(e){const{Details:t}={...(0,l.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h4",{children:"Working directory"}),"\n",(0,o.jsx)(u.A,{language:"bash",children:c.A`
  mkdir -p ${n.M.kubernetesBaseFolderPath.value}/manifests
`}),"\n",(0,o.jsxs)(t,{className:"custom-blue-block",children:[(0,o.jsx)("summary",{children:"Static Pod Kube-Scheduler"}),(0,o.jsx)("h4",{children:"Manifest generation"}),(0,o.jsx)(u.A,{language:"bash",children:c.A`
  cat <<EOF > ${n.M.kubernetesBaseFolderPath.value}/manifests/kube-scheduler.yaml
  apiVersion: v1
  kind: Pod
  metadata:
    creationTimestamp: null
    labels:
      component: kube-scheduler
      tier: control-plane
    name: kube-scheduler
    namespace: kube-system
  spec:
    containers:
    - command:
      - kube-scheduler
      - --authentication-kubeconfig=${d.w.authenticationKubeconfig.value}
      - --authentication-skip-lookup=${d.w.authenticationSkipLookup.value}
      - --authentication-token-webhook-cache-ttl=${d.w.authenticationTokenWebhookCacheTtl.value}
      - --authentication-tolerate-lookup-failure=${d.w.authenticationTolerateLookupFailure.value}
      - --authorization-always-allow-paths=${d.w.authorizationAlwaysAllowPaths.value}
      - --authorization-kubeconfig=${d.w.authorizationKubeconfig.value}
      - --authorization-webhook-cache-authorized-ttl=${d.w.authorizationWebhookCacheAuthorizedTtl.value}
      - --authorization-webhook-cache-unauthorized-ttl=${d.w.authorizationWebhookCacheUnauthorizedTtl.value}
      - --bind-address=${d.w.bindAddress.value}
      - --client-ca-file=${d.w.clientCaFile.value}
      - --contention-profiling=${d.w.contentionProfiling.value}
      - --help=${d.w.help.value}
      - --http2-max-streams-per-connection=${d.w.http2MaxStreamsPerConnection.value}
      - --kube-api-burst=${d.w.kubeApiBurst.value}
      - --kube-api-content-type=${d.w.kubeApiContentType.value}
      - --kube-api-qps=${d.w.kubeApiQps.value}
      - --kubeconfig=${d.w.kubeconfig.value}
      - --leader-elect=${d.w.leaderElect.value}
      - --leader-elect-lease-duration=${d.w.leaderElectLeaseDuration.value}
      - --leader-elect-renew-deadline=${d.w.leaderElectRenewDeadline.value}
      - --leader-elect-resource-lock=${d.w.leaderElectResourceLock.value}
      - --leader-elect-resource-name=${d.w.leaderElectResourceName.value}
      - --leader-elect-resource-namespace=${d.w.leaderElectResourceNamespace.value}
      - --leader-elect-retry-period=${d.w.leaderElectRetryPeriod.value}
      - --log-flush-frequency=${d.w.logFlushFrequency.value}
      - --log-json-info-buffer-size=${d.w.logJsonInfoBufferSize.value}
      - --log-json-split-stream=${d.w.logJsonSplitStream.value}
      - --log-text-info-buffer-size=${d.w.logTextInfoBufferSize.value}
      - --log-text-split-stream=${d.w.logTextSplitStream.value}
      - --logging-format=${d.w.loggingFormat.value}
      - --permit-address-sharing=${d.w.permitAddressSharing.value}
      - --permit-port-sharing=${d.w.permitPortSharing.value}
      - --pod-max-in-unschedulable-pods-duration=${d.w.podMaxInUnschedulablePodsDuration.value}
      - --profiling=${d.w.profiling.value}
      - --requestheader-extra-headers-prefix=${d.w.requestheaderExtraHeadersPrefix.value}
      - --requestheader-group-headers=${d.w.requestheaderGroupHeaders.value}
      - --requestheader-username-headers=${d.w.requestheaderUsernameHeaders.value}
      - --secure-port=${d.w.securePort.value}
      - --v=${d.w.v.value}
      - --version=${d.w.version.value}
    # IF YOU NEED TO ATTACH SERVER CERTIFICATES FOR KUBE-SCHEDULER
    # NOTE THAT KUBEADM DOES NOT CREATE THESE CERTIFICATES
    # UNCOMMENT THE FOLLOWING
    # ->
    # - --tls-cert-file=${d.w.tlsCertFile.value}
    # - --tls-private-key-file=${d.w.tlsPrivateKeyFile.value}
    # <-
    # - --allow-metric-labels=${d.w.allowMetricLabels.value}
    # - --allow-metric-labels-manifest=${d.w.allowMetricLabelsManifest.value}
    # - --cert-dir=${d.w.certDir.value}
    # - --config=${d.w.config.value}
    # - --disabled-metrics=${d.w.disabledMetrics.value}
    # - --feature-gates=${d.w.featureGates.value}
    # - --master=${d.w.master.value}
    # - --requestheader-allowed-names=${d.w.requestheaderAllowedNames.value}
    # - --requestheader-client-ca-file=${d.w.requestheaderClientCaFile.value}
    # - --show-hidden-metrics-for-version=${d.w.showHiddenMetricsForVersion.value}
    # - --tls-cipher-suites=${d.w.tlsCipherSuites.value}
    # - --tls-min-version=${d.w.tlsMinVersion.value}
    # - --tls-sni-cert-key=${d.w.tlsSniCertKey.value}
    # - --vmodule=${d.w.vmodule.value}
    # - --write-config-to=${d.w.writeConfigTo.value}
      image: ${n.M.baseDockerRegistry.value}/kube-scheduler:${s.M.kubernetes.value}
      imagePullPolicy: IfNotPresent
      livenessProbe:
        failureThreshold: 8
        httpGet:
          path: /healthz
          port: ${i.h.kubeScheduler.portNumber}
          scheme: HTTPS
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      name: kube-scheduler
      resources:
        requests:
          cpu: 100m
      startupProbe:
        failureThreshold: 24
        httpGet:
          path: /healthz
          port: ${i.h.kubeScheduler.portNumber}
          scheme: HTTPS
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      volumeMounts:
      - mountPath: ${n.M.kubernetesBaseFolderPath.value}/scheduler.conf
        name: kubeconfig
        readOnly: true
    # IF YOU NEED TO ATTACH SERVER CERTIFICATES FOR KUBE-SCHEDULER
    # NOTE THAT KUBEADM DOES NOT CREATE THESE CERTIFICATES
    # UNCOMMENT THE FOLLOWING
    # ->
    # - mountPath: ${d.w.tlsCertFile.value}
    #   name: kube-scheduler-crt
    #   readOnly: true
    # - mountPath: ${d.w.tlsPrivateKeyFile.value}
    #   name: kube-scheduler-key
    #   readOnly: true
    hostNetwork: true
    priority: 2000001000
    priorityClassName: system-node-critical
    securityContext:
      seccompProfile:
        type: RuntimeDefault
    volumes:
    - hostPath:
        path: ${n.M.kubernetesBaseFolderPath.value}/scheduler.conf
        type: FileOrCreate
      name: kubeconfig
    # IF YOU NEED TO ATTACH SERVER CERTIFICATES FOR KUBE-SCHEDULER
    # NOTE THAT KUBEADM DOES NOT CREATE THESE CERTIFICATES
    # UNCOMMENT THE FOLLOWING
    # ->
    # - hostPath:
    #     path: ${d.w.tlsCertFile.value}
    #     type: FileOrCreate
    #   name: kube-scheduler-crt
    # - hostPath:
    #     path: ${d.w.tlsPrivateKeyFile.value}
    #     type: FileOrCreate
    #   name: kube-scheduler-key
  status: {}
  EOF
`})]})]})}function k(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(b,{...e})}):b(e)}},65742(e,t,a){a.d(t,{$:()=>o});var r=a(44349);const o={etcdCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},kubernetesControllerManagerServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-server.conf`,keySize:"2048",cname:"system:kube-controller-manager-server"},etcdClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/sa.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"},kubernetesSchedulerServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/scheduler-server.conf`,keySize:"2048",cname:"system:kube-scheduler-server"}}},68741(e,t,a){a.d(t,{M:()=>r});const r={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.12"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},56223(e,t,a){a.d(t,{L:()=>n});var r=a(65742),o=a(285),l=a(44349);const n={etcdCafile:{value:`${r.$.etcdCA.crtPath}`},etcdCertfile:{value:`${r.$.kubernetesEtcdClient.crtPath}`},etcdKeyfile:{value:`${r.$.kubernetesEtcdClient.keyPath}`},certDir:{value:"/var/run/kubernetes"},kubeletClientCertificate:{value:`${r.$.kubernetesKubeletClient.crtPath}`},kubeletClientKey:{value:`${r.$.kubernetesKubeletClient.keyPath}`},clientCAFile:{value:`${r.$.kubernetesCA.crtPath}`},proxyClientCertFile:{value:`${r.$.kubernetesFrontProxyClient.crtPath}`},proxyClientKeyFile:{value:`${r.$.kubernetesFrontProxyClient.keyPath}`},tlsCertFile:{value:`${r.$.kubernetesServer.crtPath}`},tlsPrivateKeyFile:{value:`${r.$.kubernetesServer.keyPath}`},clientCaFile:{value:`${r.$.kubernetesCA.crtPath}`},serviceAccountKeyFile:{value:`${r.$.kubernetesSA.crtPath}`},requestheaderClientCaFile:{value:`${r.$.frontProxyCA.crtPath}`},serviceAccountSigningKeyFile:{value:`${r.$.kubernetesSA.keyPath}`},aggregatorRejectForwardingRedirect:{value:"true"},allowPrivileged:{value:"true"},anonymousAuth:{value:"true"},auditLogBatchThrottleEnable:{value:"false"},auditLogCompress:{value:"false"},auditLogTruncateEnabled:{value:"false"},auditWebhookBatchThrottleEnable:{value:"true"},auditWebhookTruncateEnabled:{value:"false"},contentionProfiling:{value:"false"},enableAggregatorRouting:{value:"true"},enableBootstrapTokenAuth:{value:"true"},enableGarbageCollector:{value:"true"},enableLogsHandler:{value:"true"},enablePriorityAndFairness:{value:"true"},encryptionProviderConfigAutomaticReload:{value:"false"},help:{value:"false"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},version:{value:"false"},watchCache:{value:"true"},logTextSplitStream:{value:"false"},shutdownSendRetryAfter:{value:"false"},logJsonSplitStream:{value:"false"},serviceAccountExtendTokenExpiration:{value:"true"},serviceAccountLookup:{value:"true"},apiserverCount:{value:"1"},auditLogBatchBufferSize:{value:"10000"},auditLogBatchMaxSize:{value:"1"},auditLogBatchThrottleBurst:{value:"0"},auditLogBatchThrottleQps:{value:"0"},auditLogMaxage:{value:"30"},auditLogMaxbackup:{value:"10"},auditLogMaxsize:{value:"1000"},auditLogTruncateMaxBatchSize:{value:"10485760"},auditLogTruncateMaxEventSize:{value:"102400"},auditWebhookBatchBufferSize:{value:"10000"},auditWebhookBatchMaxSize:{value:"400"},auditWebhookBatchThrottleBurst:{value:"15"},auditWebhookBatchThrottleQps:{value:"10"},auditWebhookTruncateMaxBatchSize:{value:"10485760"},auditWebhookTruncateMaxEventSize:{value:"102400"},defaultNotReadyTolerationSeconds:{value:"300"},defaultUnreachableTolerationSeconds:{value:"300"},defaultWatchCacheSize:{value:"100"},deleteCollectionWorkers:{value:"1"},kubernetesServiceNodePort:{value:"0"},leaseReuseDurationSeconds:{value:"60"},maxMutatingRequestsInflight:{value:"200"},maxRequestsInflight:{value:"400"},minRequestTimeout:{value:"1800"},goawayChance:{value:"0"},http2MaxStreamsPerConnection:{value:"0"},v:{value:"2"},logJsonInfoBufferSize:{value:"0"},logTextInfoBufferSize:{value:"0"},maxConnectionBytesPerSec:{value:"0"},kubeletPort:{value:`${o.h.kubeletServer.portNumber}`},securePort:{value:`${o.h.kubeAPIServer.portNumber}`},kubeletReadOnlyPort:{value:`${o.h.kubeletReadOnlyPort.portNumber}`},serviceNodePortRange:{value:"30000-32767"},etcdServers:{value:`https://127.0.0.1:${o.h.etcdServer.portNumber}`},serviceAccountIssuer:{value:`https://kubernetes.default.svc.${l.M.kubernetesClusterDomain.value}`},serviceClusterIpRange:{value:`${l.M.kubernetesServiceCIDR.value}`},auditWebhookInitialBackoff:{value:"10s"},auditWebhookBatchMaxWait:{value:"30s"},serviceAccountMaxTokenExpiration:{value:"0s"},shutdownWatchTerminationGracePeriod:{value:"0s"},shutdownDelayDuration:{value:"0s"},requestTimeout:{value:"1m0s"},eventTtl:{value:"1h0m0s"},livezGracePeriod:{value:"0s"},logFlushFrequency:{value:"5s"},kubeletTimeout:{value:"5s"},etcdCompactionInterval:{value:"5m0s"},etcdCountMetricPollPeriod:{value:"1m0s"},etcdDbMetricPollInterval:{value:"30s"},etcdHealthcheckTimeout:{value:"2s"},etcdReadycheckTimeout:{value:"2s"},authenticationTokenWebhookCacheTtl:{value:"2m0s"},authorizationWebhookCacheAuthorizedTtl:{value:"5m0s"},authorizationWebhookCacheUnauthorizedTtl:{value:"30s"},auditWebhookBatchInitialBackoff:{value:"10s"},auditLogBatchMaxWait:{value:"0s"},bindAddress:{value:"0.0.0.0"},cloudProviderGceL7lbSrcCidrs:{value:"130.211.0.0/22,35.191.0.0/16"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},apiAudiences:{value:"konnectivity-server"},loggingFormat:{value:"text"},auditLogFormat:{value:"json"},auditLogMode:{value:"batch"},auditWebhookMode:{value:"batch"},auditLogVersion:{value:"audit.k8s.io/v1"},auditWebhookVersion:{value:"audit.k8s.io/v1"},authenticationTokenWebhookVersion:{value:"v1beta1"},authorizationMode:{value:"Node,RBAC"},authorizationWebhookVersion:{value:"v1beta1"},cloudProvider:{value:"external"},enableAdmissionPlugins:{value:"NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,PodSecurity"},endpointReconcilerType:{value:"lease"},storageMediaType:{value:"application/vnd.kubernetes.protobuf"},etcdPrefix:{value:"/registry"},featureGates:{value:"RotateKubeletServerCertificate=true"},kubeletPreferredAddressTypes:{value:"InternalIP,ExternalIP,Hostname"},oidcSigningAlgs:{value:"RS256"},oidcUsernameClaim:{value:"sub"},requestheaderAllowedNames:{value:"front-proxy-client"},requestheaderExtraHeadersPrefix:{value:"X-Remote-Extra-"},requestheaderGroupHeaders:{value:"X-Remote-Group"},requestheaderUsernameHeaders:{value:"X-Remote-User"},runtimeConfig:{value:"api/all=true"},storageBackend:{value:"etcd3"},auditPolicyFile:{value:`${l.M.kubernetesAPIAuditPolicyPath.value}`},auditLogPath:{value:`${l.M.kubernetesAPIAuditLogPath.value}`},advertiseAddress:{value:""},admissionControl:{value:""},admissionControlConfigFile:{value:""},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},auditWebhookConfigFile:{value:""},authenticationConfig:{value:""},authenticationTokenWebhookConfigFile:{value:""},authorizationConfig:{value:""},authorizationPolicyFile:{value:""},authorizationWebhookConfigFile:{value:""},cloudConfig:{value:""},corsAllowedOrigins:{value:""},debugSocketPath:{value:""},disableAdmissionPlugins:{value:""},disabledMetrics:{value:""},egressSelectorConfigFile:{value:""},encryptionProviderConfig:{value:""},etcdServersOverrides:{value:""},externalHostname:{value:""},kubeletCertificateAuthority:{value:""},oidcCaFile:{value:""},oidcClientId:{value:""},oidcGroupsClaim:{value:""},oidcGroupsPrefix:{value:""},oidcIssuerUrl:{value:""},oidcRequiredClaim:{value:""},oidcUsernamePrefix:{value:""},peerAdvertiseIp:{value:""},peerAdvertisePort:{value:""},peerCaFile:{value:""},serviceAccountJwksUri:{value:""},showHiddenMetricsForVersion:{value:""},strictTransportSecurityDirectives:{value:""},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsSniCertKey:{value:""},tokenAuthFile:{value:""},tracingConfigFile:{value:""},vmodule:{value:""},watchCacheSizes:{value:""}}},21232(e,t,a){a.d(t,{L:()=>l});var r=a(65742),o=a(44349);const l={authenticationKubeconfig:{value:`${o.M.kubernetesBaseFolderPath.value}/controller-manager.conf`},authorizationKubeconfig:{value:`${o.M.kubernetesBaseFolderPath.value}/controller-manager.conf`},kubeconfig:{value:`${o.M.kubernetesBaseFolderPath.value}/controller-manager.conf`},clientCaFile:{value:`${r.$.kubernetesCA.crtPath}`},clusterSigningCertFile:{value:`${r.$.kubernetesCA.crtPath}`},clusterSigningKeyFile:{value:`${r.$.kubernetesCA.keyPath}`},requestheaderClientCaFile:{value:`${r.$.frontProxyCA.crtPath}`},rootCaFile:{value:`${r.$.kubernetesCA.crtPath}`},serviceAccountPrivateKeyFile:{value:`${o.M.kubernetesBaseFolderPath.value}/pki/sa.key`},clusterName:{value:"${CLUSTER_NAME}"},allocateNodeCidrs:{value:"false"},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},allowUntaggedCloud:{value:"false"},authenticationSkipLookup:{value:"false"},authenticationTokenWebhookCacheTtl:{value:"10s"},authenticationTolerateLookupFailure:{value:"false"},authorizationAlwaysAllowPaths:{value:"/healthz,/readyz,/livez,/metrics"},authorizationWebhookCacheAuthorizedTtl:{value:"10s"},authorizationWebhookCacheUnauthorizedTtl:{value:"10s"},bindAddress:{value:"0.0.0.0"},certDir:{value:""},cidrAllocatorType:{value:"RangeAllocator"},cloudConfig:{value:""},cloudProvider:{value:"external"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},clusterCidr:{value:""},clusterSigningDuration:{value:"720h0m0s"},clusterSigningKubeApiserverClientCertFile:{value:""},clusterSigningKubeApiserverClientKeyFile:{value:""},clusterSigningKubeletClientCertFile:{value:""},clusterSigningKubeletClientKeyFile:{value:""},clusterSigningKubeletServingCertFile:{value:""},clusterSigningKubeletServingKeyFile:{value:""},clusterSigningLegacyUnknownCertFile:{value:""},clusterSigningLegacyUnknownKeyFile:{value:""},concurrentCronJobSyncs:{value:"5"},concurrentDeploymentSyncs:{value:"5"},concurrentEndpointSyncs:{value:"5"},concurrentEphemeralvolumeSyncs:{value:"5"},concurrentGcSyncs:{value:"20"},concurrentHorizontalPodAutoscalerSyncs:{value:"5"},concurrentJobSyncs:{value:"5"},concurrentNamespaceSyncs:{value:"10"},concurrentRcSyncs:{value:"5"},concurrentReplicasetSyncs:{value:"20"},concurrentResourceQuotaSyncs:{value:"5"},concurrentServiceEndpointSyncs:{value:"5"},concurrentServiceSyncs:{value:"1"},concurrentServiceaccountTokenSyncs:{value:"5"},concurrentStatefulsetSyncs:{value:"5"},concurrentTtlAfterFinishedSyncs:{value:"5"},concurrentValidatingAdmissionPolicyStatusSyncs:{value:"5"},configureCloudRoutes:{value:"true"},contentionProfiling:{value:"false"},controllerStartInterval:{value:"0s"},controllers:{value:"*,bootstrapsigner,tokencleaner"},disableAttachDetachReconcileSync:{value:"false"},disableForceDetachOnTimeout:{value:"false"},disabledMetrics:{value:""},enableDynamicProvisioning:{value:"true"},enableGarbageCollector:{value:"true"},enableHostpathProvisioner:{value:"false"},enableLeaderMigration:{value:"false"},endpointUpdatesBatchPeriod:{value:"0s"},endpointsliceUpdatesBatchPeriod:{value:"0s"},externalCloudVolumePlugin:{value:""},featureGates:{value:"RotateKubeletServerCertificate=true"},flexVolumePluginDir:{value:"/usr/libexec/kubernetes/kubelet-plugins/volume/exec/"},help:{value:"false"},horizontalPodAutoscalerCpuInitializationPeriod:{value:"5m0s"},horizontalPodAutoscalerDownscaleDelay:{value:"5m0s"},horizontalPodAutoscalerDownscaleStabilization:{value:"5m0s"},horizontalPodAutoscalerInitialReadinessDelay:{value:"30s"},horizontalPodAutoscalerSyncPeriod:{value:"30s"},horizontalPodAutoscalerTolerance:{value:"0.1"},horizontalPodAutoscalerUpscaleDelay:{value:"3m0s"},http2MaxStreamsPerConnection:{value:"0"},kubeApiBurst:{value:"120"},kubeApiContentType:{value:"application/vnd.kubernetes.protobuf"},kubeApiQps:{value:"100"},largeClusterSizeThreshold:{value:"50"},leaderElect:{value:"true"},leaderElectLeaseDuration:{value:"15s"},leaderElectRenewDeadline:{value:"10s"},leaderElectResourceLock:{value:"leases"},leaderElectResourceName:{value:"kube-controller-manager"},leaderElectResourceNamespace:{value:"kube-system"},leaderElectRetryPeriod:{value:"2s"},leaderMigrationConfig:{value:""},legacyServiceAccountTokenCleanUpPeriod:{value:"8760h0m0s"},logFlushFrequency:{value:"5s"},logJsonInfoBufferSize:{value:"0"},logJsonSplitStream:{value:"false"},logTextInfoBufferSize:{value:"0"},logTextSplitStream:{value:"false"},loggingFormat:{value:"text"},attachDetachReconcileSyncPeriod:{value:"1m0s"},master:{value:""},maxEndpointsPerSlice:{value:"100"},minResyncPeriod:{value:"12h0m0s"},mirroringConcurrentServiceEndpointSyncs:{value:"5"},mirroringEndpointsliceUpdatesBatchPeriod:{value:"0s"},mirroringMaxEndpointsPerSubset:{value:"1000"},namespaceSyncPeriod:{value:"2m0s"},nodeCidrMaskSize:{value:"0"},nodeCidrMaskSizeIpv4:{value:"0"},nodeCidrMaskSizeIpv6:{value:"0"},nodeEvictionRate:{value:"0.1"},nodeMonitorGracePeriod:{value:"40s"},nodeMonitorPeriod:{value:"5s"},nodeStartupGracePeriod:{value:"10s"},nodeSyncPeriod:{value:"0s"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},pvRecyclerIncrementTimeoutNfs:{value:"30"},pvRecyclerMinimumTimeoutHostpath:{value:"60"},pvRecyclerMinimumTimeoutNfs:{value:"300"},pvRecyclerPodTemplateFilepathHostpath:{value:""},pvRecyclerPodTemplateFilepathNfs:{value:""},pvRecyclerTimeoutIncrementHostpath:{value:"30"},pvclaimbinderSyncPeriod:{value:"15s"},requestheaderAllowedNames:{value:""},requestheaderExtraHeadersPrefix:{value:"x-remote-extra-"},requestheaderGroupHeaders:{value:"x-remote-group"},requestheaderUsernameHeaders:{value:"x-remote-user"},resourceQuotaSyncPeriod:{value:"5m0s"},routeReconciliationPeriod:{value:"10s"},secondaryNodeEvictionRate:{value:"0.01"},securePort:{value:"10257"},serviceClusterIpRange:{value:""},showHiddenMetricsForVersion:{value:""},terminatedPodGcThreshold:{value:"0"},tlsCertFile:{value:"/etc/kubernetes/pki/controller-manager-server.crt"},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsPrivateKeyFile:{value:"/etc/kubernetes/pki/controller-manager-server.key"},tlsSniCertKey:{value:""},unhealthyZoneThreshold:{value:"0.55"},useServiceAccountCredentials:{value:"true"},v:{value:"2"},version:{value:"false"},vmodule:{value:""},volumeHostAllowLocalLoopback:{value:"true"},volumeHostCidrDenylist:{value:""}}},21502(e,t,a){a.d(t,{w:()=>l});var r=a(285),o=a(44349);const l={authenticationKubeconfig:{value:`${o.M.kubernetesBaseFolderPath.value}/scheduler.conf`},authenticationSkipLookup:{value:"false"},authenticationTokenWebhookCacheTtl:{value:"10s"},authenticationTolerateLookupFailure:{value:"true"},authorizationAlwaysAllowPaths:{value:"/healthz,/readyz,/livez,/metrics"},authorizationKubeconfig:{value:`${o.M.kubernetesBaseFolderPath.value}/scheduler.conf`},authorizationWebhookCacheAuthorizedTtl:{value:"10s"},authorizationWebhookCacheUnauthorizedTtl:{value:"10s"},bindAddress:{value:"0.0.0.0"},contentionProfiling:{value:"true"},help:{value:"false"},http2MaxStreamsPerConnection:{value:"0"},kubeApiBurst:{value:"100"},kubeApiContentType:{value:"application/vnd.kubernetes.protobuf"},kubeApiQps:{value:"50"},kubeconfig:{value:`${o.M.kubernetesBaseFolderPath.value}/scheduler.conf`},leaderElect:{value:"true"},leaderElectLeaseDuration:{value:"15s"},leaderElectRenewDeadline:{value:"10s"},leaderElectResourceLock:{value:"leases"},leaderElectResourceName:{value:"kube-scheduler"},leaderElectResourceNamespace:{value:"kube-system"},leaderElectRetryPeriod:{value:"2s"},logFlushFrequency:{value:"5s"},logJsonInfoBufferSize:{value:"0"},logJsonSplitStream:{value:"false"},logTextInfoBufferSize:{value:"0"},logTextSplitStream:{value:"false"},loggingFormat:{value:"text"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},podMaxInUnschedulablePodsDuration:{value:"5m0s"},profiling:{value:"true"},requestheaderExtraHeadersPrefix:{value:"[x-remote-extra-]"},requestheaderGroupHeaders:{value:"[x-remote-group]"},requestheaderUsernameHeaders:{value:"[x-remote-user]"},securePort:{value:`${r.h.kubeScheduler.portNumber}`},v:{value:"2"},version:{value:"false"},allowMetricLabels:{value:"[]"},disabledMetrics:{value:"[]"},requestheaderAllowedNames:{value:"[]"},tlsCipherSuites:{value:"[]"},tlsSniCertKey:{value:"[]"},allowMetricLabelsManifest:{value:""},certDir:{value:""},clientCaFile:{value:""},config:{value:""},featureGates:{value:""},vmodule:{value:""},writeConfigTo:{value:""},tlsMinVersion:{value:""},tlsPrivateKeyFile:{value:"/etc/kubernetes/pki/scheduler-server.key"},showHiddenMetricsForVersion:{value:""},tlsCertFile:{value:"/etc/kubernetes/pki/scheduler-server.crt"},requestheaderClientCaFile:{value:""},master:{value:""}}},285(e,t,a){a.d(t,{h:()=>r});const r={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}}}]);