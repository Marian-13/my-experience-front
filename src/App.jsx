import './global_stylesheets_and_javascripts';
import './initializers/materialize-css';
import './initializers/OwnClient';

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ExperienceListPage from './pages/ExperienceListPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/experiences" component={ExperienceListPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
