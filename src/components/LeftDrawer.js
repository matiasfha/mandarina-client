import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Drawer from 'material-ui/Drawer'
import { spacing, typography } from 'material-ui/styles'
import { white, blue600 } from 'material-ui/styles/colors'
import MenuItem from 'material-ui/MenuItem'
import Avatar from 'material-ui/Avatar'

import { navigate } from '../redux/actions'
import menus from './menus'
import background from '../images/material_bg.png'

const styles = {
  logo: {
    cursor: 'pointer',
    fontSize: 22,
    color: typography.textFullWhite,
    lineHeight: `${spacing.desktopKeylineIncrement}px`,
    fontWeight: typography.fontWeightLight,
    backgroundColor: blue600,
    paddingLeft: 40,
    height: 56,
  },
  menuItem: {
    color: white,
    fontSize: 14,
  },
  avatar: {
    div: {
      padding: '15px 0 20px 15px',
      backgroundImage: `url(${background})`,
      height: 45,
    },
    icon: {
      float: 'left',
      display: 'block',
      marginRight: 15,
      boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)',
    },
    span: {
      paddingTop: 12,
      display: 'block',
      color: 'white',
      fontWeight: 300,
      textShadow: '1px 1px #444',
    },
  },
}

const LeftDrawer = ({ navDrawerOpen, username, picture, dispatch, history }) => (
  <Drawer docked open={navDrawerOpen}>
    <div style={styles.logo}>
      Mandarina Sell System
    </div>
    <div style={styles.avatar.div}>
      <Avatar src={picture} size={50} style={styles.avatar.icon} />
      <span style={styles.avatar.span}>{username}</span>
    </div>
    <div>
      {menus.map(menu => (
        <MenuItem
          key={menu.key}
          style={styles.menuItem}
          primaryText={menu.text}
          leftIcon={menu.icon}
          onTouchTap={() => dispatch(navigate(menu.link))}
        />
      ))}
    </div>
  </Drawer>
)

LeftDrawer.propTypes = {
  navDrawerOpen: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  const { nickname, picture } = state.session.profile || { nickname: '', picture: '' }
  return { username: nickname, picture }
}
export default withRouter(connect(mapStateToProps)(LeftDrawer))
