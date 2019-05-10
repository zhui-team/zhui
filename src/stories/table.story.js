import React from 'react';
import { storiesOf } from '@storybook/react';
import Table from '../components/table';

import '../components/table/index.scss';

storiesOf('表格 Table', module)
  .add('默认', () => (
    <Table
      dataSource={[{
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
      }, {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
      }]}
      columns={[{
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      }, {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      }]}
    />
  ))