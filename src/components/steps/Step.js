import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'astro-classname';

import './index.scss';

export default class Step extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    prefix: PropTypes.string,
    title: PropTypes.string,
    isCurrent: PropTypes.bool,
    isLast: PropTypes.bool,
    status: PropTypes.oneOf(['default', 'error', 'finished', 'wait']),
    stepNum: PropTypes.number
  }

  static defaultProps = {
    className: '',
    prefix: 'zhui-step',
  }

  render() {
    const {
      className,
      prefix,
      title,
      status,
      isCurrent,
      isLast,
      stepNum,
      ...others
    } = this.props;

    const classes = cn(className, prefix, {
      [`${prefix}-${status}`]: status && status !== 'default',
      [`${prefix}-current`]: isCurrent,
    });

    return (
      <div className={classes} {...others}>
        {!isLast && <i className={`${prefix}-tail`} />}
        <span className={`${prefix}-num`}>{stepNum}</span>
        <div className={`${prefix}-title`}>{title}</div>
      </div>
    );
  }
}