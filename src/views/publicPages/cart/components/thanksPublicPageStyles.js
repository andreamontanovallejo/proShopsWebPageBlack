import styled, { css } from 'styled-components'
import { Colors } from '../../../../assets/styles/variables'

export const DivContainer = styled.div`
  width: 100%;
  padding: 3%;
`

export const DivTitle = styled.div`
  width: 100%;
  text-align: center;
  color: ${Colors.green};

  @media (max-width: 599px) {
    font-size: 1.8em;
    padding: 3%;
    font-weight: bolder;
    margin-top: 10% !important;
  }
  @media (min-width: 600px) {
    font-size: 2.5em;
  }
`

export const DivText = styled.div`
  width: 100%;
  text-align: justify;
  padding: 3%;
  display: flex;
  justify-content: space-around;
`

export const Text = styled.div`
  @media (max-width: 599px) {
    width: 100%;
    border: 1px solid #c7c7c7;
    padding: 3%;
  }
  @media (min-width: 600px) {
    max-width: 800px;
    border: 1px solid #c7c7c7;
    padding: 5%;
    font-size: 1.1em;
  }
`
