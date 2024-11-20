import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage.page';
import { Practice } from './pages/Practice.page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/practices',
    element: <Practice />,
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}
