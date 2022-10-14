import { API_PATH } from '../../../../config'

const PublicPagesContactServicesDefinitions = Object.freeze({
  sendEmail: `${API_PATH}page/send-email`,
  getContactInformation: companyId => {
    return `${API_PATH}web-page/get-contact-information/${companyId}`
  },
})

export default PublicPagesContactServicesDefinitions
