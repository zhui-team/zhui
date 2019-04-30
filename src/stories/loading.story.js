import React from 'react';
import { storiesOf } from '@storybook/react';
import Loading from '../components/loading';

import '../components/loading/index.scss';

storiesOf('加载 Loading', module)
  .add('默认', () => (
    <Loading />
  ), { notes: '欲求阴阳理，入我`太极`门'})
  .add('包裹', () => (
    <Loading>
      <p style={{height: 200, textAlign: 'center'}}>我被包住啦</p>
    </Loading>
  ))
  .add('全图', () => (
    <Loading global show={false}/>
  ), {notes: '开启global后loading范围为整个屏幕'})