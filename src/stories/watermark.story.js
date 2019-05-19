import React from 'react';
import { storiesOf } from '@storybook/react';
import Watermark from '../components/watermark';

storiesOf('水印 Watermark', module)
  .add('默认', () => (
    <Watermark 
      width={400} 
      height={300}
      src='https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/01/0E/ChMkJ1bKwdmIes72AAPezQ2Ar48AALGewLqnwEAA97l805.jpg'
    />
  ), {notes: '`印泥`未开出馋水，`印泥`一开香扑鼻'})