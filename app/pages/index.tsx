import React, { ReactElement, Suspense } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { DEFAULT_DELAY_MS } from 'app/common/constants';
import Loader from 'app/common/components/Loader';
import { smoothLazy } from 'app/common/helpers';


const Navigation = smoothLazy(() => import('./Navigation'), DEFAULT_DELAY_MS);
const Home = smoothLazy(() => import('./Home'), DEFAULT_DELAY_MS);
const About = smoothLazy(() => import('./About'), DEFAULT_DELAY_MS);
const NotFound = smoothLazy(() => import('./NotFound'), DEFAULT_DELAY_MS);

interface PagesProps {
  toggleTheme: () => void;
}

const Pages = (props: PagesProps): ReactElement => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={
        <>
          <Navigation toggleTheme={props.toggleTheme}/>
          <Outlet />
        </>
      }>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Suspense>
);

export default Pages;