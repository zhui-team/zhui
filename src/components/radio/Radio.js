import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

export default class Radio extends PureComponent {
  static propTypes = {
    value: PropTypes.any,
    checked: PropTypes.bool,
    prefix: PropTypes.string
  }

  static defaultProps = {
    checked: false,
    prefix: 'zhui-radio'
  }

  static contextTypes = {
    radioGroup: PropTypes.any,
  };

  _onChange = e => {
    const { onChange } = this.props;
    const { context } = this;
    const evt = {
      ...e,
      target: {
        ...this.props,
        type: 'radio',
        checked: e.target.checked
      }
    };

    if (context.radioGroup) {
      context.radioGroup.onChange(evt);
    } else {
      onChange(evt);
    }
  }

  render() {
    let {
      value,
      checked,
      disabled
    } = this.props;
    const { radioGroup } = this.context;

    if (radioGroup) {
      checked = value === radioGroup.value;
    }

    return (
      <div>
        <input
          type="radio"
          onChange={this._onChange}
          disabled={disabled}
          checked={checked}
        />
      </div>
    );
  }
}
