import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'astro-classname';
import RateItem from './RateItem';

import './index.css';

export default class Rate extends PureComponent {
  static propTypes = {
    value: PropTypes.number,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
  }

  static defaultProps = {
    className: '',
    value: 0,
    disabled: false,
    onChange: () => null
  }

  constructor(props) {
    super(props);
    this.state = {
      value: props.value || 0,
      clickValue: props.value
    };
  }

  handleClick = (e, index) => {
    this.setState({
      value: index + 1,
      clickValue: index + 1
    });

    this.props.onChange(e, index);
  }

  handleHover = (e, index) => {
    const { value } = this.state;
    if (index + 1 !== value) {
      this.setState({
        value: index + 1
      });
    }
  }

  handleLeave = () => {
    const { value, clickValue } = this.state;
    if (value !== clickValue) {
      this.setState({
        value: clickValue
      });
    }
  }

  renderRateList() {
    const { disabled } = this.props;
    let list = [];
    let activeIndex = this.state.value;

    activeIndex = (activeIndex >= 0 && activeIndex <= 5) ? activeIndex : 0;
    for (let i = 0; i < 5; i++) {
      list.push(
        <RateItem
          key={i}
          index={i}
          active={i < activeIndex ? true : false}
          onClick={this.handleClick}
          onHover={this.handleHover}
          disabled={disabled}
        />
      );
    }

    return list;
  }

  render() {
    const {
      className,
      value,
      disabled,
      ...others
    } = this.props;

    const classes = cn(className, 'zhui-rate', {
      'zhui-rate-disabled': disabled
    });

    return (
      <div
        onMouseLeave={this.handleLeave}
        className={classes}
        {...others}
      >
        {this.renderRateList()}
      </div>
    );
  }
}
