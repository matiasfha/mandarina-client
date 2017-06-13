export const AUTHENTICATED = 'auth/AUTHENTICATED'
export const AUTHORIZATION_ERROR = 'auth/AUTHORIZATION_ERROR'
export const UNRECOVERABLE_ERROR = 'auth/UNRECOVERABLE_ERROR'
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS'
export const LOGOUT_REQUEST = 'auth/LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS'
export const REFRESH_AUTHENTICATION = 'auth/REFRESH_AUTHENTICATION'

export function authenticated({ idToken, accessToken }) {
  return {
    type: AUTHENTICATED,
    payload: {
      idToken,
      accessToken,
    },
  }
}

export function authorizationError(error) {
  return {
    type: AUTHORIZATION_ERROR,
    payload: {
      error,
    },
  }
}

export function unrecoverableError(error) {
  return {
    type: UNRECOVERABLE_ERROR,
    payload: {
      error,
    },
  }
}

export function loginSuccess(idToken, accessToken) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      idToken,
      accessToken,
    },
  }
}

export function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
  }
}

export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  }
}

export function requestRenew() {
  return {
    type: REFRESH_AUTHENTICATION,
  }
}
