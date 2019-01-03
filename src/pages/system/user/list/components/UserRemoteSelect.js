import { Select, Spin } from 'antd';
import debounce from 'lodash/debounce';
import React from 'react';

const Option = Select.Option;
const phoneData = [
  '13677665544',
  '13677665545',
  '13677665546',
  '13677665548',
  '13677665549',
  '13677665541',
  '13677665524',
  '13677665534',
  '13677665514',
  '13677665554',
  '13677365544',
  '13677625544',
  '13672665544',
  '13677165544',
  '13617665544',
  '13673665544',
  '17677665544',
  '13670665544',
  '13623665544',
  '13671265544',
  '13643265544',
  '13677645544',
  '13677612544',
  '13609766544',
  '13677623544',
];
class UserRemoteSelect extends React.Component {
  constructor(props) {
    super(props);
    this.lastFetchId = 0;
    this.fetchUser = debounce(this.fetchUser, 800);
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
    fetch('https://randomuser.me/api/?results=5')
      .then(response => response.json())
      .then((body) => {
        if (fetchId !== this.lastFetchId) { // for fetch callback order
          return;
        }
        const phoneDataAfterFilter = phoneData.filter((item)=>{
          return item.includes(value);
        });
        const data = phoneDataAfterFilter.map(phone => ({
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
