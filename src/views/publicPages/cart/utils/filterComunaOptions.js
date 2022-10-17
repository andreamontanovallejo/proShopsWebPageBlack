export const filterComunaOptions = ({
  chileanRegionsAndComunas,
  comunaDeliveryPrices,
  comunaShipmentPrices,
  customerRegion,
}) => {
  return chileanRegionsAndComunas.reduce((acc, curr) => {
    if (curr._id === customerRegion) {
      curr.comunas.filter(comuna => {
        const foundInComunaDeliveryPrices = comunaDeliveryPrices.find(
          e => e.comunaId === comuna._id,
        )

        const foundInComunaShipmentPrices = comunaShipmentPrices.find(
          e => e.comunaId === comuna._id,
        )

        if (foundInComunaDeliveryPrices && foundInComunaShipmentPrices) {
          acc.push({
            name: `${comuna.name}: $${foundInComunaDeliveryPrices.deliveryPrice} - Delivery directo`,
            comunaId: comuna._id,
            deliveryPrice: foundInComunaDeliveryPrices.deliveryPrice,
            collectorType: '62f927e2f8f153b5f9d77201',
            _id: foundInComunaDeliveryPrices._id,
          })

          acc.push({
            name: `${comuna.name}: $${foundInComunaShipmentPrices.shipmentPrice} - Envío por courier`,
            comunaId: comuna._id,
            deliveryPrice: foundInComunaShipmentPrices.shipmentPrice,
            collectorType: '62f928c2f8f153b5f9d77203',
            _id: foundInComunaShipmentPrices._id,
          })
        } else if (foundInComunaDeliveryPrices || foundInComunaShipmentPrices) {
          if (foundInComunaDeliveryPrices) {
            acc.push({
              name: `${comuna.name}`,
              comunaId: comuna._id,
              deliveryPrice: foundInComunaDeliveryPrices.deliveryPrice,
              collectorType: '62f927e2f8f153b5f9d77201',
              _id: foundInComunaDeliveryPrices._id,
            })
          }

          if (foundInComunaShipmentPrices) {
            acc.push({
              name: `${comuna.name}`,
              comunaId: comuna._id,
              deliveryPrice: foundInComunaShipmentPrices.shipmentPrice,
              collectorType: '62f928c2f8f153b5f9d77203',
              _id: foundInComunaShipmentPrices._id,
            })
          }
        }
      })
    }
    return acc
  }, [])
}
