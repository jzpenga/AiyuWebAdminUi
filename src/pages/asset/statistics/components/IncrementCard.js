import styles from '../index.less';
import React from 'react';
import {connect} from 'dva';
import {  Card, Row, Col} from 'antd';
import AStackBar from '../../../../components/Charts/AStackBar';
import APieChart from '../../../../components/Charts/APieChart';


class IncrementCard extends React.Component{

  render(){
    const {incrementData,incrementTrendData} = this.props;
    let lock=0,flow=0,total=0;
    incrementData.forEach((item)=>{
      if (item.name === '锁仓资产') {
        lock = item.value;
        total+=item.value;
      }else if (item.name === '消费资产') {
        flow = item.value;
        total+=item.value;
      }
    });
    return <Card className={styles.commonCard}>
      <Row className={styles.titleLabel}>
        <Col span={24}>昨日增量</Col>
      </Row>
      <Row gutter={12}>
        <Col span={8}>
          <span className={styles.chartTitle}>总增量{parseFloat(total.toPrecision(12))}</span>
        </Col>
        <Col span={8}>
          <span className={styles.chartTitle}>消费增量{flow}</span>
        </Col>
        <Col span={8}>
          <span className={styles.chartTitle}>锁仓增量{lock}</span>
        </Col>
      </Row>
      <Row>
        <Col span={12} push={2}>
          <APieChart
            dataKey={['value']}
            dataSource={incrementData}
          />
        </Col>
        <Col span={12}>
          <AStackBar
            xName={'creatTime'}
            barName={['消费','锁仓']}
            dataKey={['floatingFunds','lockrepoFunds']}
            dataSource={incrementTrendData}
          />
          <span className={styles.chartTitle}>趋势</span>
        </Col>
      </Row>
    </Card>;
  }
}

const mapStateToProps = (state)=>{
  const {incrementData,incrementTrendData} = state.asset;
  return {incrementData,incrementTrendData};
};

export default connect(mapStateToProps)(IncrementCard);
