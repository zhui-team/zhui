import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import cn from 'astro-classname';

import './index.css';

const BLACK_LIST = [
  'type',
  'size',
  'htmlType',
  'block',
  'component',
  'disabled',
  'className',
  'outline',
  'prefix',
  'href',
  'target'
];
const isTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;

export default class Button extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(['default', 'primary', 'success', 'danger']),
    size: PropTypes.oneOf(['large', 'medium', 'small']),
    disabled: PropTypes.bool,
    prefix: PropTypes.string
  }

  static defaultProps = {
    className: '',
    type: 'default',
    size: 'medium',
    disabled: false,
    outline: false,
    prefix: 'zhui-btn'
  }

  isInsertSpace() {
    const { children } = this.props;
    return React.Children.count(children) === 1;
  }

  wrapValueBySpan(children, isNeedInserted) {
    if(children == null) {
      return;
    }

    const SPACE = isNeedInserted ? ' ' : '';

    return React.Children.map(children, child => {
      if(typeof child === 'string') {
        if(isTwoCNChar.test(child)) {
          return <span>{child.split('').join(SPACE)}</span>;
        }
        return <span>{child}</span>
      }

      return child;
    })
  }

  handleClick = e => {
    const { disabled, onClick } = this.props;

    if(!!disabled){
      return;
    }

    if(onClick){
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
    const { component, disabled, htmlType } = this.props;
    const Node = component || 'button';
    const nodeProps = omit(this.props, BLACK_LIST);

    return (
      <Node
        {...nodeProps}
        {...(htmlType ? { type: htmlType } : {})}
        className={classes}
        disabled={disabled}
        onClick={this.handleClick}
      >
        {children}
      </Node>
    );
  }

  render(){
    const {
      href,
      target,
      className,
      type,
      size,
      disabled,
      outline,
      prefix,
      children
    } = this.props;
    let renderName = href || target ? 'renderLink' : 'renderButton'
    const classes =  cn(prefix, className, {
      [`${prefix}-${type}${outline ? '-outline' : ''}`]: type,
      [`${prefix}-${size}`]: size && size !== 'medium',
      [`${prefix}-disabled`]: disabled
    });

    const wrapperChildren = this.wrapValueBySpan(
      children,
      this.isInsertSpace()
    );

    return this[renderName](classes, wrapperChildren);
  }
}
