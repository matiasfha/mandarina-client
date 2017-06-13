import { call, put, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import moment from 'moment'

import { navigate } from '../redux/actions'

import {
  AUTHENTICATED,
  LOGOUT_REQUEST,
  REFRESH_AUTHENTICATION,
  loginSuccess,
  logoutSuccess,
  requestRenew,
} from './actions'
import { storeToken, logout, getExp } from './session'
import Auth from './auth'

function* saveTokenAndLogin({ idToken, accessToken }) {
  yield call(storeToken, { idToken, accessToken })
  yield put(loginSuccess(idToken, accessToken))
  yield put(requestRenew())
}

function* renewTime() {
  const exp = moment(getExp())
  const time = exp.subtract(1, 'minute').milliseconds()
  yield delay(time)
  const payload = yield call(Auth.renew)
  yield call(saveTokenAndLogin, payload)
}

function* setAuthentication({ payload }) {
  try {
    yield call(saveTokenAndLogin, payload)
    yield put(navigate('/pos'))
  } catch (e) {
    throw e
  }
}

function* signout() {
  yield call(logout)
  yield put(logoutSuccess())
  yield put(navigate('/'))
}

export default function* authSaga() {
  yield takeLatest(AUTHENTICATED, setAuthentication)
  yield takeLatest(LOGOUT_REQUEST, signout)
  yield takeLatest(REFRESH_AUTHENTICATION, renewTime)
}
