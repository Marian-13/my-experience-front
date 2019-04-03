import React from 'react';
import { Redirect } from 'react-router-dom';

import { deleteAuthToken } from '../../lib/auth';

export default class LogoutAction extends React.Component {
  componentDidMount() {
    deleteAuthToken();
  }

  render() {
    return (
      <Redirect to="/" />
    );
  }
}
