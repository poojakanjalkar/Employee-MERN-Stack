import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashboardLayout from './pages/DashboardLayout';
import HomeLayout from './pages/HomeLayout';
import Login from './pages/Login';
export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Login />
        },
        {
          path: '/dashboard',
          element: <DashboardLayout />
        }
      ]
    },

  ]);
  return <RouterProvider router={router} />;
}


