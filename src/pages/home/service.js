import config from '../../utils/config';
import request from '../../utils/request';

const {apiPrefix} = config;

export function fetchUserRanking() {
  return request({
    url:config.api.userRankinList,
    method:'get'
  });
}

export function allTrend() {
  return request({
    url:config.api.allTrend,
    method:'get'
  });
}

export function dayWeightTrend() {
  return request({
    url:config.api.dayWeightTrend,
    method:'get'
  });
}

export function userAllTrend() {
  return request({
    url:config.api.userAllTrend,
    method:'get'
  });
}

export function userDayTrend() {
  return request({
    url:config.api.userDayTrend,
    method:'get'
  });
}


export function fetchCoinCurrent() {

  return request({
    url: `${apiPrefix}/statistics/coinCurrent`,
    method: 'post',
  });
}


export function fetchTranFile() {

  return request({
    url: `${apiPrefix}/statistics/exportXls`,
    method: 'get',
  });
}
