import React from 'react'
import { Route } from 'react-router'
import { Switch, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Pos, Login, Products } from './Pages/'
import PrivateRoute from './components/PrivateRoute'
import { isAuthenticated } from './auth/session'

import './App.css'

const NoMatch = ({ location, authenticated }) => {
  if (authenticated) {
    return (
      <div>
        <h3>No match for <code>{location.pathname}</code></h3>
      </div>
    )
  }
  return (
    <Redirect
      to={{
        pathname: '/',
        state: { from: location },
      }}
    />
  )
}
NoMatch.propTypes = {
  location: PropTypes.string.isRequired,
  authenticated: PropTypes.bool.isRequired,
}

const App = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <PrivateRoute exact path="/pos" component={Pos} />
    <PrivateRoute exact path="/products" component={Products} />
    <Route component={props => <NoMatch {...props} authenticated={isAuthenticated()} />} />
  </Switch>
)

export default App
