import { LocaleProvider } from 'antd';
import React from 'react';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import withRouter from 'umi/withRouter';
import App from './app.js';

export default withRouter((props) => {
  return (
    <LocaleProvider locale={zhCN}>
      <App>
        { props.children }
      </App>
    </LocaleProvider>
  )
})
