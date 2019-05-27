import * as React from 'react';
import cn from 'astro-classname';
import BreadcrumbItem from './BreadcrumbItem';

import '../breadcrumb/index.css';

export interface IBreadcrumbProps {
  className?: string;
  prefix?: string;
  list?: BreadcrumbItem[];
  children?: React.ReactNode;
}

export default class Breadcrumb extends React.Component<IBreadcrumbProps> {
  static defaultProps = {
    className: '',
    prefix: 'zhui-breadcrumb',
    list: []
  }

  static Item: typeof BreadcrumbItem;

  render() {
    const {
      className,
      children,
      list,
      prefix,
      ...others
    } = this.props;

    const classes: string = cn(className, prefix);

    return (
      <div className={classes} {...others}>
        {children}
        {
          list && list.map((item, index) =>
            <BreadcrumbItem {...item} key={index} />
          )
        }
      </div>
    );
  }
}