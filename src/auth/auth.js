const Auth0 = require('auth0-js')

class Auth {
  static instance = null

  constructor() {
    if (Auth.instance) {
      return Auth.instance
    }
    Auth.instance = this
    this.auth = new Auth0.WebAuth({
      clientID: process.env.REACT_APP_AUTH0_CLIENTID,
      domain: process.env.REACT_APP_AUTH0_DOMAIN,
      responseType: 'id_token token',
      scope: 'openid email profile ',
    })
  }

  renew = (): Promise =>
    new Promise((resolve, reject) =>
      this.auth.renewAuth({}, (err, authResult) => {
        if (err) return reject(err)
        return resolve(authResult)
      })
    )
}

export default new Auth()
