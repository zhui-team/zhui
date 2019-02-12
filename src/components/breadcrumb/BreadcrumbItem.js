import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'astro-classname';

import './index.css';

export default class BreadcrumbItem extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    prefix: PropTypes.string,
    href: PropTypes.string,
    value: PropTypes.string
  }

  static defaultProps = {
    className: '',
    prefix: 'zhui-breadcrumb-item',
    href: '',
    value: ''
  }

  render() {
    const {
      className,
      children,
      href,
      value,
      prefix,
      ...others
    } = this.props;

    if (children) return children;

    const classes = cn(className, prefix);

    return (
      href ?
        <a href={href} className={classes} {...others}>{value}</a> :
        <span className={classes} {...others}>{value}</span>
    );
  }
}