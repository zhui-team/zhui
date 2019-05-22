import * as React from 'react';
import cn from 'astro-classname';

import '../breadcrumb/index.css';

export interface IBreadcrumbItemProps {
  className?: string;
  prefix?: string;
  href?: string;
  value?: string;
  children?: React.ReactNode;
}

export default class BreadcrumbItem extends React.Component<IBreadcrumbItemProps> {
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

    const classes: string = cn(className, prefix);

    return (
      href ?
        <a href={href} className={classes} {...others}>{value}</a> :
        <span className={classes} {...others}>{value}</span>
    );
  }
}