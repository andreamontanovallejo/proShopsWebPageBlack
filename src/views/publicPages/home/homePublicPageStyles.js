import styled from 'styled-components'
import { Colors } from '../../../assets/styles/variables'

export const DivContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 270px) !important;
`

export const DivGoUp = styled.div`
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
    display: flex;
    padding: 5%;
  }
`

export const DivImageHorario = styled.div`
  @media (max-width: 599px) {
    width: 100%;
  }
  @media (min-width: 600px) {
    width: 50%;
    height: auto;
  }
`

export const ImageHorario = styled.img`
  @media (max-width: 599px) {
    width: 100%;
  }
  @media (min-width: 600px) {
    max-width: 100%;
    height: auto;
  }
`

export const DivText = styled.div`
  @media (max-width: 599px) {
    width: 100%;
    margin: 5% 0 8% 0;
  }
  @media (min-width: 600px) {
    width: 50%;
    height: auto;
    justify-items: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const DivBlock = styled.div`
  @media (max-width: 599px) {
  }
  @media (min-width: 600px) {
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
  margin-top: 3%;
  color: ${Colors.blue};
`
