import React, { FC } from 'react'
import CodeBlock from '@theme/CodeBlock'
import Admonition from '@theme/Admonition'

interface BinaryVersionCheckProps {
  command: string
  output: string
}

export const BinaryVersionCheck: FC<BinaryVersionCheckProps> = ({
  command,
  output,
}) => (
  <>
    <CodeBlock language="bash">{command}</CodeBlock>
    <Admonition type="note" title="Вывод команды">
      <CodeBlock language="bash">{output}</CodeBlock>
    </Admonition>
  </>
)
