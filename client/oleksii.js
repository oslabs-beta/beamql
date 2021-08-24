import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import App from './App.jsx';

export default function Oleksii() {
 return (
     <BrowserRouter>
             <Switch>
             <Route exact path="/">
              <App />
            </Route>
              <Route exact path="/login">
              <Login />
              </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </Switch>
     </BrowserRouter>
 );
}
