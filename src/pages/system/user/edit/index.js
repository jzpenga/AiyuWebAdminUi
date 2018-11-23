import React, { Component } from 'react';
import styles from './index.less';
import { Button, Row, Col } from 'antd';
import {connect} from 'dva';
import UserInfoCard from './components/UserInfoCard';
import AssetStatusCard from './components/AssetStatusCard';
import IncomeStatusCard from './components/IncomeStatusCard';
import TransactionDetailCard from './components/TransactionDetailCard';
import TeamCard from './components/TeamCard';


class UserEdit extends Component {

  render() {
    console.log(this.props.location.query.id);
    const {teamOneData,teamTwoData} = this.props;
    return (
      <div>
        <div className={styles.cardOuterMargin}>
          <Row>
            <Col span={24}>
              <UserInfoCard/>
            </Col>
          </Row>

        </div>

        <div className={styles.cardOuterMargin}>
          <Row gutter={16}>
            <Col span={12}>
              <AssetStatusCard/>
            </Col>
            <Col span={12}>
              <IncomeStatusCard/>
            </Col>
          </Row>

        </div>

        <div className={styles.cardOuterMargin}>
          <Row>
            <Col span={24}>
              <TransactionDetailCard/>
            </Col>
          </Row>
        </div>


        <div className={styles.cardOuterMargin}>
          <Row gutter={16}>
            <Col span={12}>
              <TeamCard
                cardTitle={'团队一总览'}
                teamData={teamOneData}
              />
            </Col>
            <Col span={12}>
              <TeamCard
                cardTitle={'团队二总览'}
                teamData={teamTwoData}
              />
            </Col>
          </Row>
        </div>


        <div className={styles.cardOuterMargin}>
          <Row>
            <Col span={24}>
              <div className={styles.bottomBtnContainer}>
                <Button className={styles.btnBack}>返回</Button>
                <Button type="primary">保存</Button>
                <Button className={styles.btnDelete}>删除</Button>
              </div>
            </Col>
          </Row>
        </div>

      </div>
    );
  }

}
const mapStateToProps = (state) => {
  const {teamOneData,teamTwoData} = state.userEdit;
  return {teamOneData,teamTwoData}
};

export default connect(mapStateToProps)(UserEdit);
