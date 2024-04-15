import { Header } from 'components/Header';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import './global.scss';

export const Root: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};