import * as service from '../services/app';

const mockMenuList = [
  {
    name: '首页',
    icon: 'home',
    path: '/home'
  },
  {
    name: '系统管理',
    icon: 'appstore',
    path: '/system',
    children:[{
      name: '用户管理',
      icon: 'user',
      path: '/system/user/list',
    }]
  },{
    name: '资产管理',
    icon: 'file-protect',
    path: '/asset',
    children:[{
      name: '昨日统计',
      icon: 'bar-chart',
      path: '/asset/statistics',
    }]
  },{
    name: '参数管理',
    icon: 'sliders',
    path: '/param',
    children:[{
      name: '锁仓收益参数',
      icon: 'lock',
      path: '/param/lock',
    },{
      name: '分享算力参数',
      icon: 'share-alt',
      path: '/param/team',
    },{
      name: '其他参数',
      icon: 'ellipsis',
      path: '/param/other',
    }]
  }
];
export default {
  namespace: 'app',
  state: {
    menuList:[],
  },
  reducers: {
    freshMenu(state,{payload}){
      return {...state,menuList:payload};
    },

  },
  effects: {
    * fetchMenu({payload},{call,put}){
      //let data = yield call(fetchMenuList);
      //let data = yield call(fetchMenuList);
      yield put({
        type:'freshMenu',
        payload: mockMenuList
      });
    },

  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({ pathname, query }) => {
        if (pathname==='/home'){
          //window.localStorage.setItem('selectMenuItem',pathname);

        }
      });
    }
  },
};
