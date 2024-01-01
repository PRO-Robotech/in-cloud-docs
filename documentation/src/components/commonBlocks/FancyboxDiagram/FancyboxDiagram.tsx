import React, { FC, PropsWithChildren } from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import { Fancybox } from '@site/src/components/commonBlocks/Fancybox'

export const FancyboxDiagram: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div id="dialog-content" style={{ display: 'none', minWidth: '80vw', background: '#000' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TransformWrapper>
            <TransformComponent>
              <div style={{ minWidth: '80vw', width: '100%', height: '100%', margin: '0 auto' }}>{children}</div>
            </TransformComponent>
          </TransformWrapper>
        </div>
      </div>
      <Fancybox>
        <a data-fancybox="gallery" data-src="#dialog-content">
          {children}
        </a>
      </Fancybox>
    </>
  )
}
