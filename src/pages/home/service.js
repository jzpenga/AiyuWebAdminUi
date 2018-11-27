import config from '../../utils/config';
import request from '../../utils/request';

const {apiPrefix} = config;

export function fetchUserRanking() {
  return request({
    url:config.api.userRankinList,
    method:'get'
  });
}
