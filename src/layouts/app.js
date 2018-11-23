import React from 'react';
import { Layout } from 'antd';
import styles from './index.less';
import { connect } from 'dva';
import withRouter from 'umi/withRouter';
import router from 'umi/router';
import config from '../utils/config';
import MenuList from './MenuList';
import '../themes/index.less';
import HeaderContainer from './HeaderContainer';

const { Content, Sider } = Layout;

class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
    this.onMenuClick = this.onMenuClick.bind(this);
  }

  componentDidMount() {
    let props = this.props;
    if (this.shouldToLogin()) {
      router.push('/login');
    }else if (!props.loading.global
      && props.app.menuList.length === 0) {
      props.dispatch({
        type:'app/fetchMenu'
      });
    }
  }

  handleMenuCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  componentDidUpdate(prevProps,prevState,snapShot){
    let props = this.props;
    if (!props.loading.global
      && props.app.menuList.length === 0
      && !this.shouldToLogin()) {
      //动态加载菜单栏
      props.dispatch({
        type:'app/fetchMenu'
      });
    }
  }



  /**
   * 设置用户登录状态,是否需要加载登录组件
   * @returns {boolean}
   */
  shouldToLogin(){
    let userAccount = window.localStorage.getItem(`${config.prefix}userAccount`);
    return userAccount === 'null' || this.props.location.pathname === '/login';
  }

  /**
   * Menu菜单项点击
   * @param item
   */
  onMenuClick(item){
    console.log(item);
  };

  render() {
    const props = this.props;
    if (this.shouldToLogin()) {
      return (<div>
        {this.props.children}
      </div>);
    }
    return (
      <Layout>

        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          className={ styles.fixScreen}
        >
          <div className={styles.logo} />
          <MenuList menuList={props.app.menuList} onMenuClick={this.onMenuClick}/>

        </Sider>
        <Layout>
          <Content style={{ height:"100vh",overflowY:"auto" }}>
            <HeaderContainer/>
            <Layout style={{padding: "0 10px"}}>
            {props.children}
            </Layout>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(connect(({app,loading})=>({app,loading}))(App));
