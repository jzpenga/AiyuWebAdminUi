import config from '../../../utils/config';
import request from '../../../utils/request';

const {apiPrefix} = config;

export function saveLockedParamToServer(data) {
  return request({
    url:config.api.saveLockedParam,
    method:'post',
    data
  });
}

export function fetchLockedParamList(data) {
  return request({
    url:config.api.lockedParamList,
    method:'get',
    data
  });
}

export function deleteParam(data) {
  console.log(data);
  return request({
    url:`${apiPrefix}/parameter/lockrepo/delete/${data.id}`,
    method:'post',
    data
  });
}
