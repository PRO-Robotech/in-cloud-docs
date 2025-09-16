import dedent from 'ts-dedent'
import {KUBE_API_ARGS} from '@site/src/constants/kubernetes/kubeAPIArgs'
import {TCustomValueItems} from '../../customTypes/customValue'
import {COMPONENTS_VERSION}   from '@site/src/constants/kubernetes/componentsVersion'
import {KUBERNETES_ETCD_API_ARGS} from '@site/src/constants/kubernetes/kubernetesArgs'
import {KUBERNETES_KUBE_API_ARGS} from '@site/src/constants/kubernetes/kubernetesArgs'
import {KUBERNETES_KUBE_CONTROLLER_MANAGER_ARGS} from '@site/src/constants/kubernetes/kubernetesArgs'
import {KUBERNETES_KUBE_SCHEDULER_ARGS} from '@site/src/constants/kubernetes/kubernetesArgs'
import { CUSTOM_VALUE } from '@site/src/constants/kubernetes/customValue'


export const KUBEADM_COFNIG_DATA: TCustomValueItems = {
  data: {
    value: dedent`
      apiVersion: kubeadm.k8s.io/v1beta3
      kind: ClusterConfiguration
      clusterName: "$\{CLUSTER_NAME}"
      certificatesDir: ${CUSTOM_VALUE.kubernetesBaseFolderPath.value}/pki
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
        - name: "k8s-audit-policy"
          hostPath: "/etc/kubernetes/audit-policy.yaml"
          mountPath: "/etc/kubernetes/audit-policy.yaml"
          pathType: File
        certSANs:
          - "127.0.0.1"
          # TODO для доабвления внешнего FQDN в сертификаты кластера
          # - $\{INTERNAL_API}
        timeoutForControlPlane: 4m0s
      controllerManager:
        extraArgs:
          cluster-name: "$\{CLUSTER_NAME}"
          ${KUBERNETES_KUBE_CONTROLLER_MANAGER_ARGS.data.value}
        # ЕСЛИ НУЖНО ПОДКЛЮЧИТЬ СЕРВЕРНЫЕ СЕРТИФИКАТЫ ДЛЯ KUBE-CONTROLLER-MANAGER
        # ОБРАТИТЕ ВНИМАНИЕ, ЧТО KUBEADM НЕ СОЗДАЕТ ДАННЫЕ СЕРТИФИКАТЫ
        # ТРЕБУЕТСЯ РАСКОМЕНТИРОВАТЬ
        # ->
        # extraVolumes:
        # - name: "controller-manager-crt"
        #   hostPath: "/etc/kubernetes/pki/controller-manager-server.crt"
        #   mountPath: "/etc/kubernetes/pki/controller-manager-server.crt"
        #   pathType: File
        # - name: "controller-manager-key"
        #   hostPath: "/etc/kubernetes/pki/controller-manager-server.key"
        #   mountPath: "/etc/kubernetes/pki/controller-manager-server.key"
        #   pathType: File
      scheduler:
        extraArgs:
          ${KUBERNETES_KUBE_SCHEDULER_ARGS.data.value}
        # ЕСЛИ НУЖНО ПОДКЛЮЧИТЬ СЕРВЕРНЫЕ СЕРТИФИКАТЫ ДЛЯ KUBE-SCHEDULER
        # ОБРАТИТЕ ВНИМАНИЕ, ЧТО KUBEADM НЕ СОЗДАЕТ ДАННЫЕ СЕРТИФИКАТЫ
        # ТРЕБУЕТСЯ РАСКОМЕНТИРОВАТЬ
        # ->
        # extraVolumes:
        # - name: "scheduler-crt"
        #   hostPath: "/etc/kubernetes/pki/scheduler-server.crt"
        #   mountPath: "/etc/kubernetes/pki/scheduler-server.crt"
        #   pathType: File
        # - name: "scheduler-key"
        #   hostPath: "/etc/kubernetes/pki/scheduler-server.key"
        #   mountPath: "/etc/kubernetes/pki/scheduler-server.key"
        #   pathType: File
    `,
  },
}
