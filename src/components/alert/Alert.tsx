import * as React from 'react';
import omit from 'lodash/omit';
import cn from 'astro-classname';

import '../alert/index.css';

const BLACK_LIST = [
  'className',
  'prefix',
  'closable',
  'visiable',
  'message',
  'theme',
  'onClose'
];

export interface IAlertProps {
  className?: string;
  prefix?: string;
  closable?: boolean;
  visiable?: boolean;
  message?: string;
  theme?: string;
  onClose?: React.MouseEventHandler<HTMLAnchorElement>;
}

export interface IAlertState {
  visiable: boolean
}

export default class Alert extends React.Component<IAlertProps> {
  static defaultProps = {
    className: '',
    prefix: 'zhui-alert',
    closable: false
  }

  static getDerivedStateFromProps(nextProps: IAlertProps) {
    if ('visiable' in nextProps) {
      return {
        visiable: nextProps.visiable,
      };
    }
    return null;
  }

  state: IAlertState = {
    visiable: true,
  };

  onClose: React.MouseEventHandler<HTMLAnchorElement> = e => {
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

    const classes: string = cn(className, `${prefix}-wrapper`, {
      [`${prefix}-wrapper-${theme}`]: theme
    });
    const nodeProps: any = omit(this.props, BLACK_LIST);


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