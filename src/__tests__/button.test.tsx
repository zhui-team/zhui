import * as React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/button/index';

describe('Button Test', () => {
  const wrapper = shallow(
    <Button>靛青</Button>
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-btn zhui-btn-default')).toBe(true);
  });
});

describe('Button Theme Test', () => {
  const wrapper = shallow(
    <Button
      theme="primary"
    >
      黛色
    </Button>
  )

  it('1. 测试默认theme class存在', () => {
    expect(wrapper.hasClass('zhui-btn zhui-btn-primary')).toBe(true);
  });
})

describe('Button other styles Test', () => {
  const wrapper = shallow(
    <Button
      outline
      round
      block
      disabled
      size="small"
      theme="primary"
    >
      黛色
    </Button>
  )

  it('1. 测试默认 outline class 存在', () => {
    expect(wrapper.hasClass('zhui-btn-primary-outline')).toBe(true);
  });
  it('2. 测试默认 round class 存在', () => {
    expect(wrapper.hasClass('zhui-btn-round')).toBe(true);
  });
  it('3. 测试默认 shape class 存在', () => {
    expect(wrapper.hasClass('zhui-btn-small')).toBe(true);
  });
  it('4. 测试默认 block class 存在', () => {
    expect(wrapper.hasClass('zhui-btn-block')).toBe(true);
  });
  it('5. 测试默认 disabled class 存在', () => {
    expect(wrapper.hasClass('zhui-btn-disabled')).toBe(true);
  });
})

describe('Button Loading Test', () => {
  const wrapper = shallow(
    <Button loading>
      加载
    </Button>
  )

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-btn-loading')).toBe(true);
  });
})

describe('Button Group Test', () => {
  const wrapper = shallow(
    <Button.Group>
      <Button round>左</Button>
      <Button>中</Button>
      <Button round>右</Button>
    </Button.Group>
  )

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-btn-group')).toBe(true);
  });
})