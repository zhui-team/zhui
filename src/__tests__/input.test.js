import React from 'react';
import { shallow } from 'enzyme';

import Input from '../components/input/index'
import Icon from '../components/icon/index'

describe('Input Test', () => {
  const wrapper = shallow(
    <Input
      size='large'
      placeholder='Waiting...' 
      theme='meihong'
      addonBefore='A'
      addonAfter='Z'
      icon={<Icon type='search' />}
    />
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-input-wrapper')).toBe(true);
    expect(wrapper.find('.zhui-input').exists()).toBeTruthy();
  });

  it('2. 测试type存在', () => {
    expect(wrapper.hasClass('zhui-input-wrapper-large')).toBe(true);
  });

  it('3. 测试theme存在', () => {
    expect(wrapper.find('.zhui-input-meihong').exists()).toBeTruthy();
  });

  it('4. 测试前后缀存在', () => {
    expect(wrapper.hasClass('zhui-input-group')).toBe(true);
    expect(wrapper.first().text()).toBe('AZ');
  });

  it('5. 测试icon存在', () => {
    let iconWrapper = shallow(
      <Input icon={<Icon type='search' />} />
    );

    expect(iconWrapper.find('.zhui-input-icon-wrapper').exists()).toBeTruthy();
    expect(iconWrapper.find('.zhui-input-icon-wrapper').length).toBe(1);
  });
});

describe('Textarea Test', () => {
  const wrapper = shallow(
    <Input.Textarea placeholder='搜索' theme='ganglan'/>
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-input-textarea-wrapper')).toBe(true);
    expect(wrapper.find('.zhui-input-textarea').exists()).toBeTruthy();
  });

  it('2. 测试theme存在', () => {
    expect(wrapper.find('.zhui-input-ganglan').exists()).toBeTruthy();
  });
});
