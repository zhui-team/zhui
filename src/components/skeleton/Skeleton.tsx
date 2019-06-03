import * as React from 'react';
import cn from 'astro-classname';

import '../skeleton/index.css';

export interface ISkeletonProps {
  className?: string;
  loading?: boolean;
  children?: React.ReactNode;
  row?: number;
}

export default class Skeleton extends React.Component<ISkeletonProps> {
  static defaultProps = {
    className: '',
    loading: true,
    row: 3
  }

  renderSkeleton(): React.ReactNode {
    const { row } = this.props;
    let list = [];
    for (let i = 0; i < row; i++) {
      list.push(<div key={i}></div>);
    }

    return list;
  }

  render() {
    const {
      className,
      loading,
      children
    } = this.props;

    const classes: string = cn(className, 'zhui-skeleton');

    return (
      <div className={classes}>
        {loading ? this.renderSkeleton() : children}
      </div>
    );
  }
}