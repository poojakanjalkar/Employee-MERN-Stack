import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <h1>home</h1>,
    },
    {
      path: '/about',
      element: (
        <div>
          <h2>about page</h2>
        </div>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}


