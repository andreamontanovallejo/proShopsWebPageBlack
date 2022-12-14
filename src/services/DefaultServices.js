import axios from 'axios'
import agent from '../config'
import UserServices from '../views/publicPages/users/services/UserServiceDefinitions'

class Services {
  constructor() {
    this.axios = axios
    axios.defaults.timeout = 1000 * 40
    Services.setupAuthentication()
  }

  post(url, data, config) {
    return this.axiosPromise(() => this.axios.post(url, data, config))
  }

  put(url, data, config) {
    return this.axiosPromise(() => this.axios.put(url, data, config))
  }

  get(url, data, config) {
    return this.axiosPromise(() => this.axios.get(url, data, config))
  }

  download(url, data, config) {
    return this.axiosPromise(() => this.axios.get(url, data, config))
  }

  delete(url, data, config) {
    const newConfig = {
      ...config,
      data,
    }
    return this.axiosPromise(() => this.axios.delete(url, newConfig))
  }

  renewToken(refreshToken, promise, resolve, reject) {
    this.axios
      .post(UserServices.renewToken, { refreshToken })
      .then(response => {
        if (response.data.token) {
          agent.saveUser(response.data)
          this.axiosPromise(promise).then(resolve).catch(reject)

          return
        }
        throw new Error('401')
      })
      .catch(error => {
        agent.logout()
        window.location.reload()
        reject(error)
      })
  }

  axiosPromise(promise, retry = 0) {
    return new Promise((resolve, reject) => {
      promise()
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          if (error.response && error.response.status === 401) {
            if (agent.currentUser.refreshToken) {
              this.renewToken(
                agent.currentUser.refreshToken,
                promise,
                resolve,
                reject,
              )
              return
            }
            agent.logout()
            window.location.reload()
            reject(error)
          }
          if (retry >= 1 && retry < 5) {
            const newRetry = retry - 1
            this.axiosPromise(promise, newRetry).then(resolve).catch(reject)
          } else {
            reject(error)
          }
        })
    })
  }

  static setupAuthentication() {
    const { currentToken } = agent
    if (currentToken !== undefined && currentToken !== '') {
      axios.defaults.headers.common.Authorization = `Bearer ${currentToken}`
      axios.defaults.withCredentials = true
    } else {
      axios.defaults.headers.common.Authorization = ''
    }
  }
}

export default Services
