import React, { FC } from 'react'
import CodeBlock from '@theme/CodeBlock'

export const CommandTable: FC<{ command: string }> = ({ command }) => (
  <table>
    <tr>
      <th>Команды</th>
      <th>Описание</th>
    </tr>{' '}
    <tr>
      <td>
        <CodeBlock language="bash">{`${command} --endpoints=$(${command}Members) member list -w table`}</CodeBlock>
      </td>
      <td>Вывести перечень узлов ETCD кластера с одного из узлов в табличном формате</td>
    </tr>{' '}
    <tr>
      <td>
        <CodeBlock language="bash">{`${command} --endpoints=$(${command}Members) endpoint status -w table`}</CodeBlock>
      </td>
      <td>Вывести статус узлов ETCD кластера в табличном формате</td>
    </tr>{' '}
    <tr>
      <td>
        <CodeBlock language="bash">{`${command} --endpoints=$(${command}Members) get / --prefix`}</CodeBlock>
      </td>
      <td>Вывести все ключи и значения, чей ключ удовлетворяет заданному префиксу.</td>
    </tr>{' '}
    <tr>
      <td>
        <CodeBlock language="bash">{`${command} --endpoints=$(${command}Members) get / --prefix --keys-only`}</CodeBlock>
      </td>
      <td>Вывести все ключи, чей ключ удовлетворяет заданному префиксу.</td>
    </tr>{' '}
    <tr>
      <td>
        <CodeBlock language="bash">{`${command} --endpoints=$(${command}Members) snapshot save PATH_TO_SAVE.db`}</CodeBlock>
      </td>
      <td>Создать моментальный снимок состояния базы данных ETCD_api_address</td>
    </tr>{' '}
    <tr>
      <td>
        <CodeBlock language="bash">{`${command} --endpoints=$(${command}Members) defrag --cluster`}</CodeBlock>
      </td>
      <td>
        Выполнить дефрагментацию файлов БД. (При выключенном кластере применяется с флагом --data-dir и указыванием пути
        до файла)
      </td>
    </tr>{' '}
    <tr>
      <td>
        <CodeBlock language="bash">{`${command} --endpoints=$(${command}Members) compaction $\{INDEX}`}</CodeBlock>
      </td>
      <td>Выполнить компоновку данных и назначить номер ревизии</td>
    </tr>
  </table>
)
