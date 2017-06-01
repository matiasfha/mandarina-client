//@flow
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { isAuthenticated } from '../auth/auth.js'

const PrivateRoute = ({ component: Component, ...rest }): Component => (
  <Route {...rest} render={props => (
    isAuthenticated() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)


export default PrivateRoute