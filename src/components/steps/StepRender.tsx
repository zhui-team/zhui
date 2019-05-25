import * as React from 'react';

import '../steps/index.css';

export interface IStepRenderProps {
  className?: string;
  current?: number;
  status?: 'default' | 'error' | 'finished' | 'wait';
  children?: React.ReactNode;
}

export default class StepRender extends React.Component<IStepRenderProps> {
  static defaultProps = {
    className: '',
    status: 'default',
    current: 1
  }

  render() {
    const {
      className,
      current,
      status,
      children
    } = this.props;

    return (
      <div className={className}>
        {
          React.Children.map(
            children,
            (item: any, index) => {
              let curIndex = index + 1;
              const props = {
                isCurrent: curIndex === current,
                isLast: curIndex === React.Children.count(children),
                stepNum: curIndex,
                status
              };

              props.status = curIndex < current ?
                'finished' : curIndex === current ?
                  status : 'wait';

              return React.cloneElement(item, props);
            }
          )
        }
      </div>
    );
  }
}