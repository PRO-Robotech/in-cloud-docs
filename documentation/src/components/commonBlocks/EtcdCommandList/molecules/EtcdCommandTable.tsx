import React, { FC } from 'react'
import CodeBlock from '@theme/CodeBlock'
import Translate from '@docusaurus/Translate'

export const EtcdCommandTable: FC<{ command: string }> = ({ command }) => (
  <table>
    <tr>
      <th><Translate id="etcd.commands">Команды</Translate></th>
      <th><Translate id="etcd.description">Описание</Translate></th>
    </tr>{' '}
    <tr>
      <td>
        <CodeBlock language="bash">{`${command} --endpoints=$(${command}Members) member list -w table`}</CodeBlock>
      </td>
      <td><Translate id="etcd.cmd.memberList">Вывести перечень узлов ETCD кластера с одного из узлов в табличном формате</Translate></td>
    </tr>{' '}
    <tr>
      <td>
        <CodeBlock language="bash">{`${command} --endpoints=$(${command}Members) endpoint status -w table`}</CodeBlock>
      </td>
      <td><Translate id="etcd.cmd.endpointStatus">Вывести статус узлов ETCD кластера в табличном формате</Translate></td>
    </tr>{' '}
    <tr>
      <td>
        <CodeBlock language="bash">{`${command} --endpoints=$(${command}Members) get / --prefix`}</CodeBlock>
      </td>
      <td><Translate id="etcd.cmd.getPrefix">Вывести все ключи и значения, чей ключ удовлетворяет заданному префиксу.</Translate></td>
    </tr>{' '}
    <tr>
      <td>
        <CodeBlock language="bash">{`${command} --endpoints=$(${command}Members) get / --prefix --keys-only`}</CodeBlock>
      </td>
      <td><Translate id="etcd.cmd.getPrefixKeysOnly">Вывести все ключи, чей ключ удовлетворяет заданному префиксу.</Translate></td>
    </tr>{' '}
    <tr>
      <td>
        <CodeBlock language="bash">{`${command} --endpoints=$(${command}Members) snapshot save PATH_TO_SAVE.db`}</CodeBlock>
      </td>
      <td><Translate id="etcd.cmd.snapshotSave">Создать моментальный снимок состояния базы данных ETCD_api_address</Translate></td>
    </tr>{' '}
    <tr>
      <td>
        <CodeBlock language="bash">{`${command} --endpoints=$(${command}Members) defrag --cluster`}</CodeBlock>
      </td>
      <td>
        <Translate id="etcd.cmd.defrag">Выполнить дефрагментацию файлов БД. (При выключенном кластере применяется с флагом --data-dir и указыванием пути до файла)</Translate>
      </td>
    </tr>{' '}
    <tr>
      <td>
        <CodeBlock language="bash">{`${command} --endpoints=$(${command}Members) compaction $\{INDEX}`}</CodeBlock>
      </td>
      <td><Translate id="etcd.cmd.compaction">Выполнить компоновку данных и назначить номер ревизии</Translate></td>
    </tr>
  </table>
)
