import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createBrowserHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

import rootReducer from './reducers'
import rootSaga from './sagas'

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()
const middlewares = [routerMiddleware(history), sagaMiddleware]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose //eslint-disable-line

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)))

sagaMiddleware.run(rootSaga)

export default store
