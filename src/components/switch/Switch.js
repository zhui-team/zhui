import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'astro-classname';

import './index.scss';

export default class Switch extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    prefix: PropTypes.string,
    size: PropTypes.oneOf(['default', 'medium', 'large']),
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    onChange: PropTypes.func
  }

  static defaultProps = {
    className: '',
    prefix: 'zhui-switch',
    size: 'default',
    checked: false,
    disabled: false,
    loading: false,
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
      checked,
      disabled,
      loading,
      ...others
    } = this.props;

    const classes = cn(className, prefix, {
      [`${prefix}-disabled`]: disabled,
      [`${prefix}-checked`]: checked,
      [`${prefix}-loading`]: loading
    });

    return (
      <div class={classes} {...others} onClick={this.toggle}>
        switch
      </div>
    )
  }
}