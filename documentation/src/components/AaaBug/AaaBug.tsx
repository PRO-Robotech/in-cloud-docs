import React, { FC } from 'react'
import styles from './styles.module.css'

export const AaaBug: FC = () => {
  return (
    <div className={styles.container}>
      <img
        src="/img/commics/monkey-user/aaa-bug.png"
        alt="Диаграмма установки компонентов Kubernetes"
        className={styles.image}
      />
    </div>
  )
}
