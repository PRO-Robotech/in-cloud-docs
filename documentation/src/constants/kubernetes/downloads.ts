/* eslint-disable no-template-curly-in-string */
import { TDownloadItems } from '@site/src/customTypes/downloads'

export const DOWNLOAD_VERSION: TDownloadItems = {
  kubelet: {
    path: '/usr/local/bin/kubelet',
    templateUrlBin: '${COMPONENT_VERSION}/bin/linux/amd64/kubelet',
    templateUrlBinCheckSum: '${COMPONENT_VERSION}/bin/linux/amd64/kubelet.sha256',
    baseUrl: 'https://dl.k8s.io',
  },
  kubectl: {
    path: '/usr/local/bin/kubectl',
    templateUrlBin: '${COMPONENT_VERSION}/bin/linux/amd64/kubectl',
    templateUrlBinCheckSum: '${COMPONENT_VERSION}/bin/linux/amd64/kubectl.sha256',
    baseUrl: 'https://dl.k8s.io',
  },
  kubeadm: {
    path: '/usr/local/bin/kubeadm',
    templateUrlBin: '${COMPONENT_VERSION}/bin/linux/amd64/kubeadm',
    templateUrlBinCheckSum: '${COMPONENT_VERSION}/bin/linux/amd64/kubeadm.sha256',
    baseUrl: 'https://dl.k8s.io',
  },
  runc: {
    path: '/usr/local/bin/runc',
    templateUrlBin: '${COMPONENT_VERSION}/runc.amd64',
    templateUrlBinCheckSum: '${COMPONENT_VERSION}/runc.sha256sum',
    baseUrl: 'https://github.com/opencontainers/runc/releases/download',
  },
  containerd: {
    path: '/usr/local/bin/',
    templateUrlBin: 'v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz',
    templateUrlBinCheckSum: 'v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256sum',
    baseUrl: 'https://github.com/containerd/containerd/releases/download',
  },
  crictl: {
    path: '/usr/local/bin/crictl',
    templateUrlBin: '${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz',
    templateUrlBinCheckSum: '${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256',
    baseUrl: 'https://github.com/kubernetes-sigs/cri-tools/releases/download',
  },
  etcdctl: {
    path: '/usr/local/bin/',
    templateUrlBin: '${COMPONENT_VERSION}/etcd-${COMPONENT_VERSION}-linux-amd64.tar.gz',
    templateUrlBinCheckSum: '${COMPONENT_VERSION}/SHA256SUMS',
    baseUrl: 'https://github.com/etcd-io/etcd/releases/download',
  },
}
