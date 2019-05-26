import React from 'react';
import { shallow } from 'enzyme';

import Icon from '../components/icon'

describe('Icon Test', () => {
  const wrapper = shallow(
    <Icon type="message" color="#41395b" />
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhuiicon')).toBe(true);
  });

  it('2. 测试type存在', () => {
    expect(wrapper.hasClass('zhuiicon-message')).toBe(true);
  });
});
