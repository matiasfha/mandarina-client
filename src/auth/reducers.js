import { createReducer } from 'redux-create-reducer'
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from './actions'

const initialState = {
  token: null,
  profile: null
}

const session = createReducer(initialState,{
  [LOGIN_SUCCESS](state, { payload }) {
    return {...state, token: payload.token, profile: payload.profile}
  },
  [LOGOUT_SUCCESS](state) {
    return {...state, token: null, profile: null}
  }
})

export default session