import PublicPageProductsServicesDefinitions from './PublicPageProductsServicesDefinitions'
import Services from '../../../../services/DefaultServices'

export default class PublicPageProductsServices extends Services {
  getAllProducts = ({ companyId }) => {
    return this.get(
      PublicPageProductsServicesDefinitions.getAllProducts({
        companyId,
      }),
    )
  }

  setLikes = data => {
    return this.put(PublicPageProductsServicesDefinitions.setLikes, data)
  }

  setLike = data => {
    return this.put(PublicPageProductsServicesDefinitions.setLike, data)
  }

  getOneProduct = productId => {
    return this.get(
      PublicPageProductsServicesDefinitions.getOneProduct(productId),
    )
  }

  getProductsToBuy = data => {
    return this.put(
      PublicPageProductsServicesDefinitions.getProductsToBuy,
      data,
    )
  }

  sendPurchaseInformation = data => {
    return this.post(
      PublicPageProductsServicesDefinitions.sendPurchaseInformation,
      data,
    )
  }

  getThanksForYourPurchase = ({ companyId }) => {
    return this.get(
      PublicPageProductsServicesDefinitions.getThanksForYourPurchase({
        companyId,
      }),
    )
  }
}
