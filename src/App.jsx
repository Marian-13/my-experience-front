import './global_stylesheets_and_javascripts';
import './initializers/materialize-css';
import './initializers/OwnClient';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import ExperienceListPage from './pages/ExperienceListPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';

export default class App extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <PrivateRoute path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/experiences" exact component={ExperienceListPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    );
  }
}
