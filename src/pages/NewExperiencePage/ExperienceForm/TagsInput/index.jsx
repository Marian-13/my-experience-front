import React from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css';
import classNames from 'classnames';

import styles from './styles.module.scss';

export default class TagsInput extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    s: PropTypes.number,
    label: PropTypes.string,
    onChange: PropTypes.func
  }

  static defaultProps = {
    id: '',
    s: 12,
    label: '',
    onChange: () => {}
  }

  state = {
    value: '',
    isFocused: false,
    isMounted: false
  }

  chipsRef = React.createRef()

  componentDidMount() {
    M.Chips.init(this.chipsRef.current);

    this.setState({ isMounted: true });
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value }, () => (this.props.onChange(this.getTags())));
  }

  handleKeyDown = (event) => {
    if (event.keyCode === 13) this.setState({ value: '' });
  }

  handleFocus = () => {
    this.setState({ isFocused: true });
  }

  handleBlur = () => {
    this.setState({ isFocused: false });
  }

  getTags() {
    if (!this.state.isMounted) return [];

    return M.Chips.getInstance(this.chipsRef.current).chipsData.map(item => item.tag);
  }

  render() {
    const { id, s } = this.props;
    const { value, isFocused } = this.state;

    const wrapperClassName = classNames('input-field col', { [`s${s}`]: s });
    const labelClassName = classNames(styles.label, { active: isFocused || value || this.getTags().length });
    const spanClassName = classNames({ 'teal-text darken-4': isFocused });

    return (
      <div className={wrapperClassName}>
        <div ref={this.chipsRef} className="chips">
          <input
            id={id}
            value={value}
            className={styles.input}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
        </div>
        <label className={labelClassName} htmlFor={id}>
          <span className={spanClassName}>
            Tags
          </span>
        </label>
      </div>
    );
  }
}
