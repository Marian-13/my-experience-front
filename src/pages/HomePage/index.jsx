import React from 'react';
import { Redirect } from 'react-router-dom';

export default class HomePage extends React.Component {
  render() {
    return <Redirect to="/experiences" />;
  }
}
