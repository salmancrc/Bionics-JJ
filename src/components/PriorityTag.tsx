import React from 'react';
import { Tag } from 'antd';

export type Priority = 'Low' | 'Medium' | 'High';

const priorityMap: Record<Priority, { color: string }> = {
  Low: { color: 'green' },
  Medium: { color: 'orange' },
  High: { color: 'red' },
};

interface PriorityTagProps {
  priority: Priority;
}

const PriorityTag = ({ priority }: PriorityTagProps) => (
  <Tag
    color={priorityMap[priority].color}
    className="text-xs font-semibold border-0"
    style={{ height: '1.5rem' }}
  >
    {priority}
  </Tag>
);

export default PriorityTag; 