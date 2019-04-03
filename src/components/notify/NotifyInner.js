import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import Portal from '../portal/Portal';

import './index.css';

export default class NotifyInner extends PureComponent {
  static propTypes = {
    status: PropTypes.string,
    message: PropTypes.string,
    selector: PropTypes.string
  }

  static defaultProps = {
    status: 'success',
    message: '',
    selector: ''
  }

  render() {
    const {
      message,
      selector,
      close,
      isIn
    } = this.props;

    return (
      <Portal selector={selector}>
        <CSSTransition
          in={isIn}
          timeout={8000}
          classNames="zhui-notify"
          onExited={() => close()}
        >
          <div className="zhui-notify-inner">
            {message}
          </div>
        </CSSTransition>
      </Portal>
    );
  }
}