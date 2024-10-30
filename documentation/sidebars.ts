/* eslint-disable import/no-default-export */
import { main } from './src/sidebars/technical-docs/main'

const sidebars = {
  techDocs: [
    {
      type: 'category',
      label: 'B-Cloud',
      collapsed: false,
      items: main,
    },
  ],
}

export default sidebars
