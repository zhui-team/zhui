import * as React from 'react';
import cn from 'astro-classname';

import '../switch/index.css';

export interface ISwitchProps {
  className?: string;
  prefix?: string;
  checked?: boolean;
  disabled?: boolean;
  theme?: string;
  text?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default class Switch extends React.Component<ISwitchProps> {
  static defaultProps = {
    className: '',
    text: '',
    prefix: 'zhui-switch',
    checked: false,
    disabled: false,
    theme: 'default',
    onChange: () => null
  }

  toggle = (e: any) => {
    const { onChange, checked } = this.props;
    const evt = {
      ...e,
      target: {
        ...this.props,
        type: 'switch',
        checked: checked
      }
    };

    onChange(evt);
  }

  renderList(): React.ReactNode {
    let list = [];
    for (let i = 0; i < 8; i++) {
      list.push(
        <div className="zhui-switch-item" key={i}>
          <span></span>
        </div>
      );
    }

    return list;
  }

  render() {
    const {
      className,
      prefix,
      checked,
      disabled,
      text,
      theme,
      ...others
    } = this.props;

    const classes: string = cn(className, prefix, {
      [`${prefix}-disabled`]: disabled,
      [`${prefix}-fold`]: !checked,
      [`${prefix}-${theme}`]: theme && theme !== 'default',
    });

    return (
      <div className={classes} {...others} onClick={this.toggle}>
        {text && <span className="zhui-switch-text">{text}</span>}
        {this.renderList()}
      </div>
    );
  }
}