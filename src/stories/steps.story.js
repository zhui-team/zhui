import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, number } from '@storybook/addon-knobs';
import Steps from '../components/steps';

import '../components/steps/index.scss';

storiesOf('步骤条 Steps', module)
  .addDecorator(withKnobs)
  .add('默认', () => (
    <div style={{width: 600}}>
      <Steps>
        <Steps.Step title='第一步' />
        <Steps.Step title='第二步' />
        <Steps.Step title='第三步' />
      </Steps>
    </div>
    
  ), { notes: '白`团扇`，今来此去捐。愿得入郎手，团圆郎眼前'})
  .add('状态', () => (
    <div style={{width: 600}}>
      <Steps current={3} status='error'>
        <Steps.Step title='第一步' />
        <Steps.Step title='第二步' />
        <Steps.Step title='第三步' />
        <Steps.Step title='第四步' />
      </Steps>
    </div>
  ), { notes: '白`团扇`，今来此去捐。愿得入郎手，团圆郎眼前'})
  .add('自定义', () => (
    <div style={{width: 600}}>
      <Steps 
        current={number('current', 3)} 
        status={select('status', {
          default: 'default',
          wait: 'wait',
          error: 'error',
          finished: 'finished'
        }, 'error')}
      >
        <Steps.Step title='第一步' />
        <Steps.Step title='第二步' />
        <Steps.Step title='第三步' />
        <Steps.Step title='第四步' />
      </Steps>
    </div>
  ), { notes: '白`团扇`，今来此去捐。愿得入郎手，团圆郎眼前'})