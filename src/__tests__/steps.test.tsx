import * as React from 'react';
import { shallow } from 'enzyme';

import Steps from '../components/steps/index';

describe('Single Steps Test', () => {
  const wrapper = shallow(
    <Steps.Step title='steps1' />
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-step')).toBe(true);
    expect(wrapper.find('.zhui-step-tail').exists()).toBeTruthy();
    expect(wrapper.find('.zhui-step-num').exists()).toBeTruthy();
    expect(wrapper.find('.zhui-step-title').exists()).toBeTruthy();
    expect(wrapper.children().length).toEqual(3);
  });

  it('2. 测试内容存在', () => {
    expect(wrapper.find('.zhui-step-title').text()).toBe('steps1');
    expect(wrapper.find('.zhui-step-num').text()).toBe('');
  })
});

describe('Steps Group Test', () => {
  const wrapper = shallow(
    <Steps current={3} status="error">
      <Steps.Step title="第一步" />
      <Steps.Step title="第二步" />
      <Steps.Step title="第三步" />
      <Steps.Step title="第四步" />
    </Steps>
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-steps')).toBe(true);
    expect(wrapper.children().length).toEqual(4);
  });
});
