import React, { useState, useEffect } from 'react'
import { Divider } from '@material-ui/core'
import Button from '../../../../helpers/Button'
import Select from '../../../../helpers/Select'
import {
  CardTitle,
  CardTotalAmount,
  CardTotalDelivery,
  CardTotalProducts,
  DivButton,
  DivCardSummary,
  DivSelect,
  Error,
  LegalDocumentTicket,
} from './cardSummaryStyles'

export const CardSummary = props => {
  const {
    acceptOrder,
    deliveryInformation,
    deliveryPrice,
    error,
    legalDocumentoToTheOrder,
    offerInvoice,
    products,
    salesDocumentTypes,
    savedProducts,
    setLegalDocument,
    shipment,
    step,
    totalProducts,
    unauthorizedDelivery,
  } = props

  const total = totalProducts + deliveryPrice

  return (
    <DivCardSummary className={`card`}>
      <CardTitle>Resumen de la orden</CardTitle>

      <CardTotalProducts>{`Productos: $ ${totalProducts.toLocaleString(
        'de-DE',
      )}`}</CardTotalProducts>

      <CardTotalDelivery>{`Envío: $ ${deliveryPrice.toLocaleString(
        'de-DE',
      )}`}</CardTotalDelivery>

      <CardTotalAmount>{`Total: $ ${total.toLocaleString(
        'de-DE',
      )}`}</CardTotalAmount>

      {step === 2 && shipment === 'sendHome' && !unauthorizedDelivery && (
        <Error>{`Condiciones de envío a domicilio: ${
          (deliveryInformation && deliveryInformation.deliveryConditions) || ''
        }`}</Error>
      )}

      {unauthorizedDelivery && (
        <Error>{`Atención: ${
          (deliveryInformation &&
            deliveryInformation.messageForComunasWithoutDelivery) ||
          ''
        }`}</Error>
      )}

      {step === 1 && (
        <>
          {!offerInvoice ? (
            <LegalDocumentTicket>Documento legal: Boleta</LegalDocumentTicket>
          ) : (
            <DivSelect>
              <Select
                error={[]}
                placeholder={'Documento legal que desea'}
                defaultValue={legalDocumentoToTheOrder}
                onChange={value => setLegalDocument(value)}
                arrayOptions={salesDocumentTypes}
                keyValueName={'_id'}
                keyMessageName={'spanish'}
              />
            </DivSelect>
          )}

          <Divider />

          <DivButton>
            <Button
              background={'#555555'}
              onClick={() => !error && acceptOrder()}
              text={'Aceptar orden'}
              textColor={'white'}
            />
          </DivButton>
        </>
      )}
    </DivCardSummary>
  )
}
