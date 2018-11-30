import styles from '../index.less';
import React from 'react';
import {connect} from 'dva';
import {  Card, Row, Col} from 'antd';
import AStackBar from '../../../../components/Charts/AStackBar';
import APieChart from '../../../../components/Charts/APieChart';

class AllAssetCard extends React.Component{

  render(){
    let {assetData,assetTrendData} = this.props;
    let lock=0,flow=0,total=0;
    assetData.forEach((item)=>{
      if (item.name === '锁仓资产') {
        lock = item.value;
        total+=item.value;
      }else if (item.name === '流动资产') {
        flow = item.value;
        total+=item.value;
      }
    });
    return <Card className={styles.commonCard}>
      <Row className={styles.titleLabel}>
        <Col span={24}>总量</Col>
      </Row>
      <Row gutter={12}>
        <Col span={8}>
          <span className={styles.chartTitle}>总资产:{total}</span>
        </Col>
        <Col span={8}>
          <span className={styles.chartTitle}>锁仓资产:{lock}</span>
        </Col>
        <Col span={8}>
          <span className={styles.chartTitle}>流动资产:{flow}</span>
        </Col>
      </Row>
      <Row>
        <Col span={12} push={2}>
          <APieChart
            dataKey={['value']}
            dataSource={assetData}
          />
        </Col>
        <Col span={12}>
          <AStackBar
            xName={'creatTime'}
            barName={['流动','锁仓']}
            dataKey={['floatingFunds','lockrepoFunds']}
            dataSource={assetTrendData}
          />
          <span className={styles.chartTitle}>趋势</span>
        </Col>
      </Row>
    </Card>;
  }
}

const mapStateToProps = (state)=>{
  const {assetData,assetTrendData} = state.asset;
  return {assetData,assetTrendData};
};

export default connect(mapStateToProps)(AllAssetCard);
