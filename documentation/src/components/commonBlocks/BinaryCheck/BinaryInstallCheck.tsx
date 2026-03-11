import React, { FC } from 'react'
import CodeBlock from '@theme/CodeBlock'
import Admonition from '@theme/Admonition'
import { translate } from '@docusaurus/Translate'
import dedent from 'ts-dedent'

interface BinaryInstallCheckProps {
  binaryName: string
  version: string
  installSteps: string[]
  successMessage: string
  grepCommand: string
  lsOutput: string
}

export const BinaryInstallCheck: FC<BinaryInstallCheckProps> = ({
  binaryName,
  version,
  installSteps,
  successMessage,
  grepCommand,
  lsOutput,
}) => {
  const journalOutput = [
    `***** [INFO] Checking current ${binaryName} version...`,
    `***** [INFO] Current: none, Target: ${version}`,
    `***** [INFO] Download URL: https://*******`,
    `***** [INFO] Updating ${binaryName} to version ${version}...`,
    `***** [INFO] Working directory: /tmp/tmp.*****`,
    `***** [INFO] Downloading ${binaryName}...`,
    `***** [INFO] Downloading checksum file...`,
    `***** [INFO] Verifying checksum...`,
    ...installSteps.map(step => `***** [INFO] ${step}`),
    `***** [INFO] ${successMessage} ${version}.`,
  ].join('\n')

  return (
    <>
      <CodeBlock language="bash">{`journalctl -t ${binaryName}-installer`}</CodeBlock>
      <Admonition type="note" title={translate({ id: 'common.commandOutput', message: 'Вывод команды' })}>
        <CodeBlock language="text">{journalOutput}</CodeBlock>
      </Admonition>
      <CodeBlock language="bash">{`ls -la /usr/local/bin/ | grep ${grepCommand}`}</CodeBlock>
      <Admonition type="note" title={translate({ id: 'common.commandOutput', message: 'Вывод команды' })}>
        <CodeBlock language="bash">{lsOutput}</CodeBlock>
      </Admonition>
    </>
  )
}
