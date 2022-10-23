import { getTotalsWithTaxes } from './getTotalsWithTaxes'

export const prepareInfoToSave = ({
  collectorType,
  customerAddress,
  customerComuna,
  customerDocumentNumber,
  customerDocumentType,
  customerEmail,
  customerName,
  customerNotes,
  customerPhone,
  customerRegion,
  deliveryPrice,
  legalDocumentoToTheOrder,
  priceListsToUseFound,
  priceListToUse,
  products,
  savedProducts,
  totalProducts,
}) => {
  const totalsWithTaxes = getTotalsWithTaxes({
    legalDocumentoToTheOrder,
    products,
    savedProducts,
  })
  return {
    cashRegisterShift: '634c7baa62bd9d3476b9dad3',
    companyId: process.env.REACT_APP_COMPANYID,
    creationDate: new Date(),
    delivery: {
      status: 'pending',
      deliveryPrice,
      collectorType,
    },
    mercado_pago_state: 'pending',
    mercado_pago: {
      taxes_amount: [],
      transaction_amount: totalProducts + deliveryPrice,
    },
    customer: {
      person: {
        documentNumber: customerDocumentNumber,
        documentType: customerDocumentType,
        email: customerEmail,
        fantasyName:
          customerDocumentType === '62fbe74af8f153b5f9d77207'
            ? customerName
            : undefined,
        location: {
          address: customerAddress,
          addressNote: customerNotes,
          comuna: customerComuna,
          region: customerRegion,
        },
        name: customerName,
        phone: customerPhone,
      },
      clientType: {
        finalCustomer: true,
        institutionalCustomer: false,
        intermediary: false,
      },
      customerSegmentation: [],
      customerSegmentationGroup: [],
      legalEntity:
        customerDocumentType === '62fbe74af8f153b5f9d77207'
          ? 'juridicalPerson'
          : 'naturalPerson',
    },
    listPriceToUse:
      priceListToUse === '62fdccfaf8f153b5f9d77209'
        ? {
            id: '62fdccfaf8f153b5f9d77209',
            percentage: 0,
            priceListName: 'originalPrice',
            priceListType: undefined,
            round: undefined,
            roundingAmount: 0,
          }
        : {
            id: priceListsToUseFound._id,
            increaseOrDecrease: priceListsToUseFound.increaseOrDecrease,
            percentage: priceListsToUseFound.percentage,
            priceListName: priceListsToUseFound.priceListName,
            priceListType: priceListsToUseFound.priceListType,
            round: priceListsToUseFound.round,
            roundingAmount: priceListsToUseFound.roundingAmount,
          },
    productsSold: savedProducts.map(eachProduct => {
      const productFound = products.find(e => e._id === eachProduct.id)

      return {
        imgUrl: productFound.imgSaved[0].url,
        barCode: productFound.barCode,
        categories:
          productFound.categories.length > 0
            ? productFound.categories.map(eachCategory => {
                return {
                  id: eachCategory._id,
                  name: eachCategory.name,
                }
              })
            : [],
        department: {
          id: productFound.section._id,
          name: productFound.section.name,
        },
        discountPerUnit: 0,
        estimatedReplacementCost: productFound.estimatedReplacementCost,
        extraChargePerUnit: 0,
        name: productFound.productName,
        originalPrice: productFound.price,
        price:
          priceListToUse === '62fdccfaf8f153b5f9d77209'
            ? productFound.price
            : productFound.priceLists.find(e => e.listId === priceListToUse)
                .value,
        pricePerMeasure: productFound.pricePerMeasure,
        productId: productFound._id,
        providerId: productFound.provider[0]._id,
        providerName: productFound.provider[0].nickname,
        purchasePrice: productFound.purchasePrice,
        quantityAdded: eachProduct.quantity,
        sku: productFound.sku,
        subCategories:
          productFound.subCategoriesSelected.length > 0
            ? productFound.subCategoriesSelected.map(eachSubcategory => {
                return {
                  id: eachSubcategory._id,
                  name: eachSubcategory.name,
                }
              })
            : [],
        taxesToApply:
          productFound.taxes.length > 0
            ? productFound.taxes.map(eachTax => {
                return {
                  isRecoverableWithInvoice: eachTax.isRecoverableWithInvoice,
                  isRecoverableWithTicket: eachTax.isRecoverableWithTicket,
                  taxId: eachTax._id,
                  taxName: eachTax.taxName,
                  taxValue: eachTax.taxValue,
                }
              })
            : [],
      }
    }),
    saleDocumentType: legalDocumentoToTheOrder,
    saleNotes: '',
    sii: {
      operationAmount: undefined,
      operationNumber: undefined,
    },
    totals: {
      finalPrice: totalsWithTaxes.finalPrice,
      netPrice: totalsWithTaxes.netPrice,
      taxesAmount: totalsWithTaxes.taxesAmmount,
      taxesApplied: totalsWithTaxes.taxesToApply,
    },
    usedPaymentMethod: [
      {
        currentDate: new Date(),
        issueItsOwnLegalTaxDocument: false,
        paymentAmount: totalProducts + deliveryPrice,
        paymentMethod: '634b862c62bd9d3476b9dacc', // Mercado Pago - ProShops
      },
    ],
    vendor: {
      vendorId: '634b87e662bd9d3476b9dacd',
      vendorName: 'ProShops - Página Web',
    },
  }
}
