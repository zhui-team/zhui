import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import cn from 'astro-classname';

import './index.css';

export default class Portal extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    selector: PropTypes.string,
    center: PropTypes.bool,
    visiable: PropTypes.bool
  }

  static defaultProps = {
    className: '',
    selector: 'body',
    center: false,
    visiable: true
  }

  render() {
    const {
      className,
      children,
      center,
      selector,
      visiable,
      ...others
    } = this.props;

    const classes = cn('zhui-portal', className, {
      'zhui-portal-center': center,
      'zhui-portal-hide': !visiable
    });

    const selectorContainer = document.querySelector(selector);

    if (!selectorContainer) return null;

    return createPortal(
      <div className={classes} {...others}>
        {children}
      </div>,
      selectorContainer
    );
  }
}
