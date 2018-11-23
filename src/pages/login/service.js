import config from '../../utils/config';
import request from '../../utils/request';

const {apiPrefix} = config;

export function login(data) {
  return request({
    url:config.api.userLogin,
    method:'post',
    data
  });
}
