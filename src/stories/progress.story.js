import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select, number } from '@storybook/addon-knobs';
import Progress from '../components/progress';

import '../components/progress/index.scss';

storiesOf('进度条 Progress', module)
  .addDecorator(withKnobs)
  .add('默认', () => (
    <div style={{width: 600}}>
      <Progress percent={1} />
      <Progress percent={50} />
      <Progress percent={30} status='exception' />
    </div>
  ), { notes: '茶迎过客无新旧，`秤`定须弥有重轻'})
  .add('隐藏数据', () => (
    <div style={{width: 600}}>
      <Progress percent={50} showInfo={false}/>
    </div>
  ), {notes:  '不建议，这样会让数据失去灵魂'})
  .add('自定义', () => (
    <div style={{width: 600}}>
      <Progress 
        percent={number('percent', 1)}
        showInfo={boolean('showInfo', true)}
        status={select('status', {
          active: 'active',
          exception: 'exception'
        }, 'active')}
      />
    </div>
  ), { notes: '茶迎过客无新旧，`秤`定须弥有重轻'})