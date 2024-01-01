import React, { FC, useRef, useEffect, PropsWithChildren } from 'react'
import { Fancybox as NativeFancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import { OptionsType } from '@fancyapps/ui/types/Fancybox/options'

interface Props {
  options?: Partial<OptionsType>
  delegate?: string
}

export const Fancybox: FC<PropsWithChildren<Props>> = ({ delegate, options, children }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current

    const delegateParsed = delegate || '[data-fancybox]'
    const optionsParsed = options || {}

    NativeFancybox.bind(container, delegateParsed, optionsParsed)

    return () => {
      NativeFancybox.unbind(container)
      NativeFancybox.close()
    }
  })

  return <div ref={containerRef}>{children}</div>
}
