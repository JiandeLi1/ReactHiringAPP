import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Register from './containers/register/register'
import Login from './containers/login/login'
import Main from './containers/main/main'
import store from './redux/store'
import { Provider } from 'react-redux'
import  './test/socketio_test'


ReactDOM.render(
  <Provider store={ store }>
    <HashRouter>
    <Switch>
      <Route exact path='/' component={Register}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/main' component={ Main }></Route>
    </Switch>
  </HashRouter>
</Provider>,
  document.getElementById('root')
);

