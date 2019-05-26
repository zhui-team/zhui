import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select, number } from '@storybook/addon-knobs';
import Progress from '../components/progress';
import ShowCode from './util/ShowCode';

import '../components/progress/index.scss';

storiesOf('进度条 Progress', module)
  .addDecorator(withKnobs)
  .add('浏览样式', () => (
    <div>
      <ShowCode title='默认'>
        <Progress percent={1} />
        <Progress percent={50} />
        <Progress percent={30} status='exception' />
      </ShowCode>
      <ShowCode title='隐藏数据' sub='不建议，这样会让数据失去灵魂'>
        <Progress percent={50} showInfo={false}/>
      </ShowCode>
    </div>
  ), {
    info: {
      text: `茶迎过客无新旧，**秤**定须弥有重轻`,
      inline: true,
      source: false
    }
  })
  .add('自定义', () => (
    <div style={{width: 300}} className='zhui-center'>
      <Progress 
        percent={number('percent', 1)}
        showInfo={boolean('showInfo', true)}
        status={select('status', {
          active: 'active',
          exception: 'exception'
        }, 'active')}
      />
    </div>
  ))