import Button from '../components/ui/button';
import SearchBar from '../components/ui/search';

const CaseQueuePage = () => (
  <section className='p-2 m-2'>
    <div className='flex justify-between'>
      <h3 className="text-lg font-bold text-gray-500">Case Queue</h3>

      <SearchBar
        placeholder="Find"
        onChange={(value) => {
          // handle search value here
          console.log(value);
        }}
      />
    </div>

    <Button className="font-sans text-white text-sm bg-blue-500 border border-blue-500 hover:bg-primary-dark mx-2">Apply</Button>
    <Button className="text-gray-500 bg-white text-sm border border-gray-600 hover:bg-outline">Cancel</Button>
  </section>
);

export default CaseQueuePage;