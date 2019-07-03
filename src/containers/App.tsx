import React from 'react';

import Footer from '../components/footer';
import Header from '../components/header';
import HowDo from '../components/how-do';
import Projects from '../components/projects';
import AppStyle from './App.style';
import GlobalStyle from './GlobalStyle';

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
