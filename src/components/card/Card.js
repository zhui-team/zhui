import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import cn from 'astro-classname';

import './index.scss';

const BLACK_LIST = [
  'className',
  'width',
  'prefix',
  'title',
  'img',
  'theme',
  'underline',
  'cornerLeft',
  'cornerRight',
  'type'
];

export default class Card extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    width: PropTypes.number,
    title: PropTypes.node,
    img: PropTypes.node,
    theme: PropTypes.string,
    type: PropTypes.oneOf(['column', 'row']),
    cornerLeft: PropTypes.string,
    cornerRight: PropTypes.string,
    underline: PropTypes.bool,
    prefix: PropTypes.string
  }

  static defaultProps = {
    className: '',
    type: 'column',
    prefix: 'zhui-card'
  }

  render() {
    const {
      className,
      title,
      img,
      theme,
      width,
      type,
      underline,
      prefix,
      cornerLeft,
      cornerRight,
      style,
      children
    } = this.props;

    const classes = cn(prefix, className, {
      [`${prefix}-${type}`]: type === 'row',
      [`${prefix}-${theme}`]: theme && theme !== 'default'
    });
    const nodeProps = omit(this.props, BLACK_LIST);
    
    let styles = style || {};
    width && (styles.width = width);

    return (
      <div className={classes} {...nodeProps} style={ styles }>
        {
          type !== 'row' && img && <div className={`${prefix}-img-wrapper`}>{img}</div>
        }
        {
          title && <div className={`${prefix}-title`}>{title}</div>
        }
        <div className={`${prefix}-body`}>
          {children}
        </div>
        {
          type !== 'row' && underline && <div className={`${prefix}-underline`}></div>
        }
        {
          type !== 'row' && (cornerLeft || cornerRight) && (
            <div className={`${prefix}-corner-wrapper`}>
              {cornerLeft && <div className={`${prefix}-corner-left`}>{cornerLeft}</div>}
              {cornerRight && <div className={`${prefix}-corner-right`}>{cornerRight}</div>}
            </div>
          )
        }
      </div>
    );
  }
}