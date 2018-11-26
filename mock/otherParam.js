import config from '../src/utils/config';

export default {
  [`POST ${config.api.saveOtherParam}`]: (req, res) => {
    let response = {
      'data': {
        'id': req.body.id===''?3:req.body.id,
        'paramCode': '23',
        'paramName': '12',
        'paramValue': '45'
      },
      'responseCode': 200,
      'responseMsg': '成功',
    };
    res.json(response);
  },
  [`GET ${config.api.otherParamList}`]: (req, res) => {
    let response = {
      'data': dataList,
      'responseCode': 200,
      'responseMsg': '成功',
    };
    res.json(response);
  },
  [`POST ${config.api.deleteOtherParam}`]: (req, res) => {
    let response = {
      'data': {},
      'responseCode': 200,
      'responseMsg': '成功',
    };
    res.json(response);
  },
  [`POST ${config.api.deleteOtherParamList}`]: (req, res) => {
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
  'paramCode': '23',
  'paramName': '12',
  'paramValue': '45'
}, {
  'id': 2,
  'paramCode': '23',
  'paramName': '12',
  'paramValue': '45'
},
];

