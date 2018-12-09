import React, { Component } from 'react';
import styles from '../index.less';
import { Row, Col, Table, Radio, Card } from 'antd';
import { connect } from 'dva';
import config from '../../../../../utils/config';

const sourceTypeMap = new Map([
  ['1', '交易转入'],
  ['2', '锁仓收益'],
  ['3', '分享算力'],
  ['4', '推荐收益'],
  ['5', '锁仓资产释放'],
  ['6', '交易转出'],
  ['7', '复投锁仓'],
  ['8', '锁仓资金销毁'],
  ['9', '交易手续费'],
]);
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
    dataIndex: 'sourceType',
    key: 'sourceType',
    render: (text, row, index) => {
      return sourceTypeMap.get(text);
    },
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
    dataIndex: 'sourceType',
    key: 'sourceType',
    render: (text, row, index) => {
      return sourceTypeMap.get(text);
    },
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
      tranceType: '1',
    };
  }

  handlerTranceTypeChange = (e) => {
    const tranceType = e.target.value;
    //console.log(tranceType);
    this.props.dispatch({
      type: 'userEdit/queryUserTranList',
      payload: {
        pageNo: 1,
        pageSize: 10,
        consumerId: this.props.id,
        transType: '2' === tranceType ? '2' : '1',
      },
    });
    this.setState({
      tranceType: tranceType,
    });
  };

  onPageChange = (page, pageSize) => {
    let props = this.props;
    props.dispatch({
      type: 'userEdit/queryUserTranList',
      payload: {
        pageNo: page,
        pageSize: pageSize,
        consumerId: this.props.id,
        transType: '2' === this.state.tranceType ? '2' : '1',
      },
    });
  };

  render() {
    const { pageNo, total, userTranList } = this.props;
    return <Card className={styles.commonCard}>
      <Row className={styles.titleLabel}>
        <Col span={24}>交易明细</Col>
      </Row>
      <div>
        <Row>
          <Col span={24}>
            <Radio.Group onChange={this.handlerTranceTypeChange} className={styles.commonRadioGroup}
                         defaultValue="1" buttonStyle="solid">
              <Radio.Button value="1">收入</Radio.Button>
              <Radio.Button value="2">支出</Radio.Button>
            </Radio.Group>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            {
              ('2' === this.state.tranceType) ?
                <Table
                  style={{ marginLeft: -1, marginRight: -1 }}
                  pagination={{
                    showTotal: (total) => <div
                      className={styles.paginationTextTip}>共{total}条记录，当前{pageNo}/{Math.ceil(total / config.pageSize)}页，每页{config.pageSize}条记录</div>,
                    onChange: this.onPageChange,
                    defaultPageSize: config.pageSize,
                    total: total,
                    current: pageNo,
                  }}
                  bordered
                  rowKey={record => record.id}
                  showQuickJumper
                  columns={userIncomeTransactionColumns}
                  dataSource={userTranList}/>
                :
                <Table
                  bordered
                  style={{ marginLeft: -1, marginRight: -1 }}
                  pagination={{
                    showTotal: (total) => <div
                      className={styles.paginationTextTip}>共{total}条记录，当前{pageNo}/{Math.ceil(total / config.pageSize)}页，每页{config.pageSize}条记录</div>,
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

const mapStateToProps = (state) => {
  const { total, pageNo, userTranList } = state.userEdit;
  return { total, pageNo, userTranList };
};

export default connect(mapStateToProps)(TransactionDetailCard);
