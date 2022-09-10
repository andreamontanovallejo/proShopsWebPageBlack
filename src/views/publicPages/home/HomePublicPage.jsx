import React from 'react'
import MainImage from './mainImage/MainImage'
import emptyImage from '../../images/emptyImage.svg'
//import Slogan from './slogan/Slogan'
import Categories from './categories/Categories'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'

import IsLoading from '../../../helpers/IsLoading'

import { PublicPageHomeServices } from '../../../services/index'
import {
  DivContainer,
  DivGoUp,
  Icon,
  DivIcon,
  Title,
  Introduction,
  DivHorario,
  DivImageHorario,
  DivText,
  Text,
  ImageHorario,
  DivBlock,
  SpecialText,
} from './homePublicPageStyles'

export default class HomePublicPage extends React.Component {
  constructor(props) {
    super(props)
    this.services = new PublicPageHomeServices()
    this.state = {
      isLoading: false,
      imagesFiles: '',
      aboutUs: '',
      cateories: [],
      mainImage: '',
    }
  }

  componentDidMount() {
    this.getInitialInformation()
  }

  getInitialInformation = () => {
    this.setState({
      isLoading: true,
    })

    this.services
      .getInitialInformation(process.env.REACT_APP_COMPANYID)
      .then(res => {
        this.setState({
          isLoading: false,
          aboutUs: res.data.aboutUs,
          categories: res.data.categories,
        })
      })
  }

  render() {
    return (
      <DivContainer>
        {this.state.isLoading ? (
          IsLoading()
        ) : (
          <>
            <MainImage src={emptyImage}></MainImage>
            <DivIcon>
              <Icon src={emptyImage}></Icon>
            </DivIcon>
            <Title>Acerca de Emporio Gorroño</Title>
            <Introduction>{this.state.aboutUs}</Introduction>
            <Title>tiéntate con nuestras categoría</Title>
            <Categories categories={this.state.categories}></Categories>
            <DivIcon>
              <Icon src={emptyImage}></Icon>
            </DivIcon>
            <Title>Horarios de atención</Title>
            <DivHorario>
              <DivText>
                <DivBlock>
                  <Text>Dirección : Av. José Alcalde Délano 10682</Text>
                  <Text>Paseo Las Pataguas Local 16 comuna Lo Barnechea</Text>
                  <Text>Lunes a Sábado 10:30 a 19:00 hrs</Text>
                  <Text>Domingo y Festivos 10:30 a 14:30 hrs</Text>
                  <SpecialText>
                    "Los esperamos para tener el gusto de atenderlos"
                  </SpecialText>
                </DivBlock>
              </DivText>
              <DivImageHorario>
                <ImageHorario src={emptyImage}></ImageHorario>
              </DivImageHorario>
            </DivHorario>

            <a href="#arriba">
              <DivGoUp>
                <ArrowUpwardIcon />
              </DivGoUp>
            </a>
          </>
        )}
      </DivContainer>
    )
  }
}
