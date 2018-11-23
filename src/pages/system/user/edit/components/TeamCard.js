import React from 'react';
import styles from '../index.less';
import {  Card, Row, Col } from 'antd';

import AComposedChart from '../../../../../components/Charts/AComposedChart';

const TeamCard = ({teamData,cardTitle})=>{
  return <Card className={styles.commonCard}>
    <Row className={styles.titleLabel}>
      <Col span={24}>{cardTitle}</Col>
    </Row>
    <Row>
      <Col span={24}>
        <Row>
          <Col span={16}>
            <AComposedChart
             xName={'creatTime'}
            dataSource={teamData}
            dataKey={['totalFunds','totalMember']}
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
  </Card>
};

export default TeamCard;
