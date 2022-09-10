import React, { useEffect } from 'react'
import Styles from './thanksPublicPageStyles.module.scss'

export default function ThanksPublicPage() {
  useEffect(() => {
    localStorage.removeItem('shoppingCartLaEscalaGaleria')
  }, [])

  return (
    <div className={`${Styles.divContainer}`}>
      <div className={`${Styles.divTitle}`}>Gracias por su compra</div>
      <div className={`${Styles.divText}`}>
        <div className={`${Styles.text}`}>
          Emporio Gorroño le agradece su preferencia por nuestros productos,
          esperamos que pueda experimentar gratas sensaciones, prontamente más
          sorpresas.
        </div>
      </div>
    </div>
  )
}
