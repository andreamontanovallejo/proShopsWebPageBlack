import { API_PATH } from '../../../../config'

const PublicPageHomeServicesDefinitions = Object.freeze({
  getHomeInformation: companyId => {
    return `${API_PATH}web-page/get-home-information/${companyId}`
  },
})

export default PublicPageHomeServicesDefinitions
