import React, { Component } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import cn from 'astro-classname';

const options = {
  showDefaultProps: false,
  showFunctions: true,
  maxInlineAttributesLineLength: 20
}

export default class ShowCode extends Component {
  state = {
    fold: true
  }

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
      code += reactElementToJSXString(children, options)
    }

    return code;
  }

  handleCodeFold = () => {
    this.setState({
      fold: !this.state.fold
    })
  }

  render() {
    const {
      title,
      sub,
      children,
      hideCode
    } = this.props;
    const { fold } = this.state;

    const codeClass = cn('storybook-code-wrapper', {
      'storybook-code-wrapper-fold': fold
    })

    return (
      <div className='storybook-wrapper'>
        {!hideCode && 
          <div 
            className='storybook-code-btn'
            onClick={this.handleCodeFold}
          >ShowCode</div>
        }
        {title && <p className='storybook-title'>{title}</p>}
        {sub && <p className='storybook-sub'>{sub}</p>}
        <div className='storybook-children'>
          {children}
        </div>
        {!hideCode &&
          <pre className={codeClass}>
            {this.renderJsxCode()}
          </pre>
        }
      </div>
    )
  }
}