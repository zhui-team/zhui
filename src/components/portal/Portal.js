import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import './index.scss';

export default class Portal extends PureComponent {
  static propTypes = {
    center: PropTypes.bool,
    dom: PropTypes.string
  }

  static defaultProps = {
    center: false,
    dom: 'body'
  }

  constructor(props) {
    super(props);

    this.dom = document.querySelector(props.dom);
    this.node = window.document.createElement('div');
    this.dom.appendChild(this.node);
  }

  componentWillUnmount() {
    this.dom.removeChild(this.node);
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
