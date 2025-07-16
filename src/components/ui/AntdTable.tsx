import React from 'react';
import { Table } from 'antd';
import type { TableProps as AntdTableProps } from 'antd/es/table';

interface AntdTablePropsGeneric<T> extends AntdTableProps<T> {
}

function AntdTable<T extends object>(props: AntdTablePropsGeneric<T>) {
  return <Table {...props} />;
}

export default AntdTable; 