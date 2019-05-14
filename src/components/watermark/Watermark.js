import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'astro-classname';

import './index.css';

export default class WaterMark extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
  }

  static defaultProps = {
    className: '',
  }

  render() {
    const {
      className,
      children
    } = this.props;

    const classes = cn('zhui-watermark', className);


    return (
      <div className={classes}>
        {children}
      </div>
    );
  }
}
