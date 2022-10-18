import React from 'react'
import Loader from 'react-loader-spinner'
import { PublicPageProductsServices } from '../../../services'
import { DivContainer, DivContent, FirstLine } from './cartStyles'
import Steeper from './components/Steeper'
import { StepOne } from './components/StepOne'
import { StepTwo } from './components/StepTwo'

export default class CartPublicPage extends React.Component {
  constructor(props) {
    super(props)
    this.services = new PublicPageProductsServices()
    this.state = {
      customerInformation: {},
      deliveryInformation: {
        branchStores: undefined,
        chileanRegionsAndComunas: undefined,
        companyHaveOwnDeliverySystem: undefined,
        companyHavePickupAtStore: undefined,
        companyHaveThirdPartyShipment: undefined,
        comunaDeliveryPrices: undefined,
        comunaShipmentPrices: undefined,
        deliveryConditions: undefined,
        legalIdDocumentTypes: undefined,
        messageForComunasWithoutDelivery: undefined,
        offerInvoice: undefined,
        salesDocumentTypes: [],
      },
      isLoading: false,
      priceListToUse: undefined,
      priceListsToUse: [],
      products: [],
      savedProducts: JSON.parse(localStorage.getItem('shoppingCartProshops')),
      step: 1,
      urlPaymentMercadoPago: '',
      legalDocumentoToTheOrder: '62f02e8a59f813792c5cdfcb', // Boleta
    }
  }

  componentDidMount() {
    if (this.state.savedProducts && this.state.savedProducts.length > 0) {
      this.getProductsToBuy()
    }
  }

  getProductsToBuy = () => {
    this.setState({
      isLoading: true,
    })
    const savedProducts = this.state.savedProducts.map(e => e.id)

    this.services
      .getProductsToBuy({
        savedProducts,
        companyId: process.env.REACT_APP_COMPANYID,
      })
      .then(res => {
        this.setState({
          isLoading: false,
          deliveryInformation: res.data.deliveryInformation,
          priceListToUse: res.data.priceListToUse,
          priceListsToUse: res.data.priceListsToUse,
          products: res.data.products,
          savedProducts: this.state.savedProducts.reduce((acc, curr) => {
            if (res.data.products.find(e => e._id === curr.id)) {
              acc.push(curr)
            }
            return acc
          }, []),
        })
      })
  }

  setSavedProducts = newArray => {
    this.setState({
      savedProducts: newArray,
    })
  }

  setLegalDocument = value => {
    this.setState({
      legalDocumentoToTheOrder: value,
    })
  }

  goToStepOne = () => {
    this.setState({
      step: 1,
    })
  }

  acceptOrder = () => {
    this.setState({
      step: 2,
    })
  }

  goToPayment = newSale => {
    this.setState({
      isLoading: true,
    })

    this.services.sendPurchaseInformation(newSale).then(res => {
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
            legalDocumentoToTheOrder={this.state.legalDocumentoToTheOrder}
            priceListToUse={this.state.priceListToUse}
            offerInvoice={this.state.deliveryInformation.offerInvoice}
            products={this.state.products}
            salesDocumentTypes={
              this.state.deliveryInformation.salesDocumentTypes
            }
            savedProducts={this.state.savedProducts}
            setLegalDocument={this.setLegalDocument}
            setSavedProducts={this.setSavedProducts}
            step={this.state.step}
          />
        )

        break
      case 2:
        activeStep = (
          <StepTwo
            acceptOrder={this.acceptOrder}
            deliveryInformation={this.state.deliveryInformation}
            goToPayment={this.goToPayment}
            legalDocumentoToTheOrder={this.state.legalDocumentoToTheOrder}
            priceListToUse={this.state.priceListToUse}
            priceListsToUseFound={this.state.priceListsToUse.find(
              e => e._id === this.state.priceListToUse,
            )}
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
        <Steeper
          step={this.state.step}
          goToStepOne={this.goToStepOne}
          acceptOrder={this.acceptOrder}
        />
        {this.state.isLoading ? divIsLoading : activeStep}
      </DivContainer>
    )
  }
}
