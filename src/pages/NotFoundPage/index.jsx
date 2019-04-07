import React from 'react';
import {
  Button,
  Card,
  Col,
  Icon,
  Row
} from 'react-materialize';
import { Link } from 'react-router-dom';

import BackButton from '../../components/BackButton';

export default class NotFoundPage extends React.Component {
  render() {
    return (
      <Row>
        <Col s={12} m={8} l={6} offset="m2 l3">
          <Card actions={[
            <Row key={0}>
              <Link to="/">
                <Button waves="light">
                  <Icon right>home</Icon>
                  Go Home!
                </Button>
              </Link>

              <BackButton text="Go Back!"/>
            </Row>
          ]}>
            <h5>Sorry, the page you requested page was not found.</h5>
          </Card>
        </Col>
      </Row>
    );
  }
}
