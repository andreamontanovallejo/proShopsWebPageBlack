import { API_PATH } from '../../../../config'

const PublicPageProductsServicesDefinitions = Object.freeze({
  getAllProducts: ({ companyId }) => {
    return `${API_PATH}products-by-section/get-all-products/${companyId}`
  },
  setLikes: `${API_PATH}products-by-section/set-likes`,
  setLike: `${API_PATH}products-by-section/set-like`,
  getOneProduct: ({ companyId, productId }) => {
    return `${API_PATH}products-by-section/get-one-product/${companyId}/${productId}`
  },
  getProductsToBuy: `${API_PATH}payments/get-products-to-buy`,
  sendPurchaseInformation: `${API_PATH}payments/send-purchase-information`,
  getThanksForYourPurchase: ({ companyId }) => {
    return `${API_PATH}payments/get-thanks-for-your-purchase/${companyId}`
  },
})

export default PublicPageProductsServicesDefinitions
