import styles from '../index.less';
import React from 'react';
import {connect} from 'dva';
import {  Card, Row, Col, Table } from 'antd';



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
const UserRankingCard = ({userListData})=>{
  return <Card className={styles.commonCard}>
    <Row className={styles.titleLabel}>
      <Col span={24}>排行版</Col>
    </Row>
    <Row>
      <Col span={24}>
        <Table
          rowKey={record => record.id}
          pagination={false}
          showQuickJumper
          columns={userListColumns}
          dataSource={userListData}/>
      </Col>
    </Row>
  </Card>
};
function mapStateToProps(state){
  const {userListData} = state.home;
  return {
    userListData
  };
}
export default connect(mapStateToProps)(UserRankingCard);
