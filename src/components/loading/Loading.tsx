import * as React from 'react';
import cn from 'astro-classname';

import './index.css';

export interface ILoadingProps {
  className?: string;
  prefix?: string;
  global?: boolean;
  show?: boolean;
  children?: React.ReactNode;
}

export default class Loading extends React.Component<ILoadingProps> {
  static defaultProps = {
    className: '',
    prefix: 'zhui-loading',
    global: false,
    show: true
  }

  render() {
    const {
      className,
      prefix,
      global,
      show,
      children,
      ...others
    } = this.props;

    const classes: string = cn(className, `${prefix}-wrapper`, {
      [`${prefix}-global`]: global
    });

    return (
      <div className={cn(`${prefix}-container`, {
        [`${prefix}-container-fill`]: React.Children.count(children) !== 0,
      })}>
        {
          show &&
          <div className={classes} {...others}>
            <div className={prefix}>
            </div>
          </div>
        }
        {children}
      </div>
    );
  }
}