import styled from 'styled-components'
import { Colors } from '../assets/styles/variables'

export const ContainerBar = styled.div`
  width: 100%;
  /* display: flex;
  align-items: center; */
  margin: auto;
  padding: 2%;
  text-align: center;
  background-color: ${Colors.errors};
  color: ${Colors.defaultWhiteColor};
  height: 100px;
`
