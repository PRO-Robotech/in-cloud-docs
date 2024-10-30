export const kubernetes = [
  {
    type: 'category',
    label: '5.2.1. Окружение',
    collapsed: true,
    items: [
      {
        type: 'doc',
        label: '5.2.1.1. Настройка ОС',
        id: 'tech-docs/kubernetes/setupEnvironments/os-setup',
      },
      {
        type: 'category',
        label: '5.2.1.2. Установка ПО',
        collapsed: true,
        items: [
          {
            type: 'doc',
            label: '5.2.1.2.1. Containerd',
            id: 'tech-docs/kubernetes/components/containerd/lifecycle',
          },
          {
            type: 'doc',
            label: '5.2.1.2.2. Runc',
            id: 'tech-docs/kubernetes/components/runc/lifecycle',
          },
          {
            type: 'doc',
            label: '5.2.1.2.3. Crictl',
            id: 'tech-docs/kubernetes/components/crictl/lifecycle',
          },
          {
            type: 'doc',
            label: '5.2.1.2.4. Kubectl',
            id: 'tech-docs/kubernetes/components/kubectl/lifecycle',
          },
          {
            type: 'doc',
            label: '5.2.1.2.5. Kubeadm',
            id: 'tech-docs/kubernetes/components/kubeadm/lifecycle',
          },

          {
            type: 'doc',
            label: '5.2.1.2.6. Kubelet',
            id: 'tech-docs/kubernetes/components/kubelet/lifecycle',
          },
          {
            type: 'doc',
            label: '5.2.1.2.7. Etcd',
            id: 'tech-docs/kubernetes/components/etcd/lifecycle',
          },
        ],
      },
      {
        type: 'category',
        label: '5.2.1.3. Настройка ПО',
        collapsed: true,
        items: [
          {
            type: 'doc',
            label: '5.2.1.3.1. Containerd',
            id: 'tech-docs/kubernetes/components/containerd/lifecycle-settings',
          },
          {
            type: 'doc',
            label: '5.2.1.3.2. Crictl',
            id: 'tech-docs/kubernetes/components/crictl/lifecycle-settings',
          },
          {
            type: 'doc',
            label: '5.2.1.3.3. Kubeadm',
            id: 'tech-docs/kubernetes/components/kubeadm/lifecycle-settings',
          },

          {
            type: 'doc',
            label: '5.2.1.3.4. Kubelet',
            id: 'tech-docs/kubernetes/components/kubelet/lifecycle-settings',
          },
          {
            type: 'category',
            label: '5.2.1.3.5. УП',
            collapsed: true,
            items: [
              {
                type: 'category',
                label: '5.2.1.3.5.1. Init',
                
                collapsed: true,
                link: {
                  type: 'doc',
                  id: 'tech-docs/kubernetes/k8s-init-manifests',
                  // title: '5.2.1.3.5.1. Init',
                },
                items: [
                  {
                    type: 'doc',
                    label: '5.2.1.3.5.1.1. API',
                    id: 'tech-docs/kubernetes/components/kubeAPI/api-settings',
                  },
                  {
                    type: 'doc',
                    label: '5.2.1.3.5.1.2. Controller',
                    id: 'tech-docs/kubernetes/components/controllerManager/controller-settings',
                  },
                  {
                    type: 'doc',
                    label: '5.2.1.3.5.1.3. Scheduler',
                    id: 'tech-docs/kubernetes/components/scheduler/scheduler-settings',
                  },
                  {
                    type: 'doc',
                    label: '5.2.1.3.5.1.4. ETCD',
                    id: 'tech-docs/kubernetes/components/etcd/etcd-settings',
                  },
                ]
              },
              {
                type: 'doc',
                label: '5.2.1.3.5.2. Join',
                // title: '5.2.1.3.5.1. Join',
                id: 'tech-docs/kubernetes/k8s-join-manifests',
              },
            ]
          },
        ],
      },
      {
        type: 'category',
        label: '5.2.1.4. Проверка ПО',
        // id: 'tech-docs/kubernetes/components/components-ready',
        items: [
          {
            type: 'doc',
            label: '5.2.1.4.1. Containerd',
            id: 'tech-docs/kubernetes/components/containerd/component-ready',
          },
          {
            type: 'doc',
            label: '5.2.1.4.2. Runc',
            id: 'tech-docs/kubernetes/components/runc/component-ready',
          },
          {
            type: 'doc',
            label: '5.2.1.4.3. Crictl',
            id: 'tech-docs/kubernetes/components/crictl/component-ready',
          },
          {
            type: 'doc',
            label: '5.2.1.4.4. Kubectl',
            id: 'tech-docs/kubernetes/components/kubectl/component-ready',
          },
          {
            type: 'doc',
            label: '5.2.1.4.5. Kubeadm',
            id: 'tech-docs/kubernetes/components/kubeadm/component-ready',
          },
          {
            type: 'doc',
            label: '5.2.1.4.6. Kubelet',
            id: 'tech-docs/kubernetes/components/kubelet/component-ready',
          },
          {
            type: 'category',
            label: '5.2.1.4.7. УП',
            collapsed: true,
            link: {
              type: 'doc',
              id: 'tech-docs/kubernetes/components/components-ready',
            },
            items: [
              {
                type: 'doc',
                label: '5.2.1.4.7.1. API',
                id: 'tech-docs/kubernetes/components/kubeAPI/component-ready',
              },
              {
                type: 'doc',
                label: '5.2.1.4.7.2. Controller',
                id: 'tech-docs/kubernetes/components/controllerManager/component-ready',
              },
              {
                type: 'doc',
                label: '5.2.1.4.7.3. Scheduler',
                id: 'tech-docs/kubernetes/components/scheduler/component-ready',
              },
              {
                type: 'doc',
                label: '5.2.1.4.7.4. ETCD',
                id: 'tech-docs/kubernetes/components/etcd/component-ready',
              },
            ]
          }
        ],
      },
    ],
  },
  {
    type: 'category',
    label: '5.2.2. Аутентификация',
    collapsed: true,
    items: [
      {
        type: 'category',
        label: '5.2.2.0. ALL',
        items: [
          {
            type: 'doc',
            label: '5.2.2.0.1. Init',
            id: 'tech-docs/kubernetes/certificates/init-all',
          },
          {
            type: 'doc',
            label: '5.2.2.0.2. Join',
            id: 'tech-docs/kubernetes/certificates/join-all',
          },
        ]
      },
      {
        type: 'category',
        label: '5.2.2.1. ЦА',
        items: [
          {
            type: 'doc',
            label: '5.2.2.1.1. Init',
            id: 'tech-docs/kubernetes/certificates/centerAuthority/init-ca',
          },
          {
            type: 'doc',
            label: '5.2.2.1.2. Join',
            id: 'tech-docs/kubernetes/certificates/centerAuthority/join-ca',
          },
        ]
      },
      {
        type: 'category',
        label: '5.2.2.2. Сертификаты',
        collapsed: true,
        items: [
          {
            type: 'doc',
            label: '5.2.2.2.1. Init',
            id: 'tech-docs/kubernetes/certificates/components/init-certificates',
          },
          {
            type: 'doc',
            label: '5.2.2.2.2. Join',
            id: 'tech-docs/kubernetes/certificates/components/join-certificates',
          },
        ]
      },
      {
        type: 'category',
        label: '5.2.2.3. Сервис Аккаунт',
        collapsed: true,
        items: [
          {
            type: 'doc',
            label: '5.2.2.3.1. Init',
            id: 'tech-docs/kubernetes/certificates/service-account',
          },
        ]
      },
      {
        type: 'doc',
        label: '5.2.2.4. Проверка',
        id: 'tech-docs/kubernetes/certificates/examination',
      },
    ],
  },
  {
    type: 'category',
    label: '5.2.3. Установка УК',
    collapsed: true,
    items: [
      {
        type: 'category',
        label: '5.2.3.1. Инициализация',
        collapsed: true,
        link: {
          type: 'doc',
          id: 'tech-docs/kubernetes/k8s-init',
        },
        items: [
          {
            type: 'doc',
            label: '5.2.3.1.1. Kubelet',
            id: 'tech-docs/kubernetes/components/kubelet/kubelet-init-start',
          },
        ]
      },
      {
        type: 'category',
        label: '5.2.3.2. Расширение',
        collapsed: true,
        link: {
          type: 'doc',
          id: 'tech-docs/kubernetes/k8s-join',
        },
        items: [
          {
            type: 'doc',
            label: '5.2.3.2.1. Kubelet',
            id: 'tech-docs/kubernetes/components/kubelet/kubelet-join-start',
          },
          {
            type: 'doc',
            label: '5.2.3.2.2. ETCD',
            id: 'tech-docs/kubernetes/etcd-join',
          },
        ]
      },
    ],
  },
  {
    type: 'category',
    label: '5.2.4. Настройка УК',
    collapsed: true,
    items: [
      {
        type: 'category',
        label: '5.2.4.1. Пост обработка',
        items: [
          {
            type: 'category',
            label: '5.2.4.1.1. Маркировка',
            collapsed: true,
            items: [
              {
                type: 'doc',
                label: '5.2.4.1.1.1. Init',
                id: 'tech-docs/kubernetes/additionalSetup/marking-init',
              },
              {
                type: 'doc',
                label: '5.2.4.1.1.2. Join',
                id: 'tech-docs/kubernetes/additionalSetup/marking-join',
              },
            ]
          },
          {
            type: 'doc',
            label: '5.2.4.1.2. RBAC',
            id: 'tech-docs/kubernetes/additionalSetup/rbac',
          },
          {
            type: 'category',
            label: '5.2.4.1.3. Загрузка CFG',
            collapsed: true,
            items: [
              {
                type: 'doc',
                label: '5.2.4.1.3.1. Init',
                id: 'tech-docs/kubernetes/additionalSetup/upload-configs-all-init',
              },
              {
                type: 'doc',
                label: '5.2.4.1.3.2. Join',
                id: 'tech-docs/kubernetes/additionalSetup/upload-configs-all-join',
              },
            ]
          },
          {
            type: 'doc',
            label: '5.2.4.1.4. Загрузка ЦА',
            id: 'tech-docs/kubernetes/additionalSetup/upload-ca',
          },
        ]
        
      },
    ],
  },
  {
    type: 'category',
    label: '5.2.6. Сеть',
    collapsed: true,
    items: [
      {
        type: 'category',
        label: '5.2.6.1. Сервисная',
        collapsed: true,
        items: [
          {
            type: 'doc',
            label: '5.2.6.1.1. Концепт',
            id: 'tech-docs/kubernetes-network/base-load-balancer-principal',
          },
          {
            type: 'doc',
            label: '5.2.6.1.1. Концепт2',
            id: 'tech-docs/kubernetes-network/resource-service',
          },
          // {
          //   type: 'doc',
          //   label: 'LoadBalancer Citrix',
          //   id: 'tech-docs/kubernetes-network/base-load-balancer-citrix',
          // },
          {
            type: 'doc',
            label: '5.2.6.1.2. Metallb',
            id: 'tech-docs/kubernetes-network/metallb/base-load-balancer-metallb',
          },
          // {
          //   type: 'doc',
          //   label: 'LoadBalancer Cilium',
          //   id: 'tech-docs/kubernetes-network/base-load-balancer-cilium',
          // },
        ],
      },
      {
        type: 'category',
        label: '5.2.6.2. Подовая',
        collapsed: true,
        items: [
          {
            type: 'doc',
            label: '5.2.6.2.1. Концепт',
            id: 'tech-docs/kubernetes-network/base-pod-principal',
          },
          {
            type: 'doc',
            label: '5.2.6.2.2. CNI Cilium',
            id: 'tech-docs/kubernetes-network/base-pod-cni-cilium',
          },
        ],
      },
      {
        type: 'doc',
        label: '5.2.6.3. NAG',
        id: 'tech-docs/kubernetes-network/base-network-access-group-principal',
      },
    ],
  },
  {
    type: 'doc',
    label: '5.2.6. Диагностика',
    id: 'tech-docs/kubernetes-thw/k8s-troubleshooting',
  },
]
