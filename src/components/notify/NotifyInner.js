import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import Portal from '../portal/Portal';

import './index.css';

export default class NotifyInner extends PureComponent {
  static propTypes = {
    message: PropTypes.string,
    selector: PropTypes.string,
    position: PropTypes.object
  }

  static defaultProps = {
    message: '',
    selector: '',
    position: {}
  }

  render() {
    let {
      message,
      selector,
      close,
      position,
      isIn
    } = this.props;

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
          <div className="zhui-notify-inner">
            <span>{message}</span>
          </div>
        </CSSTransition>
      </Portal>
    );
  }
}