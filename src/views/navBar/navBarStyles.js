import styled from 'styled-components'
import { Colors } from '../../assets/styles/variables'

export const DivContainer = styled.div`
  width: 100%;
  height: 100%;
  display: block;
`

export const FirstLine = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${Colors.dullGrayColor};
  background-color: ${Colors.dullGrayColor};
`

export const DivMenuSmallScreen = styled.div`
  @media (min-width: 600px) {
    display: none !important;
  }

  button:focus {
    background-color: ${Colors.dullGrayColor};
  }

  width: 100%;
  div,
  button,
  span,
  svg {
    color: ${Colors.white};
  }
`

export const DivLogo = styled.div`
  @media (max-width: 599px) {
    width: 70%;
  }

  width: 30%;

  a,
  img {
    max-height: 70px;
    max-width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    padding: 1%;
  }
`
export const RightSpace = styled.div`
  @media (max-width: 599px) {
    width: 30%;
  }

  width: 70%;
  display: flex;
  margin: auto;
  justify-content: flex-end;
  padding-right: 3%;
`

export const DivIconsSmallScreen = styled.div`
  @media (min-width: 600px) {
    display: none !important;
  }

  width: 100%;
  max-height: 80px !important;
  display: flex;
  justify-content: space-between;

  flex-wrap: wrap;

  div {
    max-height: 80px;
  }

  div,
  button {
    width: 100%;
    max-height: 25px;
    padding: auto;
  }

  div,
  button,
  span,
  a {
    display: flex;
    align-items: center;
  }

  div,
  button,
  span,
  svg {
    color: ${Colors.defaultWhiteColor};
  }
`

export const DivSearchProduct = styled.div`
  @media (max-width: 599px) {
    display: none !important;
  }

  width: 70%;
  display: flex;
  align-items: center;
  position: relative;

  form {
    width: 350px !important;
    display: flex !important;
    height: 55px;
    right: 0px;
    position: absolute;

    div {
      display: flex !important;
      background-color: ${Colors.defaultWhiteColor};
      border-radius: 4px;

      div {
        div {
          width: 280px;
          border-radius: 4px 0 0 4px;
          height: 55px;
          border: none;
        }
      }

      button {
        width: 20% !important;
      }
    }
  }
`

export const DivAccount = styled.div`
  @media (max-width: 599px) {
    display: none !important;
  }

  a,
  spam {
    color: ${Colors.defaultWhiteColor} !important;
  }

  width: auto;
  cursor: pointer;
  height: 80px;
  display: flex;
  align-items: center;
`

export const DivCar = styled.div`
  @media (max-width: 599px) {
    display: none !important;
  }

  a,
  spam {
    color: ${Colors.defaultWhiteColor} !important;
  }

  a {
    display: flex;
    align-items: center;
  }

  width: auto;
  cursor: pointer;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: end;
`

export const DivNav = styled.div`
  @media (max-width: 599px) {
    display: none !important;
  }

  @media (min-width: 600px) and (max-width: 1205px) {
    height: 50px !important;
    align-items: center;
  }

  @media (min-width: 600px) and (max-width: 930px) {
    a {
      font-size: 0.9em;
    }
  }

  display: flex;
  justify-content: center;
  background-color: ${Colors.mediumGrayColor};
  a {
    width: auto;
    margin: 0 3%;
    height: 40px;
    display: flex !important;
    align-items: center;
    text-align: center;
    color: ${Colors.dullGrayColor} !important;
  }
`
