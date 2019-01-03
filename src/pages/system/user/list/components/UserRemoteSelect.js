import { Select, Spin } from 'antd';
import React from 'react';
import config from '../../../../../utils/config'
import axios from 'axios';

const Option = Select.Option;

class UserRemoteSelect extends React.Component {
  constructor(props) {
    super(props);
    this.lastFetchId = 0;
    //this.fetchUser = debounce(this.fetchUser, 800);
  }

  state = {
    data: [],
    value: [],
    fetching: false,
  };

  fetchUser = (value) => {
    console.log('fetching user', value);
    this.lastFetchId += 1;
    const fetchId = this.lastFetchId;
    this.setState({ data: [], fetching: true });
    axios.get(`${config.apiPrefix}/consumer/phoneNoAssociate?phoneNo=${value}`)
    //fetch(`${config.baseUrl}${config.apiPrefix}/consumer/phoneNoAssociate?phoneNo=${value}`)
    //fetch(`https://randomuser.me/api/?results=5`)
     // .then(response => response.json())
      .then((body) => {
        console.log(body);
        if (body.status!==200) {
          this.setState({ fetching: false });
          return ;
        }
        if (fetchId !== this.lastFetchId) { // for fetch callback order
          return;
        }
        const data = body.data.data.map(phone => ({
          text: phone,
          value: phone,
        }));
        this.setState({ data, fetching: false });
      });
  };

  handleChange = (value) => {
    this.setState({
      value,
      data: [],
      fetching: false,
    });
  };

  render() {
    const { fetching, data, value } = this.state;
    const { disabled } = this.props;
    return (
      <Select
        disabled={disabled}
        showSearch
        labelInValue
        value={value}
        placeholder="输入手机号"
        notFoundContent={fetching ? <Spin size="small" /> : null}
        filterOption={false}
        onSearch={this.fetchUser}
        onChange={this.handleChange}
        style={{ width: '100%' }}
      >
        {data.map(d => <Option key={d.value}>{d.text}</Option>)}
      </Select>
    );
  }
}

export default UserRemoteSelect;
