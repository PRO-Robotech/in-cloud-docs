import { etcd } from './etcd'
import { kubernetes } from './kubernetes'

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
