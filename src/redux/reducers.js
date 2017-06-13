import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import session from '../auth/reducers'
import products from '../Pages/Products/reducer'
import pos from '../Pages/Pos/reducer'

const rootReducer = combineReducers({
  router: routerReducer,
  form: formReducer,
  session,
  products,
  pos,
})

export default rootReducer
