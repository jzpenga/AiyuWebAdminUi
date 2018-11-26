import config from '../../../utils/config';
import request from '../../../utils/request';

const {apiPrefix} = config;

export function saveTeamParamToServer(data) {
  return request({
    url:config.api.saveTeamParam,
    method:'post',
    data
  });
}

export function fetchTeamParamList(data) {
  return request({
    url:config.api.teamParamList,
    method:'get',
    data
  });
}
//teamprofits/teamprofitses
export function deleteParam(data) {
  return request({
    url:`${apiPrefix}/parameter/teamprofits/delete/${data.id}`,
    method:'post',
    data
  });
}

export function deleteParamList(data) {
  return request({
    url:config.api.deleteTeamParamList,
    method:'post',
    data
  });
}
