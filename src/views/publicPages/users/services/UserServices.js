import UserServiceDefinitions from './UserServiceDefinitions'
import Agent from '../../../../config'
import Services from '../../../../services/DefaultServices'

export default class UserServices extends Services {
  constructor() {
    super()
    Agent.reloadHeaderToken()
  }

  login = (email, pass) => {
    return new Promise((resolve, reject) => {
      this.post(
        UserServiceDefinitions.login,
        {},
        {
          auth: { username: email, password: pass },
        },
      )

        .then(res => {
          if (res.status === 200) {
            resolve(res.data)
          } else {
            reject(res)
          }
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  logout = data => {
    return this.post(UserServiceDefinitions.logout, data)
  }

  signup = data => {
    return this.post(UserServiceDefinitions.signup, data)
  }

  updatePasswordFromAdmin(data) {
    return this.put(UserServiceDefinitions.updatePasswordFromAdmin, data)
  }

  getCurrentUser() {
    return this.get(UserServiceDefinitions.getCurrentUser)
  }

  asignPersonalInfoToTheUser = data => {
    return this.put(UserServiceDefinitions.fulfillPersonalData, data)
  }
}
