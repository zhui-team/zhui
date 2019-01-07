import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Button = (props) => (
  <button 
    className="btn" 
    style={{width: props.width, height: props.height}}
  >
    {props.value}
  </button>
)

Button.propTypes = {
  value: PropTypes.any,
  width: PropTypes.number,
  height: PropTypes.number
};

export default Button;
