import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'astro-classname';

export default class Group extends PureComponent {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    prefix: PropTypes.string
  }

  static defaultProps = {
    style: null,
    className: '',
    prefix: 'zhui-btn-group'
  }

  render() {
    const { 
      className,
      prefix,
      children,
      ...others
    } = this.props;

    const classes = cn(prefix, className);

    return <div className={classes} {...others}>{children}</div>
  }
}