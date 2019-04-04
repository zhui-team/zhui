import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import cn from 'astro-classname';

import './index.css';

const BLACK_LIST = [
  'className',
  'prefix',
  'checked',
  'disabled'
];

export default class Checkbox extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.any,
    prefix: PropTypes.string,
  }

  static defaultProps = {
    className: '',
    checked: false,
    disabled: false,
    onChange: () => null,
    prefix: 'zhui-checkbox'
  }

  static contextTypes = {
    checkboxGroup: PropTypes.any,
  };

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

    const classes = cn(className, `${prefix}-wrapper`, {
      [`${prefix}-disabled`]: disabled,
      [`${prefix}-checked`]: checked
    });
    const nodeProps = omit(this.props, BLACK_LIST);

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