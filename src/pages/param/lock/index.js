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
      width: '20%',
      editable: true,
    },
    {
      title: '计算上限',
      dataIndex: 'upperLimit',
      width: '20%',
      editable: true,
    },
    {
      title: '计算下限',
      dataIndex: 'lowerLimit',
      width: '20%',
      editable: true,
    },
    {
      title: '比例',
      dataIndex: 'ratio',
      width: '20%',
      editable: true,
    },
  ];

  const rowSelection = {
    selectedRowKeys
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

  console.log(paramListData);


  return (
    <Card className={styles.commonCard}>
      <Row className={styles.titleLabel}>
        <Col span={24}>锁仓收益参数</Col>
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
