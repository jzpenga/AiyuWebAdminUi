import React from 'react';
import {connect} from 'dva';
import withRouter from 'umi/withRouter';
import UserQueryFormCard from './components/UserQueryFormCard';
import UserListCard from './components/UserListCard';


class Home extends React.Component {
  render() {
    return <div>
      <UserQueryFormCard/>
      <UserListCard/>
    </div>;
  }
}

export default withRouter(connect(({userList,loading})=>({userList,loading}))(Home));
