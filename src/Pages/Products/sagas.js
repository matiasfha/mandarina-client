import { call, takeLatest, put } from 'redux-saga/effects'

import { PRODUCTS_REQUEST, requestProductsFailed, requestProductsSuccess } from './actions'
import { Products } from '../../api'

function* requestProducts() {
  try {
    const list = yield call(Products.get)
    yield put(requestProductsSuccess(list))
  } catch (e) {
    yield put(requestProductsFailed(e))
  }
}

export default function* productsSaga() {
  yield takeLatest(PRODUCTS_REQUEST, requestProducts)
}
