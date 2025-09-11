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
      // {
      //   type: 'doc',
      //   label: '5.0. Настройка ОС',
      //   id: 'tech-docs/kubernetes/setup-environments/base-os/base-os-setup',
      // },
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
    ],
  },
]
