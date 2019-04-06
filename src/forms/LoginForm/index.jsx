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

  componentDidMount() {
    document.getElementById('email').focus();
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handleEmailKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();

      document.getElementById('password').focus();
    }
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  handlePasswordKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();

      document.getElementById('submit').focus();
    }
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
            id="submit"
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
            id="email"
            s={12}
            label="Email"
            type="email"
            onChange={this.handleEmailChange}
            onKeyDown={this.handleEmailKeyDown}
          />

          <TextInput
            id="password"
            s={12}
            label="Password"
            type="password"
            onChange={this.handlePasswordChange}
            onKeyDown={this.handlePasswordKeyDown}
          />
        </Row>
      </Card>
    );
  }
}
