import React, { useState, useEffect } from 'react'
import { CartServices } from '../../../../services/index'
import Styles from './thanksPublicPageStyles.module.scss'
import { DivContainer, DivTitle, DivText, Text } from './thanksPublicPageStyles'

const services = new CartServices()

export const ThanksPublicPage = () => {
  const [thanksMessage, setThanksMessage] = useState(undefined)

  useEffect(() => {
    const thanks = async () => {
      await setThanksMessage(
        await services
          .getThanksForYourPurchase({
            companyId: process.env.REACT_APP_COMPANYID,
          })
          .then(async response => {
            return response.data
          })
          .catch(error => {
            return 'Agradecemos su compra  y preferencia. Ahora sus productos ya están en proceso de envío. Se ha enviado el comprobante de pago y detalle de sus productos al correo electrónico ingresado.'
          }),
      )
    }

    thanks()
  }, [])

  useEffect(() => {
    localStorage.removeItem('shoppingCartProshops')
  }, [])

  return (
    <DivContainer>
      <DivTitle className={`${Styles.divTitle}`}>
        Gracias por su compra
      </DivTitle>
      <DivText>
        <Text>{`${
          thanksMessage && thanksMessage
        } Se ha enviado el comprobante de pago y detalle de sus productos al correo electrónico ingresado.`}</Text>
      </DivText>
    </DivContainer>
  )
}
