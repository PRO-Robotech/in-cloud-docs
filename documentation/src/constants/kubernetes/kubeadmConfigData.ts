/* eslint-disable no-template-curly-in-string */
import dedent from 'ts-dedent'
import { ETCD_ARGS } from '@site/src/constants/kubernetes/etcdArgs'
import { KUBE_API_ARGS } from '@site/src/constants/kubernetes/kubeAPIArgs'
import { TCustomValueItems } from '../../customTypes/customValue'

export const KUBEADM_COFNIG_DATA: TCustomValueItems = {
  data: {
    value: dedent`

    `,
  },
}
