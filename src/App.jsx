import './global_stylesheets_and_javascripts';
import './initializers/materialize-css';
import './initializers/OwnClient';

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import ExperienceListPage from './pages/ExperienceListPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import LogoutAction from './actions/LogoutAction';
import NotFoundPage from './pages/NotFoundPage';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/experiences" component={ExperienceListPage} />
          <Route path="/logout" component={LogoutAction} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
