import React, { ReactElement, Suspense } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

const Navigation = React.lazy(() => import('./Navigation'));
const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));
const NotFound = React.lazy(() => import('./NotFound'));

interface PagesProps {
  toggleTheme: () => void;
}

const Pages = (props: PagesProps): ReactElement => (
  <Suspense fallback={<div>Loading...</div>}>
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