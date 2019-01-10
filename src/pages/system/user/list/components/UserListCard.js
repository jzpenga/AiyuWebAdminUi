import React from 'react';
import styles from '../index.less';
import router from 'umi/router';
import { Card, Row, Col, Table, Modal, Upload, message, Button, Icon } from 'antd';
import config from '../../../../../utils/config';
import * as utils from '../../../../../utils/utils';
import { connect } from 'dva';


class UserListCard extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      selectedRowKeys: [],
    };
  }

  toggle = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  onSelectChange = (selectedRowKeys) => {
    //console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  onSelect = (record, selected, selectedRows) => {
    // console.log(record, selected, selectedRows);
  };

  onSelectAll = (selected, selectedRows, changeRows) => {
    // console.log(selected, selectedRows, changeRows);
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
    title: '消费资产',
    dataIndex: 'floatingFunds',
    key: 'floatingFunds',
  }, {
    title: '锁仓资产',
    dataIndex: 'lockrepoFunds',
    key: 'lockrepoFunds',
  }, {
    title: '推荐人',
    dataIndex: 'refNickName',
    key: 'refNickName',
  }, {
    title: '左节点',
    dataIndex: 'leftNickName',
    key: 'leftNickName',
  }, {
    title: '右节点',
    dataIndex: 'rightNickName',
    key: 'rightNickName',
  }, {
    title: '注册时间',
    dataIndex: 'creatTime',
    key: 'creatTime',
  }, {
    title: '上次登录时间',
    dataIndex: 'lastLoginTime',
    key: 'lastLoginTime',
    render: (text, record, index) => {
      if (text === null) {
        return text;
      }
      return utils.formatDateToHour(text);
      //return utils.formatDate(text);
      //return new Date(text).format("yyyy-MM-dd HH:mm:ss");
      //return new Date(text).pattern("yyyy-MM-dd hh:mm:ss")
    },
  }, {
    title: '操作',
    dataIndex: '',
    key: 'x',
    render: (record) => <div>
      <a onClick={() => this.handleUserEdit(record)}>编辑</a>
      <span style={{ margin: 5 }}> </span>
      <a onClick={(e) => this.handleUserDelete(e, record)}>删除</a>
    </div>,
  }];

  handleUserEdit(record) {
    //console.log('edit', record.id);
    router.push(`/system/user/edit?id=${record.id}`);
  }

  handleUserDelete(e, record) {
    e.stopPropagation();
    this.props.dispatch({
      type: 'userList/deleteUser',
      payload: record.id,
    });
  }

  onPageChange = (page, pageSize) => {
    let props = this.props;
    let { phoneNo, nickName, totalCapitalMin, totalCapitalMax, registryTimeTo, registryTimeFrom } = props.queryParam;
    props.dispatch({
      type: 'userList/queryUserList',
      payload: {
        registryTimeFrom: registryTimeFrom,
        registryTimeTo: registryTimeTo,
        phoneNo: phoneNo,
        nickName: nickName,
        totalCapitalMin: totalCapitalMin,
        totalCapitalMax: totalCapitalMax,
        pageNo: page,
        pageSize: pageSize,
      },
    });
  };

  deleteBatch = () => {
    this.props.dispatch({
      type: 'userList/deleteUserList',
      payload: this.state.selectedRowKeys,
    });
  };

  addUser = () => {
    router.push(`/system/user/edit?id=-1`);
  };

  batchImport = () => {

  };

  fileChange = (info)=>{
    if (info.file.status !== 'uploading') {
      //console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      //console.log(info);
      if (info.file.response !== undefined && info.file.response.responseCode===200){
        message.success(`用户导入成功`);
        this.props.dispatch({ type: 'userList/queryUserList', payload: { pageNo: 1 } })
      } else {
        message.error(`用户导入失败 ${info.file.response !== undefined ? info.file.response.responseMsg:''}`);
      }
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} 文件上传失败`);
    }
  };

  uploadProps = {
    name: 'file',
   // action: '/consumer/importExcelAddConsumer',
    action: `${config.apiPrefix}/consumer/importExcelAddConsumer`,
    headers: {
      authorization: 'authorization-text',
    },
    accept:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel',
    showUploadList:{
      showRemoveIcon:false
    },
    onChange:this.fileChange,
  };

  render() {

    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      onSelect: this.onSelect,
      onSelectAll: this.onSelectAll,
    };
    const { userListData, pageNo, total, batchTran } = this.props;
    return <Card className={styles.commonCard}>
      <Row>
        <div className={styles.titleLabel}>
          <span>数据列表</span>
          <span className={styles.rightTitleOption}>
          <a href={`${config.baseUrl}/admin/manage/consumer/exportXlsConsumers`} download>导出用户数据</a>
          </span>
          <span onClick={this.deleteBatch} className={styles.rightTitleOption}>批量删除</span>
          <span onClick={this.addUser} className={styles.rightTitleOption}>新增</span>
          <span onClick={() => batchTran()} className={styles.rightTitleOption}>批量转出</span>
          <span onClick={this.toggle} className={styles.rightTitleOption}>
            批量导入
          </span>
        </div>
      </Row>
      <Row>
        <Col span={24}>
          <Table
            pagination={{
              showTotal: (total) => <div
                className={styles.paginationTextTip}>共{total}条记录，当前{pageNo}/{Math.ceil(total / config.pageSize)}页，每页{config.pageSize}条记录</div>,
              onChange: this.onPageChange,
              defaultPageSize: config.pageSize,
              total: total,
              current: pageNo,
            }}
            onRow={(record) => {
              return {
                onClick: () => {
                  router.push(`/system/user/edit?id=${record.id}`);
                },       // 点击行
              };
            }}
            rowKey={record => record.id}
            rowSelection={rowSelection}
            showQuickJumper
            columns={this.userListColumns}
            dataSource={userListData}/>
        </Col>
      </Row>

      <Modal
        title={'批量转出'}
        visible={this.state.visible}
        footer={null}
        width={900}
        centered
        closable={false}>
        <Upload {...this.uploadProps}>
          <Button>
            <Icon type="upload"/> 上传文件
          </Button>
        </Upload>
        <div style={{ textAlign: 'center',marginTop:'24px' }}>
          <Button onClick={()=>this.toggle()} type={'primary'} htmlType={'button'}>返回</Button>
        </div>
      </Modal>
    </Card>;
  }
}

const mapStateToProps = (state) => {
  const { queryParam, userListData, pageNo, total } = state.userList;
  return {
    queryParam, userListData, pageNo, total,
  };
};

export default connect(mapStateToProps)(UserListCard);
