import styles from '../index.less';
import React from 'react';
import {  Card, Row, Col } from 'antd';
import {connect} from 'dva';
import ALineChart from '../../../components/Charts/ALineChart';

const UserCard = ({userAllTrendData,userDayTrendData})=> {

  return <Card className={styles.commonCard}>
    <Row className={styles.titleLabel}>
      <Col span={24}>用户总览</Col>
    </Row>
    <Row>
      <Col span={12}>
        <ALineChart
          xName={'createdTime'}
          dataKey={['count']}
          dataSource={userAllTrendData}
        />
        <span className={styles.chartTitle}>总量趋势</span>
      </Col>
      <Col span={12}>
        <ALineChart
          xName={'createdTime'}
          dataKey={['count']}
          dataSource={userDayTrendData}
        />
        <span className={styles.chartTitle}>每日分量</span>
      </Col>
    </Row>
  </Card>
};

function mapStateToProps(state){
  const {userAllTrendData,userDayTrendData} = state.home;
  return {
    userAllTrendData,
    userDayTrendData
  };
}
export default connect(mapStateToProps)(UserCard);
