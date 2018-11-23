import React from 'react';
import {  Input,Form,Row,Col } from 'antd';
import styles from '../index.less';

const FormItem = Form.Item;

class UserInfoForm extends React.Component{
  formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
  };
  render(){
    const { getFieldDecorator } = this.props.form;
    return <Form  className={styles.formPadding}>
      <Row gutter={24}>
        <Col span={12}>
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
        <Col span={12}>
          <FormItem {...this.formItemLayout} label={`密码`}>
            {getFieldDecorator(`password`, {
              rules: [{
                required: true,
                message: 'Input something!',
              }],
            })(
              <Input  placeholder="placeholder" />
            )}
          </FormItem>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
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
        <Col span={12}>
          <FormItem  {...this.formItemLayout} label={`Email`}>
            {getFieldDecorator(`email`, {
              rules: [{
                required: true,
                message: 'Input something!',
              }],
            })(
              <Input  placeholder="placeholder" />
            )}
          </FormItem>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <FormItem {...this.formItemLayout} label={`注册时间`}>
            {getFieldDecorator(`createdTime`, {
              rules: [{
                required: true,
                message: 'Input something!',
              }],
            })(
              <Input  placeholder="placeholder" />
            )}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem {...this.formItemLayout} label={`上次登录时间`}>
            {getFieldDecorator(`lastLoginTime`, {
              rules: [{
                required: true,
                message: 'Input something!',
              }],
            })(
              <Input  placeholder="placeholder" />
            )}
          </FormItem>
        </Col>
      </Row>
    </Form>;
  }
}

export default Form.create()(UserInfoForm);
