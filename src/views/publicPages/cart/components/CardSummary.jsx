import React from 'react'
import { Divider } from '@material-ui/core'
import Button from '../../../../helpers/Button'
import {
  CardTitle,
  CardTotalAmount,
  CardTotalDelivery,
  CardTotalProducts,
  DivButton,
  DivCardSummary,
  Error,
} from './cardSummaryStyles'
import { useState } from 'react'
import { useEffect } from 'react'

export const CardSummary = props => {
  const {
    acceptOrder,
    error,
    products,
    savedProducts,
    step,
    deliveryPrice,
    unauthorizedDelivery,
    shipment,
  } = props
  console.log('savedProducts', savedProducts)
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
        <Error>{`Condiciones de envío a domicilio: las compras realizadas antes de las 14:00 horas serán despachadas en el transcurso del día, despues de dicha hora se harán al día siguiente. El tiempo máximo para la entrega es 24 horas.`}</Error>
      )}

      {unauthorizedDelivery && (
        <Error>{`Atención: Agradecemos su comprensión, estamos trabajando para poder llegar a su destino lo antes posible. Prontamente informaremos el Delivery con el cual trabajaremos para llegar a todos los puntos del país.`}</Error>
      )}

      {step === 1 && (
        <>
          <Divider />

          {error && (
            <Error>{`Debe elegir el color de cada unidad seleccionada de ${
              products.find(e => e._id === error.id).productName
            } para aceptar la orden`}</Error>
          )}

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
