import { createReducer } from 'redux-create-reducer'
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from './actions'

const initialState = {
  idToken: null,
  accessToken: null,
}

const session = createReducer(initialState, {
  [LOGIN_SUCCESS](state, { payload: { idToken, accessToken } }) {
    return {
      ...state,
      idToken,
      accessToken,
    }
  },
  [LOGOUT_SUCCESS](state) {
    return { ...state, idToken: null, accessToken: null }
  },
})

export default session
