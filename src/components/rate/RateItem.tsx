import * as React from 'react';
import RateSVG from './RateSVG';

export interface IRateItemProps {
  active?: boolean;
  onHover?: (index: number) => void;
  onClick?: (e: React.MouseEvent, index: number) => void;
  disabled?: boolean;
  index?: number;
}

export default class RateItem extends React.Component<IRateItemProps> {
  static defaultProps = {
    active: false,
    onHover: () => null,
    onClick: () => null,
    disabled: false
  }

  clickRate = (e: React.MouseEvent) => {
    const {
      index,
      onClick,
      disabled
    } = this.props;

    if (!disabled) {
      onClick(e, index);
    }
  }

  hoverRate = () => {
    const {
      index,
      onHover,
      disabled
    } = this.props;

    if (!disabled) {
      onHover(index);
    }
  }

  render() {
    const {
      active
    } = this.props;

    return (
      <div
        className="zhui-rate-item"
        onClick={this.clickRate}
        onMouseMove={this.hoverRate}
      >
        {RateSVG({ active })}
      </div>
    );
  }
}
