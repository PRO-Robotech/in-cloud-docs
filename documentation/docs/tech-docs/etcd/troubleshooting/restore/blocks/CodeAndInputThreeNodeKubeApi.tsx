import React, { FC, useState }    from 'react'
import { Flex, Input, Alert }     from 'antd'
import CodeBlock                  from '@theme/CodeBlock'
import dedent                     from 'ts-dedent'
import { CERTIFICATES }           from '@site/src/constants/kubernetes/certs'
import { PORTS }                  from '@site/src/constants/kubernetes/ports'
import { CUSTOM_VALUE }           from '@site/src/constants/kubernetes/customValue'
import TabItem                    from '@theme/TabItem'
import Tabs                       from '@theme/Tabs'
import { ETCD_ARGS }              from '@site/src/constants/kubernetes/etcdArgs'
import { CodeAndInputExportPods } from '@site/src/components/commonBlocks'

export const Master: FC = () => {
  const [etcdNodeName1, setEtcdNodeName1] = useState<string>("etcd-in-cloud-k8s-sandbox-dev-csko-1-tcgzn-7plhz")
  const [etcdNodeName2, setEtcdNodeName2] = useState<string>("etcd-in-cloud-k8s-sandbox-dev-csko-1-tcgzn-h9g49")
  const [etcdNodeName3, setEtcdNodeName3] = useState<string>("etcd-in-cloud-k8s-sandbox-dev-csko-1-tcgzn-wps6k")
  const [k8sNodeName1, setK8sNodeName1] = useState<string>("in-cloud-k8s-sandbox-dev-csko-1-tcgzn-7plhz")
  const [k8sNodeName2, setK8sNodeName2] = useState<string>("in-cloud-k8s-sandbox-dev-csko-1-tcgzn-h9g49")
  const [k8sNodeName3, setK8sNodeName3] = useState<string>("in-cloud-k8s-sandbox-dev-csko-1-tcgzn-wps6k")
  const [k8sNodeAddress1, setK8sNodeAddress1] = useState<string>("10.10.10.3")
  const [k8sNodeAddress2, setK8sNodeAddress2] = useState<string>("10.10.10.4")
  const [k8sNodeAddress3, setK8sNodeAddress3] = useState<string>("10.10.10.5")
  const [clientPort, setClientPort] = useState<string>("2379")
  const [peerPort, setPeerPort] = useState<string>("2380")
  const [nodeUser, setNodeUser] = useState<string>("admin")

  return (
    <Flex vertical gap="small">

      Данный вариант ETCD кластера разворачивается на ControlPlane нодах кластера, по 1му на каждую. <br/>

      Для начала задайте переменные:

      <li><code>ETCD_NODE_NAME_N</code>    - Имя пода ETCD (Обычно записывается в формате `etcd-ИМЯ_CONTROLPLANE_НОДЫ`)</li>
      <li><code>K8S_NODE_NAME_N</code>     - Имя ноды K8s кластера на которой поднимается ETCD.</li>
      <li><code>K8S_NODE_ADDRESS_N</code>  - IP адрес ноды K8s кластера на которой поднимается ETCD.</li>
      <li><code>ETCD_CLIENT_PORT</code>    - Порт к которому подключаются клиенты ETCD кластера.</li>
      <li><code>ETCD_PEER_PORT</code>      - Порт к которому подключаются другие узлы ETCD кластера.</li>
      <li><code>K8S_NODE_USERNAME</code>   - Имя пользователя, по которому вы можете подключиться к узлам K8s кластера по SSH.</li>

      <Input placeholder="etcdNodeName1" value={etcdNodeName1} onChange={e => setEtcdNodeName1(e.target.value)} />
      <Input placeholder="etcdNodeName2" value={etcdNodeName2} onChange={e => setEtcdNodeName2(e.target.value)} />
      <Input placeholder="etcdNodeName3" value={etcdNodeName3} onChange={e => setEtcdNodeName3(e.target.value)} />
      <Input placeholder="k8sNodeName1" value={k8sNodeName1} onChange={e => setK8sNodeName1(e.target.value)} />
      <Input placeholder="k8sNodeName2" value={k8sNodeName2} onChange={e => setK8sNodeName2(e.target.value)} />
      <Input placeholder="k8sNodeName3" value={k8sNodeName3} onChange={e => setK8sNodeName3(e.target.value)} />
      <Input placeholder="k8sNodeAddress1" value={k8sNodeAddress1} onChange={e => setK8sNodeAddress1(e.target.value)} />
      <Input placeholder="k8sNodeAddress2" value={k8sNodeAddress2} onChange={e => setK8sNodeAddress2(e.target.value)} />
      <Input placeholder="k8sNodeAddress3" value={k8sNodeAddress3} onChange={e => setK8sNodeAddress3(e.target.value)} />
      <Input placeholder="clientPort" value={clientPort} onChange={e => setClientPort(e.target.value)} />
      <Input placeholder="peerPort" value={peerPort} onChange={e => setPeerPort(e.target.value)} />
      <Input placeholder="nodeUser" value={nodeUser} onChange={e => setNodeUser(e.target.value)} />

      <CodeBlock language="bash">
        {dedent`
          export ETCD_NODE_NAME_1=${etcdNodeName1}
          export ETCD_NODE_NAME_2=${etcdNodeName2}
          export ETCD_NODE_NAME_3=${etcdNodeName3}
          export K8S_NODE_NAME_1=${k8sNodeAddress1}
          export K8S_NODE_NAME_2=${k8sNodeAddress2}
          export K8S_NODE_NAME_3=${k8sNodeAddress3}
          export K8S_NODE_ADDRESS_1=${k8sNodeAddress1}
          export K8S_NODE_ADDRESS_2=${k8sNodeAddress2}
          export K8S_NODE_ADDRESS_3=${k8sNodeAddress3}
          export ETCD_CLIENT_PORT=${clientPort}
          export ETCD_PEER_PORT=${peerPort}
          export K8S_NODE_USERNAME=${nodeUser}
          `}
      </CodeBlock>
    </Flex>
  )
}
