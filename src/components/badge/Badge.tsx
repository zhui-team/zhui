import * as React from 'react';
import cn from 'astro-classname';

import '../badge/index.css';

export interface IBadgeProps {
  className?: string;
  children?: React.ReactNode;
  content?: string | number;
}

export default class Badge extends React.Component<IBadgeProps> {
  static defaultProps = {
    className: ''
  }

  render() {
    const {
      className,
      children,
      content
    } = this.props;

    const classes: string = cn(className, 'zhui-badge');

    return (
      <span className={classes}>
        {children}
          <div className='zhui-badge-wrapper'>
          <sup className='zhui-badge-leaf zhui-badge-leaf-outer'></sup>
          <sup className='zhui-badge-leaf zhui-badge-leaf-outer'></sup>
          <sup className='zhui-badge-leaf zhui-badge-leaf-outer'></sup>
          <sup className='zhui-badge-leaf zhui-badge-leaf-inner'></sup>
          <sup className='zhui-badge-leaf zhui-badge-leaf-inner'></sup>
          <sup className='zhui-badge-leaf zhui-badge-leaf-inner'></sup>
          <span className='zhui-badge-content'>{content}</span>
        </div>
      </span>
    )
  }
}