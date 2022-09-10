import styled from 'styled-components'

export const DivContainer = styled.div`
  padding: 1%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;

  text-align: center !important;
  color: #555555;

  svg {
    cursor: pointer;
  }

  @media (max-width: 599px) {
    width: 90%;
    font-size: 1.2em;
  }
  @media (min-width: 600px) {
    width: 70%;
    font-size: 1.5em;
  }
`
