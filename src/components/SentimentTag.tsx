import React from 'react';
import { Tag } from 'antd';
import { FaRegSmile, FaRegFrown, FaRegAngry } from 'react-icons/fa';

export type Sentiment = 'Normal' | 'Unhappy' | 'Aggravated';

const sentimentMap: Record<Sentiment, { icon: React.ReactNode; color: string; label: string }> = {
  Normal: { icon: <FaRegSmile className="text-green-500" />, color: 'green', label: 'Normal' },
  Unhappy: { icon: <FaRegFrown className="text-orange-500" />, color: 'orange', label: 'Unhappy' },
  Aggravated: { icon: <FaRegAngry className="text-red-500" />, color: 'red', label: 'Aggravated' },
};

interface SentimentTagProps {
  sentiment: Sentiment;
}

const SentimentTag = ({ sentiment }:SentimentTagProps) => {
  const s = sentimentMap[sentiment];
  return (
    <Tag
      color={s.color}
      className="inline-flex items-center gap-1 text-xs font-medium border-0"
      style={{ background: 'white', margin: 0, padding: '0.25rem' }}
    >
      <span className="flex items-center">{s.icon}<span className="ml-1 text-xs text-gray-500 font-semibold">{s.label}</span></span>
    </Tag>
  );
};

export default SentimentTag; 