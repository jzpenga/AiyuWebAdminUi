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

let oldPassWord = '';
class UserEdit extends Component {

  handleFormChange = (changedFields) => {
    if (this.props.location.query.id>=0 ) {
      this.setState(({ fields }) => ({
        fields: { ...fields, ...changedFields },
      }));
    }else {
      this.setState(({ fields }) => ({
        emptyFields: { ...fields, ...changedFields },
      }));
    }
  };

  constructor(props){
    super(props);
    oldPassWord = this.props.userInfo.passWord;

    this.state = {
      fields: {
        phoneNo: {
          value:this.props.userInfo.phoneNo
        },
        passWord: {
          value:this.props.userInfo.passWord
        },
        email: {
          value:this.props.userInfo.email
        },
        nickName: {
          value:this.props.userInfo.nickName
        },
        creatTime: {
          value:this.props.userInfo.creatTime
        },
        lastLoginTime: {
          value:this.props.userInfo.lastLoginTime
        },
      },
      emptyFields: {
        phoneNo: {
          value:''
        },
        passWord: {
          value:''
        },
        email: {
          value:''
        },
        nickName: {
          value:''
        },
        creatTime: {
          value:''
        },
        lastLoginTime: {
          value:''
        },
      },
    };
    this.userInfoForm = React.createRef();
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
      fields: {
        phoneNo: {
          value:nextProps.userInfo.phoneNo
        },
        passWord: {
          value:nextProps.userInfo.passWord
        },
        email: {
          value:nextProps.userInfo.email
        },
        nickName: {
          value:nextProps.userInfo.nickName
        },
        creatTime: {
          value:nextProps.userInfo.creatTime
        },
        lastLoginTime: {
          value:nextProps.userInfo.lastLoginTime
        },
      },
    });
  }

  saveUser = ()=>{
    const { validateFields } = this.userInfoForm.current.getForm();
    validateFields((errors, values) => {
      const id = this.props.location.query.id>=0?this.props.location.query.id:'';
      const {passWord} = values;
      if (oldPassWord !== passWord){
        values = {...values};
      } else {
        values ={...values,passWord:''};
      }
      this.props.dispatch({
        type:'userEdit/saveUserInfo',
        payload:{...values,id:id}
      });
    });
  };


  render() {
    const id = this.props.location.query.id;
    const fields = id>0?this.state.fields:this.state.emptyFields;
    const { teamOneData, teamTwoData } = this.props;
    return (
      <div>
        <div className={styles.cardOuterMargin}>
          <Row>
            <Col span={24}>
              <UserInfoForm  {...fields} onChange={this.handleFormChange} userInfoProps ref={this.userInfoForm}/>
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
                    <TransactionDetailCard id={id}/>
                  </Col>
                </Row>
              </div>
              <div className={styles.cardOuterMargin}>
                <Row gutter={16}>
                  <Col span={12}>
                    <TeamCard
                      detailTitle={'团队一详情'}
                      cardTitle={'团队一总览'}
                      teamData={teamOneData}
                    />
                  </Col>
                  <Col span={12}>
                    <TeamCard
                      detailTitle={'团队二详情'}
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
  const { teamOneData, teamTwoData ,userInfo} = state.userEdit;
  return { teamOneData, teamTwoData,userInfo };
};

export default connect(mapStateToProps)(UserEdit);
