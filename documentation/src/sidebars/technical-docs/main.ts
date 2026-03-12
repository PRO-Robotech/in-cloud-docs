import { etcd } from './etcd'
import { kubernetesCP } from './kubernetesCP'
import { kubernetesDP } from './kubernetesDP'

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
        label: '5.2. Kubernetes CP',
        collapsed: true,
        items: kubernetesCP,
      },
      {
        type: 'category',
        label: '5.3. Kubernetes DP',
        collapsed: true,
        items: kubernetesDP,
      },
    ],
  },
]
