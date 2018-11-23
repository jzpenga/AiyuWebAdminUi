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

  handleSubmit = (e) => {
    const { form: { validateFields } } = this.props;
    validateFields((errors, values) => {
      const rangeTimeValue = values['rangeTimePicker'];
      let registryTimeFrom = rangeTimeValue[0].format('YYYY-MM-DD');
      let registryTimeTo = rangeTimeValue[1].format('YYYY-MM-DD');
      values = {...values,registryTimeFrom,registryTimeTo};
      console.log(values);
    });
    e.preventDefault();
  };


  render(){
    const { getFieldDecorator } = this.props.form;

    return  <Form  onSubmit={this.handleSubmit}  className={styles.formPadding}>
      <Row gutter={24}>
        <Col span={8}>
          <FormItem {...this.formItemLayout} label={`手机号`}>
            {getFieldDecorator(`phoneNo`)(
              <Input />
            )}
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem {...this.formItemLayout} label={`昵称`}>
            {getFieldDecorator(`nickName`)(
              <Input  />
            )}
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem {...this.formItemLayout} label={`资产总量`}>
            <Row gutter={8}>
              <Col span={11}>
                {getFieldDecorator('totalCapitalMin')(
                  <Input />
                )}
              </Col>
              <Col span={2}>
                <span style={{textAlign:'center',width:'100%',display:'inline-block'}}>—</span>
              </Col>
              <Col span={11}>
                {getFieldDecorator('totalCapitalMax')(
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
            {getFieldDecorator(`rangeTimePicker`)(
              <RangePicker />
            )}
          </FormItem>
        </Col>
        <Col span={8}>

        </Col>
        <Col span={8}>
          <Button className={styles.searchBtn} htmlType="submit" type="primary">搜索</Button>
        </Col>
      </Row>
    </Form>;
  }
}

export default Form.create()(UserQueryForm);
