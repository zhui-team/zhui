import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import cn from 'astro-classname';

import './index.scss';

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
    }

    console.log(evt)
    if (context.checkboxGroup) {
      context.checkboxGroup.onChange(evt);
    } else {
      onChange(evt);
    }
  }

  render() {
    const {
      className,
      checked,
      disabled,
      value,
      prefix,
      children
    } = this.props;

    const classes = cn(className, `${prefix}-wrapper`, {
      [`${prefix}-disabled`]: disabled,
      [`${prefix}-checked`]: checked
    });
    const nodeProps = omit(this.props, BLACK_LIST);

    return (
      <div className={classes}>
        <input
          type="checkbox"
          onChange={this._onChange}
          disabled={disabled}
        />
        { children && <span>{children}</span>}
      </div>
    );
  }
}