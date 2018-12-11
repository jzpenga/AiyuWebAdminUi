import React from 'react';
import { Row, Col, Card, message } from 'antd';
import styles from './index.less';
import { connect } from 'dva';
import EditableTable from '../../../components/tables/EditableTable';




const LockedParam = ({ dispatch, loading, editingKey,paramListData,selectedRowKeys }) => {

  const addColumn = () => {
    if (editingKey !== '') {
      message.warning('请先保存正在编辑的字段信息！');
      return false;
    }
    dispatch({
      type:'paramLock/addEmptyColumn',
      payload:{
        'id': -1,
        'profitsCode': '',
        'lowerLimit': '',
        'upperLimit': '',
        'ratio': '',
      }
    });
  };

  const saveColumn = (form, data) => {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      dispatch({type: 'paramLock/saveLockedParam', payload: {data: data, row: row}});
    });
    dispatch({
      type: 'paramLock/updateEditingKey',
      payload: '',
    });
  };

  const editColumn = (data) => {
    dispatch({
      type: 'paramLock/updateEditingKey',
      payload: data.id,
    });
  };

  const cancelColumn = (data) => {
    dispatch({
      type: 'paramLock/updateEditingKey',
      payload: '',
    });
  };

  const delColumn = (data) => {
    dispatch({
      type:'paramLock/deleteLockedParam',
      payload:{
        id:data.id
      }
    })
  };

  const columns = [
    {
      title: '编号',
      dataIndex: 'profitsCode',
      width: '16.6%',
      editable: true,
      inputType: 'text',
    },
    {
      title: '计算上限',
      dataIndex: 'upperLimit',
      width: '16.6%',
      editable: true,
      inputType: 'number',
    },
    {
      title: '计算下限',
      dataIndex: 'lowerLimit',
      width: '16.6%',
      editable: true,
      inputType: 'number',
    },
    {
      title: '比例',
      dataIndex: 'ratio',
      width: '16.6%',
      editable: true,
      inputType: 'number',
    },
    {
      title: '基数',
      dataIndex: 'cardinalNumber',
      width: '16.6%',
      editable: true,
      inputType: 'number',
    },
  ];

  const onSelectChange = (selectedRowKeys) => {
    //console.log('selectedRowKeys changed: ', selectedRowKeys);
   // this.setState({ selectedRowKeys });
    dispatch({
      type:'paramLock/updateSelectedRowKeys',
      selectedRowKeys:selectedRowKeys
    })
  };

  const onSelect = (record, selected, selectedRows) => {
    //console.log(record, selected, selectedRows);
  };

  const onSelectAll = (selected, selectedRows, changeRows) => {
    //console.log(selected, selectedRows, changeRows);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    onSelect: onSelect,
    onSelectAll: onSelectAll,
  };

  const editableTableProps = {
    loading,
    columns,
    tableData: paramListData,
    editingKey,
    delConstValue: delColumn,
    editConstValue: editColumn,
    cancelConstValue: cancelColumn,
    saveConstValue: saveColumn,
    deleteTip: '确认删除参数信息?',
    selections:rowSelection
  };

  //console.log('selectedRowKeys',selectedRowKeys);

  const deleteBatch = ()=>{
    dispatch({
      type:'paramLock/deleteLockedParamList',
      selectedRowKeys:selectedRowKeys
    })
  };

  return (
    <Card className={styles.commonCard}>
      <Row className={styles.titleLabel}>
        <Col span={24}>
          <div className={styles.titleLabel}>
            <span>锁仓收益参数</span>
            <span onClick={deleteBatch} className={styles.rightTitleOption}>批量删除</span>
            <span onClick={addColumn} className={styles.rightTitleOption}>新增</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <EditableTable {...editableTableProps}/>
        </Col>
      </Row>
    </Card>

  );

};

const mapStateToProps = (state) => {
  const { loading, editingKey,paramListData,selectedRowKeys } = state.paramLock;
  return {
    loading,
    editingKey,
    paramListData,
    selectedRowKeys
  };
};
export default connect(mapStateToProps)(LockedParam);
