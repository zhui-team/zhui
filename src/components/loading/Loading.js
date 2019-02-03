import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'astro-classname';

import './index.scss';

export default class Loading extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    prefix: PropTypes.string,
    global: PropTypes.bool,
    show: PropTypes.bool
  }

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

    const classes = cn(className, `${prefix}-wrapper`, {
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