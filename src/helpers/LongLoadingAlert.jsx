import React from 'react'
import { ContainerBar } from './longLoadingAlertStyles'

export const LongLoadingAlert = props => {
  return <ContainerBar>{props.text}</ContainerBar>
}
