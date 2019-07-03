import React from 'react';

import Header from '../components/header';
import HowDo from '../components/how-do';
import Projects from '../components/projects';
import Footer from '../components/footer'

import GlobalStyle from './GlobalStyle';
import AppStyle from './App.style';



const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppStyle className="App">
        <Header />
        <main className='main'>
          <HowDo />
          <Projects />
        </main>
        <Footer />
      </AppStyle>
    </>
  );
}

export default App;
