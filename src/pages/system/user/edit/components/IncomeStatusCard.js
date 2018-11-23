import React from 'react';
import { Card, Row, Col, Modal, Button } from 'antd';
import styles from '../index.less';
import {connect} from 'dva';
import APieChart from '../../../../../components/Charts/APieChart';
import AStackBar from '../../../../../components/Charts/AStackBar';

class IncomeStatusCard extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  showAssertDetail = ()=> {
    this.setState({
      visible: !this.state.visible,
    });
  };
  handleBack = () => {
    this.setState({
      visible: false,
    });
  };
  render(){
    const {incomeData,incomeTrendData} = this.props;
    return <Card className={styles.commonCard}>
      <Row className={styles.titleLabel}>
        <Col span={24}>
          <div className={styles.titleLabel}>
            <span>收益情况</span>
            <span onClick={this.showAssertDetail} className={styles.rightTitleOption}>查看趋势</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Row>
            <Col span={12}>
              <APieChart
              dataKey={['value']}
              dataSource={incomeData}
              />
            </Col>
            <Col span={12}>
              <div className={styles.assetsTextContainer}>
                <span className={styles.textLabel}>总资产</span>
                <span className={styles.textValue}>15000</span>
                <span className={styles.textLabel}>流动资产收益</span>
                <span className={styles.textValue}>8000</span>
                <span className={styles.textLabel}>锁仓资产收益</span>
                <span className={styles.textValue}>7000</span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Modal
        title={'收益变化趋势'}
        visible={this.state.visible}
        footer={null}
        width={900}
        centered
        closable={false}>
        <AStackBar
          xName={'name'}
          barName={['流动','锁仓']}
          dataKey={['flow','locked']}
          dataSource={incomeTrendData}
        />
        <div style={{ textAlign: 'center' }}>
          <Button onClick={this.handleBack} type={'primary'} htmlType={'button'}>返回</Button>
        </div>
      </Modal>

    </Card>
  }
}

const mapStateToProps = (state)=>{
  const {incomeData,incomeTrendData} = state.userEdit;
  return {incomeData,incomeTrendData}
};

export default connect(mapStateToProps)(IncomeStatusCard);
