import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import cn from 'astro-classname';
import Textarea from './Textarea';

import './index.scss';

const BLACK_LIST = [
  'className',
  'type',
  'width',
  'prefix',
  'size',
  'addoneBefore',
  'addoneAfter',
  'autoFocus',
  'onPressEnter',
  'icon'
]

export default class Input extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    width: PropTypes.number,
    placeholder: PropTypes.string,
    prefix: PropTypes.string,
    size: PropTypes.oneOf(['large', 'medium', 'small']),
    value: PropTypes.any,
    addonBefore: PropTypes.node,
    addonAfter: PropTypes.node,
    icon: PropTypes.node,
    disabled: PropTypes.bool,
    autoFocus: PropTypes.bool,
    onPressEnter: PropTypes.func,
    onKeyDown: PropTypes.func
  }

  static defaultProps = {
    className: '',
    type: 'text',
    prefix: 'zhui-input',
    disabled: false,
    autoFocus: false
  }

  componentDidMount() {
    const { autoFocus } = this.props;

    if(autoFocus) {
      this.input.focus();
    }
  }

  handleKeyDown = (e) => {
    const { onKeyDown, onPressEnter } = this.props;
    if(onKeyDown) {
      onKeyDown(e);
    }

    if(e.keyCode === 13 && onPressEnter) {
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
      type,
      size,
      addonBefore,
      addonAfter,
      icon,
      prefix,
      disabled
    } = this.props;

    const isTextarea = type.toLowerCase() === 'textarea';
    const classes = cn('zhui-input-wrapper', className, {
      [`${prefix}-${size}`]: size,
      [`${prefix}-disabled`]: disabled,
      [`${prefix}-group`]: !isTextarea && (addonAfter || addonBefore)
    })
    const nodeProps = omit(this.props, BLACK_LIST);

    if(isTextarea) {
      return (
        <Textarea 
          className={classes}
          width={width}
          prefix={prefix}
          handleKeyDown={this.handleKeyDown}
          nodeProps={nodeProps}
        />
      )
    }
    
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
          className={`${prefix}-input`}
          {...nodeProps}
          onKeyDown={this.handleKeyDown}
          value={value}
          ref={this.saveInput}
        />
        {
          addonAfter &&
          <span className={`${prefix}-group-addon`}>{addonAfter}</span>
        }
      </div>
    )
  }
}