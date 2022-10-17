import styled from 'styled-components'
import { Colors } from '../../../../assets/styles/variables'

export const CardEachProduct = styled.div`
  display: flex;
  @media (max-width: 599px) {
    width: 100%;
    padding: 2%;
  }
  @media (min-width: 600px) {
    width: 100%;
    padding: 1% 2%;
  }
`

export const ImageDiv = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  img {
    width: 100%;
  }
`

export const Content = styled.div`
  width: 100%;
  @media (max-width: 599px) {
    padding: 3%;
  }
  @media (min-width: 600px) {
    padding: 0 2%;
  }
`

export const ContentProduct = styled.div`
  width: 100%;
  display: flex;
  position: relative;

  @media (max-width: 599px) {
    padding: 2%;
  }
  @media (min-width: 600px) {
    padding: 2%;
  }
`

export const DivModifyQuantity = styled.div`
  display: flex;
  align-items: center;

  svg:nth-child(2) {
    color: ${Colors.errors};
    cursor: pointer;
    margin-left: 5% !important;
  }

  @media (max-width: 599px) {
    justify-content: space-around;
    margin-top: 5%;
  }

  @media (min-width: 600px) {
    justify-content: flex-end;
    padding: 2% 0;
    width: 20%;

    svg:nth-child(2) {
      margin-left: 2%;
    }
  }
`

export const About = styled.div`
  @media (max-width: 599px) {
    width: 100%;
    margin-bottom: 5%;
  }
  @media (min-width: 600px) {
    width: 80%;
    position: relative;
    top: 15px;
  }
`

export const ProductName = styled.div`
  width: 100%;
  font-weight: bold;
  text-transform: capitalize;

  @media (max-width: 599px) {
  }
  @media (min-width: 600px) {
  }
`

export const Packaging = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 599px) {
  }
  @media (min-width: 600px) {
  }
`

export const Quantity = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  svg {
    color: green;
  }
  @media (max-width: 599px) {
  }
  @media (min-width: 600px) {
  }
`

export const DivPrice = styled.div`
  @media (max-width: 599px) {
    display: none;
  }
  @media (min-width: 600px) {
    width: 20%;
  }
`

export const QuantitySmallScreen = styled.div`
  @media (min-width: 600px) {
    display: none;
  }
`

export const PriceBigScreen = styled.div`
  display: block;
  width: 100%;
`

export const PriceSmallScreen = styled.div`
  @media (max-width: 599px) {
    width: 100%;
  }
  @media (min-width: 600px) {
    display: none;
  }
`

export const DivColors = styled.div`
  @media (max-width: 599px) {
  }
  @media (min-width: 600px) {
    width: 80%;
    padding: 2%;
  }
`

export const DivBottom = styled.div`
  @media (max-width: 599px) {
  }
  @media (min-width: 600px) {
    display: flex;
    width: 100%;
  }
`

export const EachColor = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  form div div {
    height: 35px;
    width: 40px;
  }

  @media (max-width: 599px) {
  }
  @media (min-width: 600px) {
  }
`

export const ColorsTitle = styled.div`
  font-weight: bold;
  color: ${Colors.blue};

  @media (max-width: 599px) {
    margin-top: 4%;
  }
`

export const ColorName = styled.div`
  margin-left: 2%;
  color: ${Colors.blue};

  @media (max-width: 599px) {
  }
  @media (min-width: 600px) {
  }
`

export const ColorQuantity = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-left: 3%;
    cursor: pointer;
    color: green;
    height: 17px;
  }

  @media (max-width: 599px) {
  }
  @media (min-width: 600px) {
  }
`
