import React from 'react';
import { storiesOf } from '@storybook/react';
import ShowCode from './util/ShowCode';

import Portal from '../components/portal';

import '../components/portal/index.scss';

storiesOf('传送门 Portal', module)
  .add('浏览样式', () => (
    <div>
      <ShowCode title='默认'>
        <Portal center style={{top: 200}}>
          <h1>Portal包裹元素会默认出现在body节点上</h1>
        </Portal>
      </ShowCode>
      <ShowCode title='指定位置'>
        <Portal selector='#root' center>
          <p>使用dom参数来指定任意的container，规则同querySelector，若节点不存在则不会渲染</p>
        </Portal>
      </ShowCode>
      <ShowCode title='隐藏'>
        <Portal center visiable={false}>
          <h1>我被隐藏了</h1>
        </Portal>
      </ShowCode>
    </div>
  ), {
    info: {
      text: `欲求阴阳理，入我**太极**门'`,
      inline: true,
      source: false
    }
  })