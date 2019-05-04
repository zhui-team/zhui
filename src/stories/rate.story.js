import React from 'react';
import { storiesOf } from '@storybook/react';
import Rate from '../components/rate';

import '../components/rate/index.scss';

storiesOf('评分 Rate', module)
  .add('默认', () => (
    <Rate value={1} />
  ))
  .add('禁用', () => (
    <Rate value={3} disabled />
  ))
  