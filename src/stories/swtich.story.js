import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import themes from './util/theme';
import Switch from '../components/switch';

import '../components/switch/index.scss';

storiesOf('开关 Swtich', module)
  .addDecorator(withKnobs)
  .add('默认', () => (
    <Switch checked/>
  ), {notes: '为爱红芳满砌阶，教人`扇`上画将来'})
  .add('自定义', () => (
    <Switch 
      theme={select('theme', themes, 'default')}
      checked={boolean('checked', true)}
      text={text('text', '')}
    />
  ))