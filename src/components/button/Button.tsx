import * as React from 'react';
import cn from 'astro-classname';
import omit from 'lodash/omit';
import ButtonGroup from './Group';

import '../button/index.css';

const BLACK_LIST = [
  'theme',
  'size',
  'htmlType',
  'block',
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

export interface IButtonProps {
  className?: string;
  href?: string;
  onClick?: React.MouseEventHandler<Element>;
  target?: string;
  prefix?: string;
  htmlType?: 'button' | 'submit' | 'reset';
  theme?: string;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  outline?: boolean;
  round?: boolean;
  block?: boolean;
  kong?: string;
}

export default class Button extends React.Component<IButtonProps> {
  static Group: typeof ButtonGroup;
  static defaultProps = {
    className: '',
    theme: 'default',
    size: 'medium',
    disabled: false,
    loading: false,
    outline: false,
    round: false,
    block: false,
    kong: '',
    prefix: 'zhui-btn'
  }

  isInsertSpace(): boolean {
    const { children } = this.props;
    return React.Children.count(children) === 1;
  }

  wrapValueBySpan(
    children: React.ReactNode,
    isNeedInserted: boolean
  ): React.ReactNode {
    if (children == null) {
      return null;
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

  handleClick: React.MouseEventHandler = e => {
    const { disabled, onClick } = this.props;

    if (disabled) {
      return;
    }

    if (onClick) {
      onClick(e);
    }
  }

  renderLink(
    classes: string,
    children: React.ReactNode
  ) {
    const { disabled, href = '', target } = this.props;
    const nodeProps: any = omit(this.props, BLACK_LIST);

    return (
      <a
        {...(disabled ? {} : { href, target })}
        {...nodeProps}
        className={classes}
        onClick={this.handleClick}
      >
        {children}
      </a>
    );
  }

  renderButton(
    classes: string,
    children: React.ReactNode
  ) {
    const { disabled, loading, htmlType } = this.props;
    const nodeProps: any = omit(this.props, BLACK_LIST);

    return (
      <button
        {...nodeProps}
        {...(htmlType ? { type: htmlType } : {})}
        className={classes}
        disabled={disabled || loading}
        onClick={this.handleClick}
      >
        {children}
      </button>
    );
  }

  render() {
    const {
      href,
      target,
      className,
      theme,
      size,
      disabled,
      loading,
      outline,
      round,
      block,
      children,
      prefix,
      kong
    } = this.props;
    let renderName: string = href || target ? 'renderLink' : 'renderButton';
    const classes: string =  cn(prefix, className, {
      [`${prefix}-${theme}${outline ? '-outline' : ''}`]: theme && !kong,
      [`${prefix}-${size}`]: size && size !== 'medium',
      [`${prefix}-disabled`]: disabled,
      [`${prefix}-loading`]: loading,
      [`${prefix}-block`]: block,
      [`${prefix}-round`]: round,
      [`${round || outline || disabled ? '' : prefix}-kong-${kong}`]: kong
    });

    const wrapperChildren: React.ReactNode = this.wrapValueBySpan(
      children,
      this.isInsertSpace()
    );

    return this[renderName](classes, wrapperChildren);
  }
}