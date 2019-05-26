import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import themes from './util/theme';
import Switch from '../components/switch';
import ShowCode from './util/ShowCode';

import '../components/switch/index.scss';

storiesOf('开关 Swtich', module)
  .addDecorator(withKnobs)
  .add('浏览样式', () => (
    <div>
      <ShowCode title='默认' sub='受控组件'>
        <Switch checked/>
      </ShowCode>
      <ShowCode title='内部文字'>
        <Switch checked text='扇子' />
      </ShowCode>
      <ShowCode title='主题配色' sub='更多配色查看阅读须知中的 主题配色'>
        <Switch checked theme='meihong'/>
        <Switch checked theme='huaqing'/>
        <Switch checked theme='danger'/>
        <Switch checked theme='success'/>
        <Switch checked theme='muyun'/>
      </ShowCode>
    </div>
  ), {
    info: {
      text: `为爱红芳满砌阶，教人**扇**上画将来`,
      inline: true,
      source: false
    }
  })
  .add('自定义', () => (
    <div className='zhui-custom'>
      <Switch 
        theme={select('theme', themes, 'default')}
        checked={boolean('checked', true)}
        text={text('text', '')}
      />
    </div>
  ))