import PublicPageHomeServicesDefinitions from './PublicPageHomeServicesDefinitions'
import Services from '../../../../services/DefaultServices'

export default class PublicPageHomeServices extends Services {
  getHomeInformation = companyId => {
    return this.get(
      PublicPageHomeServicesDefinitions.getHomeInformation(companyId),
    )
  }
}
