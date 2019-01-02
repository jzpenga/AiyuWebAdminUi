import React from 'react';
import { Col, Form, Input, Row, Radio, Select, Button ,List} from 'antd';

const FormItem = Form.Item;
const { Option } = Select;


const data = [
  '13677665544',
  '13677665544',
  '13677665544',
  '13677665544',
  '13677665544',
  '13677665544',
  '13677665544',
  '13677665544',
  '13677665544',
  '13677665544',
  '13677665544',
  '13677665544',
  '13677665544',
  '13677665544',
];class BatchTranForm extends React.Component{
  formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };
  otherFormItemLayout = {labelCol: { span: 9 }, wrapperCol: { span: 12 }};

  render() {
    const { getFieldDecorator } = this.props.form;
    return <Form>
      <Row>
        <Col span={12}>
          <FormItem {...this.formItemLayout} label={`转出方`}>
            {getFieldDecorator(`a`)(
              <Radio.Group>
                <Radio value="a">系统</Radio>
                <Radio value="b">个人</Radio>
              </Radio.Group>
            )}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem {...this.formItemLayout} label={`转出方`}>
            {getFieldDecorator(`b`)(
              <Radio.Group>
                <Radio value="a">左团队</Radio>
                <Radio value="b">右团队</Radio>
                <Radio value="c">全团队</Radio>
              </Radio.Group>
            )}
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <FormItem {...this.formItemLayout} label={`转出人`}>
            {getFieldDecorator(`c`)(
              <Select placeholder="Please select favourite colors">
                <Option value="red">Red</Option>
                <Option value="green">Green</Option>
                <Option value="blue">Blue</Option>
              </Select>
            )}
          </FormItem>
        </Col>
        <Col span={12}>
          <Row>
            <Col span={16}>
              <FormItem {...this.otherFormItemLayout} label={`转出人`}>
                {getFieldDecorator(`d`)(
                  <Input/>
                )}
              </FormItem>
            </Col>
            <Col span={4}>
              <Button type={'primary'} htmlType={'button'}>确定</Button>

            </Col>
          </Row>

        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <FormItem {...this.formItemLayout} label={`余额`}>
            655676567.998
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
                  <Input/>
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
          <List
            style={{maxHeight:'200px',overflow:'auto'}}
            header={null}
            footer={null}
            size={'small'}
            bordered
            dataSource={data}
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />
        </Col>
      </Row>
    </Form>;
  }
}


export default Form.create()(BatchTranForm);
