import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'astro-classname';

import getRotate from '../utils/getRotate';
import './index.css';

export default class Progress extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    prefix: PropTypes.string,
    status: PropTypes.oneOf(['active', 'exception']),
    showInfo: PropTypes.bool,
    percent: PropTypes.number
  }

  static defaultProps = {
    className: '',
    prefix: 'zhui-progress',
    showInfo: true,
    status: 'active',
    percent: 0,
  }

  render() {
    const {
      className,
      prefix,
      percent,
      showInfo,
      status,
      ...others
    } = this.props;

    const classes = cn(className, `${prefix}-wrapper`);
    const innerClass = cn(`${prefix}-inner`, {
      [`${prefix}-active`]: percent < 100 && percent > 5 && status !== 'exception',
      [`${prefix}-exception`]: status === 'exception',
      [`${prefix}-success`]: percent >= 100,
    });
    const width = percent + '%';
    const rest = 100 - percent + '%';
    let start = 3;
    let rotate = percent <= 50 ? getRotate(start, percent) : getRotate(start, 101 - percent);
    let xRotate = showInfo ? `rotateZ(${percent <= 50 ? start : -rotate}deg)` : '';
    let yRotate = showInfo ? `rotateZ(${percent <= 50 ? rotate : -start}deg)` : '';

    return (
      <div className={classes} {...others}>
        <span
          className={innerClass}
          style={{ width, transform: xRotate }}
        >
          {showInfo && <span className="zhui-progress-tag">{percent}</span>}
        </span>
        <span
          className="zhui-progress-outer"
          style={{ width: rest, transform: yRotate }}
        ></span>
      </div>
    );
  }
}