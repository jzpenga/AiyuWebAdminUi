import config from '../src/utils/config';

export default {
  [`POST ${config.api.saveLockedParam}`]: (req, res) => {
    let response = {
      'data': {
      }
      ,
      'responseCode': 200,
      'responseMsg': '成功',
    };
    res.json(response);
  },
  [`GET ${config.api.lockedParamList}`]: (req, res) => {
    let response = {
      'data': dataList,
      'responseCode': 200,
      'responseMsg': '成功',
    };
    res.json(response);
  },
  [`POST ${config.api.deleteLockedParam}`]: (req, res) => {
    let response = {
      'data': {},
      'responseCode': 200,
      'responseMsg': '成功',
    };
    res.json(response);
  }
};



const dataList = [{
  'id': 1,
  'profitsCode': '23',
  'lowerLimit': '12',
  'upperLimit': '45',
  'ratio': '0.8',
}, {
  'id': 2,
  'profitsCode': '23',
  'lowerLimit': '12',
  'upperLimit': '45',
  'ratio': '0.7',
},
];

