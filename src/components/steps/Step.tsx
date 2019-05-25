import * as React from 'react';
import cn from 'astro-classname';

import '../steps/index.css';

export interface IStepProps {
  className?: string;
  prefix?: string;
  title?: string;
  isCurrent?: boolean;
  isLast?: boolean;
  status?: 'default' | 'error' | 'finished' | 'wait';
  stepNum?: number;
}

export default class Step extends React.Component<IStepProps> {
  static defaultProps = {
    className: '',
    prefix: 'zhui-step',
  }

  render() {
    const {
      className,
      prefix,
      title,
      status,
      isCurrent,
      isLast,
      stepNum,
      ...others
    } = this.props;

    const classes: string = cn(className, prefix, {
      [`${prefix}-${status}`]: status && status !== 'default',
      [`${prefix}-current`]: isCurrent,
    });

    return (
      <div className={classes} {...others}>
        {!isLast && <i className={`${prefix}-tail`} />}
        <div className={`${prefix}-num`}>{stepNum}</div>
        <div className={`${prefix}-title`}>{title}</div>
      </div>
    );
  }
}