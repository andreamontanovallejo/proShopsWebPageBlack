import React from 'react'
import IsLoading from '../../../helpers/IsLoading'
import { PublicPageProductsServices } from '../../../services/index'
import { AddProductButton } from './components/AddProductButton'
import { ProductImageAndLikes } from './components/ProductImageAndLikes'
import { Image, Transformation } from 'cloudinary-react'
import {
  DivAddProductButton,
  DivContainerProduct,
  DivImageAndInfo,
  DivInfo,
  DivPicture,
  InfoMeasure,
  InfoNamePhone,
  InfoNameLaptop,
  InfoPackaging,
  InfoPrice,
  DivCentered,
  DivOtherInfo,
  Description,
  OtherInfoTitle,
  Specialties,
  Links,
  LinkTo,
} from './productsStyles'

export default class Menage extends React.Component {
  constructor(props) {
    super(props)
    this.productId = this.props.match.params.productId
    this.services = new PublicPageProductsServices()
    this.state = {
      isLoading: false,
      priceListToUse: undefined,
      product: undefined,
    }
  }

  componentDidMount = e => {
    this.getOneProduct()
  }

  getOneProduct = () => {
    this.setState({
      isLoading: true,
    })

    this.services
      .getOneProduct({
        companyId: process.env.REACT_APP_COMPANYID,
        productId: this.productId,
      })
      .then(res => {
        this.setState({
          isLoading: false,
          priceListToUse: res.data.priceListToUse,
          product: res.data.product,
        })
      })
  }

  setLike = (productId, likeOrDislike) => {
    this.services
      .setLike({
        productId,
        likeOrDislike: likeOrDislike,
      })
      .then(res => {
        this.setState({
          product: res.data,
        })
      })
  }

  render() {
    const cloudName = `${process.env.REACT_APP_CLOUDINARY_CLOUDNAME}`
    return (
      <DivContainerProduct>
        {this.state.isLoading ? (
          IsLoading()
        ) : (
          <>
            {this.state.product && (
              <>
                <Links>
                  <LinkTo
                    onClick={() =>
                      this.props.pushTo(
                        `/products/${this.state.product.section._id}/0/0`,
                      )
                    }
                  >
                    Todos los productos /
                  </LinkTo>
                  {this.state.product.categories &&
                    this.state.product.categories.length > 0 &&
                    this.state.product.categories
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map(category => (
                        <LinkTo
                          onClick={() =>
                            this.props.pushTo(
                              `/products/${this.state.product.section._id}/${category._id}/0`,
                            )
                          }
                        >
                          {`${category.name} /`}
                        </LinkTo>
                      ))}
                </Links>
                <InfoNamePhone>{this.state.product.productName}</InfoNamePhone>
                <DivImageAndInfo>
                  <DivPicture>
                    <ProductImageAndLikes
                      product={this.state.product}
                      setLikes={this.setLikes}
                    />
                  </DivPicture>

                  <DivInfo>
                    <DivCentered>
                      <InfoNameLaptop>
                        {this.state.product.productName}
                      </InfoNameLaptop>
                      <InfoPackaging>
                        {this.state.product.packaging[0].name}
                      </InfoPackaging>
                      <InfoMeasure>{`${this.state.product.measure.number} ${this.state.product.measure.measureType.name}`}</InfoMeasure>
                      <InfoPrice>
                        {`$ ${
                          this.state.priceListToUse ===
                          '62fdccfaf8f153b5f9d77209'
                            ? this.state.product.price.toLocaleString('de-DE')
                            : Number(
                                Number(
                                  this.state.product.priceLists.find(
                                    e => e.listId === this.state.priceListToUse,
                                  ).value,
                                ).toFixed(),
                              ).toLocaleString('de-DE')
                        }`}
                      </InfoPrice>

                      <DivAddProductButton>
                        <AddProductButton product={this.state.product} />
                      </DivAddProductButton>
                    </DivCentered>
                  </DivInfo>
                </DivImageAndInfo>
                <DivOtherInfo>
                  {this.state.product.aditionalDescription &&
                    this.state.product.aditionalDescription !== null &&
                    this.state.product.aditionalDescription.trim() !== '' && (
                      <>
                        <OtherInfoTitle>Descripción:</OtherInfoTitle>
                        <Description>
                          {this.state.product.aditionalDescription}
                        </Description>
                      </>
                    )}
                  {this.state.product.dimensions &&
                    this.state.product.dimensions.length > 0 && (
                      <>
                        <OtherInfoTitle>Dimensiones:</OtherInfoTitle>
                        {this.state.product.dimensions.map(dimension => (
                          <Description>
                            {`${dimension.value} cms de ${dimension.name}`}
                          </Description>
                        ))}
                      </>
                    )}
                  {this.state.product.diners &&
                    this.state.product.diners !== 0 &&
                    this.state.product.diners !== null && (
                      <>
                        <OtherInfoTitle>Porciones estimadas:</OtherInfoTitle>
                        <Description>
                          {`${this.state.product.diners} personas`}
                        </Description>
                      </>
                    )}
                  {this.state.product.specialties &&
                    this.state.product.specialties.length > 0 && (
                      <Specialties>
                        {this.state.product.specialties.map(specialty => (
                          <Image
                            key={specialty._id}
                            cloudName={cloudName}
                            publicId={specialty.cloudinaryUrl}
                            alt={specialty.name}
                            quality="auto"
                            loading="lazy"
                          >
                            <Transformation fetchFormat="auto" quality="auto" />
                            <Transformation height="30" crop="scale" />
                          </Image>
                        ))}
                      </Specialties>
                    )}
                </DivOtherInfo>
              </>
            )}
          </>
        )}
      </DivContainerProduct>
    )
  }
}
