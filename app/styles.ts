import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { Theme } from 'app/utils/themes';

export const GlobalStyles = createGlobalStyle<DefaultTheme>`
  .smooth {
    background-color: ${({ theme }: {theme: Theme}): string => theme.primaryColor};
  }

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
    transition: background-color 1.5s ease;

    @media only screen and (max-width:1000px){
      font-size: ${({ theme }: {theme: Theme}): string => theme.mediaFontSize};
    }

  }

  h1 {
    text-align: center;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    background-color: ${({ theme }: {theme: Theme}): string => theme.primaryDarkColor};
    transition: background-color 1.5s ease;
    border-radius: 6px;
  }
`;
