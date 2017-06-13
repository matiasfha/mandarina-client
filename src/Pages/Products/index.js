import React, { Component } from 'react'
import { connect } from 'react-redux'

import PageBase from '../../components/PageBase'
import Form from './form'
import ProductsTable from './table'

class ProductsPage extends Component {
  state = {
    selected: null,
  }

  onProductSelected = product => this.setState({ selected: product })

  handleFormSubmit = values => console.log(values)

  render() {
    const { products } = this.props.productsState
    return (
      <PageBase
        title="Productos"
        navigation="Mandarina / Productos"
        leftTitle="Agregar/Editar Producto"
        left={<Form selected={this.state.selected} onSubmit={this.handleFormSubmit} />}
        rightTitle={`Listado de Productos`}
        right={<ProductsTable editProduct={this.onProductSelected} products={products} />}
      />
    )
  }
}

const mapStateToProps = ({ products }) => ({
  productsState: products,
})

export default connect(mapStateToProps)(ProductsPage)
