

const stackBarDataConvert = (source)=>{
  let target = [];
  source.forEach((entry)=>{
    const targetEntry = { name: `${entry.createdTime}`, flow: `${entry.floatingFunds}`, locked: `${entry.lockrepoFunds}`};
    target.push(targetEntry);
  });
  return target;
};

const pieDataConvert = (source)=>{
  let target = [];
  source.forEach((entry)=>{
    const targetEntry = { name: 'flow', value: 400 };
    target.push(targetEntry);
  });
  return target;
};
