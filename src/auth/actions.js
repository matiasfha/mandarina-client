export const AUTHENTICATED = 'auth/AUTHENTICATED'
export const AUTHORIZATION_ERROR = 'auth/AUTHORIZATION_ERROR'
export const UNRECOVERABLE_ERROR = 'auth/UNRECOVERABLE_ERROR'
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS'
export const LOGOUT_REQUEST = 'auth/LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS'

export function authenticated(token){
  return {
    type: AUTHENTICATED,
    payload: {
      token
    }
  }
}

export function authorizationError(error){
  return {
    type: AUTHORIZATION_ERROR,
    payload: {
      error
    }
  }
}

export function unrecoverableError(error){
  return {
    type: UNRECOVERABLE_ERROR,
    payload: {
      error
    }
  }
}

export function loginSuccess(token, profile){
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token,
      profile
    }
  }
}

export function requestLogot(){
  return {
    type: LOGOUT_REQUEST
  }
}

export function logoutSuccess(){
  return {
    type: LOGOUT_SUCCESS
  }
}