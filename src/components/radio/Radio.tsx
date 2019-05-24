import * as React from 'react';
import * as PropTypes from 'prop-types';
import cn from 'astro-classname';
import RadioGroup from './RadioGroup';

import '../radio/index.css';

export interface IRadioProps {
  className?: string;
  value?: any;
  checked?: boolean;
  prefix?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text?: string;
  theme?: string;
  disabled?: boolean;
}

export default class Radio extends React.Component<IRadioProps> {
  static defaultProps = {
    className: '',
    checked: false,
    disabled: false,
    prefix: 'zhui-radio',
    onChange: () => null,
    text: '',
    theme: ''
  }

  static Group: typeof RadioGroup;

  static contextTypes = {
    radioGroup: PropTypes.any,
  };

  static context: any;

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

    const classes: string = cn(className, `${prefix}-item`, {
      [`${prefix}-${theme}`]: theme && theme !== 'meihong'
    });
    const nodeProps: any = {
      disabled,
      onChange: this._onChange
    };

    if (radioGroup) {
      checked = value === radioGroup.value;
    }

    if (radioGroup || checked) {
      nodeProps.checked = checked;
    }

    const isMultiWords: boolean = text.length > 1;
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
