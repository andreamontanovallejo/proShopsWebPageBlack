import styled from 'styled-components'

export const DivContainer = styled.div`
  width: 100%;
  color: white;
  padding: 1% 3%;
  align-items: center;
  @media (max-width: 599px) {
  }
  @media (min-width: 600px) {
    display: flex;
  }
`

export const DivLeft = styled.div`
  @media (max-width: 599px) {
    display: none;
  }
  @media (min-width: 600px) {
    width: 32%;
    color: white;
  }
`

export const DivMiddle = styled.div`
  padding: 1%;
  justify-content: space-around;
  color: white;

  a,
  img {
    max-height: 60px;
    max-width: 250px;
    margin: auto;
    display: flex;
    align-items: center;
    margin-bottom: 3%;
  }

  @media (max-width: 599px) {
    width: 100%;
  }
  @media (min-width: 600px) {
    width: 32%;
  }
`

export const DivAdress = styled.div`
  text-align: center;
  @media (max-width: 599px) {
  }
  @media (min-width: 600px) {
  }
`

export const DivNeighborhood = styled.div`
  text-align: center;
  @media (max-width: 599px) {
  }
  @media (min-width: 600px) {
  }
`

export const DivPhone = styled.div`
  text-align: center;
  @media (max-width: 599px) {
  }
  @media (min-width: 600px) {
  }
`

export const DivRight = styled.div`
  display: block !important;
  text-align: center;

  @media (max-width: 599px) {
    width: 100%;
    hr {
      background-color: white;
    }
  }
  @media (min-width: 600px) {
    width: 32%;
    color: white;
    hr {
      margin: 0 17%;
      background-color: white;
      //display: none;
    }
  }
`

export const DivNone = styled.div`
  @media (min-width: 600px) {
    hr {
      display: none;
    }
  }
`

export const DivSocialNetworks = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  margin: auto;

  @media (max-width: 599px) {
  }
  @media (min-width: 600px) {
    text-align: center;
  }
`

export const DivIcon = styled.div`
  width: 33%;
  cursor: pointer;
  padding-top: 5%;
  a,
  svg {
    font-size: 1.3em;
    color: white;
  }
  @media (max-width: 599px) {
  }
  @media (min-width: 600px) {
  }
`

export const DivMenu = styled.div`
  width: 100% !important;
  text-align: center;
  display: flex;

  @media (max-width: 599px) {
  }
  @media (min-width: 600px) {
    padding: 0 15%;
  }
`

export const DivTitle = styled.div`
  width: 100% !important;
  text-align: center;

  @media (max-width: 599px) {
  }
  @media (min-width: 600px) {
  }
`

export const DivEachLink = styled.div`
  width: 50%;
  cursor: pointer;
  padding-bottom: 5%;
  a,
  svg {
    color: white;
  }
  @media (max-width: 599px) {
  }
  @media (min-width: 600px) {
  }
`

export const DivCopyRight = styled.div`
  @media (max-width: 599px) {
    width: 100%;
    text-align: center;
  }
  @media (min-width: 600px) {
    display: none;
  }
`
