import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import cn from 'astro-classname';

import './index.scss';

const BLACK_LIST = [
  'className',
  'prefix',
  'closable',
  'visible',
  'message',
  'theme',
  'onClose'
];

export default class Alert extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    prefix: PropTypes.string,
    closable: PropTypes.bool,
    visible: PropTypes.bool,
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
    if ('visible' in nextProps) {
      return {
        visible: nextProps.visible,
      };
    }
    return null;
  }

  state = {
    visible: true,
  };

  onClose = e => {
    const { onClose, closable } = this.props;
    if (!closable) {
      return;
    }
    if (onClose) {
      onClose(e);
    }
    if (e.defaultPrevented) {
      return;
    }
    this.setState({ visible: false });
  }

  render() {
    const { visible } = this.state;

    if (!visible) {
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
        { closable && <span className={`${prefix}-closable`}  onClick={this.onClose}></span>}
        <div className={`${prefix}-inner`}>
          {message}        
        </div>
      </div>
    );
  }
}