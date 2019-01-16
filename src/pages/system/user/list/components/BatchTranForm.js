import React from 'react';
import { Col, Form, Input, Row, Radio, Select, Button, List, Icon,message } from 'antd';
import UserRemoteSelect from './UserRemoteSelect';
import { connect } from 'dva';
import axios from 'axios';
import config from '../../../../../utils/config';
import * as utils from '../../../../../utils/utils';


const FormItem = Form.Item;
const { Option } = Select;

class BatchTranForm extends React.Component {
  formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };
  otherFormItemLayout = { labelCol: { span: 9 }, wrapperCol: { span: 12 } };

  constructor(props) {
    super(props);
    this.state = {
      outerType: 0,
      inType: '',
      outerPhone: '',
      members:[],
      otherMember:'',
      transferAmt:0,
      addressFlag:1
    };
  }

  onOuterTypeChange = (e) => {
  /*  this.props.dispatch({
      type: 'userList/updateState',
      payload: { balance: 0 },
    });*/
    this.setState({
      outerType: e.target.value,
      members:[],
    });
  };


  onOuterPhoneChange = (value) => {
    this.setState({
      outerPhone:value.key,
      inType: '',
      otherMember:'',
      members:[],
    });
    this.props.dispatch({
      type: 'userList/queryBalance',
      payload: { phoneNo: value.key },
    });
  };

  onInMemberChange = (e) => {
    this.setState({
      members:[],
      inType:e.target.value
    });
    axios.get(`${config.apiPrefix}/consumer/transferTeamInfo?transferPhone=${this.state.outerPhone}&witchTeam=${e.target.value}`)
      .then((body) => {
        //console.log('onInMemberChange',body);
        if (body.status!==200 || body.data.responseCode!==200) {
          return ;
        }
        this.setState({
          members:utils.arrayCheck(body.data.data)
        })
      });
  };

  onTransferAmtChange = (e) =>{
    this.setState({
      transferAmt:e.target.value
    })
  };

  removePhone = (e, item) => {
    const newState = JSON.parse(JSON.stringify(this.state));
    const index = newState.members.indexOf(item);
    newState.members.splice(index,1);
    this.setState({...newState})
  };

  addOtherMember = ()=>{
    const otherMember = this.state.otherMember;
    if (otherMember === ''){
      return ;
    }
    const index = this.state.members.indexOf(otherMember);
    if (index>=0){
      message.error('号码重复了');
      return ;
    }
    const newState = JSON.parse(JSON.stringify(this.state));
    newState.members.unshift(otherMember);
    newState.otherMember = '';
    this.setState({...newState})
  };



  handleBack = () => {
    this.props.toggle();
  };

  onSubmit = ()=>{
    this.props.dispatch({
      type:'userList/batchTransfer',
      payload:{ transferor:this.state.outerType,
        balance:this.props.balance,
        transferorPhone:this.state.outerPhone,
        transferAmt:this.state.transferAmt,
        addressFlag:this.state.addressFlag,
        transfereePhones:this.state.members}
    });
  };

  addressFlagChange = (e)=> {
    this.setState({
      addressFlag: e.target.value,
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { charge } = this.props;
    const { outerType,inType, addressFlag} = this.state;
    return <Form>
      <Row>
        <Col span={12}>
          <FormItem {...this.formItemLayout} label={`转出方`}>
            <Radio.Group onChange={this.onOuterTypeChange} value={outerType}>
              <Radio value={0}>系统</Radio>
              <Radio value={1}>个人</Radio>
            </Radio.Group>
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem {...this.formItemLayout} label={`转入方`}>
            <Radio.Group onChange={this.onInMemberChange} value={inType} disabled={outerType === 0}>
              <Radio value={'0'}>左团队</Radio>
              <Radio value={'1'}>右团队</Radio>
              <Radio value={'2'}>全团队</Radio>
            </Radio.Group>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <FormItem {...this.formItemLayout} label={`转出人`}>
            <UserRemoteSelect onSelect={this.onOuterPhoneChange} disabled={outerType === 0}/>
          </FormItem>
        </Col>
        <Col span={12}>
          <Row>
            <Col span={17}>
              <FormItem {...this.otherFormItemLayout} label={`其他`}>
                {getFieldDecorator(`d`)(
                  <UserRemoteSelect  onSelect={(value) => this.setState({otherMember:value.key})} disabled={false}/>,
                )}
              </FormItem>
            </Col>
            <Col span={4}>
              <Button onClick={this.addOtherMember} style={{ marginTop: 4 }} type={'primary'} htmlType={'button'}>添加</Button>
            </Col>
          </Row>

        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <FormItem {...this.formItemLayout} label={`余额`}>
            {outerType === 0 ? '' : this.props.balance}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem {...this.formItemLayout} label={`转入账户`}>
            <Radio.Group onChange={this.addressFlagChange} value={addressFlag}>
              <Radio value={1}>锁仓</Radio>
              <Radio value={0}>消费</Radio>
            </Radio.Group>
          </FormItem>

        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Row>
            <Col span={24}>
              <FormItem {...this.formItemLayout} label={`单笔额度`}>
                {getFieldDecorator(`e`)(
                  <Input onChange={this.onTransferAmtChange}/>,
                )}
              </FormItem>

            </Col>
            <Col span={24}>
              <FormItem {...this.formItemLayout} label={`总额`}>
                {this.state.outerType===1?this.state.transferAmt*this.state.members.length*(1+charge):0}
              </FormItem>
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <FormItem {...this.formItemLayout} label={`转出账号展示`}>
          </FormItem>
          <List
            style={{ height: '200px', overflow: 'auto' }}
            grid={{
              gutter: 8, xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 2,
            }}
            bordered
            split={true}
            dataSource={this.state.members}
            renderItem={item => (
              <List.Item>
                {item}
                <Icon onClick={(e) => this.removePhone(e, item)} style={{ marginLeft: '10px', color: '#FF1E1E' }}
                      type="close-circle"/>
              </List.Item>
            )}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div style={{ textAlign: 'center',marginTop:'24px' }}>
            <Button onClick={this.handleBack} type={'primary'} htmlType={'button'}>返回</Button>
            <span style={{margin:'0 10px'}}/>
            <Button onClick={this.onSubmit} type={'primary'} htmlType={'button'}>确认</Button>
          </div>
        </Col>
      </Row>
    </Form>;
  }


}

const mapStateToProps = (state) => {
  const { balance,charge } = state.userList;
  return { balance,charge };
};

export default connect(mapStateToProps)(Form.create()(BatchTranForm));
