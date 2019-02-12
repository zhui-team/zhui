import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'astro-classname';
import StepRender from './StepRender';

import './index.css';

export default class Steps extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    prefix: PropTypes.string,
    current: PropTypes.number,
    status: PropTypes.oneOf(['default', 'error']),
    disabled: PropTypes.bool
  }

  static defaultProps = {
    className: '',
    prefix: 'zhui-steps',
    disabled: false,
    current: 1
  }

  render() {
    const {
      className,
      prefix,
      disabled,
      children,
      ...others
    } = this.props;

    const classes = cn(className, prefix, {
      [`${prefix}-disabled`]: disabled
    });

    return (
      <StepRender className={classes} {...others}>
        {children}
      </StepRender>
    );
  }
}