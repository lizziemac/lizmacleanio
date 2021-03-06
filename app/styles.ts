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

  html {
    height: 100%;
  }

  body {
    position: relative;
    margin: 0;
    min-height: 100%;
    background-color: ${({ theme }: {theme: Theme}): string => theme.primaryColor};
    color: ${({ theme }: {theme: Theme}): string => theme.textColor};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: background-color 1.5s ease;

    @media only screen and (max-width:1000px){
      font-size: ${({ theme }: {theme: Theme}): string => theme.mediaFontSize};
    }
  }

  a {
    color: ${({ theme }: {theme: Theme}): string => theme.linkColor};
  }
  a:visited {
    color: ${({ theme }: {theme: Theme}): string => theme.linkVisitedColor};
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

  * {
    margin: 0;
  }
`;
