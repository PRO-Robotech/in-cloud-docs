import React, { FC } from 'react'
import CodeBlock from '@theme/CodeBlock'
import Admonition from '@theme/Admonition'
import { translate } from '@docusaurus/Translate'

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
    <Admonition type="note" title={translate({ id: 'common.commandOutput', message: 'Вывод команды' })}>
      <CodeBlock language="bash">{output}</CodeBlock>
    </Admonition>
  </>
)
