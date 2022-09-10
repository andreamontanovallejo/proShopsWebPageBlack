import React from 'react'

import {
  DivContainer,
  DivTitle,
  DivSubtitle,
  DivRow,
  DivCol,
  DivColTitle,
  DivTable,
} from './shippingPricesStyles'

export default function ShippingPrices() {
  const quotation = [
    { name: 'EEUU', days3: 104270, days21: 96950 },
    { name: 'Alemania', days3: 150340, days21: 88720 },
    { name: 'Francia', days3: 150340, days21: 88720 },
    { name: 'Australia', days3: 193520, days21: 139290 },
    { name: 'Arabia saudita', days3: 192910, days21: 115920 },
  ]
  return (
    <DivContainer>
      <DivTitle> Valores aproximados de envíos internacionales</DivTitle>
      <DivSubtitle>
        Podemos enviar la obra por la empresa transportadora que usted elija,
        sin embargo queremos mostrarle un estimado de la cotización realizada
        por Correos de Chile al 1 enero 2021 para una caja de 20 x 20 x 110 cm
        con un máximo de 2 Kilos de peso (este empaque hace referencia a una
        obra enviada enrollada de 100 cm).
        <br />
        Los valores son un estimado ya que se debe calcular las dimensiones
        exactas, el peso de la obra y los precios que disponga la empresa de
        envío a la fecha de la compra.
      </DivSubtitle>
      <DivTable>
        <DivRow>
          <DivColTitle>País</DivColTitle>
          <DivColTitle>llega en 3 días aprox</DivColTitle>
          <DivColTitle>Llega en 21 días aprox</DivColTitle>
        </DivRow>
        {quotation.map((country) => (
          <DivRow>
            <DivCol>{country.name}</DivCol>
            <DivCol>
              {new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'CLP',
              }).format(country.days3)}
            </DivCol>
            <DivCol>
              {new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'CLP',
              }).format(country.days21)}
            </DivCol>
          </DivRow>
        ))}
      </DivTable>
    </DivContainer>
  )
}
