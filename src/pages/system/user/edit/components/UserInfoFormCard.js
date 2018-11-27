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
    const { getFieldDecorator } = this.props.form;
    return <Card className={styles.commonQueryCard}>
       <Row className={styles.titleLabel}>
        <Col span={24}>账户信息</Col>
      </Row>
      <Row >
        <Col span={24}>

          <Form className={styles.formPadding}>
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
                  {getFieldDecorator(`nickName`)(
                    <Input  placeholder="placeholder" />
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem  {...this.formItemLayout} label={`Email`}>
                  {getFieldDecorator(`email`)(
                    <Input  placeholder="placeholder" />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <FormItem {...this.formItemLayout} label={`注册时间`}>
                  {getFieldDecorator(`createdTime`)(
                    <Input  placeholder="placeholder" />
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem {...this.formItemLayout} label={`上次登录时间`}>
                  {getFieldDecorator(`lastLoginTime`)(
                    <Input  placeholder="placeholder" />
                  )}
                </FormItem>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>

    </Card>
  }
}


export default Form.create()(UserInfoFormCard);
