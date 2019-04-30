import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select, number } from '@storybook/addon-knobs';
import themes from './util/theme';
import Input from '../components/input';
import Icon from '../components/icon';

import '../components/input/index.scss';

storiesOf('输入框 Input', module)
  .addDecorator(withKnobs)
  .add('默认', () => (
    <Input />
  ), { notes: '睡起有恨和`画卷`，燕归无语傍人斜'})
  .add('大小', () => (
    <div>
      <Input size='large' placeholder='大' />
      <Input placeholder='中' />
      <Input size='small' placeholder='小' />
    </div>
  ), { notes: '睡起有恨和`画卷`，燕归无语傍人斜'})
  .add('宽度', () => (
    <Input placeholder='我很长' width={400} />
  ), { notes: '睡起有恨和`画卷`，燕归无语傍人斜'})
  .add('主题配色', () => (
    <div>
      <Input theme='primary' placeholder='黛色' />
        <Input theme='success' placeholder='竹青' />
        <Input theme='danger' placeholder='胭脂' />
        <Input theme='meihong' placeholder='梅红' />
        <Input theme='ganglan' placeholder='钢蓝' />
        <Input theme='haitang' placeholder='海棠红' />
        <Input theme='yuanshan' placeholder='远山紫' />
    </div>
  ), {notes:  '多种主题配色，详情可见主页的提供配色'})
  .add('前缀与后缀', () => (
    <div>
      <Input addonBefore={'邮箱'} />
      <Input addonAfter='元' size='large' />
      <Input addonBefore='A' addonAfter={'Z'} size='small' />
    </div>
  ), { notes: '睡起有恨和`画卷`，燕归无语傍人斜'})
  .add('添加图标', () => (
    <Input icon={<Icon type='search' />} placeholder='搜索' />
  ), { notes: '睡起有恨和`画卷`，燕归无语傍人斜'})
  .add('文本域', () => (
    <Input.Textarea placeholder='搜索' width={240} theme='ganglan' />
  ), { notes: '睡起有恨和`画卷`，燕归无语傍人斜'})
  .add('不可用', () => (
    <div>
      <Input disabled />
      <Input.Textarea disabled />
    </div>
  ), { notes: '睡起有恨和`画卷`，燕归无语傍人斜'})
  .add('自定义', () => (
    <Input
      disabled={boolean('disabled', false)}
      width={number('width', 200)}
      size={select('size', {
        large: 'large',
        medium: 'medium',
        small: 'small',
      }, 'medium')}
      theme={select('theme', themes, 'default')}
      value={text('value', '输入框')}
      placeholder={text('placeholder', '待输入...')}
    />
  ), { notes: '睡起有恨和`画卷`，燕归无语傍人斜'})