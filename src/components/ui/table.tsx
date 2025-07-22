import React from 'react';
import { Table } from 'antd';
import type { TableProps as AntdTableProps } from 'antd/es/table';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

interface TablePropsGeneric<T> extends AntdTableProps<T> {
}

export function sorterTitle(label: string) {
  return ({ sortOrder }: { sortOrder?: 'ascend' | 'descend' }) => (
    <span className='flex items-center'>
      {label}
      {sortOrder === 'ascend' && <span className="ml-2"><FaArrowUp className="text-gray-200 text-xs" /></span>}
      {sortOrder === 'descend' && <span className="ml-2"><FaArrowDown className="text-gray-200 text-xs" /></span>}
      {!sortOrder && <span className="ml-2 text-gray-300"><FaArrowDown className="text-xs text-gray-400" style={{ transform: 'rotate(180deg)' }} /></span>}
    </span>
  );
} 

function DataTable<T extends object>(props: TablePropsGeneric<T>) {
  return (
    <div className="overflow-x-auto">
      <Table {...props} />
    </div>
  );
}

export default DataTable; 