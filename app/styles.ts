import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { Theme } from 'app/utils/themes';

export const GlobalStyles = createGlobalStyle<DefaultTheme>`
  .preload {
    transition: background-color 0s !important;
    -webkit-transition: background-color 0s !important;
    -moz-transition: background-color 0s !important;
    -ms-transition: background-color 0s !important;
    -o-transition: background-color 0s !important;
  }
  
  body {
    margin: 0;
    background-color: ${({ theme }: {theme: Theme}): string => theme.primaryColor};
    color: ${({ theme }: {theme: Theme}): string => theme.textColor};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: background-color 1.5s linear;

    @media only screen and (max-width:1000px){
      font-size: ${({ theme }: {theme: Theme}): string => theme.mediaFontSize};
    }
    
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
    font-size: ${({ theme }: {theme: Theme}): string => theme.fontSize};
  }
`;
