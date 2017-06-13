import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import { isAuthenticated } from '../auth/session'

const PrivateRoute = ({ component: Component, ...rest }): Component => (
  <Route
    {...rest}
    render={props => (isAuthenticated() ? <Component {...props} /> : <Redirect to="/" />)}
  />
)

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object, // eslint-disable-line
}

PrivateRoute.defaultProps = {
  location: {},
}

export default PrivateRoute
