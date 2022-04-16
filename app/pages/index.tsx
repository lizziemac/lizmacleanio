import React, { ReactElement, Suspense } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));
const NotFound = React.lazy(() => import('./NotFound'));
const Navigation = React.lazy(() => import('./Navigation'));

interface PagesProps {
  toggleTheme: () => void;
}

const Pages = (props: PagesProps): ReactElement => (
  <div>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={
          <div>
            <Navigation toggleTheme={props.toggleTheme}/>
            <Outlet />
          </div>
        }>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  </div>
);

export default Pages;