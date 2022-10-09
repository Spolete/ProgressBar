import React from 'react';
import './Bar.css';

const Bar = ({item, widthBarItem}) => {
  return (
    <div
      className="bar"
      style={{
        width: `${widthBarItem}px`,
        backgroundColor: item.color
      }}
    >
    </div>
  );
};

export default Bar;
