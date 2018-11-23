import styles from '../index.less';
import React from 'react';
import {connect} from 'dva';
import {  Card, Row, Col} from 'antd';
import AStackBar from '../../../../components/Charts/AStackBar';
import APieChart from '../../../../components/Charts/APieChart';


class UserIncomePayCard extends React.Component{

  render(){
    const {userIncomePayData,userIncomePayTrendData,userIncomePayLastDayData,userIncomePayTrendLastDayData} = this.props;
    return <Card className={styles.commonCard}>
      <Row className={styles.titleLabel}>
        <Col span={24}>用户收益支出</Col>
      </Row>
      <Row gutter={12}>
        <Col span={6}>
          <span className={styles.chartTitle}>支出总量{` 1500000  `}</span>
        </Col>
        <Col span={6}>
          <span className={styles.chartTitle}>锁仓收益{` 800000  `}</span>
        </Col>
        <Col span={6}>
          <span className={styles.chartTitle}>团队收益{` 700000`}</span>
        </Col>
        <Col span={6}>
          <span className={styles.chartTitle}>推荐收益{` 700000`}</span>
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
            xName={'createdTime'}
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
          <span className={styles.chartTitle}>昨日支出总量{` 1500000  `}</span>
        </Col>
        <Col span={6}>
          <span className={styles.chartTitle}>昨日锁仓收益{` 800000  `}</span>
        </Col>
        <Col span={6}>
          <span className={styles.chartTitle}>昨日团队收益{` 700000`}</span>
        </Col>
        <Col span={6}>
          <span className={styles.chartTitle}>昨日推荐收益{` 700000`}</span>
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
            xName={'createdTime'}
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
