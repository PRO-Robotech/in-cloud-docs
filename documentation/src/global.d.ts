/* eslint-disable import/no-default-export */
/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '@theme/*' {
  const content: any
  export default content
}

declare module '@theme-original/*' {
  const content: any
  export default content
}

declare module '@theme-bootswatch/*' {
  const content: any
  export default content
}

declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}
