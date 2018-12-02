import React from 'react';
import {
  ResponsiveContainer, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, LabelList,
} from 'recharts';
import config from '../../utils/config';


const renderCustomizedLabel = (props) => {
  const { x, y, width, height, value } = props;
  const radius = 10;

  console.log(y,value);
  return <g>
    <text x={x + width / 2} y={y-10} fill="#000" textAnchor="middle" dominantBaseline="middle">
      {parseFloat(value.toPrecision(12))}
    </text>
  </g>
};
const AStackBar = ({ xName, barName, dataKey, dataSource }) => {

  return <ResponsiveContainer width="100%" height={config.chartOpt.chartHeight}>
    <BarChart data={dataSource} margin={config.chartOpt.chartMargin}>
      <XAxis dataKey={xName}/>
      <YAxis/>
      <Tooltip/>
      <CartesianGrid vertical={false}/>
      {barName.map((item, index) => {
        return <Bar
          isAnimationActive={false}
          key={index} name={item} stackId="0" dataKey={dataKey[index]}
          fill={config.chartOpt.chartBar.color[index % config.chartOpt.chartBar.color.length]}>
          <LabelList key={index} content={renderCustomizedLabel}/>
        </Bar>;
      })}
      <Legend verticalAlign="top" height={36}/>

    </BarChart>
  </ResponsiveContainer>;
};

export default AStackBar;
