import React, { useState } from "react";
import * as ReactDOM from "react-dom";

import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./styles";
import { getTheme } from "./utils/themes";
import { useTheme } from "./utils/hooks/useTheme";
import './index.css';
import ToggleButton from './common/components/ToggleButton';

export const App = () => {
  const [theme, toggleTheme, isMounted] = useTheme();

  if (!isMounted) {
    return <div/>
  };

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <>
        <GlobalStyles/>
        <div className="App">
          <header className="App-header">
          Welcome!
          <p>Here is a code example: <code>a = b * c</code></p>
          </header>
          <ToggleButton handleToggle={() => toggleTheme()}></ToggleButton>
        </div>
      </>
    </ThemeProvider>
  )
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
