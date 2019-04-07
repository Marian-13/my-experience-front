import React from 'react';
import PropTypes from 'prop-types';

export default class Tag extends React.PureComponent {
  static propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
  }

  static defaultProps = {
    text: '',
    color: ''
  }

  render() {
    const { text, color } = this.props;

    if (!text) return null;

    return <span className={`new badge ${color}`} data-badge-caption={text} style={{ float: 'left', marginLeft: '0' }} />;
  }
}
