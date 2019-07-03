import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { ThemeType } from '../components/themes'
import { reset } from 'styled-reset';

import './App.css';

import Header from '../components/header';
import HowDo from '../components/how-do';
import Projects from '../components/projects';
import Footer from '../components/footer'

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  ${reset}
  background-color: ${({ theme }) => theme.palette.neutral[0]};
`


const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <main className='main'>
          <HowDo />
          <Projects />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
