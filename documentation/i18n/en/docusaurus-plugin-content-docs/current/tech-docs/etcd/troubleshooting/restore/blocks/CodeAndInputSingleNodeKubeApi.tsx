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

      This ETCD cluster variant is deployed on ControlPlane cluster nodes, one per each. <br/>

      First, set the variables:

      <li><code>ETCD_NODE_NAME_N</code>    - ETCD pod name (Usually formatted as `etcd-CONTROLPLANE_NODE_NAME`)</li>
      <li><code>K8S_NODE_NAME_N</code>     - K8s cluster node name where ETCD is running.</li>
      <li><code>K8S_NODE_ADDRESS_N</code>  - K8s cluster node IP address where ETCD is running.</li>
      <li><code>ETCD_CLIENT_PORT</code>    - ETCD cluster client connection port.</li>
      <li><code>ETCD_PEER_PORT</code>      - Port for inter-node communication within the ETCD cluster.</li>
      <li><code>K8S_NODE_USERNAME</code>   - Username for SSH connection to K8s cluster nodes.</li>

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

      <Alert
        message="WARNING"
        description="If the first node's address is specified in the configuration of other still running nodes, they will fail with an error until they are connected to the new cluster."
        type="warning"
        showIcon
      />

      <Alert
        message="INFO"
        description="The recovery process is described using CRICTL and NSENTER. For this, you will need SSH access to K8s cluster nodes."
        type="info"
        showIcon
      />

      <Alert
        message="INFO"
        description="You will need the following aliases: <code>cidsearch</code>."
        type="info"
        showIcon
      />

      <Tabs groupId="etcd-node">
        <TabItem value='Master-1'>
          1. Upload the snapshot file to the first cluster node VM at the path <code>{ETCD_ARGS.workDir.value}/backup.db</code> using rsync

          <CodeBlock language="bash">
            {dedent`
              ssh \${K8S_NODE_USERNAME}@$\{K8S_NODE_ADDRESS_1} "mkdir -p ${ETCD_ARGS.workDir.value}"
              rsync --rsync-path="sudo rsync" \\
                backup.db \\
                \${K8S_NODE_USERNAME}@$\{K8S_NODE_ADDRESS_1}:${ETCD_ARGS.workDir.value}/backup.db
            `}
          </CodeBlock>

          2. Connect to the first cluster node VM via SSH and switch to the superuser.
          Then stop `kubelet` to prevent it from starting ETCD.

          <CodeBlock language="bash">
            {dedent`
              ssh \${K8S_NODE_USERNAME}@$\{K8S_NODE_ADDRESS_1}
              sudo su -
              systemctl stop kubelet
            `}
          </CodeBlock>

          3. Identify the `etcd` container on the node:

          List the running etcd containers.

          <CodeBlock language="bash">
            {dedent`
              crictl ps \\
              --label io.kubernetes.container.name=etcd \\
              -o json | jq -r \\
                '(["PODNAME","PODNAMESPACE","CONTAINERNAME","CONTAINERID"] | (., map(length*"-"))), (.containers[] | [.labels."io.kubernetes.pod.name", .labels."io.kubernetes.pod.namespace", .metadata.name, .id ])| @tsv' | column -t
            `}
          </CodeBlock>

          Using the output of the previous command, set the namespace and pod name of the container:

          <CodeAndInputExportPods />

          4. Collecting Flags

          <CodeBlock language="bash">
            {dedent`
              ectlflagsearch() {
                ETCD_ARGS=$(
                    crictl inspect \\
                    -o yaml \\
                    $(cidsearch \\
                      \${SEARCH_POD_NAME} \\
                      \${SEARCH_NAMESPACE} \\
                    )) ; \\
                  echo -n \\
                  '--cert='$(grep --\
                    '--peer-cert-file=' <<< $ETCD_ARGS |
                      head -n1 |
                      sed 's/[^=]*=//') \\
                  '--key='$(grep --\
                    '--peer-key-file=' <<< $ETCD_ARGS |
                      head -n1 |
                      sed 's/[^=]*=//') \\
                  '--cacert='$(grep --\
                    '--trusted-ca-file=' <<< $ETCD_ARGS |
                      head -n1 |
                      sed 's/[^=]*=//') \\
                  '--endpoints='$(grep --\
                    '--advertise-client-urls=' <<< $ETCD_ARGS |
                      head -n1 |
                      sed 's/[^=]*=//' |
                      sed 's/$(POD_NAME)/'\${SEARCH_POD_NAME}'/' |
                      sed 's/$(POD_NAMESPACE)/'\${SEARCH_NAMESPACE}'/')
              }
            `}
          </CodeBlock>

          Execute commands to stop and remove the container:

          <CodeBlock language="bash">
            {dedent`
              crictl stop $(cidsearch \${SEARCH_POD_NAME} \${SEARCH_NAMESPACE})
              crictl rm $(cidsearch \${SEARCH_POD_NAME} \${SEARCH_NAMESPACE})
            `}
          </CodeBlock>

          4. Create a filesystem backup (The process is described in the Backups chapter).

          5. Delete old files from the directory <code>{ETCD_ARGS.dataDir.value}</code>

          <CodeBlock language="bash">{`rm -rf ${ETCD_ARGS.dataDir.value}/*`}</CodeBlock>

          6. Prepare the database from the snapshot:
          <CodeBlock language="bash">
            {dedent`
              etcdctl snapshot restore ${ETCD_ARGS.workDir.value}/backup.db \\
                --name=\${ETCD_NODE_NAME_1} \\
                --data-dir ${ETCD_ARGS.dataDir.value} \\
                --initial-advertise-peer-urls=https://\${K8S_NODE_ADDRESS_1}:\${ETCD_PEER_PORT} \\
                --initial-cluster=\${ETCD_NODE_NAME_1}=https://\${K8S_NODE_ADDRESS_1}:\${ETCD_PEER_PORT}
            `}
          </CodeBlock>

          :::note
          Note that the local `etcdctl` file is being used and the snapshot is also located on the master in the directory <code>{ETCD_ARGS.workDir.value}</code>.
          The `data-dir` specifies the directory that is mounted inside the ETCD container and will be used to store database files.
          :::

          7. Check and if necessary edit the ETCD startup parameters in the file <code>${CUSTOM_VALUE.kubernetesBaseFolderPath.value}/manifests/etcd.yaml</code>
          specified in the `spec.containers[0].command` section.
          Specifically, verify the required fields and their values; do not delete fields that are not in this list!

          <CodeBlock language="bash">
            {dedent`
              --advertise-client-urls=https://${k8sNodeAddress1}:${clientPort}
              --cert-file=${CERTIFICATES.etcdServer.crtPath}
              --client-cert-auth=true
              --data-dir=${ETCD_ARGS.dataDir.value}
              --key-file=${CERTIFICATES.etcdServer.keyPath}
              --listen-client-urls=https://127.0.0.1:${PORTS.etcdServer.portNumber},https://${k8sNodeAddress1}:${clientPort}
              --listen-metrics-urls=http://0.0.0.0:${PORTS.etcdMetricServer.portNumber}
              --listen-peer-urls=https://${k8sNodeAddress1}:${PORTS.etcdPeer.portNumber}
              --name=${etcdNodeName1}
              --peer-cert-file=${CERTIFICATES.etcdPeer.crtPath}
              --peer-client-cert-auth=true
              --peer-key-file=${CERTIFICATES.etcdPeer.keyPath}
              --peer-trusted-ca-file=${CERTIFICATES.etcdCA.crtPath}
              --trusted-ca-file=${CERTIFICATES.etcdCA.keyPath}
            `}
          </CodeBlock>

          <table>
            <tr><th>Parameter</th><th>Description</th></tr>
            <tr><td>`advertise-client-urls` </td><td>Advertised connection endpoints for client connections. Matches the k8s cluster node IP address</td></tr>
            <tr><td>`cert-file`             </td><td>Path to the ETCD cluster certificate</td></tr>
            <tr><td>`client-cert-auth`      </td><td>Enable/disable client certificate authentication</td></tr>
            <tr><td>`data-dir`              </td><td>Directory where ETCD database files are stored</td></tr>
            <tr><td>`key-file`              </td><td>Path to the ETCD cluster certificate key</td></tr>
            <tr><td>`listen-client-urls`    </td><td>Endpoint where ETCD will accept client requests (`0.0.0.0`, `127.0.0.1` or k8s cluster node IP address)</td></tr>
            <tr><td>`listen-metrics-urls`   </td><td>Endpoint where ETCD will accept metrics requests (`0.0.0.0`, `127.0.0.1` or k8s cluster node IP address)</td></tr>
            <tr><td>`listen-peer-urls`      </td><td>Endpoint where ETCD will accept requests from other ETCD cluster nodes (`0.0.0.0`, `127.0.0.1` or k8s cluster node IP address)</td></tr>
            <tr><td>`name`                  </td><td>ETCD cluster node name</td></tr>
            <tr><td>`peer-cert-file`        </td><td>Path to the certificate for inter-node communication within the ETCD cluster</td></tr>
            <tr><td>`peer-client-cert-auth` </td><td>Certificate for authenticating connections between ETCD cluster nodes</td></tr>
            <tr><td>`peer-key-file`         </td><td>Path to the certificate key for inter-node communication within the ETCD cluster</td></tr>
            <tr><td>`peer-trusted-ca-file`  </td><td>Path to the trusted root certificate for inter-node communication within the ETCD cluster</td></tr>
            <tr><td>`trusted-ca-file`       </td><td>Path to the ETCD cluster trusted root certificate</td></tr>
          </table>

          <Alert
            message="Warning"
            description="If the `initial-cluster-state` parameter equals `existing` or the database and metadata files are missing, then all other parameters whose names start with `initial` will be ignored. In our case, we have already restored the database files and added metadata during the database preparation from the snapshot."
            type="warning"
            showIcon
          />

          8. Start kubelet:

          <CodeBlock language="bash">
            {dedent`
              systemctl start kubelet
            `}
          </CodeBlock>

          9. Check the container status and logs

          List running containers containing etcd in the pod name, container name, or namespace

          <CodeBlock language="bash">
            {dedent`
              crictl ps -o json | jq -r \\
                '(["PODNAME","PODNAMESPACE","CONTAINERNAME","CONTAINERID"] | (., map(length*"-"))), (.containers[] | [.labels."io.kubernetes.pod.name", .labels."io.kubernetes.pod.namespace", .metadata.name, .id ])| @tsv' |
              grep -e "etcd" -e "PODNAME" -e "---"  |
              column -t
            `}
          </CodeBlock>

          Using the output of the previous command, set the namespace and pod name to inspect:

          <CodeAndInputExportPods />

          <CodeBlock language="bash">
            {dedent`
              crictl ps $(cidsearch \${SEARCH_POD_NAME} \${SEARCH_NAMESPACE})
              crictl logs $(cidsearch \${SEARCH_POD_NAME} \${SEARCH_NAMESPACE})
            `}
          </CodeBlock>

          11. Using the `etcdctl member list` and `etcdctl endpoint status --cluster` commands, check the cluster status.

          12. Proceed to configuring the second node.

        </TabItem>
        <TabItem value='Master-2'>

          1. On the first ETCD cluster node, add the second cluster node in learner mode:

          <CodeBlock language="bash">{`etcdctl member add \${ETCD_NODE_NAME_2} --peer-urls=https://\${K8S_NODE_ADDRESS_2}:${peerPort} --learner ;`}</CodeBlock>

          2. Connect to the second cluster node VM via SSH and stop `kubelet` to prevent it from starting ETCD.

          <CodeBlock language="bash">{`systemctl stop kubelet`}</CodeBlock>

          3. Stop and remove the `etcd` container:

          <CodeBlock language="bash">
            {dedent`
              export CONTAINER_ID="$(crictl ps -a  \\
                --label io.kubernetes.container.name=etcd \\
                --label io.kubernetes.pod.namespace=kube-system \\
                | awk 'NR>1{r=$1} $0~/Running/{exit} END{print r}')"
              crictl stop \${CONTAINER_ID}
              crictl rm \${CONTAINER_ID}
            `}
          </CodeBlock>

          4. Create a backup.

          5. Delete old files from the directory <code>{ETCD_ARGS.dataDir.value}</code>

          <CodeBlock language="bash">{`rm -rf ${ETCD_ARGS.workDir.value}/*`}</CodeBlock>

          6. Open the file <code>${CUSTOM_VALUE.kubernetesBaseFolderPath.value}/manifests/etcd.yaml</code> for editing:
          Find and replace the values of the following keys in the `spec.containers[0].command` section as shown in the example below
          according to your parameters and the description table:

          <CodeBlock language="bash">
            {dedent`
              --advertise-client-urls=https://${k8sNodeAddress2}:${clientPort}
              --cert-file=${CERTIFICATES.etcdServer.crtPath}
              --client-cert-auth=true
              --data-dir=${ETCD_ARGS.dataDir.value}
              --initial-advertise-peer-urls=https://${k8sNodeAddress2}:${PORTS.etcdPeer.portNumber}
              --initial-cluster=${etcdNodeName1}=https://${k8sNodeAddress1}:${PORTS.etcdPeer.portNumber},${etcdNodeName2}=https://${k8sNodeAddress2}:${PORTS.etcdPeer.portNumber}
              --key-file=${CERTIFICATES.etcdServer.keyPath}
              --listen-client-urls=https://127.0.0.1:${PORTS.etcdServer.portNumber},https://${k8sNodeAddress2}:${clientPort}
              --listen-metrics-urls=http://0.0.0.0:${PORTS.etcdMetricServer.portNumber}
              --listen-peer-urls=https://${k8sNodeAddress2}:${PORTS.etcdPeer.portNumber}
              --name=${etcdNodeName2}
              --peer-cert-file=${CERTIFICATES.etcdPeer.crtPath}
              --peer-client-cert-auth=true
              --peer-key-file=${CERTIFICATES.etcdPeer.keyPath}
              --peer-trusted-ca-file=${CERTIFICATES.etcdCA.crtPath}
              --trusted-ca-file=${CERTIFICATES.etcdCA.keyPath}
            `}
          </CodeBlock>

          <table>
            <tr><th>Parameter</th><th>Description</th></tr>
            <tr><td>`advertise-client-urls`       </td><td>Advertised connection endpoints for client connections. Matches the k8s cluster node IP address</td></tr>
            <tr><td>`cert-file`                   </td><td>Path to the ETCD cluster certificate</td></tr>
            <tr><td>`client-cert-auth`            </td><td>Enable/disable client certificate authentication</td></tr>
            <tr><td>`data-dir`                    </td><td>Directory where ETCD database files are stored</td></tr>
            <tr><td>`key-file`                    </td><td>Path to the ETCD cluster certificate key</td></tr>
            <tr><td>`initial-advertise-peer-urls` </td><td>Advertised connection endpoints for inter-node communication within the ETCD cluster</td></tr>
            <tr><td>`initial-cluster`             </td><td>List of ETCD cluster nodes and their connection endpoints for inter-node communication, which will be added to the database metadata when the current node starts.</td></tr>
            <tr><td>`listen-client-urls`          </td><td>Endpoint where ETCD will accept client requests (`0.0.0.0`, `127.0.0.1` or k8s cluster node IP address)</td></tr>
            <tr><td>`listen-metrics-urls`         </td><td>Endpoint where ETCD will accept metrics requests (`0.0.0.0`, `127.0.0.1` or k8s cluster node IP address)</td></tr>
            <tr><td>`listen-peer-urls`            </td><td>Endpoint where ETCD will accept requests from other ETCD cluster nodes (`0.0.0.0`, `127.0.0.1` or k8s cluster node IP address)</td></tr>
            <tr><td>`name`                        </td><td>ETCD cluster node name</td></tr>
            <tr><td>`peer-cert-file`              </td><td>Path to the certificate for inter-node communication within the ETCD cluster</td></tr>
            <tr><td>`peer-client-cert-auth`       </td><td>Certificate for authenticating connections between ETCD cluster nodes</td></tr>
            <tr><td>`peer-key-file`               </td><td>Path to the certificate key for inter-node communication within the ETCD cluster</td></tr>
            <tr><td>`peer-trusted-ca-file`        </td><td>Path to the trusted root certificate for inter-node communication within the ETCD cluster</td></tr>
            <tr><td>`trusted-ca-file`             </td><td>Path to the ETCD cluster trusted root certificate</td></tr>
          </table>

          7. Start kubelet:

          <CodeBlock language="bash">{`systemctl start kubelet`}</CodeBlock>

          8. Check the container status and errors

          <CodeBlock language="bash">
            {dedent`
              export CONTAINER_ID="$(crictl ps -a  \\
                --label io.kubernetes.container.name=etcd \\
                --label io.kubernetes.pod.namespace=kube-system \\
                | awk 'NR>1{r=$1} $0~/Running/{exit} END{print r}')"

              crictl ps --id $CONTAINER_ID

              crictl logs $CONTAINER_ID
            `}
          </CodeBlock>

          9. Return to the first cluster node and verify that the second node has been detected (Its state should be `started`):

          <CodeBlock language="bash">{`ectl member list -w table`}</CodeBlock>

          10. Then promote the second node to active mode:

          <CodeBlock language="bash">{`ectl member promote \${ETCD_NODE_NAME_2}`}</CodeBlock>

          11. Using the `member list` and `endpoint status` commands described above, check the cluster status.

          12. Proceed to the third cluster node
        </TabItem>
        <TabItem value='Master-3'>

          1. Connect to the first ETCD cluster node and add the third cluster node in learner mode:

          <CodeBlock language="bash">{`etcdctl member add \${ETCD_NODE_NAME_3} --peer-urls=https://\${K8S_NODE_ADDRESS_3}:${peerPort} --learner ;`}</CodeBlock>

          2. Connect to the third cluster node VM via SSH and stop `kubelet` to prevent it from starting ETCD.

          <CodeBlock language="bash">{`systemctl stop kubelet`}</CodeBlock>

          3. Stop and remove the `etcd` container:

          <CodeBlock language="bash">
            {dedent`
              export CONTAINER_ID="$(crictl ps -a  \\
                --label io.kubernetes.container.name=etcd \\
                --label io.kubernetes.pod.namespace=kube-system \\
                | awk 'NR>1{r=$1} $0~/Running/{exit} END{print r}')"
              crictl stop \${CONTAINER_ID}
              crictl rm \${CONTAINER_ID}
            `}
          </CodeBlock>

          4. Create a backup.

          5. Delete old files from the directory <code>{ETCD_ARGS.dataDir.value}</code>

          <CodeBlock language="bash">{`rm -rf ${ETCD_ARGS.workDir.value}/*`}</CodeBlock>

          6. Open the file <code>${CUSTOM_VALUE.kubernetesBaseFolderPath.value}/manifests/etcd.yaml</code> for editing:
          Find and replace the values of the following keys in the `spec.containers[0].command` section as shown in the example below
          according to your parameters and the description table:

          <CodeBlock language="bash">
            {dedent`
              --advertise-client-urls=https://${k8sNodeAddress3}:${clientPort}
              --cert-file=${CERTIFICATES.etcdServer.crtPath}
              --client-cert-auth=true
              --data-dir=${ETCD_ARGS.dataDir.value}
              --initial-advertise-peer-urls=https://${k8sNodeAddress3}:${PORTS.etcdPeer.portNumber}
              --initial-cluster=${etcdNodeName1}=https://${k8sNodeAddress1}:${PORTS.etcdPeer.portNumber},${etcdNodeName2}=https://${k8sNodeAddress2}:${PORTS.etcdPeer.portNumber},${etcdNodeName3}=https://${k8sNodeAddress3}:${PORTS.etcdPeer.portNumber}
              --key-file=${CERTIFICATES.etcdServer.keyPath}
              --listen-client-urls=https://127.0.0.1:${PORTS.etcdServer.portNumber},https://${k8sNodeAddress3}:${clientPort}
              --listen-metrics-urls=http://0.0.0.0:${PORTS.etcdMetricServer.portNumber}
              --listen-peer-urls=https://${k8sNodeAddress3}:${PORTS.etcdPeer.portNumber}
              --name=${etcdNodeName3}
              --peer-cert-file=${CERTIFICATES.etcdPeer.crtPath}
              --peer-client-cert-auth=true
              --peer-key-file=${CERTIFICATES.etcdPeer.keyPath}
              --peer-trusted-ca-file=${CERTIFICATES.etcdCA.crtPath}
              --trusted-ca-file=${CERTIFICATES.etcdCA.keyPath}
            `}
          </CodeBlock>

          <table>
            <tr><th>Parameter</th><th>Description</th></tr>
            <tr><td>`advertise-client-urls`       </td><td>Advertised connection endpoints for client connections. Matches the k8s cluster node IP address</td></tr>
            <tr><td>`cert-file`                   </td><td>Path to the ETCD cluster certificate</td></tr>
            <tr><td>`client-cert-auth`            </td><td>Enable/disable client certificate authentication</td></tr>
            <tr><td>`data-dir`                    </td><td>Directory where ETCD database files are stored</td></tr>
            <tr><td>`key-file`                    </td><td>Path to the ETCD cluster certificate key</td></tr>
            <tr><td>`initial-advertise-peer-urls` </td><td>Advertised connection endpoints for inter-node communication within the ETCD cluster</td></tr>
            <tr><td>`initial-cluster`             </td><td>List of ETCD cluster nodes and their connection endpoints for inter-node communication, which will be added to the database metadata when the current node starts.</td></tr>
            <tr><td>`listen-client-urls`          </td><td>Endpoint where ETCD will accept client requests (`0.0.0.0`, `127.0.0.1` or k8s cluster node IP address)</td></tr>
            <tr><td>`listen-metrics-urls`         </td><td>Endpoint where ETCD will accept metrics requests (`0.0.0.0`, `127.0.0.1` or k8s cluster node IP address)</td></tr>
            <tr><td>`listen-peer-urls`            </td><td>Endpoint where ETCD will accept requests from other ETCD cluster nodes (`0.0.0.0`, `127.0.0.1` or k8s cluster node IP address)</td></tr>
            <tr><td>`name`                        </td><td>ETCD cluster node name</td></tr>
            <tr><td>`peer-cert-file`              </td><td>Path to the certificate for inter-node communication within the ETCD cluster</td></tr>
            <tr><td>`peer-client-cert-auth`       </td><td>Certificate for authenticating connections between ETCD cluster nodes</td></tr>
            <tr><td>`peer-key-file`               </td><td>Path to the certificate key for inter-node communication within the ETCD cluster</td></tr>
            <tr><td>`peer-trusted-ca-file`        </td><td>Path to the trusted root certificate for inter-node communication within the ETCD cluster</td></tr>
            <tr><td>`trusted-ca-file`             </td><td>Path to the ETCD cluster trusted root certificate</td></tr>
          </table>


          7. Start kubelet:

          <CodeBlock language="bash">{`systemctl start kubelet`}</CodeBlock>

          8. Check the container status and errors

          <CodeBlock language="bash">
            {dedent`
              export CONTAINER_ID="$(crictl ps -a  \\
                --label io.kubernetes.container.name=etcd \\
                --label io.kubernetes.pod.namespace=kube-system \\
                | awk 'NR>1{r=$1} $0~/Running/{exit} END{print r}')"

              crictl ps --id $CONTAINER_ID

              crictl logs $CONTAINER_ID
            `}
          </CodeBlock>

          9. Return to the first cluster node and verify that the third node has been detected (Its state should be `started`):

          <CodeBlock language="bash">{`ectl member list -w table`}</CodeBlock>

          10. Then promote the third node to active mode:

          <CodeBlock language="bash">{`ectl member promote \${ETCD_NODE_NAME_3}`}</CodeBlock>

          11. Using the `member list` and `endpoint status` commands described above, check the cluster status.

        </TabItem>
      </Tabs>

      After completing the work on all three ETCD cluster nodes, the cluster is restored and ready to operate.

    </Flex>
  )
}
