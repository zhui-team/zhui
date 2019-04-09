import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'astro-classname';

import './index.css';

export default class Radio extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.any,
    checked: PropTypes.bool,
    prefix: PropTypes.string,
    onChange: PropTypes.func,
    text: PropTypes.string,
    theme: PropTypes.string,
  }

  static defaultProps = {
    className: '',
    checked: false,
    prefix: 'zhui-radio',
    onChange: () => null,
    text: '',
    theme: ''
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
      className,
      value,
      checked,
      prefix,
      text,
      theme,
      disabled
    } = this.props;
    const { radioGroup } = this.context;

    const classes = cn(className, `${prefix}-item`, {
      [`${prefix}-${theme}`]: theme && theme !== 'meihong'
    });
    const nodeProps = {
      disabled,
      onChange: this._onChange
    };

    if (radioGroup) {
      checked = value === radioGroup.value;
    }

    if (radioGroup || checked) {
      nodeProps.checked = checked;
    }

    const isMultiWords = text.length > 1;
    return (
      <div className={`${prefix}-wrapper`}>
        <input type="radio" {...nodeProps} className={`${prefix}-input`} />
        <div className={classes}>
          {isMultiWords ? text.slice(0, 1) : text}
        </div>
        {
          isMultiWords && <span className="zhui-radio-label">{text.slice(1)}</span>
        }
      </div>
    );
  }
}
