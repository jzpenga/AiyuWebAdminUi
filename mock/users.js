import config from '../src/utils/config';

const userListMockData = [{
  'id': '1',
  'nickName': '刘德华',
  'phoneNo': '18317907145',
  'totalFunds': '10000',
  'floatingFunds': '2000',
  'lockRepoFunds': '8000',
  'creatTime': '2018-11-09',
  'lastLoginTime': '20180-11-12 09:12',
}, {
  'id': '2',
  'nickName': '刘德华',
  'phoneNo': '18317907146',
  'totalFunds': '10000',
  'floatingFunds': '2000',
  'lockRepoFunds': '8000',
  'creatTime': '2018-11-09',
  'lastLoginTime': '20180-11-12 09:12',
}, {
  'id': '3',
  'nickName': '刘德华',
  'phoneNo': '18317907147',
  'totalFunds': '10000',
  'floatingFunds': '2000',
  'lockRepoFunds': '8000',
  'creatTime': '2018-11-09',
  'lastLoginTime': '20180-11-12 09:12',
}, {
  'id': '4',
  'nickName': '刘德华',
  'phoneNo': '18317907148',
  'totalFunds': '10000',
  'floatingFunds': '2000',
  'lockRepoFunds': '8000',
  'creatTime': '2018-11-09',
  'lastLoginTime': '20180-11-12 09:12',
}];

export default {
  [`POST ${config.api.userList}`]: (req, res) => {
    let response = {
      'data': {
        'pageNum': req.body.pageNo,
        'pageSize': config.pageSize,
        'total': userListMockData.length,//总条数
        'pages': Math.ceil(userListMockData.length / config.pageSize),//总页数
        list: getData(req.body.pageNo),
      }
      ,
      'responseCode': 200,
      'responseMsg': '成功',
    };
    res.json(response);
  },
};

function getData(pageNo) {
  let userList = [];
  userList.push(userListMockData[pageNo-1]);
  return userList;
}
