import styled, { css } from 'styled-components'
import { Colors } from '../assets/styles/variables'

export const Container = styled.div`
  width: 100%;
  margin-top: 5%;
`
export const DivFiles = styled.div`
  padding: 0 2% !important;
  margin: 0 !important;
`

export const EachFile = styled.div`
  padding: 1% !important;
  display: flex;
  align-items: center;
`

export const DivRowPhoto = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 3%;
`

export const DivPhoto = styled.img`
  height: 100px;
  margin-bottom: 3%;
`

export const DeleteText = styled.div`
  color: ${Colors.errors};
  cursor: pointer;
  margin-left: 2%;
`

export const DivInput = styled.div`
  input {
    color: transparent;
  }
`

export const DivTitle = styled.div`
  padding: 2%;
  ${props =>
    css`
      color: ${!props.titleColor ? Colors.dullGrayColor : props.titleColor};
    `};
`
