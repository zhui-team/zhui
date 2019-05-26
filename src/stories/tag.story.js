import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Tag from '../components/tag';
import ShowCode from './util/ShowCode';

import '../components/tag/index.scss';

storiesOf('标签 Tag', module)
  .addDecorator(withKnobs)
  .add('浏览样式', () => (
    <div>
      <ShowCode title='默认'>
        <Tag>标签</Tag>
      </ShowCode>
      <ShowCode title='更改配色'>
        <Tag color='#c45a65'>标签</Tag>
        <Tag color='#0f1423'>标签</Tag>
        <Tag color='#ccccd6'>标签</Tag>
      </ShowCode>
      <ShowCode title='可关闭'>
        <Tag color='#2376b7' closable>标签</Tag>
      </ShowCode>
    </div>
  ), {
    info: {
      text: `笔架沾窗雨，**书签**映隙曛`,
      inline: true,
      source: false
    }
  })
  .add('自定义', () => (
    <div className='zhui-custom'>
      <Tag 
        color={text('color', '#2376b7')} 
        closable={boolean('closable', false)}
        visiable={boolean('visiable', true)}
      >
        {text('内容', '标签')}
      </Tag>
    </div>
  ))