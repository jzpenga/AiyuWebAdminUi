import {login} from './service';
import config from '../../utils/config';
import {routerRedux} from 'dva/router';


export default{
  namespace:'login',
  state:{},
  reducers: {

  },
  effects: {
    * login({payload},{call,put}){
      let {data} = yield call(login,payload);
      window.localStorage.setItem(`${config.prefix}userAccount`,data.username);
      yield put({
        type:'app/fetchMenu'
      });
      yield put(routerRedux.push('/'));
    }
  }

}
