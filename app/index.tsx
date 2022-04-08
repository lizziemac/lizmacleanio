import React, { ReactElement } from 'react';
import * as ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from './styles';
import { getTheme } from 'app/utils/themes';
import { useTheme } from 'app/utils/hooks/useTheme';

import Pages from './pages';

export const App = ({ callback }: { callback: () => void}): ReactElement => {
  const { theme, toggleTheme, isMounted } = useTheme();

  if (!isMounted) {
    return <div/>;
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={getTheme(theme)}>
        <GlobalStyles/>
        <div ref={callback}>
          <Pages toggleTheme={toggleTheme}/>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('app')
  || document.createElement('div')  // for testing purposes
);
root.render(
  <React.StrictMode>
    <App callback={(): void => document.body.classList.remove('preload')}/>
  </React.StrictMode>
);