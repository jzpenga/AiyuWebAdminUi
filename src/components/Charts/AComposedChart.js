import React from 'react';
import {
  ResponsiveContainer, ComposedChart, Line, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import config from '../../utils/config';

const AComposedChart = ({ xName, dataKey, barLineName, dataSource }) => {

  return <ResponsiveContainer width="100%" height={config.chartOpt.chartHeight}>
    <ComposedChart data={dataSource} margin={{ top: 10, left: 5, right: 5, bottom: 5 }}>
      <CartesianGrid stroke='#f5f5f5'/>
      <XAxis dataKey={xName}/>
      <YAxis yAxisId="left"/>
      <YAxis yAxisId="right" orientation="right"/>
      <Tooltip/>
      <Legend verticalAlign="top" height={config.chartOpt.chartLegendTop}/>
      <Bar
        isAnimationActive={false}
        name={barLineName[0]} yAxisId="left" dataKey={dataKey[0]} barSize={20}
        fill={config.chartOpt.chartBar.color[2]}/>
      <Line
        isAnimationActive={false}
        name={barLineName[1]} yAxisId="right" type='monotone' dataKey={dataKey[1]}
        stroke={config.chartOpt.chartLine.color[0]}
        strokeWidth={config.chartOpt.chartLine.strokeWidth}/>
    </ComposedChart>
  </ResponsiveContainer>;
};

export default AComposedChart;
