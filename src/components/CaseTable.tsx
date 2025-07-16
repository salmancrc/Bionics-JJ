import React from 'react';
import { Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { FaRegSmile, FaRegFrown, FaRegAngry, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import StarsIcon from '../assets/icons/stars-icon.svg?react';

interface Case {
  id: string;
  sentiment: 'Normal' | 'Unhappy' | 'Aggravated';
  customer: string;
  caseType: string;
  subType: string;
  caseCategory: string;
  caseStatus: string;
  priority: 'Low' | 'Medium' | 'High';
}

const sentimentMap: Record<Case['sentiment'], { icon: React.ReactNode; color: string; label: string }> = {
  Normal: { icon: <FaRegSmile className="text-green-500" />, color: 'green', label: 'Normal' },
  Unhappy: { icon: <FaRegFrown className="text-orange-500" />, color: 'orange', label: 'Unhappy' },
  Aggravated: { icon: <FaRegAngry className="text-red-500" />, color: 'red', label: 'Aggravated' },
};

const priorityMap: Record<Case['priority'], { color: string }> = {
  Low: { color: 'green' },
  Medium: { color: 'orange' },
  High: { color: 'red' },
};

const sorterTitle = (label: string) => ({ sortOrder }: { sortOrder?: 'ascend' | 'descend' }) => (
  <span className='flex items-center'>
    {label}
    {sortOrder === 'ascend' && <span className="ml-2"><FaArrowUp className="text-gray-200 text-xs" /></span>}
    {sortOrder === 'descend' && <span className="ml-2"><FaArrowDown className="text-gray-200 text-xs" /></span>}
    {!sortOrder && <span className="ml-2 text-gray-300"><FaArrowDown className="text-xs text-gray-400" style={{ transform: 'rotate(180deg)' }} /></span>}
  </span>
);

const columns: ColumnsType<Case> = [
  {
    title: sorterTitle('Case ID'),
    dataIndex: 'id',
    key: 'id',
    sorter: (a, b) => a.id.localeCompare(b.id),
  },
  {
    title: sorterTitle('Sentiment'),
    dataIndex: 'sentiment',
    key: 'sentiment',
    sorter: (a, b) => a.sentiment.localeCompare(b.sentiment),
    render: (value: Case['sentiment']) => {
      const s = sentimentMap[value];
      return (
        <span className='inline-flex items-center gap-1 p-1 bg-purple-100 rounded-sm border border-purple-200'>
          <span className='p-1'>
          <StarsIcon />
          </span>
          <Tag
            color={s.color}
            className="inline-flex items-center gap-1 text-xs font-medium border-0"
            style={{ background: 'white', margin: 0, padding: '0.25rem' }}
          >
            <span className="flex items-center">{s.icon}<span className="ml-1 text-xs text-gray-500 font-semibold">{s.label}</span></span>
          </Tag>
        </span>
      );
    },
  },
  {
    title: sorterTitle('Customer'),
    dataIndex: 'customer',
    key: 'customer',
    sorter: (a, b) => a.customer.localeCompare(b.customer),
  },
  {
    title: sorterTitle('Case Type'),
    dataIndex: 'caseType',
    key: 'caseType',
    sorter: (a, b) => a.caseType.localeCompare(b.caseType),
  },
  {
    title: sorterTitle('Sub Type'),
    dataIndex: 'subType',
    key: 'subType',
    sorter: (a, b) => a.subType.localeCompare(b.subType),
  },
  {
    title: sorterTitle('Case Category'),
    dataIndex: 'caseCategory',
    key: 'caseCategory',
    sorter: (a, b) => a.caseCategory.localeCompare(b.caseCategory),
  },
  {
    title: sorterTitle('Case Status'),
    dataIndex: 'caseStatus',
    key: 'caseStatus',
    sorter: (a, b) => a.caseStatus.localeCompare(b.caseStatus),
  },
  {
    title: sorterTitle('Priority'),
    dataIndex: 'priority',
    key: 'priority',
    sorter: (a, b) => a.priority.localeCompare(b.priority),
    render: (value: Case['priority']) => (
      <Tag
        color={priorityMap[value].color}
        className="text-xs font-semibold border-0" style={{ height: '1.5rem' }}
      >
        {value}
      </Tag>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: () => <span className="cursor-pointer">⋮</span>,
  },
];

const data: Case[] = [
  { id: 'CS-32745-5089', sentiment: 'Normal', customer: 'SSS Australia', caseType: 'Invoice Discrepancy', subType: 'Wrong Order Number', caseCategory: 'Unrelated Query', caseStatus: 'In Progress', priority: 'Low' },
  { id: 'CS-30422-7892', sentiment: 'Unhappy', customer: 'Kalgoorlie Health Campus', caseType: 'Invoice Discrepancy', subType: 'Wrong Order Number', caseCategory: 'Closed Transaction', caseStatus: 'Awaiting Response', priority: 'Medium' },
  { id: 'CS-35941-6296', sentiment: 'Aggravated', customer: 'St John of God Ballarat', caseType: 'Invoice Discrepancy', subType: 'Wrong Order Number', caseCategory: 'Unrelated Query', caseStatus: 'In Progress', priority: 'High' },
];

const CaseTable = () => (
  <div className="overflow-x-auto">
    <Table
      columns={columns}
      dataSource={data}
      rowKey={row => row.id}
      pagination={false}
      bordered={false}
      size="small"
    />
  </div>
);

export default CaseTable;
