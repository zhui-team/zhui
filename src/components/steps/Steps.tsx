import * as React from 'react';
import cn from 'astro-classname';
import StepRender from './StepRender';
import Step from './Step';

import '../steps/index.css';

export interface IStepsProps {
  className?: string;
  prefix?: string;
  current?: number;
  status?: 'default' | 'error' | 'finished' | 'wait';
  disabled?: boolean;
  children?: React.ReactNode;
}

export default class Steps extends React.Component<IStepsProps> {
  static defaultProps = {
    className: '',
    prefix: 'zhui-steps',
    disabled: false,
    current: 1
  }

  static Step: typeof Step;

  render() {
    const {
      className,
      prefix,
      disabled,
      children,
      ...others
    } = this.props;

    const classes: string = cn(className, prefix, {
      [`${prefix}-disabled`]: disabled
    });

    return (
      <StepRender className={classes} {...others}>
        {children}
      </StepRender>
    );
  }
}