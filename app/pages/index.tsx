import { Outlet, Route, Routes } from 'react-router-dom';

import About from './About';
import Home from './Home';
import NotFound from './NotFound';
import Navigation from './Navigation';


interface PagesProps {
  toggleTheme: () => void;
}

const Pages = (props: PagesProps) => (
  <div>
    <Routes>
      <Route path="/" element={
        <div className="App">
          <Navigation toggleTheme={props.toggleTheme}/>
          <Outlet />
        </div>
      }>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </div>
);

export default Pages;