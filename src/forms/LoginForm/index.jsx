import React from 'react';

import {
  Button,
  Card,
  Row,
  TextInput
} from 'react-materialize';
import M from 'materialize-css';

import { saveAuthToken } from '../../lib/auth';
import client from '../../api/OwnClient';

export default class LoginForm extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleEmailChange = (_event, email) => {
    this.setState({ email });
  }

  handlePasswordChange = (_event, password) => {
    this.setState({ password });
  }

  handleLogin = () => {
    const { email, password } = this.state;
    const data = { auth: { email, password } };

    client
      .post('/user_token', data)
      .then(({ data }) => {
        saveAuthToken(data.token);
      })
      .catch(() => {
        M.toast({ html: 'Invalid email and/or password.' });
      });
  }

  render() {
    return (
      <Card>
        <Row>
          <h5 className="center-align">
            Log in to <i>My Experience</i>
          </h5>
          <TextInput
            s={12}
            label="Email"
            type="email"
            onChange={this.handleEmailChange}
          />
          <TextInput
            s={12}
            label="Password"
            type="password"
            onChange={this.handlePasswordChange}
          />
          <Button
            s={12}
            waves='light'
            onClick={this.handleLogin}
          >
            Log in
          </Button>
        </Row>
      </Card>
    );
  }
}
