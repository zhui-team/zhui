import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select, number } from '@storybook/addon-knobs';
import themes from './util/theme';
import Input from '../components/input';
import Icon from '../components/icon';
import ShowCode from './util/ShowCode';

import '../components/input/index.scss';

storiesOf('输入框 Input', module)
  .addDecorator(withKnobs)
  .add('浏览样式', () => (
    <div>
      <ShowCode title='默认样式' sub='默认配色为 梅红(meihong)'>
        <Input />
      </ShowCode>
      <ShowCode title='大小'>
        <Input size='large' placeholder='大' />
        <Input placeholder='中' />
        <Input size='small' placeholder='小' />
      </ShowCode>
      <ShowCode title='宽度'>
        <Input placeholder='我很长' width={400} />
      </ShowCode>
      <ShowCode title='主题配色' sub='更多配色查看阅读须知中的 主题配色'>
        <Input theme='primary' placeholder='黛色' />
        <Input theme='success' placeholder='竹青' />
        <Input theme='danger' placeholder='胭脂' />
        <Input theme='meihong' placeholder='梅红' />
        <Input theme='ganglan' placeholder='钢蓝' />
        <Input theme='haitang' placeholder='海棠红' />
        <Input theme='yuanshan' placeholder='远山紫' />
      </ShowCode>
      <ShowCode title='前缀与后缀'>
        <Input addonBefore={'邮箱'} />
        <Input addonAfter='元' size='large' />
        <Input addonBefore='A' addonAfter={'Z'} size='small' />
      </ShowCode>
      <ShowCode title='添加图标'>
        <Input icon={<Icon type='search' />} placeholder='搜索' />
      </ShowCode>
      <ShowCode title='文本域' sub='Input.Textarea'>
        <Input.Textarea placeholder='搜索' width={240} theme='ganglan' />
      </ShowCode>
      <ShowCode title='不可用'>
        <Input disabled />
        <Input.Textarea disabled />
      </ShowCode>
    </div>
  ), {
    info: {
      text: `睡起有恨和**画卷**，燕归无语傍人斜`,
      inline: true,
      source: false
    }
  })
  .add('自定义', () => (
    <div className='zhui-custom'>
      <Input
        disabled={boolean('disabled', false)}
        width={number('width', 200)}
        size={select('size', {
          large: 'large',
          medium: 'medium',
          small: 'small',
        }, 'medium')}
        theme={select('theme', themes, 'default')}
        value={text('value', '输入框')}
        onChange={() => null}
        placeholder={text('placeholder', '待输入...')}
      />
    </div>
  ))