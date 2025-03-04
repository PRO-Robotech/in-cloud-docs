/* eslint-disable no-template-curly-in-string */
import { TDownloadItems } from '@site/src/customTypes/downloads'

export const DOWNLOAD_VERSION: TDownloadItems = {
  kubelet: {
    path: '/usr/local/bin/kubelet',
    templateUrlBin: '${KUBERNETES_VERSION}/bin/linux/amd64/kubelet',
    templateUrlBinCheckSum: '${KUBERNETES_VERSION}/bin/linux/amd64/kubelet.sha256',
    baseUrl: 'https://dl.k8s.io/'
  },
  kubectl: {
    path: '/usr/local/bin/kubectl',
    templateUrlBin: '${KUBERNETES_VERSION}/bin/linux/amd64/kubectl',
    templateUrlBinCheckSum: '${KUBERNETES_VERSION}/bin/linux/amd64/kubectl.sha256',
    baseUrl: 'https://dl.k8s.io/'
  },
  kubeadm: {
    path: '/usr/local/bin/kubeadm',
    templateUrlBin: '${KUBERNETES_VERSION}/bin/linux/amd64/kubeadm',
    templateUrlBinCheckSum: '${KUBERNETES_VERSION}/bin/linux/amd64/kubeadm.sha256',
    baseUrl: 'https://dl.k8s.io/'
  },
  runc: {
    path: '/usr/local/bin/runc',
    templateUrlBin: '${RUNC_VERSION}/runc.amd64',
    templateUrlBinCheckSum: "${RUNC_VERSION}/runc.sha256sum",
    baseUrl: 'https://github.com/opencontainers/runc/releases/download'
  },
  containerd: {
    path: '/usr/local/bin/',
    templateUrlBin: 'v${CONTAINERD_VERSION}/containerd-${CONTAINERD_VERSION}-linux-amd64.tar.gz',
    templateUrlBinCheckSum: 'v${CONTAINERD_VERSION}/containerd-${CONTAINERD_VERSION}-linux-amd64.tar.gz.sha256sum',
    baseUrl: 'https://github.com/containerd/containerd/releases/download'
  },
  crictl: {
    path: '/usr/local/bin/crictl',
    templateUrlBin: '${CRICTL_VERSION}/crictl-${CRICTL_VERSION}-linux-amd64.tar.gz',
    templateUrlBinCheckSum: "${CRICTL_VERSION}/crictl-${CRICTL_VERSION}-linux-amd64.tar.gz.sha256",
    baseUrl: 'https://github.com/kubernetes-sigs/cri-tools/releases/download'
  },
  etcdctl: {
    path: '/usr/local/bin/',
    templateUrlBin: '${ETCD_VERSION}/etcd-${ETCD_VERSION}-linux-amd64.tar.gz',
    templateUrlBinCheckSum: '${ETCD_VERSION}/SHA256SUMS',
    baseUrl: 'https://github.com/etcd-io/etcd/releases/download'
  },
}
