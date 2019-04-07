import React from 'react';
import { Col, Row } from 'react-materialize';
import { BrowserRouter } from 'react-router-dom';

import Navbar from '../../components/Navbar';

export default class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <BrowserRouter>
        <Navbar />
        <Row>
          <Col s={12} l={8} className="offset-l2">
            <div style={{ borderLeft: '1px solid rgba(0,0,0,0.14)', borderRight: '1px solid rgba(0,0,0,0.14)' }}>
              <Row>
                {children}
              </Row>
            </div>
          </Col>
        </Row>
      </BrowserRouter>
    );
  }
}
