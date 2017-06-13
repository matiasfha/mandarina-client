import React from 'react'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import Divider from 'material-ui/Divider'
import { grey400 } from 'material-ui/styles/colors'
import { TextField } from 'redux-form-material-ui'
import { reduxForm, Field } from 'redux-form'

import ProvidersAutocomplete from '../../components/ProvidersAutoComplete'

const styles = {
  toggleDiv: {
    maxWidth: 300,
    marginTop: 40,
    marginBottom: 5,
  },
  toggleLabel: {
    color: grey400,
    fontWeight: 100,
  },
  buttons: {
    marginTop: 30,
    float: 'right',
  },
  saveButton: {
    marginLeft: 5,
  },
}

const validate = values => {
  const errors = {}
  Object.keys(values).forEach(key => {
    if (values[key] === '') {
      errors[key] = 'Required'
    }
  })
  return errors
}

const required = value => (value == null ? 'Required' : undefined)
const number = value => (isNaN(value) ? 'Invalid Value' : undefined)

const onProviderSelected = value => console.log(value)

const Form = ({ selected, handleSubmit, pristine, reset, submitting }) => (
  <form onSubmit={handleSubmit}>
    <Field
      name="name"
      component={TextField}
      hintText="Nombre"
      floatingLabelText="Nombre"
      fullWidth
      validate={required}
    />
    <Field
      name="code"
      hintText="Código"
      floatingLabelText="Código"
      fullWidth
      component={TextField}
      validate={required}
    />
    <Field
      name="purchasePrice"
      hintText="Precio de Compra (neto + IVA)"
      floatingLabelText="Precio de Compra"
      fullWidth
      component={TextField}
      type="number"
      validate={[required, number]}
    />
    <Field
      name="netPrice"
      hintText="Valor Neto"
      floatingLabelText="Valor Neto"
      fullWidth
      component={TextField}
      type="number"
      validate={[required, number]}
    />
    <Field
      name="salePrice"
      hintText="Precio de Venta"
      floatingLabelText="Precio de Venta"
      fullWidth
      component={TextField}
      type="number"
      validate={[required, number]}
    />
    <Field
      name="stock"
      hintText="Stock"
      floatingLabelText="Stock"
      fullWidth
      component={TextField}
      type="number"
      validate={[required, number]}
    />

    <ProvidersAutocomplete onNewRequest={onProviderSelected} validate={required} />
    <Divider />

    <div style={styles.buttons}>
      <RaisedButton label="Cancel" disabled={pristine || submitting} onTouchTap={reset} />
      <RaisedButton
        label="Save"
        style={styles.saveButton}
        type="submit"
        primary
        disabled={pristine || submitting}
      />
    </div>
  </form>
)

Form.propTypes = {
  selected: PropTypes.object, // eslint-disable-line
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
}

export default reduxForm({
  form: 'ProductsForm',
})(Form)
