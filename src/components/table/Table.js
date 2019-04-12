import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'astro-classname';
import Body from './modules/Body';
import Head from './modules/Head';

import './index.css';

export default class Table extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    dataSource: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    prefix: PropTypes.string
  }

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

    const classes = cn(className, `${prefix}-wrapper`);
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