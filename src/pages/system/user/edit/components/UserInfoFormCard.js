import React from 'react';
import { Input, Form, Row, Col, Button, Card } from 'antd';
import styles from '../index.less';

const FormItem = Form.Item;

class UserInfoFormCard extends React.Component{
  formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
  };

  render(){
    console.log(this.props);
    const { getFieldDecorator } = this.props.form;
    return <Card className={styles.commonQueryCard}>
       <Row className={styles.titleLabel}>
        <Col span={24}>账户信息</Col>
      </Row>
      <Row>
        <Col span={24}>

          <Form className={styles.formPadding}>
            <Row gutter={24}>
              <Col span={12}>
                <FormItem {...this.formItemLayout} label={`手机号`}>
                  {getFieldDecorator(`phoneNo`)(
                    <Input  placeholder="" />
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem {...this.formItemLayout} label={`密码`}>
                  {getFieldDecorator(`passWord`)(
                    <Input  placeholder="******" />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <FormItem {...this.formItemLayout} label={`昵称`}>
                  {getFieldDecorator(`nickName`)(
                    <Input  placeholder="" />
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem  {...this.formItemLayout} label={`Email`}>
                  {getFieldDecorator(`email`)(
                    <Input  placeholder="" />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <FormItem {...this.formItemLayout} label={`注册时间`}>
                  {getFieldDecorator(`creatTime`)(
                    <Input  placeholder="" disabled />
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem {...this.formItemLayout} label={`上次登录时间`}>
                  {getFieldDecorator(`lastLoginTime`)(
                    <Input  placeholder="" disabled />
                  )}
                </FormItem>
              </Col>
            </Row>
            {
              this.props.addUser?<Row gutter={24}>
                <Col span={24}>
                  <FormItem {...this.formItemLayout} label={`消费资金`}>
                    {getFieldDecorator(`floatingFunds`)(
                      <Input  placeholder="" />
                    )}
                  </FormItem>
                </Col>
              </Row>:''
            }
          </Form>
        </Col>
      </Row>

    </Card>
  }
}

const formOpt = {
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      phoneNo: Form.createFormField({
        ...props.phoneNo,
        value: props.phoneNo.value,
      }),
      passWord: Form.createFormField({
        ...props.passWord,
        value: props.passWord.value,
      }),
      nickName: Form.createFormField({
        ...props.nickName,
        value: props.nickName.value,
      }),
      email: Form.createFormField({
        ...props.email,
        value: props.email.value,
      }),
      creatTime: Form.createFormField({
        ...props.creatTime,
        value: props.creatTime.value,
      }),
      lastLoginTime: Form.createFormField({
        ...props.lastLoginTime,
        value: props.lastLoginTime.value,
      }),
      floatingFunds: Form.createFormField({
        ...props.floatingFunds,
        value: props.floatingFunds.value,
      }),
    };
  },
  onValuesChange(_, values) {
  },
};

export default Form.create(formOpt)(UserInfoFormCard);
