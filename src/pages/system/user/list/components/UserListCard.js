import React from 'react';
import styles from '../index.less';
import router from 'umi/router';
import {  Card, Row, Col, Table } from 'antd';
const userListData = [{
  'id':'1',
  'nickName': '刘德华',
  'phoneNo': '18317907145',
  'totalFunds': '10000',
  'floatingFunds': '2000',
  'lockRepoFunds': '8000',
  'creatTime': '2018-11-09',
  'lastLoginTime': '20180-11-12 09:12',
},{
  'id':'2',
  'nickName': '刘德华',
  'phoneNo': '18317907146',
  'totalFunds': '10000',
  'floatingFunds': '2000',
  'lockRepoFunds': '8000',
  'creatTime': '2018-11-09',
  'lastLoginTime': '20180-11-12 09:12',
}];

class UserListCard extends React.Component{


  state = {
    selectedRowKeys: [], // Check here to configure the default column
  };

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  onSelect = (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  };

  onSelectAll = (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  };

  userListColumns = [{
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
  }, {
    title: '注册时间',
    dataIndex: 'creatTime',
    key: 'creatTime',
  }, {
    title: '上次登录时间',
    dataIndex: 'lastLoginTime',
    key: 'lastLoginTime',
  }, {
    title: '操作',
    dataIndex: '',
    key: 'x',
    render: (record) => <div>
      <a onClick={() => this.handleUserEdit(record)}>编辑</a>
      <span style={{margin:5}}> </span>
      <a onClick={() => this.handleUserDelete(record)}>删除</a>
    </div>,
  }];

  handleUserEdit(record){
    console.log('edit',record.id);
    router.push(`/system/user/edit?id=${record.id}`);
  }

  handleUserDelete(record){
    console.log('delete',record.id)
  }

  render(){

    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      onSelect: this.onSelect,
      onSelectAll: this.onSelectAll,
    };


    return <Card className={styles.commonCard}>
      <Row className={styles.titleLabel}>
        <Col span={24}>数据列表</Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table
            pagination={{
              showTotal: (total) => <div className={styles.paginationTextTip}>共{total}条记录，当前0/0页，每页10条记录</div>,
            }}
            rowKey={record => record.id}
            rowSelection={rowSelection}
            showQuickJumper
            columns={this.userListColumns}
            dataSource={userListData}/>
        </Col>
      </Row>
    </Card>
  }
}

export default UserListCard;
