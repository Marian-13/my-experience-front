import React from 'react';
import M from 'materialize-css';
import { Col, Icon, Row } from 'react-materialize';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.png';

import { isUserLoggedIn } from '../../lib/auth';

export default class Navbar extends React.Component {
  ref = React.createRef()

  componentDidMount() {
    M.Sidenav.init(this.ref.current);
  }

  renderLogo() {
    return (
      <div className="brand-logo">
        <div className="valign-wrapper" style={{ 'padding': '0 5px' }}>
          <img src={logo} width="30px" alt="Logo" className="hide-on-small-only"/>
          <i style={{ 'paddingLeft': '5px' }}>
            <span className="hide-on-small-only">My</span>Experience
          </i>
        </div>
      </div>
    );
  }

  renderHamburgerForMobile() {
    return (
      <a href="#" data-target="mobile-nav" className="sidenav-trigger">
        <Icon>menu</Icon>
      </a>
    );
  }

  renderLinks() {
    return (
      <ul className="right hide-on-med-and-down">
        {isUserLoggedIn ? (
          <React.Fragment>
            <li><Link to="/profile">Profile</Link></li>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <li><Link to="/login">Sign In</Link></li>
            <li><Link to="/register">Sign Up</Link></li>
          </React.Fragment>
        )}
      </ul>
    );
  }

  renderLinksForMobile() {
    return (
      <ul ref={this.ref} className="sidenav" id="mobile-nav">
        {isUserLoggedIn ? (
          <React.Fragment>
            <li><Link to="/profile">Profile</Link></li>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <li><Link to="/login">Sign In</Link></li>
            <li><Link to="/register">Sign Up</Link></li>
          </React.Fragment>
        )}
      </ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        <nav>
          <div className="nav-wrapper">
            <Row>
              <Col s={12} l={8} className="offset-l2">
                {this.renderLogo()}
                {this.renderHamburgerForMobile()}
                {this.renderLinks()}
              </Col>
            </Row>
          </div>
        </nav>

        {this.renderLinksForMobile()}
      </React.Fragment>
    );
  }
}
