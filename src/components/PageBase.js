import React from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import globalStyles from '../styles'

import Header from './Header'

const styles = {
  container: {
    margin: '80px 20px 20px 15px',
    paddingLeft: 0,
  },
}

const PageBase = props => {
  const { navigation, left, leftTitle, right, rightTitle, top } = props

  return (
    <div>
      <Header title="Mandarina" />
      <div style={styles.container}>
        <span style={globalStyles.navigation}>{navigation}</span>
        <div className="row">
          {top}
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-md m-b-15">
            <Paper style={globalStyles.paper}>
              <h3>{leftTitle}</h3>
              <Divider />
              {left}
              <div style={globalStyles.clear} />
            </Paper>
          </div>

          <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 col-md m-b-15">
            <Paper style={globalStyles.paper}>
              <h3>{rightTitle}</h3>
              <Divider />
              {right}
              <div style={globalStyles.clear} />
            </Paper>
          </div>

        </div>
      </div>
    </div>
  )
}

PageBase.propTypes = {
  leftTitle: PropTypes.string,
  rightTitle: PropTypes.string,
  navigation: PropTypes.string.isRequired,
  left: PropTypes.element.isRequired,
  right: PropTypes.element.isRequired,
  top: PropTypes.arrayOf(PropTypes.element),
}

PageBase.defaultProps = {
  leftTitle: '',
  rightTitle: '',
  top: [],
}

export default PageBase
