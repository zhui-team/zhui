import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import cn from 'astro-classname';

const BLACK_LIST = [
  'className',
  'prefix',
  'title',
  'cover',
  'type'
]

export default class Card extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.node,
    cover: PropTypes.node,
    type: PropTypes.oneOf(['column', 'row']),
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
      cover,
      type,
      prefix,
      children
    } = this.props;

    const classes = cn(prefix, className, {
      [`${prefix}-${type}`]: type === 'row' && !cover
    });
    const nodeProps = omit(this.props, BLACK_LIST);

    return (
      <div className={classes} {...nodeProps}>
        {
          title && <div className={`${prefix}-title`}>{title}</div>
        }
        <div className={`${prefix}-body`}>
          { children }
        </div>
      </div>
    )
  }
}