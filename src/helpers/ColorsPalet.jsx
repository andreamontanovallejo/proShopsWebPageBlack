import React from 'react'
import colors from './colors'

import { DivContainer, EachDiv } from './colorsPaletStyles'

export default function ColorsPalet(props) {
  return (
    <DivContainer>
      {colors.map((color, index) => (
        <EachDiv color={color.rgb} onClick={() => props.selectColor(color.rgb)}>
          {index + 1}
        </EachDiv>
      ))}
    </DivContainer>
  )
}
