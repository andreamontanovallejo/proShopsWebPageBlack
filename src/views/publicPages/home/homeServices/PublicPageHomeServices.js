import PublicPageHomeServicesDefinitions from './PublicPageHomeServicesDefinitions'
import Services from '../../../../services/DefaultServices'

export default class PublicPageHomeServices extends Services {
  getInitialInformation = () => {
    return this.get(PublicPageHomeServicesDefinitions.getInitialInformation())
  }
  modifyVariableInPage = data => {
    return this.put(
      PublicPageHomeServicesDefinitions.modifyVariableInPage,
      data,
    )
  }
  sendNewCoverPhotoLocation = data => {
    return this.put(
      PublicPageHomeServicesDefinitions.sendNewCoverPhotoLocation,
      data,
    )
  }
}
