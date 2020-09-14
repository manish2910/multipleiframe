import React from 'react';

const TextBox = ({ value, handleChange, placeholder, textInputName, type }) => <input type={type} value={value} onChange={handleChange(textInputName)} placeholder={placeholder}/>

export default TextBox;