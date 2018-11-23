import React from 'react';
import styles from '../index.less';
import {  Card, Row, Col } from 'antd';
import TransactionDetailTable from './TransactionDetailTable';

const TransactionDetailCard = ()=>{
  return <Card className={styles.commonCard}>
    <Row className={styles.titleLabel}>
      <Col span={24}>交易明细</Col>
    </Row>
    <TransactionDetailTable/>
  </Card>
};

export default TransactionDetailCard;
