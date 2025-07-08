import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-gray-900">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-lg">The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 font-medium bg-red-400 text-white rounded hover:bg-red-500"
      >
        Go Back to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;