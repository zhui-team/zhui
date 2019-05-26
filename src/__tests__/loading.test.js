import React from 'react';
import { shallow } from 'enzyme';

import Loading from '../components/loading'

describe('Tag Test', () => {
  const wrapper = shallow(
    <Loading>
      <p style={{height: 200, textAlign: 'center'}}>我被包住啦</p>
    </Loading>
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-loading-container')).toBe(true);
    expect(wrapper.hasClass('zhui-loading-container-fill')).toBe(true);
    expect(wrapper.find('.zhui-loading-wrapper').exists()).toBeTruthy();
    expect(wrapper.find('.zhui-loading-wrapper').find('.zhui-loading').exists()).toBeTruthy();
  });

  it('2. 测试包裹元素存在', () => {
    expect(wrapper.find('p').exists()).toBeTruthy();
  });
});

describe('Tag Global Test', () => {
  const wrapper = shallow(
    <Loading global />
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-loading-container')).toBe(true);
    expect(wrapper.find('.zhui-loading-global').exists()).toBeTruthy();
  });
});
