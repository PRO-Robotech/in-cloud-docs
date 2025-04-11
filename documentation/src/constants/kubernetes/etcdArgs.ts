/* eslint-disable no-template-curly-in-string */
import { CERTIFICATES } from '@site/src/constants/kubernetes/certs'
import { PORTS } from '@site/src/constants/kubernetes/ports'
import { TCustomValueItems } from '../../customTypes/customValue'

export const ETCD_ARGS: TCustomValueItems = {
  name: {
    value: '${FULL_HOST_NAME}',
  },
  initialCluster: {
    value: '${ETCD_INITIAL_CLUSTER}',
  },
  initialAdvertisePeerUrls: {
    value: `https://$\{MACHINE_LOCAL_ADDRESS}:${PORTS.etcdPeer.portNumber}`,
  },
  initialClusterToken: {
    value: 'etcd',
  },
  initialClusterState: {
    value: 'new',
  },

  peerCertFile: {
    value: `${CERTIFICATES.etcdPeer.crtPath}`,
  },
  peerKeyFile: {
    value: `${CERTIFICATES.etcdPeer.keyPath}`,
  },
  peerTrustedCAFile: {
    value: `${CERTIFICATES.etcdCA.crtPath}`,
  },
  peerClientCertAuth: {
    value: 'true',
  },

  certFile: {
    value: `${CERTIFICATES.etcdServer.crtPath}`,
  },
  keyFile: {
    value: `${CERTIFICATES.etcdServer.keyPath}`,
  },
  trustedCAFile: {
    value: `${CERTIFICATES.etcdCA.crtPath}`,
  },

  listenClientUrls: {
    value: `https://127.0.0.1:${PORTS.etcdServer.portNumber},https://$\{MACHINE_LOCAL_ADDRESS}:${PORTS.etcdServer.portNumber}`,
  },
  listenPeerUrls: {
    value: `https://$\{MACHINE_LOCAL_ADDRESS}:${PORTS.etcdPeer.portNumber}`,
  },
  listenMetricsUrls: {
    value: `http://127.0.0.1:${PORTS.etcdMetricServer.portNumber}`,
  },

  dataDir: {
    value: '/var/lib/etcd',
  },
  quotaBackendBytes: {
    value: '10737418240',
  },
  clientCertAuth: {
    value: 'true',
  },
  heartbeatInterval: {
    value: '250',
  },
  electionTimeout: {
    value: '1500',
  },
  maxSnapshots: {
    value: '10',
  },
  maxWals: {
    value: '10',
  },
  autoCompactionRetention: {
    value: '8',
  },
  metrics: {
    value: 'extensive',
  },
  logger: {
    value: 'zap',
  },
  advertiseClientUrls: {
    value: `https://$\{MACHINE_LOCAL_ADDRESS}:${PORTS.etcdServer.portNumber}`,
  },

  workDir: {
    value: '/tmp/etcd',
  },
  dbPath: {
    value: '/var/lib/etcd/member/snap/db',
  },

  snapshotCount: {
    value: '10000',
  },
  experimentalInitialCorruptCheck: {
    value: 'true',
  },
  experimentalWatchProgressNotifyInterval: {
    value: '5s',
  },
}
