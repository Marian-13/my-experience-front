import React from 'react';
import { Col, Row } from 'react-materialize';
import { BrowserRouter } from 'react-router-dom';

import Navbar from '../../components/Navbar';

import styles from './styles.module.scss';

export default class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <BrowserRouter>
        <Navbar />
        <Row>
          <Col s={12} l={8} className="offset-l2">
            <div className={styles.wrapper}>
              {children}
            </div>
          </Col>
        </Row>
      </BrowserRouter>
    );
  }
}
