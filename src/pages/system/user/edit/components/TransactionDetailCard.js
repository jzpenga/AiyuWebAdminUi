import React, { Component } from 'react';
import styles from '../index.less';
import { Row, Col, Table, Radio, Card } from 'antd';
import { connect } from 'dva';
import config from '../../../../../utils/config';


const userIncomeTransactionColumns = [
  {
  title: '流水号',
  dataIndex: 'tranceNo',
  key: 'tranceNo',
}, {
  title: '数量',
  dataIndex: 'funds',
  key: 'funds',
}, {
  title: '收入类型',
  dataIndex: 'tranceType',
  key: 'tranceType',
}, {
  title: '来源地址',
  dataIndex: 'transferAddressFrom',
  key: 'transferAddressFrom',
}, {
  title: '时间',
  dataIndex: 'creatTime',
  key: 'creatTime',
}];

const userExpenditureTransactionColumns = [
  {
  title: '流水号',
  dataIndex: 'tranceNo',
  key: 'tranceNo',
}, {
  title: '数量',
  dataIndex: 'funds',
  key: 'funds',
}, {
  title: '支出类型',
  dataIndex: 'tranceType',
  key: 'tranceType',
}, {
  title: '来源地址',
  dataIndex: 'transferAddressFrom',
  key: 'transferAddressFrom',
}, {
  title: '时间',
  dataIndex: 'creatTime',
  key: 'creatTime',
}];


class TransactionDetailCard extends Component {


  constructor(props) {
    super(props);
    this.state = {
      tranceType: 'income',
    };
  }

  handlerTranceTypeChange = (e) => {
    const tranceType = e.target.value;
    this.setState({
      tranceType: tranceType,
    });
  };

  onPageChange = (page, pageSize) => {
    let props = this.props;
    props.dispatch({
      type: 'userList/queryUserList',
      payload: {
        pageNo: page,
        pageSize: pageSize,
        consumerId:this.props.id,
        transType:'income'===this.state.tranceType?'1':'2'
      }
    });
  };

  render() {
    const {  pageNo, total,userTranList } = this.props;
    return <Card className={styles.commonCard}>
      <Row className={styles.titleLabel}>
        <Col span={24}>交易明细</Col>
      </Row>
      <div>
        <Row>
          <Col span={24}>
            <Radio.Group onChange={this.handlerTranceTypeChange} className={styles.commonRadioGroup}
                         defaultValue="income" buttonStyle="solid">
              <Radio.Button value="income">收入</Radio.Button>
              <Radio.Button value="expenditure">支出</Radio.Button>
            </Radio.Group>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            {
              ('income' === this.state.tranceType) ?
                <Table
                  style={{ marginLeft: -1, marginRight: -1 }}
                  pagination={{
                    showTotal: (total) => <div className={styles.paginationTextTip}>共{total}条记录，当前{pageNo}/{Math.ceil(total/config.pageSize)}页，每页{config.pageSize}条记录</div>,
                    onChange: this.onPageChange,
                    defaultPageSize: config.pageSize,
                    total: total,
                    current: pageNo,
                  }}
                  rowKey={record => record.id}
                  showQuickJumper
                  columns={userIncomeTransactionColumns}
                  dataSource={userTranList}/>
                :
                <Table
                  style={{ marginLeft: -1, marginRight: -1 }}
                  pagination={{
                    showTotal: (total) => <div className={styles.paginationTextTip}>共{total}条记录，当前{pageNo}/{Math.ceil(total/config.pageSize)}页，每页{config.pageSize}条记录</div>,
                    onChange: this.onPageChange,
                    defaultPageSize: config.pageSize,
                    total: total,
                    current: pageNo,
                  }}
                  rowKey={record => record.id}
                  showQuickJumper
                  columns={userExpenditureTransactionColumns}
                  dataSource={userTranList}/>
            }
          </Col>
        </Row>
      </div>
    </Card>;

  }
}

const mapStateToProps = (state)=>{
  const {total,pageNo,userTranList} = state.userEdit;
  return {total,pageNo,userTranList}
};

export default connect(mapStateToProps)(TransactionDetailCard);
