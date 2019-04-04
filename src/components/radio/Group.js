import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'astro-classname';
import omit from 'lodash/omit';

import './index.scss';

const BLACK_LIST = [
  'className',
  'prefix',
  'disabled',
  'onChange'
];

export default class Group extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    prefix: PropTypes.string
  }

  static defaultProps = {
    className: '',
    onChange: () => null,
    disabled: false,
    prefix: 'zhui-radio'
  }

  static childContextTypes = {
    radioGroup: PropTypes.any,
  };

  getChildContext() {
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

    const classes = cn(className, `${prefix}-wrapper`);
    const nodeProps = omit(this.props, BLACK_LIST);

    return (
      <div className={classes} {...nodeProps}>
        {children}
      </div>
    );
  }
}
