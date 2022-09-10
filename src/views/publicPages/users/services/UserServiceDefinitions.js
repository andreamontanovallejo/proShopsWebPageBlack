import { API_PATH } from '../../../../config'

const UserServiceDefinitions = Object.freeze({
  login: `${API_PATH}user/login`,
  getCurrentUser: `${API_PATH}user/getCurrent`,
  signup: `${API_PATH}user`,
  logout: `${API_PATH}user/logout`,
  renewToken: `${API_PATH}user/renewToken`,
  revokeToken: `${API_PATH}user/revokeToken`,
})

export default UserServiceDefinitions
