import React from 'react';
import './index.css';

const ViewBox = ({ pageURL, title }) => <iframe src={pageURL} title={title}></iframe>

export default ViewBox;