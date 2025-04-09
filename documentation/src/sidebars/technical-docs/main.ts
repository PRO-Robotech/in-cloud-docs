// import { cilium } from './cilium'
import { etcd } from './etcd'
import { kubernetes } from './kubernetes'
// import { monitoring } from './monitoring'
// import { vault } from './vault'
// import { harbor } from './harbor'

export const main = [
  {
    type: 'doc',
    label: '0. Введение',
    id: 'tech-docs/kubernetes/about',
  },
  {
    type: 'doc',
    label: '1. Общее описание',
    id: 'tech-docs/kubernetes/introduction',
  },
  // {
  //   type: 'category',
  //   label: '2. Требования',
  //   collapsed: true,
  //   items: [
  //     {
  //       type: 'doc',
  //       label: '2.1. Оркестрация',
  //       id: 'tech-docs/kubernetes/requirements/orkestrations',
  //     },
  //     {
  //       type: 'doc',
  //       label: '2.2. Контейнеризация',
  //       id: 'tech-docs/kubernetes/requirements/containerization',
  //     },
  //     {
  //       type: 'doc',
  //       label: '2.3. Сеть',
  //       id: 'tech-docs/kubernetes/requirements/network',
  //     },
  //     {
  //       type: 'doc',
  //       label: '2.4. Данные',
  //       id: 'tech-docs/kubernetes/requirements/data-storage-management',
  //     },
  //     {
  //       type: 'doc',
  //       label: '2.5. Квота',
  //       id: 'tech-docs/kubernetes/requirements/quota-resource-management',
  //     },
  //     {
  //       type: 'doc',
  //       label: '2.6. Ресурсы',
  //       id: 'tech-docs/kubernetes/requirements/compute-resource-management',
  //     },
  //     {
  //       type: 'doc',
  //       label: '2.7. Портал',
  //       id: 'tech-docs/kubernetes/requirements/portal',
  //     },
  //     {
  //       type: 'doc',
  //       label: '2.8. Мониторинг',
  //       id: 'tech-docs/kubernetes/requirements/monitoring',
  //     },
  //     {
  //       type: 'doc',
  //       label: '2.9. Логирование',
  //       id: 'tech-docs/kubernetes/requirements/logging',
  //     },
  //     {
  //       type: 'doc',
  //       label: '2.10. Безопасность',
  //       id: 'tech-docs/kubernetes/requirements/security',
  //     },
  //     {
  //       type: 'doc',
  //       label: '2.11. Интеграции',
  //       id: 'tech-docs/kubernetes/requirements/integrations',
  //     },
  //   ],
  // },
  // {
  //   type: 'doc',
  //   label: '3. Архитектура',
  //   id: 'tech-docs/kubernetes/flowcharts/arch',
  // },
  {
    type: 'doc',
    label: '4. Компоненты',
    id: 'tech-docs/kubernetes/components/components',
  },
  {
    type: 'category',
    label: '5. Настройка',
    collapsed: false,
    items: [
      {
        type: 'doc',
        label: '5.0. Настройка ОС',
        id: 'tech-docs/kubernetes/setup-environments/base-os/base-os-setup',
      },
      {
        type: 'category',
        label: '5.1. Etcd',
        collapsed: true,
        items: etcd,
      },
      {
        type: 'category',
        label: '5.2. Kubernetes',
        collapsed: true,
        items: kubernetes,
      },
      // {
      //   type: 'category',
      //   label: '5.3. B-Cloud',
      //   collapsed: true,
      //   items: [
      //     {
      //       type: 'category',
      //       label: '5.3.1. Контроллеры',
      //       collapsed: true,
      //       items: [
      //         {
      //           type: 'category',
      //           label: '5.3.1.1. Project',
      //           collapsed: true,
      //           items: [
      //             {
      //               type: 'doc',
      //               label: '5.3.1.1.1. Ресурс',
      //               id: 'tech-docs/b-cloud/project/resource',
      //             },
      //             {
      //               type: 'doc',
      //               label: '5.3.1.1.2. Контроллер',
      //               id: 'tech-docs/b-cloud/project/resource-controller',
      //             },
      //             {
      //               type: 'doc',
      //               label: '5.3.1.1.3. Установка',
      //               id: 'tech-docs/b-cloud/project/install',
      //             },
      //             {
      //               type: 'doc',
      //               label: '5.3.1.1.4. Диагностика',
      //               id: 'tech-docs/b-cloud/project/troubleshooting',
      //             },
      //           ],
      //         },
      //         {
      //           type: 'category',
      //           label: '5.3.1.2. Instance',
      //           collapsed: true,
      //           items: [
      //             {
      //               type: 'doc',
      //               label: '5.3.1.2.1. Ресурс',
      //               id: 'tech-docs/b-cloud/instance/resource',
      //             },
      //             {
      //               type: 'doc',
      //               label: '5.3.1.2.2. Контроллер',
      //               id: 'tech-docs/b-cloud/instance/resource-controller',
      //             },
      //             {
      //               type: 'doc',
      //               label: '5.3.1.2.3. Установка',
      //               id: 'tech-docs/b-cloud/instance/install',
      //             },
      //             {
      //               type: 'doc',
      //               label: '5.3.1.2.4. Диагностика',
      //               id: 'tech-docs/b-cloud/instance/troubleshooting',
      //             },
      //           ],
      //         },
      //         {
      //           type: 'category',
      //           label: '5.3.1.3. ProjectQuota',
      //           collapsed: true,
      //           items: [
      //             {
      //               type: 'doc',
      //               label: '5.3.1.3.1. Ресурс',
      //               id: 'tech-docs/b-cloud/project-quota/resource',
      //             },
      //             {
      //               type: 'doc',
      //               label: '5.3.1.3.2. Контроллер',
      //               id: 'tech-docs/b-cloud/project-quota/resource-controller',
      //             },
      //             {
      //               type: 'doc',
      //               label: '5.3.1.3.3. Установка',
      //               id: 'tech-docs/b-cloud/project-quota/install',
      //             },
      //             {
      //               type: 'doc',
      //               label: '5.3.1.3.4. Диагностика',
      //               id: 'tech-docs/b-cloud/project-quota/troubleshooting',
      //             },
      //           ],
      //         },
      //         {
      //           type: 'category',
      //           label: '5.3.1.4. ProjectLegacy',
      //           collapsed: true,
      //           items: [
      //             {
      //               type: 'doc',
      //               label: '5.3.1.4.1. Ресурс',
      //               id: 'tech-docs/b-cloud/project-legacy/resource',
      //             },
      //             {
      //               type: 'doc',
      //               label: '5.3.1.4.2. Контроллер',
      //               id: 'tech-docs/b-cloud/project-legacy/resource-controller',
      //             },
      //             {
      //               type: 'doc',
      //               label: '5.3.1.4.3. Установка',
      //               id: 'tech-docs/b-cloud/project-legacy/install',
      //             },
      //             {
      //               type: 'doc',
      //               label: '5.3.1.4.4. Диагностика',
      //               id: 'tech-docs/b-cloud/project-legacy/troubleshooting',
      //             },
      //           ],
      //         },
      //         {
      //           type: 'category',
      //           label: '5.3.1.5. InstanceLegacy',
      //           collapsed: true,
      //           items: [
      //             {
      //               type: 'doc',
      //               label: '5.3.1.5.1. Ресурс',
      //               id: 'tech-docs/b-cloud/instance-legacy/resource',
      //             },
      //             {
      //               type: 'doc',
      //               label: '5.3.1.5.2. Контроллер',
      //               id: 'tech-docs/b-cloud/instance-legacy/resource-controller',
      //             },
      //             {
      //               type: 'doc',
      //               label: '5.3.1.5.3. Установка',
      //               id: 'tech-docs/b-cloud/instance-legacy/install',
      //             },
      //             {
      //               type: 'doc',
      //               label: '5.3.1.5.4. Диагностика',
      //               id: 'tech-docs/b-cloud/instance-legacy/troubleshooting',
      //             },
      //           ],
      //         },
      //         {
      //           type: 'category',
      //           label: '5.3.1.6. Repository',
      //           collapsed: true,
      //           items: [
      //             {
      //               type: 'doc',
      //               label: '5.3.1.6.1. Ресурс',
      //               id: 'tech-docs/b-cloud/repository/resource',
      //             },
      //             {
      //               type: 'doc',
      //               label: '5.3.1.6.2. Контроллер',
      //               id: 'tech-docs/b-cloud/repository/resource-controller',
      //             },
      //             {
      //               type: 'doc',
      //               label: '5.3.1.6.3. Установка',
      //               id: 'tech-docs/b-cloud/repository/install',
      //             },
      //             {
      //               type: 'doc',
      //               label: '5.3.1.6.4. Диагностика',
      //               id: 'tech-docs/b-cloud/repository/troubleshooting',
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   type: 'category',
      //   label: '5.4. Harbor',
      //   collapsed: true,
      //   items: harbor,
      // },
      // {
      //   type: 'category',
      //   label: '5.5. Monitoring',
      //   collapsed: true,
      //   items: monitoring,
      // },
      // {
      //   type: 'category',
      //   label: '5.6. Vault',
      //   collapsed: true,
      //   items: vault,
      // },
      // {
      //   type: 'category',
      //   label: '5.7. cilium',
      //   collapsed: true,
      //   items: cilium,
      // },
    ],
  },
]
