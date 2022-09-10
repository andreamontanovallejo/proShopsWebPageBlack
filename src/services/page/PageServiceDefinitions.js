import { API_PATH } from '../../config'

const PageServiceDefinitions = Object.freeze({
  getFooterInformation: companyId => {
    return `${API_PATH}web-page/get-footer-information/${companyId}`
  },

  getNavbarInformation: companyId => {
    return `${API_PATH}web-page/get-navbar-information/${companyId}`
  },
})

export default PageServiceDefinitions
