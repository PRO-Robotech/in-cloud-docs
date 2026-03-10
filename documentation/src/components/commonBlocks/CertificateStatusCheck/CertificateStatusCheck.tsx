import React, { FC } from 'react'
import CodeBlock from '@theme/CodeBlock'
import Admonition from '@theme/Admonition'
import Details from '@theme/Details'
import Link from '@docusaurus/Link'
import dedent from 'ts-dedent'
import { CUSTOM_VALUE } from '@site/src/constants/kubernetes/customValue'

interface CertificateStatusCheckProps {
  method: 'openssl' | 'kubeadm'
  certPath?: string
  certDisplayName: string
  caDisplayName?: string
}

export const CertificateStatusCheck: FC<CertificateStatusCheckProps> = ({
  method,
  certPath,
  certDisplayName,
  caDisplayName,
}) => {
  const isOpenssl = method === 'openssl'

  const command = isOpenssl
    ? `${CUSTOM_VALUE.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${certPath}`
    : 'kubeadm certs check-expiration'

  const warningContent = isOpenssl ? (
    <>
      Данный раздел зависит от следующих разделов:
      <ul>
        <li>
          <Link to="/tech-docs/kubernetes/certificates/examination/all-examination">
            SSL Certificate Check
          </Link>
        </li>
      </ul>
    </>
  ) : (
    <>Данная команда не способна отображать статус конкретного сертификата, только список доступных.</>
  )

  const outputLine = dedent`
    CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
    ${certDisplayName.padEnd(27)}Oct 22, 2025 22:06 UTC   364d            ${(caDisplayName ?? '').padEnd(24)}no
  `

  return (
    <Details
      className="custom-blue-block"
      summary={<summary>Проверка готовности сертификата</summary>}
    >
      <Admonition type="warning" title="Обратите внимание">
        {warningContent}
      </Admonition>
      <CodeBlock language="bash">{command}</CodeBlock>
      <Admonition type="note" title="Вывод команды">
        <CodeBlock language="bash">{outputLine}</CodeBlock>
      </Admonition>
    </Details>
  )
}
