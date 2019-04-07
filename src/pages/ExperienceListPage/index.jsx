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
      <Col s={12} m={8} l={6} offset="m2 l3">
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
    );
  }
}
