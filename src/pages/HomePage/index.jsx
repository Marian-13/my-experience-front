import React from 'react';
import { Redirect } from 'react-router-dom';

import { isUserLoggedIn } from '../../lib/auth';

export default class HomePage extends React.Component {
  render() {
    return isUserLoggedIn() ? <Redirect to="/experiences" /> : <Redirect to="/login" />;
  }
}
