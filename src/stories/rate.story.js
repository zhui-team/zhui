import React from 'react';
import { storiesOf } from '@storybook/react';
import Rate from '../components/rate';
import ShowCode from './util/ShowCode';

import '../components/rate/index.scss';

storiesOf('评分 Rate', module)
  .add('浏览样式', () => (
    <div>
      <ShowCode title='默认'>
        <Rate 
          value={1} 
          onChange={(e, index) => console.log(e, index)}
        />
      </ShowCode>
      <ShowCode title='禁用'>
        <Rate value={3} disabled />
      </ShowCode>
    </div>
  ), {
    info: {
      text: `一簇**莲灯**亦可观，隔墙箫鼓二更残`,
      inline: true,
      source: false
    }
  })
  