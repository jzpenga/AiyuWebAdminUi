import styles from '../index.less';
import React from 'react';
import { connect } from 'dva';
import { Card, Row, Col } from 'antd';
import ALineChart from '../../../../components/Charts/ALineChart';

class ChargeCard extends React.Component {
  render() {
    const { allChargeTrendData, dayChargeTrendData } = this.props;
    return <Card className={styles.commonCard}>
      <Row className={styles.titleLabel}>
        <Col span={24}>手续费收入</Col>
      </Row>
      <Row gutter={6}>
        <Col span={6}>
          <span className={styles.chartTitle}>总收入{` 1500000  `}</span>
        </Col>
        <Col span={6}>
          <span className={styles.chartTitle}>昨日收入{` 800000  `}</span>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <ALineChart
            xName={'creatTime'}
            dataKey={['count']}
            dataSource={allChargeTrendData}
          />
          <span className={styles.chartTitle}>总收入趋势</span>
        </Col>
        <Col span={12}>
          <ALineChart
            xName={'creatTime'}
            dataKey={['count']}
            dataSource={dayChargeTrendData}
          />
          <span className={styles.chartTitle}>日增收入趋势</span>
        </Col>
      </Row>
    </Card>;
  }
}

const mapStateToProps = (state) => {
  const { allChargeTrendData, dayChargeTrendData } = state.asset;
  return { allChargeTrendData, dayChargeTrendData };
};

export default connect(mapStateToProps)(ChargeCard);
