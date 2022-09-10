import PublicPageProductsServicesDefinitions from './PublicPageProductsServicesDefinitions'
import Services from '../../../../services/DefaultServices'

export default class PublicPageProductsServices extends Services {
  getAllProducts = sectionId => {
    return this.get(
      PublicPageProductsServicesDefinitions.getAllProducts(sectionId),
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

  getProductsToBuy = savedProducts => {
    return this.put(
      PublicPageProductsServicesDefinitions.getProductsToBuy,
      savedProducts,
    )
  }

  sendPurchaseInformation = data => {
    return this.post(
      PublicPageProductsServicesDefinitions.sendPurchaseInformation,
      data,
    )
  }
}
