import React from 'react';
import { Row, Col, Card, message } from 'antd';
import styles from './index.less';
import { connect } from 'dva';
import EditableTable from '../../../components/tables/EditableTable';




const OtherParam = ({ dispatch, loading, editingKey,paramListData,selectedRowKeys }) => {

  const addColumn = () => {
    if (editingKey !== '') {
      message.warning('请先保存正在编辑的字段信息！');
      return false;
    }
    dispatch({
      type:'paramOther/addEmptyColumn',
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
      dispatch({type: 'paramOther/saveParam', payload: {data: data, row: row}});
    });
    dispatch({
      type: 'paramOther/updateEditingKey',
      payload: '',
    });
  };

  const editColumn = (data) => {
    dispatch({
      type: 'paramOther/updateEditingKey',
      payload: data.id,
    });
  };

  const cancelColumn = (data) => {
    dispatch({
      type: 'paramOther/updateEditingKey',
      payload: '',
    });
  };

  const delColumn = (data) => {
    dispatch({
      type:'paramOther/deleteParam',
      payload:{
        id:data.id
      }
    })
  };

  const columns = [
    {
      title: '编号',
      dataIndex: 'paramCode',
      width: '25%',
      editable: true,
    },
    {
      title: '参数名称',
      dataIndex: 'paramName',
      width: '25%',
      editable: true,
    },
    {
      title: '比例',
      dataIndex: 'paramValue',
      width: '25%',
      editable: true,
    }
  ];

  const onSelectChange = (selectedRowKeys) => {
    //console.log('selectedRowKeys changed: ', selectedRowKeys);
   // this.setState({ selectedRowKeys });
    dispatch({
      type:'paramOther/updateSelectedRowKeys',
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
      type:'paramOther/deleteParamList',
      selectedRowKeys:selectedRowKeys
    })
  };

  return (
    <Card className={styles.commonCard}>
      <Row className={styles.titleLabel}>
        <Col span={24}>
          <div className={styles.titleLabel}>
            <span>团队收益参数</span>
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
  const { loading, editingKey,paramListData,selectedRowKeys } = state.paramOther;
  return {
    loading,
    editingKey,
    paramListData,
    selectedRowKeys
  };
};
export default connect(mapStateToProps)(OtherParam);
