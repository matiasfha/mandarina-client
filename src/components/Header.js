import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import ViewModule from 'material-ui/svg-icons/action/view-module'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import { white } from 'material-ui/styles/colors'


import { requestLogot } from '../auth/actions'


const style = {
  appBar: {
    position: 'fixed',
    top: 0,
    overflow: 'hidden',
    maxHeight: 57,
  },
  menuButton: {
    marginLeft: 10,
  },
  iconsRightContainer: {
    marginLeft: 20,
  },
}

const Menu = connect()(({ dispatch }) => (
  <IconMenu
    color={white}
    iconButtonElement={<IconButton><ViewModule color={white} /></IconButton>}
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    onItemTouchTap={(event, child) => {
      let url = '/'
      switch(child.key){
        case 1: url = '/'; break
        case 2: url = '/productos'; break
        case 3: url = '/proveedores'; break
        case 4: url = '/clientes'; break
        case 5: url = '/ventas'; break
        case 6: url = '/cuentas'; break
        default: url = '/'; break
      }
      dispatch(push(url))
    }}
  >
    <MenuItem key={1} primaryText="POS" />
    <MenuItem key={2} primaryText="Productos" />
    <MenuItem key={3} primaryText="Proveedores" />
    <MenuItem key={4} primaryText="Clientes" />
    <MenuItem key={5} primaryText="Ventas" />
    <MenuItem key={6} primaryText="Cuentas" />
  </IconMenu>
))

const Dots = connect()(({ dispatch }) => (
  <IconMenu
    color={white}
    iconButtonElement={<IconButton><MoreVertIcon color={white} /></IconButton>}
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    onItemTouchTap={() => dispatch(requestLogot())}
  >
    <MenuItem primaryText="Salir" />
  </IconMenu>
))


const Header = ({ title, searchBox = false }) => (
  <AppBar
    title={title}
    iconElementRight={
      <div style={style.iconsRightContainer}>
        <Menu />
        <Dots />
      </div>
    }
  />
)

export default Header
