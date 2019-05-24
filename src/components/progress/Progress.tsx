import * as React from 'react';
import cn from 'astro-classname';
import getRotate from './getRotate';

import '../progress/index.css';

export interface IProgressProps {
  className?: string;
  prefix?: string;
  status?: 'active' | 'exception';
  showInfo?: boolean;
  percent?: number;
}

export default class Progress extends React.Component<IProgressProps> {
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

    const classes: string = cn(className, `${prefix}-wrapper`);
    const innerClass: string = cn(`${prefix}-inner`, {
      [`${prefix}-active`]: percent < 100 && percent > 5 && status !== 'exception',
      [`${prefix}-exception`]: status === 'exception',
      [`${prefix}-success`]: percent >= 100,
    });
    const width: string = percent + '%';
    const rest: string = 100 - percent + '%';
    let start: number = 3;
    let rotate: number = percent <= 50 ? getRotate(start, percent) : getRotate(start, 101 - percent);
    let xRotate: string = showInfo ? `rotateZ(${percent <= 50 ? start : -rotate}deg)` : '';
    let yRotate: string = showInfo ? `rotateZ(${percent <= 50 ? rotate : -start}deg)` : '';

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