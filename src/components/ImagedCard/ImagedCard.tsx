import React from 'react';
import { ImageCardPropTypes } from './ImageCard.types'
import { PortableText } from '@portabletext/react'

function ImagedCard({ title, image, description, test }: ImageCardPropTypes) {
  return (
    <div className='imagedCard'>
      <img src={image} alt="" />
      <a target='_blank' rel="noreferrer" href={test}>{title}</a>
      <PortableText
        value={description}
      />
    </div>
  )
}

export default React.memo(ImagedCard)