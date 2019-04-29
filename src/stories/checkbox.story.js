import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Checkbox from '../components/checkbox';

import '../components/checkbox/index.scss';

storiesOf('复选框 Checkbox', module)
  .addDecorator(withKnobs)
  .add('默认', () => (
    <Checkbox checked >灯笼</Checkbox>
  ), { notes: '`灯笼`青焰短,香印白灰销'})
  .add('不可用', () => (
    <Checkbox disabled checked/>
  ), {notes:  'checked状态由外部来维护，通过onchange事件修改checked'})
  .add('组', () => (
    <Checkbox.Group value={['active1', 'active3']}>
      <Checkbox value='active1'/>
      <Checkbox value='active2'/>
      <Checkbox value='active3'/>
    </Checkbox.Group>
  ), { notes: '`灯笼`青焰短,香印白灰销'})
  .add('自定义', () => (
    <Checkbox
      value={text('value', 'value1')}
      disabled={boolean('disabled', false)}
      checked={boolean('checked', false)}
    >{text('内容', '灯笼')}</Checkbox>
  ), { notes: '`灯笼`青焰短,香印白灰销'})