import * as React from 'react';
import cn from 'astro-classname';
import Body from './modules/Body';
import Head from './modules/Head';

import '../table/index.css';

export interface ITableProps {
  className?: string;
  dataSource: any[];
  columns: any[];
  prefix?: string;
}

export default class Table extends React.Component<ITableProps> {
  static defaultProps = {
    className: '',
    dataSource: [],
    columns: [],
    prefix: 'zhui-table'
  }

  render() {
    const {
      className,
      dataSource,
      columns,
      prefix
    } = this.props;

    const classes: string = cn(className, `${prefix}-wrapper`);
    return (
      <div className={classes}>
        <table>
          <Head columns={columns} />
          <Body
            columns={columns}
            dataSource={dataSource}
          />
        </table>
      </div>
    );
  }
}