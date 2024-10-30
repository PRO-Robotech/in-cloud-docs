/* eslint-disable no-template-curly-in-string */
import { TCustomValueItems } from '../../customTypes/customValue'

export const KUBE_API_ARGS: TCustomValueItems = {
  clientCAFile: {
    value: '${KUBERNETES_CA_CRT_PATH}',
  },
  tlsCertFile: {
    value: '${KUBERNETES_SERVER_CRT_PATH}',
  },
  tlsPrivateKeyFile: {
    value: '${KUBERNETES_SERVER_KEY_PATH}',
  },
  etcdCAFile: {
    value: '${ETCD_CA_CRT_PATH}',
  },
  etcdCertfile: {
    value: '${KUBERNETES_ETCD_CLIENT_CRT_PATH}',
  },
  etcdKeyfile: {
    value: '${KUBERNETES_ETCD_CLIENT_KEY_PATH}',
  },
  etcdServers: {
    value: '${ETCD_SERVERS}',
  },
  kubeletClientCertificate: {
    value: '${KUBERNETES_KUBELET_CLIENT_CRT_PATH}',
  },
  kubeletClientKey: {
    value: '${KUBERNETES_KUBELET_CLIENT_KEY_PATH}',
  },
  kubeletServerPort: {
    value: '${KUBELET_SERVER_PORT}',
  },
  kubeletReadOnlyPort: {
    value: '${KUBELET_READ_ONLY_PORT}',
  },
  proxyClientCertFile: {
    value: '${KUBERNETES_FRONT_PROXY_CLIENT_CRT_PATH}',
  },
  proxyClientKeyFile: {
    value: '${KUBERNETES_FRONT_PROXY_CLIENT_KEY_PATH}',
  },
  requestheaderAllowedNames: {
    value: '${KUBERNETES_FRONT_PROXY_CLIENT_CN}',
  },
  requestheaderClientCAFile: {
    value: '${FRONT_PROXY_CA_CRT_PATH}',
  },
  serviceAccountIssuer: {
    value: 'https://kubernetes.default.svc.${CLUSTER_DOMAIN}',
  },
  serviceAccountKeyFile: {
    value: '${KUBERNETES_SERVICE_ACCOUNT_CRT_PATH}',
  },
  serviceAccountSigningKeyFile: {
    value: '${KUBERNETES_SERVICE_ACCOUNT_KEY_PATH}',
  },
  serviceClusterIPRange: {
    value: '${SERVICE_CIDR}',
  },
  advertiseAddress: {
    value: '${MACHINE_LOCAL_ADDRESS}',
  },
  securePort: {
    value: '${KUBE_APISERVER_PORT}',
  },
  anonymousAuth: {
    value: 'true',
  },
  authorizationMode: {
    value: 'Node,RBAC',
  },
  allowPrivileged: {
    value: 'true',
  },
  enableAdmissionPlugins: {
    value: '"NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,AlwaysPullImages,NodeRestriction,PodSecurity"',
  },
  enableBootstrapTokenAuth: {
    value: 'true',
  },
  requestheaderExtraHeadersPrefix: {
    value: 'X-Remote-Extra-',
  },
  requestheaderGroupHeaders: {
    value: 'X-Remote-Group',
  },
  requestheaderUsernameHeaders: {
    value: 'X-Remote-User',
  },
}
