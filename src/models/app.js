import {fetchMenuList} from '../services/app';

const mockMenuList = [
  {
    name: '系统管理',
    icon: 'appstore',
    path: '/system',
    children:[{
      name: '用户管理',
      icon: '',
      path: '/system/user/list',
    }]
  },{
    name: '资产管理',
    icon: 'file-protect',
    path: '/asset',
    children:[{
      name: '今日统计',
      icon: '',
      path: '/asset/statistics',
    }]
  },{
    name: '参数管理',
    icon: 'sliders',
    path: '/param',
    children:[{
      name: '锁仓收益参数',
      icon: '',
      path: '/param/lock',
    },{
      name: '分享算力参数',
      icon: '',
      path: '/param/team',
    },{
      name: '其他参数',
      icon: '',
      path: '/param/other',
    }]
  }
];
export default {
  namespace: 'app',
  state: {
    menuList:[]
  },
  reducers: {
    freshMenu({payload},state){
      return {...state};
    }
  },
  effects: {
    * fetchMenu({payload},{call,put}){
      //let data = yield call(fetchMenuList);
      yield put({
        type:'freshMenu',
        menuList: mockMenuList
      });
    }
  },
  subscriptions: {
    setup({dispatch}) {
    }
  },
};
