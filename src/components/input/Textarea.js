import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import cn from 'astro-classname';

import './index.scss';

export default class Textarea extends PureComponent {
  render() {
    const { props } = this.props;
    return (
      <textarea {...props}></textarea>
    )
  }
}