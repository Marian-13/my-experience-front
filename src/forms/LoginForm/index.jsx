import React from 'react';
import {
  Button,
  Card,
  Row,
  TextInput
} from 'react-materialize';
import M from 'materialize-css';

import { saveAuthToken } from '../../lib/auth';
import { redirectTo } from '../../lib/path';
import client from '../../api/OwnClient';

export default class LoginForm extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  handleLogin = () => {
    const { email, password } = this.state;
    const data = { auth: { email, password } };

    client
      .post('/user_token', data)
      .then(({ data }) => {
        saveAuthToken(data.token);

        redirectTo('/');
      })
      .catch(() => {
        M.toast({ html: 'Invalid email and/or password.' });
      });
  }

  render() {
    return (
      <Card
        actions={[
          <Button
            key={0}
            s={12}
            waves='light'
            onClick={this.handleLogin}
            >
              Sign in
            </Button>
        ]}
      >
        <Row>
          <h5 className="center-align">
            Sign in to <i>My Experience</i>
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
        </Row>
      </Card>
    );
  }
}
