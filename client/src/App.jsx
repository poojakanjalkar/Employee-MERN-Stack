import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashboardLayout from './pages/DashboardLayout';
import HomeLayout from './pages/HomeLayout';
import Login from './pages/Login';
import EmployeeList from './pages/EmployeeList';
import AddEmployee from './pages/AddEmployee';
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
      }
      ]
    }



  ])
  return <RouterProvider router={router} />;
}


