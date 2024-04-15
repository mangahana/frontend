import { FC } from 'react';

import './styles.scss';
import { Link } from 'react-router-dom';
import { User } from './User';

export const Header: FC = () => {
  return (
    <header>
      <div className='container'>
        <Link className='logo' to={'/'}>mangahana</Link>

        {/* <nav>
          <Link className='item' to={'/'}>Басты бет</Link>
          <Link className='item' to={'/'}>Каталог</Link>
          <Link className='item' to={'/'}>FAQ</Link>
        </nav> */}

        <User />
      </div>
    </header>
  );
};