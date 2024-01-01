// src/theme/Root.js
import React from 'react'
import { ConfigProvider, theme as antdtheme } from 'antd'
import DefaultRoot from '@theme-original/Root'

function Root({ children }) {
  return (
    <ConfigProvider
      theme={{
        algorithm: antdtheme.darkAlgorithm,
      }}
    >
      <DefaultRoot>{children}</DefaultRoot>
    </ConfigProvider>
  )
}

export default Root
