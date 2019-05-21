import React, { Component } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

import '../scss/storybook-cover.scss';

export default class ShowCode extends Component {
  renderJsxCode() {
    const { children } = this.props;

    let code = '';

    if(Array.isArray(children)) {
      children.forEach(el => {
        code += reactElementToJSXString(el, {
          showDefaultProps: false
        });

        code += '\n';
      });
    } else {
      code += reactElementToJSXString(children, {
        showDefaultProps: false,
        maxInlineAttributesLineLength: 20
      })
    }

    return code;
  }

  render() {
    const {
      title,
      sub,
      children,
      hideCode
    } = this.props;

    return (
      <div className='storybook-wrapper'>
        {title && <p className='storybook-title'>{title}</p>}
        {sub && <p className='storybook-sub'>{sub}</p>}
        <div className='storybook-children'>
          {children}
        </div>
        {!hideCode &&
          <pre className='storybook-code-wrapper'>
            {this.renderJsxCode()}
          </pre>
        }
      </div>
    )
  }
}