import request from '../utils/request';
import { apiPrefix } from '../utils/config';

export function fetchMenuList() {

  return request({
    url: `${apiPrefix}/menus`,
    method: 'get',
  });
}


export function fetchCoinCurrent() {

  return request({
    url: `${apiPrefix}/statistics/coinCurrent`,
    method: 'post',
  });
}
