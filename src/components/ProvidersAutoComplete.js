import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AutoComplete as MUIAutoComplete } from 'material-ui'
import { Field } from 'redux-form'
import { AutoComplete } from 'redux-form-material-ui'
import CircularProgress from 'material-ui/CircularProgress'

import { Providers } from '../api'

class ProvidersAutocomplete extends Component {
  state = {
    providers: [],
  }

  async componentWillMount() {
    const providers = await Providers.get()
    this.setState({
      providers,
    })
  }

  render() {
    const { providers } = this.state
    const { onNewRequest } = this.props
    return providers.length === 0
      ? <CircularProgress />
      : <Field
          name="provider"
          component={AutoComplete}
          floatingLabelText="Proveedor"
          openOnFocus
          filter={MUIAutoComplete.fuzzyFilter}
          dataSource={providers}
          dataSourceConfig={{
            text: 'name',
            value: 'id',
          }}
          onUpdateInput={this.retrieveSuggestions}
          onNewRequest={onNewRequest}
        />
  }
}

ProvidersAutocomplete.propTypes = {
  onNewRequest: PropTypes.func.isRequired,
}

export default ProvidersAutocomplete
