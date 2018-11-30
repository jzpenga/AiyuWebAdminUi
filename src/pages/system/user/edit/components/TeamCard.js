import React from 'react';
import styles from '../index.less';
import { Card, Row, Col, Button, Modal, Table } from 'antd';

import AComposedChart from '../../../../../components/Charts/AComposedChart';

const userListColumns = [{
  title: '昵称',
  dataIndex: 'nickName',
  key: 'nickName',
}, {
  title: '手机号',
  dataIndex: 'phoneNo',
  key: 'phoneNo',
}, {
  title: '资产总量',
  dataIndex: 'totalFunds',
  key: 'totalFunds',
}, {
  title: '流动资产',
  dataIndex: 'floatingFunds',
  key: 'floatingFunds',
}, {
  title: '锁仓资产',
  dataIndex: 'lockRepoFunds',
  key: 'lockRepoFunds',
}];

class TeamCard extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      visible: false,
    };
  }

  showTeamDetail=()=>{
    this.setState({
      visible: !this.state.visible,
    });
  };
  handleBack = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    const {cardTitle,teamData,detailTitle,teamType,userListData} = this.props;
    return <Card className={styles.commonCard}>
      <Row>
        <div className={styles.titleLabel}>
          <span>{cardTitle}</span>
          <span onClick={this.showTeamDetail} className={styles.rightTitleOption}>查看明细</span>
        </div>
      </Row>
      <Row>
        <Col span={24}>
          <Row>
            <Col span={16}>
              <AComposedChart
                xName={'creatTime'}
                dataSource={teamData}
                dataKey={[teamType===1?'leftFunds':'rightFunds',teamType===1?'leftTotalMember':'rightTotalMember']}
                barLineName={['资产规模','团队规模']}
              />
            </Col>
            <Col span={8}>
              <div className={styles.assetsTextContainer}>
                <span className={styles.textLabel}>资产规模</span>
                <span className={styles.textValue}>15000000</span>
                <span className={styles.textLabel}>团队规模</span>
                <span className={styles.textValue}>8000</span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Modal
        title={detailTitle}
        visible={this.state.visible}
        footer={null}
        width={900}
        centered
        closable={false}>
        <AComposedChart
          xName={'creatTime'}
          dataSource={teamData}
          dataKey={[teamType===1?'leftFunds':'rightFunds',teamType===1?'leftTotalMember':'rightTotalMember']}
          barLineName={['资产规模','团队规模']}
        />
        <Table
          style={{margin:'10px 0'}}
          rowKey={record => record.id}
          pagination={false}
          showQuickJumper
          bordered
          columns={userListColumns}
          dataSource={userListData}/>
        <div style={{ textAlign: 'center' }}>
          <Button onClick={this.handleBack} type={'primary'} htmlType={'button'}>返回</Button>
        </div>
      </Modal>
    </Card>
  }

}


export default TeamCard;
