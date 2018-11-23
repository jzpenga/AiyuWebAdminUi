


export default{
  namespace:'asset',
  state:{
    // /admin/manage/statistics/capitaltotal
    assetData : [{ name: 'flow', value: 400 }, { name: 'locked', value: 300 }],
    // /admin/manage/statistics/capitaldaily
    assetTrendData : [
      { creatTime: '11-01', floatingFunds: 2000, lockrepoFunds: 2013 },
      { creatTime: '11-02', floatingFunds: 3300, lockrepoFunds: 2000 },
      { creatTime: '11-03', floatingFunds: 3200, lockrepoFunds: 1398 },
      { creatTime: '11-04', floatingFunds: 2800, lockrepoFunds: 2800 },
      { creatTime: '11-05', floatingFunds: 2800, lockrepoFunds: 2800 },
      { creatTime: '11-06', floatingFunds: 2800, lockrepoFunds: 2800 },
      { creatTime: '11-07', floatingFunds: 2800, lockrepoFunds: 2800 },
    ],
    // 缺
    incrementData : [{ name: 'flow', value: 400 }, { name: 'locked', value: 300 }],
    // /admin/manage/statistics/capitaldaily
    incrementTrendData : [
      { creatTime: '11-01', floatingFunds: 2000, lockrepoFunds: 2013 },
      { creatTime: '11-02', floatingFunds: 3300, lockrepoFunds: 2000 },
      { creatTime: '11-03', floatingFunds: 3200, lockrepoFunds: 1398 },
      { creatTime: '11-04', floatingFunds: 2800, lockrepoFunds: 2800 },
      { creatTime: '11-05', floatingFunds: 2800, lockrepoFunds: 2800 },
      { creatTime: '11-06', floatingFunds: 2800, lockrepoFunds: 2800 },
      { creatTime: '11-07', floatingFunds: 2800, lockrepoFunds: 2800 },
    ],
    // 缺
    userIncomePayData:[{ name: 'flow', value: 400 }, { name: 'locked', value: 300 },{ name: 'recommend', value: 300 }],
    // /admin/manage/statistics/profitstotal
    userIncomePayTrendData:[
      { creatTime: '11-01', profitsReferee: 2000, profitsLockrepo: 2013, profitsTeam:2300},
      { creatTime: '11-02', profitsReferee: 3300, profitsLockrepo: 2000,profitsTeam:2300 },
      { creatTime: '11-03', profitsReferee: 3200, profitsLockrepo: 1398,profitsTeam:2300  },
      { creatTime: '11-04', profitsReferee: 2800, profitsLockrepo: 2800 ,profitsTeam:2000 },
      { creatTime: '11-05', profitsReferee: 2800, profitsLockrepo: 2800 ,profitsTeam:2300 },
      { creatTime: '11-06', profitsReferee: 2800, profitsLockrepo: 2800,profitsTeam:2300  },
      { creatTime: '11-07', profitsReferee: 2800, profitsLockrepo: 2800 ,profitsTeam:3000 },
    ],
    // 缺
    userIncomePayLastDayData:[{ name: 'flow', value: 400 }, { name: 'locked', value: 300 },{ name: 'recommend', value: 300 }],
    // /admin/manage/statistics/profitsdaily
    userIncomePayTrendLastDayData:[
      { creatTime: '11-01', profitsReferee: 2000, profitsLockrepo: 2013, profitsTeam:2300},
      { creatTime: '11-02', profitsReferee: 3300, profitsLockrepo: 2000,profitsTeam:2300 },
      { creatTime: '11-03', profitsReferee: 3200, profitsLockrepo: 1398,profitsTeam:2300  },
      { creatTime: '11-04', profitsReferee: 2800, profitsLockrepo: 2800 ,profitsTeam:2000 },
      { creatTime: '11-05', profitsReferee: 2800, profitsLockrepo: 2800 ,profitsTeam:2300 },
      { creatTime: '11-06', profitsReferee: 2800, profitsLockrepo: 2800,profitsTeam:2300  },
      { creatTime: '11-07', profitsReferee: 2800, profitsLockrepo: 2800 ,profitsTeam:3000 },
    ],

    // /admin/manage/statistics/feetotal
    allChargeTrendData:[
      { creatTime: '11-01', count: 2000},
      { creatTime: '11-02', count: 3300,  },
      { creatTime: '11-03', count: 3200,},
      { creatTime: '11-04', count: 2800, },
      { creatTime: '11-05', count: 2800, },
      { creatTime: '11-06', count: 2800, },
      { creatTime: '11-07', count: 2800, },
    ],
    // /admin/manage/statistics/feedaily
    dayChargeTrendData:[
      { creatTime: '11-01', count: 2000},
      { creatTime: '11-02', count: 3300,  },
      { creatTime: '11-03', count: 3200,},
      { creatTime: '11-04', count: 2800, },
      { creatTime: '11-05', count: 2800, },
      { creatTime: '11-06', count: 2800, },
      { creatTime: '11-07', count: 2800, },
    ],
    // /admin/manage/statistics/destroytotal
    incomeCancelTrendData:[
      { creatTime: '11-01', count: 2000},
      { creatTime: '11-02', count: 3300,  },
      { creatTime: '11-03', count: 3200,},
      { creatTime: '11-04', count: 2800, },
      { creatTime: '11-05', count: 2800, },
      { creatTime: '11-06', count: 2800, },
      { creatTime: '11-07', count: 2800, },
    ],
    // /admin/manage/statistics/destroydaily
    dayIncomeCancelTrendData:[
      { creatTime: '11-01', count: 2000},
      { creatTime: '11-02', count: 3300,  },
      { creatTime: '11-03', count: 3200,},
      { creatTime: '11-04', count: 2800, },
      { creatTime: '11-05', count: 2800, },
      { creatTime: '11-06', count: 2800, },
      { creatTime: '11-07', count: 2800, },
    ],
  },
  reducers: {

  },

}
