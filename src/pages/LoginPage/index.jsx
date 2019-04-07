import React from 'react';
import { Col, Row } from 'react-materialize';

import LoginForm from '../../forms/LoginForm';

export default class LoginPage extends React.Component {
  render() {
    return (
      <Row>
        <Col s={12} m={8} l={6} offset="m2 l3">
          <LoginForm />
        </Col>
      </Row>
    );
  }
}
