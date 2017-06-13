import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Auth0Lock from 'auth0-lock'

import { authenticated, unrecoverableError, authorizationError } from './actions'
import logo from '../images/logo.png'
import { isAuthenticated } from './session'

class Lock extends Component {
  constructor(props) {
    super(props)
    this.lock = new Auth0Lock(
      process.env.REACT_APP_AUTH0_CLIENTID,
      process.env.REACT_APP_AUTH0_DOMAIN,
      {
        language: 'es',
        languageDictionary: {
          title: 'Mandarina POS',
        },
        rememberLastLogin: false,
        closable: false,
        theme: {
          logo,
          primaryColor: '#76beb2',
        },
        auth: {
          autoParseHash: true,
          responseType: 'id_token token',
          params: {
            scope: 'openid email profile',
          },
        },
      }
    )
    this.setEvents()
  }

  componentWillMount() {
    if (window.location.hash) {
      this.lock.resumeAuth(window.location.hash, error => {
        if (error) {
          throw error
        }
      })
    }
  }

  componentDidMount() {
    if (!isAuthenticated()) {
      this.lock.show()
    }
  }

  setEvents = () => {
    this.lock.on('authenticated', ({ idToken, accessToken }) => {
      this.token = { idToken, accessToken }
      this.props.dispatch(authenticated(this.token))
    })

    this.lock.on('unrecoverable_error', error => this.props.dispatch(unrecoverableError(error)))

    this.lock.on('authorization_error', error => this.props.dispatch(authorizationError(error)))
  }

  render() {
    return isAuthenticated ? null : <div id="lock-container" />
  }
}

Lock.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(Lock)
