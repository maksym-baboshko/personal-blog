import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routesConfig } from '@app/config/router';

const AppRouter = () => {
  return (
    <div className='page-wrapper'>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {Object.values(routesConfig).map(({ path, element }) => {
            return <Route key={path} path={path} element={element} />;
          })}
        </Routes>
      </Suspense>
    </div>
  );
};

export default AppRouter;
