const API = '/admin/manger';

module.exports = {
  name: '环宇智谷',
  prefix: 'walletAdmin',
  logo: '/public/logo.svg',
  loginPage: '/login',
  apiPrefix: '/admin/manger',
  API,
  api: {
    //登录
    userLogin: `${API}/sysuser/login`,
    //首页
    allTrend:`${API}/statistics/capitaltotal`,
    dayWeightTrend:`${API}/statistics/capitaldaily`,
    userAllTrend:`${API}/statistics/consumertotal`,
    userDayTrend:`${API}/statistics/consumerdaily`,
    userRankinList:`${API}/statistics/rankinlist`,
    //用户管理
    userAsset:`${API}/consumer/capitaltotal/:id`,
    userIncome:`${API}/consumer/profitstotal/:id`,
    userAssetTrend:`${API}/consumer/profitstotal/:id`,
    userIncomeTrend:`${API}/consumer/profitsdetail/:id`,
    userTeam:`${API}/consumer/team/:id`,
    //今日统计
    statisticsAsset:`${API}/statistics/capitaltotal`,
    statisticsAssetTrend:`${API}/statistics/capitaldaily`,
    statisticsIncrement:`${API}/`,
    statisticsIncrementTrend:`${API}/statistics/capitaldaily`,
    statisticsUserIncomePay:`${API}/`,
    statisticsUserIncomeTrendPay:`${API}/statistics/profitstotal`,
    statisticsUserIncomePayLastDay:`${API}/`,
    statisticsUserIncomePayLastDayTrend:`${API}/statistics/profitsdaily`,
    statisticsAllChargeTrend:`${API}/statistics/feetotal`,
    statisticsDayChargeTrend:`${API}/statistics/feedaily`,
    statisticsIncomeCancelTrend:`${API}/statistics/destroytotal`,
    statisticsDayIncomeCancelTrend:`${API}/statistics/destroydaily`,
  },
  chartOpt : {
    chartMargin: { top: 20, left: 50, right: 50, bottom: 5 },
    chartHeight: 300,
    chartLegendTop:36,
    chartBar:{
      color: [ '#eb8146','#FFCD3B','#F5736E'],
    },
    chartLine:{
      strokeWidth:2,
      color: ['#F5736E'],
    },
    chartPie:{
      radius:100,
      x:150,
      y:160,
      color:[  '#F5736E', '#FFCD3B'],
    }
  }
};
