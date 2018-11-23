import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import {connect} from 'dva';
import styles from './index.less';
import Loader from '../../components/Loader'


const FormItem = Form.Item;

class Login extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.loginContainer}>
        <Loader fullScreen spinning={this.props.loading.effects['login/login']}/>
        <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
          <FormItem
            hasFeedback
          >
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入用户名!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>} placeholder="用户名" autoComplete="off" disableautocomplete="true"/>,
            )}
          </FormItem>
          <FormItem
            hasFeedback
          >
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>} type="password"
                     placeholder="密码" autoComplete="off" disableautocomplete="true"/>,
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
              登录
            </Button>
          </FormItem>
        </Form>
      </div>
  );
  }

  handleSubmit = (e) => {
    const { form: { validateFields } } = this.props;
    validateFields((errors, values) => {
      this.props.dispatch({
        type:'login/login',
        payload:values
      });
    });
    e.preventDefault();
  };
}


export default connect(({login,loading})=>({login,loading}))(Form.create()(Login));
