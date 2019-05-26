import React from 'react';
import { shallow } from 'enzyme';

import Breadcrumb from '../components/breadcrumb'

describe('Breadcrumb List Test', () => {
  const wrapper = shallow(
    <Breadcrumb 
      list={
        [
          { value: '百度', href: '//www.baidu.com' },
          { value: '谷歌', href: '//www.google.com' },
          { value: '必应' }
        ]
      } 
    />
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-breadcrumb')).toBe(true);
  });
});

describe('Breadcrumb Item Test', () => {
  const wrapper = shallow(
    <Breadcrumb>
      <Breadcrumb.Item value="百度" href="//www.baidu.com" />
    </Breadcrumb>
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-breadcrumb')).toBe(true);
  });
});
