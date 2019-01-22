import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import cn from 'astro-classname';

import './index.scss';

const BLACK_LIST = [
  'type',
  'size',
  'htmlType',
  'block',
  'component',
  'disabled',
  'loading',
  'className',
  'outline',
  'round',
  'prefix',
  'href',
  'target',
  'kong'
];
const isTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;

export default class Button extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(['default', 'primary', 'success', 'danger']),
    size: PropTypes.oneOf(['large', 'medium', 'small']),
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    outline: PropTypes.bool,
    round: PropTypes.bool,
    block: PropTypes.bool,
    prefix: PropTypes.string,
    kong: PropTypes.oneOf(['', 'mei', 'muyun', 'ganglan', 'yuanshan'])
  }

  static defaultProps = {
    className: '',
    type: 'default',
    size: 'medium',
    disabled: false,
    loading: false,
    outline: false,
    round: false,
    block: false,
    prefix: 'zhui-btn',
    kong: ''
  }

  isInsertSpace() {
    const { children } = this.props;
    return React.Children.count(children) === 1;
  }

  wrapValueBySpan(children, isNeedInserted) {
    if (children == null) {
      return;
    }

    const SPACE = isNeedInserted ? ' ' : '';

    return React.Children.map(children, child => {
      if (typeof child === 'string') {
        if (isTwoCNChar.test(child)) {
          return <span>{child.split('').join(SPACE)}</span>;
        }
        return <span>{child}</span>;
      }

      return child;
    });
  }

  handleClick = e => {
    const { disabled, onClick } = this.props;

    if (disabled) {
      return;
    }

    if (onClick) {
      onClick(e);
    }
  }

  renderLink(classes, children) {
    const { component, disabled, href = '', target } = this.props;
    const Node = component || 'a';
    const nodeProps = omit(this.props, BLACK_LIST);

    return (
      <Node
        {...(disabled ? {} : { href, target })}
        {...nodeProps}
        className={classes}
        onClick={this.handleClick}
      >
        {children}
      </Node>
    );
  }

  renderButton(classes, children) {
    const { component, disabled, loading, htmlType } = this.props;
    const Node = component || 'button';
    const nodeProps = omit(this.props, BLACK_LIST);

    return (
      <Node
        {...nodeProps}
        {...(htmlType ? { type: htmlType } : {})}
        className={classes}
        disabled={disabled || loading}
        onClick={this.handleClick}
      >
        {children}
      </Node>
    );
  }

  render() {
    const {
      href,
      target,
      className,
      type,
      size,
      disabled,
      loading,
      outline,
      round,
      block,
      prefix,
      children,
      kong
    } = this.props;
    let renderName = href || target ? 'renderLink' : 'renderButton';
    const classes =  cn(prefix, className, {
      [`${prefix}-${type}${outline ? '-outline' : ''}`]: type,
      [`${prefix}-${size}`]: size && size !== 'medium',
      [`${prefix}-disabled`]: disabled,
      [`${prefix}-loading`]: loading,
      [`${prefix}-block`]: block,
      [`${prefix}-round`]: round,
      [`${round || outline || disabled ? '' : prefix}-kong-${kong}`]: kong
    });

    const wrapperChildren = this.wrapValueBySpan(
      children,
      this.isInsertSpace()
    );

    return this[renderName](classes, wrapperChildren);
  }
}
