import * as React from 'react';
import { shallow } from 'enzyme';

import Badge from '../components/badge/index';

describe('Alert Test', () => {
  const wrapper = shallow(
    <Badge content="荷花" />
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-badge')).toBe(true);
    expect(wrapper.find('.zhui-badge-wrapper').exists()).toBeTruthy();
    expect(wrapper.find('.zhui-badge-wrapper').find('.zhui-badge-leaf')).toBeTruthy();
    expect(wrapper.find('.zhui-badge-wrapper').find('.zhui-badge-leaf-outer')).toBeTruthy();
    expect(wrapper.find('.zhui-badge-wrapper').find('.zhui-badge-leaf-inner')).toBeTruthy();
    expect(wrapper.find('.zhui-badge-wrapper').find('.zhui-badge-content')).toBeTruthy();
  });

  it('2. 测试子元素个数', () => {
    expect(wrapper.find('.zhui-badge-wrapper').children().length).toBe(7);
  })
});

describe('Alert Wrapper Test', () => {
  const wrapper = shallow(
    <Badge content={20}>
      <span className="zhui-test-block" />
    </Badge>
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.find('.zhui-test-block').exists()).toBeTruthy();
  })
})
