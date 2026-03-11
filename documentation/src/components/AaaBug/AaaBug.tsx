import React, { FC } from 'react'
import { translate } from '@docusaurus/Translate'
import styles from './styles.module.css'
import { getBasePrefix } from '@site/src/utils/getBasePrefix'

export const AaaBug: FC = () => {
  return (
    <div className={styles.container}>
      <img
        src={`${getBasePrefix()}img/commics/monkey-user/aaa-bug.png`}
        alt={translate({ id: 'aaaBug.alt', message: 'Диаграмма установки компонентов Kubernetes' })}
        className={styles.image}
      />
    </div>
  )
}
