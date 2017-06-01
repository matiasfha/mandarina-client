
import Auth0Lock from 'auth0-lock'
import logo from '../images/logo.png'
import { getToken, getProfile } from './session.js'

export const isAuthenticated = () => !!(getToken() && getProfile())

class Auth {
  static instance = null

  constructor() {
    if (Auth.instance) {
      return Auth.instance
    }
    Auth.instance = this
    this.lock = new Auth0Lock(
      process.env.REACT_APP_AUTH0_CLIENTID,
      process.env.REACT_APP_AUTH0_DOMAIN,
      {
        language: 'es',
        languageDictionary: {
          title: 'Mandarina POS',
        },
        rememberLastLogin: false,
        closable: false,
        theme: {
          logo: logo,
          primaryColor: '#76beb2',
        },
        auth: {
          responseType: 'token',
          params: {
            scope: 'email',
          },
        },
      }
    )
  }

  show() {
    this.lock.show()
  }

  setEvent(event, callback) {
    this.lock.on(event, callback)
  }

  resumeAuth(callback) {
    if (!!window.location.hash) {
      this.lock.resumeAuth(window.location.hash, callback)
    }
  }

  getProfile = token => {
    return new Promise((resolve, reject) => {
      this.lock.getUserInfo(token, (error, profile) => {
        if (!error) {
          return resolve(profile)
        }
        return reject(error)
      })
    })
  }
}

export default new Auth()
