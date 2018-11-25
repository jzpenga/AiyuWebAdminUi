import config from '../../../../utils/config';
import request from '../../../../utils/request';

export function fetchUserList(data) {
  return request({
    url:config.api.userList,
    method:'post',
    data
  });
}
