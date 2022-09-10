import styled from 'styled-components'
import { Colors } from '../../../../assets/styles/variables'

export const DivCardSummary = styled.div`
  width: 100%;
  padding: 2%;
  @media (max-width: 599px) {
  }
  @media (min-width: 600px) {
  }
`

export const CardTitle = styled.div`
  font-weight: bolder;
  font-size: 1.2em;
  color: #555555;

  @media (max-width: 599px) {
    margin: 5% 0;
  }
`

export const CardTotalProducts = styled.div`
  font-size: 1.1em;
  color: #555555;

  @media (max-width: 599px) {
    margin-bottom: 1%;
  }
`

export const CardTotalDelivery = styled.div`
  font-size: 1.1em;
  color: #555555;

  @media (max-width: 599px) {
    margin-bottom: 1%;
  }
`

export const CardTotalAmount = styled.div`
  font-size: 1.2em;
  color: #555555;
  font-weight: bolder;

  @media (max-width: 599px) {
    margin-bottom: 5%;
  }
`

export const DivButton = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 2%;

  div button {
    width: 163px !important;
  }
`

export const Error = styled.div`
  color: ${Colors.errors};
  margin: 5% 0;
  @media (max-width: 599px) {
    font-weight: bold;
  }
`
