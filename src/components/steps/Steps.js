import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'astro-classname';

import './index.scss';

export default class Steps extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    prefix: PropTypes.string,
    current: PropTypes.number,
    status: PropTypes.string
  }

  static defaultProps = {
    className: '',
    prefix: 'zhui-steps',
  }

  render() {
    const {
      className,
      prefix,
      ...others
    } = this.props;

    const classes = cn(className, prefix, {

    });

    return (
      <div className={classes} {...others}>
        steps
      </div>
    );
  }
}