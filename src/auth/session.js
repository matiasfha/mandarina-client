export const storeToken = (token) => {
  sessionStorage.setItem('token', JSON.stringify(token))
  return token
}

export const getToken = () => JSON.parse(sessionStorage.getItem('token'))

export const storeProfile = (profile) => {
  sessionStorage.setItem('profile', JSON.stringify(profile))
  return profile
}

export const getProfile = () => JSON.parse(sessionStorage.getItem('profile'))

export const logout = () => {
  sessionStorage.removeItem('token')
  sessionStorage.removeItem('profile')
}