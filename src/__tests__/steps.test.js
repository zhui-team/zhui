import React from 'react';
import { shallow } from 'enzyme';

import Steps from '../components/steps/index'

describe('Steps Test', () => {
  const wrapper = shallow(
    <Steps current={3} status='error'>
      <Steps.Step title='steps1' />
      <Steps.Step title='steps2' />
      <Steps.Step title='steps3' />
      <Steps.Step title='steps4' />
    </Steps>
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-steps')).toBe(true);
  });
});
