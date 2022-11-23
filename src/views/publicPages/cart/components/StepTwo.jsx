import React, { useState, useEffect } from 'react'
import {
  CardSummarySmallScreen,
  DivContent,
  DivError,
  DivForm,
  DivOptions,
  DivSummary,
  LeftSide,
  OptionSearchInStore,
  OptionSendHome,
  RightSideBigScreen,
  TitleBigScreen,
  TitleSmallScreen,
} from '../cartStyles'
import { prepareInfoToSave } from '../utils/prepareInfoToSave'
import { CardSummary } from './CardSummary'
import FormPersonalData from './FormPersonalData'

export const StepTwo = props => {
  const {
    acceptOrder,
    deliveryInformation,
    goToPayment,
    legalDocumentoToTheOrder,
    priceListToUse,
    priceListsToUseFound,
    products,
    savedProducts,
    step,
  } = props

  const [totalProducts, setTotalProducts] = useState(
    savedProducts.reduce((acc, curr) => {
      const productsFound =
        products.length > 0 && products.find(e => e._id === curr.id)

      const pricePerProductType = productsFound
        ? productsFound.price * curr.quantity
        : 0

      acc = acc + pricePerProductType
      return acc
    }, 0),
  )

  useEffect(() => {
    setTotalProducts(
      savedProducts.reduce((acc, curr) => {
        const productsFound =
          products.length > 0 && products.find(e => e._id === curr.id)

        const pricePerProductType = productsFound
          ? productsFound.price * curr.quantity
          : 0

        acc = acc + pricePerProductType
        return acc
      }, 0),
    )
  }, [savedProducts])

  const [collectorType, setCollectorType] = useState('62f9278cf8f153b5f9d77200')
  const [customerAddress, setCustomerAddress] = useState(undefined)
  const [customerCity, setCustomerCity] = useState(undefined)
  const [customerComuna, setCustomerComuna] = useState(undefined)
  const [customerDocumentNumber, setCustomerDocumentNumber] =
    useState(undefined)
  const [customerDocumentType, setCustomerDocumentType] = useState(undefined)
  const [customerEmail, setCustomerEmail] = useState(undefined)
  const [customerName, setCustomerName] = useState(undefined)
  const [customerNotes, setCustomerNotes] = useState(undefined)
  const [customerPhone, setCustomerPhone] = useState(undefined)
  const [customerRegion, setCustomerRegion] = useState(undefined)
  const [deliveryPrice, setDeliveryPrice] = useState(0)
  const [shipment, setShipment] = useState('searchInStore')

  const [errors, setErrors] = useState(undefined)

  const checkInformationIscomplete = () => {
    if (shipment === 'searchInStore') {
      if (
        (customerName && customerName.trim() === '') ||
        (customerEmail && customerEmail.trim() === '') ||
        (customerPhone && customerPhone.trim() === '') ||
        (customerDocumentType && customerDocumentType.trim() === '') ||
        (customerDocumentNumber && customerDocumentNumber.trim() === '')
      ) {
        setErrors('Ingrese toda la información solicitada')
        return
      }
    } else {
      if (
        (collectorType && collectorType.trim() === '') ||
        (customerName && customerName.trim() === '') ||
        (customerAddress && customerAddress.trim() === '') ||
        (customerEmail && customerEmail.trim() === '') ||
        (customerPhone && customerPhone.trim() === '') ||
        (customerDocumentType && customerDocumentType.trim() === '') ||
        (customerDocumentNumber && customerDocumentNumber.trim() === '') ||
        (customerRegion && customerRegion.trim() === '') ||
        (customerComuna && customerComuna.trim() === '')
      ) {
        setErrors('Ingrese toda la información solicitada')
        return
      }
    }

    if (!/^([\da-z_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/.exec(customerEmail)) {
      setErrors('El email debe contener @ y dominio')
      return
    }

    setErrors(undefined)

    const newSale = prepareInfoToSave({
      collectorType,
      customerAddress,
      customerComuna,
      customerDocumentNumber,
      customerDocumentType,
      customerEmail,
      customerName,
      customerNotes,
      customerPhone,
      customerRegion,
      deliveryPrice,
      legalDocumentoToTheOrder,
      priceListsToUseFound,
      priceListToUse,
      products,
      savedProducts,
      totalProducts,
    })

    goToPayment(newSale)
  }

  const unauthorizedDelivery =
    step === 2 &&
    shipment === 'sendHome' &&
    parseInt(deliveryPrice) === 0 &&
    customerRegion &&
    customerComuna

  return (
    <DivContent>
      <CardSummarySmallScreen>
        <CardSummary
          acceptOrder={acceptOrder}
          deliveryInformation={deliveryInformation}
          products={products}
          savedProducts={savedProducts}
          step={step}
          deliveryPrice={deliveryPrice}
          unauthorizedDelivery={unauthorizedDelivery}
          shipment={shipment}
          totalProducts={totalProducts}
        />
      </CardSummarySmallScreen>
      <LeftSide>
        <DivSummary className={`card`}>
          {`Ingresa tus datos para el despacho`}
        </DivSummary>
        <DivForm className={`card`}>
          <TitleSmallScreen>Elija opción:</TitleSmallScreen>

          <DivOptions>
            {deliveryInformation.companyHavePickupAtStore && (
              <OptionSearchInStore
                onClick={() => {
                  setShipment('searchInStore')
                  setCollectorType('62f9278cf8f153b5f9d77200')
                  setDeliveryPrice(0)
                  setCustomerComuna(undefined)
                  setCustomerRegion(undefined)
                }}
                shipment={shipment}
              >
                Retirar en tienda
              </OptionSearchInStore>
            )}

            {(deliveryInformation.companyHaveOwnDeliverySystem ||
              deliveryInformation.companyHaveThirdPartyShipment) && (
              <OptionSendHome
                onClick={() => {
                  setShipment('sendHome')
                  setDeliveryPrice(0)
                  setCustomerComuna(undefined)
                  setCustomerRegion(undefined)
                }}
                shipment={shipment}
              >
                Enviar a domicilio
              </OptionSendHome>
            )}
          </DivOptions>

          <TitleBigScreen>
            {shipment === 'searchInStore'
              ? 'Buscar en Tienda'
              : 'Enviar a domicilio'}
          </TitleBigScreen>
          <TitleSmallScreen>Ingrese información:</TitleSmallScreen>

          {errors && <DivError>{errors}</DivError>}

          <FormPersonalData
            checkInformationIscomplete={checkInformationIscomplete}
            collectorType={collectorType}
            customerAddress={customerAddress}
            customerCity={customerCity}
            customerComuna={customerComuna}
            customerDocumentNumber={customerDocumentNumber}
            customerDocumentType={customerDocumentType}
            customerEmail={customerEmail}
            customerName={customerName}
            customerNotes={customerNotes}
            customerPhone={customerPhone}
            customerRegion={customerRegion}
            deliveryInformation={deliveryInformation}
            deliveryPrice={deliveryPrice}
            setCollectorType={setCollectorType}
            setCustomerAddress={setCustomerAddress}
            setCustomerCity={setCustomerCity}
            setCustomerComuna={setCustomerComuna}
            setCustomerDocumentNumber={setCustomerDocumentNumber}
            setCustomerDocumentType={setCustomerDocumentType}
            setCustomerEmail={setCustomerEmail}
            setCustomerName={setCustomerName}
            setCustomerNotes={setCustomerNotes}
            setCustomerPhone={setCustomerPhone}
            setCustomerRegion={setCustomerRegion}
            setDeliveryPrice={setDeliveryPrice}
            shipment={shipment}
            unauthorizedDelivery={unauthorizedDelivery}
          />
        </DivForm>
      </LeftSide>
      <RightSideBigScreen>
        <CardSummary
          acceptOrder={acceptOrder}
          deliveryInformation={deliveryInformation}
          deliveryPrice={deliveryPrice}
          products={products}
          savedProducts={savedProducts}
          shipment={shipment}
          step={step}
          unauthorizedDelivery={unauthorizedDelivery}
          totalProducts={totalProducts}
        />
      </RightSideBigScreen>
    </DivContent>
  )
}
