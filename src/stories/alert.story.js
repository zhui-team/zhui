import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import themes from './util/theme';
import Alert from '../components/alert';
import ShowCode from './util/ShowCode';

import '../components/alert/index.scss';

storiesOf('提示 Alert', module)
  .addDecorator(withKnobs)
  .add('浏览样式', () => (
    <div>
      <ShowCode title='默认样式' sub='默认配色为 花青(huaqing)'>
        <Alert message='天青色等烟雨' />
      </ShowCode>
      <ShowCode title='主题配色' sub='更多配色查看阅读须知中的 主题配色'>
        <Alert message='胜日寻芳泗水滨' theme='meihong' />
        <Alert message='无边光景一时新' theme='haitang' />
        <Alert message='等闲识得东风面' theme='ganglan' />
        <Alert message='万紫千红总是春' theme='success' />
      </ShowCode>
      <ShowCode title='可关闭'>
        <Alert message='天青色等烟雨' closable />
      </ShowCode>
    </div>
  ), { 
    info: {
      text: `中华民族的文化瑰宝，**楹联**`,
      inline: true,
      source: false
    }
  })
  .add('自定义', () => (
    <div className='zhui-custom'>
      <Alert
        message={text('message', '天青色等烟雨')}
        closable={boolean('closable', false)}
        visiable={boolean('visiable', true)}
        theme={select('theme', themes, 'default')}
      />
    </div>
  ))