import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer} from 'recharts';
import config from '../../utils/config';


const APieChart = ({dataKey,dataSource}) => {

  const assertData = [{ name: 'flow', value: 400 }, { name: 'locked', value: 300 }];
  const incomeData = [{ name: 'flow', value: 400 }, { name: 'locked', value: 300 }];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };


  return <ResponsiveContainer width="100%" height={config.chartOpt.chartHeight}>
    <PieChart>
      <Pie
        data={dataSource}
        cx={config.chartOpt.chartPie.x}
        cy={config.chartOpt.chartPie.y}
        labelLine={false}
        dataKey = {dataKey[0]}
        label={renderCustomizedLabel}
        outerRadius={config.chartOpt.chartPie.radius}
        fill="#8884d8"
      >
        {
          dataSource.map((entry, index) => <Cell key={entry.name} fill={config.chartOpt.chartPie.color[index % config.chartOpt.chartPie.color.length]}/>)
        }
      </Pie>
    </PieChart>
  </ResponsiveContainer>
};


export default APieChart;
