import { ReactElement, Suspense, lazy } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import Loader from 'app/common/components/Loader';
import Footer from './Footer';

const Navigation = lazy(() => import('./Navigation'));
const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const NotFound = lazy(() => import('./NotFound'));

interface PagesProps {
  toggleTheme: () => void;
}

const Pages = (props: PagesProps): ReactElement => (
  <Suspense fallback={<Loader />}>
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '105vh' }}>
      <Routes>
        <Route path="/" element={
          <>
            <Navigation toggleTheme={props.toggleTheme}/>
            <Outlet />
          </>
        }>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
      <div style={{ paddingTop: '1em' }}>
        <Footer />
      </div>
    </div>
  </Suspense>
);

export default Pages;