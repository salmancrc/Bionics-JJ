import DataTable, { sorterTitle } from './ui/table';
import type { ColumnsType } from 'antd/es/table';
import SentimentTag, { Sentiment } from './SentimentTag';
import PriorityTag, { Priority } from './PriorityTag';
import StarsIcon from '../assets/icons/stars-icon.svg?react';
interface Case {
  id: string;
  sentiment: Sentiment;
  customer: string;
  caseType: string;
  subType: string;
  caseCategory: string;
  caseStatus: string;
  priority: Priority;
}

export const columns: ColumnsType<Case> = [
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
    render: (value: Sentiment) => (
      <span className='inline-flex items-center gap-1 p-1 bg-purple-100 rounded-sm border border-purple-200'>
        <span className='p-1'>
          <StarsIcon />
        </span>
        <SentimentTag sentiment={value} />
      </span>
    ),
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
    render: (value: Priority) => <PriorityTag priority={value} />,
  },
  {
    title: 'Action',
    key: 'action',
    render: () => <span className="cursor-pointer">⋮</span>,
  },
];

export const data: Case[] = [
  { id: 'CS-32745-5089', sentiment: 'Normal', customer: 'SSS Australia', caseType: 'Invoice Discrepancy', subType: 'Wrong Order Number', caseCategory: 'Unrelated Query', caseStatus: 'In Progress', priority: 'Low' },
  { id: 'CS-30422-7892', sentiment: 'Unhappy', customer: 'Kalgoorlie Health Campus', caseType: 'Invoice Discrepancy', subType: 'Wrong Order Number', caseCategory: 'Closed Transaction', caseStatus: 'Awaiting Response', priority: 'Medium' },
  { id: 'CS-35941-6296', sentiment: 'Aggravated', customer: 'St John of God Ballarat', caseType: 'Invoice Discrepancy', subType: 'Wrong Order Number', caseCategory: 'Unrelated Query', caseStatus: 'In Progress', priority: 'High' },
];

const CaseTable = () => (
  <DataTable
    columns={columns}
    dataSource={data}
    rowKey={row => row.id}
    pagination={false}
    bordered={false}
    size="small"
    locale={{ emptyText: "No cases found" }}
  />
);

export default CaseTable;
