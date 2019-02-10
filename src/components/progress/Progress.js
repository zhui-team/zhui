import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'astro-classname';

import getRotate from '../../utils/getRotate';
import './index.scss';

export default class Progress extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    prefix: PropTypes.string,
    type: PropTypes.oneOf(['line', 'circle']),
    status: PropTypes.oneOf(['active', 'exception']),
    showInfo: PropTypes.bool,
    precent: PropTypes.number
  }

  static defaultProps = {
    className: '',
    prefix: 'zhui-progress',
    type: 'line',
    showInfo: true,
    status: 'active',
    precent: 0,
  }

  render() {
    const {
      className,
      prefix,
      type,
      precent,
      showInfo,
      status,
      ...others
    } = this.props;

    const classes = cn(className, `${prefix}-wrapper`, {
      [`${prefix}-${type}`]: type,
    });
    const innerClass = cn(`${prefix}-inner`, {
      [`${prefix}-active`]: precent < 100 && precent > 5 && status !== 'exception',
      [`${prefix}-exception`]: status === 'exception',
      [`${prefix}-success`]: precent >= 100,
    });
    const width = precent + '%';
    const rest = 100 - precent + '%';
    let start = 3;
    let rotate = precent <= 50 ? getRotate(start, precent) : getRotate(start, 101 - precent);
    let xRotate = showInfo ? `rotateZ(${precent <= 50 ? start : -rotate}deg)` : '';
    let yRotate = showInfo ? `rotateZ(${precent <= 50 ? rotate : -start}deg)` : '';

    return type !== 'circle' ?
      (
        <div className={classes} {...others}>
          <span
            className={innerClass}
            style={{ width, transform: xRotate }}
          >
            {showInfo && <span className="zhui-progress-tag">{precent}</span>}
          </span>
          <span
            className="zhui-progress-outer"
            style={{ width: rest, transform: yRotate }}
          ></span>
        </div>
      ) :
      (
        <div
          className={cn(classes, {
            [`${prefix}-circle-success`]: precent >= 100,
          })}
          {...others}
        >
        </div>
      );
  }
}