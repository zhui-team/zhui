import * as React from 'react';
import omit from 'lodash/omit';
import cn from 'astro-classname';

import '../pagination/index.css';

export interface IPaginationProps {
  className?: string;
  prefix?: string;
  current: number;
  pageSize?: number;
  total: number;
  showTotal?: boolean;
  onChange?: (page: string, e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IPaginationState {
  current?: number;
}

export default class Switch extends React.Component<IPaginationProps, IPaginationState> {
  static defaultProps = {
    className: '',
    prefix: 'zhui-pagination',
    showTotal: false,
    pageSize: 10,
    onChange: () => null
  }

  state: IPaginationState = {
    current: this.props.current
  }

  _onChange = e => {
    const { onChange } = this.props;
    let page = e.currentTarget.innerText;
    onChange(page, e);
    this.setState({
      current: Number(page)
    });
  }

  renderList = () => {
    const { total } = this.props;
    const { current } = this.state;
    let list = [];

    for (let i = 0; i < total; i++) {
      i + 1 === current ?
        list.push(
          <span key={i} onClick={this._onChange} className={'zhui-pagination-active'}>{i + 1}</span>
        ) :
        list.push(
          <span key={i} onClick={this._onChange}>{i + 1}</span>
        );
    }

    return list;
  }

  togglePage(isGoBack) {
    const { current } = this.state;
    if (isGoBack && current > 1) {
      this.setState({
        current: current - 1
      });
    } else if (!isGoBack && current < this.props.total) {
      this.setState({
        current: current + 1
      });
    }
  }

  render() {
    const {
      className,
      prefix,
      pageSize,
      total,
      showTotal,
      ...others
    } = this.props;
    let { current } = this.state;
    const classes: string = cn(className, prefix);
    const nodeProps: any = omit(others, ['onChange']);

    current = current < 1 ? 1 :
      current > total ? total : current;

    return (
      <div className={classes} {...nodeProps}>
        {
          showTotal && <span>共{total}页，当前第{current}页</span>
        }
        <span onClick={this.togglePage.bind(this, true)}>上一页</span>
        {
          this.renderList()
        }
        <span onClick={this.togglePage.bind(this, false)}>下一页</span>
      </div>
    );
  }
}