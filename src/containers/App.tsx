import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './../styles/theme'
import { reset } from 'styled-reset';

import Header from '../components/header/Header';
import HowDo from '../components/how-do/HowDo';
import Projects from '../components/projects/Projects';
import Footer from '../components/footer/Footer'

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  ${reset}
  body {
    background-color: ${({ theme }) => theme.color.bg};
  }
  a {
    text-decoration: none;
    color: white;
  }
  /* other styles */
`


const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <HowDo />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
