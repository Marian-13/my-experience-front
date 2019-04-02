import React from 'react';
import {
  Button,
  Card,
  Col,
  Icon,
  Row
} from 'react-materialize';
import { Link } from 'react-router-dom'

export default class NotFoundPage extends React.Component {
  render() {
    return (
      <Row>
        <Col s={12} m={6} l={4} offset="m3 l4">
          <Card actions={[
            <>
              <Link to="/" key={0}>
                <Button waves="light" className="green green darken-3">
                  <Icon right>home</Icon>
                  Go Home!
                </Button>
              </Link>

              <Link to="/" key={1}>
                <Button waves="light" className="green green darken-3">
                  <Icon right>arrow_back</Icon>
                  Go Back!
                </Button>
              </Link>
            </>
          ]}>
            <h5>Sorry, the page you requested page was not found.</h5>
          </Card>
        </Col>
      </Row>
    );
  }
}
