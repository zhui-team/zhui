import * as React from 'react';
import { createPortal } from 'react-dom';
import cn from 'astro-classname';

import '../portal/index.css';

export interface IPortalProps {
  className?: string;
  selector?: string;
  center?: boolean;
  visiable?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export default class Portal extends React.Component<IPortalProps> {
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

    const classes: string = cn('zhui-portal', className, {
      'zhui-portal-center': center,
      'zhui-portal-hide': !visiable
    });

    const selectorContainer: HTMLElement = document.querySelector(selector);

    if (!selectorContainer) return null;

    return createPortal(
      <div className={classes} {...others}>
        {children}
      </div>,
      selectorContainer
    );
  }
}
