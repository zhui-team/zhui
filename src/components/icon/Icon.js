import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'astro-classname';

import './index.scss';

export default class Icon extends PureComponent {
  static propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    color: PropTypes.string,
    spin: PropTypes.bool
  }

  static defaultProps = {
    className: '',
    color: '',
    spin: false
  }

  render() {
    const {
      type,
      className,
      spin,
      color,
      style,
      ...other
    } = this.props;

    const classes = cn('zhuiicon', `zhuiicon-${type}`, className, {
      'zhuiicon-spin': spin
    });

    const styles = { ...style, color };

    return <i className={classes} style={styles} {...other}></i>;
  }
}
