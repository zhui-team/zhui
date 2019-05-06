import React from 'react';
import { storiesOf } from '@storybook/react';
import Rate from '../components/rate';

import '../components/rate/index.scss';

storiesOf('评分 Rate', module)
  .add('默认', () => (
    <Rate 
      value={1} 
      onChange={(e, index) => console.log(e, index)}
    />
  ), {notes: '一簇`莲灯`亦可观，隔墙箫鼓二更残'})
  .add('禁用', () => (
    <Rate value={3} disabled />
  ), {notes: '一簇`莲灯`亦可观，隔墙箫鼓二更残'})
  