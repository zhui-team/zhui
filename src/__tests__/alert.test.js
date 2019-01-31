import React from 'react';
import { shallow } from 'enzyme';

import Alert from '../components/alert/index'

describe('Alert Test', () => {
  const wrapper = shallow(
    <Alert theme='meihong' closable />
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-alert-wrapper')).toBe(true);
    expect(wrapper.find('.zhui-alert-inner').exists()).toBeTruthy();
  });

  it('2. 测试theme存在', () => {
    expect(wrapper.hasClass('zhui-alert-wrapper-meihong')).toBe(true);
  });

  it('3. 测试close存在', () => {
    expect(wrapper.find('.zhui-alert-closable').exists()).toBeTruthy();
  });
});
