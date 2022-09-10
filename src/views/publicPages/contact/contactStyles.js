import styled from 'styled-components'
import { Colors } from '../../../assets/styles/variables'

export const DivContainer = styled.div`
  width: 100%;
  @media (max-width: 599px) {
    padding: 2%;
  }
  @media (min-width: 600px) {
  }
`

export const DivContactInformation = styled.div`
  width: 100%;

  @media (max-width: 599px) {
    padding-top: 8%;
  }
  @media (min-width: 600px) {
    padding-top: 4%;
  }
`

export const Title = styled.div`
  width: 100%;
  text-align: center;
  font-weight: bolder;
  text-transform: uppercase;
  color: green;

  @media (max-width: 599px) {
    padding: 6% 0;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    padding: 4% 0;
  }

  @media (min-width: 901px) {
    padding: 2% 0;
  }
`

export const Item = styled.div`
  width: 100%;

  @media (max-width: 599px) {
    margin-bottom: 2%;
  }
  @media (min-width: 600px) {
    display: flex;
    justify-content: space-around;
  }
`

export const Information = styled.div`
  display: flex;
  align-items: center;
  width: auto;

  @media (max-width: 599px) {
    svg {
      margin-right: 3%;
    }
  }

  svg:not(:root) {
    color: ${Colors.mediumGrayColor};
  }

  div {
    padding-left: 2%;
    min-width: 100%;
  }
`

export const DivForm = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 599px) {
    margin: 5% 0;
  }
  @media (min-width: 600px) {
    margin: 2% 0;
  }
`

export const CardEvent = styled.div`
  padding: 2%;

  @media (max-width: 599px) {
    width: 100%;
    min-height: 300px;
  }
  @media (min-width: 600px) {
    width: 800px;
    min-height: 300px;
  }
`

export const DivInput = styled.div`
  width: 100%;
  padding-bottom: 2%;
`

export const DivButton = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5% 0;

  div button {
    width: 170px !important;
  }
`

export const DivError = styled.h6`
  width: 100%;
  display: flex;
  justify-content: space-around;
  color: red;
`

export const DivMap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 599px) {
    margin: 15% 0;
    iframe {
      width: 100%;
      height: 450px;
      border: 0px;
    }
  }
  @media (min-width: 600px) {
    margin: 4% 0;
    iframe {
      width: 800px;
      height: 450px;
      border: 10px solid #c7c7c7;
    }
  }
`
