import config from '../src/utils/config';

const { apiPrefix } = config;

const menuData = [
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
      path: '/param/local',
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
];

module.exports = {
  [`GET ${apiPrefix}/menus`](req, res) {
    res.status(200).json(menuData);
  },
};
