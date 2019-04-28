import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import themes from './util/theme';
import Alert from '../components/alert';

import '../components/alert/index.scss';

storiesOf('提示 Alert', module)
  .addDecorator(withKnobs)
  .add('默认', () => (
    <Alert message='天青色等烟雨' />
  ), { notes: '中华民族的文化瑰宝，`楹联`'})
  .add('主题配色', () => (
    <div>
      <Alert message='胜日寻芳泗水滨' theme='meihong' />
      <Alert message='无边光景一时新' theme='haitang' />
      <Alert message='等闲识得东风面' theme='ganglan' />
      <Alert message='万紫千红总是春' theme='success' />
    </div>
  ), {notes:  '多种主题配色，详情可见主页的提供配色'})
  .add('可关闭', () => (
    <Alert message='天青色等烟雨' closable />
  ), { notes: '中华民族的文化瑰宝，`楹联`'})
  .add('自定义', () => (
    <Alert
      message={text('message', '天青色等烟雨')}
      closable={boolean('closable', false)}
      visiable={boolean('visiable', true)}
      theme={select('theme', themes, 'default')}
    />
  ), { notes: '中华民族的文化瑰宝，`楹联`'})