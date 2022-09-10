import PageServiceDefinitions from './PageServiceDefinitions'
import Services from '../DefaultServices'

export default class PageServices extends Services {
  getFooterInformation = companyId => {
    return this.get(PageServiceDefinitions.getFooterInformation(companyId))
  }

  getNavbarInformation = companyId => {
    return this.get(PageServiceDefinitions.getNavbarInformation(companyId))
  }
}
