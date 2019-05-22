import * as React from 'react';
import * as PropTypes from 'prop-types';
import omit from 'lodash/omit';
import cn from 'astro-classname';
import CheckboxGroup from './CheckboxGroup';

import '../checkbox/index.css';

const BLACK_LIST = [
  'className',
  'prefix',
  'checked',
  'disabled'
];

export interface ICheckboxProps {
  className?: string;
  checked?: boolean;
  disabled?: boolean;
  value?: any;
  prefix?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default class Checkbox extends React.Component<ICheckboxProps> {
  static defaultProps = {
    className: '',
    checked: false,
    disabled: false,
    onChange: () => null,
    prefix: 'zhui-checkbox'
  }

  static Group: typeof CheckboxGroup;

  static contextTypes = {
    checkboxGroup: PropTypes.any,
  };

  static context: any;

  _onChange = e => {
    const { onChange } = this.props;
    const { context } = this;
    const evt = {
      ...e,
      target: {
        ...this.props,
        type: 'checkbox',
        checked: e.target.checked
      }
    };

    if (context.checkboxGroup) {
      context.checkboxGroup.onChange(evt);
    } else {
      onChange(evt);
    }
  }

  render() {
    let {
      className,
      checked,
      disabled,
      value,
      prefix,
      children,
      ...others
    } = this.props;
    const { checkboxGroup } = this.context;

    if (checkboxGroup) {
      checked = checkboxGroup.value.indexOf(value) !== -1;
    }

    const classes: string = cn(className, `${prefix}-wrapper`, {
      [`${prefix}-disabled`]: disabled,
      [`${prefix}-checked`]: checked
    });
    const nodeProps: any = omit(this.props, BLACK_LIST);

    return (
      <div className={classes} {...nodeProps}>
        <input
          className={`${prefix}-input`}
          type="checkbox"
          onChange={this._onChange}
          disabled={disabled}
          checked={checked}
          {...others}
        />
        <span className={`${prefix}-inner`}></span>
        {children && <span className={`${prefix}-text`}>{children}</span>}
      </div>
    );
  }
}