import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import cn from 'astro-classname';

import './index.scss';

const BLACK_LIST = [
  'className',
  'type',
  'width',
  'prefix',
  'size',
  'theme',
  'addonBefore',
  'addonAfter',
  'autoFocus',
  'onPressEnter',
  'icon'
];

export default class Input extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    width: PropTypes.number,
    placeholder: PropTypes.string,
    prefix: PropTypes.string,
    size: PropTypes.oneOf(['large', 'medium', 'small']),
    theme: PropTypes.oneOf(['default', 'primary', 'success', 'danger']),
    value: PropTypes.any,
    addonBefore: PropTypes.node,
    addonAfter: PropTypes.node,
    icon: PropTypes.node,
    disabled: PropTypes.bool,
    autoFocus: PropTypes.bool,
    onPressEnter: PropTypes.func,
    onKeyDown: PropTypes.func,
    onChange: PropTypes.func
  }

  static defaultProps = {
    className: '',
    type: 'text',
    theme: 'default',
    prefix: 'zhui-input',
    disabled: false,
    autoFocus: false
  }

  componentDidMount() {
    const { autoFocus } = this.props;

    if (autoFocus) {
      this.input.focus();
    }
  }

  handleKeyDown = (e) => {
    const { onKeyDown, onPressEnter } = this.props;
    if (onKeyDown) {
      onKeyDown(e);
    }

    if (e.keyCode === 13 && onPressEnter) {
      onPressEnter(e);
    }
  }

  focus() {
    this.input.focus();
  }

  saveInput = (node) => {
    this.input = node;
  }

  render() {
    const {
      className,
      width,
      value,
      theme,
      size,
      addonBefore,
      addonAfter,
      icon,
      prefix,
      disabled
    } = this.props;

    const classes = cn('zhui-input-wrapper', className, {
      [`${prefix}-wrapper-${size}`]: size && size !== 'medium',
      [`${prefix}-group`]: addonAfter || addonBefore
    });

    const nodeProps = omit(this.props, BLACK_LIST);

    return (
      <div className={classes} style={{ width }}>
        {
          addonBefore &&
          <span className={`${prefix}-group-addon`}>{addonBefore}</span>
        }
        {
          icon && !addonBefore &&
          <span className={`${prefix}-icon-wrapper`}>{icon}</span>
        }
        <input
          className={cn(prefix, {
            [`${prefix}-${theme}`]: theme && theme !== 'default',
            [`${prefix}-disabled`]: disabled,
          })}
          onKeyDown={this.handleKeyDown}
          value={value}
          ref={this.saveInput}
          {...nodeProps}
        />
        {
          addonAfter &&
          <span className={`${prefix}-group-addon`}>{addonAfter}</span>
        }
      </div>
    );
  }
}