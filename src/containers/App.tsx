import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './../styles/theme'
import { reset } from 'styled-reset';

import './App.css';

import Header from '../components/header/Header';
import HowDo from '../components/how-do/HowDo';
import Projects from '../components/projects/Projects';
import Footer from '../components/footer/Footer'

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  ${reset}
  background-color: ${({ theme }) => theme.color.bg};
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
