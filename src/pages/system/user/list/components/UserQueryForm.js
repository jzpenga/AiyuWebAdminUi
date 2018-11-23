import React from 'react';
import {  Button,Input,Form,Row,Col,DatePicker } from 'antd';
import styles from '../index.less';

const FormItem = Form.Item;
const { RangePicker } = DatePicker;

class UserQueryForm extends React.Component{
  formItemLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 18 },
  };

  render(){
    const { getFieldDecorator } = this.props.form;

    return  <Form  className={styles.formPadding}>
      <Row gutter={24}>
        <Col span={8}>
          <FormItem {...this.formItemLayout} label={`手机号`}>
            {getFieldDecorator(`phoneNo`, {
              rules: [{
                required: true,
                message: 'Input something!',
              }],
            })(
              <Input  placeholder="placeholder" />
            )}
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem {...this.formItemLayout} label={`昵称`}>
            {getFieldDecorator(`nickName`, {
              rules: [{
                required: true,
                message: 'Input something!',
              }],
            })(
              <Input  placeholder="placeholder" />
            )}
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem {...this.formItemLayout} label={`资产总量`}>
            <Row gutter={8}>
              <Col span={11}>
                {getFieldDecorator('assetLow', {
                  rules: [{ required: true, message: 'Please input the captcha you got!' }],
                })(
                  <Input />
                )}
              </Col>
              <Col span={2}>
                <span style={{textAlign:'center',width:'100%',display:'inline-block'}}>—</span>
              </Col>
              <Col span={11}>
                {getFieldDecorator('assetHigh', {
                  rules: [{ required: true, message: 'Please input the captcha you got!' }],
                })(
                  <Input />
                )}
              </Col>
            </Row>
          </FormItem>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={8}>
          <FormItem {...this.formItemLayout}   label={`注册时间`}>
            {getFieldDecorator(`createTime`, {
              rules: [{
                required: true,
                message: 'Input something!',
              }],
            })(
              <RangePicker />
            )}
          </FormItem>
        </Col>
        <Col span={8}>

        </Col>
        <Col span={8}>
          <Button className={styles.searchBtn} type="primary">搜索</Button>
        </Col>
      </Row>
    </Form>;
  }
}

export default Form.create()(UserQueryForm);
