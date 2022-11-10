import styled, { css } from 'styled-components'
import { Colors } from '../../../assets/styles/variables'

export const DivContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 270px) !important;
`

export const DivGoUp = styled.div`
  position: fixed;
  width: 28px;
  height: 28px;
  background-color: ${Colors.yellow};
  border: 1px solid gray;
  border-radius: 15px;
  right: 1%;
  bottom: 5%;
  display: flex;
  align-items: center;

  svg {
    margin: auto;
  }
`

export const MainImage = styled.img`
  position: fixed;
  width: 28px;
  height: 28px;
  background-color: #fecc01;
  border: 1px solid gray;
  border-radius: 15px;
  right: 1%;
  bottom: 5%;
  display: flex;
  align-items: center;

  svg {
    margin: auto;
  }
`

export const DivIcon = styled.div`
  width: 100%;
  text-align: center;
`

export const Icon = styled.img`
  width: 90px;
  margin-top: 2%;
`

export const Title = styled.div`
  text-align: center;
  font-size: 1.2em;
  text-transform: uppercase;
  color: ${Colors.dullGrayColor};
`

export const Introduction = styled.div`
  width: 80%;
  text-align: center;
  font-size: 1em;
  white-space: pre-line;

  color: ${Colors.dullGrayColor};
  margin: 2% auto 5% auto !important;
`

export const DivHorario = styled.div`
  @media (max-width: 599px) {
    padding: 3%;
  }
  @media (min-width: 600px) {
    align-items: center;
    padding: 3% 5%;

    ${props =>
      css`
        display: ${props.multipleStores === true ? 'block' : 'flex'} !important;
      `};
  }
`

export const DivImageHorario = styled.div`
  @media (max-width: 599px) {
    width: 100%;
  }
  @media (min-width: 600px) {
    height: auto;

    ${props =>
      css`
        width: ${props.multipleStores === true ? '100%' : '50%'} !important;
        display: ${props.multipleStores === true && 'flex'} !important;
        margin-top: ${props.multipleStores === true && '3%'} !important;
        justify-content: ${props.multipleStores === true &&
        'space-around'} !important;
      `};
  }
`

export const ImageHorario = styled.img`
  @media (max-width: 599px) {
    width: 100%;
  }
  @media (min-width: 600px) {
    ${props =>
      css`
        max-width: ${props.multipleStores === true ? '80%' : '100%'} !important;
        max-height: ${props.multipleStores === true
          ? '400px'
          : 'auto'} !important;
      `};
  }
`

export const DivText = styled.div`
  @media (max-width: 599px) {
    width: 100%;
    margin: 5% 0 8% 0;
  }

  @media (min-width: 600px) {
    height: auto;
    justify-items: center;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    ${props =>
      css`
        width: ${props.multipleStores === true ? '100%' : '50%'} !important;
        display: ${props.multipleStores === true ? 'flex' : 'block'} !important;
      `};
  }
`

export const DivBlock = styled.div`
  @media (max-width: 599px) {
    margin-top: 10%;
  }
  @media (min-width: 600px) {
    ${props =>
      css`
        width: ${props.multipleStores === true && '50%'} !important;
        margin-top: ${props.multipleStores === true && '5%'} !important;
      `};
  }
`

export const Text = styled.div`
  min-width: 100% !important;
  @media (max-width: 599px) {
    text-align: center;
  }
  @media (min-width: 600px) {
    text-align: center;
    font-size: 1.2em;
  }
`

export const SpecialText = styled.div`
  min-width: 100% !important;
  text-align: center;
  font-size: 1.2em;
  font-style: oblique;
  margin-top: 5%;
  color: ${Colors.blue};
`
