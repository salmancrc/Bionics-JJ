import Button from '../components/ui/button';

const CaseQueuePage = () => (
  <div>
    <h1 className="text-4xl text-gray-700">JJ Bionics</h1>
    <p className="my-3 text-gray-500">Cases page.</p>

    <Button className="text-white text-sm bg-blue-500 border border-blue-500 hover:bg-primary-dark mx-2">Apply</Button>
    <Button className="text-gray-500 bg-white text-sm border border-gray-600 hover:bg-outline">Cancel</Button>
  </div>
);

export default CaseQueuePage;