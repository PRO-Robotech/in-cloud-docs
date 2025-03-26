import React, { FC } from 'react'
import Link from '@docusaurus/Link'
import styles from './styles.module.css'
const getBasePrefix = () => window.BASE_PREFIX || ''

export const Header: FC = () => (
  <div className={styles.container}>
    <div className={styles.text}>
      <h1 className="header-title">
        <Link to="/tech-docs/kubernetes/about">
          <img src={`${getBasePrefix()}/img/paws.png`} alt="Logo" className="logo2" />
        </Link>
        B-Cloud
      </h1>
      <p className="subheading">Строим вместе</p>
    </div>
  </div>
)
