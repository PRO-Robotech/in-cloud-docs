export const kubernetes = [
  {
    type: 'category',
    label: '5.2.1. Окружение',
    collapsed: true,
    items: [
      {
        type: 'doc',
        label: '5.2.1.1. Настройка ОС',
        id: 'tech-docs/kubernetes/setup-environments/os-setup',
      },
      {
        type: 'doc',
        label: '5.2.1.2. Установка ПО',
        id: 'tech-docs/kubernetes/components/all-install',
      },
      {
        type: 'doc',
        label: '5.2.1.3. Настройка ПО',
        id: 'tech-docs/kubernetes/components/all-setup',
      },
      {
        type: 'doc',
        label: '5.2.1.4. Настройка SP',
        id: 'tech-docs/kubernetes/components/all-static-pods-cp',
      },
      {
        type: 'doc',
        label: '5.2.1.5. Проверка',
        id: 'tech-docs/kubernetes/components/all-components-ready',
      },
    ],
  },
  {
    type: 'category',
    label: '5.2.2. Аутентификация',
    collapsed: true,
    link: {
      type: 'doc',
      id: 'tech-docs/kubernetes/certificates/all-certificates',
    },
    items: [
      // {
      //   // type: 'category',
      //   type: 'doc',
      //   label: '5.2.2.0. Все серт-ы',
      //   id: 'tech-docs/kubernetes/certificates/all-certificates',
      //   // link: {
      //   //   type: 'doc',
      //   //   id: 'tech-docs/kubernetes/certificates/about-all',
      //   // },
      //   // items: [
      //   //   {
      //   //     type: 'doc',
      //   //     label: '5.2.2.0.1. Init',
      //   //     id: 'tech-docs/kubernetes/certificates/init-all',
      //   //   },
      //   //   {
      //   //     type: 'doc',
      //   //     label: '5.2.2.0.2. Join',
      //   //     id: 'tech-docs/kubernetes/certificates/join-all',
      //   //   },
      //   // ],
      // },
      {
        type: 'doc',
        label: '5.2.2.1. ЦА',
        id: 'tech-docs/kubernetes/certificates/center-authority/all-ca',
      },
      {
        type: 'doc',
        label: '5.2.2.2. Сертификаты',
        id: 'tech-docs/kubernetes/certificates/components/all-certificates',
      },
      {
        type: 'doc',
        label: '5.2.2.3. Kubeconfigs',
        id: 'tech-docs/kubernetes/certificates/components/all-kubeconfigs',
      },
      {
        type: 'doc',
        label: '5.2.2.4. Сервис Аккаунт',
        id: 'tech-docs/kubernetes/certificates/service-account/all-service-account',
      },
      {
        type: 'doc',
        label: '5.2.2.5. Проверка',
        id: 'tech-docs/kubernetes/certificates/examination/all-examination',
      },
    ],
  },
  {
    type: 'category',
    label: '5.2.3. Установка УК',
    collapsed: true,
    items: [
      {
        type: 'doc',
        // type: 'category',
        label: '5.2.3.1. Инициализация',
        id: 'tech-docs/kubernetes/k8s-init',
        // collapsed: true,
        // link: {
        //   type: 'doc',
        //   id: 'tech-docs/kubernetes/k8s-init',
        // },
      },
      {
        type: 'doc',
        label: '5.2.3.2. Расширение',
        id: 'tech-docs/kubernetes/k8s-join',
      },
      {
        type: 'doc',
        label: '5.2.3.3. Kubelet Start',
        id: 'tech-docs/kubernetes/components/kubelet/all-kubelet-start',
      },
    ],
  },
  {
    type: 'category',
    label: '5.2.4. Настройка УК',
    collapsed: true,
    items: [
      // {
      //   type: 'category',
      //   label: '5.2.4.1. Пост обработка',
      //   items: [
          {
            type: 'doc',
            label: '5.2.4.1. Маркировка',
            id: 'tech-docs/kubernetes/additional-setup/marking/all-marking',
          },
          {
            type: 'doc',
            label: '5.2.4.2. Ролевая модель',
            id: 'tech-docs/kubernetes/additional-setup/upload-rbac/all-rbac',
          },
          {
            type: 'doc',
            label: '5.2.4.3. Загрузка CFG',
            id: 'tech-docs/kubernetes/additional-setup/upload-configs/all-configs',
          },
          {
            type: 'doc',
            label: '5.2.4.4. Загрузка ЦА',
            id: 'tech-docs/kubernetes/additional-setup/upload-ca/all-ca',
          },
      //   ],
      // },
    ],
  },
  // {
  //   type: 'category',
  //   label: '5.2.5. Сеть',
  //   collapsed: true,
  //   items: [
  //     {
  //       type: 'category',
  //       label: '5.2.5.1. Сервисная',
  //       collapsed: true,
  //       items: [
  //         {
  //           type: 'doc',
  //           label: '5.2.5.1.1. Концепт',
  //           id: 'tech-docs/kubernetes-network/base-load-balancer-principal',
  //         },
  //         {
  //           type: 'doc',
  //           label: '5.2.5.1.1. Концепт2',
  //           id: 'tech-docs/kubernetes-network/resource-service',
  //         },
  //         // {
  //         //   type: 'doc',
  //         //   label: 'LoadBalancer Citrix',
  //         //   id: 'tech-docs/kubernetes-network/base-load-balancer-citrix',
  //         // },
  //         {
  //           type: 'doc',
  //           label: '5.2.5.1.2. Metallb',
  //           id: 'tech-docs/kubernetes-network/metallb/base-load-balancer-metallb',
  //         },
  //         // {
  //         //   type: 'doc',
  //         //   label: 'LoadBalancer Cilium',
  //         //   id: 'tech-docs/kubernetes-network/base-load-balancer-cilium',
  //         // },
  //       ],
  //     },
  //     {
  //       type: 'category',
  //       label: '5.2.5.2. Подовая',
  //       collapsed: true,
  //       items: [
  //         {
  //           type: 'doc',
  //           label: '5.2.5.2.1. Концепт',
  //           id: 'tech-docs/kubernetes-network/base-pod-principal',
  //         },
  //         {
  //           type: 'doc',
  //           label: '5.2.5.2.2. CNI Cilium',
  //           id: 'tech-docs/kubernetes-network/base-pod-cni-cilium',
  //         },
  //       ],
  //     },
  //     {
  //       type: 'doc',
  //       label: '5.2.5.3. NAG',
  //       id: 'tech-docs/kubernetes-network/base-network-access-group-principal',
  //     },
  //   ],
  // },
  // {
  //   type: 'doc',
  //   label: '5.2.6. Диагностика',
  //   id: 'tech-docs/kubernetes-thw/k8s-troubleshooting',
  // },
]
