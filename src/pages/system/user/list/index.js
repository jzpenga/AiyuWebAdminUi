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

        <BatchTranForm toggle={this.toggle}/>


      </Modal>
    </div>;
  }
}

export default withRouter(connect(({userList,loading})=>({userList,loading}))(Home));
