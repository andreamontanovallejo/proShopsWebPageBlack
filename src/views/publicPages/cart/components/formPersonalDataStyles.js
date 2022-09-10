import styled from 'styled-components'

export const DivInput = styled.div`
  width: 100%;
  padding: 1%;

  @media (max-width: 599px) {
  }
  @media (min-width: 600px) {
  }
`

export const DivSend = styled.div`
  width: 100%;
  padding: 1%;
  display: flex;
  justify-content: center;

  div,
  button,
  span {
    font-weight: bolder;
  }

  div button {
    width: 123px !important;
  }

  @media (max-width: 599px) {
    padding: 5%;
  }
  @media (min-width: 600px) {
  }
`

export const DivSelect = styled.div`
  width: 100%;
  padding: 1%;
`
