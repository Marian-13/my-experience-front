import React from 'react';
import PropTypes from 'prop-types';

import Experience from './Experience';

export default class ExperienceList extends React.Component {
  static propTypes = {
    experiences: PropTypes.arrayOf(
      PropTypes.shape({
        topic: PropTypes.string,
        tags: PropTypes.array,
        quickDescription: PropTypes.string,
        createdAt: PropTypes.string
      })
    )
  }

  static defaultProps = {
    experiences: []
  }

  render() {
    const { experiences } = this.props;

    if (!experiences.length) return <p>You have no experiences yet</p>;

    return experiences.map((experience) => (
      <Experience
        topic={experience.topic}
        tags={experience.tags}
        quickDescription={experience.quickDescription}
        createdAt={experience.createdAt}
      />
    ));
  }
}
