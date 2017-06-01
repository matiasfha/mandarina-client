import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import PrivateRoute from './components/PrivateRoute.js'
import store, { history } from './redux/store'
import Pos from './pos'
import Login from './login'
import Header from './components/Header'
import { isAuthenticated } from './auth/auth'
import { loginSuccess } from './auth/actions'
import { getToken, getProfile } from './auth/session'

import ThemeDefault from './theme-default';
import './App.css';

if(isAuthenticated()) {
  store.dispatch(loginSuccess(getToken(), getProfile()) )
}

const styles = {
  header: {
    paddingLeft: 0
  },
  container: {
    margin: '10px 20px 20px 15px',
    paddingLeft: 0
  }
};

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <div>
              <Header styles={styles.header}/>
              <div style={styles.container}>
                <PrivateRoute path="/" component={Pos} />
                <Route path="/login" component={Login} />
              </div>
            </div>
          </ConnectedRouter>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
