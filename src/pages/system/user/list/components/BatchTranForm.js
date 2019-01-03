import React from 'react';
import { Col, Form, Input, Row, Radio, Select, Button, List, Icon } from 'antd';
import UserRemoteSelect from './UserRemoteSelect';
import { connect } from 'dva';

const FormItem = Form.Item;
const { Option } = Select;


const data = [
  '13677665544',
  '13677665545',
  '13677665546',
  '13677665548',
  '13677665549',
  '13677665541',
  '13677665524',
  '13677665534',
  '13677665514',
  '13677665554',
  '13677365544',
  '13677625544',
  '13672665544',
  '13677165544',
  '13617665544',
  '13673665544',
  '17677665544',
  '13670665544',
  '13623665544',
  '13671265544',
  '13643265544',
  '13677645544',
  '13677612544',
  '13609766544',
  '13677623544',
];

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
      inType: 'left',
      outerPhone: '',
    };
  }

  onOuterTypeChange = (e) => {
  /*  this.props.dispatch({
      type: 'userList/updateState',
      payload: { balance: 0 },
    });*/
    this.setState({
      outerType: e.target.value,
    });
  };


  onOuterPhoneChange = (value) => {
    this.props.dispatch({
      type: 'userList/queryBalance',
      payload: { phoneNo: value.key },
    });
  };


  removePhone = (e, item) => {
    console.log(item);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { outerType } = this.state;
    console.log(this.props);
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
            <Radio.Group>
              <Radio value={'left'}>左团队</Radio>
              <Radio value={'right'}>右团队</Radio>
              <Radio value={'all'}>全团队</Radio>
            </Radio.Group>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <FormItem {...this.formItemLayout} label={`转出人`}>

            {/*<Select
                onChange={this.onOuterPhoneChange}
                disabled={outerType===0}
                placeholder="输入手机号">
                {
                  data.map((phone)=>{
                    return <Option key={phone} value={phone}>{phone}</Option>
                  })
                }
              </Select>*/}

            <UserRemoteSelect onSelect={this.onOuterPhoneChange} disabled={outerType === 0}/>
          </FormItem>
        </Col>
        <Col span={12}>
          <Row>
            <Col span={17}>
              <FormItem {...this.otherFormItemLayout} label={`其他`}>
                {getFieldDecorator(`d`)(
                  <UserRemoteSelect onSelect={() => ''} disabled={false}/>,
                )}
              </FormItem>
            </Col>
            <Col span={4}>
              <Button style={{ marginTop: 4 }} type={'primary'} htmlType={'button'}>确定</Button>
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
          <FormItem {...this.formItemLayout} label={`转出账号展示`}>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Row>
            <Col span={24}>
              <FormItem {...this.formItemLayout} label={`单笔额度`}>
                {getFieldDecorator(`e`)(
                  <Input/>,
                )}
              </FormItem>

            </Col>
            <Col span={24}>
              <FormItem {...this.formItemLayout} label={`总额`}>
                单笔额度 x 批量人数 x ( 1 + 手续费比率 )
              </FormItem>
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          {/*<List
            style={{maxHeight:'200px',overflow:'auto'}}
            header={null}
            footer={null}
            size={'small'}
            bordered
            dataSource={data}
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />*/}
          <List
            style={{ maxHeight: '200px', overflow: 'auto' }}
            grid={{
              gutter: 8, xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 2,
            }}
            bordered
            split={true}
            dataSource={data}
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
    </Form>;
  }
}

const mapStateToProps = (state) => {
  const { balance } = state.userList;
  return { balance };
};

export default connect(mapStateToProps)(Form.create()(BatchTranForm));
