import React from 'react';
import { Link } from 'react-router-dom';
import {
  Badge,
  CardPanel,
  Col,
  Row,
  TextInput
} from 'react-materialize';

import ExperienceList from './ExperienceList';

export default class ExperienceListPage extends React.Component {
  render() {
    return (
      <Row>
        <Col s={12} l={8} className="offset-l2">
          <div style={{ borderLeft: '1px solid rgba(0,0,0,0.14)', borderRight: '1px solid rgba(0,0,0,0.14)' }}>
            <Row>
              <Col s={12} m={4} l={6} offset="m3 l3">
                <Row>
                  <TextInput s={12} icon="search" placeholder="Search" />

                  <div className="right-align">
                    <Link to="/experiences/new">Add New Experience</Link>
                  </div>
                </Row>

                <ExperienceList
                  experiences={[{
                    topic: 'How to render HTML string inside React Component?',
                    tags: [{ text: 'React', color: 'blue' }, { text: 'HTML' }, { text: 'HTML string' }],
                    quickDescription: 'Use dangerouslySetInnerHTML property of any React element in jsx',
                    createdAt: 'Sun April 7, 02:51'
                  }]}
                />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    );
  }
}
