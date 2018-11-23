import React from 'react';
import {
   ResponsiveContainer,  Line,
  XAxis, YAxis, CartesianGrid, Tooltip, LineChart,
} from 'recharts';
import config from '../../utils/config';

const ALineChart = ({xName,dataKey,dataSource}) => {
  return <ResponsiveContainer width="100%" height={config.chartOpt.chartHeight}>
    <LineChart data={dataSource}
               margin={config.chartOpt.chartMargin}>
      <XAxis dataKey={xName}/>
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Tooltip/>
      <Line  type="monotone" dataKey={dataKey[0]}
             stroke={config.chartOpt.chartLine.color[0]}
             activeDot={{ r: 8 }}
             strokeWidth={config.chartOpt.chartLine.strokeWidth}/>
    </LineChart>
  </ResponsiveContainer>
};

export default ALineChart;
