import { call, put, takeLatest } from 'redux-saga/effects'
import { history } from '../redux/store'

import { AUTHENTICATED, LOGOUT_REQUEST, loginSuccess, logoutSuccess } from './actions'
import Auth from './auth'
import { storeToken, storeProfile, logout } from './session'

function* getProfile(action) {
  try {
    const token = action.payload.token
    yield call(storeToken, token)
    const profile = yield call(Auth.getProfile, token)
    yield call(storeProfile, profile)
    yield put(loginSuccess(token, profile))
    yield call(history.replace, '/')
  } catch (e) {
    console.log(e)
  }
}

function* singout() {
  yield call(logout)
  yield put(logoutSuccess())
  yield call(history.replace,'/login')
}

export default function* authSaga() {
  yield takeLatest(AUTHENTICATED, getProfile)
  yield takeLatest(LOGOUT_REQUEST, singout)
}
