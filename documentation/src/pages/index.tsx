/* eslint-disable import/no-default-export */
import React, { FC } from 'react'
import Layout from '@theme/Layout'
import { Header } from '@site/src/components/Landing/molecules'

const LandingPage: FC = () => {
  return (
    <Layout title="In-cloud" description="In-cloud">
      <Header />
    </Layout>
  )
}

export default LandingPage
