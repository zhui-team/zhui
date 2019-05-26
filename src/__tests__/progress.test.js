import React from 'react';
import { shallow } from 'enzyme';

import Progress from '../components/progress'

describe('Progress Default Test', () => {
  const wrapper = shallow(
    <Progress percent={30}/>
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-progress-wrapper')).toBe(true);
    expect(wrapper.find('.zhui-progress-inner').exists()).toBeTruthy();
    expect(wrapper.find('.zhui-progress-inner').find('.zhui-progress-tag').exists()).toBeTruthy();
    expect(wrapper.find('.zhui-progress-outer').exists()).toBeTruthy();
  });
});

describe('Progress Exception Test', () => {
  const wrapper = shallow(
    <Progress precent={70} status='exception'/>
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-progress-wrapper')).toBe(true);
  });
});

describe('Progress Success Test', () => {
  const wrapper = shallow(
    <Progress precent={100}/>
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-progress-wrapper')).toBe(true);
  });
});