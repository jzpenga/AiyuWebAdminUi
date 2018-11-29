
import * as service from './service';

export default{
  namespace:'asset',
  state:{
    // /admin/manage/statistics/capitaltotalPie
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
    // 缺 /admin/manage/statistics/capitaldailyPie
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
    // 缺 /admin/manage/statistics/profitstotalPie
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
    // 缺 /admin/manage/statistics/profitsdailyPie
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
    updateData:(state,{payload})=>{
      return {...state,...payload};
    }
  },

  effects:{
   * assetData({payload},{call,put}){
     const {data} = yield call(service.statisticsAssetPie);
     yield put({
       type:'updateData',
       payload:{assetData:data}
     })
   },
    * assetTrendData({payload},{call,put}){
      const {data} = yield call(service.statisticsAssetTrend);
      yield put({
        type:'updateData',
        payload:{assetTrendData:data}
      })
    },
    * incrementData({payload},{call,put}){
      const {data} = yield call(service.statisticsIncrement);
      yield put({
        type:'updateData',
        payload:{incrementData:data}
      })
    },
    * incrementTrendData({payload},{call,put}){
      const {data} = yield call(service.statisticsIncrementTrend);
      yield put({
        type:'updateData',
        payload:{incrementTrendData:data}
      })
    },
    * userIncomePayData({payload},{call,put}){
      const {data} = yield call(service.statisticsUserIncomePay);
      yield put({
        type:'updateData',
        payload:{userIncomePayData:data}
      })
    },
    * userIncomePayTrendData({payload},{call,put}){
      const {data} = yield call(service.statisticsUserIncomeTrendPay);
      yield put({
        type:'updateData',
        payload:{userIncomePayTrendData:data}
      })
    },
    * userIncomePayLastDayData({payload},{call,put}){
      const {data} = yield call(service.statisticsUserIncomePayLastDay);
      yield put({
        type:'updateData',
        payload:{userIncomePayLastDayData:data}
      })
    },
    * userIncomePayTrendLastDayData({payload},{call,put}){
      const {data} = yield call(service.statisticsUserIncomePayLastDayTrend);
      yield put({
        type:'updateData',
        payload:{userIncomePayTrendLastDayData:data}
      })
    },
    * allChargeTrendData({payload},{call,put}){
      const {data} = yield call(service.statisticsAllChargeTrend);
      yield put({
        type:'updateData',
        payload:{allChargeTrendData:data}
      })
    },
    * dayChargeTrendData({payload},{call,put}){
      const {data} = yield call(service.statisticsDayChargeTrend);
      yield put({
        type:'updateData',
        payload:{dayChargeTrendData:data}
      })
    },
    * incomeCancelTrendData({payload},{call,put}){
      const {data} = yield call(service.statisticsIncomeCancelTrend);
      yield put({
        type:'updateData',
        payload:{incomeCancelTrendData:data}
      })
    },
    * dayIncomeCancelTrendData({payload},{call,put}){
      const {data} = yield call(service.statisticsDayIncomeCancelTrend);
      yield put({
        type:'updateData',
        payload:{dayIncomeCancelTrendData:data}
      })
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/asset/statistics') {
          dispatch({ type: 'assetData' });
          dispatch({ type: 'assetTrendData' });
          dispatch({ type: 'incrementData' });
          dispatch({ type: 'incrementTrendData' });
          dispatch({ type: 'userIncomePayData' });
          dispatch({ type: 'userIncomePayTrendData' });
          dispatch({ type: 'userIncomePayLastDayData' });
          dispatch({ type: 'userIncomePayTrendLastDayData' });
          dispatch({ type: 'allChargeTrendData' });
          dispatch({ type: 'dayChargeTrendData' });
          dispatch({ type: 'incomeCancelTrendData' });
          dispatch({ type: 'dayIncomeCancelTrendData' });
        }
      });
    },
  },


}
