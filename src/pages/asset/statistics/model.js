
import * as service from './service';
import * as utils from '../../../utils/utils';

export default{
  namespace:'asset',
  state:{
    // /admin/manage/statistics/capitaltotalPie
    assetData : [{ name: 'flow', value: 400 }, { name: 'locked', value: 300 }],
    // /admin/manage/statistics/capitaldaily
    assetTrendData : [],
    // 缺 /admin/manage/statistics/capitaldailyPie
    incrementData : [{ name: 'flow', value: 400 }, { name: 'locked', value: 300 }],
    // /admin/manage/statistics/capitaldaily
    incrementTrendData : [],
    // 缺 /admin/manage/statistics/profitstotalPie
    userIncomePayData:[{ name: 'flow', value: 400 }, { name: 'locked', value: 300 },{ name: 'recommend', value: 300 }],
    // /admin/manage/statistics/profitstotal
    userIncomePayTrendData:[],
    // 缺 /admin/manage/statistics/profitsdailyPie
    userIncomePayLastDayData:[{ name: 'flow', value: 400 }, { name: 'locked', value: 300 },{ name: 'recommend', value: 300 }],
    // /admin/manage/statistics/profitsdaily
    userIncomePayTrendLastDayData:[],

    // /admin/manage/statistics/feetotal
    allChargeTrendData:[],
    // /admin/manage/statistics/feedaily
    dayChargeTrendData:[],
    // /admin/manage/statistics/destroytotal
    incomeCancelTrendData:[],
    // /admin/manage/statistics/destroydaily
    dayIncomeCancelTrendData:[],
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
       payload:{assetData:utils.arrayCheck(data)}
     })
   },
    * assetTrendData({payload},{call,put}){
      const {data} = yield call(service.statisticsAssetTrend);
      yield put({
        type:'updateData',
        payload:{assetTrendData:utils.arrayCheck(data)}
      })
    },
    * incrementData({payload},{call,put}){
      const {data} = yield call(service.statisticsIncrement);
      yield put({
        type:'updateData',
        payload:{incrementData:utils.arrayCheck(data)}
      })
    },
    * incrementTrendData({payload},{call,put}){
      const {data} = yield call(service.statisticsIncrementTrend);
      yield put({
        type:'updateData',
        payload:{incrementTrendData:utils.arrayCheck(data)}
      })
    },
    * userIncomePayData({payload},{call,put}){
      const {data} = yield call(service.statisticsUserIncomePay);
      yield put({
        type:'updateData',
        payload:{userIncomePayData:utils.arrayCheck(data)}
      })
    },
    * userIncomePayTrendData({payload},{call,put}){
      const {data} = yield call(service.statisticsUserIncomeTrendPay);
      yield put({
        type:'updateData',
        payload:{userIncomePayTrendData:utils.arrayCheck(data)}
      })
    },
    * userIncomePayLastDayData({payload},{call,put}){
      const {data} = yield call(service.statisticsUserIncomePayLastDay);
      yield put({
        type:'updateData',
        payload:{userIncomePayLastDayData:utils.arrayCheck(data)}
      })
    },
    * userIncomePayTrendLastDayData({payload},{call,put}){
      const {data} = yield call(service.statisticsUserIncomePayLastDayTrend);
      yield put({
        type:'updateData',
        payload:{userIncomePayTrendLastDayData:utils.arrayCheck(data)}
      })
    },
    * allChargeTrendData({payload},{call,put}){
      const {data} = yield call(service.statisticsAllChargeTrend);
      yield put({
        type:'updateData',
        payload:{allChargeTrendData:utils.arrayCheck(data)}
      })
    },
    * dayChargeTrendData({payload},{call,put}){
      const {data} = yield call(service.statisticsDayChargeTrend);
      yield put({
        type:'updateData',
        payload:{dayChargeTrendData:utils.arrayCheck(data)}
      })
    },
    * incomeCancelTrendData({payload},{call,put}){
      const {data} = yield call(service.statisticsIncomeCancelTrend);
      yield put({
        type:'updateData',
        payload:{incomeCancelTrendData:utils.arrayCheck(data)}
      })
    },
    * dayIncomeCancelTrendData({payload},{call,put}){
      let {data} = yield call(service.statisticsDayIncomeCancelTrend);
      yield put({
        type:'updateData',
        payload:{dayIncomeCancelTrendData:utils.arrayCheck(data)}
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
