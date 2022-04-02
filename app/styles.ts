import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { Theme } from './utils/themes';

export const GlobalStyles = createGlobalStyle<DefaultTheme>`
  body {
    margin: 0;
    background: ${({ theme }: {theme: Theme}): string => theme.primary};
    color: ${({ theme }: {theme: Theme}): string => theme.complementary};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  .App {
    text-align: center;
  }

  .App-header {
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }
`;
