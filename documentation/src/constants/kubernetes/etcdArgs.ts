/* eslint-disable no-template-curly-in-string */
import { TCustomValueItems } from '../../customTypes/customValue'

export const ETCD_ARGS: TCustomValueItems = {
  name: {
    value: '${FULL_HOST_NAME}',
  },
  initialCluster: {
    value: '${ETCD_INITIAL_CLUSTER}',
  },
  initialAdvertisePeerUrls: {
    value: 'https://${MACHINE_LOCAL_ADDRESS}:${ETCD_PEER_PORT}',
  },
  initialClusterToken: {
    value: 'etcd',
  },
  initialClusterState: {
    value: 'new',
  },

  peerCertFile: {
    value: '${ETCD_PEER_CRT_PATH}',
  },
  peerKeyFile: {
    value: '${ETCD_PEER_KEY_PATH}',
  },
  peerTrustedCAFile: {
    value: '${ETCD_CA_CRT_PATH}',
  },
  peerClientCertAuth: {
    value: 'true',
  },

  certFile: {
    value: '${ETCD_SERVER_CRT_PATH}',
  },
  keyFile: {
    value: '${ETCD_SERVER_KEY_PATH}',
  },
  trustedCAFile: {
    value: '${ETCD_CA_CRT_PATH}',
  },

  listenClientUrls: {
    value: 'https://127.0.0.1:${ETCD_SERVER_PORT},https://${MACHINE_LOCAL_ADDRESS}:${ETCD_SERVER_PORT}',
  },
  listenPeerUrls: {
    value: 'https://${MACHINE_LOCAL_ADDRESS}:${ETCD_PEER_PORT}',
  },
  listenMetricsUrls: {
    value: 'http://127.0.0.1:${ETCD_METRICS_PORT}',
  },

  dataDir: {
    value: '/var/lib/etcd',
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
    value: 'https://${MACHINE_LOCAL_ADDRESS}:${ETCD_SERVER_PORT}',
  },

  workDir: {
    value: '/tmp/etcd',
  },
  dbPath: {
    value: '/var/lib/etcd/member/snap/db',
  },
}
