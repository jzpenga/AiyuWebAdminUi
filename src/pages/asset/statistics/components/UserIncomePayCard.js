import styles from '../index.less';
import React from 'react';
import {connect} from 'dva';
import {  Card, Row, Col} from 'antd';
import AStackBar from '../../../../components/Charts/AStackBar';
import APieChart from '../../../../components/Charts/APieChart';


class UserIncomePayCard extends React.Component{

  render(){
    const {userIncomePayData,userIncomePayTrendData,userIncomePayLastDayData,userIncomePayTrendLastDayData} = this.props;
    //团队收益 推荐收益 锁仓收益
    let lock=0,ref=0,team=0,total=0,lockLastDay=0,refLastDay=0,teamLastDay=0,totalLastDay=0;
    userIncomePayData.forEach((item)=>{
      if (item.name === '团队收益') {
        team = item.value;
        total+=item.value;
      }else if (item.name === '推荐收益') {
        ref = item.value;
        total+=item.value;
      }else if (item.name === '锁仓收益') {
        lock = item.value;
        total+=item.value;
      }
    });
    userIncomePayLastDayData.forEach((item)=>{
      if (item.name === '团队收益') {
        teamLastDay = item.value;
        totalLastDay+=item.value;
      }else if (item.name === '推荐收益') {
        refLastDay = item.value;
        totalLastDay+=item.value;
      }else if (item.name === '锁仓收益') {
        lockLastDay = item.value;
        totalLastDay+=item.value;
      }
    });
    return <Card className={styles.commonCard}>
      <Row className={styles.titleLabel}>
        <Col span={24}>用户收益支出</Col>
      </Row>
      <Row gutter={12}>
        <Col span={6}>
          <span className={styles.chartTitle}>支出总量{total}</span>
        </Col>
        <Col span={6}>
          <span className={styles.chartTitle}>锁仓收益{lock}</span>
        </Col>
        <Col span={6}>
          <span className={styles.chartTitle}>团队收益{team}</span>
        </Col>
        <Col span={6}>
          <span className={styles.chartTitle}>推荐收益{ref}</span>
        </Col>
      </Row>
      <Row>
        <Col span={12} push={2}>
          <APieChart
            dataKey={['value']}
            dataSource={userIncomePayData}
          />
        </Col>
        <Col span={12}>
          <AStackBar
            xName={'creatTime'}
            barName={['团队','锁仓','推荐']}
            dataKey={['profitsTeam','profitsLockrepo','profitsReferee']}
            dataSource={userIncomePayTrendData}
          />
          <span className={styles.chartTitle}>趋势</span>
        </Col>
      </Row>
      <div style={{padding:'5px 0',background:'#F6F6F7'}}>
      </div>
      <Row gutter={12}>
        <Col span={6}>
          <span className={styles.chartTitle}>昨日支出总量{totalLastDay}</span>
        </Col>
        <Col span={6}>
          <span className={styles.chartTitle}>昨日锁仓收益{lockLastDay}</span>
        </Col>
        <Col span={6}>
          <span className={styles.chartTitle}>昨日团队收益{teamLastDay}</span>
        </Col>
        <Col span={6}>
          <span className={styles.chartTitle}>昨日推荐收益{refLastDay}</span>
        </Col>
      </Row>
      <Row>
        <Col span={12} push={2}>
          <APieChart
            dataKey={['value']}
            dataSource={userIncomePayLastDayData}
          />
        </Col>
        <Col span={12}>
          <AStackBar
            xName={'creatTime'}
            barName={['团队','锁仓','推荐']}
            dataKey={['profitsTeam','profitsLockrepo','profitsReferee']}
            dataSource={userIncomePayTrendLastDayData}
          />
          <span className={styles.chartTitle}>趋势</span>
        </Col>
      </Row>

    </Card>;
  }
}

const mapStateToProps = (state)=>{
  const {userIncomePayData,userIncomePayTrendData,userIncomePayLastDayData,userIncomePayTrendLastDayData} = state.asset;
  return {userIncomePayData,userIncomePayTrendData,userIncomePayLastDayData,userIncomePayTrendLastDayData};
};

export default connect(mapStateToProps)(UserIncomePayCard);
