import React from 'react';
import PropTypes from 'prop-types';
import { CardPanel } from 'react-materialize';

import Topic from './Topic';
import Tags from './Tags';
import QuickDescription from './QuickDescription';
import Date from './Date';

export default class Experience extends React.Component {
  static propTypes = {
    topic: PropTypes.string,
    tags: PropTypes.array,
    quickDescription: PropTypes.string,
    createdAt: PropTypes.string
  }

  static defaultProps = {
    topic: '',
    tags: [],
    quickDescription: '',
    createdAt: ''
  }

  render() {
    const { topic, tags, quickDescription, createdAt } = this.props;

    return (
      <CardPanel>
        <Topic text={topic} />
        <Tags tags={tags} />
        <QuickDescription text={quickDescription} />
        <Date createdAt={createdAt} />
      </CardPanel>
    );
  }
}
