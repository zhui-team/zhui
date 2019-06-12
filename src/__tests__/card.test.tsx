import * as React from 'react';
import { shallow } from 'enzyme';

import Card from '../components/card/index';

describe('Card Column Test', () => {
  const wrapper = shallow(
    <Card 
      title='标题' 
      img={<img src='http://47.98.138.195:3000/100x100/rect/ffffff' />} 
      width={190}
      underline
      cornerLeft='左角标'
      cornerRight='右角标'
    >
      <p>Test</p>
    </Card>
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-card')).toBe(true);
  });

  it('2. 测试标题存在', () => {
    expect(wrapper.find('.zhui-card-title').text()).toBe('标题');
  });

  it('3. 测试插图存在', () => {
    expect(wrapper.find('.zhui-card-img-wrapper').exists()).toBeTruthy();
    expect(wrapper.find('img').exists()).toBeTruthy();
  });

  it('4. 测试内部元素存在', () => {
    expect(wrapper.find('.zhui-card-body').exists()).toBeTruthy();
    expect(wrapper.find('p').text()).toBe('Test');
  });

  it('5. 测试下划线存在', () => {
    expect(wrapper.find('.zhui-card-underline').exists()).toBeTruthy();
  });

  it('6. 测试角标存在', () => {
    expect(wrapper.find('.zhui-card-corner-wrapper').exists()).toBeTruthy();
    expect(wrapper.find('.zhui-card-corner-left').text()).toBe('左角标');
    expect(wrapper.find('.zhui-card-corner-right').text()).toBe('右角标');
  });
});

describe('Card Row Test', () => {
  const wrapper = shallow(
    <Card 
      title='标题'
      type="row"
      img={<img src='http://47.98.138.195:3000/100x100/rect/ffffff' />} 
      width={190}
      theme='meihong'
      underline
      cornerLeft='左角标'
      cornerRight='右角标'
    >
      <p>Test</p>
    </Card>
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-card')).toBe(true);
    expect(wrapper.hasClass('zhui-card-row')).toBe(true);
  });

  it('2. 测试标题存在', () => {
    expect(wrapper.find('.zhui-card-title').text()).toBe('标题');
  });

  it('3. 测试插图不存在', () => {
    expect(wrapper.find('.zhui-card-img-wrapper').exists()).toBeFalsy();
    expect(wrapper.find('img').exists()).toBeFalsy();
  });

  it('4. 测试内部元素存在', () => {
    expect(wrapper.find('.zhui-card-body').exists()).toBeTruthy();
    expect(wrapper.find('p').text()).toBe('Test');
  });

  it('5. 测试下划线不存在', () => {
    expect(wrapper.find('.zhui-card-underline').exists()).toBeFalsy();
  });

  it('6. 测试角标不存在', () => {
    expect(wrapper.find('.zhui-card-corner-wrapper').exists()).toBeFalsy();
  });

  it('7 测试主题存在', () => {
    expect(wrapper.hasClass('zhui-card-meihong')).toBe(true);
  });
});