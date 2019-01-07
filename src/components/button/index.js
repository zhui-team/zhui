import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Button = (props) => (
  <button 
    className={`zhui-btn${props.type ? ' zhui-btn-' + props.type : ''}`} 
    style={{width: props.width, height: props.height}}
  >
    {props.value}
  </button>
)

Button.propTypes = {
  value: PropTypes.any,
  width: PropTypes.number,
  height: PropTypes.number,
  type: PropTypes.string
};

export default Button;
