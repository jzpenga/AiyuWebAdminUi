import {login} from './service';
import config from '../../utils/config';
import {routerRedux} from 'dva/router';


export default{
  namespace:'home',
  state:{
    // /admin/manage/statistics/capitaltotal
    allTrendData:[
      { createdTime: '11-01', floatingFunds: 2000, lockrepoFunds: 2013 },
      { createdTime: '11-02', floatingFunds: 3300, lockrepoFunds: 2000 },
      { createdTime: '11-03', floatingFunds: 3200, lockrepoFunds: 1398 },
      { createdTime: '11-04', floatingFunds: 2800, lockrepoFunds: 2800 },
      { createdTime: '11-05', floatingFunds: 2800, lockrepoFunds: 2800 },
      { createdTime: '11-06', floatingFunds: 2800, lockrepoFunds: 2800 },
      { createdTime: '11-07', floatingFunds: 2800, lockrepoFunds: 2800 },
    ],
    // /admin/manage/statistics/capitaldaily
    dayWeightTrendData:[
      { createdTime: '11-01', floatingFunds: 2000, lockrepoFunds: 2013 },
      { createdTime: '11-02', floatingFunds: 3300, lockrepoFunds: 2000 },
      { createdTime: '11-03', floatingFunds: 3200, lockrepoFunds: 1398 },
      { createdTime: '11-04', floatingFunds: 2800, lockrepoFunds: 2800 },
      { createdTime: '11-05', floatingFunds: 2800, lockrepoFunds: 2800 },
      { createdTime: '11-06', floatingFunds: 2800, lockrepoFunds: 2800 },
      { createdTime: '11-07', floatingFunds: 2800, lockrepoFunds: 2800 },
    ],
    // /admin/manage/statistics/consumertotal
    userAllTrendData:[
      { createdTime: '11-01', count: 2013 },
      { createdTime: '11-02', count: 2000 },
      { createdTime: '11-03', count: 1398 },
      { createdTime: '11-04', count: 2800 },
      { createdTime: '11-05', count: 2800 },
      { createdTime: '11-06', count: 2800 },
      { createdTime: '11-07', count: 2800 },
    ],
    // /admin/manage/statistics/consumerdaily
    userDayTrendData:[
      { createdTime: '11-01', count: 2013 },
      { createdTime: '11-02', count: 2000 },
      { createdTime: '11-03', count: 1398 },
      { createdTime: '11-04', count: 2800 },
      { createdTime: '11-05', count: 2800 },
      { createdTime: '11-06', count: 2800 },
      { createdTime: '11-07', count: 2800 },
    ],
    // /admin/manage/statistics/rankinlist
    userListData:[
      {
        'id':'1',
        'nickName': '刘德华',
        'phoneNo': '18317907145',
        'totalFunds': '10000',
        'floatingFunds': '2000',
        'lockrepoFunds': '8000'
      },{
        'id':'2',
        'nickName': '刘德华',
        'phoneNo': '18317907145',
        'totalFunds': '10000',
        'floatingFunds': '2000',
        'lockrepoFunds': '8000'
      },{
        'id':'3',
        'nickName': '刘德华',
        'phoneNo': '18317907145',
        'totalFunds': '10000',
        'floatingFunds': '2000',
        'lockrepoFunds': '8000'
      },{
        'id':'4',
        'nickName': '刘德华',
        'phoneNo': '18317907145',
        'totalFunds': '10000',
        'floatingFunds': '2000',
        'lockrepoFunds': '8000'
      },{
        'id':'5',
        'nickName': '刘德华',
        'phoneNo': '18317907145',
        'totalFunds': '10000',
        'floatingFunds': '2000',
        'lockrepoFunds': '8000'
      },{
        'id':'6',
        'nickName': '刘德华',
        'phoneNo': '18317907145',
        'totalFunds': '10000',
        'floatingFunds': '2000',
        'lockrepoFunds': '8000'
      },{
        'id':'7',
        'nickName': '刘德华',
        'phoneNo': '18317907145',
        'totalFunds': '10000',
        'floatingFunds': '2000',
        'lockrepoFunds': '8000'
      },{
        'id':'8',
        'nickName': '刘德华',
        'phoneNo': '18317907145',
        'totalFunds': '10000',
        'floatingFunds': '2000',
        'lockrepoFunds': '8000'
      }
    ]
  },
  reducers: {

  },

}
