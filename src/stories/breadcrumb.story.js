import React from 'react';
import { storiesOf } from '@storybook/react';
import Breadcrumb from '../components/breadcrumb';

import '../components/breadcrumb/index.scss';

storiesOf('面包屑导航 Breadcrumb', module)
  .add('默认', () => (
    <Breadcrumb 
      list={
        [
          { value: '百度', href: '//www.baidu.com' },
          { value: '谷歌', href: '//www.google.com' },
          { value: '必应' }
        ]
      } 
    />
  ), { notes: '停杯投`箸`不能食，拔剑四顾心茫然'})
  .add('直接调用', () => (
    <Breadcrumb>
      <Breadcrumb.Item value="百度" href="//www.baidu.com" />
      <Breadcrumb.Item value="谷歌" href="//www.google.com" />
      <Breadcrumb.Item value="必应" />
    </Breadcrumb>
  ), { notes: '停杯投`箸`不能食，拔剑四顾心茫然'})