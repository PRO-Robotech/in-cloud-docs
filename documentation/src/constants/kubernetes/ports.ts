import { TPortsItems } from '../../customTypes/ports'

export const PORTS: TPortsItems = {
  etcdServer: {
    portNumber: '2379',
  },
  etcdPeer: {
    portNumber: '2380',
  },
  etcdMetricServer: {
    portNumber: '2381',
  },
  kubeAPIServer: {
    portNumber: '6443',
  },
  kubeControllerManager: {
    portNumber: '10257',
  },
  kubeScheduler: {
    portNumber: '10259',
  },
  kubeletHealthz: {
    portNumber: '10248',
  },
  kubeletServer: {
    portNumber: '10250',
  },
  kubeletReadOnlyPort: {
    portNumber: '10255',
  },
}
