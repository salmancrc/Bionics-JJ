import Button from '../components/ui/button';
import { Input } from '../components/ui/Input';
import SearchBar from '../components/ui/search';
import CaseQueueTable from '../components/CaseTable';
import RoundedCard from '../components/ui/roundedCard';

const CaseQueuePage = () => (
  <RoundedCard className="p-4 m-5">
    <div className='flex justify-between'>
      <div className="flex items-center">
        <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-1"></span>
        <h3 className="text-lg font-bold text-gray-500">Case Queue</h3>
      </div>

      <SearchBar
        placeholder="Find"
        onChange={(value) => {
          console.log(value);
        }}
      />
    </div>

    <div className='py-6'>
      <CaseQueueTable />
    </div>
    {/* 
    <Button className="font-sans text-white text-sm bg-blue-500 border border-blue-500 hover:bg-primary-dark mx-2">Apply</Button>
    <Button className="text-gray-500 bg-white text-sm border border-gray-600 hover:bg-outline">Cancel</Button> */}
  </RoundedCard>
);

export default CaseQueuePage;