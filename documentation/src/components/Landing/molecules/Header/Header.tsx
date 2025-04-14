import React, { FC } from 'react'
import Link from '@docusaurus/Link'
import BrowserOnly from '@docusaurus/BrowserOnly'; // Импортируем компонент BrowserOnly
import styles from './styles.module.css'
import {getBasePrefix} from '@site/src/utils/getBasePrefix'

// Компонент Header
export const Header: FC = () => (
  <div className={styles.container}>
    <div className={styles.text}>
      <h1 className="header-title">
        <BrowserOnly>
          {() => {
            return (
              <Link to={`${getBasePrefix()}tech-docs/kubernetes/about`}>
                <img src={`${getBasePrefix()}img/paws2.svg`} alt="Logo" className="logo2" />
              </Link>
            );
          }}
        </BrowserOnly>
        B-Cloud
      </h1>
      {/* <p className="subheading">Строим вместе облако</p> */}
    </div>
  </div>
)
