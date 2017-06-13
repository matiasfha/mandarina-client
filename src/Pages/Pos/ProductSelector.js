import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
import Avatar from 'material-ui/Avatar'
import { debounce } from 'throttle-debounce'
import Fuse from 'fuse.js'
import CircularProgress from 'material-ui/CircularProgress'
import SearchBar from 'material-ui-search-bar'

import SelectableList from '../../components/SelectableList'
import { productSelected } from './actions'

const ahita = 'http://www.ahita.cl/wp-content/themes/ahita/assets/images/logo-ahi-ta.png'

const styles = {
  paper: {
    padding: 10,
    height: 480,
    width: '100%',
    margin: 20,
    marginLeft: 0,
    display: 'inline-block',
  },
}

const RightAvatar = ({ image, stock }) => (
  <div style={{ top: 0, position: 'absolute', right: '16px' }}>
    <div className="row" style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
      <Avatar src={image} />
    </div>
    <div className="row">
      <span className="col-xs-12" style={{ textAlign: 'right', fontSize: 12, fontWeight: 'bold' }}>
        Stock {stock}
      </span>
    </div>
  </div>
)
RightAvatar.propTypes = {
  image: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
}

class ProductSelector extends Component {
  state = {
    products: this.props.products,
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      products: newProps.products,
    })
  }

  handleItemClick = id => {
    const product = this.props.products.find(item => item.id === id)
    this.props.dispatch(productSelected(product))
  }

  filterElements = value => {
    const list = this.props.products
    let results
    if (value) {
      const options = {
        keys: ['name'],
      }
      const fuse = new Fuse(list, options)
      results = fuse.search(value)
    } else {
      results = list
    }
    this.setState({
      products: results,
    })
  }

  render() {
    const { products } = this.state
    const { requesting } = this.props

    return requesting
      ? <CircularProgress size={80} thickness={5} />
      : <Paper style={styles.paper} zDepth={1}>
          <SearchBar
            onChange={debounce(100, this.filterElements)}
            onRequestSearch={this.filterElements}
          />
          <br />
          <SelectableList defaultValue={1}>
            <Subheader>{products.length} Productos encontrados</Subheader>
            {products.map(item => (
              <div key={item.id}>
                <ListItem
                  value={item.id}
                  onTouchTap={() => this.handleItemClick(item.id)}
                  primaryText={item.name}
                  secondaryText={<strong>$ {item.salePrice}</strong>}
                  rightAvatar={<RightAvatar image={ahita} stock={item.stock} />}
                />
                <Divider inset />
              </div>
            ))}

          </SelectableList>
        </Paper>
  }
}
ProductSelector.propTypes = {
  dispatch: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  requesting: PropTypes.bool.isRequired,
  selected: PropTypes.arrayOf(PropTypes.object).isRequired, // eslint-disable-line
}

const mapStateToProps = ({ products: { products, requesting }, pos: { selected } }) => ({
  products,
  requesting,
  selected,
})

export default connect(mapStateToProps)(ProductSelector)
