import React from 'react';
import FilterIcon from '../../assets/icons/filter-icon.svg?react';

interface FilterBadgeButtonProps {
  count: number;
  onClick?: () => void;
  className?: string;
}

const FilterBadgeButton: React.FC<FilterBadgeButtonProps> = ({ count, onClick, className }) => (
  <button
    type="button"
    aria-label={`Filter${count > 0 ? ` (${count})` : ''}`}
    className={`relative cursor-pointer ${className ?? ''}`}
    onClick={onClick}
  >
    <FilterIcon className="w-6 h-6" />
    {count > 0 && (
      <span
        className="absolute -top-1.5 -right-1.5 flex items-center justify-center w-4 h-4 rounded-full bg-blue-500 text-white text-[8px]"
        aria-hidden="true"
      >
        {count}
      </span>
    )}
  </button>
);

export default FilterBadgeButton; 