import React from 'react';
import PropTypes from 'prop-types';

export default class QuickDescription extends React.PureComponent {
  static propTypes = {
    text: PropTypes.string
  }

  static defaultProps = {
    text: ''
  }

  render() {
    const { text } = this.props;

    if (!text) return <p>No description provided</p>;

    return <p dangerouslySetInnerHTML={{ __html: text }}></p>;
  }
}
