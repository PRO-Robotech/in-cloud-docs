import React, { FC } from 'react'
import { Fancybox } from '@site/src/components/commonBlocks/Fancybox'

type TFancyboxImageProps = {
  src: string
}

export const FancyboxImage: FC<TFancyboxImageProps> = ({ src }) => (
  <Fancybox
    options={{
      Carousel: {
        infinite: false,
      },
    }}
  >
    <a data-fancybox="gallery" href={src}>
      <img src={src} />
    </a>
  </Fancybox>
)
