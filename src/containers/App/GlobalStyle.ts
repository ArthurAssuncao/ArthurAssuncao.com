import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { ThemeType } from '../../components/themes';

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  ${reset}
  html {
    font-size: 10px;
    background-color: ${({ theme }) => theme.palette.neutral[0]};
    margin: 0 auto;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.6rem;
    
  }

  @media (min-width: 0px) {
    body {
      width: 100vw;
      margin: 0 auto;
    }
  }

  @media (min-width: 768px) {
    body {
      width: 98vw;
      margin: 0 auto;
      box-shadow: 0 0 5px 0 ${(props) =>
    props.theme.palette.grayscale.darkened};
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  ::selection {
    background: ${({ theme }) =>
    theme.palette.primary}; /* WebKit/Blink Browsers */
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

  .hidden {
    display: none;
  }

`;

export default GlobalStyle;
