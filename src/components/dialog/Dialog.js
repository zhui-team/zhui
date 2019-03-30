import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import './index.scss';

export default class Dialog extends PureComponent {
  static propTypes = {
    center: PropTypes.bool
  }

  static defaultProps = {
    center: false
  }

  constructor(props) {
    super(props);

    const doc = window.document;
    this.node = doc.createElement('div');
    doc.body.appendChild(this.node);
  }

  componentWillUnmount() {
    window.document.body.removeChild(this.node);
  }

  render() {
    const {
      center,
      children
    } = this.props;

    return createPortal(
      <div
        className={`zhui-dialog ${center ? 'zhui-dialog-center' : ''}`}
        {...this.props}
      >
        {children}
      </div>,
      this.node
    );
  }
}
