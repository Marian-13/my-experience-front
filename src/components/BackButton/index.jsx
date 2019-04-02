import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Icon,
} from 'react-materialize';
import { withRouter } from 'react-router';

class BackButton extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
  }

  static defaultProps = {
    text: '',
    onClick: () => {}
  }

  handleClick = () => {
    this.props.onClick();

    this.props.history.goBack();
  }

  render() {
    const { text } = this.props;

    return (
      <Button waves="light" onClick={this.handleClick}>
        <Icon right>arrow_back</Icon>
        {text}
      </Button>
    );
  }
}

export default withRouter(BackButton);
