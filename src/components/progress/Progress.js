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
    showInfo: PropTypes.bool
  }

  static defaultProps = {
    className: '',
    prefix: 'zhui-progress',
    type: 'line',
    status: 'active',
    precent: 0,
    showInfo: true
  }

  render() {
    const {
      className,
      prefix,
      type,
      precent,
      showInfo,
      ...others
    } = this.props;

    const classes = cn(className, `${prefix}-wrapper`);
    const width = precent + '%';

    return (
      <div className={classes} {...others}>
        <div className={`${prefix}-inner`}>
          <div className={`${prefix}-bg`} style={{width: width}}>
          </div>
        </div>
        <div className={`${prefix}-outer`}>
          {showInfo && width}
        </div>
      </div>
    );
  }
}