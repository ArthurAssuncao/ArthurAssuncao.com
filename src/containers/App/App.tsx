import React from 'react';

import Footer from '../Footer';
import Header from '../Header';
import HowDo from '../HowDo';
import Projects from '../Projects';
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
