import React, { FC, useState }    from 'react'
import { Flex, Input, Alert }     from 'antd'
import CodeBlock                  from '@theme/CodeBlock'
import dedent                     from 'dedent'
import { CERTIFICATES }           from '@site/src/constants/kubernetes/certs'
import { PORTS }                  from '@site/src/constants/kubernetes/ports'
import { CUSTOM_VALUE }           from '@site/src/constants/kubernetes/customValue'
import TabItem                    from '@theme/TabItem'
import Tabs                       from '@theme/Tabs'
import { ETCD_ARGS }              from '@site/src/constants/kubernetes/etcdArgs'
import { CodeAndInputExportPods } from '@site/src/components/commonBlocks'

export const Master: FC = () => {
  const [etcdNodeName1, setEtcdNodeName1] = useState<string>("etcd-bcloud-k8s-sandbox-dev-csko-1-tcgzn-7plhz")
  const [etcdNodeName2, setEtcdNodeName2] = useState<string>("etcd-bcloud-k8s-sandbox-dev-csko-1-tcgzn-h9g49")
  const [etcdNodeName3, setEtcdNodeName3] = useState<string>("etcd-bcloud-k8s-sandbox-dev-csko-1-tcgzn-wps6k")
  const [k8sNodeName1, setK8sNodeName1] = useState<string>("bcloud-k8s-sandbox-dev-csko-1-tcgzn-7plhz")
  const [k8sNodeName2, setK8sNodeName2] = useState<string>("bcloud-k8s-sandbox-dev-csko-1-tcgzn-h9g49")
  const [k8sNodeName3, setK8sNodeName3] = useState<string>("bcloud-k8s-sandbox-dev-csko-1-tcgzn-wps6k")
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

      <Alert
        message="WARNING"
        description="Если адрес первого узла указан в конфигурации других все еще работающих узлов, они упадут с ошибкой, пока не будут подключены к новому кластеру."
        type="warning"
        showIcon
      />

      <Alert
        message="INFO"
        description="Процесс восстановления описан с использованием CRICTL и NSENTER. Для этого вам потребуется доступ к узлам K8s кластера по SSH."
        type="info"
        showIcon
      />

      <Alert
        message="INFO"
        description="В работе вам понадобятся alias-ы: <code>cidsearch</code>."
        type="info"
        showIcon
      />

      <Tabs groupId="etcd-node">
        <TabItem value='Master-1'>
          1. Загрузите файл мгновенного снимка на ВМ первого узла кластера по пути <code>{ETCD_ARGS.workDir.value}/backup.db</code> при помощи rsync

          <CodeBlock language="bash">
            {dedent`
              ssh \${K8S_NODE_USERNAME}@$\{K8S_NODE_ADDRESS_1} "mkdir -p ${ETCD_ARGS.workDir.value}"
              rsync --rsync-path="sudo rsync" \
                backup.db \
                \${K8S_NODE_USERNAME}@$\{K8S_NODE_ADDRESS_1}:${ETCD_ARGS.workDir.value}/backup.db
            `}
          </CodeBlock>

          2. Подключитесь к ВМ первого узла кластера по ssh и переключитесь на суперпользователя.
          Затем остановите `kubelet`, чтобы не позволить ему запускать ETCD.

          <CodeBlock language="bash">
            {dedent`
              ssh \${K8S_NODE_USERNAME}@$\{K8S_NODE_ADDRESS_1}
              sudo su -
              systemctl stop kubelet
            `}
          </CodeBlock>

          3. Определите контейнер `etcd` на ноде:

          Выведите список запущенных контейнеров etcd.

          <CodeBlock language="bash">
            {dedent`
              crictl ps \
              --label io.kubernetes.container.name=etcd \
              -o json |
              jq -r \
                '(["PODNAME","PODNAMESPACE","CONTAINERNAME","CONTAINERID"] | (., map(length*"-"))), (.containers[] | [.labels."io.kubernetes.pod.name", .labels."io.kubernetes.pod.namespace", .metadata.name, .id ])| @tsv' |
              column -t
            `}
          </CodeBlock>

          Используя вывод предыдущей команды задайте неймспейс и имя пода контейнера:

          <CodeAndInputExportPods />

          4. Сбор Флагов

          <CodeBlock language="bash">
            {dedent`
              ectlflagsearch() {
                ETCD_ARGS=$(
                    crictl inspect \
                    -o yaml \
                    $(cidsearch \
                      \${SEARCH_POD_NAME} \
                      \${SEARCH_NAMESPACE} \
                    )) ; \
                  echo -n \
                  '--cert='$(grep --\
                    '--peer-cert-file=' <<< $ETCD_ARGS |
                      head -n1 |
                      sed 's/[^=]*=//') \
                  '--key='$(grep --\
                    '--peer-key-file=' <<< $ETCD_ARGS |
                      head -n1 |
                      sed 's/[^=]*=//') \
                  '--cacert='$(grep --\
                    '--trusted-ca-file=' <<< $ETCD_ARGS |
                      head -n1 |
                      sed 's/[^=]*=//') \
                  '--endpoints='$(grep --\
                    '--advertise-client-urls=' <<< $ETCD_ARGS |
                      head -n1 |
                      sed 's/[^=]*=//' |
                      sed 's/$(POD_NAME)/'\${SEARCH_POD_NAME}'/' |
                      sed 's/$(POD_NAMESPACE)/'\${SEARCH_NAMESPACE}'/')
              }
            `}
          </CodeBlock>

          Выполните команды для остановки и удаления контейнера:

          <CodeBlock language="bash">
            {dedent`
              crictl stop $(cidsearch \${SEARCH_POD_NAME} \${SEARCH_NAMESPACE})
              crictl rm $(cidsearch \${SEARCH_POD_NAME} \${SEARCH_NAMESPACE})
            `}
          </CodeBlock>

          4. Создайте резервную копию ФС (Процесс описан в главы Бекапы).

          5. Удалите старые файлы из директории <code>{ETCD_ARGS.dataDir.value}</code>

          <CodeBlock language="bash">{`rm -rf ${ETCD_ARGS.dataDir.value}/*`}</CodeBlock>

          6. Подготовьте БД из снимка:
          <CodeBlock language="bash">
            {dedent`
              etcdctl snapshot restore ${ETCD_ARGS.workDir.value}/backup.db \
                --name=\${ETCD_NODE_NAME_1} \
                --data-dir ${ETCD_ARGS.dataDir.value} \
                --initial-advertise-peer-urls=https://\${K8S_NODE_ADDRESS_1}:\${ETCD_PEER_PORT} \
                --initial-cluster=\${ETCD_NODE_NAME_1}=https://\${K8S_NODE_ADDRESS_1}:\${ETCD_PEER_PORT}
            `}
          </CodeBlock>

          :::note
          Обратите внимание, что запускается локальный файл `etcdctl` и снимок так же расположен на мастере в директории <code>{ETCD_ARGS.workDir.value}</code>.
          В качестве `data-dir` указана директория, которая монтируется внутрь контейнера ETCD и будет использоваться в качестве хранения файлов БД.
          :::

          7. Проверьте и по необходимости отредактируйте параметры запуска ETCD в файле <code>${CUSTOM_VALUE.kuberneteBaseFolderPath.value}/manifests/etcd.yaml</code>
          указанные в разделе `spec.containers[0].command`.
          А именно проверьте наличие необходимых полей и их значения, поля не входящие в данный перечень удалять не нужно!

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
            <tr><th>Параметр</th><th>Описание</th></tr>
            <tr><td>`advertise-client-urls` </td><td>Анонсируемые точки подключения к узлу, для подключения клиентов. Совпадает с IP адресом узла k8s кластера</td></tr>
            <tr><td>`cert-file`             </td><td>Путь до сертификата ETCD кластера</td></tr>
            <tr><td>`client-cert-auth`      </td><td>Включить/выключить авторизацию пользователей по сертификату</td></tr>
            <tr><td>`data-dir`              </td><td>Директория в которой хранятся файлы БД ETCD</td></tr>
            <tr><td>`key-file`              </td><td>Путь до ключа сертификата ETCD кластера</td></tr>
            <tr><td>`listen-client-urls`    </td><td>Точка подключения, на которой ETCD будет принимать клиентские запросы (`0.0.0.0`, `127.0.0.1` или IP адрес узла k8s кластера)</td></tr>
            <tr><td>`listen-metrics-urls`   </td><td>Точка подключения, на которой ETCD будет принимать запросы к метрикам (`0.0.0.0`, `127.0.0.1` или IP адрес узла k8s кластера)</td></tr>
            <tr><td>`listen-peer-urls`      </td><td>Точка подключения, на которой ETCD будет принимать запросы от других узлов ETCD кластера (`0.0.0.0`, `127.0.0.1` или IP адрес узла k8s кластера)</td></tr>
            <tr><td>`name`                  </td><td>Имя узла ETCD кластера</td></tr>
            <tr><td>`peer-cert-file`        </td><td>Путь до сертификата для подключения между узлами ETCD кластера</td></tr>
            <tr><td>`peer-client-cert-auth` </td><td>Путь до сертификата для авторизации подключений между узлами ETCD кластера</td></tr>
            <tr><td>`peer-key-file`         </td><td>Путь до ключа сертификата для подключения между узлами ETCD кластера</td></tr>
            <tr><td>`peer-trusted-ca-file`  </td><td>Путь до корневого доверенного сертификата для подключения между узлами ETCD кластера</td></tr>
            <tr><td>`trusted-ca-file`       </td><td>Путь до корневого доверенного сертификата ETCD кластера</td></tr>
          </table>

          <Alert
            message="Warning"
            description="Если параметр `initial-cluster-state` равен значению `existing` или отсутствуют файлы БД и метаданных в ней, тогда все прочие параметры, имя которых начинается со слова `initial` будут игнорироваться. В нашем случае, мы уже восстановили файлы БД и внесли метаданные на этапе подготовки БД из снимка."
            type="warning"
            showIcon
          />

          8. Запустите kubelet:

          <CodeBlock language="bash">
            {dedent`
              systemctl start kubelet
            `}
          </CodeBlock>

          9. Проверьте состояние и логи контейнера

          Выведите список запущенных контейнеров содержащих etcd в названии пода, контейнера, или неймспейса

          <CodeBlock language="bash">
            {dedent`
              crictl ps -o json |
              jq -r \
                '(["PODNAME","PODNAMESPACE","CONTAINERNAME","CONTAINERID"] | (., map(length*"-"))), (.containers[] | [.labels."io.kubernetes.pod.name", .labels."io.kubernetes.pod.namespace", .metadata.name, .id ])| @tsv' |
              grep -e "etcd" -e "PODNAME" -e "---"  |
              column -t
            `}
          </CodeBlock>

          Используя вывод предыдущей команды задайте неймспейс и имя пода, который нужно просмотреть:

          <CodeAndInputExportPods />

          <CodeBlock language="bash">
            {dedent`
              crictl ps $(cidsearch \${SEARCH_POD_NAME} \${SEARCH_NAMESPACE})
              crictl logs $(cidsearch \${SEARCH_POD_NAME} \${SEARCH_NAMESPACE})
            `}
          </CodeBlock>

          11. При помощи команд `etcdctl member list` и `etcdctl endpoint status --cluster` проверьте состояние кластера.

          12. переходите к настройке второго узла.

        </TabItem>
        <TabItem value='Master-2'>

          1. На первом узле ETCD кластера добавьте второй узел кластера в режиме обучающегося:

          <CodeBlock language="bash">{`etcdctl member add \${ETCD_NODE_NAME_2} --peer-urls=https://\${K8S_NODE_ADDRESS_2}:${peerPort} --learner ;`}</CodeBlock>

          2. Подключитесь к ВМ  второго узла кластера по ssh и остановите `kubelet`, чтобы не позволить ему запускать ETCD.

          <CodeBlock language="bash">{`systemctl stop kubelet`}</CodeBlock>

          3. Остановите и удалите контейнер `etcd`:

          <CodeBlock language="bash">
            {dedent`
              export CONTAINER_ID="$(crictl ps -a  \
                --label io.kubernetes.container.name=etcd \
                --label io.kubernetes.pod.namespace=kube-system \
                | awk 'NR>1{r=$1} $0~/Running/{exit} END{print r}')"
              crictl stop \${CONTAINER_ID}
              crictl rm \${CONTAINER_ID}
            `}
          </CodeBlock>

          4. Создайте [резервную копию](#создание-резервной-копии-файлов-бд).

          5. Удалите старые файлы из директории <code>{ETCD_ARGS.dataDir.value}</code>

          <CodeBlock language="bash">{`rm -rf ${ETCD_ARGS.workDir.value}/*`}</CodeBlock>

          6. Откройте на редактирование файл <code>${CUSTOM_VALUE.kuberneteBaseFolderPath.value}/manifests/etcd.yaml</code>:
          Найдите и замените значение следующих ключей в разделе `spec.containers[0].command` аналогично примеру ниже
          в соответствии с вашими параметрамии таблицей с описанием:

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
            <tr><th>Параметр</th><th>Описание</th></tr>
            <tr><td>`advertise-client-urls`       </td><td>Анонсируемые точки подключения к узлу, для подключения клиентов. Совпадает с IP адресом узла k8s кластера</td></tr>
            <tr><td>`cert-file`                   </td><td>Путь до сертификата ETCD кластера</td></tr>
            <tr><td>`client-cert-auth`            </td><td>Включить/выключить авторизацию пользователей по сертификату</td></tr>
            <tr><td>`data-dir`                    </td><td>Директория в которой хранятся файлы БД ETCD</td></tr>
            <tr><td>`key-file`                    </td><td>Путь до ключа сертификата ETCD кластера</td></tr>
            <tr><td>`initial-advertise-peer-urls` </td><td>Анонсируемые точки подключения к данному узлу для подключения между узлами ETCD кластера</td></tr>
            <tr><td>`initial-cluster`             </td><td>Перечень узлов кластера ETCD и их точки подключения для взаимодействия между узлами ETCD кластера, которые будут добавлены в метаданные БД при запуске текущего узла.</td></tr>
            <tr><td>`listen-client-urls`          </td><td>Точка подключения, на которой ETCD будет принимать клиентские запросы (`0.0.0.0`, `127.0.0.1` или IP адрес узла k8s кластера)</td></tr>
            <tr><td>`listen-metrics-urls`         </td><td>Точка подключения, на которой ETCD будет принимать запросы к метрикам (`0.0.0.0`, `127.0.0.1` или IP адрес узла k8s кластера)</td></tr>
            <tr><td>`listen-peer-urls`            </td><td>Точка подключения, на которой ETCD будет принимать запросы от других узлов ETCD кластера (`0.0.0.0`, `127.0.0.1` или IP адрес узла k8s кластера)</td></tr>
            <tr><td>`name`                        </td><td>Имя узла ETCD кластера</td></tr>
            <tr><td>`peer-cert-file`              </td><td>Путь до сертификата для подключения между узлами ETCD кластера</td></tr>
            <tr><td>`peer-client-cert-auth`       </td><td>Путь до сертификата для авторизации подключений между узлами ETCD кластера</td></tr>
            <tr><td>`peer-key-file`               </td><td>Путь до ключа сертификата для подключения между узлами ETCD кластера</td></tr>
            <tr><td>`peer-trusted-ca-file`        </td><td>Путь до корневого доверенного сертификата для подключения между узлами ETCD кластера</td></tr>
            <tr><td>`trusted-ca-file`             </td><td>Путь до корневого доверенного сертификата ETCD кластера</td></tr>
          </table>

          7. Запустите kubelet:

          <CodeBlock language="bash">{`systemctl start kubelet`}</CodeBlock>

          8. Проверьте состояние контейнера и наличие ошибок

          <CodeBlock language="bash">
            {dedent`
              export CONTAINER_ID="$(crictl ps -a  \
                --label io.kubernetes.container.name=etcd \
                --label io.kubernetes.pod.namespace=kube-system \
                | awk 'NR>1{r=$1} $0~/Running/{exit} END{print r}')"

              crictl ps --id $CONTAINER_ID

              crictl logs $CONTAINER_ID
            `}
          </CodeBlock>

          9. Вернитесь к первому узлу кластера и проверьте, что второй узел определился (Его состояние должно быть `started`):

          <CodeBlock language="bash">{`ectl member list -w table`}</CodeBlock>

          10. После этого переведите второй узел в рабочий режим:

          <CodeBlock language="bash">{`ectl member promote \${ETCD_NODE_NAME_2}`}</CodeBlock>

          11. При помощи команд `member list` и `endpoint status` описанных выше [проверьте состояние кластера](#проверка-подключения-и-состояния-кластера).

          12. Переходите к третьему узла кластера
        </TabItem>
        <TabItem value='Master-3'>

          1. Подключитесь к первому узлу ETCD кластера и добавьте третий узел кластера в режиме обучающегося:

          <CodeBlock language="bash">{`etcdctl member add \${ETCD_NODE_NAME_3} --peer-urls=https://\${K8S_NODE_ADDRESS_3}:${peerPort} --learner ;`}</CodeBlock>

          2. Подключитесь к ВМ  третьего узла кластера по ssh и остановите `kubelet`, чтобы не позволить ему запускать ETCD.

          <CodeBlock language="bash">{`systemctl stop kubelet`}</CodeBlock>

          3. Остановите и удалите контейнер `etcd`:

          <CodeBlock language="bash">
            {dedent`
              export CONTAINER_ID="$(crictl ps -a  \
                --label io.kubernetes.container.name=etcd \
                --label io.kubernetes.pod.namespace=kube-system \
                | awk 'NR>1{r=$1} $0~/Running/{exit} END{print r}')"
              crictl stop \${CONTAINER_ID}
              crictl rm \${CONTAINER_ID}
            `}
          </CodeBlock>

          4. Создайте [резервную копию](#создание-резервной-копии-файлов-бд).

          5. Удалите старые файлы из директории <code>{ETCD_ARGS.dataDir.value}</code>

          <CodeBlock language="bash">{`rm -rf ${ETCD_ARGS.workDir.value}/*`}</CodeBlock>

          6. Откройте на редактирование файл <code>${CUSTOM_VALUE.kuberneteBaseFolderPath.value}/manifests/etcd.yaml</code>:
          Найдите и замените значение следующих ключей в разделе `spec.containers[0].command` аналогично примеру ниже
          в соответствии с вашими параметрамии таблицей с описанием:

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
            <tr><th>Параметр</th><th>Описание</th></tr>
            <tr><td>`advertise-client-urls`       </td><td>Анонсируемые точки подключения к узлу, для подключения клиентов. Совпадает с IP адресом узла k8s кластера</td></tr>
            <tr><td>`cert-file`                   </td><td>Путь до сертификата ETCD кластера</td></tr>
            <tr><td>`client-cert-auth`            </td><td>Включить/выключить авторизацию пользователей по сертификату</td></tr>
            <tr><td>`data-dir`                    </td><td>Директория в которой хранятся файлы БД ETCD</td></tr>
            <tr><td>`key-file`                    </td><td>Путь до ключа сертификата ETCD кластера</td></tr>
            <tr><td>`initial-advertise-peer-urls` </td><td>Анонсируемые точки подключения к данному узлу для подключения между узлами ETCD кластера</td></tr>
            <tr><td>`initial-cluster`             </td><td>Перечень узлов кластера ETCD и их точки подключения для взаимодействия между узлами ETCD кластера, которые будут добавлены в метаданные БД при запуске текущего узла.</td></tr>
            <tr><td>`listen-client-urls`          </td><td>Точка подключения, на которой ETCD будет принимать клиентские запросы (`0.0.0.0`, `127.0.0.1` или IP адрес узла k8s кластера)</td></tr>
            <tr><td>`listen-metrics-urls`         </td><td>Точка подключения, на которой ETCD будет принимать запросы к метрикам (`0.0.0.0`, `127.0.0.1` или IP адрес узла k8s кластера)</td></tr>
            <tr><td>`listen-peer-urls`            </td><td>Точка подключения, на которой ETCD будет принимать запросы от других узлов ETCD кластера (`0.0.0.0`, `127.0.0.1` или IP адрес узла k8s кластера)</td></tr>
            <tr><td>`name`                        </td><td>Имя узла ETCD кластера</td></tr>
            <tr><td>`peer-cert-file`              </td><td>Путь до сертификата для подключения между узлами ETCD кластера</td></tr>
            <tr><td>`peer-client-cert-auth`       </td><td>Путь до сертификата для авторизации подключений между узлами ETCD кластера</td></tr>
            <tr><td>`peer-key-file`               </td><td>Путь до ключа сертификата для подключения между узлами ETCD кластера</td></tr>
            <tr><td>`peer-trusted-ca-file`        </td><td>Путь до корневого доверенного сертификата для подключения между узлами ETCD кластера</td></tr>
            <tr><td>`trusted-ca-file`             </td><td>Путь до корневого доверенного сертификата ETCD кластера</td></tr>
          </table>


          7. Запустите kubelet:

          <CodeBlock language="bash">{`systemctl start kubelet`}</CodeBlock>

          8. Проверьте состояние контейнера и наличие ошибок

          <CodeBlock language="bash">
            {dedent`
              export CONTAINER_ID="$(crictl ps -a  \
                --label io.kubernetes.container.name=etcd \
                --label io.kubernetes.pod.namespace=kube-system \
                | awk 'NR>1{r=$1} $0~/Running/{exit} END{print r}')"

              crictl ps --id $CONTAINER_ID

              crictl logs $CONTAINER_ID
            `}
          </CodeBlock>

          9. Вернитесь к первому узлу кластера и проверьте, что третий узел определился (Его состояние должно быть `started`):

          <CodeBlock language="bash">{`ectl member list -w table`}</CodeBlock>

          10. После этого переведите третий узел в рабочий режим:

          <CodeBlock language="bash">{`ectl member promote \${ETCD_NODE_NAME_3}`}</CodeBlock>

          11. При помощи команд `member list` и `endpoint status` описанных выше [проверьте состояние кластера](#проверка-подключения-и-состояния-кластера).

        </TabItem>
      </Tabs>

      После выполнения работ на всех трех узлах ETCD кластера, кластер восстановлен и готов к работе.

    </Flex>
  )
}
