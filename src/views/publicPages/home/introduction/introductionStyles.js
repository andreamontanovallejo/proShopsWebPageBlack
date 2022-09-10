import styled, { css } from 'styled-components'

export const DivContainer = styled.div`
  width: 100%;
  padding: 1% 5% 2% 5%;
  @media (min-width: 600px) {
  }
`

export const BackgroundImage = styled.div`
  width: 100%;

  @media (max-width: 599px) {
    img {
      width: 100%;
      z-index: 0;
      opacity: 0.9;
    }
  }
  @media (min-width: 600px) {
    img {
      display: none;
    }
    ${(props) =>
      css`
        background-image: url(${props.background});
        background-repeat: no-repeat;
        background-size: cover;
      `};
  }
`

export const DivDisplayFlex = styled.div`
  display: flex;
`

export const TextIntroductionContainer = styled.div`
  @media (max-width: 599px) {
    width: 100% !important;
  }
  @media (min-width: 600px) {
    width: 60% !important;
    margin: 2% 0 5% auto;
  }

  background-color: #f1f1f1;
`

export const ImgInfo = styled.div`
  width: 30%;
  background-color: #555555;
  padding: 1%;
  margin: auto;
  text-align: center;
  opacity: 0.8;

  @media (max-width: 599px) {
    display: none;
  }
`

export const ImgSmall = styled.div`
  width: 100%;
  background-color: #555555;
  padding: 1%;
  margin: 0 !important;
  text-align: center;

  @media (min-width: 600px) {
    display: none;
  }
`

export const Line = styled.div`
  color: white;
`

export const Title = styled.div`
  text-align: center;
  font-weight: bolder;
  padding: 2%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  svg {
    cursor: pointer;
  }
`

export const Text = styled.div`
  text-align: center;
  text-align: justify;
  white-space: pre-line;

  @media (max-width: 599px) {
    padding: 2%;
    font-size: calc(0.5em + 0.8vw);
  }
  @media (min-width: 600px) {
    padding: 5%;
    font-size: calc(0.7em + 0.7vw);
  }
`
