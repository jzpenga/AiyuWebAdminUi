import * as service  from './service';
import config from '../../utils/config';
import { routerRedux } from 'dva/router';


export default {
  namespace: 'home',
  state: {
    // /admin/manage/statistics/capitaltotal
    allTrendData: [
      { creatTime: '11-01', floatingFunds: 2000, lockrepoFunds: 2013 },
      { creatTime: '11-02', floatingFunds: 3300, lockrepoFunds: 2000 },
      { creatTime: '11-03', floatingFunds: 3200, lockrepoFunds: 1398 },
      { creatTime: '11-04', floatingFunds: 2800, lockrepoFunds: 2800 },
      { creatTime: '11-05', floatingFunds: 2800, lockrepoFunds: 2800 },
      { creatTime: '11-06', floatingFunds: 2800, lockrepoFunds: 2800 },
      { creatTime: '11-07', floatingFunds: 2800, lockrepoFunds: 2800 },
    ],
    // /admin/manage/statistics/capitaldaily
    dayWeightTrendData: [
      { creatTime: '11-01', floatingFunds: 2000, lockrepoFunds: 2013 },
      { creatTime: '11-02', floatingFunds: 3300, lockrepoFunds: 2000 },
      { creatTime: '11-03', floatingFunds: 3200, lockrepoFunds: 1398 },
      { creatTime: '11-04', floatingFunds: 2800, lockrepoFunds: 2800 },
      { creatTime: '11-05', floatingFunds: 2800, lockrepoFunds: 2800 },
      { creatTime: '11-06', floatingFunds: 2800, lockrepoFunds: 2800 },
      { creatTime: '11-07', floatingFunds: 2800, lockrepoFunds: 2800 },
    ],
    // /admin/manage/statistics/consumertotal
    userAllTrendData: [
      { creatTime: '11-01', count: 2013 },
      { creatTime: '11-02', count: 2000 },
      { creatTime: '11-03', count: 1398 },
      { creatTime: '11-04', count: 2800 },
      { creatTime: '11-05', count: 2800 },
      { creatTime: '11-06', count: 2800 },
      { creatTime: '11-07', count: 2800 },
    ],
    // /admin/manage/statistics/consumerdaily
    userDayTrendData: [
      { creatTime: '11-01', count: 2013 },
      { creatTime: '11-02', count: 2000 },
      { creatTime: '11-03', count: 1398 },
      { creatTime: '11-04', count: 2800 },
      { creatTime: '11-05', count: 2800 },
      { creatTime: '11-06', count: 2800 },
      { creatTime: '11-07', count: 2800 },
    ],
    // /admin/manage/statistics/rankinlist
    userListData: [],
  },
  reducers: {
    updateUserRanking:(state,{payload})=>{
      console.log(payload)
      return {...state,userListData:payload}
    },
  },
  effects: {
    * queryUserRanking({payload},{put,call}){
      let {data} = yield call(service.fetchUserRanking);
      yield put({
        type: 'updateUserRanking',
        payload:data
      })
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/home') {
          dispatch({ type: 'queryUserRanking' });
        }
      });
    },
  },

};
