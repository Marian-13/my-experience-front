import React from 'react';

import './global_stylesheets_and_javascripts';
import './initializers/materialize-css';
import './initializers/OwnClient';

import LoginPage from './pages/LoginPage';

export default class App extends React.Component {
  render() {
    return <LoginPage />;
  }
}
