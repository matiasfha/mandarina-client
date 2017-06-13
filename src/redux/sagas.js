import { all, takeLatest, call, put } from 'redux-saga/effects'
import { history } from '../redux/store'
import authSaga from '../auth/sagas'

import { requestProducts } from '../Pages/Products/actions'
import productsSaga from '../Pages/Products/sagas'

import { loginSuccess } from '../auth/actions'
import { getToken, getAccessToken, isAuthenticated } from '../auth/session'

function* navigation({ payload }) {
  try {
    const { location } = payload
    yield call(history.replace, location)
  } catch (e) {
    throw e
  }
}

function* initApp() {
  // call to request all resources
  if (isAuthenticated()) {
    yield put(requestProducts())
    yield put(loginSuccess(getToken(), getAccessToken()))
  }
  yield takeLatest('router/NAVIGATE', navigation)
}

function* rootSaga() {
  try {
    yield all([authSaga(), productsSaga(), initApp()])
  } catch (e) {
    console.log(e) // eslint-disable-line
  }
}

export default rootSaga
