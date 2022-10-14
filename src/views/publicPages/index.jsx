import React from 'react'
import IsLoading from '../../helpers/IsLoading'

import { DivContainer } from './publicPagesStyles'

export const PublicPages = props => {
  return (
    <DivContainer>{!props.content ? IsLoading() : props.content}</DivContainer>
  )
}
