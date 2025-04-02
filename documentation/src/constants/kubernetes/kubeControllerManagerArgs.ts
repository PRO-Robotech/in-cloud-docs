/* eslint-disable no-template-curly-in-string */
import { CERTIFICATES } from '@site/src/constants/kubernetes/certs'
import { CUSTOM_VALUE } from '@site/src/constants/kubernetes/customValue'
import { TCustomValueItems } from '../../customTypes/customValue'

export const KUBE_CONTROLLER_MANAGER_ARGS: TCustomValueItems = {
  authenticationKubeconfig: { value: `${CUSTOM_VALUE.kuberneteBaseFolderPath.value}/controller-manager.conf` },
  authorizationKubeconfig: { value: `${CUSTOM_VALUE.kuberneteBaseFolderPath.value}/controller-manager.conf` },
  kubeconfig: { value: `${CUSTOM_VALUE.kuberneteBaseFolderPath.value}/controller-manager.conf` },
  clientCaFile: { value: `${CERTIFICATES.kubernetesCA.crtPath}` },
  clusterSigningCertFile: { value: `${CERTIFICATES.kubernetesCA.crtPath}` },
  clusterSigningKeyFile: { value: `${CERTIFICATES.kubernetesCA.keyPath}` },
  requestheaderClientCaFile: { value: `${CERTIFICATES.frontProxyCA.crtPath}` },
  rootCaFile: { value: `${CERTIFICATES.kubernetesCA.crtPath}` },
  serviceAccountPrivateKeyFile: { value: `${CUSTOM_VALUE.kuberneteBaseFolderPath.value}/pki/sa.key` },
  clusterName: { value: '${CLUSTER_NAME}' },

  allocateNodeCidrs: { value: 'false' },
  allowMetricLabels: { value: '' },
  allowMetricLabelsManifest: { value: '' },
  allowUntaggedCloud: { value: 'false' },
  authenticationSkipLookup: { value: 'false' },
  authenticationTokenWebhookCacheTtl: { value: '10s' },
  authenticationTolerateLookupFailure: { value: 'false' },
  authorizationAlwaysAllowPaths: { value: '/healthz,/readyz,/livez,/metrics' },
  authorizationWebhookCacheAuthorizedTtl: { value: '10s' },
  authorizationWebhookCacheUnauthorizedTtl: { value: '10s' },
  bindAddress: { value: '0.0.0.0' },
  certDir: { value: '' },
  cidrAllocatorType: { value: 'RangeAllocator' },
  cloudConfig: { value: '' },
  cloudProvider: { value: 'external' },
  cloudProviderGceLbSrcCidrs: { value: '130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16' },
  clusterCidr: { value: '' },
  clusterSigningDuration: { value: '720h0m0s' },
  clusterSigningKubeApiserverClientCertFile: { value: '' },
  clusterSigningKubeApiserverClientKeyFile: { value: '' },
  clusterSigningKubeletClientCertFile: { value: '' },
  clusterSigningKubeletClientKeyFile: { value: '' },
  clusterSigningKubeletServingCertFile: { value: '' },
  clusterSigningKubeletServingKeyFile: { value: '' },
  clusterSigningLegacyUnknownCertFile: { value: '' },
  clusterSigningLegacyUnknownKeyFile: { value: '' },
  concurrentCronJobSyncs: { value: '5' },
  concurrentDeploymentSyncs: { value: '5' },
  concurrentEndpointSyncs: { value: '5' },
  concurrentEphemeralvolumeSyncs: { value: '5' },
  concurrentGcSyncs: { value: '20' },
  concurrentHorizontalPodAutoscalerSyncs: { value: '5' },
  concurrentJobSyncs: { value: '5' },
  concurrentNamespaceSyncs: { value: '10' },
  concurrentRcSyncs: { value: '5' },
  concurrentReplicasetSyncs: { value: '20' },
  concurrentResourceQuotaSyncs: { value: '5' },
  concurrentServiceEndpointSyncs: { value: '5' },
  concurrentServiceSyncs: { value: '1' },
  concurrentServiceaccountTokenSyncs: { value: '5' },
  concurrentStatefulsetSyncs: { value: '5' },
  concurrentTtlAfterFinishedSyncs: { value: '5' },
  concurrentValidatingAdmissionPolicyStatusSyncs: { value: '5' },
  configureCloudRoutes: { value: 'true' },
  contentionProfiling: { value: 'false' },
  controllerStartInterval: { value: '0s' },
  controllers: { value: '*,bootstrapsigner,tokencleaner' },
  disableAttachDetachReconcileSync: { value: 'false' },
  disableForceDetachOnTimeout: { value: 'false' },
  disabledMetrics: { value: '' },
  enableDynamicProvisioning: { value: 'true' },
  enableGarbageCollector: { value: 'true' },
  enableHostpathProvisioner: { value: 'false' },
  enableLeaderMigration: { value: 'false' },
  endpointUpdatesBatchPeriod: { value: '0s' },
  endpointsliceUpdatesBatchPeriod: { value: '0s' },
  externalCloudVolumePlugin: { value: '' },
  featureGates: { value: 'RotateKubeletServerCertificate=true' },
  flexVolumePluginDir: { value: '/usr/libexec/kubernetes/kubelet-plugins/volume/exec/' },
  help: { value: 'false' },
  horizontalPodAutoscalerCpuInitializationPeriod: { value: '5m0s' },
  horizontalPodAutoscalerDownscaleDelay: { value: '5m0s' },
  horizontalPodAutoscalerDownscaleStabilization: { value: '5m0s' },
  horizontalPodAutoscalerInitialReadinessDelay: { value: '30s' },
  horizontalPodAutoscalerSyncPeriod: { value: '30s' },
  horizontalPodAutoscalerTolerance: { value: '0.1' },
  horizontalPodAutoscalerUpscaleDelay: { value: '3m0s' },
  http2MaxStreamsPerConnection: { value: '0' },
  kubeApiBurst: { value: '120' },
  kubeApiContentType: { value: 'application/vnd.kubernetes.protobuf' },
  kubeApiQps: { value: '100' },
  largeClusterSizeThreshold: { value: '50' },
  leaderElect: { value: 'true' },
  leaderElectLeaseDuration: { value: '15s' },
  leaderElectRenewDeadline: { value: '10s' },
  leaderElectResourceLock: { value: 'leases' },
  leaderElectResourceName: { value: 'kube-controller-manager' },
  leaderElectResourceNamespace: { value: 'kube-system' },
  leaderElectRetryPeriod: { value: '2s' },
  leaderMigrationConfig: { value: '' },
  legacyServiceAccountTokenCleanUpPeriod: { value: '8760h0m0s' },
  logFlushFrequency: { value: '5s' },
  logJsonInfoBufferSize: { value: '0' },
  logJsonSplitStream: { value: 'false' },
  logTextInfoBufferSize: { value: '0' },
  logTextSplitStream: { value: 'false' },
  loggingFormat: { value: 'text' },
  attachDetachReconcileSyncPeriod: { value: '1m0s' },
  master: { value: '' },
  maxEndpointsPerSlice: { value: '100' },
  minResyncPeriod: { value: '12h0m0s' },
  mirroringConcurrentServiceEndpointSyncs: { value: '5' },
  mirroringEndpointsliceUpdatesBatchPeriod: { value: '0s' },
  mirroringMaxEndpointsPerSubset: { value: '1000' },
  namespaceSyncPeriod: { value: '2m0s' },
  nodeCidrMaskSize: { value: '0' },
  nodeCidrMaskSizeIpv4: { value: '0' },
  nodeCidrMaskSizeIpv6: { value: '0' },
  nodeEvictionRate: { value: '0.1' },
  nodeMonitorGracePeriod: { value: '40s' },
  nodeMonitorPeriod: { value: '5s' },
  nodeStartupGracePeriod: { value: '10s' },
  nodeSyncPeriod: { value: '0s' },
  permitAddressSharing: { value: 'false' },
  permitPortSharing: { value: 'false' },
  profiling: { value: 'false' },
  pvRecyclerIncrementTimeoutNfs: { value: '30' },
  pvRecyclerMinimumTimeoutHostpath: { value: '60' },
  pvRecyclerMinimumTimeoutNfs: { value: '300' },
  pvRecyclerPodTemplateFilepathHostpath: { value: '' },
  pvRecyclerPodTemplateFilepathNfs: { value: '' },
  pvRecyclerTimeoutIncrementHostpath: { value: '30' },
  pvclaimbinderSyncPeriod: { value: '15s' },
  requestheaderAllowedNames: { value: '' },
  requestheaderExtraHeadersPrefix: { value: 'x-remote-extra-' },
  requestheaderGroupHeaders: { value: 'x-remote-group' },
  requestheaderUsernameHeaders: { value: 'x-remote-user' },
  resourceQuotaSyncPeriod: { value: '5m0s' },
  routeReconciliationPeriod: { value: '10s' },
  secondaryNodeEvictionRate: { value: '0.01' },
  securePort: { value: '10257' },
  serviceClusterIpRange: { value: '' },
  showHiddenMetricsForVersion: { value: '' },
  terminatedPodGcThreshold: { value: '0' },
  tlsCertFile: { value: '' },
  tlsCipherSuites: { value: '' },
  tlsMinVersion: { value: '' },
  tlsPrivateKeyFile: { value: '' },
  tlsSniCertKey: { value: '' },
  unhealthyZoneThreshold: { value: '0.55' },
  useServiceAccountCredentials: { value: 'true' },
  v: { value: '2' },
  version: { value: 'false' },
  vmodule: { value: '' },
  volumeHostAllowLocalLoopback: { value: 'true' },
  volumeHostCidrDenylist: { value: '' },
}
