import React from 'react';
import { Table } from 'antd';
import type { TableProps as AntdTableProps } from 'antd/es/table';

interface TablePropsGeneric<T> extends AntdTableProps<T> {
}

function DataTable<T extends object>(props: TablePropsGeneric<T>) {
  return (
    <div className="overflow-x-auto">
      <Table {...props} />
    </div>
  );
}

export default DataTable; 