import React from 'react';
import { addParameters, configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import '../src/stories/scss/main.scss';

addParameters({
  options: {
    name: 'Zhui',
    showPanel: true,
    panelPosition: 'bottom'
  }
});

const backgroundDecorator = story => (
  <div style={{ display: 'flex', minHeight: 550, justifyContent: 'center', alignItems: 'center'}}>
    { story() }
  </div>
)

addDecorator(withInfo);
addDecorator(backgroundDecorator);

function loadStories() {
  require('../src/stories/introduce.story.js');
  require('../src/stories/button.story.js');
  require('../src/stories/alert.story.js');
  require('../src/stories/breadcrumb.story.js');
  require('../src/stories/card.story.js');
  require('../src/stories/checkbox.story.js');
  require('../src/stories/icon.story.js');
  require('../src/stories/input.story.js');
  require('../src/stories/loading.story.js');
  require('../src/stories/notify.story.js');
  require('../src/stories/portal.story.js');
  require('../src/stories/progress.story.js');
  require('../src/stories/steps.story.js');
  require('../src/stories/radio.story.js');
  require('../src/stories/tag.story.js');
}

configure(loadStories, module);