import * as React from 'react';
import cn from 'astro-classname';
import RateItem from './RateItem';

import '../rate/index.css';

export interface IRateProps {
  value?: number;
  className?: string;
  disabled?: boolean;
  onChange?: (e: React.MouseEvent, index: number) => void;
}

export interface IRateState {
  value?: number;
  clickValue?: number;
}

export default class Rate extends React.Component<IRateProps, IRateState> {
  static defaultProps = {
    className: '',
    value: 0,
    disabled: false,
    onChange: () => null
  }

  constructor(props: Readonly<IRateProps>) {
    super(props);
    this.state = {
      value: props.value || 0,
      clickValue: props.value
    };
  }

  handleClick = (e: React.MouseEvent, index: number) => {
    this.setState({
      value: index + 1,
      clickValue: index + 1
    });

    this.props.onChange(e, index);
  }

  handleHover = (index: number) => {
    const { value } = this.state;
    if (index + 1 !== value) {
      this.setState({
        value: index + 1
      });
    }
  }

  handleLeave = () => {
    const { value, clickValue } = this.state;
    if (value !== clickValue) {
      this.setState({
        value: clickValue
      });
    }
  }

  renderRateList(): React.ReactNode[] {
    const { disabled } = this.props;
    let list = [];
    let activeIndex = this.state.value;

    activeIndex = (activeIndex >= 0 && activeIndex <= 5) ? activeIndex : 0;
    for (let i = 0; i < 5; i++) {
      list.push(
        <RateItem
          key={i}
          index={i}
          active={i < activeIndex ? true : false}
          onClick={this.handleClick}
          onHover={this.handleHover}
          disabled={disabled}
        />
      );
    }

    return list;
  }

  render() {
    const {
      className,
      disabled
    } = this.props;

    const classes = cn(className, 'zhui-rate', {
      'zhui-rate-disabled': disabled
    });

    return (
      <div
        onMouseLeave={this.handleLeave}
        className={classes}
      >
        {this.renderRateList()}
      </div>
    );
  }
}
