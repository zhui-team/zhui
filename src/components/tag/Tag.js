import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import cn from 'astro-classname';

import './index.scss';

const BLACK_LIST = [
  'className',
  'prefix',
  'headColor',
  'bodyColor',
  'closable',
  'onClose'
];

export default class Tag extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    prefix: PropTypes.string,
    headColor: PropTypes.string,
    bodyColor: PropTypes.string,
    closable: PropTypes.bool,
    onClose: PropTypes.func
  }

  static defaultProps = {
    className: '',
    prefix: 'zhui-tag',
    closable: false
  }

  onClose = e => {
    console.log(e);
  }

  render() {
    const {
      className,
      prefix,
      headColor,
      bodyColor,
      closable,
      children,
      style
    } = this.props;

    const classes = cn(className, `${prefix}-wrapper`);
    const nodeProps = omit(this.props, BLACK_LIST);
    
    let styles = style || {};
    headColor && (styles.background = headColor);

    return (
      <div className={classes} {...nodeProps} style={ styles }>
        <div className={`${prefix}-body`} style={{ background: bodyColor }}>
          {children}
        </div>
      </div>
    );
  }
}