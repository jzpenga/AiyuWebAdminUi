


export default{
  namespace:'userEdit',
  state:{
    // /admin/manage/consumer/capitaltotal/{id}
    assetData : [{ name: 'flow', value: 400 }, { name: 'locked', value: 300 }],
    // /admin/manage/consumer/profitstotal/{id}
    incomeData : [{ name: 'flow', value: 400 }, { name: 'locked', value: 300 }],
    assetTrendData : [
      { createdTime: '11-01', floatingFunds: 2000, lockrepoFunds: 2013 },
      { createdTime: '11-02', floatingFunds: 3300, lockrepoFunds: 2000 },
      { createdTime: '11-03', floatingFunds: 3200, lockrepoFunds: 1398 },
      { createdTime: '11-04', floatingFunds: 2800, lockrepoFunds: 2800 },
      { createdTime: '11-05', floatingFunds: 2800, lockrepoFunds: 2800 },
      { createdTime: '11-06', floatingFunds: 2800, lockrepoFunds: 2800 },
      { createdTime: '11-07', floatingFunds: 2800, lockrepoFunds: 2800 },
    ],
    //  /admin/manage/consumer/profitsdetail/{id}
    incomeTrendData : [
      { createdTime: '11-01', floatingFunds: 2000, lockrepoFunds: 2013 },
      { createdTime: '11-02', floatingFunds: 3300, lockrepoFunds: 2000 },
      { createdTime: '11-03', floatingFunds: 3200, lockrepoFunds: 1398 },
      { createdTime: '11-04', floatingFunds: 2800, lockrepoFunds: 2800 },
      { createdTime: '11-05', floatingFunds: 2800, lockrepoFunds: 2800 },
      { createdTime: '11-06', floatingFunds: 2800, lockrepoFunds: 2800 },
      { createdTime: '11-07', floatingFunds: 2800, lockrepoFunds: 2800 },
    ],
    // /admin/manage/consumer/team/{id}
    teamOneData : [
      {createdTime: '11-01', totalFunds: 4000, totalMember: 2400},
      {createdTime: '11-02', totalFunds: 3000, totalMember: 1398},
      {createdTime: '11-03', totalFunds: 2000, totalMember: 9800},
      {createdTime: '11-04', totalFunds: 2780, totalMember: 3908},
      {createdTime: '11-05', totalFunds: 1890, totalMember: 4800},
      {createdTime: '11-06', totalFunds: 2390, totalMember: 3800},
      {createdTime: '11-07', totalFunds: 3490, totalMember: 4300},
    ],
    teamTwoData : [
      {createdTime: '11-01', totalFunds: 4000, totalMember: 2400},
      {createdTime: '11-02', totalFunds: 3000, totalMember: 1398},
      {createdTime: '11-03', totalFunds: 2000, totalMember: 9800},
      {createdTime: '11-04', totalFunds: 2780, totalMember: 3908},
      {createdTime: '11-05', totalFunds: 1890, totalMember: 4800},
      {createdTime: '11-06', totalFunds: 2390, totalMember: 3800},
      {createdTime: '11-07', totalFunds: 3490, totalMember: 4300},
    ]
  },
  reducers: {

  },

}
