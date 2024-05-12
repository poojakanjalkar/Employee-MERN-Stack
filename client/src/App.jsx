import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashboardLayout from './pages/DashboardLayout';
import HomeLayout from './pages/HomeLayout';
import Login from './pages/Login';
import EmployeeList from './pages/EmployeeList';
import AddEmployee from './pages/AddEmployee';
import LogoutButton from './pages/Logout';
export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/home',
      element: <HomeLayout />,
      children: [{
        index: true,
        element: <DashboardLayout />
      },
      {
        path: 'employee',
        element: <EmployeeList />,
      },
      {
        path: 'addEmployee',
        element: <AddEmployee />
      },
      {
        path: 'logout',
        element: <LogoutButton />
      }
      ]
    }



  ])
  return <RouterProvider router={router} />;
}


