import * as React from 'react';
import cn from 'astro-classname';

import '../badge/index.css';

const leafNum: number = 3;

export interface IBadgeProps {
  className?: string;
  children?: React.ReactNode;
  content?: string | number;
}

export default class Badge extends React.Component<IBadgeProps> {
  static defaultProps = {
    className: ''
  }

  renderSupList(type: string): React.ReactNode {
    const classes: string = `zhui-badge-leaf zhui-badge-leaf-${type}`;
    let list = [];

    for (let i = 0; i < leafNum; i++) {
      list.push(
        <sup className={classes} key={`${type}${i}`}></sup>
      );
    }

    return list;
  }

  renderContent(content: string | number): string {
    if (typeof content === 'string') {
      return content.slice(0, 1);
    }

    return `${content}`.slice(0, 2);
  }

  render() {
    const {
      className,
      children,
      content
    } = this.props;

    const classes: string = cn(className, 'zhui-badge');

    return (
      <span className={classes}>
        {children}
        <div className="zhui-badge-wrapper">
          {this.renderSupList('outer')}
          {this.renderSupList('inner')}
          <span className="zhui-badge-content">{this.renderContent(content)}</span>
        </div>
      </span>
    );
  }
}