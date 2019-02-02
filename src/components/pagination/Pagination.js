import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'astro-classname';

import './index.scss';

export default class Switch extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    prefix: PropTypes.string,
    current: PropTypes.number.isRequired,
    pageSize: PropTypes.number,
    total: PropTypes.number.isRequired,
    showTotal: PropTypes.bool,
    onChange: PropTypes.func
  }

  static defaultProps = {
    className: '',
    prefix: 'zhui-pagination',
    showTotal: false,
    pageSize: 10,
    onChange: () => null
  }

  _onChange = e => {
    const { onChange } = this.props;
    let page = e.currentTarget.innerText;
    onChange(page, e);
  }

  renderList = () => {
    const { total, current } = this.props;
    let list = [];
    for(let i = 0 ; i < total ; i++) {
      i + 1 === current ? 
        list.push(
          <span key={i} onClick={this._onChange} className='zhui-pagination-active'>{i + 1}</span>
        ) :
        list.push(
          <span key={i} onClick={this._onChange}>{i + 1}</span>
        )
    }

    return list;
  }

  render() {
    let {
      className,
      prefix,
      current,
      pageSize,
      total,
      showTotal,
      ...others
    } = this.props;

    const classes = cn(className, prefix);

    current = current < 1 ? 1 :
      current > total ? total : current;

    return (
      <div className={classes} {...others}>
      {
        showTotal && <span>共{total}页，当前{current}页</span>
      }
        <span>last</span>
        {
          this.renderList()
        }
        <span>next</span>
      </div>
    );
  }
}