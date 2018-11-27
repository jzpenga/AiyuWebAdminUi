import React from 'react';
import { Button, Input, Form, Row, Col, DatePicker, Card } from 'antd';
import styles from '../index.less';
import { connect } from 'dva';

const FormItem = Form.Item;
const { RangePicker } = DatePicker;


class UserQueryFormCard extends React.Component {
  formItemLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 18 },
  };

  handleSubmit = (e) => {
    const { form: { validateFields } } = this.props;
    e.preventDefault();
    validateFields((errors, values) => {
      const rangeTimeValue = values['rangeTimePicker'];
      let registryTimeFrom = rangeTimeValue===undefined?'':rangeTimeValue[0].format('YYYY-MM-DD');
      let registryTimeTo = rangeTimeValue===undefined?'':rangeTimeValue[1].format('YYYY-MM-DD');
      values = {...values,registryTimeFrom,registryTimeTo};
      let {phoneNo,nickName,totalCapitalMin,totalCapitalMax} = values;
      this.props.dispatch({
        type: 'userList/queryParamChange',
        payload: { queryParam: values },
      });
      this.props.dispatch({
        type: 'userList/queryUserList',
        payload: {
          pageNo: 1,
          registryTimeFrom:registryTimeFrom,
          registryTimeTo:registryTimeTo,
          phoneNo:phoneNo,
          nickName:nickName,
          totalCapitalMin:totalCapitalMin,
          totalCapitalMax:totalCapitalMax
        },
      });
      //console.log(values);
    });
  };


  render() {
    const { getFieldDecorator } = this.props.form;

    return <Card className={styles.commonQueryCard}>
      <Row className={styles.titleLabel}>
        <Col span={24}>数据查询</Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form onSubmit={this.handleSubmit} className={styles.formPadding}>
            <Row gutter={24}>
              <Col span={8}>
                <FormItem {...this.formItemLayout} label={`手机号`}>
                  {getFieldDecorator(`phoneNo`)(
                    <Input/>,
                  )}
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...this.formItemLayout} label={`昵称`}>
                  {getFieldDecorator(`nickName`)(
                    <Input/>,
                  )}
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...this.formItemLayout} label={`资产总量`}>
                  <Row gutter={8}>
                    <Col span={11}>
                      {getFieldDecorator('totalCapitalMin')(
                        <Input/>,
                      )}
                    </Col>
                    <Col span={2}>
                      <span style={{ textAlign: 'center', width: '100%', display: 'inline-block' }}>—</span>
                    </Col>
                    <Col span={11}>
                      {getFieldDecorator('totalCapitalMax')(
                        <Input/>,
                      )}
                    </Col>
                  </Row>
                </FormItem>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={8}>
                <FormItem {...this.formItemLayout} label={`注册时间`}>
                  {getFieldDecorator(`rangeTimePicker`)(
                    <RangePicker/>,
                  )}
                </FormItem>
              </Col>
              <Col span={8}>

              </Col>
              <Col span={8}>
                <Button className={styles.searchBtn} htmlType="submit" type="primary">搜索</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>

    </Card>;


  }
}

const mapStateToProps = (state) => {
  const { dispatch } = state.userList;
  return {
    dispatch,
  };
};

export default connect(mapStateToProps)(Form.create()(UserQueryFormCard));
