import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select, number } from '@storybook/addon-knobs';
import themes from './util/theme';
import Card from '../components/card';
import ShowCode from './util/ShowCode';

import '../components/card/index.scss';

storiesOf('卡片 Card', module)
  .addDecorator(withKnobs)
  .add('浏览样式', () => (
    <div>
      <ShowCode title='默认' sub='默认配色为 钢蓝(ganglan)'>
        <Card width={140}>
          <p>这是个普通的卡片</p>
        </Card>
      </ShowCode>
      <ShowCode title='综合使用'>
        <Card 
          title='标题' 
          img={<img src='http://47.98.138.195:3000/100x100/rect/ffffff' />} 
          width={190}
          underline
          cornerLeft='风儿'
          cornerRight='喧嚣'
        >
          <p>这是一个有很多属性的卡片</p>
        </Card>
      </ShowCode>
      <ShowCode title='横向'>
        <Card 
          title='标题' 
          type='row'
          underline
        >
          <p>这是个有标题的横向卡片</p>
        </Card>
      </ShowCode>
      <ShowCode title='主题配色' sub='更多配色查看阅读须知中的 主题配色'>
        <Card title='梅红' theme='meihong' width={200}>
          <p>这是个有主题的卡片</p>
        </Card>
        <Card title='暮云灰' theme='muyun' width={200}>
          <p>这是个有主题的卡片</p>
        </Card>
      </ShowCode>
    </div>
  ), { 
    info: {
      text: `当窗理云鬓，对**镜**贴花黄`,
      inline: true,
      source: false
    }
  })
  .add('自定义', () => (
    <div className='zhui-custom'>
      <Card
        type={select('type', {
          row: 'row',
          column: 'column'
        }, 'column')}
        theme={select('theme', themes, 'default')}
        title={text('title', '标题')} 
        img={<img src={text('imgSrc', 'http://47.98.138.195:3000/100x100/rect/ffffff')} style={{width: 100, height: 100}} />} 
        width={number('width', 190)}
        underline={boolean('underline', true)}
        cornerLeft={text('cornerLeft', '风儿')}
        cornerRight={text('cornerRight', '喧嚣')}
      >
        <p>{text('内容', '自定义卡片')}</p>
      </Card>
    </div>
  ))