import * as service from '../service';
import config from '../../../../utils/config';
import * as routerRedux from 'react-router-redux';

export default {
  namespace: 'userList',
  state: {
    queryParam: {},
    userListData: [],
    pageNo: 0,
    total: 0,
  },
  reducers: {
    queryParamChange: (state,{payload:{queryParam}}) => {
      return { ...state, queryParam };
    },
    refreshUserList: (state,{payload:{userListData,pageNo,total}}) => {
      return {...state,userListData,pageNo,total};
    },
  },
  effects: {
    * queryUserList({ payload }, { call, put }) {
      let {data} = yield call(service.fetchUserList,payload);
      let userListData = data.list;
      yield put({
        type: 'refreshUserList',
        payload: {userListData,pageNo:data.pageNum,total: data.total},
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/system/user/list') {
          dispatch({ type: 'queryUserList', payload: { pageNo: 1 } });
        }
      });
    },
  },

};
