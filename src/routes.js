import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import App from './App'
import {Provider} from 'react-redux';
import store from './dux/store';
import Store from './Components/Store';
import Cart from './Components/Cart';
const routes = (
  <HashRouter>
    <Provider store={store}>
  <Switch>
    <Route component={ Store } path="/store" />
    <Route component={ Cart } path="/cart" />
    <Route component={ App } exact path="/" />
  </Switch>
  </Provider>
  </HashRouter>
)
export default routes;