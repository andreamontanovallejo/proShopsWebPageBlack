import React from 'react'

import {
  DivContainer,
  DivTitle,
  DivSubtitle,
  DivText,
} from './shippingAndReturnsStyles'

export default function ShippingAndReturns() {
  return (
    <DivContainer>
      <DivTitle> Terminos y Condiciones de Despacho y Devoluciones</DivTitle>
      <DivSubtitle>Despacho</DivSubtitle>
      <DivText>
        Para el despacho o envío de obras, el comprador deberá especificar el
        tipo de embalaje para éstas. Si es de soporte bidimensional (tela o
        papel) fuera de sus bastidores o marcos, éstas serán enrolladas y
        protegidas dentro de un tubo que permitirá un traslado seguro de
        externalidades propias de desplazamientos complejos.
        <br />
        Cuando la obra va montada en sus bastidores o marcos, éstas se forrarán
        íntegramente con aislante antihumedad, capas de amortiguación en nylon
        burbuja, más cartón corrugado para finalmente ser protegida con una caja
        de alta densidad, asegurando su protección en un 100%.
        <br />
        La Escala Galería se atiene a los protocolos de embalaje y envío de
        Correos de Chile, empresa que se encargará del traslado de las obras
        tanto nacionales como internacionales.
      </DivText>
      <DivSubtitle>Reembolsos</DivSubtitle>
      <DivText>
        La Escala Galeria se adhiere a politicas de reembolso de abonos o pagos
        totales de productos siempre y cuando las causas de devolucion sean de
        su responsabilidad, por publicidad engañosa o mala descripcion del
        producto y en cuanto estos estén retornados en nuestras dependencias.
      </DivText>
    </DivContainer>
  )
}
