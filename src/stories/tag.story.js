import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Tag from '../components/tag';

import '../components/tag/index.scss';

storiesOf('标签 Tag', module)
  .addDecorator(withKnobs)
  .add('默认', () => (
    <Tag>标签</Tag>
  ), { notes: '笔架沾窗雨，`书签`映隙曛'})
  .add('更改配色', () => (
    <div>
      <Tag color='#c45a65'>标签</Tag>
      <Tag color='#0f1423'>标签</Tag>
      <Tag color='#ccccd6'>标签</Tag>
    </div>
  ), { notes: '笔架沾窗雨，`书签`映隙曛'})
  .add('可关闭', () => (
    <Tag color='#2376b7' closable>标签</Tag>
  ), { notes: '笔架沾窗雨，`书签`映隙曛'})
  .add('自定义', () => (
    <Tag 
      color={text('color', '#2376b7')} 
      closable={boolean('closable', false)}
      visiable={boolean('visiable', true)}
    >{text('内容', '标签')}</Tag>
  ), { notes: '笔架沾窗雨，`书签`映隙曛'})