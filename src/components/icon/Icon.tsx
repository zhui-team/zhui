import * as React from 'react';
import cn from 'astro-classname';

import '../icon/index.css';

export interface IIconProps {
  type: string;
  className?: string;
  color?: string;
  style?: React.CSSProperties
}

export default class Icon extends React.Component<IIconProps> {
  static defaultProps = {
    className: '',
    color: '',
  }

  render() {
    const {
      type,
      className,
      color,
      style,
      ...other
    } = this.props;

    const classes = cn('zhuiicon', `zhuiicon-${type}`);

    const styles = { ...style, color };

    return <i className={classes} style={styles} {...other}></i>;
  }
}