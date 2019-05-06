import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RateSVG from './RateSVG';

export default class RateItem extends PureComponent {
  static propTypes = {
    active: PropTypes.bool,
    onHover: PropTypes.func,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
  }

  static defaultProps = {
    active: false,
    onHover: () => null,
    onClick: () => null,
    disabled: false
  }

  clickRate = (e) => {
    const {
      index,
      onClick,
      disabled
    } = this.props;

    if (!disabled) {
      onClick(e, index);
    }
  }

  hoverRate = (e) => {
    const {
      index,
      onHover,
      disabled
    } = this.props;

    if (!disabled) {
      onHover(e, index);
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
        <RateSVG active={active} />
      </div>
    );
  }
}
