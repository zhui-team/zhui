import React from 'react';
import { shallow } from 'enzyme';

import Switch from '../components/switch/index'

describe('Switch Test', () => {
  const wrapper = shallow(
    <Switch checked/>
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-switch')).toBe(true);
    expect(wrapper.find('.zhui-switch-item').exists()).toBeTruthy();
  });

  it('2. 测试子元素', () => {
    expect(wrapper.find('.zhui-switch-item').children().length).toBe(8);
  })
});
