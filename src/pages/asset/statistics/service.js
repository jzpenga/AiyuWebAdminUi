import config from '../../../utils/config';
import request from '../../../utils/request';


export function statisticsAsset() {
  return request({
    url:config.api.statisticsAsset,
    method:'get'
  });
}


export function statisticsAssetPie() {
  return request({
    url:config.api.statisticsAssetPie,
    method:'get'
  });
}


export function statisticsAssetTrend() {
  return request({
    url:config.api.statisticsAsset,
    method:'get'
  });
}



export function statisticsIncrement() {
  return request({
    url:config.api.statisticsIncrement,
    method:'get'
  });
}



export function statisticsIncrementTrend() {
  return request({
    url:config.api.statisticsIncrementTrend,
    method:'get'
  });
}


export function statisticsUserIncomePay() {
  return request({
    url:config.api.statisticsUserIncomePay,
    method:'get'
  });
}


export function statisticsUserIncomeTrendPay() {
  return request({
    url:config.api.statisticsUserIncomeTrendPay,
    method:'get'
  });
}


export function statisticsUserIncomePayLastDay() {
  return request({
    url:config.api.statisticsUserIncomePayLastDay,
    method:'get'
  });
}

export function statisticsUserIncomePayLastDayTrend() {
  return request({
    url:config.api.statisticsUserIncomePayLastDayTrend,
    method:'get'
  });
}


export function statisticsAllChargeTrend() {
  return request({
    url:config.api.statisticsAllChargeTrend,
    method:'get'
  });
}

export function statisticsDayChargeTrend() {
  return request({
    url:config.api.statisticsDayChargeTrend,
    method:'get'
  });
}

export function statisticsIncomeCancelTrend() {
  return request({
    url:config.api.statisticsIncomeCancelTrend,
    method:'get'
  });
}

export function statisticsDayIncomeCancelTrend() {
  return request({
    url:config.api.statisticsDayIncomeCancelTrend,
    method:'get'
  });
}
