import * as service  from './service';
import config from '../../utils/config';
import { routerRedux } from 'dva/router';


export default {
  namespace: 'home',
  state: {
    // /admin/manage/statistics/capitaltotal
    allTrendData: [],
    // /admin/manage/statistics/capitaldaily
    dayWeightTrendData: [],
    // /admin/manage/statistics/consumertotal
    userAllTrendData: [],
    // /admin/manage/statistics/consumerdaily
    userDayTrendData: [],
    // /admin/manage/statistics/rankinlist
    userListData: [],
    coinCurrent:''
  },
  reducers: {
    updateUserRanking:(state,{payload})=>{
      return {...state,userListData:payload}
    },
    updateAllTrend:(state,{payload})=>{
      return {...state,allTrendData:payload}
    },
    updateDayWeightTrend:(state,{payload})=>{
      return {...state,dayWeightTrendData:payload}
    },
    updateUserAllTrend:(state,{payload})=>{
      return {...state,userAllTrendData:payload}
    },
    updateDayTrend:(state,{payload})=>{
      return {...state,userDayTrendData:payload}
    },
    updateCoinCurrent(state,{payload}){
      return {...state,coinCurrent: payload}
    }
  },
  effects: {
    * queryUserRanking({payload},{put,call}){
      let {data} = yield call(service.fetchUserRanking);
      yield put({
        type: 'updateUserRanking',
        payload:data
      })
    },
    * queryAllTrend({payload},{put,call}){
      let {data} = yield call(service.allTrend);
      yield put({
        type:'updateAllTrend',
        payload:data
      })
    },
    * queryDayWeightTrend({payload},{put,call}){
      let {data} = yield call(service.dayWeightTrend);
      yield put({
        type:'updateDayWeightTrend',
        payload:data
      })
    },
    * queryUserAllTrendData({payload},{put,call}){
      let {data} = yield call(service.userAllTrend);
      yield put({
        type:'updateUserAllTrend',
        payload:data
      })
    },
    * queryUserDayTrendData({payload},{put,call}){
      let {data} = yield call(service.userDayTrend);
      yield put({
        type:'updateDayTrend',
        payload:data
      })
    },
    * fetchCoinCurrent({payload},{call,put}){
      let {data} = yield call(service.fetchCoinCurrent);
      yield put({
        type:'updateCoinCurrent',
        payload: data.currentPrice
      });
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/home') {
          dispatch({ type: 'queryUserRanking' });
          dispatch({ type: 'queryAllTrend' });
          dispatch({ type: 'queryDayWeightTrend' });
          dispatch({ type: 'queryUserAllTrendData' });
          dispatch({ type: 'queryUserDayTrendData' });
          dispatch({
            type:'fetchCoinCurrent',
          })
        }
      });
    },
  },

};
