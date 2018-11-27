import React, { Component } from 'react';
import styles from './index.less';
import { Button, Row, Col } from 'antd';
import router from 'umi/router';
import { connect } from 'dva';
import AssetStatusCard from './components/AssetStatusCard';
import IncomeStatusCard from './components/IncomeStatusCard';
import TransactionDetailCard from './components/TransactionDetailCard';
import UserInfoForm from './components/UserInfoFormCard';
import TeamCard from './components/TeamCard';


class UserEdit extends Component {


  constructor(props){
    super(props);
    this.userInfoForm = React.createRef();
  }

  saveUser = ()=>{
    const { validateFields } = this.userInfoForm.current.getForm();
    validateFields((errors, values) => {
      this.props.dispatch({
        type:'userEdit/saveUserInfo',
        payload:values
      });
    });
  };

  userInfoProps = {
    dispatch:this.props.dispatch,
  };

  render() {
    const id = this.props.location.query.id;
    const { teamOneData, teamTwoData } = this.props;
    return (
      <div>
        <div className={styles.cardOuterMargin}>
          <Row>
            <Col span={24}>
              <UserInfoForm userInfoProps ref={this.userInfoForm}/>
            </Col>
          </Row>

        </div>

        {
          id >= 0 ?
            <div>
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
            </div> : ''
        }

        <div className={styles.cardOuterMargin}>
          <Row>
            <Col span={24}>
              <div className={styles.bottomBtnContainer}>
                <Button onClick={()=>router.goBack()} className={styles.btnBack}>返回</Button>
                <Button  onClick={this.saveUser}  type="primary">保存</Button>
                {
                  id >= 0 ?
                    <Button className={styles.btnDelete}>删除</Button>
                    :''
                }
              </div>
            </Col>
          </Row>
        </div>

      </div>
    );
  }

}

const mapStateToProps = (state) => {
  const { teamOneData, teamTwoData } = state.userEdit;
  return { teamOneData, teamTwoData };
};

export default connect(mapStateToProps)(UserEdit);
