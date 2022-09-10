import styled, { css } from 'styled-components'

export const Button = styled.button`
  text-transform: uppercase;
  width: auto !important;
  display: flex;
  align-items: center;
  cursor: pointer;
  ${props =>
    css`
      background-color: ${!props.background ? '#555' : props.background};
      color: ${!props.textColor ? '#fafaff' : props.textColor};
    `};

  span {
    width: auto !important;
    max-height: 100%;
    display: inline-table;
  }

  svg {
    margin-right: 3%;
  }
`

export const DivIconEdit = styled.div`
  width: auto !important;
  display: flex;
  align-items: center;
  margin-left: 4%;
  cursor: crosshair !important;
`
