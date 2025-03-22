/* eslint-disable no-template-curly-in-string */
import dedent from 'ts-dedent'
import { CERTIFICATES } from '@site/src/constants/kubernetes/certs'
import { CUSTOM_VALUE } from '@site/src/constants/kubernetes/customValue'
import { PORTS } from '@site/src/constants/kubernetes/ports'
import { TCustomValueItems } from '../../customTypes/customValue'

import {KUBE_API_ARGS} from '@site/src/constants/kubernetes/kubeAPIArgs'
import { COMPONENTS_VERSION }   from '@site/src/constants/kubernetes/componentsVersion'
import {KUBERNETES_ETCD_API_ARGS} from '@site/src/constants/kubernetes/kubernetesArgs'
import {KUBERNETES_KUBE_API_ARGS} from '@site/src/constants/kubernetes/kubernetesArgs'
import {KUBERNETES_KUBE_CONTROLLER_MANAGER_ARGS} from '@site/src/constants/kubernetes/kubernetesArgs'
import {KUBERNETES_KUBE_SCHEDULER_ARGS} from '@site/src/constants/kubernetes/kubernetesArgs'

export const KUBELET_COFNIG_DATA: TCustomValueItems = {
  data: {
    value: dedent`
      apiVersion: kubelet.config.k8s.io/v1beta1
      authentication:
        anonymous:
            enabled: false
        webhook:
            cacheTTL: 0s
            enabled: true
        x509:
          clientCAFile: "${CERTIFICATES.kubernetesCA.crtPath}"
      authorization:
        mode: Webhook
        webhook:
          cacheAuthorizedTTL: 0s
          cacheUnauthorizedTTL: 0s
      cgroupDriver: systemd
      # Для того, что бы сделать эту часть конфигурации статичной
      # все динамичные части будут определены через переменные окружения
      # systemd Unit kubelet
      # >>>>>>
      # clusterDNS:
      # - "${CUSTOM_VALUE.kubernetesDNSAddress.value}"
      # clusterDomain: cluster.local
      # TODO нужны только при hardway
      # tlsCertFile: "${CERTIFICATES.kubeletCurrentServer.crtPath}"
      # tlsPrivateKeyFile: "${CERTIFICATES.kubeletCurrentServer.crtPath}"
      containerLogMaxSize: "50Mi"
      containerRuntimeEndpoint: "${CUSTOM_VALUE.criEndpoint.value}"
      cpuManagerReconcilePeriod: 0s
      evictionPressureTransitionPeriod: 5s
      fileCheckFrequency: 0s
      healthzBindAddress: 127.0.0.1
      healthzPort: ${PORTS.kubeletHealthz.portNumber}
      httpCheckFrequency: 0s
      imageGCHighThresholdPercent: 55
      imageGCLowThresholdPercent: 50
      imageMaximumGCAge: 0s
      imageMinimumGCAge: 0s
      kind: KubeletConfiguration
      logging:
        flushFrequency: 0
        options:
          json:
            infoBufferSize: "0"
          text:
            infoBufferSize: "0"
        verbosity: 0
      kubeAPIQPS: 50
      kubeAPIBurst: 100
      maxPods: 250
      memorySwap: {}
      nodeStatusReportFrequency: 1s
      nodeStatusUpdateFrequency: 1s
      podPidsLimit: 4096
      registerNode: true
      resolvConf: /run/systemd/resolve/resolv.conf
      rotateCertificates: true
      runtimeRequestTimeout: 0s
      serializeImagePulls: false
      serverTLSBootstrap: true
      shutdownGracePeriod: 15s
      shutdownGracePeriodCriticalPods: 5s
      staticPodPath: ${CUSTOM_VALUE.kuberneteBaseFolderPath.value}/manifests
      streamingConnectionIdleTimeout: 0s
      syncFrequency: 0s
      tlsMinVersion: "VersionTLS12"
      volumeStatsAggPeriod: 0s
      featureGates:
        RotateKubeletServerCertificate: true
        APIPriorityAndFairness:         true
      tlsCipherSuites:
        - "TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256"
        - "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256"
        - "TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384"
        - "TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384"
        - "TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256"
        - "TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256"
    `,
  },
}


export const KUBEADM_COFNIG_DATA: TCustomValueItems = {
  data: {
    value: dedent`
      clusterName: "$\{CLUSTER_NAME}"
      controlPlaneEndpoint: $\{INTERNAL_API}:${KUBE_API_ARGS.securePort.value}
      imageRepository: "${CUSTOM_VALUE.baseDockerRegistry.value}"
      networking:
        serviceSubnet: ${CUSTOM_VALUE.kubernetesServiceCIDR.value}
        dnsDomain: ${CUSTOM_VALUE.kubernetesClusterDomain.value}
      kubernetesVersion: ${COMPONENTS_VERSION.kubernetes.value}
      dns: {}
      etcd:
        local:
          imageRepository: "${CUSTOM_VALUE.baseDockerRegistry.value}"
          dataDir: "/var/lib/etcd"
          extraArgs:
            ${KUBERNETES_ETCD_API_ARGS.data.value}
          peerCertSANs:
            - 127.0.0.1
          serverCertSANs:
            - 127.0.0.1
      apiServer:
        extraArgs:
          ${KUBERNETES_KUBE_API_ARGS.data.value}
        extraVolumes:
        - name: "k8s-audit"
          hostPath: "/var/log/kubernetes/audit/"
          mountPath: "/var/log/kubernetes/audit/"
          readOnly: false
          pathType: DirectoryOrCreate
        certSANs:
          - "127.0.0.1"
          # TODO для доабвления внешнего FQDN в сертификаты кластера
          # - $\{INTERNAL_API}
        timeoutForControlPlane: 4m0s
      controllerManager:
        extraArgs:
          cluster-name: "$\{CLUSTER_NAME}"
          ${KUBERNETES_KUBE_CONTROLLER_MANAGER_ARGS.data.value}
      scheduler:
        extraArgs:
          ${KUBERNETES_KUBE_SCHEDULER_ARGS.data.value}
    `,
  },
}
