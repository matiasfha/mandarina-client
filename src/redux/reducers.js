import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import session from '../auth/reducers'

const rootReducer = combineReducers({
  router: routerReducer,
  session
})

export default rootReducer
