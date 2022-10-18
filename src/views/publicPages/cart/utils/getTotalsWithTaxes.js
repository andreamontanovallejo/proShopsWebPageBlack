export const getTotalsWithTaxes = ({
  legalDocumentoToTheOrder,
  products,
  savedProducts,
}) => {
  //62f02e8a59f813792c5cdfcb boleta
  return products.reduce(
    (acc, product) => {
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

      let netPerProduct = (100 * product.price) / (100 + taxSummationPerProduct)

      let netPriceAmount = acc.netPrice + quantity * netPerProduct

      let totalTaxesAmmount =
        acc.taxesAmmount + quantity * (product.price - netPerProduct)

      let totalAccumelatedPerProduct = acc.finalPrice + quantity * product.price

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
