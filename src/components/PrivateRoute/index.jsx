import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { isUserLoggedIn } from '../../lib/auth';

export default class PrivateRoute extends React.Component {
  render() {
    if (isUserLoggedIn()) {
      return <Route {...this.props} />;
    } else {
      return <Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />;
    }
  }
}
