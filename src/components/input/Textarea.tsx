import * as React from 'react';
import omit from 'lodash/omit';
import cn from 'astro-classname';

import '../input/index.css';

const BLACK_LIST = [
  'className',
  'width',
  'prefix',
  'autoFocus',
  'onPressEnter',
  'theme'
];

export interface ITextAreaProps {
  className?: string;
  prefix?: string;
  width?: number;
  theme?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  value?: any;
  onPressEnter?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default class TextArea extends React.Component<ITextAreaProps> {
  static defaultProps = {
    className: '',
    prefix: 'zhui-input',
    disabled: false,
    autoFocus: false
  }

  componentDidMount() {
    const { autoFocus } = this.props;

    if (autoFocus) {
      this.textarea.focus();
    }
  }

  textarea: HTMLTextAreaElement;

  handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const { onKeyDown, onPressEnter } = this.props;
    if (onKeyDown) {
      onKeyDown(e);
    }

    if (e.keyCode === 13 && onPressEnter) {
      onPressEnter(e);
    }
  }

  saveTextArea = (textarea: HTMLTextAreaElement) => {
    this.textarea = textarea;
  }

  render() {
    const {
      className,
      width,
      prefix,
      disabled,
      theme
    } = this.props;

    const classes: string = cn(`${prefix}-textarea`, {
      [`${prefix}-disabled`]: disabled,
      [`${prefix}-${theme}`]: theme && theme !== 'default'
    });

    const nodeProps: any = omit(this.props, BLACK_LIST);

    return (
      <div className={cn(`${prefix}-textarea-wrapper`, className)} style={{ width }}>
        <textarea
          ref={this.saveTextArea}
          className={classes}
          onKeyDown={this.handleKeyDown}
          {...nodeProps}
        />
      </div>
    );
  }
}