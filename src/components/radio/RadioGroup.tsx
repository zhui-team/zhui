import * as React from 'react';
import * as PropTypes from 'prop-types';
import cn from 'astro-classname';
import omit from 'lodash/omit';

import '../radio/index.css';

const BLACK_LIST = [
  'className',
  'prefix',
  'disabled',
  'onChange',
  'value'
];

export interface IRadioGroupProps {
  className?: string;
  value: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  prefix?: string;
}
export default class Group extends React.Component<IRadioGroupProps> {
  static defaultProps = {
    className: '',
    onChange: () => null,
    disabled: false,
    prefix: 'zhui-radio'
  }

  static childContextTypes = {
    radioGroup: PropTypes.any,
  };

  getChildContext(): any {
    const { disabled, value } = this.props;
    return {
      radioGroup: {
        value,
        disabled,
        onChange: this._onChange
      }
    };
  }

  _onChange = e => this.props.onChange(e);

  render() {
    const {
      className,
      children,
      prefix
    } = this.props;

    const classes: string = cn(className, `${prefix}-group`);
    const nodeProps: any = omit(this.props, BLACK_LIST);

    return (
      <div className={classes} {...nodeProps}>
        {children}
      </div>
    );
  }
}
