import { ReactNode } from 'react';

const Component = () => {
  return (
    <div className='single-title container'>
      <div>single title</div>
    </div>
  );
};

export const loader = async ({ request, params }: any) => {
  console.log(params.id);
  return {};
}

export const element: ReactNode = <Component />;