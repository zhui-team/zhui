import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'astro-classname';

import './index.css';

export default class Rate extends PureComponent {
  static propTypes = {
    defaultValue: PropTypes.number,
    className: PropTypes.string
  }

  static defaultProps = {
    className: '',
    defaultValue: 0
  }

  render() {
    const {
      className,
      defaultValue,
      ...others
    } = this.props;

    const classes = cn(className, 'zhui-rate');

    return (
      <div
        className={classes}
        {...others}
      >
        Rate
      </div>
    );
  }
}
