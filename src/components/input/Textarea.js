import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import cn from 'astro-classname';

import './index.scss';

const BLACK_LIST = [
  'className',
  'width',
  'prefix',
  'autoFocus',
  'onPressEnter'
]

export default class Textarea extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    prefix: PropTypes.string,
    width: PropTypes.number,
    disabled: PropTypes.bool,
    autoFocus: PropTypes.bool,
    value: PropTypes.any,
    onPressEnter: PropTypes.func,
    onKeyDown: PropTypes.func,
    onChange: PropTypes.func
  }

  static defaultProps = {
    className: '',
    prefix: 'zhui-input',
    disabled: false,
    autoFocus: false
  }

  componentDidMount() {
    const { autoFocus } = this.props;

    if(autoFocus) {
      this.textarea.focus();
    }
  }

  handleKeyDown = (e) => {
    const { onKeyDown, onPressEnter } = this.props;
    if(onKeyDown) {
      onKeyDown(e);
    }

    if(e.keyCode === 13 && onPressEnter) {
      onPressEnter(e);
    }
  }

  saveTextArea = (textarea) => {
    this.textarea = textarea;
  }

  render() {
    const { 
      className,
      width,
      prefix,
      handleKeyDown,
      disabled
    } = this.props;

    const classes = cn(`${prefix}-textarea`, {
      [`${prefix}-disabled`]: disabled
    })

    const nodeProps = omit(this.props, BLACK_LIST);

    return (
      <div className={cn(`${prefix}-textarea-wrapper`, className)} style={{ width }}>
        <textarea
          ref={this.saveTextArea}
          className={classes}
          onKeyDown={handleKeyDown}
          {...nodeProps}
        />
      </div>
      
    )
  }
}