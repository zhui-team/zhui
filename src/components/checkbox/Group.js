import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import cn from 'astro-classname';

import './index.scss';

const BLACK_LIST = [
  'className',
  'prefix',
  'checked',
  'disabled',
  'onChange',
  'value'
];

export default class Group extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.array,
    prefix: PropTypes.string,
  }

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

  getChildContext() {
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
      style,
      prefix,
      children
    } = this.props;

    const classes = cn(className, prefix);
    const nodeProps = omit(this.props, BLACK_LIST);

    return (
      <div className={classes} {...nodeProps} style={style}>
        {children}
      </div>
    );
  }
}