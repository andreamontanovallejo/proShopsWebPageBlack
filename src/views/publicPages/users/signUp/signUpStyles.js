import styled from 'styled-components'
import { Colors } from '../../../../assets/styles/variables'

export const DivContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
`

export const Errors = styled.div`
  color: ${Colors.errors};
  margin-top: 4%;
  width: 100%;
`

export const DivForm = styled.div`
  margin: 5% auto 2% auto !important;
  border: 1px solid #555;
  padding: 2%;
  width: 50%;

  div {
    margin-top: 2%;
  }

  @media (max-width: 599px) {
    width: 90% !important;
  }

  @media (max-width: 1024px) {
    width: 90% !important;
  }

  @media (min-width: 1025px) {
  }
`

export const DivInput = styled.div`
  @media (max-width: 599px) {
    margin: 1%;
  }
`

export const SignUpTextLink = styled.div`
  font-weight: bolder;
  cursor: pointer;
  color: #555;
`

export const Logo = styled.img`
  height: 40px;
  margin-left: 1%;
`

export const LoginText = styled.div`
  font-weight: bolder;
  width: max-content;
`

export const DivLogInLink = styled.div`
  color: ${Colors.blue};
  text-align: center;
  cursor: pointer;
  font-weight: bolder;

  @media (max-width: 599px) {
    padding: 3% 0;
  }

  @media (min-width: 600px) {
    padding: 2% 0;
  }
`

export const DivButton = styled.div`
  div button {
    width: 100%;
    margin: 5% auto;
  }
`

export const DivCallToAction = styled.div`
  padding: 5% 5% 2% 5%;

  @media (max-width: 599px) {
    display: block;
    width: 100%;
    text-align: right;
  }

  @media (min-width: 600px) and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1025px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Text = styled.div`
  color: ${Colors.dullGrayColor};
  font-weight: bolder;

  span {
    color: ${Colors.errors};
    font-weight: bolder;
    font-size: 1em;
  }

  @media (max-width: 599px) {
    text-align: left;
    font-size: 1.1em;
  }

  @media (min-width: 600px) and (max-width: 1024px) {
    font-size: 1.3em;
  }

  @media (min-width: 1025px) {
    font-size: 1.3em;
  }
`

export const Image = styled.img`
  @media (max-width: 599px) {
    height: 150px;
  }

  @media (min-width: 600px) and (max-width: 1024px) {
    height: 200px;
  }

  @media (min-width: 1025px) {
    height: 230px;
  }
`

export const DivNote = styled.div`
  color: ${Colors.blue};
  @media (max-width: 599px) {
    font-size: 0.8em;
  }
`
