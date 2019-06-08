import React from 'react';
import '../styles/css/loading.scss';
const Loading = () => {
  return (
    <div className="loading-1-wrap">
<div className="gooey-loader"></div>
<svg className="filters" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
      <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
    </filter>
  </defs>
</svg>
</div>
  )
};

export default Loading;