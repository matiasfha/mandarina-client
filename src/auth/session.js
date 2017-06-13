import jwtDecode from 'jwt-decode'
import moment from 'moment'

const TOKEN = 'mandarina_token'
const ACCESS_TOKEN = 'mandarina_access'
const EXP = 'mandarina_exp'
const PROFILE = 'mandarina_profile'

export const storeToken = ({ idToken, accessToken }) => {
  sessionStorage.setItem(TOKEN, idToken)
  sessionStorage.setItem(ACCESS_TOKEN, accessToken)
  const { exp, name, nickname, profile, picture } = jwtDecode(idToken)
  sessionStorage.setItem(EXP, exp)
  sessionStorage.setItem(
    PROFILE,
    JSON.stringify({
      name,
      nickname,
      profile,
      picture,
    })
  )
}

export const getToken = () => sessionStorage.getItem(TOKEN)
export const getAccessToken = () => sessionStorage.getItem(ACCESS_TOKEN)
export const getProfile = () => sessionStorage.getItem(PROFILE)
export const getExp = () => sessionStorage.getItem(EXP)

export const logout = () => {
  sessionStorage.removeItem(TOKEN)
  sessionStorage.removeItem(ACCESS_TOKEN)
  sessionStorage.removeItem(EXP)
  sessionStorage.removeItem(PROFILE)
}

export const isAuthenticated = (): boolean => {
  const token = getToken()
  if (!token) {
    return false
  }
  const exp = sessionStorage.getItem(EXP)
  const now = moment().unix()
  return now <= exp
}

export const nearExpiration = (): boolean => {
  const exp = moment(sessionStorage.getItem(EXP)).unix()
  const now = moment().unix()
  return (exp - now) / 60 <= 2
}
