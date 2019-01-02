import React from 'react';
import {connect} from 'dva';
import withRouter from 'umi/withRouter';
import UserQueryFormCard from './components/UserQueryFormCard';
import UserListCard from './components/UserListCard';
import BatchTranForm from './components/BatchTranForm';
import { Button, Modal } from 'antd';



class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  toggle = ()=> {
    this.setState({
      visible: !this.state.visible,
    });
  };

  handleBack = () => {
    this.toggle();
  };

  render() {
    return <div>
      <UserQueryFormCard/>
      <UserListCard batchTran={this.toggle}/>
      <Modal
        title={'批量转出'}
        visible={this.state.visible}
        footer={null}
        width={900}
        centered
        closable={false}>

        <BatchTranForm/>


        <div style={{ textAlign: 'center',marginTop:'10px' }}>
          <Button onClick={this.handleBack} type={'primary'} htmlType={'button'}>返回</Button>
          <span style={{margin:'0 10px'}}/>
          <Button type={'primary'} htmlType={'button'}>确认</Button>
        </div>
      </Modal>
    </div>;
  }
}

export default withRouter(connect(({userList,loading})=>({userList,loading}))(Home));
