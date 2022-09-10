import React from 'react'
import Loader from 'react-loader-spinner'
import { PublicPageProductsServices } from '../../../services/index'
import { DivContainer, DivContent, FirstLine } from './cartStyles'
import Steeper from './components/Steeper'
import { StepOne } from './components/StepOne'
import { StepTwo } from './components/StepTwo'

export default class CartPublicPage extends React.Component {
  constructor(props) {
    super(props)
    this.services = new PublicPageProductsServices()
    this.state = {
      isLoading: false,
      savedProducts: JSON.parse(localStorage.getItem('shoppingCartProshops')),
      products: [],
      step: 1,
      customerInformation: {},
      urlPaymentMercadoPago: '',
    }
  }

  componentDidMount() {
    if (this.state.savedProducts.length > 0) {
      this.getProductsToBuy()
    }
  }

  getProductsToBuy = () => {
    this.setState({
      isLoading: true,
    })
    const savedProducts = this.state.savedProducts.map(e => e.id)

    this.services.getProductsToBuy(savedProducts).then(res => {
      this.setState({
        isLoading: false,
        products: res.data,
      })
    })
  }

  setSavedProducts = newArray => {
    this.setState({
      savedProducts: newArray,
    })
  }

  acceptOrder = () => {
    this.setState({
      step: 2,
    })
  }

  goToPayment = customerInformation => {
    this.setState({
      isLoading: true,
    })

    this.services
      .sendPurchaseInformation({
        products: this.state.savedProducts.map(product => {
          const findProduct = this.state.products.find(
            e => e._id === product.id,
          )
          return {
            product: findProduct,
            quantity: product.quantity,
            colorsSelected: product.colorsSelected && [
              ...product.colorsSelected
                .filter(e => parseInt(e.quantity) !== 0)
                .map(color => {
                  return {
                    colorName: color.colorName,
                    quantity: color.quantity,
                  }
                }),
            ],
          }
        }),
        payer: customerInformation,
        deliveryPrice: customerInformation.deliveryPrice,
      })
      .then(res => {
        this.setState({
          urlPaymentMercadoPago: res.data,
          isLoading: false,
        })
        window.location.replace(`${res.data}`)
      })
  }

  render() {
    const step = this.state.step

    let activeStep

    let divIsLoading = (
      <div className={`center-align`}>
        {this.state.isLoading && (
          <Loader
            type="BallTriangle"
            color="#4DB6AC"
            height={100}
            width={100}
          />
        )}
      </div>
    )

    switch (step) {
      case 1:
        activeStep = (
          <StepOne
            acceptOrder={this.acceptOrder}
            products={this.state.products}
            savedProducts={this.state.savedProducts}
            setSavedProducts={this.setSavedProducts}
            step={this.state.step}
          />
        )

        break
      case 2:
        activeStep = (
          <StepTwo
            acceptOrder={this.acceptOrder}
            goToPayment={this.goToPayment}
            products={this.state.products}
            savedProducts={this.state.savedProducts}
            step={this.state.step}
          />
        )

        break
      case 3:
        activeStep = <DivContent></DivContent>

        break
      default:
        break
    }

    return (
      <DivContainer>
        <FirstLine></FirstLine>
        <Steeper step={this.state.step} />
        {this.state.isLoading ? divIsLoading : activeStep}
      </DivContainer>
    )
  }
}
