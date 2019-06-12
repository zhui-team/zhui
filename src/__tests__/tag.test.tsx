import * as React from 'react';
import { shallow } from 'enzyme';

import Tag from '../components/tag/index';

describe('Tag Test', () => {
  const wrapper = shallow(
    <Tag color='#c45a65' closable>标签</Tag>
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-tag-wrapper')).toBe(true);
    expect(wrapper.find('.zhui-tag-body').text()).toBe('标签');
  });

  it('2. 测试closable存在', () => {
    expect(wrapper.hasClass('zhui-tag-wrapper-closable')).toBe(true);
  });
});
