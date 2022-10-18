import React from 'react'
import MainImage from './mainImage/MainImage'
import emptyImage from '../../images/emptyImage.svg'
import Categories from './categories/Categories'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import IsLoading from '../../../helpers/IsLoading'
import { PublicPageHomeServices } from '../../../services/index'
import {
  DivBlock,
  DivContainer,
  DivGoUp,
  DivHorario,
  DivIcon,
  DivImageHorario,
  DivText,
  Icon,
  ImageHorario,
  Introduction,
  SpecialText,
  Text,
  Title,
} from './homePublicPageStyles'

export default class HomePublicPage extends React.Component {
  constructor(props) {
    super(props)
    this.services = new PublicPageHomeServices()
    this.state = {
      aboutUs: '',
      branchStores: [],
      cateories: [],
      coverImage: undefined,
      fantasyName: undefined,
      haveInPersonService: false,
      iconImage: undefined,
      imageSchedule: undefined,
      isLoading: false,
      titleCategories: undefined,
      welcomeText: undefined,
    }
  }

  componentDidMount() {
    this.getHomeInformation()
  }

  getHomeInformation = () => {
    this.setState({
      isLoading: true,
    })

    this.services
      .getHomeInformation(process.env.REACT_APP_COMPANYID)
      .then(res => {
        this.setState({
          aboutUs: res.data.homeInformation && res.data.homeInformation.aboutUs,
          branchStores:
            res.data.homeInformation && res.data.homeInformation.branchStores,
          categories: res.data.categories,
          coverImage: res.data.images && res.data.images.coverImage,
          fantasyName: res.data.fantasyName,
          haveInPersonService:
            res.data.homeInformation &&
            res.data.homeInformation.haveInPersonService,
          iconImage: res.data.images && res.data.images.iconImage,
          imageSchedule: res.data.images && res.data.images.imageSchedule,
          isLoading: false,
          titleCategories:
            res.data.homeInformation &&
            res.data.homeInformation.titleCategories,
          welcomeText:
            res.data.homeInformation && res.data.homeInformation.welcomeText,
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
            <a name="up"></a>

            <MainImage
              src={
                (this.state.coverImage &&
                  this.state.coverImage.cloudinaryUrl) ||
                emptyImage
              }
            ></MainImage>

            <DivIcon>
              <Icon
                src={
                  (this.state.iconImage &&
                    this.state.iconImage.cloudinaryUrl) ||
                  emptyImage
                }
              ></Icon>
            </DivIcon>
            <Title>{`Acerca de ${this.state.fantasyName}`}</Title>
            <Introduction>{this.state.aboutUs}</Introduction>
            <Title>{this.state.titleCategories}</Title>
            <Categories categories={this.state.categories}></Categories>
            <DivIcon>
              <Icon
                src={
                  (this.state.iconImage &&
                    this.state.iconImage.cloudinaryUrl) ||
                  emptyImage
                }
              ></Icon>
            </DivIcon>
            {this.state.haveInPersonService &&
              this.state.branchStores.length > 0 && (
                <>
                  <Title>Horarios de atención</Title>
                  {this.state.branchStores.length === 1 ? (
                    <DivHorario>
                      {this.state.branchStores.map((store, index) => (
                        <>
                          <DivText key={store._id}>
                            <DivBlock>
                              <Text>{`Dirección : ${store.address}`}</Text>
                              <Text>{store.comunaOrNeighborhood}</Text>
                              {store.schedules.length > 0 &&
                                store.schedules.map(schedule => (
                                  <Text key={schedule._id}>
                                    {schedule.line}
                                  </Text>
                                ))}
                            </DivBlock>

                            <SpecialText>{this.state.welcomeText}</SpecialText>
                          </DivText>
                          <DivImageHorario>
                            <ImageHorario
                              src={
                                (this.state.imageSchedule &&
                                  this.state.imageSchedule.cloudinaryUrl) ||
                                emptyImage
                              }
                            ></ImageHorario>
                          </DivImageHorario>
                        </>
                      ))}
                    </DivHorario>
                  ) : (
                    <DivHorario multipleStores={true}>
                      <DivText multipleStores={true}>
                        {this.state.branchStores.map(store => (
                          <DivBlock multipleStores={true} key={store._id}>
                            <Text>{`Dirección : ${store.address}`}</Text>
                            <Text>{store.comunaOrNeighborhood}</Text>
                            {store.schedules.length > 0 &&
                              store.schedules.map(schedule => (
                                <Text key={schedule._id}>{schedule.line}</Text>
                              ))}
                          </DivBlock>
                        ))}
                      </DivText>
                      <SpecialText>{this.state.welcomeText}</SpecialText>
                      <DivImageHorario multipleStores={true}>
                        <ImageHorario
                          multipleStores={true}
                          src={
                            (this.state.imageSchedule &&
                              this.state.imageSchedule.cloudinaryUrl) ||
                            emptyImage
                          }
                        ></ImageHorario>
                      </DivImageHorario>
                    </DivHorario>
                  )}
                </>
              )}

            <a href="#up">
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
