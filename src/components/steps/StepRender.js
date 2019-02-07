import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

export default class StepRender extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    current: PropTypes.number,
    status: PropTypes.oneOf(['default', 'error'])
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
            (item, index) => {
              let curIndex = index + 1;
              const props = {
                isCurrent: curIndex === current
              };

              props.status = curIndex < current ?
                'finished' : curIndex === current ?
                  status : 'wait';

              return React.cloneElement(item, props);
            },
            this
          )
        }
      </div>
    );
  }
}