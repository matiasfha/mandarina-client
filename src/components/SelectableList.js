import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List, makeSelectable } from 'material-ui/List'

const styles = {
  list: {
    height: 350,
    overflowY: 'auto',
    backgroundColor: '#fff !important',
  },
}
function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    }

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      })
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      })
    }

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
          style={styles.list}
        >
          {this.props.children}
        </ComposedComponent>
      )
    }
  }
}

export default wrapState(makeSelectable(List))
