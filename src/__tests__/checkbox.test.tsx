import * as React from 'react';
import { shallow } from 'enzyme';

import Checkbox from '../components/checkbox/index';

describe('Checkbox Test', () => {
  const wrapper = shallow(
    <Checkbox>灯笼</Checkbox>
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-checkbox-wrapper')).toBe(true);
    expect(wrapper.find('.zhui-checkbox-input').exists()).toBeTruthy();
    expect(wrapper.find('.zhui-checkbox-inner').exists()).toBeTruthy();
    expect(wrapper.find('.zhui-checkbox-text').text()).toBe('灯笼');
  });
});

describe('Checkbox Group Test', () => {
  const wrapper = shallow(
    <Checkbox.Group value={['active1', 'active3']}>
      <Checkbox value='active1'/>
      <Checkbox value='active2'/>
      <Checkbox value='active3'/>
    </Checkbox.Group>
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-checkbox-group')).toBe(true);
    expect(wrapper.children().length).toBe(3);
  });
});

