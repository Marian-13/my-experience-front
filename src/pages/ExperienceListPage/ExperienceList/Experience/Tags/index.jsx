import React from 'react';
import PropTypes from 'prop-types';

import Tag from './Tag';

export default class Tags extends React.Component {
  static propTypes = {
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        color: PropTypes.string
      })
    )
  }

  static defaultProps = {
    tags: []
  }

  render() {
    const { tags } = this.props;

    if (!tags.length) return null;

    return (
      <div style={{ overflow: 'auto' }}>
        {tags.map((tag) => (
          <Tag text={tag.text} color={tag.color} />
        ))}
      </div>
    );
  }
}
