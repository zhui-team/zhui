import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'astro-classname';

import './index.css';

export default class Switch extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    prefix: PropTypes.string,
    type: PropTypes.oneOf(['line', 'circle']),
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
  }

  static defaultProps = {
    className: '',
    prefix: 'zhui-switch',
    type: 'line',
    checked: false,
    disabled: false,
    onChange: () => null
  }

  toggle = e => {
    const { onChange, checked } = this.props;
    const evt = {
      ...e,
      target: {
        ...this.props,
        type: 'switch',
        checked: checked
      }
    };

    onChange(evt);
  }

  render() {
    const {
      className,
      prefix,
      type,
      checked,
      disabled,
      loading,
      ...others
    } = this.props;

    const classes = cn(className, prefix, {
      [`${prefix}-disabled`]: disabled,
      [`${prefix}-checked`]: checked,
      [`${prefix}-${type}`]: type
    });

    return (
      <div className={classes} {...others} onClick={this.toggle}>
        <span className="zhui-switch-inner"></span>
      </div>
    );
  }
}