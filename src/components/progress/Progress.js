import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'astro-classname';


import './index.scss';

export default class Progress extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    prefix: PropTypes.string,
    type: PropTypes.oneOf(['line', 'circle']),
    status: PropTypes.oneOf(['active', 'exception']),
    precent: PropTypes.number,
    theme: PropTypes.string,
    showInfo: PropTypes.bool
  }

  static defaultProps = {
    className: '',
    prefix: 'zhui-progress',
    type: 'line',
    status: 'active',
    precent: 0,
    theme: 'meihong',
    showInfo: true
  }

  render() {
    const {
      className,
      prefix,
      type,
      precent,
      status,
      showInfo,
      theme,
      ...others
    } = this.props;

    const classes = cn(className, `${prefix}-wrapper`, {
      [`${prefix}-${type}`]: type,
    });
    const innerClass = cn(`${prefix}-inner`, {
      [`${prefix}-active`]: precent < 100 && status !== 'exception',
      [`${prefix}-exception`]: status === 'exception',
      [`${prefix}-success`]: precent >= 100,
    });
    const bgClass = cn(`${prefix}-bg`, {
      [`${prefix}-bg-${theme}`]: theme && theme !== 'meihong'
    });
    const width = precent + '%';

    return (
      <div className={classes} {...others}>
        <div className={innerClass}>
          <div className={bgClass} style={{ width: width }}>
          </div>
        </div>
        <span className={`${prefix}-outer`}>
          {showInfo && width}
        </span>
      </div>
    );
  }
}