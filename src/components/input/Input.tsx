import * as React from 'react';
import omit from 'lodash/omit';
import cn from 'astro-classname';
import TextArea from './Textarea';

import '../input/index.css';

const BLACK_LIST: string[] = [
  'className',
  'type',
  'width',
  'prefix',
  'size',
  'theme',
  'addonBefore',
  'addonAfter',
  'autoFocus',
  'onPressEnter',
  'icon'
];

export interface IInputProps {
  className?: string;
  width?: number;
  theme?: string;
  prefix?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  placeholder?: string;
  size?: 'large' | 'medium' | 'small';
  value?: any;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  icon?: React.ReactNode;
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default class Input extends React.Component<IInputProps> {
  static defaultProps = {
    className: '',
    theme: 'default',
    prefix: 'zhui-input',
    disabled: false,
    autoFocus: false
  }

  static Textarea: typeof TextArea;

  componentDidMount() {
    const { autoFocus } = this.props;

    if (autoFocus) {
      this.input.focus();
    }
  }

  input: HTMLInputElement | HTMLTextAreaElement;

  handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { onKeyDown, onPressEnter } = this.props;
    if (onKeyDown) {
      onKeyDown(e);
    }

    if (e.keyCode === 13 && onPressEnter) {
      onPressEnter(e);
    }
  }

  focus() {
    this.input.focus();
  }

  saveInput = (node: HTMLInputElement) => {
    this.input = node;
  }

  render() {
    const {
      className,
      width,
      value,
      theme,
      size,
      addonBefore,
      addonAfter,
      icon,
      prefix,
      disabled
    } = this.props;

    const classes: string = cn('zhui-input-wrapper', className, {
      [`${prefix}-wrapper-${size}`]: size && size !== 'medium',
      [`${prefix}-group`]: addonAfter || addonBefore
    });

    const nodeProps: any = omit(this.props, BLACK_LIST);

    return (
      <div className={classes} style={{ width }}>
        {
          addonBefore &&
          <span className={`${prefix}-group-addon`}>{addonBefore}</span>
        }
        {
          icon && !addonBefore &&
          <span className={`${prefix}-icon-wrapper`}>{icon}</span>
        }
        <input
          className={cn(prefix, {
            [`${prefix}-${theme}`]: theme && theme !== 'default',
            [`${prefix}-disabled`]: disabled,
          })}
          onKeyDown={this.handleKeyDown}
          value={value}
          ref={this.saveInput}
          {...nodeProps}
        />
        {
          addonAfter &&
          <span className={`${prefix}-group-addon`}>{addonAfter}</span>
        }
      </div>
    );
  }
}