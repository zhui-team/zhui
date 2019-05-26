import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Checkbox from '../components/checkbox';
import ShowCode from './util/ShowCode';

import '../components/checkbox/index.scss';

storiesOf('复选框 Checkbox', module)
  .addDecorator(withKnobs)
  .add('浏览样式', () => (
    <div>
      <ShowCode title='默认' sub='受控组件，通过onchange事件修改checked'>
        <Checkbox checked >灯笼</Checkbox>
      </ShowCode>
      <ShowCode title='默认'>
        <Checkbox disabled checked/>
      </ShowCode>
      <ShowCode title='默认'>
        <Checkbox.Group value={['active1', 'active3']}>
          <Checkbox value='active1'/>
          <Checkbox value='active2'/>
          <Checkbox value='active3'/>
        </Checkbox.Group>
      </ShowCode>
    </div>
  ), { 
    info: {
      text: `**灯笼**青焰短,香印白灰销`,
      inline: true,
      source: false
    }
  })
  .add('自定义', () => (
    <div className='zhui-custom'>
      <Checkbox
        value={text('value', 'value1')}
        disabled={boolean('disabled', false)}
        checked={boolean('checked', false)}
      >{text('内容', '灯笼')}</Checkbox>
    </div>
  ))