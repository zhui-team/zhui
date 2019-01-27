import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import cn from 'astro-classname';

import './index.scss';

const BLACK_LIST = [
  'className',
  'prefix',
  'color',
  'closable',
  'visible',
  'onClose'
];

export default class Tag extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    prefix: PropTypes.string,
    color: PropTypes.string,
    closable: PropTypes.bool,
    visible: PropTypes.bool,
    onClose: PropTypes.func
  }

  static defaultProps = {
    className: '',
    prefix: 'zhui-tag',
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
      color,
      children,
      closable,
      style
    } = this.props;

    const classes = cn(className, `${prefix}-wrapper`, {
      [`${prefix}-wrapper-closable`]: closable
    });
    const nodeProps = omit(this.props, BLACK_LIST);

    let styles = style || {};
    color && (styles.background = color);

    return (
      <div className={classes} {...nodeProps} style={styles} onClick={this.onClose}>
        <div className={`${prefix}-body`}>
          {children}
        </div>
      </div>
    );
  }
}