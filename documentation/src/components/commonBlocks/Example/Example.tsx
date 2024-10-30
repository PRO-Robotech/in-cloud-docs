import React, { FC } from 'react'
import CodeBlock from '@theme/CodeBlock'

/* How to use

Place import:
import { Example } from "@site/src/components/commonBlocks";

Add component to mdx page:
<Example />

*/

const code = `
function helloWorld() {
  console.log('Hello, world!');
}
`

export const Example: FC = () => {
  return (
    <>
      <h1>Example</h1>
      <CodeBlock language="js" title="js">
        {code}
      </CodeBlock>
    </>
  )
}
