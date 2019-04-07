import React from 'react';
import PropTypes from 'prop-types';

export default class Topic extends React.PureComponent {
  static propTypes = {
    text: PropTypes.string
  }

  static defaultProps = {
    text: ''
  }

  render() {
    const { text } = this.props;

    return <h6>{text}</h6>;
  }
}
