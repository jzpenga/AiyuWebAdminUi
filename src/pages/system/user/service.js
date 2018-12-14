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
    method: 'post',
    data
  });
}

// /admin/manage/consumer/capitaltotalPie/{id}
export function assetData(data) {
  return request({
    url: `${config.apiPrefix}/consumer/capitaltotalPie/${data.id}`,
    method: 'get',
    data
  });
}

///admin/manage/consumer/profitstotalPie/{id}
export function incomeData(data) {
  return request({
    url: `${config.apiPrefix}/consumer/profitstotalPie/${data.id}`,
    method: 'get',
    data
  });
}

///admin/manage/consumer/capitaltotal/{id}  startDate  endDate
export function assetTrendData(data) {
  return request({
    url: `${config.apiPrefix}/consumer/capitaltotal/${data.id}`,
    method: 'get',
    data
  });
}

////admin/manage/consumer/profitsdetail/{id}
export function incomeTrendData(data) {
  return request({
    url: `${config.apiPrefix}/consumer/profitstotal/${data.id}`,
    method: 'get',
    data
  });
}

//  /admin/manage/consumer/teamMember/{id} witchteam 0 分享一     1 团队二
export function teamMember(data) {
  return request({
    url: `${config.apiPrefix}/consumer/teamMember/${data.id}`,
    method: 'get',
    data
  });
}

//  /admin/manage/consumer/team/{id}  startDate  endDate
export function team(data) {
  return request({
    url: `${config.apiPrefix}/consumer/team/${data.id}`,
    method: 'get',
    data
  });
}

//  /admin/manage/consumer/team/{id}  startDate  endDate
export function getServerTime() {
  return request({
    url: `${config.apiPrefix}/sysuser/getSysTime`,
    method: 'post',
  });
}
