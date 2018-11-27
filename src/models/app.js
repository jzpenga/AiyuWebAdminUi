import {fetchMenuList} from '../services/app';
export default {
  namespace: 'app',
  state: {
    menuList:[
      {
        name: '系统管理',
        icon: './icon-system.png',
        path: '/system',
        children:[{
          name: '用户管理',
          icon: './icon-user.png',
          path: '/system/user/list',
        }]
      },{
        name: '资产管理',
        icon: './icon-assert.png',
        path: '/asset',
        children:[{
          name: '今日统计',
          icon: './icon-statistics.png',
          path: '/asset/statistics',
        }]
      },{
        name: '参数管理',
        icon: './icon-param.png',
        path: '/param',
        children:[{
          name: '锁仓收益参数',
          icon: './icon-param-lock.png',
          path: '/param/lock',
        },{
          name: '团队收益参数',
          icon: './icon-param-team.png',
          path: '/param/team',
        },{
          name: '其他参数',
          icon: './icon-param-other.png',
          path: '/param/other',
        }]
      }
    ]
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
