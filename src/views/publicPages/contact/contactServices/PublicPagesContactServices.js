import PublicPagesContactServicesDefinitions from './PublicPagesContactServicesDefinitions'
import Services from '../../../../services/DefaultServices'

export default class PublicPagesContactServices extends Services {
  sendEmail = data => {
    return this.post(PublicPagesContactServicesDefinitions.sendEmail, data)
  }

  getContactInformation = companyId => {
    return this.get(
      PublicPagesContactServicesDefinitions.getContactInformation(companyId),
    )
  }
}
