import * as service from '../service';
import router from 'umi/router';

export default {
  namespace: 'userEdit',
  state: {
    // /admin/manage/consumer/capitaltotal/{id}
    assetData: [{ name: 'flow', value: 400 }, { name: 'locked', value: 300 }],
    // /admin/manage/consumer/profitstotal/{id}
    incomeData: [{ name: 'flow', value: 400 }, { name: 'locked', value: 300 }],
    assetTrendData: [
      { creatTime: '11-01', floatingFunds: 2000, lockrepoFunds: 2013 },
      { creatTime: '11-02', floatingFunds: 3300, lockrepoFunds: 2000 },
      { creatTime: '11-03', floatingFunds: 3200, lockrepoFunds: 1398 },
      { creatTime: '11-04', floatingFunds: 2800, lockrepoFunds: 2800 },
      { creatTime: '11-05', floatingFunds: 2800, lockrepoFunds: 2800 },
      { creatTime: '11-06', floatingFunds: 2800, lockrepoFunds: 2800 },
      { creatTime: '11-07', floatingFunds: 2800, lockrepoFunds: 2800 },
    ],
    //  /admin/manage/consumer/profitsdetail/{id}
    incomeTrendData: [
      { creatTime: '11-01', floatingFunds: 2000, lockrepoFunds: 2013 },
      { creatTime: '11-02', floatingFunds: 3300, lockrepoFunds: 2000 },
      { creatTime: '11-03', floatingFunds: 3200, lockrepoFunds: 1398 },
      { creatTime: '11-04', floatingFunds: 2800, lockrepoFunds: 2800 },
      { creatTime: '11-05', floatingFunds: 2800, lockrepoFunds: 2800 },
      { creatTime: '11-06', floatingFunds: 2800, lockrepoFunds: 2800 },
      { creatTime: '11-07', floatingFunds: 2800, lockrepoFunds: 2800 },
    ],
    // /admin/manage/consumer/team/{id}
    teamOneData: [
      { creatTime: '11-01', totalFunds: 4000, totalMember: 2400 },
      { creatTime: '11-02', totalFunds: 3000, totalMember: 1398 },
      { creatTime: '11-03', totalFunds: 2000, totalMember: 9800 },
      { creatTime: '11-04', totalFunds: 2780, totalMember: 3908 },
      { creatTime: '11-05', totalFunds: 1890, totalMember: 4800 },
      { creatTime: '11-06', totalFunds: 2390, totalMember: 3800 },
      { creatTime: '11-07', totalFunds: 3490, totalMember: 4300 },
    ],
    teamTwoData: [
      { creatTime: '11-01', totalFunds: 4000, totalMember: 2400 },
      { creatTime: '11-02', totalFunds: 3000, totalMember: 1398 },
      { creatTime: '11-03', totalFunds: 2000, totalMember: 9800 },
      { creatTime: '11-04', totalFunds: 2780, totalMember: 3908 },
      { creatTime: '11-05', totalFunds: 1890, totalMember: 4800 },
      { creatTime: '11-06', totalFunds: 2390, totalMember: 3800 },
      { creatTime: '11-07', totalFunds: 3490, totalMember: 4300 },
    ],
    userInfo: {},
    pageNo: 0,
    total: 0,
    userTranList:[],
  },
  reducers: {
    updateUserInfo:(state,{payload})=>{
      return {...state,userInfo: payload};
    },
    updateUserTranList:(state, { payload})=>{
      return {...state,
        userTranList:payload.userTranList,
        pageNo:payload.pageNo,
        total:payload.total
      };
    },
  },
  effects: {
    * saveUserInfo({ payload }, { call, put }) {
      let {data} = yield call(service.save, payload);
      yield put({
        type:'updateUserInfo',
        payload:data
      });
      router.goBack();
    },
    * queryUserInfo({ payload }, { call, put }) {
      let {data} = yield call(service.fetchUserInfo, payload);
      //console.log('queryUserInfo',data);
      yield put({
        type:'updateUserInfo',
        payload:data
      })
    },
    * queryUserTranList({ payload }, { call, put }){
      console.log(payload);
      let {data} = yield call(service.fetchTranList, payload);
      let userTranList = data.list;
      yield put({
        type:'updateUserTranList',
        payload:{userTranList:userTranList, pageNo: data.pageNum, total: data.total }
      });
    },
    * deleteUser({ payload }, { call, put }) {
      let data = yield call(service.deleteUser, { id: payload });
      router.goBack();
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/system/user/edit') {
          if (query.id > 0) {
            dispatch({ type: 'queryUserInfo', payload: { id: query.id } });
            dispatch({
              type: 'queryUserTranList',
              payload: {
                pageNo: 1,
                pageSize: 10,
                consumerId: query.id,
                transType: '2',
              },
            });
          }else {
            dispatch({type:'updateUserInfo',payload:{}})
          }
        }
      });
    },
  },
};
