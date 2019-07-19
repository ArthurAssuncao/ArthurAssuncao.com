import { createGlobalStyle } from 'styled-components';
import { ThemeType } from '../../components/themes';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  ${reset}
  html {
    font-size: 10px;
    background-color: ${({ theme }) => theme.palette.neutral[0]};
    margin: 0 auto;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.6rem;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  ::selection {
    background: ${({ theme }) => theme.palette.primary}; /* WebKit/Blink Browsers */
  }
  ::-moz-selection {
    background: ${({ theme }) => theme.palette.primary}; /* Gecko Browsers */
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.primary};
    transition: background-color 0.3s all;
  }

  a:hover {
    color: ${({ theme }) => theme.palette.secondary.darkened[0]};
  }
`;

export default GlobalStyle;
