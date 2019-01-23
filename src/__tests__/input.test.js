import React from 'react';
import { shallow } from 'enzyme';

import Input from '../components/input/index'

describe('Input Test', () => {
  const wrapper = shallow(
    <Input
      size="large"
      placeholder='Waiting...' 
    />
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-input-wrapper')).toBe(true);
    expect(wrapper.find('.zhui-input').exists()).toBeTruthy();
  });

  it('2. 测试type存在', () => {
    expect(wrapper.hasClass('zhui-input-wrapper-large')).toBe(true);
  });
});

describe('Textarea Test', () => {
  const wrapper = shallow(
    <Input.Textarea placeholder="搜索" />
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-input-textarea-wrapper')).toBe(true);
    expect(wrapper.find('.zhui-input-textarea').exists()).toBeTruthy();
  });
});
