import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle<any>`
  body {
    margin: 0;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.complementary};
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
`
