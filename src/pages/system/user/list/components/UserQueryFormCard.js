import React from 'react';
import styles from '../index.less';
import {  Card, Row, Col} from 'antd';
import UserQueryForm from './UserQueryForm';


const UserQueryFormCard = ()=>{
  return <Card className={styles.commonQueryCard}>
    <Row className={styles.titleLabel}>
      <Col span={24}>数据查询</Col>
    </Row>
    <Row>
      <Col span={24}>
        <UserQueryForm/>
      </Col>
    </Row>

  </Card>
};

export default UserQueryFormCard;
