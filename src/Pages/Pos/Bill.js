import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import FlatButton from 'material-ui/FlatButton'
import AttachMoney from 'material-ui/svg-icons/editor/attach-money'
import Delete from 'material-ui/svg-icons/action/delete'
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table'

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

class Bill extends Component {
  state = {
    selected: [],
  }

  getTotalPrice = () => this.props.products.reduce((a, b) => a + b.totalPrice, 0)

  deleteSelected = () => this.state.selected.forEach(index => this.props.products.splice(index, 1))

  handleRowSelection = selectedRows => {
    this.setState({
      selected: selectedRows,
    })
  }

  isSelected = index => this.state.selected.indexOf(index) !== -1

  render() {
    const { products } = this.props
    const { selected } = this.state

    return (
      <Paper style={styles.paper} zDepth={1}>
        <Subheader>
          Productos Seleccionados: {products.length}

          <FlatButton
            label="Borrar seleccionados"
            labelPosition="before"
            primary
            disabled={selected.length <= 0}
            icon={<Delete />}
            onTouchTap={this.deleteSelected}
          />

        </Subheader>

        <TableList
          styles={styles}
          selectable
          header={['Nombre', 'Proveedor', 'Cantidad', 'Precio Unitario', 'Valor Total']}
          onRowSelection={this.handleRowSelection}
          rowContent={products}
          isSelected={this.isSelected}
        />

        <Divider />
        <div className="row">
          <Table allRowsSelected={false} selectable={false}>
            <TableBody displayRowCheckbox={false}>
              <TableRow selectable={false}>
                <TableRowColumn>Total a pagar</TableRowColumn>
                <TableRowColumn>{this.getTotalPrice()}</TableRowColumn>
                <TableRowColumn>
                  <FlatButton
                    label="Realizar Venta"
                    labelPosition="before"
                    primary
                    icon={<AttachMoney />}
                  />
                </TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Paper>
    )
  }
}

Bill.propTypes = {
  dispatch: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired, // eslint-disable-line
}

const mapStateToProps = ({ pos: { selected } }) => ({
    products: selected,
  })

export default connect(mapStateToProps)(Bill)
