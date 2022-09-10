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
  color: #555555;

  text-align: justify;

  @media (max-width: 599px) {
  }
  @media (min-width: 600px) {
  }
`

export const DivTable = styled.div`
  width: 100%;

  text-align: justify;

  @media (max-width: 599px) {
    padding: 2% 3%;
  }
  @media (min-width: 600px) {
    padding: 2% 8%;
  }
`

export const DivRow = styled.div`
  width: 100%;

  display: flex;

  @media (max-width: 599px) {
  }
  @media (min-width: 600px) {
  }
`

export const DivCol = styled.div`
  width: 33%;

  display: flex;
  align-items: center;
  text-align: left;
  border: 1px solid #c7c7c7;
  font-size: 0.8em;

  @media (max-width: 599px) {
  }
  @media (min-width: 600px) {
  }
`

export const DivColTitle = styled.div`
  width: 33%;
  margin-top: 5%;
  background-color: #f1f1f1;

  display: flex;
  align-items: center;
  text-align: left;
  border: 1px solid #c7c7c7;
  padding: 2% 0;

  @media (max-width: 599px) {
  }
  @media (min-width: 600px) {
  }
`
