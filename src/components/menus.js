import React from 'react'
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart'
import Dashboard from 'material-ui/svg-icons/action/dashboard'
import SupervisorAccount from 'material-ui/svg-icons/action/supervisor-account'
import Assessment from 'material-ui/svg-icons/action/assessment'
import AccountBalance from 'material-ui/svg-icons/action/account-balance'
import GroupWork from 'material-ui/svg-icons/action/group-work'

const menus = [
  { text: 'POS', icon: <Dashboard />, link: '/pos', private: false, key: 1 },
  { text: 'Productos', icon: <ShoppingCart />, link: '/products', private: false, key: 2 },
  { text: 'Clientes', icon: <SupervisorAccount />, link: '/clients', private: false, key: 3 },
  { text: 'Proveedores', icon: <GroupWork />, link: '/providers', private: true, key: 4 },
  { text: 'Ventas', icon: <Assessment />, link: '/sales', private: true, key: 5 },
  { text: 'Cuentas', icon: <AccountBalance />, link: '/bills', private: true, key: 6 },
]

export default menus
