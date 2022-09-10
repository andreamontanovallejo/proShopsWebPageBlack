import styled, { css } from 'styled-components'
import { Colors } from '../../../assets/styles/variables'

export const DivContainer = styled.div`
  width: 100%;

  @media (max-width: 599px) {
    padding: 3%;
  }
  @media (min-width: 600px) {
  }
`

export const CardSummarySmallScreen = styled.div`
  width: 100%;

  @media (max-width: 599px) {
    div {
      background-color: #ffdc50;
    }
  }
  @media (min-width: 600px) {
    display: none;
  }
`

export const FirstLine = styled.div`
  width: 100%;

  @media (max-width: 599px) {
  }
  @media (min-width: 600px) {
    height: 100px;
    background-size: contain;
  }
`

export const DivContent = styled.div`
  width: 100%;

  @media (max-width: 599px) {
  }
  @media (min-width: 600px) {
    display: flex;
    padding: 4%;
  }
`

export const LeftSide = styled.div`
  @media (max-width: 599px) {
    width: 100%;
    padding: 1%;
  }
  @media (min-width: 600px) {
    width: 70%;
  }
`

export const DivSummary = styled.div`
  width: 100%;
  padding: 3%;
  font-weight: bolder;
  text-transform: uppercase;
  background-color: ${Colors.ultraSoftGray};
`

export const RightSideBigScreen = styled.div`
  padding-left: 2%;
  @media (max-width: 599px) {
    display: none;
  }
  @media (min-width: 600px) {
    width: 30%;

    div {
      background-color: #ffdc50;
    }
  }
`

export const RightSideSmallScreen = styled.div`
  @media (max-width: 599px) {
    width: 100%;
    div {
      background-color: #ffdc50;
    }
  }
  @media (min-width: 600px) {
    display: none;
  }
`

export const DivForm = styled.div`
  @media (max-width: 599px) {
  }
  @media (min-width: 600px) {
    width: 100%;
    padding: 2%;
  }
`

export const DivOptions = styled.div`
  @media (max-width: 599px) {
    display: block;
    width: 100%;
    padding: 2%;
  }
  @media (min-width: 600px) {
    display: flex;
    width: 100%;
    padding: 2%;
  }
`

export const TitleSmallScreen = styled.div`
  @media (max-width: 599px) {
    text-align: center;
    font-weight: bolder;
    width: 100%;
    color: green;
    padding: 5%;
    margin-top: 3%;
  }
  @media (min-width: 600px) {
    display: none;
  }
`

export const OptionSearchInStore = styled.div`
  padding: 4%;
  border: 1px solid #555555;
  cursor: pointer;
  ${props =>
    css`
      background-color: ${props.shipment === 'searchInStore' && '#555555'};
      color: ${props.shipment === 'searchInStore' ? 'white' : '#555555'};
    `};
  @media (max-width: 599px) {
    display: block;
    width: 100%;
  }
  @media (min-width: 600px) {
    display: flex;
    width: 50%;
  }
`

export const OptionSendHome = styled.div`
  padding: 4%;
  border: 1px solid #555555;
  cursor: pointer;
  ${props =>
    css`
      background-color: ${props.shipment === 'sendHome' && '#555555'};
      color: ${props.shipment === 'sendHome' ? 'white' : '#555555'};
    `};
  @media (max-width: 599px) {
    display: block;
    width: 100%;
  }
  @media (min-width: 600px) {
    display: flex;
    width: 50%;
  }
`

export const DivError = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  color: red;
`
