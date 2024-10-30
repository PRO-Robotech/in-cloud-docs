import React, { FC } from 'react'
import styles from './styles.module.css'

export const Header: FC = () => (
  <div className={styles.container}>
    <div className={styles.text}>
      <h1>B-Cloud</h1>
      <h2>Облако которое мы заслужили</h2>

      <a href="/in-cloud/tech-docs/kubernetes/about">
        <button className={styles.button} type="button">
          Начать
        </button>
      </a>
    </div>
  </div>
)
