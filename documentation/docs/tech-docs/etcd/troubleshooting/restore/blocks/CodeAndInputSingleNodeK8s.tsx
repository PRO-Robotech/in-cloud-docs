import React, { createContext, FC, useState, ReactNode, useContext }  from 'react'
import { Flex, Input }                                                from 'antd'
import CodeBlock                                                      from '@theme/CodeBlock'
import dedent                                                         from 'ts-dedent'
import { CERTIFICATES }                                               from '@site/src/constants/kubernetes/certs'
import { PORTS }                                                      from '@site/src/constants/kubernetes/ports'
import { ETCD_ARGS }                                                  from '@site/src/constants/kubernetes/etcdArgs'

interface ContextProps {
  testNamespace: string;
  setTestNamespace: (val: string) => void;
  testPodName: string;
  setTestPodName: (val: string) => void;

  nodeName1: string; setNodeName1: (val: string) => void;
  nodeName2: string; setNodeName2: (val: string) => void;
  nodeName3: string; setNodeName3: (val: string) => void;
  nodeAddress1: string; setNodeAddress1: (val: string) => void;
  nodeAddress2: string; setNodeAddress2: (val: string) => void;
  nodeAddress3: string; setNodeAddress3: (val: string) => void;
  k8sNodeAddress1: string; setK8sNodeAddress1: (val: string) => void;
  k8sNodeAddress2: string; setK8sNodeAddress2: (val: string) => void;
  k8sNodeAddress3: string; setK8sNodeAddress3: (val: string) => void;
  clientPort: string; setClientPort: (val: string) => void;
  peerPort: string; setPeerPort: (val: string) => void;
  nodeUser: string; setNodeUser: (val: string) => void;
}

const Context = createContext<ContextProps | undefined>(undefined);

export const Provider: FC<{ children: ReactNode }> = ({ children }) => {
  const [testNamespace, setTestNamespace] = useState<string>('');
  const [testPodName, setTestPodName] = useState<string>('');
  const [nodeName1, setNodeName1] = useState<string>("")
  const [nodeName2, setNodeName2] = useState<string>("")
  const [nodeName3, setNodeName3] = useState<string>("")
  const [nodeAddress1, setNodeAddress1] = useState<string>("")
  const [nodeAddress2, setNodeAddress2] = useState<string>("")
  const [nodeAddress3, setNodeAddress3] = useState<string>("")
  const [k8sNodeAddress1, setK8sNodeAddress1] = useState<string>("")
  const [k8sNodeAddress2, setK8sNodeAddress2] = useState<string>("")
  const [k8sNodeAddress3, setK8sNodeAddress3] = useState<string>("")
  const [clientPort, setClientPort] = useState<string>("")
  const [peerPort, setPeerPort] = useState<string>("")
  const [nodeUser, setNodeUser] = useState<string>("")

  return (
    <Context.Provider value={{
      testNamespace, setTestNamespace,
      testPodName, setTestPodName,
      nodeName1, setNodeName1,
      nodeName2, setNodeName2,
      nodeName3, setNodeName3,
      nodeAddress1, setNodeAddress1,
      nodeAddress2, setNodeAddress2,
      nodeAddress3, setNodeAddress3,
      k8sNodeAddress1, setK8sNodeAddress1,
      k8sNodeAddress2, setK8sNodeAddress2,
      k8sNodeAddress3, setK8sNodeAddress3,
      clientPort, setClientPort,
      peerPort, setPeerPort,
      nodeUser, setNodeUser }}>
      {children}
    </Context.Provider>
  );
};

export const useContextHook = (): ContextProps => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useContextHook must be used within Provider');
  }
  return context;
};

export const Input1: FC = () => {
  const {
    testNamespace, setTestNamespace,
    testPodName, setTestPodName,
    nodeName1, setNodeName1,
    nodeName2, setNodeName2,
    nodeName3, setNodeName3,
    nodeAddress1, setNodeAddress1,
    nodeAddress2, setNodeAddress2,
    nodeAddress3, setNodeAddress3,
    k8sNodeAddress1, setK8sNodeAddress1,
    k8sNodeAddress2, setK8sNodeAddress2,
    k8sNodeAddress3, setK8sNodeAddress3,
    clientPort, setClientPort,
    peerPort, setPeerPort,
    nodeUser, setNodeUser } = useContextHook();

  return (
    <Flex vertical gap="small">
      <Input placeholder="testNamespace" value={testNamespace} onChange={e => setTestNamespace(e.target.value)} />
      <Input placeholder="testPodName" value={testPodName} onChange={e => setTestPodName(e.target.value)} />

      Для начала задайте переменные:
      <Input placeholder="Имя 1й ноды ETCD кластера" value={nodeName1} onChange={e => setNodeName1(e.target.value)} />
      <Input placeholder="Имя 2й ноды ETCD кластера" value={nodeName2} onChange={e => setNodeName2(e.target.value)} />
      <Input placeholder="Имя 3й ноды ETCD кластера" value={nodeName3} onChange={e => setNodeName3(e.target.value)} />
      <Input placeholder="IP адрес 1й ноды ETCD кластера" value={nodeAddress1} onChange={e => setNodeAddress1(e.target.value)} />
      <Input placeholder="IP адрес 2й ноды ETCD кластера" value={nodeAddress2} onChange={e => setNodeAddress2(e.target.value)} />
      <Input placeholder="IP адрес 3й ноды ETCD кластера" value={nodeAddress3} onChange={e => setNodeAddress3(e.target.value)} />
      <Input placeholder="IP адрес 1й ноды K8s кластер" value={k8sNodeAddress1} onChange={e => setK8sNodeAddress1(e.target.value)} />
      <Input placeholder="IP адрес 2й ноды K8s кластер" value={k8sNodeAddress2} onChange={e => setK8sNodeAddress2(e.target.value)} />
      <Input placeholder="IP адрес 3й ноды K8s кластер" value={k8sNodeAddress3} onChange={e => setK8sNodeAddress3(e.target.value)} />
      <Input placeholder="Порт для подключения клиентами к ETCD кластеру" value={clientPort} onChange={e => setClientPort(e.target.value)} />
      <Input placeholder="Порт для подключения нод ETCD кластера между собой" value={peerPort} onChange={e => setPeerPort(e.target.value)} />
      <Input placeholder="Имя пользователя для подключения к нода K8s кластера по SSH" value={nodeUser} onChange={e => setNodeUser(e.target.value)} />
    </Flex>
  );
};

export const Output1: FC = () => {
  const {
    nodeName1,
    nodeName2,
    nodeName3,
    nodeAddress1,
    nodeAddress2,
    nodeAddress3,
    k8sNodeAddress1,
    k8sNodeAddress2,
    k8sNodeAddress3,
    clientPort,
    peerPort,
    nodeUser } = useContextHook();

  return (
    <Flex vertical gap="small">
      <CodeBlock language="bash">
        {dedent`
          export ETCD_NODE_NAME_1=${nodeName1}
          export ETCD_NODE_NAME_2=${nodeName2}
          export ETCD_NODE_NAME_3=${nodeName3}
          export ETCD_NODE_ADDRESS=${nodeAddress1}
          export ETCD_NODE_ADDRESS=${nodeAddress2}
          export ETCD_NODE_ADDRESS=${nodeAddress3}
          export K8S_NODE_ADDRESS_1=${k8sNodeAddress1}
          export K8S_NODE_ADDRESS_1=${k8sNodeAddress2}
          export K8S_NODE_ADDRESS_1=${k8sNodeAddress3}
          export ETCD_CLIENT_PORT=${clientPort}
          export ETCD_PEER_PORT=${peerPort}
          export K8S_NODE_USERNAME=${nodeUser}
          `}
      </CodeBlock>
    </Flex>
  )
}

export const Master1ETCDArgs: FC = () => {
  const {
    nodeName1,
    nodeAddress1,
    clientPort } = useContextHook();

  return (
    <Flex vertical gap="small">
      <CodeBlock language="bash">
        {dedent`
          --advertise-client-urls=https://${nodeAddress1}:${clientPort}
          --cert-file=${CERTIFICATES.etcdServer.crtPath}
          --client-cert-auth=true
          --data-dir=${ETCD_ARGS.dataDir.value}
          --key-file=${CERTIFICATES.etcdServer.keyPath}
          --listen-client-urls=https://127.0.0.1:${PORTS.etcdServer.portNumber},https://${nodeAddress1}:${clientPort}
          --listen-metrics-urls=http://0.0.0.0:${PORTS.etcdMetricServer.portNumber}
          --listen-peer-urls=https://${nodeAddress1}:${PORTS.etcdPeer.portNumber}
          --name=${nodeName1}
          --peer-cert-file=${CERTIFICATES.etcdPeer.crtPath}
          --peer-client-cert-auth=true
          --peer-key-file=${CERTIFICATES.etcdPeer.keyPath}
          --peer-trusted-ca-file=${CERTIFICATES.etcdCA.crtPath}
          --trusted-ca-file=${CERTIFICATES.etcdCA.keyPath}
        `}
      </CodeBlock>
    </Flex>
  )
}

export const Master2ETCDArgs: FC = () => {
  const {
    nodeName1,
    nodeAddress1,
    nodeName2,
    nodeAddress2,
    clientPort } = useContextHook();

  return (
    <Flex vertical gap="small">
      <CodeBlock language="bash">
        {dedent`
          --advertise-client-urls=https://${nodeAddress2}:${clientPort}
          --cert-file=${CERTIFICATES.etcdServer.crtPath}
          --client-cert-auth=true
          --data-dir=${ETCD_ARGS.dataDir.value}
          --initial-advertise-peer-urls=https://${nodeAddress2}:${PORTS.etcdPeer.portNumber}
          --initial-cluster=${nodeName1}=https://${nodeAddress1}:${PORTS.etcdPeer.portNumber},${nodeName2}=https://${nodeAddress2}:${PORTS.etcdPeer.portNumber}
          --key-file=${CERTIFICATES.etcdServer.keyPath}
          --listen-client-urls=https://127.0.0.1:${PORTS.etcdServer.portNumber},https://${nodeAddress2}:${clientPort}
          --listen-metrics-urls=http://0.0.0.0:${PORTS.etcdMetricServer.portNumber}
          --listen-peer-urls=https://${nodeAddress2}:${PORTS.etcdPeer.portNumber}
          --name=${nodeName2}
          --peer-cert-file=${CERTIFICATES.etcdPeer.crtPath}
          --peer-client-cert-auth=true
          --peer-key-file=${CERTIFICATES.etcdPeer.keyPath}
          --peer-trusted-ca-file=${CERTIFICATES.etcdCA.crtPath}
          --trusted-ca-file=${CERTIFICATES.etcdCA.keyPath}
        `}
      </CodeBlock>
    </Flex>
  )
}

export const Master3ETCDArgs: FC = () => {
  const {
    nodeName1,
    nodeAddress1,
    nodeName2,
    nodeAddress2,
    nodeName3,
    nodeAddress3,
    clientPort } = useContextHook();

  return (
    <Flex vertical gap="small">
      <CodeBlock language="bash">
        {dedent`
          --advertise-client-urls=https://${nodeAddress3}:${clientPort}
          --cert-file=${CERTIFICATES.etcdServer.crtPath}
          --client-cert-auth=true
          --data-dir=${ETCD_ARGS.dataDir.value}
          --initial-advertise-peer-urls=https://${nodeAddress3}:${PORTS.etcdPeer.portNumber}
          --initial-cluster=${nodeName1}=https://${nodeAddress1}:${PORTS.etcdPeer.portNumber},${nodeName2}=https://${nodeAddress2}:${PORTS.etcdPeer.portNumber},${nodeName3}=https://${nodeAddress3}:${PORTS.etcdPeer.portNumber}
          --key-file=${CERTIFICATES.etcdServer.keyPath}
          --listen-client-urls=https://127.0.0.1:${PORTS.etcdServer.portNumber},https://${nodeAddress3}:${clientPort}
          --listen-metrics-urls=http://0.0.0.0:${PORTS.etcdMetricServer.portNumber}
          --listen-peer-urls=https://${nodeAddress3}:${PORTS.etcdPeer.portNumber}
          --name=${nodeName3}
          --peer-cert-file=${CERTIFICATES.etcdPeer.crtPath}
          --peer-client-cert-auth=true
          --peer-key-file=${CERTIFICATES.etcdPeer.keyPath}
          --peer-trusted-ca-file=${CERTIFICATES.etcdCA.crtPath}
          --trusted-ca-file=${CERTIFICATES.etcdCA.keyPath}
        `}
      </CodeBlock>
    </Flex>
  )
}
