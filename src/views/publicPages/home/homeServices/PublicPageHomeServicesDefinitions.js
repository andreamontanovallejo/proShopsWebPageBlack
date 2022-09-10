import { API_PATH } from '../../../../config'

const PublicPageHomeServicesDefinitions = Object.freeze({
  getInitialInformation: () => {
    return `${API_PATH}page/all-information`
  },
  modifyVariableInPage: `${API_PATH}page/modify-variable-in-page`,
  sendNewCoverPhotoLocation: `${API_PATH}page/send-new-cover-photo-location`,
})

export default PublicPageHomeServicesDefinitions
