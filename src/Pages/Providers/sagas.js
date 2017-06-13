import { takeLatest, call, put } from 'redux-saga/effects'
import { Providers } from '../../api'
import { PROVIDERS_SUGGESTION_REQUEST, suggestionSuccess, suggestionFailed } from './actions'

function* getSuggestions({ payload }) {
  try {
    const data = yield call(Providers.getSuggestion, payload.term)
    yield put(suggestionSuccess, data)
  } catch (error) {
    yield put(suggestionFailed, error)
  }
}

export default function* providers() {
  yield takeLatest(PROVIDERS_SUGGESTION_REQUEST, getSuggestions)
}
