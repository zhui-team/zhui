import * as React from 'react';
import { shallow } from 'enzyme';

import Rate from '../components/rate';

describe('Rate Test', () => {
  const wrapper = shallow(
    <Rate value={1} />
  );

  it('1. 测试默认class存在', () => {
    expect(wrapper.hasClass('zhui-rate')).toBe(true);
  });

  it('2. 测试子元素', () => {
    expect(wrapper.children().length).toEqual(5);
  })
});
