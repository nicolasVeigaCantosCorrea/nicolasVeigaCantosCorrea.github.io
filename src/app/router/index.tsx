import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from '../../pages/NotFound';
import HomePage from '../../pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
