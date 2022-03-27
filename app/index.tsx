import React, { useState } from "react";
import * as ReactDOM from "react-dom";

import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyles } from "./styles";
import { getTheme } from "./utils/themes";
import { useTheme } from "./utils/hooks/useTheme";

import Pages from './pages';

export const App = () => {
  const { theme, toggleTheme, isMounted } = useTheme();

  if (!isMounted) {
    return <div/>
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={getTheme(theme)}>
        <GlobalStyles/>
        <Pages toggleTheme={toggleTheme}/>
      </ThemeProvider>
    </BrowserRouter>
  )
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);