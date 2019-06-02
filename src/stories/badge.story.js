import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import Badge from '../components/badge';
import ShowCode from './util/ShowCode';

import '../components/badge/index.scss';

storiesOf('徽标 Badge', module)
  .add('浏览样式', () => (
    <div>
      <ShowCode title='默认' sub='number内容截取前两位，string内容截取第一位'>
        <Badge content='荷花' />
      </ShowCode>
      <ShowCode title='包裹元素'>
        <Badge content={20}>
          <span className='zhui-test-block'></span>
        </Badge>
        <Badge content='花儿'>
          <span className='zhui-test-block'></span>
        </Badge>
      </ShowCode>
    </div>
  ), { 
    info: {
      text: `**荷**风送香气，竹露滴清响`,
      inline: true,
      source: false
    }
  })