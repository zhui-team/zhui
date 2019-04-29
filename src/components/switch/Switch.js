import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'astro-classname';

import './index.css';

export default class Switch extends PureComponent {

  static propTypes = {
    className: PropTypes.string,
    prefix: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    theme: PropTypes.string,
    onChange: PropTypes.func
  }

  static defaultProps = {
    className: '',
    prefix: 'zhui-switch',
    checked: false,
    disabled: false,
    theme: 'default',
    onChange: () => null
  }

  toggle = e => {
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

  renderList() {
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
      theme,
      ...others
    } = this.props;

    const classes = cn(className, prefix, {
      [`${prefix}-disabled`]: disabled,
      [`${prefix}-fold`]: !checked,
      [`${prefix}-${theme}`]: theme && theme !== 'default',
    });

    return (
      <div className={classes} {...others} onClick={this.toggle}>
        {this.renderList()}
      </div>
    );
  }
}