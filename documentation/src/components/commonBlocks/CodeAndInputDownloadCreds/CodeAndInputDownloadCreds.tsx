import React, { FC, useState } from 'react'
import { Flex, Input } from 'antd'
import CodeBlock from '@theme/CodeBlock'
import dedent from 'ts-dedent'

export const CodeAndInputDownloadCreds: FC = () => {
  const [searchNamespace, setSearchNamespace] = useState<string>()
  const [searchPodName, setSearchPodName] = useState<string>()
  const [nodeUsername, setNodeUsername] = useState<string>()
  const [backupFileName, setBackupFileName] = useState<string>()

  return (
    <Flex vertical gap="small">
      <Input placeholder="namespace" value={searchNamespace} onChange={e => setSearchNamespace(e.target.value)} />
      <Input placeholder="pod" value={searchPodName} onChange={e => setSearchPodName(e.target.value)} />
      <Input placeholder="ssh node username" value={nodeUsername} onChange={e => setNodeUsername(e.target.value)} />
      <Input placeholder="backup filename" value={backupFileName} onChange={e => setBackupFileName(e.target.value)} />
      <CodeBlock language="bash">
        {dedent`
          export SEARCH_NAMESPACE=${searchNamespace}
          export SEARCH_POD_NAME=${searchPodName}
          export NODE_USERNAME=${nodeUsername}
          export BACKUP_FILE=${backupFileName}
          `}
      </CodeBlock>
    </Flex>
  )
}
