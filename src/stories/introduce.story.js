import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../components/card';
import Button from '../components/button';

import '../components/card/index.scss';
import '../components/button/index.scss';

storiesOf('阅读须知！！!', module)
  .add('说明', () => (
    <div>
      <h5>1. 点击面板内的 Notes 可以查看组件的灵感来源或注意事项</h5>
      <h5>2. 点击面板右上角的 Show Info 可以查看组件代码</h5>
      <h5>3. 一些组件内的 自定义 可以让你自由调试组件</h5>
    </div>
  ))
  .add('主题配色', () => (
    <div style={{width: 800}}>
      <h5>目前支持的配色</h5>
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
    </div>
  ))
  .add('材质', () => (
    <div>
      <h5>使用见Notes</h5>
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
    </div>
  ), {
    notes: 
    `不适用于 outline 样式
     \n
    .material {\n
      background-image: url("https://s2.ax1x.com/2019/04/16/AvLUhj.jpg") !important;
      background-blend-mode: multiply;
    } 
    该图片仅供参考，可自由替换
    
    <img src='https://s2.ax1x.com/2019/04/16/AvLUhj.jpg' width='100' height='100'/>`
})
