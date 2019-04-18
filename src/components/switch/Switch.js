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
    checkedText: PropTypes.string,
    size: PropTypes.oneOf(['small', 'default', 'large']),
    onChange: PropTypes.func
  }

  static defaultProps = {
    className: '',
    prefix: 'zhui-switch',
    type: 'line',
    checked: false,
    disabled: false,
    checkedText: '',
    size: 'default',
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
      size,
      checkedText,
      ...others
    } = this.props;

    const classes = cn(className, prefix, {
      [`${prefix}-disabled`]: disabled,
      [`${prefix}-checked`]: checked,
      [`${prefix}-${type}`]: type,
      [`${prefix}-${size}`]: size && size !== 'default'
    });

    return (
      <div className={classes} {...others} onClick={this.toggle}>
        <span className="zhui-switch-inner">{checkedText}</span>
      </div>
    );
  }
}