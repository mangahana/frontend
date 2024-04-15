import { FC } from 'react';

import './styles.scss';

export const CatalogPage: FC = () => {
  const items = [
    { image: '/images/solo-leveling.jpg', name: 'Дара өрлеу', type: 'Манга' },
    { image: '/images/solo-leveling.jpg', name: 'Дара өрлеу', type: 'Манга' },
    { image: '/images/solo-leveling.jpg', name: 'Дара өрлеу', type: 'Манга' },
    { image: '/images/solo-leveling.jpg', name: 'Дара өрлеу', type: 'Манга' },
    { image: '/images/solo-leveling.jpg', name: 'Дара өрлеу', type: 'Манга' },
    { image: '/images/solo-leveling.jpg', name: 'Дара өрлеу', type: 'Манга' },
    { image: '/images/solo-leveling.jpg', name: 'Дара өрлеу', type: 'Манга' },
    { image: '/images/solo-leveling.jpg', name: 'Дара өрлеу', type: 'Манга' },
    { image: '/images/solo-leveling.jpg', name: 'Дара өрлеу', type: 'Манга' },
    { image: '/images/solo-leveling.jpg', name: 'Дара өрлеу', type: 'Манга' },
    { image: '/images/solo-leveling.jpg', name: 'Дара өрлеу', type: 'Манга' },
    { image: '/images/solo-leveling.jpg', name: 'Дара өрлеу', type: 'Манга' },
    { image: '/images/solo-leveling.jpg', name: 'Дара өрлеу', type: 'Манга' },
    { image: '/images/solo-leveling.jpg', name: 'Дара өрлеу', type: 'Манга' },
    { image: '/images/solo-leveling.jpg', name: 'Дара өрлеу', type: 'Манга' },
    { image: '/images/solo-leveling.jpg', name: 'Дара өрлеу', type: 'Манга' },
    { image: '/images/solo-leveling.jpg', name: 'Дара өрлеу', type: 'Манга' },
    { image: '/images/solo-leveling.jpg', name: 'Дара өрлеу', type: 'Манга' },
  ];
  return (
    <div className='index-page container'>
      <h3>Соңғы тараулар</h3>
      <div className='list'>
        {
          items.map(() => (
            <div className='item'>
              <img src='/images/solo-leveling.jpg' alt='poster' />
              <div className='type'>Манга</div>
              <div className='name'>Дара өрлеу</div>
            </div>
          ))
        }
      </div>
    </div>
  );
};