import * as React from 'react';
import cn from 'astro-classname';

export interface IButtonGroupProps {
  style?: React.CSSProperties;
  className: string;
  prefix: string;
}

export default class ButtonGroup extends React.Component<IButtonGroupProps> {
  static defaultProps = {
    className: '',
    prefix: 'zhui-btn-group'
  }

  render() {
    const {
      className,
      prefix,
      children,
      ...others
    } = this.props;

    const classes: string = cn(prefix, className);

    return <div className={classes} {...others}>{children}</div>;
  }
}