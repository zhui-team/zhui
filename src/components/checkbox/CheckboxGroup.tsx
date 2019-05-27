import * as React from 'react';
import * as PropTypes from 'prop-types';
import omit from 'lodash/omit';
import cn from 'astro-classname';

import './index.css';

const BLACK_LIST = [
  'className',
  'prefix',
  'checked',
  'disabled',
  'onChange',
  'value'
];

export interface ICheckboxGroupProps {
  className?: string;
  prefix?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: any;
}

export default class CheckboxGroup extends React.Component<ICheckboxGroupProps> {
  static defaultProps = {
    className: '',
    checked: false,
    disabled: false,
    onChange: () => null,
    value: [],
    prefix: 'zhui-checkbox-group'
  }

  static childContextTypes = {
    checkboxGroup: PropTypes.any,
  };

  getChildContext(): any {
    const { disabled, value } = this.props;
    return {
      checkboxGroup: {
        value,
        disabled,
        onChange: this._onChange
      }
    };
  }

  _onChange = e => {
    const targetValue = e.target.value;
    const { value, onChange } = this.props;
    const index = value.indexOf(targetValue);

    index === -1 ?
      value.push(targetValue) :
      value.splice(index, 1);

    onChange(value);
  }

  render() {
    const {
      className,
      prefix,
      children
    } = this.props;

    const classes: string = cn(className, prefix);
    const nodeProps: any = omit(this.props, BLACK_LIST);

    return (
      <div className={classes} {...nodeProps}>
        {children}
      </div>
    );
  }
}