import React, { FC } from 'react'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import { EtcdCommandTable } from './molecules'

export const commands = ['etcdctl', 'ectl', 'nectl', 'kectl'] // Add more commands as needed

export const EtcdCommandList: FC = () => (
  <Tabs groupId="etcd-alias">
    {commands.map(cmd => (
      <TabItem key={cmd} value={cmd} label={cmd}>
        <EtcdCommandTable command={cmd} />
      </TabItem>
    ))}
  </Tabs>
)
