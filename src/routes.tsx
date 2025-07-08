import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense, ReactNode } from 'react';
import MainLayout from './components/MainLayout';
import LoaderSpinner from './components/LoaderSpinner';

const CaseQueuePage = lazy(() => import('./pages/CaseQueuePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function WithSuspense({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<LoaderSpinner />}>
      {children}
    </Suspense>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <WithSuspense>
            <CaseQueuePage />
          </WithSuspense>
        ),
      },
    ],
  },
  {
    path: '*',
    element: (
      <WithSuspense>
        <NotFoundPage />
      </WithSuspense>
    ),
  },
]);