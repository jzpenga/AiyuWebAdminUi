import * as service from '../service';
import router from 'umi/router';
import * as utils from '../../../../utils/utils';


export default {
  namespace: 'userEdit',
  state: {
    assetData: [],
    // /admin/manage/consumer/profitstotal/{id}
    incomeData: [],
    ///admin/manage/consumer/capitaltotal/{id}
    assetTrendData: [],
    //  /admin/manage/consumer/profitsdetail/{id}
    incomeTrendData: [],
    // /admin/manage/consumer/team/{id}
    teamOneData: [],
    teamTwoData: [],
    teamData:[],
    userInfo: {},
    pageNo: 0,
    total: 0,
    userTranList:[],
  },
  reducers: {
    updateUserInfo:(state,{payload})=>{
      payload = {...payload,passWord:''};
      return {...state,userInfo: payload};
    },
    updateUserTranList:(state, { payload})=>{
      return {...state,
        userTranList:payload.userTranList,
        pageNo:payload.pageNo,
        total:payload.total
      };
    },
    updateData:(state,{payload})=>{
      return {...state,...payload};
    }
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
    * assetData({payload},{call,put}){
      let {data} = yield call(service.assetData, payload);
      yield put({
        type:'updateData',
        payload:{assetData:utils.arrayCheck(data)}
      });
    },
    * incomeData({payload},{call,put}){
      let {data} = yield call(service.incomeData, payload);
      yield put({
        type:'updateData',
        payload:{incomeData:utils.arrayCheck(data)}
      });
    },
    * assetTrendData({payload},{call,put}){
      // startDate
      payload = {...payload,startDate:utils.getLastMonthDate(),endDate:utils.getTodayDate()};
      let {data} = yield call(service.assetTrendData, payload);
      yield put({
        type:'updateData',
        payload:{assetTrendData:utils.arrayCheck(data)}
      });
    },
    * incomeTrendData({payload},{call,put}){
      // startDate endDate
      payload = {...payload,startDate:utils.getLastMonthDate(),endDate:utils.getTodayDate()};
      let {data} = yield call(service.incomeTrendData, payload);
      yield put({
        type:'updateData',
        payload:{incomeTrendData:utils.arrayCheck(data)}
      });
    },
    * teamMember({payload},{call,put}){
      const {witchteam} = payload;
      let {data} = yield call(service.teamMember, payload);
      yield put({
        type:'updateData',
        payload:witchteam===0?{teamOneData:utils.arrayCheck(data)}:{teamTwoData:utils.arrayCheck(data)}
      });
    },
    * team({payload},{call,put}){
      payload = {...payload,startDate:utils.getLastMonthDate(),endDate:utils.getTodayDate()};
      let {data} = yield call(service.team, payload);
      yield put({
        type:'updateData',
        payload:{teamData:utils.arrayCheck(data)}
      });
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
                transType: '1',
              },
            });
            dispatch({ type: 'assetData', payload: { id: query.id } });
            dispatch({ type: 'incomeData', payload: { id: query.id } });
            dispatch({ type: 'assetTrendData', payload: { id: query.id } });
            dispatch({ type: 'incomeTrendData', payload: { id: query.id } });
            dispatch({ type: 'teamMember', payload: { id: query.id,witchteam:1 } });
            dispatch({ type: 'teamMember', payload: { id: query.id,witchteam:0 } });
            dispatch({ type: 'team', payload: { id: query.id } });
          }else {
            dispatch({type:'updateUserInfo',payload:{}})
          }
        }
      });
    },
  },
};
