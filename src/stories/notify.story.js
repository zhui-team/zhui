import React from 'react';
import { storiesOf } from '@storybook/react';
import Notify from '../components/notify';
import Button from '../components/button';

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
  .add('默认', () => (
    <div>
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
    </div>
  ), { notes: '千门万户曈曈日，总把`新桃`换旧符'})
  .add('自定义位置', () => (
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
  ), { notes: '千门万户曈曈日，总把`新桃`换旧符'})
  .add('黑色主题', () => (
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
  ), { notes: '千门万户曈曈日，总把`新桃`换旧符'})
  .add('参数', () => (
    <p>参数查看Notes</p>
  ), {
    notes: md + '\n ## 示例' + `\n Notify.open({\n
      message: '位置改变的消息',
      duration: 200000,
      theme: 'dark',
      selector: 'body'
      position: {
        top: 100,
        right: 100,
      }\n
    })`
  })