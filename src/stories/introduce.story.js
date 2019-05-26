import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../components/card';
import Button from '../components/button';
import ShowCode from './util/ShowCode';

import '../components/card/index.scss';
import '../components/button/index.scss';

storiesOf('阅读须知！！!', module)
  .add('说明', () => (
    <div className='zhui-custom'>
      <h5>1. 注意查看组件中的部分副标题</h5>
      <h5>2. 点击面板右上角的 ShowCode 可以查看组件代码 (部分错误代码会在副标题中纠错)</h5>
      <h5>3. 一些组件内的 自定义 可以让你自由调试组件</h5>
    </div>
  ), {
    info: {
      inline: true,
      source: false
    }
  })
  .add('主题配色', () => (
    <div style={{width: 800}}>
      <ShowCode hideCode title='目前支持的配色'>
        <Card theme='primary' title='primary' width={140}>
          <p>黛</p>
          <p>#41395b</p>
        </Card>
        <Card theme='success' title='success' width={140}>
          <p>竹青</p>
          <p>#6f8657</p>
        </Card>
        <Card theme='danger' title='danger' width={140}>
          <p>胭脂</p>
          <p>#94232d</p>
        </Card>
        <Card theme='meihong' title='meihong' width={140}>
          <p>梅红</p>
          <p>#c45a65</p>
        </Card>
        <Card theme='putaozi' title='putaozi' width={140}>
          <p>葡萄紫</p>
          <p>#4c1f24</p>
        </Card>
        <Card theme='huaqing' title='huaqing' width={140}>
          <p>花青</p>
          <p>#2376b7</p>
        </Card>
        <Card theme='ganglan' title='ganglan' width={140}>
          <p>钢蓝</p>
          <p>#0f1423</p>
        </Card>
        <Card theme='haitang' title='haitang' width={140}>
          <p>海棠红</p>
          <p>#f03752</p>
        </Card>
        <Card theme='muyun' title='muyun' width={140}>
          <p>暮云灰</p>
          <p>#4f383e</p>
        </Card>
        <Card theme='yuanshan' title='yuanshan' width={140}>
          <p>远山紫</p>
          <p>#ccccd6</p>
        </Card>
      </ShowCode>
    </div>
  ), {
    info: {
      inline: true,
      source: false
    }
  })
  .add('材质', () => (
    <ShowCode 
      hideCode 
      title='材质'
      sub='不适用于 outline 样式，添加的 class 见 Notes'
    >
      <Card theme='danger' className='material' title='primary' width={140}>
        <p>胭脂</p>
        <p>#94232d</p>
      </Card>
      <Card theme='meihong' className='material' title='success' width={140}>
        <p>梅红</p>
        <p>#c45a65</p>
      </Card>
      <Card theme='huaqing' className='material' title='success' width={140}>
        <p>花青</p>
        <p>#2376b7</p>
      </Card>
      <br />
      <Button theme='primary' className='material'>黛色</Button>
      <Button theme='success' className='material'>竹青</Button>
      <Button theme='danger' className='material'>胭脂</Button>
    </ShowCode>
  ), {
    notes: `
    .material {
      background-image: url("https://s2.ax1x.com/2019/04/16/AvLUhj.jpg") !important;
      background-blend-mode: multiply;
    }\n
    该图片仅供参考，可自由替换
    
    <img src='https://s2.ax1x.com/2019/04/16/AvLUhj.jpg' width='100' height='100'/>`,
    info: {
      inline: true,
      source: false,
      disabled: true
    }
  })
