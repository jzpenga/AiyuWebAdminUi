import React, { Component } from 'react';
import styles from '../index.less';
import {  Row, Col,  Table,Radio } from 'antd';


const userIncomeTransactionColumns = [{
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

const userExpenditureTransactionColumns = [{
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

const userTransactionData = [{
  'id':'1',
  'tranceNo':'123',
  'funds':'30000',
  'tranceType':'转账',
  'transferAddressFrom':'address',
  'creatTime':'2018-11-23'
}];
class TransactionDetailTable extends Component{


  constructor(props){
    super(props);
    this.state = {
      tranceType:'income'
    }
  }



  handlerTranceTypeChange = (e) => {
    const tranceType = e.target.value;
    this.setState({
      tranceType:tranceType
    });
  };

  render(){
    return <div>
      <Row>
        <Col span={24}>
          <Radio.Group onChange={this.handlerTranceTypeChange} className={styles.commonRadioGroup} defaultValue="income" buttonStyle="solid">
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
                style={{marginLeft:-1,marginRight:-1}}
                pagination={{
                  showTotal: (total) => <div className={styles.paginationTextTip}>共{total}条记录，当前0/0页，每页10条记录</div>,
                }}
                bordered
                rowKey={record => record.id}
                showQuickJumper
                columns={userIncomeTransactionColumns}
                dataSource={userTransactionData}/>
              :
              <Table
                style={{marginLeft:-1,marginRight:-1}}
                pagination={{
                  showTotal: (total) => <div className={styles.paginationTextTip}>共{total}条记录，当前0/0页，每页10条记录</div>,
                }}
                bordered
                rowKey={record => record.id}
                showQuickJumper
                columns={userExpenditureTransactionColumns}
                dataSource={userTransactionData}/>
          }
        </Col>
      </Row>
    </div>
  }
}

export default TransactionDetailTable;
