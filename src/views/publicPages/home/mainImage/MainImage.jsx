import React from 'react'

import { DivContainer, BackgroundImage } from './mainImageStyles'

export default function MainImage(props) {
  return (
    <DivContainer>
      <BackgroundImage src={props.src}></BackgroundImage>
    </DivContainer>
  )
}
