import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import themes from './util/theme';
import Radio from '../components/radio';
import ShowCode from './util/ShowCode';

import '../components/radio/index.scss';

storiesOf('单选框 Radio', module)
  .addDecorator(withKnobs)
  .add('浏览样式', () => (
    <div>
      <ShowCode title='默认' sub='Radio内文字为提供的字符串的第一个字'>
        <Radio text='春色满园关不住' />
      </ShowCode>
      <ShowCode title='组'>
        <Radio.Group value={2} onChange={(e) => console.log(e)}>
          <Radio value={1} text='雾'/>
          <Radio value={2} text='雨'/>
          <Radio value={3} text='风' disabled/>
        </Radio.Group>
      </ShowCode>
      <ShowCode title='配色' sub='默认配色为 海棠(haitang)'>
        <Radio text='春'/>
        <Radio theme='primary' text='黛'/>
        <Radio theme='success' text='竹'/>
        <Radio theme='danger' text='胭'/>
        <Radio theme='huaqing' text='青'/>
        <Radio theme='muyun' text='暮'/>
      </ShowCode>
    </div>
  ), {
    info: {
      text: `**印章**金磊磊，阶树玉娟娟`,
      inline: true,
      source: false
    }
  })
  .add('自定义', () => (
    <div className='zhui-custom'>
      <Radio 
        text={text('text', '春天')}
        checked={boolean('checked', false)}
        theme={select('theme', themes, 'default')}
      />
    </div>
  ))
  