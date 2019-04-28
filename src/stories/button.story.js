import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import Button from '../components/button';
import Icon from '../components/icon';
import themes from './util/theme';

import '../components/button/index.scss';

storiesOf('按钮 Button', module)
  .addDecorator(withKnobs)
  .add('默认', () => (
    <Button>靛青</Button>
  ), {notes: '欲把西湖比西子，`淡妆浓抹`总相宜'})
  .add('颜色', () => (
    <div>
      <Button theme='primary' outline>黛色</Button>
      <Button theme='primary'>黛色</Button>
      <Button theme='success' outline>竹青</Button>
      <Button theme='success'>竹青</Button>
      <Button theme='danger' outline>胭脂</Button>
      <Button theme='danger'>胭脂</Button>
    </div>
  ), {notes: '欲把西湖比西子，`淡妆浓抹`总相宜'})
  .add('大小', () => (
    <div>
      <Button theme='primary' size='large'>大按钮</Button>
      <Button theme='success' outline>中按钮</Button>
      <Button theme='danger' size='small'>小按钮</Button>
    </div>
  ), {notes: '欲把西湖比西子，`淡妆浓抹`总相宜'})
  .add('形状', () => (
    <div>
      <Button theme='primary' size='large' round>大按钮</Button>
      <Button theme='success' outline round>中按钮</Button>
      <Button theme='danger' size='small' round>小按钮</Button>
    </div>
  ), {notes: '欲把西湖比西子，`淡妆浓抹`总相宜'})
  .add('块', () => (
    <div>
      <Button block>块</Button>
      <Button theme='primary' round block>块</Button>
      <Button theme='success' block>块</Button>
      <Button theme='danger' round block>块</Button>
    </div>
  ), {notes: '欲把西湖比西子，`淡妆浓抹`总相宜'})
  .add('边框', () => (
    <div>
      <Button kong="muyun">暮云</Button>
      <Button kong="yuanshan">远山</Button>
      <Button kong="meihong">莓红</Button>
    </div>
  ), {notes: '欲把西湖比西子，`淡妆浓抹`总相宜'})
  .add('链接', () => (
    <div>
      <Button theme='primary' href='https://github.com/zhui-team/zhui'>链接跳转</Button>
      <Button theme='success' size='large' href='https://github.com/zhui-team/zhui' target='_blank' round>打开窗口</Button>
    </div>
  ))
  .add('禁用', () => (
    <Button disabled>不可用</Button>
  ), {notes: '欲把西湖比西子，`淡妆浓抹`总相宜'})
  .add('加载', () => (
    <div>
      <Button loading>加载</Button>
      <Button theme='primary' loading>加载</Button>
      <Button theme='danger' loading round>加载</Button>
    </div>
  ), {notes: '欲把西湖比西子，`淡妆浓抹`总相宜'})
  .add('图标按钮', () => (
    <div>
      <Button><Icon type='music' />音乐</Button>
      <Button theme='danger' outline round><Icon type='message' />消息</Button>
    </div>
  ), {notes: '欲把西湖比西子，`淡妆浓抹`总相宜'})
  .add('按钮组', () => (
    <div>
      <Button.Group>
        <Button round>左</Button>
        <Button>中</Button>
        <Button round>右</Button>
      </Button.Group>
    </div>
  ), {notes: '你可以将不同形状的按钮组合'})
  .add('主题配色', () => (
    <div>
      <Button theme='meihong'>梅红</Button>
      <Button theme='meihong' outline>梅红</Button>
      <Button theme='huaqing'>花青</Button>
      <Button theme='huaqing' outline>花青</Button>
      <Button theme='haitang'>海棠</Button>
      <Button theme='haitang' outline>海棠</Button>
      <Button theme='putaozi'>葡紫</Button>
      <Button theme='putaozi' outline>葡紫</Button>
    </div>
  ), {notes: '欲把西湖比西子，`淡妆浓抹`总相宜'})
  .add('自定义', () => (
    <Button
      theme={select('theme', themes, 'default')}
      size={select('size', {
        large: 'large',
        medium: 'medium',
        small: 'small',
      }, 'medium')}
      disabled={boolean('disable', false)}
      outline={boolean('outline', false)}
      round={boolean('round', false)}
      block={boolean('block', false)}
    >
      {text('内容', '自定义按钮')}
    </Button>
  ), {notes: '你可以在这里自由组合组件'})