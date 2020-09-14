import React from 'react';
import './index.css';

const Button = ({ name, handler }) => <button className="button_click" onClick={ handler }>{ name }</button>

export default Button;