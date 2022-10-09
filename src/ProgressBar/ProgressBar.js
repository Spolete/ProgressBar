import React from 'react';
import './ProgressBar.css';
import Legend from './components/Legend/Legend';
import Bar from './components/Bar/Bar';

const FREE_AREA_COEFFICIENT = 0.8;
const WIDTH_BAR_COEFFICIENT = 0.05;

const ProgressBar = ({items, height, width}) => {
  const barItems = [];
  const legends = [];

  const totalCountBarItems = width * WIDTH_BAR_COEFFICIENT;
  const widthBarItem = (width / totalCountBarItems) * FREE_AREA_COEFFICIENT;
  const total = items.reduce((acc, {value}) => acc + value, 0);

  items.forEach((item, i) => {
    const percent = item.value / total;
    let countBarItems = percent * totalCountBarItems;
    countBarItems < 1 && countBarItems !== 0 ? countBarItems = 1 : countBarItems = Math.round(countBarItems);

    for (let j = 0; j < countBarItems; j++) {
      barItems.push(<Bar key={`${i}_${j}`} item={item} widthBarItem={widthBarItem} />);
    }

    legends.push(
      <Legend key={item.name} item={item} percent={percent} />
    )
  })

  return (
    <div style={{width}} className="progress-bar">
      <div style={{width, height}} className="progress">
        {barItems}
      </div>
      <div className="legends">{legends}</div>
    </div>
  );
};

export default ProgressBar;
