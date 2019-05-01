import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import themes from './util/theme';
import Radio from '../components/radio';

import '../components/radio/index.scss';

storiesOf('单选框 Radio', module)
  .addDecorator(withKnobs)
  .add('默认', () => (
    <div>
      <h5>Radio内文字为提供的字符串的第一个字</h5>
      <Radio text='春色满园关不住' />
    </div>
  ), { notes: '`印章`金磊磊，阶树玉娟娟'})
  .add('组', () => (
    <Radio.Group value={2} onChange={(e) => console.log(e)}>
      <Radio value={1} text='雾'/>
      <Radio value={2} text='雨'/>
      <Radio value={3} text='风' disabled/>
    </Radio.Group>
  ), { notes: '`印章`金磊磊，阶树玉娟娟'})
  .add('主题配色', () => (
    <div>
      <h5>默认为海棠色</h5>
      <Radio text='春'/>
      <Radio theme='primary' text='黛'/>
      <Radio theme='success' text='竹'/>
      <Radio theme='danger' text='胭'/>
      <Radio theme='huaqing' text='青'/>
      <Radio theme='muyun' text='暮'/>
    </div>
  ), { notes: '`印章`金磊磊，阶树玉娟娟'})
  .add('自定义', () => (
    <Radio 
      text={text('text', '春天')}
      checked={boolean('checked', false)}
      theme={select('theme', themes, 'default')}
    />
  ), { notes: '`印章`金磊磊，阶树玉娟娟'})
  