import * as service from './service';
import config from '../../../utils/config';

export default {
  namespace: 'paramTeam',
  state: {
    editingKey: '',
    paramListData: [],
    selectedRowKeys:[]
  },
  reducers: {
    updateEditingKey(state, { payload: editingKey }) {
      return { ...state, editingKey };
    },
    updateSelectedRowKeys(state, { selectedRowKeys }) {
      return { ...state, selectedRowKeys };
    },
    addEmptyColumn(state, { payload }) {
      let newParamListData = [];
      newParamListData.push(...state.paramListData);
      newParamListData.push(payload);
      return {...state,paramListData:newParamListData,editingKey:payload.id};
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
    },
    deleteDataList(state,{ ids }){
      ids.forEach((id)=>{
        const index = state.paramListData.findIndex(item => id === item.id);
        state.paramListData.splice(index, 1);
      });
      return {...state};
    }

  },
  effects: {
    * saveTeamParam({ payload: { data, row } }, { put, call }) {
      //保存服务端
      let param = { ...row, id: data.id };
      if (data.id===-1){
        param = { ...row, id: ''};
      }else {
        param = { ...row, id: data.id };
      }
      let resData = yield call(service.saveTeamParamToServer, param);
      if (resData.responseCode === 200) {
        let newData = resData.data;
        //更新本地
        yield put({
          type: 'updateData',
          payload: {
            data:newData,
            row,
          },
        });
      }
    },
    * queryTeamParamList({ payload }, { put, call }) {
      let { data } = yield call(service.fetchTeamParamList, payload);
      yield put({
        type: 'onFetchParamListData',
        payload: {
          data,
        },
      });
    },

    * deleteTeamParam({payload},{put,call}){
      const data = yield call(service.deleteParam,payload);
      yield put({
        type:'deleteData',
        payload:payload
      });
    },

    * deleteTeamParamList({selectedRowKeys},{put,call}){
      const ids = [];
      ids.push(...selectedRowKeys);
      const data = yield call(service.deleteParamList,{ids:ids});
      yield put({
        type:'deleteDataList',
        ids:ids
      });
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/param/team') {
          dispatch({ type: 'queryTeamParamList' });
        }
      });
    },
  },

};
