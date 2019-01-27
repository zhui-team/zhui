import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'astro-classname';

import BreadcrumbItem from './BreadcrumbItem';

import './index.scss';

export default class Breadcrumb extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    prefix: PropTypes.string,
    list: PropTypes.array
  }

  static defaultProps = {
    className: '',
    prefix: 'zhui-breadcrumb',
    list: []
  }

  render() {
    const {
      className,
      children,
      list,
      prefix,
      ...others
    } = this.props;

    const classes = cn(className, prefix);

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