import styled from 'styled-components'

export const DivContainer = styled.div`
  width: 100%;
  padding: 2%;
  @media (max-width: 599px) {
  }
  @media (min-width: 600px) {
  }
`

export const DivTitle = styled.div`
  width: 100%;

  font-weight: bolder;
  display: flex;
  justify-content: space-around;
  text-transform: uppercase;

  @media (max-width: 599px) {
    padding: 5%;
    text-align: center;
  }
  @media (min-width: 600px) {
    padding: 2%;
  }
`

export const DivSubtitle = styled.div`
  width: 100%;
  padding: 0 5%;
  font-weight: bolder;
  text-transform: uppercase;

  @media (max-width: 599px) {
    text-align: center;
  }
  @media (min-width: 600px) {
  }
`

export const DivText = styled.div`
  width: 100%;

  text-align: justify;
  @media (max-width: 599px) {
    padding: 3% 5%;
  }
  @media (min-width: 600px) {
    padding: 1% 5%;
  }
`
