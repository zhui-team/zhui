import React from 'react';
import { shallow } from 'enzyme';

import Checkbox from '../components/checkbox/index'

describe('Checkbox Test', () => {
  const wrapper = shallow(
    <Checkbox />
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-checkbox-wrapper')).toBe(true);
  });
});

describe('Checkbox Group Test', () => {
  const wrapper = shallow(
    <Checkbox.Group>
      <Checkbox />
      <Checkbox />
      <Checkbox />
    </Checkbox.Group>
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-checkbox-group')).toBe(true);
  });
});

