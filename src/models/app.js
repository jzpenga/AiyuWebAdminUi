import {fetchMenuList} from '../services/app';
export default {
  namespace: 'app',
  state: {
    menuList:[]
  },
  reducers: {
    freshMenu({payload},state){
      return {...state,payload};
    }
  },
  effects: {
    * fetchMenu({payload},{call,put}){
      let data = yield call(fetchMenuList);
      yield put({
        type:'freshMenu',
        menuList: data.list
      });
    }
  },
  subscriptions: {
    setup({dispatch}) {
    }
  },
};
