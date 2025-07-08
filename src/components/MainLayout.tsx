import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => (
  <>
    <nav className="mb-4 flex gap-4 border-b pb-2">
      <Link to="/" className="text-blue-600 hover:underline">Home</Link>
    </nav>
    <main>
      <Outlet />
    </main>
  </>
);

export default MainLayout; 