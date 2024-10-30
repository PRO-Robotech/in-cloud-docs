/* eslint-disable no-template-curly-in-string */
import { TDownloadItems } from '@site/src/customTypes/downloads'

export const DOWNLOAD_VERSION: TDownloadItems = {
  kubelet: {
    path: '/usr/local/bin/kubelet',
    templateUrl:
      'https://storage.googleapis.com/kubernetes-release/release/${KUBERNETES_VERSION}/bin/linux/amd64/kubelet',
  },
  kubectl: {
    path: '/usr/local/bin/kubectl',
    templateUrl:
      'https://storage.googleapis.com/kubernetes-release/release/${KUBERNETES_VERSION}/bin/linux/amd64/kubectl',
  },
  kubeadm: {
    path: '/usr/local/bin/kubeadm',
    templateUrl:
      'https://storage.googleapis.com/kubernetes-release/release/${KUBERNETES_VERSION}/bin/linux/amd64/kubeadm',
  },
  runc: {
    path: '/usr/local/bin/runc',
    templateUrl: 'https://github.com/opencontainers/runc/releases/download/${RUNC_VERSION}/runc.amd64',
  },
  containerd: {
    path: '/tmp/containerd.tar.gz',
    templateUrl:
      'https://github.com/containerd/containerd/releases/download/v${CONTAINERD_VERSION}/containerd-${CONTAINERD_VERSION}-linux-amd64.tar.gz',
  },
  crictl: {
    path: '/tmp/crictl.tar.gz',
    templateUrl:
      'https://github.com/kubernetes-sigs/cri-tools/releases/download/${CRICTL_VERSION}/crictl-${CRICTL_VERSION}-linux-amd64.tar.gz',
  },
  etcdctl: {
    path: '/tmp/etcd.tar.gz',
    templateUrl:
      'https://github.com/etcd-io/etcd/releases/download/${ETCD_TOOL_VERSION}/etcd-${ETCD_TOOL_VERSION}-linux-amd64.tar.gz',
  },
}
