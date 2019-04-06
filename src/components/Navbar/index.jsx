import React from 'react';
import M from 'materialize-css';
import { Col, Icon, Row } from 'react-materialize';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.png';

import { isUserLoggedIn, deleteAuthToken } from '../../lib/auth';
import { redirectTo } from '../../lib/path';

export default class Navbar extends React.Component {
  sidenavRef = React.createRef()
  userDropdownRef = React.createRef()

  componentDidMount() {
    M.Sidenav.init(this.sidenavRef.current);
    M.Dropdown.init(this.userDropdownRef.current);
  }

  handleLogoutLinkClick = () => {
    deleteAuthToken();

    redirectTo('/');
  }

  renderProfileLink() {
    return <Link to="/profile">Profile</Link>;
  }

  renderLogoutLink() {
    return <a onClick={this.handleLogoutLinkClick}>Sign out</a>;
  }

  renderLogo() {
    return (
      <div className="brand-logo">
        <div className="valign-wrapper" style={{ 'padding': '0 5px' }}>
          <img src={logo} width="30px" alt="Logo" className="hide-on-small-only"/>
          <i style={{ 'paddingLeft': '5px' }}>
            <span className="hide-on-small-only">My</span> Experience
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

  renderActionsDropdown() {
    return isUserLoggedIn() && (
      <ul id="actions-dropdown" className="dropdown-content">
        <li>{this.renderProfileLink()}</li>
        <li>{this.renderLogoutLink()}</li>
      </ul>
    );
  }

  renderLinks() {
    return (
      <ul className="right hide-on-med-and-down">
        {isUserLoggedIn() ? (
          <React.Fragment>
            <li>
              <a ref={this.userDropdownRef} className="dropdown-trigger" href="#" data-target="actions-dropdown">
                <Icon>person</Icon>
              </a>
            </li>
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
      <ul ref={this.sidenavRef} className="sidenav" id="mobile-nav">
        {isUserLoggedIn() ? (
          <React.Fragment>
            <li>{this.renderProfileLink()}</li>
            <li>{this.renderLogoutLink()}</li>
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
        {this.renderActionsDropdown()}
      </React.Fragment>
    );
  }
}
