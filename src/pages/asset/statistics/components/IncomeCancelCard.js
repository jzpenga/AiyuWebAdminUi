import styles from '../index.less';
import React from 'react';
import { connect } from 'dva';
import { Card, Row, Col } from 'antd';
import ALineChart from '../../../../components/Charts/ALineChart';


class IncomeCancelCard extends React.Component{

  render() {

    const { incomeCancelTrendData, dayIncomeCancelTrendData } =this.props;
    return <Card className={styles.commonCard}>
      <Row className={styles.titleLabel}>
        <Col span={24}>收益销账</Col>
      </Row>
      <Row gutter={6}>
        <Col span={6}>
          <span className={styles.chartTitle}>总销账{incomeCancelTrendData.length>0?incomeCancelTrendData[incomeCancelTrendData.length-1].total:0}</span>
        </Col>
        <Col span={6}>
          <span className={styles.chartTitle}>昨日销账{dayIncomeCancelTrendData.length>0?dayIncomeCancelTrendData[dayIncomeCancelTrendData.length-1].total:0}</span>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <ALineChart
            xName={'creatTime'}
            dataKey={['destoryCapital']}
            dataSource={incomeCancelTrendData}
          />
          <span className={styles.chartTitle}>总销账趋势</span>
        </Col>
        <Col span={12}>
          <ALineChart
            xName={'creatTime'}
            dataKey={['destoryCapital']}
            dataSource={dayIncomeCancelTrendData}
          />
          <span className={styles.chartTitle}>日销账趋势</span>
        </Col>
      </Row>
    </Card>;
  }
}


const mapStateToProps = (state) => {
  const { incomeCancelTrendData, dayIncomeCancelTrendData } = state.asset;
  return { incomeCancelTrendData, dayIncomeCancelTrendData };
};

export default connect(mapStateToProps)(IncomeCancelCard);
