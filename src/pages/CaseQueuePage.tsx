import Button from '../components/ui/button';
import { Input } from '../components/ui/Input';
import SearchBar from '../components/ui/search';
import CaseQueueTable from '../components/CaseTable';
import RoundedCard from '../components/ui/roundedCard';
import CardIcon from '../assets/icons/card-icon.svg?react';
import FilterIcon from '../assets/icons/filter-icon.svg?react';

const filterCount = 2;

const CaseQueuePage = () => (
  <RoundedCard className="p-4 m-4">
    <div className='flex justify-between'>
      <div className="flex items-center">
        <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-1"></span>
        <h1 className="text-lg font-bold text-gray-500">Case Queue</h1>
      </div>

      <div className='flex'>
        <SearchBar
          placeholder="Find"
          onChange={(value) => {
            console.log(value);
          }}
        />
        <span className='flex gap-1 items-center ml-4'>
          <button type="button" aria-label="Card View" className='cursor-pointer'>
            <CardIcon />
          </button>
          <button type="button" aria-label={`Filter (${filterCount})`} className="relative cursor-pointer">
            <FilterIcon className="" />
            <span
              className="absolute -top-1.5 -right-1.5 flex items-center justify-center w-4 h-4 rounded-full bg-blue-500 text-white text-[8px]"
              aria-hidden="true"
            >
              {filterCount}
            </span>
          </button>
        </span>
      </div>
    </div>

    <div className='pt-6 '>
      <CaseQueueTable />
    </div>
    {/* 
    <Button className="font-sans text-white text-sm bg-blue-500 border border-blue-500 hover:bg-primary-dark mx-2">Apply</Button>
    <Button className="text-gray-500 bg-white text-sm border border-gray-600 hover:bg-outline">Cancel</Button> */}
  </RoundedCard>
);

export default CaseQueuePage;