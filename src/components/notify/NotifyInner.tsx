import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import Portal from '../portal/Portal';
import cn from 'astro-classname';

import '../notify/index.css';

export interface INotifyInnerProps {
  className?: string;
  message?: string;
  selector?: string;
  theme?: string;
  position?: IPositionProps;
  prefix?: string;
  close?: () => void;
  isIn?: boolean;
}

export interface IPositionProps {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

export default class NotifyInner extends React.Component<INotifyInnerProps> {
  static defaultProps = {
    className: '',
    message: '',
    selector: '',
    theme: 'light',
    prefix: 'zhui-notify',
    position: {}
  }

  render() {
    let {
      className,
      message,
      selector,
      close,
      position,
      theme,
      prefix,
      isIn
    } = this.props;

    const classes: string = cn(className, `${prefix}-inner`, {
      [`${prefix}-${theme}`]: theme
    });

    let styles: React.CSSProperties = Object.assign({}, position);
    if (!position.left && !position.right) {
      styles.right = 30;
    }

    return (
      <Portal selector={selector} style={styles}>
        <CSSTransition
          in={isIn}
          timeout={500}
          classNames="zhui-notify"
          onExited={() => close()}
        >
          <div className={classes}>
            <span>{message}</span>
          </div>
        </CSSTransition>
      </Portal>
    );
  }
}