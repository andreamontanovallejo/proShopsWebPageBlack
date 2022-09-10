import styled from 'styled-components'
import { Colors } from '../../../../assets/styles/variables'

export const Title = styled.div`
  display: flex;
  justify-content: center;
`

export const LoginText = styled.div`
  font-weight: bolder;
  width: max-content;
`

export const DivForm = styled.div`
  border: 1px solid ${Colors.mediumGrayColor};
  margin-top: 2%;
  padding: 2%;
  width: 50%;

  div {
    margin-top: 2%;
  }

  @media (max-width: 599px) {
    width: 90% !important;
    margin: 20% auto auto auto !important;
  }

  @media (min-width: 600px) {
    width: 50%;
    margin: 10% auto auto auto !important;
  }
`

export const SignUpTextLink = styled.div`
  a div button {
    margin: auto;
  }
`

export const Logo = styled.img`
  height: 40px;
  margin-left: 1%;
`

export const DivButton = styled.div`
  div button {
    width: 100%;
    margin: 5% auto;
  }
`

export const ErrorText = styled.div`
  color: ${Colors.errors};
  font-weight: bolder;

  @media (max-width: 599px) {
    padding: 8% 0;
  }

  @media (min-width: 600px) {
    padding: 3% 0;
  }
`

export const DivForgotPassword = styled.div`
  color: ${Colors.blue};
  text-align: center;
  cursor: pointer;

  @media (max-width: 599px) {
    padding: 4% 0;
  }

  @media (min-width: 600px) {
    padding: 2% 0;
  }
`
