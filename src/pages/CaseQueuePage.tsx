import Button from '../components/ui/button';

const CaseQueuePage = () => (
  <div>
    <h1 className="text-4xl text-gray-700">JJ Bionics</h1>
    <p className="mt-2 text-gray-500">Cases page.</p>

    <Button className="text-white text-sm bg-blue-500 hover:bg-primary-dark mx-2">Apply</Button>
    <Button className="text-gray-900 bg-secondary text-primary text-sm border border-gray-600 hover:bg-outline">Cancel</Button>
  </div>
);

export default CaseQueuePage;