import styled from 'styled-components'
import { Colors } from '../../../../assets/styles/variables'

export const DivContainer = styled.div`
  width: 100%;
  height: auto !important;

  @media (max-width: 599px) {
    padding: 1% 0;
    margin-top: 5%;
  }
  @media (min-width: 600px) {
    padding: 1% 5%;
  }
`

export const DivCategories = styled.div`
  width: 100%;
  padding: 3%;

  @media (min-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around !important;
  }
`

export const EachCategory = styled.div`
  display: flex;
  align-content: center;

  @media (max-width: 599px) {
    width: 100%;
    padding: 5%;

    a {
      width: 100%;
    }
  }

  @media (min-width: 600px) {
    width: 32%;
    padding-top: 32%;
    height: 0;
    position: relative;

    a {
      width: 100%;
      position: absolute;
      top: 8px;
      height: calc(100% - 8px);
    }
  }
`

export const DivImage = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  height: calc(100% - 45px) !important;
  padding: 3% 3% 0 3%;

  img {
    max-width: 100%;
    height: auto;
    cursor: pointer;
    border-radius: 5px;
    object-fit: cover;
  }
`

export const CategoryName = styled.div`
  width: 100%;
  height: 28px;
  display: flex;
  justify-content: center;
  font-size: 1.1em;
  color: ${Colors.dullGrayColor} !important;
  background-color: ${Colors.ultraSoftGray};
  margin-top: 4%;
`
