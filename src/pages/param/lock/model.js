import * as service from './service';
import config from '../../../utils/config';

export default {
  namespace: 'paramLock',
  state: {
    editingKey: '',
    paramListData: [],
    selectedRowKeys:[]
  },
  reducers: {
    updateEditingKey(state, { payload: editingKey }) {
      return { ...state, editingKey };
    },
    updateData(state, { payload: { data, row } }) {
      const index = state.paramListData.findIndex(item => data.id === item.id);
      data = { ...data, ...row };
      state.paramListData.splice(index, 1, data);
      return { ...state };
    },
    onFetchParamListData(state, { payload }) {
      return { ...state, paramListData: payload.data };
    },
    deleteData(state, { payload: { id } }){
      const index = state.paramListData.findIndex(item => id === item.id);
      state.paramListData.splice(index, 1);
      return {...state};

    }

  },
  effects: {
    * saveLockedParam({ payload: { data, row } }, { put, call }) {
      //保存服务端
      let param = { ...row, id: data.id };
      let resData = yield call(service.saveLockedParamToServer, param);
      if (resData.responseCode === 200) {
        //更新本地
        yield put({
          type: 'updateData',
          payload: {
            data,
            row,
          },
        });
      }
    },
    * queryLockedParamList({ payload }, { put, call }) {
      let { data } = yield call(service.fetchLockedParamList, payload);
      yield put({
        type: 'onFetchParamListData',
        payload: {
          data,
        },
      });
    },

    * deleteLockedParam({payload},{put,call}){
      const data = yield call(service.deleteParam,payload);
      console.log(data);
      yield put({
        type:'deleteData',
        payload:payload
      });
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/param/lock') {
          dispatch({ type: 'queryLockedParamList' });
        }
      });
    },
  },

};
