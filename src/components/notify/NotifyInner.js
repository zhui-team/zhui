import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import Portal from '../portal/Portal';
import cn from 'astro-classname';

import './index.css';

export default class NotifyInner extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    message: PropTypes.string,
    selector: PropTypes.string,
    theme: PropTypes.oneOf(['light', 'dark']),
    position: PropTypes.object,
    prefix: PropTypes.string
  }

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

    const classes = cn(className, `${prefix}-inner`, {
      [`${prefix}-${theme}`]: theme
    });

    let styles = Object.assign({}, position);
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