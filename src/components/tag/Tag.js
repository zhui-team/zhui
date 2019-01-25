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
  'onClose'
];

export default class Tag extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    prefix: PropTypes.string,
    color: PropTypes.string,
    closable: PropTypes.bool,
    onClose: PropTypes.func
  }

  static defaultProps = {
    className: '',
    prefix: 'zhui-tag',
    closable: false
  }

  state = {
    hide: false
  }

  onClose = e => {
    const { onClose } = this.props;
    if (onClose) {
      onClose(e);
    }
    if (e.defaultPrevented) {
      return;
    }
    this.setState({ hide: true });
  }

  render() {
    const hide = this.state.hide;

    if(hide) {
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