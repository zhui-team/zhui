import React from 'react';
import { storiesOf } from '@storybook/react';
import Breadcrumb from '../components/breadcrumb';
import ShowCode from './util/ShowCode';

import '../components/breadcrumb/index.scss';

storiesOf('面包屑导航 Breadcrumb', module)
  .add('浏览样式', () => (
    <div>
      <ShowCode title='默认'>
        <Breadcrumb 
          list={
            [
              { value: '百度', href: '//www.baidu.com' },
              { value: '谷歌', href: '//www.google.com' },
              { value: '必应' }
            ]
          } 
        />
      </ShowCode>
      <ShowCode title='直接调用'>
        <Breadcrumb>
          <Breadcrumb.Item value="百度" href="//www.baidu.com" />
          <Breadcrumb.Item value="谷歌" href="//www.google.com" />
          <Breadcrumb.Item value="必应" />
        </Breadcrumb>
      </ShowCode>
    </div>
  ), { 
    info: {
      text: `停杯投**箸**不能食，拔剑四顾心茫然`,
      inline: true,
      source: false
    }
  })