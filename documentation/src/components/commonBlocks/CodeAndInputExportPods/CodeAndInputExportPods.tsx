import React, { FC, useState } from 'react'
import { Flex, Input } from 'antd'
import CodeBlock from '@theme/CodeBlock'
import dedent from 'dedent'

export const CodeAndInputExportPods: FC = () => {
  const [searchNamespace, setSearchNamespace] = useState<string>()
  const [searchPodName, setSearchPodName] = useState<string>()

  return (
    <Flex vertical gap="small">
      <Input placeholder="namespace" value={searchNamespace} onChange={e => setSearchNamespace(e.target.value)} />
      <Input placeholder="pod" value={searchPodName} onChange={e => setSearchPodName(e.target.value)} />
      <CodeBlock language="bash">
        {dedent`
          export SEARCH_NAMESPACE=${searchNamespace}
          export SEARCH_POD_NAME=${searchPodName}
          `}
      </CodeBlock>
    </Flex>
  )
}
