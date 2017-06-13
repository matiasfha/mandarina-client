import React from 'react'
import PropTypes from 'prop-types'
import CircularProgress from 'material-ui/CircularProgress'

import TableList from '../../components/table'

const styles = {
  paper: {
    padding: 10,
    height: 480,
    width: '100%',
    margin: 20,
    marginLeft: 0,
    display: 'inline-block',
  },
  table: {
    height: 300,
  },
}

const ProductsTable = ({ products, editProduct }) =>
  (products.length === 0
    ? <CircularProgress size={80} thickness={5} />
    : <TableList
        styles={styles}
        selectable={false}
        header={['Nombre', 'Proveedor', 'Stock', 'Precio Compra', 'Valor Neto', 'Precio Venta']}
        onRowSelection={editProduct}
        rowContent={products}
        rowConfig={['name', 'provider_id', 'stock', 'purchasePrice', 'netPrice', 'salePrice']}
        searchable
      />)

ProductsTable.propTypes = {
  editProduct: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ProductsTable
