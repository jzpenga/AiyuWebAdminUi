import config from '../../../utils/config';
import request from '../../../utils/request';

export function fetchUserList(data) {
  return request({
    url: config.api.userList,
    method: 'post',
    data,
  });
}

export function deleteUser(data) {
  return request({
    url: `${config.apiPrefix}/consumer/delete/${data.id}`,
    method: 'post',
    data,
  });
}

export function deleteUserList(data) {
  return request({
    url: config.api.userDeleteList,
    method: 'post',
    data,
  });
}

export function save(data) {
  return request({
    url: config.api.userAdd,
    method: 'post',
    data,
  });
}


export function fetchUserInfo(data) {
  return request({
    url: `${config.apiPrefix}/consumer/consumer/${data.id}`,
    method: 'get',
  });
}


export function fetchTranList(data) {
  return request({
    url: config.api.userTranDetail,
    method: 'get',
    data
  });
}
