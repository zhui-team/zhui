import * as React from 'react';
import omit from 'lodash/omit';
import cn from 'astro-classname';

import '../tag/index.css';

const BLACK_LIST = [
  'className',
  'prefix',
  'color',
  'closable',
  'visiable',
  'onClose'
];

export interface ITagProps {
  className?: string;
  prefix?: string;
  color?: string;
  closable?: boolean;
  visiable?: boolean;
  onClose?: React.MouseEventHandler<HTMLAnchorElement>;
  style?: React.CSSProperties;
}

export interface ITagState {
  visiable: boolean;
}

export default class Tag extends React.Component<ITagProps, ITagState> {
  static defaultProps = {
    className: '',
    prefix: 'zhui-tag',
    closable: false
  }

  static getDerivedStateFromProps(nextProps: ITagProps) {
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

  onClose = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
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
      color,
      children,
      closable,
      style
    } = this.props;

    const classes: string = cn(className, `${prefix}-wrapper`, {
      [`${prefix}-wrapper-closable`]: closable
    });
    const nodeProps: any = omit(this.props, BLACK_LIST);

    let styles: React.CSSProperties = style || {};
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