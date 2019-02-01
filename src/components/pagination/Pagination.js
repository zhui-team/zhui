import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'astro-classname';

import './index.scss';

export default class Switch extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    prefix: PropTypes.string,
    current: PropTypes.number.isRequired,
    pageSize: PropTypes.number,
    total: PropTypes.number.isRequired,
    showTotal: PropTypes.bool,
    onChange: PropTypes.func
  }

  static defaultProps = {
    className: '',
    prefix: 'zhui-pagination',
    showTotal: false,
    pageSize: 10,
    onChange: () => null
  }

  render() {
    const {
      className,
      prefix,
      current,
      pageSize,
      total,
      showTotal,
      ...others
    } = this.props;

    const classes = cn(className, prefix, {

    });

    current = current < 1 ? 1 :
      current > total ? total : current;

    return (
      <div className={classes} {...others}>
        pagination
      </div>
    )
  }
}