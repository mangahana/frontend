import { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Root } from './components/Root';
import {
  CatalogPage,
  SingleTitlePage
} from 'pages';

export const App: FC = () => {
  const router = createBrowserRouter([
    {
      path: '', 
      element: <Root />,
      errorElement: <div>error</div>,

      children: [
        { path: '/:id', ...SingleTitlePage },
      ],
    }
  ]);
  
  return <RouterProvider router={router} />;
}