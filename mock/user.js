import config from '../src/utils/config';

const { apiPrefix } = config;

const defaultUser = {
  userName: 'admin',
  password: '123456',
};

export default {
  [`POST ${apiPrefix}/sysuser/login`]: (req, res) => {
    let { userName, password } = req.body;
    if (userName === defaultUser.userName && password === defaultUser.password) {

      let response = {
        'data': {
          'account': 1,
          'createTime': 1,
          'id': 1,
          'password': 1,
          'phoneNo': 1,
          'username': '刘晓菲',
        },
        'responseCode': 200,
        'responseMsg': '成功',
      };

      // let response = {
      //   token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vc2FsZS',
      //   account: '王大锤'
      // };

      res.json(response);
    } else {
      //账号或密码错误
      res.status(503).json({});
    }
  },
};
