import React from 'react';
import { Layout, Icon } from 'antd';
import { connect } from 'dva';
import styles from './HeaderContainer.less';
import router from 'umi/router';
import config from '../utils/config';

const { Header } = Layout;

class HeaderContainer extends React.Component {

  /**
   * 退出登录
   */
  handlerLoginOut = ()=> {
    window.localStorage.setItem(`${config.prefix}userAccount`, null);
    router.push('/login');
  };

  getCurrentDate = ()=> {
    let date = new Date();
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    let D = date.getDate();
    let currentDate = `${Y}${M}${D}`;
    return ` | ${currentDate} ${this.getWeek(currentDate)}`;
  };

  getWeek =   (dateString) => {
    let date;
    let dateArray = dateString.split('-');
    date = new Date(dateArray[0], parseInt(dateArray[1] - 1), dateArray[2]);
    return '星期' + '日一二三四五六'.charAt(date.getDay());
  };

  render() {

    return <Header className={styles.header}>
      <div className={styles.systemName}>BHT钱包后台管理系统</div>

      <div className={styles.userPanel}>
        <Icon className={styles.setting} type="setting" theme="outlined"/>
        <Icon onClick={this.handlerLoginOut} className={styles.powerOff} type="poweroff" theme="outlined"/>
        <span
          className={styles.userName}>欢迎您：{window.localStorage.getItem(`${config.prefix}userAccount`)}{this.getCurrentDate()}</span>
      </div>
    </Header>;
  }
}



export default connect()(HeaderContainer);
