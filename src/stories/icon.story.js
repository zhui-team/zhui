import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '../components/icon';
import ShowCode from './util/ShowCode';

import '../components/icon/index.scss';

storiesOf('图标 Icon', module)
  .add('浏览样式', () => (
    <div>
      <ShowCode title='默认样式'>
        <Icon type='music' />
      </ShowCode>
      <ShowCode title='颜色修改'>
        <Icon type='download' color='#1770a8' />
        <Icon type='message' color='#41395b' />
        <Icon type='bell' color='#6f8657' />
        <Icon type='email' color='#94232d' />
      </ShowCode>
      <ShowCode hideCode title='所有图标'>
        <div className="zhuiicon-wrapper">
          <Icon type='music' /> music  
        </div>
        <div className="zhuiicon-wrapper">
          <Icon type='email' /> email  
        </div>
        <div className="zhuiicon-wrapper">
          <Icon type='search' /> search  
        </div>
        <div className="zhuiicon-wrapper">
          <Icon type='message' /> message  
        </div>
        <div className="zhuiicon-wrapper">
          <Icon type='camera' /> camera  
        </div>
        <div className="zhuiicon-wrapper">
          <Icon type='picture' /> picture  
        </div>
        <div className="zhuiicon-wrapper">
          <Icon type='download' /> download  
        </div>
        <div className="zhuiicon-wrapper">
          <Icon type='refresh' /> refresh  
        </div>
        <div className="zhuiicon-wrapper">
          <Icon type='store' /> store  
        </div>
        <div className="zhuiicon-wrapper">
          <Icon type='delete' /> delete  
        </div>
        <div className="zhuiicon-wrapper">
          <Icon type='social' /> social  
        </div>
        <div className="zhuiicon-wrapper">
          <Icon type='index' /> index  
        </div>
        <div className="zhuiicon-wrapper">
          <Icon type='setting' /> setting  
        </div>
        <div className="zhuiicon-wrapper">
          <Icon type='time' /> time  
        </div>
        <div className="zhuiicon-wrapper">
          <Icon type='menu' /> menu  
        </div>
        <div className="zhuiicon-wrapper">
          <Icon type='calculator' /> calculator  
        </div>
        <div className="zhuiicon-wrapper">
          <Icon type='edit' /> edit  
        </div>
        <div className="zhuiicon-wrapper">
          <Icon type='person' /> person  
        </div>
        <div className="zhuiicon-wrapper">
          <Icon type='achievement' /> achievement  
        </div>
        <div className="zhuiicon-wrapper">
          <Icon type='bell' /> bell  
        </div>
      </ShowCode>
    </div>
    ), {
      info: {
        inline: true,
        source: false,
        text: `
          图标来源为[Iconfont](https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=8227)，侵删。
          多种主题配色，详情可见主页的提供配色
        `
      }
    }
  )