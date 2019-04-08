import React from 'react';
import { shallow } from 'enzyme';

import Radio from '../components/radio/index'

describe('Single Radio Test', () => {
  const wrapper = shallow(
    <Radio text='春色满园关不住' theme="primary"/>
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-radio-wrapper')).toBe(true);
    expect(wrapper.find('.zhui-radio-item').exists()).toBeTruthy();
    expect(wrapper.find('.zhui-radio-label').exists()).toBeTruthy();
  });

  it('2. 测试radio内容存在', () => {
    expect(wrapper.find('.zhui-radio-item').text()).toBe('春');
    expect(wrapper.find('.zhui-radio-label').text()).toBe('色满园关不住');
  });

  it('3. 测试主题存在', () => {
    expect(wrapper.find('.zhui-radio-primary').exists()).toBeTruthy();
  });
});

describe('Radio Group Test', () => {
  const wrapper = shallow(
    <Radio.Group value={2}>
      <Radio value={1} text="雾" />
      <Radio value={2} text="雨" />
      <Radio value={3} text="风" disabled />
    </Radio.Group>
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-radio-group')).toBe(true);
    expect(wrapper.find('.zhui-radio-group').children().length).toBe(3);
  });
});