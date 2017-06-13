import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import { debounce } from 'throttle-debounce'
import Fuse from 'fuse.js'
import { noop } from '../utils'
import SearchBox from './SearchBox'

class TableList extends Component {
  state = {
    elements: this.props.rowContent,
  }

  filterElements = (event, value) => {
    const options = {
      keys: ['name', 'salePrice'],
    }
    const fuse = new Fuse(this.state.elements, options)
    const results = fuse.search(value)
    this.setState({
      elements: results,
    })
  }

  render() {
    const {
      styles,
      selectable,
      header,
      onRowSelection = noop,
      isSelected = noop,
      rowConfig,
      height,
      searchable,
    } = this.props
    const { elements } = this.state

    return (
      <Table
        allRowsSelected={false}
        style={styles.table}
        onRowSelection={onRowSelection}
        multiSelectable={selectable}
        hoverable
        striped
        height={height}
      >
        <TableHeader
          displaySelectAll={false}
          enableSelectAll={false}
          adjustForCheckbox={selectable}
        >
          {searchable &&
            <TableRow>
              <TableHeaderColumn colSpan={header.length}>
                <SearchBox onChange={debounce(200, this.filterElements)} />
              </TableHeaderColumn>
            </TableRow>}
          <TableRow>
            {header.map(item => <TableHeaderColumn key={item}>{item}</TableHeaderColumn>)}
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={selectable} stripedRows>
          {elements.map((element, index) => (
            <TableRow key={element.id} selected={isSelected(index)}>
              {rowConfig.map(item => <TableRowColumn key={item}>{element[item]}</TableRowColumn>)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
}
TableList.propTypes = {
  styles: PropTypes.object.isRequired, // eslint-disable-line
  selectable: PropTypes.bool.isRequired,
  header: PropTypes.arrayOf(PropTypes.string).isRequired,
  onRowSelection: PropTypes.func,
  rowContent: PropTypes.arrayOf(PropTypes.object).isRequired,
  isSelected: PropTypes.func,
  rowConfig: PropTypes.arrayOf(PropTypes.string),
  height: PropTypes.string,
  searchable: PropTypes.bool,
}

TableList.defaultProps = {
  isSelected: noop,
  onRowSelection: noop,
  rowConfig: [],
  height: '450px',
  searchable: false,
}

export default TableList
