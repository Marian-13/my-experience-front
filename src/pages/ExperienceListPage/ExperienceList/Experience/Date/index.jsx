import React from 'react';
import PropTypes from 'prop-types';

export default class Date extends React.PureComponent {
  static propTypes = {
    createdAt: PropTypes.string
  }

  static defaultProps = {
    createdAt: ''
  }

  render() {
    const { createdAt } = this.props;

    if (!createdAt) return null;

    return <p>{createdAt}</p>;
  }
}
