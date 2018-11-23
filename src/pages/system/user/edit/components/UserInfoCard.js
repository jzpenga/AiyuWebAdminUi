import React from 'react';
import {  Card, Row, Col } from 'antd';
import UserInfoForm from './UserInfoForm';
import styles from '../index.less';


const UserInfoCard = () => {
  return <Card className={styles.commonQueryCard}>
    <Row className={styles.titleLabel}>
      <Col span={24}>账户信息</Col>
    </Row>
    <Row >
      <Col span={24}> <UserInfoForm/></Col>
    </Row>

  </Card>
};

export default UserInfoCard;
