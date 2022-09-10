import styled, { css } from 'styled-components'

export const DivContainer = styled.div`
  width: 300px;
  height: 350px;
  border: 2px solid $dullGray-color;

  padding: 3%;
  display: flex;
  flex-wrap: wrap;
`
export const EachDiv = styled.div`
  width: 16.66%;
  height: 40px;
  ${(props) =>
    css`
      background-color: ${props.color};
    `};
`
