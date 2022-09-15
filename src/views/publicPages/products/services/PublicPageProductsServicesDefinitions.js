import { API_PATH } from '../../../../config'

const PublicPageProductsServicesDefinitions = Object.freeze({
  getAllProducts: ({ companyId }) => {
    return `${API_PATH}products-by-section/get-all-products/${companyId}`
  },
  setLikes: `${API_PATH}products-by-section/set-likes`,
  setLike: `${API_PATH}products-by-section/set-like`,
  getOneProduct: productId => {
    return `${API_PATH}products-by-section/get-one-product/${productId}`
  },
  getProductsToBuy: `${API_PATH}payments/get-products-to-buy`,
  sendPurchaseInformation: `${API_PATH}payments/send-purchase-information`,
})

export default PublicPageProductsServicesDefinitions
