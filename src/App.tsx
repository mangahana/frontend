import { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Root } from './components/Root';
import {
  HomePage
} from 'pages';

export const App: FC = () => {
  const router = createBrowserRouter([
    {
      path: '',
      element: <Root />,
      errorElement: <div>error</div>,

      children: [
        { path: '/', element: <HomePage /> },
      ],
    }
  ]);
  
  return <RouterProvider router={router} />;
}