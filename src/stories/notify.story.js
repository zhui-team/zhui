import React from 'react';
import { storiesOf } from '@storybook/react';
import Notify from '../components/notify';
import Button from '../components/button';
import ShowCode from './util/ShowCode';

import '../components/notify/index.scss';
import '../components/button/index.scss';

const md = `| property | proptype | require | default | description |
| ------ | ------ | ------ | ------ | ------ |
| className | String | false | '' | |
| message | String | false | '' | |
| selector | String | false | '' | 渲染的元素位置, 规则同querySelector, 默认为body
| theme | [light, dark] | false | 'light' ||
| prefix | String | false | 'zhui-notify' ||
| position | Object | false | {} | 传入对象`

storiesOf('消息 Notify', module)
  .add('浏览样式', () => (
    <div>
      <ShowCode title='默认' sub='Notify.open({message, callback})'>
        <Button 
          theme='primary'
          outline
          onClick={
            () => Notify.open({
              message: '这是一条短消息',
              callback: () => console.log('短消息')
            })
          }
        >短消息</Button>
        <Button 
          theme='primary'
          outline
          onClick={
            () => Notify.open({
              duration: 3000,
              message: '这是一条很长很长很长很长的消息'
            })
          }
        >长消息</Button>
      </ShowCode>
      <ShowCode title='自定义位置'  sub='Notify.open({message, callback})'>
        <Button 
          theme='primary'
          outline
          onClick={
            () => Notify.open({
              message: '位置改变的消息',
              duration: 200000,
              position: {
                top: 100,
                right: 100,
              }
            })
          }
        >位置改变</Button>
      </ShowCode>
      <ShowCode title='黑色主题'  sub='Notify.open({message, callback})'>
        <Button 
          theme='primary'
          outline
          onClick={
            () => Notify.open({
              message: '这是一条黑色的短消息',
              theme: 'dark'
            })
          }
        >黑色</Button>
      </ShowCode>
    </div>
  ), {
    info: {
      text: md,
      inline: true,
      source: false
    }
  })