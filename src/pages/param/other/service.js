import config from '../../../utils/config';
import request from '../../../utils/request';

const {apiPrefix} = config;

export function saveParamToServer(data) {
  return request({
    url:config.api.saveOtherParam,
    method:'post',
    data
  });
}

export function fetchParamList(data) {
  return request({
    url:config.api.otherParamList,
    method:'get',
    data
  });
}
//sysparam/delete/{id}
export function deleteParam(data) {
  return request({
    url:`${apiPrefix}/parameter/sysparam/delete/${data.id}`,
    method:'post',
    data
  });
}

export function deleteParamList(data) {
  return request({
    url:config.api.deleteOtherParamList,
    method:'post',
    data
  });
}
