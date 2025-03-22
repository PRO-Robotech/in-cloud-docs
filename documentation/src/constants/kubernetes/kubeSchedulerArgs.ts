/* eslint-disable no-template-curly-in-string */
import { CERTIFICATES } from '@site/src/constants/kubernetes/certs'
import { PORTS } from '@site/src/constants/kubernetes/ports'
import { TCustomValueItems } from '../../customTypes/customValue'
import { CUSTOM_VALUE } from '@site/src/constants/kubernetes/customValue'

export const KUBE_SCHEDULER_ARGS: TCustomValueItems = {
  authenticationKubeconfig: {
    value: `${CUSTOM_VALUE.kuberneteBaseFolderPath.value}/scheduler.conf`,
  },
  authenticationSkipLookup: {
    value: 'false',
  },
  authenticationTokenWebhookCacheTtl: {
    value: '10s',
  },
  authenticationTolerateLookupFailure: {
    value: 'true',
  },
  authorizationAlwaysAllowPaths: {
    value: '["/healthz","/readyz","/livez"]',
  },
  authorizationKubeconfig: {
    value: `${CUSTOM_VALUE.kuberneteBaseFolderPath.value}/scheduler.conf`,
  },
  authorizationWebhookCacheAuthorizedTtl: {
    value: '10s',
  },
  authorizationWebhookCacheUnauthorizedTtl: {
    value: '10s',
  },
  bindAddress: {
    value: '0.0.0.0',
  },
  contentionProfiling: {
    value: 'true',
  },
  help: {
    value: 'false',
  },
  http2MaxStreamsPerConnection: {
    value: '0',
  },
  kubeApiBurst: {
    value: '100',
  },
  kubeApiContentType: {
    value: 'application/vnd.kubernetes.protobuf',
  },
  kubeApiQps: {
    value: '50',
  },
  kubeconfig: {
    value: `${CUSTOM_VALUE.kuberneteBaseFolderPath.value}/scheduler.conf`,
  },
  leaderElect: {
    value: 'true',
  },
  leaderElectLeaseDuration: {
    value: '15s',
  },
  leaderElectRenewDeadline: {
    value: '10s',
  },
  leaderElectResourceLock: {
    value: 'leases',
  },
  leaderElectResourceName: {
    value: 'kube-scheduler',
  },
  leaderElectResourceNamespace: {
    value: 'kube-system',
  },
  leaderElectRetryPeriod: {
    value: '2s',
  },
  logFlushFrequency: {
    value: '5s',
  },
  logJsonInfoBufferSize: {
    value: '0',
  },
  logJsonSplitStream: {
    value: 'false',
  },
  logTextInfoBufferSize: {
    value: '0',
  },
  logTextSplitStream: {
    value: 'false',
  },
  loggingFormat: {
    value: 'text',
  },
  permitAddressSharing: {
    value: 'false',
  },
  permitPortSharing: {
    value: 'false',
  },
  podMaxInUnschedulablePodsDuration: {
    value: '5m0s',
  },
  profiling: {
    value: 'true',
  },

  requestheaderExtraHeadersPrefix: {
    value: '[x-remote-extra-]',
  },
  requestheaderGroupHeaders: {
    value: '[x-remote-group]',
  },
  requestheaderUsernameHeaders: {
    value: '[x-remote-user]',
  },
  securePort: {
    value: `${PORTS.kubeScheduler.portNumber}`,
  },
  v: {
    value: '2',
  },
  version: {
    value: 'false',
  },


  allowMetricLabels: {
    value: '[]',
  },
  disabledMetrics: {
    value: '[]',
  },
  requestheaderAllowedNames: {
    value: '[]',
  },
  tlsCipherSuites: {
    value: '[]',
  },
  tlsSniCertKey: {
    value: '[]',
  },
  allowMetricLabelsManifest: {
    value: '',
  },
  certDir: {
    value: '',
  },
  clientCaFile: {
    value: '',
  },
  config: {
    value: '',
  },
  featureGates: {
    value: '',
  },
  vmodule: {
    value: '',
  },
  writeConfigTo: {
    value: '',
  },
  tlsMinVersion: {
    value: '',
  },
  tlsPrivateKeyFile: {
    value: '',
  },
  showHiddenMetricsForVersion: {
    value: '',
  },
  tlsCertFile: {
    value: '',
  },
  requestheaderClientCaFile: {
    value: '',
  },
  master: {
    value: '',
  },
};
