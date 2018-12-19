import React from 'react';
import {connect} from 'dva';
import AssetCard from './components/AssetCard';
import UserCard from './components/UserCard';
import UserRankingCard from './components/UserRankingCard';
import styles from './index.less';
import config from '../../utils/config';


class Home extends React.Component {
  outputTran = () =>{
    //window.open('/admin/manage/statistics/exportXls');
    /*this.props.dispatch({
      type:'home/fetchTranFile'
    });*/
    window.location.href='/admin/manage/statistics/exportXls'
  };
  render() {
    return <div>
      <div className={styles.topOptionCard}>
        <div style={{fontWeight:'bold',display:'inline-block'}}>
          <span>现价</span>
          <span style={{color:'#DFBD75',marginLeft:'10px'}}>{this.props.coinCurrent}</span>
        </div>

        <span  style={{color:'#ffb71e'}} className={styles.rightTitleOption}>
          <a href={`${config.baseUrl}/admin/manage/statistics/exportXls`} download>导出交易流水</a></span>
      </div>
      <AssetCard/>
      <UserCard/>
      <UserRankingCard/>
    </div>;
  }
}
const mapTo = (state)=>{
  const {coinCurrent} = state.home;
  return {coinCurrent};
};
export default connect(mapTo)(Home);
