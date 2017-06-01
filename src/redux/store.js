import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

import rootReducer from './reducers'
import rootSaga from './sagas'

export const history = createHistory()

const sagaMiddleware = createSagaMiddleware()
const middlewares = [ routerMiddleware(history), sagaMiddleware ]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSaga)

export default store