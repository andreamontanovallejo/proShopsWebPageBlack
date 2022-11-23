export const getTotalsWithTaxes = ({
  legalDocumentoToTheOrder,
  priceListToUse,
  products,
  savedProducts,
}) => {
  //62f02e8a59f813792c5cdfcb boleta
  const useOriginalPrice = priceListToUse === '62fdccfaf8f153b5f9d77209'

  return products.reduce(
    (acc, product) => {
      const productPrice = useOriginalPrice
        ? product.price
        : Number(
            product.priceLists.find(e => e.listId === priceListToUse).value,
          )

      const quantity = savedProducts.find(e => e.id === product._id).quantity
      let taxSummationPerProduct = 0 // entrega el % total, ej: iva 19% + ila 30% respuesta= 49

      product.taxes.map(e => {
        if (
          legalDocumentoToTheOrder === '62f02e8a59f813792c5cdfcb' &&
          e.isRecoverableWithTicket
        ) {
          taxSummationPerProduct = taxSummationPerProduct + e.taxValue
        }

        if (
          legalDocumentoToTheOrder === '62f02e8a59f813792c5cdfcc' &&
          e.isRecoverableWithInvoice
        ) {
          taxSummationPerProduct = taxSummationPerProduct + e.taxValue
        }
      })

      const taxes = product.taxes.filter(tax =>
        legalDocumentoToTheOrder === '62f02e8a59f813792c5cdfcb'
          ? tax.isRecoverableWithTicket
          : tax.isRecoverableWithInvoice,
      )

      let netPerProduct = (100 * productPrice) / (100 + taxSummationPerProduct)

      let netPriceAmount = acc.netPrice + quantity * netPerProduct

      let totalTaxesAmmount =
        acc.taxesAmmount + quantity * (productPrice - netPerProduct)

      let totalAccumelatedPerProduct = acc.finalPrice + quantity * productPrice

      taxes.length > 0
        ? taxes.map(eachTax => {
            let appliedTaxes = []

            let foundTax = acc.taxesToApply.find(e => e.taxId === eachTax._id)

            let taxesToApply

            if (!foundTax) {
              appliedTaxes.push({
                isRecoverableWithTicket: eachTax.isRecoverableWithTicket,
                isRecoverableWithInvoice: eachTax.isRecoverableWithInvoice,
                taxName: eachTax.taxName,
                taxValue: eachTax.taxValue,
                taxAccumulateAmount:
                  (quantity * netPerProduct * eachTax.taxValue) / 100,
                taxId: eachTax._id,
              })

              taxesToApply = [...acc.taxesToApply, ...appliedTaxes]
            } else {
              let otherTaxesInAcc = acc.taxesToApply.filter(
                e => e.taxId !== eachTax._id,
              )

              foundTax.taxAccumulateAmount =
                foundTax.taxAccumulateAmount +
                (quantity * netPerProduct * eachTax.taxValue) / 100

              taxesToApply = [...otherTaxesInAcc, foundTax]
            }

            acc = {
              finalPrice: totalAccumelatedPerProduct,
              taxesToApply,
              taxesAmmount: totalTaxesAmmount,
              netPrice: netPriceAmount,
            }
          })
        : (acc = {
            finalPrice: totalAccumelatedPerProduct,
            taxesToApply: [],
            taxesAmmount: 0,
            netPrice: netPriceAmount,
          })

      return acc
    },
    {
      finalPrice: 0,
      taxesToApply: [],
      taxesAmmount: 0,
      netPrice: 0,
    },
  )
}
