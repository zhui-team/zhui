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

    const classes = cn(className, prefix, {
      [`${prefix}-global`]: global
    });

    return (
      show &&
        <div className={classes} {...others}>
          Loading
        </div>
    );
  }
}