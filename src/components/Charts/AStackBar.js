import React from 'react';
import {ResponsiveContainer, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, LabelList,
} from 'recharts';
import config from '../../utils/config';


const AStackBar = ({xName,barName,dataKey,dataSource})=>{

  return <ResponsiveContainer width="100%" height={config.chartOpt.chartHeight}>
    <BarChart data={dataSource} margin={config.chartOpt.chartMargin}>
      <XAxis dataKey={xName}/>
      <YAxis/>
      <Tooltip/>
      <CartesianGrid vertical={false}/>
      {barName.map((item,index)=>{
        return <Bar key={index} name={item} stackId="0" dataKey={dataKey[index]} fill={config.chartOpt.chartBar.color[index % config.chartOpt.chartBar.color.length]}>
          <LabelList key={index}/>
        </Bar>
      })}
      <Legend verticalAlign="top" height={36}/>
    </BarChart>
  </ResponsiveContainer>
};

export default AStackBar;
