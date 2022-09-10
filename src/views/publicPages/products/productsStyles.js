import styled, { css } from 'styled-components'
import { Colors } from '../../../assets/styles/variables'

export const DivContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 270px) !important;
`

export const Links = styled.div`
  display: flex;
  width: 100%;
  padding: 3% 1% 0 3%;
`

export const LinkTo = styled.div`
  color: ${Colors.softBlue};
  font-size: 1.1em;
  cursor: pointer;
`

export const DivListOfProducts = styled.div`
  width: 100%;
  padding: 3%;

  @media (min-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around !important;
  }
`

export const DivProduct = styled.div`
  display: flex;
  align-content: center;

  @media (max-width: 599px) {
    width: 100%;
    padding: 5%;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    width: 32% !important;
    padding-top: calc(24% + 400px);
    height: 32%;
    position: relative;
  }

  @media (min-width: 901px) {
    width: 24% !important;
    padding-top: calc(24% + 400px);
    height: 24%;
    position: relative;
  }
`

export const Span = styled.div`
  @media (max-width: 599px) {
    width: 100%;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    width: 100%;
    position: absolute;
    top: 8px;
    height: calc(100% - 400px);
  }

  @media (min-width: 901px) {
    width: 100%;
    position: absolute;
    top: 8px;
    height: calc(100% - 400px);
  }
`

export const DivImage = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;

  padding: 3% 3% 0 3%;

  img {
    max-width: 100%;
    height: auto;
    cursor: pointer;
    border-radius: 5px;
    object-fit: contain;
    margin-bottom: 8px;
  }

  @media (min-width: 600px) {
    height: calc(100%) !important;
  }
`

export const ProductName = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 1em;
  color: ${Colors.blue} !important;
  background-color: ${Colors.ultraSoftGray};
  font-weight: bolder;
  padding-top: 2% !important;
`

export const Measure = styled.div`
  width: 100%;
  height: 28px;
  display: flex;
  justify-content: center;
  font-size: 1em;
  color: ${Colors.dullGrayColor} !important;
  background-color: ${Colors.ultraSoftGray};
`

export const DivSpecialties = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: 130px;
  justify-content: space-around;
  background-color: ${Colors.ultraSoftGray};
`

export const DivImageSpecialty = styled.div`
  display: flex;
  margin: 3%;
  height: 35px !important;
  justify-content: space-around;
  background-color: ${Colors.ultraSoftGray};
`

export const Price = styled.div`
  width: 100%;
  height: 28px;
  display: flex;
  justify-content: center;
  font-size: 1.3em;
  color: ${Colors.blue} !important;
  background-color: ${Colors.ultraSoftGray};
  font-weight: bolder;
`

export const DivButton = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: center;
  background-color: ${Colors.ultraSoftGray};
`

export const DivContainerFilters = styled.div`
  width: 80%;
  display: flex !important;
  flex-wrap: wrap;
  margin: auto;
  background-color: ${Colors.ultraSoftGray};
  margin-top: 2%;
  padding: 1%;

  @media (max-width: 599px) {
    width: 95%;
    padding: 4%;
  }

  @media (min-width: 600px) and (max-width: 900px) {
  }

  @media (min-width: 901px) {
  }
`

export const TitleFilters = styled.div`
  width: 100%;
  text-align: center;
  color: ${Colors.dullGrayColor};
  text-transform: uppercase;
  font-size: 1.2em;
  margin-top: 3%;
`

export const EachCategory = styled.div`
  height: min-content;
  float: left;
  @media (max-width: 599px) {
    width: 100%;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    width: 49%;
  }

  @media (min-width: 901px) {
    width: 32%;
  }
`

export const EachCategoryName = styled.div`
  width: 100%;
  padding-right: 2%;
  cursor: pointer;

  @media (max-width: 599px) {
  }

  @media (min-width: 600px) and (max-width: 900px) {
  }

  @media (min-width: 901px) {
  }
`

export const DivSubcategories = styled.div`
  padding-left: 10%;
  @media (max-width: 599px) {
  }

  @media (min-width: 600px) and (max-width: 900px) {
  }

  @media (min-width: 901px) {
  }
`

export const EachSubcategory = styled.div`
  width: 100%;
  color: green;
  cursor: pointer;

  @media (max-width: 599px) {
  }

  @media (min-width: 600px) and (max-width: 900px) {
  }

  @media (min-width: 901px) {
  }
`

export const DivDisplay = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;

  margin: auto !important;

  @media (max-width: 599px) {
  }

  @media (min-width: 600px) and (max-width: 900px) {
    margin-top: calc(55px + 6%);
  }

  @media (min-width: 901px) {
    margin-top: calc(55px + 3%);
  }
`

export const DivTitleCategoryselected = styled.div`
  text-align: center;
  font-weight: bolder;
  font-size: 1.1em;
  color: green;
  text-transform: uppercase;

  @media (max-width: 599px) {
  }

  @media (min-width: 600px) and (max-width: 900px) {
  }

  @media (min-width: 901px) {
  }
`

export const DivTitleSubcategorySelected = styled.div`
  text-align: center;
  font-weight: bolder;
  font-size: 1.1em;
  color: green;
  text-transform: capitalize;

  @media (max-width: 599px) {
  }

  @media (min-width: 600px) and (max-width: 900px) {
  }

  @media (min-width: 901px) {
  }
`

export const DivSearchInput = styled.div`
  float: right;
  padding: 0 3% 0 3%;
  margin-top: 3%;

  form div div {
    width: calc(100% - 47px);
  }

  form div div div {
    width: 100%;
  }

  @media (max-width: 599px) {
    width: 100%;
    margin: 5% 0;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    width: 50%;
  }

  @media (min-width: 901px) {
    width: 35%;
  }
`

export const DivLikesAndMorePhotos = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 4%;

  @media (max-width: 599px) {
  }

  @media (min-width: 600px) and (max-width: 900px) {
  }

  @media (min-width: 901px) {
  }
`

export const DivPreviousPicture = styled.div`
  svg {
    ${props =>
      css`
        color: ${props.disable && Colors.mediumGrayColor};
      `};
  }
  ${props =>
    css`
      cursor: ${!props.disable && 'pointer'};
    `};

  @media (max-width: 599px) {
  }

  @media (min-width: 600px) and (max-width: 900px) {
  }

  @media (min-width: 901px) {
  }
`

export const DivNextPicture = styled.div`
  svg {
    ${props =>
      css`
        color: ${props.disable && Colors.mediumGrayColor};
      `};
  }
  ${props =>
    css`
      cursor: ${!props.disable && 'pointer'};
    `};

  @media (max-width: 599px) {
  }

  @media (min-width: 600px) and (max-width: 900px) {
  }

  @media (min-width: 901px) {
  }
`

export const DivContainerProduct = styled.div`
  max-width: 1400px;
  margin: auto;

  @media (max-width: 599px) {
  }

  @media (min-width: 600px) and (max-width: 900px) {
  }

  @media (min-width: 901px) {
  }
`

export const DivImageAndInfo = styled.div`
  display: flex;

  @media (max-width: 599px) {
    display: block;
  }

  @media (min-width: 600px) and (max-width: 900px) {
  }

  @media (min-width: 901px) {
  }
`

export const DivPicture = styled.div`
  @media (max-width: 599px) {
    div img {
    }
  }

  @media (min-width: 600px) and (max-width: 900px) {
    width: 50%;
    margin: 0 3%;
  }

  @media (min-width: 901px) {
    width: 50%;
    margin: 0 3%;
  }
`

export const DivInfo = styled.div`
  width: 50%;
  padding: 0 3%;
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 599px) {
    display: block;
    padding: 0 8% !important;
    width: 100%;
    margin-top: 10%;
  }

  @media (min-width: 600px) and (max-width: 900px) {
  }

  @media (min-width: 901px) {
  }
`

export const DivCentered = styled.div`
  width: 100%;
  @media (max-width: 599px) {
  }

  @media (min-width: 600px) and (max-width: 900px) {
  }

  @media (min-width: 901px) {
  }
`

export const InfoNamePhone = styled.div`
  @media (max-width: 599px) {
    text-align: center;
    text-transform: uppercase;
    font-size: 1.3em;
    font-weight: bolder;
    margin-top: 5%;
    width: 100%;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    display: none;
  }

  @media (min-width: 901px) {
    display: none;
  }
`

export const InfoNameLaptop = styled.div`
  text-transform: uppercase;
  font-size: 1.3em;
  font-weight: bolder;
  margin-top: 5%;
  width: 100%;

  @media (max-width: 599px) {
    display: none;
  }
`

export const InfoPackaging = styled.div`
  width: 100%;
  text-transform: capitalize;
  font-size: 1.1em;

  @media (max-width: 599px) {
  }

  @media (min-width: 600px) and (max-width: 900px) {
  }

  @media (min-width: 901px) {
  }
`

export const InfoMeasure = styled.div`
  font-size: 1.1em;

  @media (max-width: 599px) {
  }

  @media (min-width: 600px) and (max-width: 900px) {
    margin-bottom: 50px;
  }

  @media (min-width: 901px) {
    margin-bottom: 50px;
  }
`

export const InfoColors = styled.div`
  @media (max-width: 599px) {
  }

  @media (min-width: 600px) and (max-width: 900px) {
  }

  @media (min-width: 901px) {
  }
`

export const InfoPrice = styled.div`
  font-size: 1.3em;
  color: green;
  font-weight: bolder;
  margin-top: 3%;

  @media (max-width: 599px) {
    margin-top: 8%;
    text-align: center;
  }

  @media (min-width: 600px) and (max-width: 900px) {
  }

  @media (min-width: 901px) {
  }
`

export const DivAddProductButton = styled.div`
  @media (max-width: 599px) {
    display: flex;
    justify-content: center;
    margin: 12% 0;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    position: absolute;
    bottom: -30px;
  }

  @media (min-width: 901px) {
    position: absolute;
    bottom: -30px;
  }
`

export const ColorsTitle = styled.div`
  font-size: 1.1em;

  @media (max-width: 599px) {
  }

  @media (min-width: 600px) and (max-width: 900px) {
  }

  @media (min-width: 901px) {
  }
`

export const Color = styled.div`
  color: green;
  margin-left: 4%;

  @media (max-width: 599px) {
  }

  @media (min-width: 600px) and (max-width: 900px) {
  }

  @media (min-width: 901px) {
  }
`

export const DivOtherInfo = styled.div`
  margin-top: 5%;
  padding: 0 8%;

  @media (max-width: 599px) {
    margin-top: 15%;
  }

  @media (min-width: 600px) and (max-width: 900px) {
  }

  @media (min-width: 901px) {
  }
`

export const OtherInfoTitle = styled.div`
  font-size: 1.2em;
  font-weight: bolder;

  @media (max-width: 599px) {
    margin-top: 8%;
  }

  @media (min-width: 600px) and (max-width: 900px) {
  }

  @media (min-width: 901px) {
  }
`

export const Description = styled.div`
  @media (max-width: 599px) {
  }

  @media (min-width: 600px) and (max-width: 900px) {
  }

  @media (min-width: 901px) {
  }
`

export const Specialties = styled.div`
  display: flex;
  height: 50px;
  justify-content: center;

  img {
    margin-left: 2%;
  }

  @media (max-width: 599px) {
    margin: 8% 0 25% 0;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    margin: 5% 0 8% 0;
  }

  @media (min-width: 901px) {
    margin: 5% 0 8% 0;
  }
`
