import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import { white } from 'material-ui/styles/colors'

import { requestLogout } from '../auth/actions'
import { navigate } from '../redux/actions'
import menus from './menus'

const style = {
  appBar: {
    position: 'fixed',
    top: 0,
    overflow: 'hidden',
    maxHeight: 57,
    paddingLeft: 0,
    marginBottom: 40,
  },
  menuButton: {
    marginLeft: 10,
  },
  iconsRightContainer: {
    marginLeft: 20,
  },
  menuItem: {
    color: white,
    fontSize: 14,
  },
}

const Dots = connect()(({ dispatch }) => (
  <IconMenu
    color={white}
    iconButtonElement={<IconButton><MoreVertIcon color={white} /></IconButton>}
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    onItemTouchTap={() => dispatch(requestLogout())}
  >
    <MenuItem primaryText="Salir" />
  </IconMenu>
))

const Header = ({ title, dispatch }) => (
  <AppBar
    style={style.appBar}
    title={title}
    iconElementLeft={
      <IconMenu
        style={style.menuButton}
        color={white}
        iconButtonElement={<IconButton><MenuIcon color={white} /></IconButton>}
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        {menus.map(menu => (
          <MenuItem
            key={menu.key}
            style={style.menuItem}
            primaryText={menu.text}
            leftIcon={menu.icon}
            onTouchTap={() => dispatch(navigate(menu.link))}
          />
        ))}
      </IconMenu>
    }
    iconElementRight={
      <div style={style.iconsRightContainer}>
        <Dots />
      </div>
    }
  />
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
}

Header.defaultProps = {
  styles: {},
}

export default connect()(Header)
