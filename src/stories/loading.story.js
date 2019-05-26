import React from 'react';
import { storiesOf } from '@storybook/react';
import Loading from '../components/loading';
import ShowCode from './util/ShowCode';

import '../components/loading/index.scss';

storiesOf('加载 Loading', module)
  .add('浏览样式', () => (
    <div>
      <ShowCode title='默认'>
        <Loading />
      </ShowCode>
      <ShowCode title='包裹'>
        <Loading>
          <p style={{height: 200, textAlign: 'center'}}>我被包住啦</p>
        </Loading>
      </ShowCode>
      <ShowCode title='全图' sub='开启 global 后，将覆盖整个屏幕'>
        <Loading global show={false}/>
      </ShowCode>
    </div>
  ), {
    info: {
      text: `欲求阴阳理，入我**太极**门`,
      inline: true,
      source: false
    }
  })