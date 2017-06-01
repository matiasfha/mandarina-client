import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Auth, { isAuthenticated } from './auth'
import { authenticated, unrecoverableError, authorizationError } from './actions'

class Lock extends Component {
  constructor(props) {
    super(props)
    this.lock = Auth
    this.lock.resumeAuth((error) => {
      if (error) throw error
    })
    this._onAuthenticated()
    this._onAuthorizationError()
    this._onUnrecoverableError()
    this.accessToken = null
  }

  componentDidMount() {
    if (!isAuthenticated() && this.accessToken===null) {
      this.lock.show()
    }
  }

  _onAuthenticated() {
    this.lock.setEvent('authenticated', ({ accessToken }) => {
      this.accessToken = accessToken
      this.props.dispatch(authenticated(accessToken))
    }
    
      
    )
  }

  _onUnrecoverableError() {
    this.lock.setEvent('unrecoverable_error', error =>
      this.props.dispatch(unrecoverableError(error))
    )
  }

  _onAuthorizationError() {
    this.lock.setEvent('authorization_error', error =>
      this.props.dispatch(authorizationError(error))
    )
  }

  render() {
    return <div id="lock-container" />
  }
}

Lock.proptypes = {
  dispatch: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
}

export default connect()(Lock)
