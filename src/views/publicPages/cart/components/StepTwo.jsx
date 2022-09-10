import React, { useState } from 'react'
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
  TitleSmallScreen,
} from '../cartStyles'
import { CardSummary } from './CardSummary'
import FormPersonalData from './FormPersonalData'

export const StepTwo = props => {
  const { acceptOrder, goToPayment, products, savedProducts, step } = props

  const [customerAddress, setCustomerAddress] = useState('')
  const [customerCity, setCustomerCity] = useState('')
  const [customerComuna, setCustomerComuna] = useState('')
  const [customerDocumentNumber, setCustomerDocumentNumber] = useState('')
  const [customerDocumentType, setCustomerDocumentType] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')
  const [customerName, setCustomerName] = useState('')
  const [customerNotes, setCustomerNotes] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')
  const [customerRegion, setCustomerRegion] = useState('')
  const [deliveryPrice, setDeliveryPrice] = useState(0)
  const [shipment, setShipment] = useState('searchInStore')

  const [errors, setErrors] = useState(undefined)

  const checkInformationIscomplete = () => {
    if (shipment === 'searchInStore') {
      if (
        customerName.trim() === '' ||
        customerEmail.trim() === '' ||
        customerPhone.trim() === '' ||
        customerDocumentType.trim() === '' ||
        customerDocumentNumber.trim() === ''
      ) {
        setErrors('Ingrese toda la información solicitada')
        return
      }
    } else {
      if (
        customerName.trim() === '' ||
        customerAddress.trim() === '' ||
        customerEmail.trim() === '' ||
        customerPhone.trim() === '' ||
        customerDocumentType.trim() === '' ||
        customerDocumentNumber.trim() === '' ||
        customerRegion.trim() === '' ||
        (customerRegion === 'Metropolitana de Santiago' &&
          customerComuna.trim() === '') ||
        (customerComuna === 'Otra comuna' && customerCity.trim() === '') ||
        (customerRegion !== 'Metropolitana de Santiago' &&
          customerCity.trim() === '')
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

    goToPayment({
      customerAddress,
      customerCity,
      customerComuna,
      customerDocumentNumber,
      customerDocumentType,
      customerEmail,
      customerName,
      customerNotes,
      customerPhone,
      customerRegion,
      deliveryPrice,
      shipment,
    })
  }

  const unauthorizedDelivery =
    step === 2 &&
    shipment === 'sendHome' &&
    parseInt(deliveryPrice) === 0 &&
    customerRegion &&
    ((customerRegion === 'Metropolitana de Santiago' &&
      customerComuna === 'Otra comuna') ||
      customerRegion !== 'Metropolitana de Santiago')

  return (
    <DivContent>
      <CardSummarySmallScreen>
        <CardSummary
          acceptOrder={acceptOrder}
          products={products}
          savedProducts={savedProducts}
          step={step}
          deliveryPrice={deliveryPrice}
          unauthorizedDelivery={unauthorizedDelivery}
          shipment={shipment}
        />
      </CardSummarySmallScreen>
      <LeftSide>
        <DivSummary className={`card`}>
          {`Ingresa tus datos para el despacho`}
        </DivSummary>
        <DivForm className={`card`}>
          <TitleSmallScreen>Elija opción:</TitleSmallScreen>

          <DivOptions>
            <OptionSearchInStore
              onClick={() => setShipment('searchInStore')}
              shipment={shipment}
            >
              Buscar en tienda
            </OptionSearchInStore>
            <OptionSendHome
              onClick={() => setShipment('sendHome')}
              shipment={shipment}
            >
              Enviar a domicilio
            </OptionSendHome>
          </DivOptions>

          <TitleSmallScreen>Ingrese información:</TitleSmallScreen>

          {errors && <DivError>{errors}</DivError>}

          <FormPersonalData
            checkInformationIscomplete={checkInformationIscomplete}
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
            deliveryPrice={deliveryPrice}
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
          products={products}
          savedProducts={savedProducts}
          step={step}
          deliveryPrice={deliveryPrice}
          unauthorizedDelivery={unauthorizedDelivery}
          shipment={shipment}
        />
      </RightSideBigScreen>
    </DivContent>
  )
}
