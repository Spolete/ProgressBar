import React from 'react';
import './Legend.css'

const Legend = ({item, percent}) => {
  return (
    <div className="legend">
      <div style={{backgroundColor: item.color}} className="legend__icon"></div>
      <div className="legend__title">{item.name}: {item.value} ({(percent * 100).toFixed(1)} %)</div>
    </div>
  );
};

export default Legend;
