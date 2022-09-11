import styled, { css } from 'styled-components'

export const DivContainer = styled.div`
  width: 100%;
  height: auto !important;
`

export const BackgroundImage = styled.img`
  width: 100% !important;
  max-height: 450px;
  position: relative !important;
  object-fit: cover !important;

  img {
    width: 100% !important;
    z-index: 0;
  }

  @media (max-width: 599px) {
    height: 300px !important;
    object-fit: cover !important;

    img {
    }
  }
`

export const DivPainting = styled.div`
  height: 0;
  padding-bottom: 30%;
  margin: auto;
  position: absolute;
  ${props =>
    css`
      width: ${props.width ? props.width + '%' : '30%'};
      left: ${props.left}%;
      top: ${props.top}%;
      opacity: 0.9;
    `};
`

export const Paint = styled.div`
  ${props =>
    css`
      width: ${props.widthPaint1 + '%'};
    `};
  img {
    width: 100%;
    box-shadow: 10px 10px 10px -6px black;
    border: 3px solid #e4ddcb;
  }
`

export const DivMainImageMessage = styled.div`
  @media (max-width: 599px) {
    width: 100%;
    opacity: 0.8;
    padding: 1%;
    position: absolute;
    bottom: 2%;
    left: 0;
    text-align: center;

    background-color: #555555;
    opacity: 0.8;

    div {
      font-weight: bolder;
    }
  }

  @media (min-width: 600px) {
    width: 50%;
    background-color: #555555;
    opacity: 0.8;
    padding: 1%;
    position: absolute;
    bottom: 2%;
    left: 25%;
    text-align: center;
  }
`

export const Line = styled.div`
  color: white;
`

export const AvailableButton = styled.div`
  display: flex;
  justify-content: space-around;
`
