import { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import { useTheme } from './theme/useTheme';
import { MainAsync } from './pages/Main/Main.async';
import { AboutAsync } from './pages/About/About.async';
import { classNames } from './utils/classNames/classNames';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>

      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainAsync />} />
          <Route path='/about' element={<AboutAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
