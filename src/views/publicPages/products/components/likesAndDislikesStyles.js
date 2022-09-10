import styled, { css } from 'styled-components'
import { Colors } from '../../../../assets/styles/variables'

export const DivLike = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  color: ${Colors.dullGrayColor};
  cursor: pointer;

  @media (max-width: 599px) {
  }
  @media (min-width: 600px) {
  }

  svg,
  path {
    ${props =>
      css`
        color: ${props.color};
      `};
  }
`
