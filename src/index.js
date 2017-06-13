import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import registerServiceWorker from './registerServiceWorker'

import store, { history } from './redux/store'
import App from './App'
import ThemeDefault from './theme-default'
import './index.css'

injectTapEventPlugin()

const render = Component =>
  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <Router history={history}>

          <Component />

        </Router>
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
  )

registerServiceWorker()

render(App)

if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept()
  const NextApp = require('./App').default
  render(NextApp)
}
