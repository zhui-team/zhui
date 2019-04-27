import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import cn from 'astro-classname';

import './index.css';

const BLACK_LIST = [
  'className',
  'prefix',
  'closable',
  'visiable',
  'message',
  'theme',
  'onClose'
];

export default class Alert extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    prefix: PropTypes.string,
    closable: PropTypes.bool,
    visiable: PropTypes.bool,
    message: PropTypes.string,
    theme: PropTypes.string,
    onClose: PropTypes.func
  }

  static defaultProps = {
    className: '',
    prefix: 'zhui-alert',
    closable: false
  }

  static getDerivedStateFromProps(nextProps) {
    if ('visiable' in nextProps) {
      return {
        visiable: nextProps.visiable,
      };
    }
    return null;
  }

  state = {
    visiable: true,
  };

  onClose = e => {
    const { onClose } = this.props;
    if (onClose) {
      onClose(e);
    }
    if (e.defaultPrevented) {
      return;
    }
    this.setState({ visiable: false });
  }

  render() {
    const { visiable } = this.state;

    if (!visiable) {
      return null;
    }

    const {
      className,
      prefix,
      message,
      theme,
      closable,
    } = this.props;

    const classes = cn(className, `${prefix}-wrapper`, {
      [`${prefix}-wrapper-${theme}`]: theme
    });
    const nodeProps = omit(this.props, BLACK_LIST);


    return (
      <div className={classes} {...nodeProps}>
        {closable && <span className={`${prefix}-closable`} onClick={this.onClose}></span>}
        <div className={`${prefix}-inner`}>
          {message}
        </div>
      </div>
    );
  }
}