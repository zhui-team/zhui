import * as React from 'react';
import omit from 'lodash/omit';
import cn from 'astro-classname';

import '../card/index.css';

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

export interface ICardProps {
  className?: string;
  width?: number;
  title?: string;
  img?: React.ReactNode;
  theme?: string;
  type?: 'column' | 'row';
  cornerLeft?: string;
  cornerRight?: string;
  underline?: boolean;
  prefix?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default class Card extends React.Component<ICardProps> {
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

    const classes: string = cn(prefix, className, {
      [`${prefix}-${type}`]: type === 'row',
      [`${prefix}-${theme}`]: theme && theme !== 'default'
    });
    const nodeProps: any = omit(this.props, BLACK_LIST);

    let styles: React.CSSProperties = style || {};
    width && (styles.width = width);

    return (
      <div className={classes} {...nodeProps} style={styles}>
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